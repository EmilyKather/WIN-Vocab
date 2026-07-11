let vocabDB = [];
let lessonOrder = []; 
let students = [];
let currentStudentIndex = 0;
let eligibleWords = [];
let availableWords = []; 
let currentWord = null;
let maxWordsPerStudent = 50;
let currentUserRole = null; // Biến lưu trữ vai trò (teacher/student)

document.addEventListener('DOMContentLoaded', () => {
    // 0. GẮN SỰ KIỆN CHO MÀN HÌNH CHỌN VAI TRÒ VÀ NÚT SIGN OUT
    document.getElementById('btn-role-teacher').addEventListener('click', () => selectRole('teacher'));
    document.getElementById('btn-role-student').addEventListener('click', () => selectRole('student'));
    
    // Nút Sign Out: Reset lại hoàn toàn web để đảm bảo sạch dữ liệu, không bị lỗi lưu cache bài test cũ
    document.getElementById('btn-signout').addEventListener('click', () => {
        location.reload(); 
    });

    // 1. LOAD DATA TỪ 2 NGUỒN
    if (typeof rawQuizletData !== 'undefined') parseData(rawQuizletData, 'Quizlet');
    if (typeof rawHomeworkData !== 'undefined') parseData(rawHomeworkData, 'Homework');

    // Cập nhật số từ hiển thị
    document.getElementById('total-words-count').innerText = vocabDB.length;

    // 2. KHỞI TẠO GIAO DIỆN LẦN ĐẦU
    updateDropdown();
    
    // Load Settings đã lưu
    let savedQuota = localStorage.getItem('wordsQuota');
    if(savedQuota) document.getElementById('words-per-student').value = savedQuota;
    
    let savedTestOnly = localStorage.getItem('testOnlyCurrent');
    if(savedTestOnly === 'true') document.getElementById('test-only-current').checked = true;

    // 3. ĐĂNG KÝ SỰ KIỆN LẮNG NGHE (Event Listeners)
    // Khi click chọn lại nguồn từ vựng
    document.getElementById('src-quizlet').addEventListener('change', updateDropdown);
    document.getElementById('src-homework').addEventListener('change', updateDropdown);
    // Khi chọn bài học khác
    document.getElementById('test-lesson').addEventListener('change', updateDynamicLabel);

    // Sự kiện nút bấm Test
    document.getElementById('btn-start').addEventListener('click', startTest);
    document.getElementById('flashcard').addEventListener('click', flipCard);
    document.getElementById('btn-correct').addEventListener('click', () => markAnswer(true));
    document.getElementById('btn-wrong').addEventListener('click', () => markAnswer(false));
    document.getElementById('btn-skip').addEventListener('click', skipWord);
    document.getElementById('btn-end').addEventListener('click', endTest);
    
    document.getElementById('dashboard-body').addEventListener('click', (e) => {
        if(e.target.classList.contains('btn-remove')) {
            let index = parseInt(e.target.getAttribute('data-index'));
            removeStudent(index);
        }
    });
});

// HÀM XỬ LÝ CHỌN VAI TRÒ (MỚI)
function selectRole(role) {
    currentUserRole = role;
    
    // Chuyển đổi màn hình
    document.getElementById('role-view').style.display = 'none';
    document.getElementById('setup-view').style.display = 'block';
    
    // Hiện nút Sign Out
    document.getElementById('btn-signout').style.display = 'block';

    if (role === 'student') {
        // Ẩn UI chọn số lượng học viên và mặc định gán = 1 để code cũ không bị lỗi
        document.getElementById('group-num-students').style.display = 'none';
        document.getElementById('num-students').value = 1;
    } else {
        // Nếu là giáo viên thì hiện đầy đủ
        document.getElementById('group-num-students').style.display = 'block';
    }
}

// Hàm dùng chung để tách dữ liệu Text
function parseData(rawData, sourceName) {
    let lines = rawData.trim().split('\n');
    let currentLesson = "";

    for (let line of lines) {
        line = line.trim();
        if (!line) continue;

        let upperLine = line.toUpperCase();
        // CẬP NHẬT: Quét các bài có chữ DAY, READING hoặc PART (cho bài Listening)
        if (/^(DAY|READING|PART)\s+\d+/i.test(line)) {
            currentLesson = line;
            // Lưu vào danh sách thứ tự bài
            if (!lessonOrder.find(l => l.name === currentLesson && l.source === sourceName)) {
                lessonOrder.push({ name: currentLesson, source: sourceName });
            }
        } 
        // Nhận diện Từ vựng
        else if (line.includes(' - ')) {
            let splitIndex = line.indexOf(' - ');
            let en = line.substring(0, splitIndex).trim();
            let vi = line.substring(splitIndex + 3).trim();
            vocabDB.push({ lesson: currentLesson, source: sourceName, en: en, vi: vi });
        }
    }
}

