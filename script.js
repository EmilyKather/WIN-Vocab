let vocabDB = [];
let lessonOrder = []; 
let students = [];
let currentStudentIndex = 0;
let eligibleWords = [];
let availableWords = []; 
let currentWord = null;
let maxWordsPerStudent = 50;
let currentUserRole = null; // Biến lưu trữ vai trò (teacher/student)
let actionHistory = []; // Biến lưu lịch sử để làm nút BACK
let revisionList = []; // Danh sách từ cần ôn tập (Mũi tên Xuống)
let totalSessionWords = 0; // Tổng số từ trong phiên học
let currentWordCount = 1; // Vị trí thẻ hiện tại

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
    // Khi click chọn checkbox "Chỉ kiểm tra bài này"
    document.getElementById('test-only-current').addEventListener('change', updateDynamicLabel);

    // Sự kiện nút bấm Test
    document.getElementById('btn-start').addEventListener('click', startTest);
    document.getElementById('flashcard').addEventListener('click', flipCard);
    
    document.getElementById('btn-speak').addEventListener('click', (e) => {
        e.stopPropagation(); 
        speakWord();
    });

  // LẮNG NGHE PHÍM TẮT ĐIỀU HƯỚNG
    document.addEventListener('keydown', (e) => {
        if (document.getElementById('test-view-container').style.display === 'block') {
            if (['Space', ' ', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key) || e.code === 'Space') {
                e.preventDefault();
            }

            if (e.code === 'Space' || e.key === ' ') {
                let meaningDiv = document.getElementById('word-vi');
                if (meaningDiv.style.display === 'none' || meaningDiv.style.display === '') {
                    flipCard(); speakWord();
                } else {
                    markAnswer(true); // Space lần 2: Đạt
                }
            }
            else if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
                markAnswer(true); // Mũi tên Phải hoặc Lên: Đạt
            }
            else if (e.key === 'ArrowDown') {
                markAnswer(false); // Mũi tên Xuống: Cần ôn tập (Sai)
            }
            else if (e.key === 'ArrowLeft') {
                goBack(); // Mũi tên Trái: Hoàn tác
            }
        }
    });

    document.getElementById('btn-back').addEventListener('click', goBack);
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
        // Đổi chữ hiển thị thành của học viên
        document.getElementById('lbl-words').innerText = 'Số từ vựng muốn ôn:';
    } else {
        // Nếu là giáo viên thì hiện đầy đủ
        document.getElementById('group-num-students').style.display = 'block';
        // Đổi chữ hiển thị thành của giáo viên
        document.getElementById('lbl-words').innerText = 'Số từ vựng muốn kiểm:';
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
        // CẬP NHẬT: Quét các bài có chữ DAY, READING, PART hoặc ETS
        if (/^(DAY|READING|PART|ETS)\s+\d+/i.test(line)) {
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

// Đổi chữ "Chỉ kiểm tra bài..." tự động và CẬP NHẬT SỐ MAX TỪ VỰNG
function updateDynamicLabel() {
    let select = document.getElementById('test-lesson');
    let label = document.getElementById('lbl-only-current');
    
    if (select.options.length > 0) {
        let lessonName = select.options[select.selectedIndex].text;
        label.innerText = `Chỉ kiểm tra bài ${lessonName} (Không mix bài cũ)`;
    } else {
        label.innerText = `Chỉ kiểm tra bài học này (Không mix bài cũ)`;
    }

    // TÍNH TOÁN SỐ TỪ VỰNG TỐI ĐA CHO HIỂN THỊ UI
    let showQuizlet = document.getElementById('src-quizlet').checked;
    let showHomework = document.getElementById('src-homework').checked;
    let maxWordsLabel = document.getElementById('max-words-info');
    
    if (!maxWordsLabel) return; // Đề phòng HTML chưa load xong

    if (select.options.length === 0) {
        maxWordsLabel.innerText = `(Max: 0)`;
        return;
    }

    let selectedIndex = parseInt(select.value);
    let testOnlyCurrent = document.getElementById('test-only-current').checked;
    
    let tempEligibleWords = vocabDB.filter(v => {
        let wordLessonIndex = lessonOrder.findIndex(l => l.name === v.lesson && l.source === v.source);
        let isSourceActive = (v.source === 'Quizlet' && showQuizlet) || (v.source === 'Homework' && showHomework);
        if (!isSourceActive) return false;

        if (testOnlyCurrent) return wordLessonIndex === selectedIndex;
        else return wordLessonIndex <= selectedIndex; 
    });

    maxWordsLabel.innerText = `(Max: ${tempEligibleWords.length})`;
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
    
    document.getElementById('flashcard').style.display = 'flex';
    document.querySelector('.controls').style.display = 'flex';
    document.getElementById('btn-speak').style.display = 'flex';
    document.getElementById('revision-container').style.display = 'none';

    currentStudentIndex = 0;
    actionHistory = []; 
    revisionList = [];
    currentWordCount = 1;
    totalSessionWords = Math.min(availableWords.length, numStudents * maxWordsPerStudent);
    if(currentUserRole === 'student') totalSessionWords = Math.min(availableWords.length, maxWordsPerStudent);

    updateDashboard();
    nextTurn();
}

function nextTurn() {
    let activeStudents = students.filter(s => s.isActive && s.testedWords < maxWordsPerStudent);
    
    if (activeStudents.length === 0 || availableWords.length === 0) {
        handleSessionEnd();
        return;
    }

    let found = false;
    for(let i=0; i < students.length; i++) {
        if(students[currentStudentIndex].isActive && students[currentStudentIndex].testedWords < maxWordsPerStudent) {
            found = true; break;
        }
        currentStudentIndex = (currentStudentIndex + 1) % students.length;
    }

    let student = students[currentStudentIndex];
    document.getElementById('current-student-name').innerText = student.name;
    currentWord = availableWords.pop();

    let tracker = document.getElementById('progress-tracker');
    if (currentUserRole === 'student') {
        tracker.innerText = `Từ vựng: ${currentWordCount} / ${totalSessionWords}`;
        tracker.style.display = 'block';
    } else {
        tracker.style.display = 'none';
    }

    document.getElementById('word-en').innerText = currentWord.en;
    document.getElementById('word-vi').innerText = currentWord.vi;
    document.getElementById('word-vi').style.display = 'none';
}

function handleSessionEnd() {
    if (currentUserRole === 'student') {
        let passed = totalSessionWords - revisionList.length;
        document.getElementById('flashcard').style.display = 'none';
        document.querySelector('.controls').style.display = 'none';
        document.getElementById('btn-speak').style.display = 'none';
        document.getElementById('progress-tracker').style.display = 'none';
        document.getElementById('current-student-name').innerText = "KẾT QUẢ PHIÊN HỌC";
        document.getElementById('revision-container').style.display = 'block';
        
        if (revisionList.length > 0) {
            document.getElementById('revision-summary').innerHTML = `Đạt: <span style="color:#10B981; font-weight:bold;">${passed}</span> | Cần ôn tập: <span style="color:#EF4444; font-weight:bold;">${revisionList.length}</span>`;
            document.getElementById('btn-revision').style.display = 'inline-block';
        } else {
            document.getElementById('revision-summary').innerHTML = `🏆 XUẤT SẮC! BẠN ĐẠT 100% TỪ VỰNG!<br><br>Đạt: <span style="color:#10B981">${passed}</span> | Cần ôn tập: 0`;
            document.getElementById('btn-revision').style.display = 'none';
        }
        document.getElementById('btn-restart-all').style.display = 'inline-block'; // Luôn hiện nút Ôn Lại Toàn Bộ
    } else {
        alert("🎉 Finished! All students have completed their words or been removed.");
        endTest();
    }
}

function startRevision() {
    availableWords = [...revisionList];
    shuffleArray(availableWords);
    totalSessionWords = revisionList.length;
    maxWordsPerStudent = totalSessionWords;
    currentWordCount = 1;
    revisionList = [];
    students[0].testedWords = 0;
    
    document.getElementById('revision-container').style.display = 'none';
    document.getElementById('flashcard').style.display = 'flex';
    document.querySelector('.controls').style.display = 'flex';
    document.getElementById('btn-speak').style.display = 'flex';
    nextTurn();
}

function restartAll() {
    availableWords = [...eligibleWords]; // Lấy lại toản bộ từ vựng ban đầu của bài test
    shuffleArray(availableWords);
    
    totalSessionWords = Math.min(eligibleWords.length, parseInt(document.getElementById('words-per-student').value));
    maxWordsPerStudent = totalSessionWords;
    currentWordCount = 1;
    revisionList = [];
    
    students[0].testedWords = 0;
    students[0].correct = 0;
    students[0].incorrect = 0;
    
    updateDashboard(); // Reset lại bảng điểm
    
    document.getElementById('revision-container').style.display = 'none';
    document.getElementById('flashcard').style.display = 'flex';
    document.querySelector('.controls').style.display = 'flex';
    document.getElementById('btn-speak').style.display = 'flex';
    nextTurn();
}

function flipCard() {
    document.getElementById('word-vi').style.display = 'block';
}

function skipWord() {
    if(!currentWord) return;
    actionHistory.push({ word: currentWord, studentIndex: currentStudentIndex, action: 'skip' });
    if (availableWords.length === 0) { handleSessionEnd(); return; }
    
    currentWord = availableWords.pop();
    document.getElementById('word-en').innerText = currentWord.en;
    document.getElementById('word-vi').innerText = currentWord.vi;
    document.getElementById('word-vi').style.display = 'none';
}

function markAnswer(isCorrect) {
    if(!currentWord) return;
    actionHistory.push({ word: currentWord, studentIndex: currentStudentIndex, action: isCorrect ? 'correct' : 'wrong' });

    if (!isCorrect && currentUserRole === 'student') revisionList.push(currentWord);

    let student = students[currentStudentIndex];
    if (isCorrect) student.correct++;
    else student.incorrect++;
    
    student.testedWords++;
    currentWordCount++;
    updateDashboard();
    currentWord = null;
    currentStudentIndex = (currentStudentIndex + 1) % students.length;
    nextTurn();
}

// --- TÍNH NĂNG NÚT BACK (QUAY LẠI TỪ VỪA CHẤM) ---
function goBack() {
    if (actionHistory.length === 0) {
        return;
    }

    // 1. Trả từ hiện tại (từ chưa test) lại vào rổ để lần sau test tiếp
    if (currentWord) {
        availableWords.push(currentWord);
    }

    // 2. Lấy hành động gần nhất từ lịch sử ra
    let lastAction = actionHistory.pop();
    
    // 3. Khôi phục từ vựng và lượt của học sinh đó
    currentWord = lastAction.word;
    currentStudentIndex = lastAction.studentIndex;

    // 4. Nếu trước đó là chấm Đúng/Sai thì phải TRỪ ĐIỂM đi
    if (lastAction.action !== 'skip') {
        currentWordCount--; // Lùi biến đếm UI
        let student = students[currentStudentIndex];
        student.testedWords--;
        if (lastAction.action === 'correct') {
            student.correct--;
        } else if (lastAction.action === 'wrong') {
            student.incorrect--;
            if (currentUserRole === 'student') revisionList.pop(); // Rút từ khỏi danh sách ôn tập
        }
    }

    // 5. Cập nhật lại toàn bộ giao diện
    updateDashboard();
    if (currentUserRole === 'student') {
        document.getElementById('progress-tracker').innerText = `Từ vựng: ${currentWordCount} / ${totalSessionWords}`;
    }
    document.getElementById('current-student-name').innerText = students[currentStudentIndex].name;
    document.getElementById('word-en').innerText = currentWord.en;
    document.getElementById('word-vi').innerText = currentWord.vi;
    document.getElementById('word-vi').style.display = 'none';
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
// Tải sẵn danh sách giọng đọc của trình duyệt để không bị delay
window.speechSynthesis.getVoices();
if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
}

// --- TÍNH NĂNG ĐỌC TỪ VỰNG (WEB SPEECH API - BẢN ÉP GIỌNG XỊN) ---
function speakWord() {
    if (!currentWord || !currentWord.en) return;
    
    // 1. Lọc bỏ các ký tự trong ngoặc đơn như (n), (v)
    // 2. Lọc bỏ các dấu "=" (thay bằng dấu phẩy theo đúng yêu cầu)
    let textToRead = currentWord.en.replace(/[\(\[].*?[\)\]]/g, '').replace(/=/g, ',').trim();
    let utterance = new SpeechSynthesisUtterance(textToRead);
    
    let voices = window.speechSynthesis.getVoices();
    
    // Ưu tiên các giọng NAM (Male) tiếng Anh của Google hoặc Microsoft
    let maleVoice = voices.find(v => v.lang.includes('en') && v.name.includes('Male')) 
                 || voices.find(v => v.lang.includes('en') && v.name.includes('David'))
                 || voices.find(v => v.lang.includes('en') && v.name.includes('Guy'))
                 || voices.find(v => v.lang.includes('en-GB')) // Nếu ko có giọng nam rành mạch, lấy giọng Anh-Anh nghe cũng trầm hơn
                 || voices.find(v => v.lang === 'en-US');      // Dự phòng cuối cùng
                 
    if (maleVoice) {
        utterance.voice = maleVoice;
    } else {
        utterance.lang = 'en-US';
    }
    
    utterance.rate = 0.9;     
    
    window.speechSynthesis.speak(utterance);
}