// Cập nhật thẻ Select Dropdown dựa trên 2 Checkbox
function updateDropdown() {
    let select = document.getElementById('test-lesson');
    select.innerHTML = ''; // Xoá cũ

    let showQuizlet = document.getElementById('src-quizlet').checked;
    let showHomework = document.getElementById('src-homework').checked;

    let quizletGroup = document.createElement('optgroup');
    quizletGroup.label = "Quizlet Vocab";
    
    let hwGroup = document.createElement('optgroup');
    hwGroup.label = "Homework Vocab";

    // Duyệt qua danh sách bài học và đưa vào Group tương ứng
    lessonOrder.forEach((lesson, index) => {
        // Dùng index làm value để xíu nữa xét logic "Mix previous" cho dễ
        let opt = new Option(lesson.name, index); 
        
        if (lesson.source === 'Quizlet' && showQuizlet) {
            quizletGroup.appendChild(opt);
        }
        if (lesson.source === 'Homework' && showHomework) {
            hwGroup.appendChild(opt);
        }
    });

    if (showQuizlet && quizletGroup.children.length > 0) select.appendChild(quizletGroup);
    if (showHomework && hwGroup.children.length > 0) select.appendChild(hwGroup);

    updateDynamicLabel(); // Đổi label cho khớp với Option đầu tiên hiện ra
}

// Đổi chữ "Chỉ kiểm tra bài..." tự động (Sửa thành Tiếng Việt theo yêu cầu)
function updateDynamicLabel() {
    let select = document.getElementById('test-lesson');
    let label = document.getElementById('lbl-only-current');
    
    if (select.options.length > 0) {
        let lessonName = select.options[select.selectedIndex].text;
        label.innerText = `Chỉ kiểm tra bài ${lessonName} (Không mix bài cũ)`;
    } else {
        label.innerText = `Chỉ kiểm tra bài học này (Không mix bài cũ)`;
    }
}

// SHUFFLE FUNCTION (No duplicates)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// --- LOGIC TEST ---
function startTest() {
    let showQuizlet = document.getElementById('src-quizlet').checked;
    let showHomework = document.getElementById('src-homework').checked;

    if (!showQuizlet && !showHomework) {
        return alert("❌ Lỗi: Vui lòng chọn ít nhất 1 nguồn từ vựng (Quizlet hoặc Homework)!");
    }

    let select = document.getElementById('test-lesson');
    if (select.options.length === 0) {
        return alert("❌ Lỗi: Không có dữ liệu bài học nào!");
    }

    let selectedIndex = parseInt(select.value); // Lấy index thứ tự của bài đang chọn
    let testOnlyCurrent = document.getElementById('test-only-current').checked;
    let numStudents = parseInt(document.getElementById('num-students').value);
    
    maxWordsPerStudent = parseInt(document.getElementById('words-per-student').value);
    
    // Save settings
    localStorage.setItem('wordsQuota', maxWordsPerStudent);
    localStorage.setItem('testOnlyCurrent', testOnlyCurrent);

    // LỌC TỪ VỰNG LOGIC MỚI
    eligibleWords = vocabDB.filter(v => {
        // Tìm số thứ tự index của bài chứa chữ này
        let wordLessonIndex = lessonOrder.findIndex(l => l.name === v.lesson && l.source === v.source);
        
        // Kiểm tra xem nguồn của chữ này hiện tại có đang được bật không?
        let isSourceActive = (v.source === 'Quizlet' && showQuizlet) || (v.source === 'Homework' && showHomework);
        if (!isSourceActive) return false;

        if (testOnlyCurrent) {
            // Chỉ lấy từ vựng ĐÚNG TRONG BÀI ĐƯỢC CHỌN
            return wordLessonIndex === selectedIndex;
        } else {
            // Lấy từ vựng TỪ BÀI ĐẦU TIÊN TỚI BÀI ĐƯỢC CHỌN
            return wordLessonIndex <= selectedIndex; 
        }
    });

    if (eligibleWords.length === 0) {
        return alert(`❌ Không tìm thấy từ vựng nào thoả mãn thiết lập của bạn! Hãy kiểm tra data.js`);
    }

    // Put words in the active basket and shuffle
    availableWords = [...eligibleWords];
    shuffleArray(availableWords);

    students = [];
    for (let i = 1; i <= numStudents; i++) {
        students.push({
            id: i,
            name: currentUserRole === 'student' ? 'Học viên' : `Student ${i}`,
            correct: 0,
            incorrect: 0,
            testedWords: 0,
            isActive: true
        });
    }

    document.getElementById('setup-view').style.display = 'none';
    document.getElementById('test-view-container').style.display = 'block';
    
    currentStudentIndex = 0;
    updateDashboard();
    nextTurn();
}

function nextTurn() {
    let activeStudents = students.filter(s => s.isActive && s.testedWords < maxWordsPerStudent);
    
    if (activeStudents.length === 0) {
        alert("🎉 Finished! All students have completed their words or been removed.");
        return;
    }

    let found = false;
    for(let i=0; i < students.length; i++) {
        if(students[currentStudentIndex].isActive && students[currentStudentIndex].testedWords < maxWordsPerStudent) {
            found = true;
            break;
        }
        currentStudentIndex = (currentStudentIndex + 1) % students.length;
    }

    let student = students[currentStudentIndex];
    document.getElementById('current-student-name').innerText = student.name;

    if (availableWords.length === 0) {
        availableWords = [...eligibleWords];
        shuffleArray(availableWords);
    }
    currentWord = availableWords.pop();

    document.getElementById('word-en').innerText = currentWord.en;
    document.getElementById('word-vi').innerText = currentWord.vi;
    document.getElementById('word-vi').style.display = 'none';
}

function flipCard() {
    document.getElementById('word-vi').style.display = 'block';
}

function skipWord() {
    if(!currentWord) return;
    
    // Nếu rổ từ vựng trống thì nạp lại
    if (availableWords.length === 0) {
        availableWords = [...eligibleWords];
        shuffleArray(availableWords);
    }
    
    // Bốc từ mới cho sinh viên hiện tại (không cộng/trừ điểm)
    currentWord = availableWords.pop();

    // Hiển thị từ mới lên thẻ
    document.getElementById('word-en').innerText = currentWord.en;
    document.getElementById('word-vi').innerText = currentWord.vi;
    document.getElementById('word-vi').style.display = 'none';
}

function markAnswer(isCorrect) {
    if(!currentWord) return;
    let student = students[currentStudentIndex];

    if (isCorrect) {
        student.correct++;
    } else {
        student.incorrect++;
    }
    student.testedWords++;

    updateDashboard();
    currentStudentIndex = (currentStudentIndex + 1) % students.length;
    nextTurn();
}

function updateDashboard() {
    let tbody = document.getElementById('dashboard-body');
    tbody.innerHTML = '';

    students.forEach((student, index) => {
        let total = student.correct + student.incorrect;
        let accuracy = total === 0 ? 0 : Math.round((student.correct / total) * 100);
        
        let rowStyle = !student.isActive ? 'background-color: #E5E7EB; color: #9CA3AF;' : '';
        let status = !student.isActive ? 'Removed' : `${student.testedWords}/${maxWordsPerStudent}`;

        let actionHtml = student.isActive 
            ? `<button class="btn-remove" data-index="${index}">Stop</button>` 
            : 'Done';

        let tr = `<tr style="${rowStyle}">
            <td><strong>${student.name}</strong></td>
            <td>${status}</td>
            <td style="color: #10B981; font-weight:bold;">${student.correct}</td>
            <td style="color: #EF4444; font-weight:bold;">${student.incorrect}</td>
            <td><strong>${accuracy}%</strong></td>
            <td>${actionHtml}</td>
        </tr>`;
        tbody.innerHTML += tr;
    });
}

function removeStudent(index) {
    students[index].isActive = false;
    updateDashboard();
    
    if(currentStudentIndex === index) {
         currentStudentIndex = (currentStudentIndex + 1) % students.length;
         nextTurn();
    }
}

function endTest() {
    document.getElementById('setup-view').style.display = 'block';
    document.getElementById('test-view-container').style.display = 'none';
}