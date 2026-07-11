// File chứa dữ liệu từ vựng - Dán text copy từ sách/Word vào giữa 2 dấu ` `
const rawQuizletData = `
DAY 1
noun (n) - danh từ
countable noun - danh từ đếm được
uncountable noun - danh từ không đếm được
verb (v) - động từ
intransitive verb - nội động từ (là động từ không đi kèm với tân ngữ)
transitive verb - ngoại động từ (là động từ đi kèm với tân ngữ)
adjective (a) - tính từ
adverb (adv) - trạng từ
preposition (prep) - giới từ
pronoun - đại từ
phrasal verb - cụm động từ
modal verb - động từ khuyết thiếu (will/would/can/could/may/might/should/must/have to)
subject (S) - chủ từ (chủ ngữ)
object (O) - tân ngữ (túc từ)
clause - mệnh đề (S + V + O)
conjunction - liên từ (là từ nối hai mệnh đề)
relative clause - mệnh đề quan hệ ( who/whom/which/that/whose )
vocabulary (n) - từ vựng
grammar (n) - ngữ pháp
synonym (n) - từ đồng nghĩa
antonym (n) - từ trái nghĩa
dictionary (n) - từ điển
DAY 2
kitchen = dining room (n) - nhà bếp
chef (n) - đầu bếp
cooking utensils = cookware (n) - dụng cụ nấu ăn (nói chung)
apron (n) - tạp dề
knife (n) - con dao
fork (n) - cái nĩa
scissors (n) - cái kéo
spoon (n) - cái muỗng, cái thìa
chopsticks (n) - đôi đũa
bowl (n) - cái tô, cái chén
plate = dish (n) - cái đĩa
mug (n) - cái ly có tay cầm
glass (n) - cái ly thủy tinh
jar (n) - cái lọ, cái hũ
pitcher (n) - bình rót nước
measuring cup (n) - cốc đo lường
pot (n) - cái nồi / cái chậu (trồng cây)
pan (n) - cái chảo
ladle (n) - cái vá, cái muôi
can opener (n) - đồ khui hộp
cutting board (n) - cái thớt
sink (n) - bồn rửa chén
faucet (n) - vòi nước
oven = microwave (n) - lò nướng, lò vi sóng
toaster (n) - máy nướng bánh mì
blender (n) - máy xay sinh tố
cabinet (n) - cái tủ
countertop (n) - mặt bếp
stove (n) - cái bếp
peel (v) - gọt vỏ
soak (v) - ngâm
bake (v) - nướng (bằng lò)
boil (v) - luộc (boiling water = nước sôi)
slice (v) - cắt lát
mix (v) - trộn
fry (v) - chiên, rán
steam (v) - hấp
grill (v) - nướng (bằng than)
spread out (v) - trải ra, phết ra
crush (v) - nghiền nát
flavor (n) - hương vị, mùi vị
sour (a) - chua
spicy (a) - cay
salty (a) - mặn
bitter (a) - đắng
delicious (a) - ngon
DAY 3
transportation (n) - phương tiện giao thông
public transportation (n) - phương tiện công cộng
vehicle (n) - xe cộ
truck (n) - xe tải
van (n) - xe tải nhỏ
bicycle = bike (n) - xe đạp
motorcycle = motorbike (n) - xe máy
scooter (n) - xe tay ga
shuttle bus (n) - xe buýt đưa đón
subway (n) - tàu điện ngầm
airplane = plane (n) - máy bay
helicopter (n) - trực thăng
boat = ship (n) - thuyền nhỏ (boat) / tàu lớn (ship)
cruise (n) - du thuyền
ferry (n) - phà
traffic (n) - giao thông
traffic jam = traffic congestion (n) - tắc đường, kẹt xe
traffic light (n) - đèn giao thông
streetlamp (n) - đèn đường
sign (n) - biển hiệu, biển báo
pedestrian (n) - người đi bộ
crosswalk (n) - vạch qua đường
commuter (n) - người đi lại (những người di chuyển trên đường)
intersection (n) - giao lộ (ngã ba, ngã tư)
lane (n) - làn đường
sidewalk = pavement (n) - vỉa hè
highway (n) - đường cao tốc
bridge (n) - cây cầu
tunnel (n) - đường hầm
ride (v) - cưỡi (ngựa), lái (xe hai bánh)
drive (v) - lái xe (bốn bánh)
driver (n) - tài xế
board (v) - đi lên phương tiện giao thông
disembark (v) - đi xuống phương tiện giao thông
commute (v) - đi lại
passenger (n) - hành khách
cargo (n) - hàng hóa (vận chuyển bằng tàu hoặc máy bay)
fuel (n) - nhiên liệu
toll booth (n) - trạm thu phí
toll (n) - phí, lệ phí
carpool (n/v) - đi chung xe
driver's license (n) - giấy phép lái xe
DAY 4
house (n) - ngôi nhà
gate (n) - cái cổng
fence (n) - hàng rào
roof (n) - mái nhà
floor (n) - sàn nhà/ tầng
ceiling (n) - trần nhà
patio = porch (n) - hiên nhà
furniture (n) - đồ nội thất
living room (n) - phòng khách
chair (n) - ghế
desk (n) - cái bàn
sofa = couch (n) - ghế sofa
armchair (n) - ghế bành
bookshelf (n) - kệ sách
carpet = rug = mat (n) - cái thảm lót sàn
curtain (n) - rèm cửa
cushion (n) - gối ôm, gối tựa
remote control (n) - điều khiển từ xa
stool (n) - ghế đẩu (ghế không lưng tựa)
bedroom (n) - phòng ngủ
bed (n) - cái giường
pillow (n) - cái gối
blanket (n) - cái chăn
closet = wardrobe (n) - tủ quần áo
mirror (n) - cái gương
mattress (n) - cái đệm
bed linens (n) - bộ chăn ga gối đệm
nightstand (n) - tủ đầu giường
bathroom (n) - phòng tắm
bathtub (n) - bồn tắm
shower (n) - vòi sen
towel (n) - khăn tắm
toothbrush (n) - bàn chải đánh răng
toothpaste (n) - kem đánh răng
soap (n) - xà phòng
shampoo (n) - dầu gội đầu
toilet paper (n) - giấy vệ sinh
hair dryer (n) - máy sấy tóc
laundry room (n) - phòng giặt ủi
washing machine = washer (n) - máy giặt
dryer (n) - máy sấy quần áo
iron (n) - bàn ủi, bàn là
laundry basket (n) - giỏ đựng đồ giặt
garage (n) - nhà để xe
DAY 5
supermarket (n) - siêu thị
shopping mall (n) - trung tâm mua sắm
department store = grocery store (n) - cửa hàng bách hóa / cửa hàng tạp hóa
clothing store = boutique (n) - cửa hàng quần áo
pharmacy (n) - hiệu thuốc, tiệm thuốc
jewelry store (n) - cửa hàng trang sức
buy >< sell (v) - mua >< bán
purchase (n/v) - mua sắm, sự mua hàng
pay (v) - trả tiền, thanh toán
return (n/v) - trả lại hàng
refund (v) - hoàn tiền
exchange (v) - đổi hàng
browse (v) - xem qua, lướt xem
try on (v) - mặc thử
order (n/v) - đặt hàng, đơn hàng
deliver (v) - giao hàng
pick up (v) - lấy hàng
payment method (n) - phương thức thanh toán
by cash - bằng tiền mặt
by credit card - bằng thẻ tín dụng
by debit card - bằng thẻ ghi nợ
by check - bằng séc
gift card (n) - thẻ quà tặng
shopping cart (n) - xe đẩy mua sắm
basket (n) - giỏ hàng
receipt = bill = invoice (n) - biên lai, hóa đơn
price tag (n) - nhãn giá
discount (n/v) - giảm giá
customer = client (n) - khách hàng
salesperson = sales associate = sales representative (n) - nhân viên bán hàng
cashier (n) - thu ngân
checkout counter (n) - quầy thanh toán
cash register (n) - máy tính tiền
item (n) - món hàng, mặt hàng
merchandise = goods (n) - hàng hóa
expensive >< cheap (a) - đắt >< rẻ
affordable price (n) - giá cả phải chăng
on sale - đang giảm giá
clearance sale (n) - xả hàng
loyalty program (n) - chương trình khách hàng thân thiết
DAY 6
equipment = device = appliance (n) - thiết bị
office equipment (n) - thiết bị văn phòng
printer (n) - máy in
printer cartridge (n) - hộp mực máy in
ink = toner (n) - mực in
photocopier = copier = copy machine (n) - máy photocopy
scanner (n) - máy quét, máy scan
shredder (n) - máy hủy tài liệu
projector (n) - máy chiếu
monitor = screen (n) - màn hình
keyboard (n) - bàn phím
mouse (n) - chuột (máy tính)
calculator (n) - máy tính cầm tay
kitchen equipment (n) - thiết bị nhà bếp
refrigerator = fridge (n) - tủ lạnh
dishwasher (n) - máy rửa bát chén
kettle (n) - ấm đun nước
rice cooker (n) - nồi cơm điện
vacuum cleaner (n) - máy hút bụi
air conditioner (n) - máy điều hòa
coffee maker (n) - máy pha cà phê
electronic device (n) - thiết bị điện tử
tablet (n) - máy tính bảng
speaker (n) - loa
headphones (n) - tai nghe
watch (n) - đồng hồ
charger (n) - cục sạc
office supply = stationery (n) - văn phòng phẩm
office (n) - văn phòng
notebook = handbook (n) - sổ tay
folder = binder (n) - bìa hồ sơ, kẹp tài liệu
stapler (n) - cái dập ghim
tape (n) - băng keo
marker (n) - bút lông
whiteboard (n) - bảng trắng
envelope (n) - phong bì
file cabinet (n) - tủ đựng hồ sơ
drawer (n) - ngăn kéo
calendar (n) - lịch
name tag (n) - bảng tên, thẻ tên
DAY 7
become - became - become (v) - trở nên
begin - began - begun (v) - bắt đầu
blow - blew - blown (v) - thổi
break - broke - broken (v) - làm vỡ, phá hư
bring - brought - brought (v) - mang, mang lại
build - built - built (v) - xây dựng
burn - burnt - burnt (v) - đốt cháy
buy - bought - bought (v) - mua
choose - chose - chosen (v) - chọn, lựa chọn
dig - dug - dug (v) - đào, xới
draw - drew - drawn (v) - vẽ / thu hút
drive - drove - driven (v) - lái xe
eat - ate - eaten (v) - ăn
fall - fell - fallen (v) - rơi, rớt
feed - fed - fed (v) - cho ăn
feel - felt - felt (v) - cảm thấy
find - found - found (v) - tìm thấy / thấy như thế nào
fly - flew - flown (v) - bay
forget - forgot - forgotten (v) - quên
get - got - gotten (v) - có được, nhận
grow - grew - grown (v) - phát triển/ trồng (cây)
hang - hung - hung (v) - treo lên
hear - heard - heard (v) - nghe
hold - held - held (v) - cầm, nắm / tổ chức
keep - kept - kept (v) - giữ
know - knew - known (v) - biết
lay - laid - laid (v) - đặt, để, nằm
lead - led - led (v) - dẫn dắt, lãnh đạo
leave - left - left (v) - rời khỏi / đặt để
lose - lost - lost (v) - làm mất
mean - meant - meant (v) - có nghĩa là
meet - met - met (v) - gặp / đáp ứng
mistake - mistook - mistaken (v) - gây ra lỗi
pay - paid - paid (v) - trả tiền, thanh toán
read - read - read (v) - đọc
rise - rose - risen (v) - tăng
see - saw - seen (v) - nhìn thấy
seek - sought - sought (v) - tìm kiếm
sleep - slept - slept (v) - ngủ
speak - spoke - spoken (v) - nói, phát biểu
steal - stole - stolen (v) - đánh cắp
sweep - swept - swept (v) - quét
take - took - taken (v) - lấy
teach - taught - taught (v) - dạy
think - thought - thought (v) - suy nghĩ
throw - threw - thrown (v) - ném, vứt
understand - understood - understood (v) - hiểu
DAY 8
accept (v) - chấp nhận
accomplish = achieve (v) - đạt được
accompany (v) - đồng hành, đi kèm
accommodate (v) - đáp ứng
activate (v) - kích hoạt
admit (v) - thừa nhận
allocate (v) - phân bổ
assemble (v) - lắp ráp
assist = support = help (v) - hỗ trợ, giúp đỡ
appreciate (v) - cảm kích / đánh giá cao ai đó
approve (v) - đồng ý, phê duyệt
appear (v) - xuất hiện
analyze (v) - phân tích
argue (v) - tranh cãi, tranh luận
assign (v) - phân công, bổ nhiệm
assume = undertake (v) - đảm nhận, đảm nhiệm công việc gì
attend = participate in = take part in = join (v) - tham gia, tham dự
attest (v) - chứng nhận, chứng thực
attract (v) - thu hút, lôi cuốn
assess = evaluate (v) - đánh giá, thẩm định
access (v) - truy cập
authorize (v) - ủy quyền
claim (v) - tuyên bố
clarify (v) - làm rõ, làm sáng tỏ
collect (v) - thu thập, sưu tầm
compare (v) - so sánh
compete (v) - cạnh tranh
complain (v) - than phiền, phàn nàn
compile (v) - biên soạn
command (v) - ra lệnh, chỉ huy
conceal (v) - che giấu
consider (v) - cân nhắc, xem xét
contain (v) - chứa đựng
convince = persuade (v) - thuyết phục
create (v) - tạo ra
deduct (v) - khấu trừ
deposit (v) - đặt cọc / gửi tiền
determine (v) - xác định
describe (v) - mô tả
dine = eat (v) - ăn
discover (v) - khám phá
dispose (v) - vứt bỏ
direct (v) - gửi / hướng dẫn
doubt = suspect (v) - nghi ngờ
DAY 9
eliminate (v) - loại bỏ
ensure (v) - đảm bảo
enter (v) - đi vào, nhập vào
entail (v) - đòi hỏi
expand (v) - mở rộng
explain (v) - giải thích
express (v) - bày tỏ
extend (v) - gia hạn
enhance (v) - nâng cao, tăng cường
examine = inspect = check (v) - kiểm tra
expose (v) - phơi bày, để lộ ra / tiếp xúc
facilitate (v) - tạo điều kiện
fluctuate (v) - dao động
fill = fulfill = complete (v) - hoàn thành
fix = repair (v) - sửa chữa
furnish (v) - trang bị
gather (v) - tụ tập / thu thập
generate (v) - tạo ra
guarantee (v) - đảm bảo (về sản phẩm)
hesitate (v) - ngập ngừng, do dự
hire = recruit = employ (v) - thuê, tuyển dụng
locate (v) - định vị, tìm kiếm cái gì
imagine (v) - tưởng tượng
implement (v) - tiến hành, thực hiện
import >< export (v) - nhập khẩu >< xuất khẩu
incur (v) - gánh chịu
indicate (v) - chỉ ra
inform = announce = notify (v) - thông báo
impact (v) - tác động
intergrate (v) - tích hợp
interrupt = disrupt (v) - làm gián đoạn
launch = release (v) - ra mắt, phát hành
lift (v) - nâng lên
modernize (v) - hiện đại hóa
narrow (v) - thu hẹp
obtain = gain = get = have (v) - có được cái gì
occur (v) - xảy ra, xuất hiện
operate (v) - vận hành, hoạt động
optimize (v) - tối ưu hóa
own (v) - sở hữu
paint (v) - sơn, vẽ
perform (v) - biểu diễn / thực hiện
persist (v) - kiên trì
praise = commend (v) - khen ngợi
predict = anticipate (v) - dự đoán
preserve (v) - bảo tồn, bảo quản
DAY 10
produce = manufacture (v) - sản xuất
promise (v) - hứa
post (v) - đăng, dán
process (v) - xử lý (danh từ dịch là "tiến trình")
proceed (v) - tiến hành, tiếp tục
propose (v) - đề xuất
protect (v) - bảo vệ
pull >< push (v) - kéo >< đẩy
publicize (v) - công khai, công bố
reach (v) - với tới / liên lạc/ đạt tới
receive (v) - nhận
record (v) - ghi lại, thu âm (danh từ dịch là "hồ sơ")
recover (v) - phục hồi, khôi phục
replace (v) - thay thế
remind (v) - nhắc nhở
remain (v) - duy trì
renew (v) - gia hạn, làm mới lại
require (v) - yêu cầu
respond (v) - phản hồi, trả lời
retire (v) - nghỉ hưu
reflect (v) - phản ánh, phản chiếu
refuse = deny = decline (v) - từ chối
research = study (v) - nghiên cứu (danh từ dịch là "bài nghiên cứu")
rotate (v) - xoay, luân phiên
schedule (v) - lên lịch (danh từ là "lịch trình")
stack = pile up (v) - chất đống
submit = file = turn in (v) - nộp
summarize (v) - tóm tắt
suspend (v) - đình chỉ, tạm ngừng
switch = convert (v) - chuyển đổi
reveal = unveil (v) - tiết lộ
revise (v) - điều chỉnh, chỉnh sửa
stuck (v) - mắc kẹt
wear (v) - mang, mặc, đội
taste (v) - nếm
terminate (v) - chấm dứt, kết thúc
thrive = grow (v) - phát triển
transfer (v) - chuyển, chuyển đổi
transport (v) - vận chuyển
tackle = address = solve = deal with = cope with (v) - giải quyết, xử lý
verify = confirm (v) - xác minh
wonder (v) - tự hỏi, băn khoăn
DAY 11
company = firm (n) - công ty
subsidiary (n) - công ty con
headquarters (n) - trụ sở chính
branch (n) - chi nhánh
department = division (n) - phòng ban
marketing department (n) - phòng tiếp thị
human resources department (n) - phòng nhân sự (phòng HR)
accounting department (n) - phòng kế toán
finance department (n) - phòng tài chính
sales department (n) - phòng kinh doanh
customer service department (n) - phòng dịch vụ khách hàng
IT department (n) - phòng công nghệ thông tin
operations department (n) - phòng vận hành
research and development department (n) - phòng nghiên cứu và phát triển (phòng R&D)
legal department (n) - phòng pháp lý
public relations (PR) - bộ phận quan hệ công chúng
quality control (QC) - bộ phận kiểm soát chất lượng
supply chain department (n) - phòng chuỗi cung ứng
board of directors (BOD) - ban giám đốc
board members (n) - thành viên hội đồng quản trị
management (n) - ban quản lý
workforce (n) - lực lượng lao động
job title (n) - chức danh công việc
president (n) - chủ tịch
vice president (n) - phó chủ tịch
manager (n) - người quản lý
director (n) - giám đốc / đạo diễn
associate director (n) - phó giám đốc
general manager = general director (n) - tổng giám đốc
CEO (Chief Executive Officer) - giám đốc điều hành
executive (n) - nhân viên cấp cao
department head = head of the department (n) - trưởng phòng
supervisor (n) - giám sát viên
intern = trainee (n) - thực tập sinh
mentor (n) - người cố vấn
coordinator (n) - nhân viên điều phối
administrator (n) - quản trị viên
expert = specialist (n) - chuyên viên (người có nhiều kinh nghiệm)
novice = beginner = apprentice (n) - người mới học việc (chưa có nhiều kinh nghiệm)
work experience (n) - kinh nghiệm làm việc
probation period (n) - giai đoạn thử việc
colleague = associate = coworker (n) - đồng nghiệp
company retreat = company picnic = company outing (n) - chuyến dã ngoại công ty
DAY 12
business = company = firm = corporation (n) - công ty, doanh nghiệp
employee = associate (n) - nhân viên (số ít)
staff = personnel (n) - những người nhân viên (số nhiều)
employer (n) - người chủ, người tuyển dụng
client = customer (n) - khách hàng
contract (n) - hợp đồng
agreement (n) - sự thỏa thuận
term (n) - điều khoản / kỳ hạn
partnership (n) - sự hợp tác
collaboration (n) - sự cộng tác
regulation (n) - quy định
revenue = turnover (n) - doanh thu
profit (n) - lợi nhuận
budget (n) - ngân sách
expense = expenditure = cost (n) - chi phí
income (n) - thu nhập
salary = paycheck (n) - tiền lương
payroll (n) - bảng lương
bonus (n) - tiền thưởng
commission (n) - tiền hoa hồng
promotion (n) - sự thăng chức / sự quảng bá/ sự khuyến mãi/ sự thúc đẩy
asset (n) - tài sản
market share (n) - thị phần (phần trăm của doanh thu công ty trong tổng ngành hàng)
merger (n) - cuộc sáp nhập
acquisition (n) - sự thu mua, thâu tóm
entrepreneur (n) - doanh nhân
shareholder = stockholder (n) - cổ đông (người nắm giữ cổ phiếu công ty)
stakeholder (n) - các bên liên quan
stock = share (n) - cổ phiếu
investment (n) - sự đầu tư
competition (n) - sự cạnh tranh / cuộc thi
strategy = tactic (n) - chiến lược
monopoly (n) - sự độc quyền
innovation (n) - sự đổi mới
demand = need (n) - nhu cầu
meet the demand/need (v) - đáp ứng nhu cầu
supply (n/v) - (sự) cung cấp, cung ứng
supplies (n) - đồ dùng, vật tư
logistics (n) - hậu cần, vận chuyển
inventory (n) - hàng tồn kho
distribution (n) - sự phân phối
invoice = receipt = bill (n) - hóa đơn
DAY 13
clothing = clothes = garment = apparel (n) - quần áo
attire = costume (n) - trang phục
wardrobe = closet (n) - tủ quần áo
measuring tape (n) - thước dây
dress (n) - đầm
skirt (n) - váy
shirt (n) - áo sơ mi
short-sleeved shirt (n) - áo sơ mi ngắn tay (long-sleeved shirt: áo sơ mi dài tay)
striped shirt (n) - áo sơ mi kẻ sọc
checked shirt (n) - áo sơ mi ca rô
T-shirt (n) - áo thun
sweater (n) - áo len
jacket (n) - áo khoác gió
coat (n) - áo choàng
lab coat (n) - áo khoác phòng thí nghiệm
suit (n) - bộ đồ vest
trousers = pants (n) - quần dài
shorts (n) - quần ngắn, quần đùi
accessories (n) - phụ kiện
hat (n) - mũ, nón
cap (n) - nón lưỡi trai
scarf (n) - khăn quàng cổ (số nhiều là scarves)
sunglasses (n) - kính râm
belt (n) - thắt lưng
necklace (n) - vòng cổ
bracelet (n) - vòng tay
earrings (n) - bông tai
ring (n) - cái nhẫn
handbag (n) - túi xách tay
purse = wallet (n) - ví cầm tay
backpack (n) - ba lô
shoes (n) - đôi giày
sneakers (n) - giày thể thao
sandals (n) - dép xăng-đan
slippers (n) - dép lê
flip-flops (n) - dép tông, dép xỏ ngón
high heels (n) - giày cao gót
boots (n) - đôi ủng, đôi boots
zip (n/v) - (v) kéo khóa / (n) khóa kéo
unzip (v) - mở khóa
strap (n) - dây đeo (đồng hồ, túi xách, ba lô,...)
button (n) - nút áo
pocket (n) - cái túi
pattern (n) - họa tiết, hoa văn
thread (n) - sợi chỉ
needle (n) - cây kim
leather (n) - vải da
cotton (n) - vải cotton
DAY 14
hospitality (n) - dịch vụ lưu trú, nhà hàng, khách sạn
motel (n) - nhà nghỉ
accommodation = lodging (n) - chỗ ở
reception (n) - bộ phận lễ tân / tiệc chiêu đãi
receptionist (n) - nhân viên lễ tân
reception desk = front desk (n) - quầy lễ tân
reservation = booking (n) - sự đặt chỗ trước
reserve = book (v) - đặt chỗ trước
amenities (n) - những tiện nghi (wifi, hồ bơi, dịch vụ dọn phòng,...)
laundry service (n) - dịch vụ giặt ủi
lobby = hall (n) - sảnh
corridor = hallway (n) - hành lang
housekeeping (n) - dịch vụ dọn phòng
vacancy (n) - chỗ trống
cafeteria (n) - căn tin
buffet (n) - tiệc búp phê
tourist (n) - du khách
tourism (n) - ngành du lịch
tourist attraction (n) - điểm thu hút khách du lịch
tour guide (n) - hướng dẫn viên du lịch
travel agency (n) - đại lý du lịch
itinerary (n) - lịch trình
destination (n) - điểm đến
sightseeing (n) - chuyến tham quan
journey = trip = excursion (n) - chuyến đi, hành trình
adventure (n) - cuộc phiêu lưu
departure (n) - sự khởi hành (depart (v) khởi hành)
arrival (n) - sự tới nơi (arrive (v) đến nơi)
boarding pass (n) - thẻ lên máy bay
baggage = luggage (n) - hành lý
economy class (n) - hạng phổ thông
business class (n) - hạng thương gia
first class (n) - hạng nhất
window seat (n) - ghế ngồi cạnh cửa sổ
aisle seat (n) - ghế gần lối đi
direct flight (n) - chuyến bay thẳng
connecting flight (n) - chuyến bay nối tiếp
carry-on luggage (n) - hành lý xách tay
checked luggage (n) - hành lý ký gửi
customs (n) - hải quan
landmark (n) - địa danh nổi tiếng
round-trip ticket (n) - vé khứ hồi
one-way ticket (n) - vé một chiều
souvenir (n) - quà lưu niệm
DAY 15
employment (n) - việc làm
employment agency (n) - trung tâm giới thiệu việc làm
applicant = candidate (n) - ứng cử viên
interview (n/v) - (n) buổi phỏng vấn / (v) phỏng vấn
application (n) - đơn xin việc/ sự nộp đơn/ ứng dụng / sự áp dụng
cover letter (n) - thư xin việc
résumé (n) - sơ yếu lý lịch
reference (n) - thư giới thiệu / sự tham khảo
apply for (v) - nộp đơn
hire = employ = recruit (v) - tuyển dụng
fire (v) - sa thải
resign from (v) - từ chức
promote (v) - thăng chức/ khuyến mãi/ quảng bá/ thúc đẩy
job opening (n) - vị trí trống cần tuyển dụng
job description (n) - mô tả công việc (JD)
job offer (n) - lời mời làm việc
qualification (n) - bằng cấp, trình độ chuyên môn
degree (n) - bằng cấp
bachelor's degree (n) - bằng cử nhân
master's degree (n) - bằng thạc sĩ
doctor's degree (n) - bằng tiến sĩ (= doctoral degree)
professor (n) - giáo sư
job = occupation = career = profession (n) - công việc, nghề nghiệp
office clerk (n) - nhân viên văn phòng
administrative assistant (n) - trợ lý hành chính
receptionist (n) - nhân viên lễ tân
public relations officer (n) - nhân viên quan hệ công chúng
software developer (n) - lập trình viên phần mềm
pharmacist (n) - dược sĩ
lecturer (n) - giảng viên
librarian (n) - thủ thư (người giữ thư viện)
waiter/waitress (n) - nhân viên phục vụ nam/nữ
construction worker (n) - công nhân xây dựng
electrician (n) - thợ điện
mechanic (n) - thợ máy
plumber (n) - thợ sửa ống nước
welder (n) - thợ hàn
freelancer (n) - người làm nghề tự do
accountant = bookkeeper (n) - kế toán viên
auditor (n) - kiểm toán viên
sales representative = sales associate (n) - nhân viên bán hàng
consultant = advisor (n) - tư vấn viên
graphic designer (n) - nhà thiết kế đồ họa
musician (n) - nhạc sĩ
actor/actress (n) - nam/nữ diễn viên
filmmaker (n) - nhà làm phim
editor (n) - biên tập viên
engineer (n) - kỹ sư
architect (n) - kiến trúc sư
DAY 16
accompany by something - đi theo, kèm theo cái gì
apply for - nộp đơn
be eligible for something - đủ điều kiện cho cái gì
be object to + Ving - phản đối làm gì
be responsible for something - chịu trách nhiệm cho cái gì
be subject to something - phải chịu cái gì
bring up something - nuôi dưỡng / đề cập đến vấn đề gì đó
base on something - dựa vào cái gì
contribute to something - đóng góp vào cái gì
consult with somebody - thảo luận với ai
equivalent to something - tương đương với cái gì
be delighted to = be pleased to + Vo - rất vui/hân hạnh để làm gì
fond of sb/sth - thích ai/cái gì
focus on = concentrate on something - tập trung vào cái gì
get in touch - liên lạc với ai
take over = assume - đảm nhiệm
attribute to something - quy cho, đổ cho cái gì
keep in touch - giữ liên lạc với ai
combine with - kết hợp với
take part in = engage in = participate in = involve in - tham gia vào
take off - cất cánh/ nghỉ phép/ cởi ra
allow somebody to Vo - cho phép ai đó làm gì
keep track of something - theo dõi cái gì
take place - diễn ra
register for = enroll in = sign up - đăng ký
specialize in = major in something - chuyên về cái gì
compliance with = adhere to = abide by - tuân thủ
draw up - soạn thảo (kế hoạch)
separate from something - tách ra khỏi cái gì
help somebody (to) Vo - giúp ai đó làm gì
set up - thiết lập / chuẩn bị
take advantage of something - tận dụng lợi thế của cái gì
interact with - tương tác với
make an effort/attempt to + Vo - nỗ lực để làm gì
commend = praise = compliment for/on something - khen ngợi ai đó về điều gì
come up with - nghĩ ra, nảy ra cái gì
get rid of something - vứt bỏ cái gì
carry on - tiến hành làm gì
catch up - bắt kịp, đuổi kịp ai đó
look forward to + Ving - trông đợi làm gì
drop/stop by - ghé ngang qua
figure out = find out - xác định, tìm ra cái gì
give up - từ bỏ cái gì
go ahead - tiếp tục làm gì
go over - xem qua cái gì
kick off - bắt đầu, khởi động
look up - tra cứu
run out of something - hết cái gì
show up - xuất hiện
DAY 17
nature (n) - thiên nhiên
ecosystem (n) - hệ sinh thái
biodiversity (n) - đa dạng sinh học
conservation (n) - sự bảo tồn
sustainability (n) - sự bền vững
natural resources (n) - tài nguyên thiên nhiên
climate change (n) - biến đổi khí hậu
pollution (n) - sự ô nhiễm
greenhouse gases (n) - khí nhà kính
renewable energy (n) - năng lượng tái tạo
solar panel (n) - pin mặt trời
preserve = conserve (v) - giữ gìn, bảo tồn
recycle (v) - tái chế
pollute (v) - gây ô nhiễm
dispose = throw away = discard (v) - vứt bỏ
disposable product (n) - sản phẩm dùng 1 lần (ly nhựa, hộp xốp)
trash = garbage = rubbish = litter (n) - rác thải
landfill = dumpster (n) - bãi rác
trash bin = trash can (n) - thùng rác
erosion (n) - sự xói mòn
flood (n) - lũ lụt
drought (n) - hạn hán
habitat (n) - môi trường sống
emission (n) - khí thải
drainage (n) - sự thoát nước
forest (n) - rừng
valley (n) - thung lũng
desert (n) - sa mạc (phân biệt với dessert là món tráng miệng)
cliff (n) - vách đá
cave (n) - hang động
riverbank (n) - bờ sông
stream (n) - dòng suối
volcano (n) - núi lửa
weather forecast (n) - dự báo thời tiết
storm (n) - cơn bão
thunder (n) - sấm sét
wind (n) - gió
moisture (n) - độ ẩm
temperature (n) - nhiệt độ
wildlife (n) - động vật hoang dã
environmentally friendly = eco-friendly (a) - thân thiện với môi trường
state-of-the-art = cutting-edge = modern (a) - hiện đại
DAY 18
additionally (adv) - thêm vào đó, ngoài ra
abundantly = plentifully (adv) - một cách dồi dào
absolutely (adv) - một cách tuyệt đối, hoàn toàn
barely (adv) - vừa đủ
briefly (adv) - một cách ngắn gọn/ thoáng qua
certainly (adv) - một cách chắc chắn / cụ thể
conveniently (adv) - một cách tiện lợi
completely (adv) - hoàn toàn
consequently (adv) - do đó, kết quả là
constantly (adv) - một cách liên tục
currently (adv) - hiện nay, hiện tại
specifically (adv) - một cách cụ thể
directly = in person (adv) - một cách trực tiếp
effectively (adv) - một cách hiệu quả
extremely = highly = exceptionally (adv) - cực kỳ
evenly = equally (adv) - một cách ngang bằng
eventually = finally = ultimately (adv) - cuối cùng
frequently = usually = regularly (adv) - thường xuyên
gradually (adv) - dần dần
immediately = promptly (adv) - ngay lập tức
initially (adv) - ban đầu
obviously = clearly (adv) - một cách rõ ràng
periodically (adv) - một cách định kỳ
possibly (adv) - có thể, có khả năng
previously (adv) - trước đây
precisely = correctly = exactly = accurately (adv) - một cách chính xác
primarily (adv) - chính yếu/ chủ yếu
properly (adv) - thích hợp
probably (adv) - có lẽ
nearly (adv) - gần như, hầu như
neatly (adv) - một cách gọn gàng, ngăn nắp
relatively (adv) - một cách tương đối
roughly = approximately (adv) - xấp xỉ, tương đương
recently = lately (Adv) - gần đây
rarely (adv) - hiếm khi
similarly (adv) - một cách tương tự
simultaneously (adv) - một cách đồng thời
slightly = somewhat (adv) - hơi hơi, chút chút
thoroughly = carefully = cautiously (adv) - một cách cẩn thận, kỹ lưỡng
urgently (adv) - khẩn cấp
unexpectedly (adv) - một cách bất ngờ
unfortunately (adv) - không may
unusually (adv) - bất thường
DAY 19
marketing (n) - tiếp thị
marketing budget (n) - ngân sách tiếp thị
advertisement = commercial (n) - quảng cáo
dubbing (n) - lồng tiếng
consumer (n) - người tiêu dùng
consumption (n) - sự tiêu thụ, tiêu dùng
market (n) - thị trường
market share (n) - thị phần
survey (n) - cuộc khảo sát
questionnaire (n) - bảng câu hỏi (trong khảo sát)
demand = needs (n) - nhu cầu
competition (n) - sự cạnh tranh / cuộc thi
compete (v) - cạnh tranh
competitor = rival = contender (n) - đối thủ cạnh tranh
brand (n) - thương hiệu
brand identity (n) - độ nhận diện thương hiệu
marketing strategy = marketing tactic (n) - chiến lược tiếp thị
marketing campaign (n) - chiến dịch tiếp thị
market research (n) - nghiên cứu thị trường
focus group (n) - nhóm khảo sát (dùng để thử sản phẩm mới)
feedback (n) - ý kiến phản hồi
review (n/v) - (n) bài đánh giá / (v) đánh giá
trend (n) - xu hướng
analysis (n) - sự phân tích
strengths (n) - điểm mạnh
weaknesses (n) - điểm yếu
social media (n) - phương tiện truyền thông
coverage (n) - việc đưa tin / phủ sóng, bao phủ
coupon = voucher (n) - phiếu giảm giá
convey (v) - truyền tải (thông tin), chuyên chở (người, hàng hóa)
celebrity (n) - người nổi tiếng
debut = release = launch (n) - ra mắt, phát hành (sản phẩm mới)
showcase (n/v) - (n) buổi ra mắt / (v) trưng bày
display (v) - trưng bày
display window (n) - cửa sổ trưng bày (cửa kính trước mặt tiền)
display case (n) - tủ trưng bày
discount = on sale (n) - giảm giá
clearance sale (n) - bán thanh lý
retailer (n) - nhà bán lẻ, cửa hàng bán lẻ
wholesaler (n) - cửa hàng bán sỉ
customer satisfaction (n) - sự hài lòng của khách hàng
DAY 20
conjunction (n) - liên từ (là từ nối các từ, cụm từ, mệnh đề)
A as well as B - A cũng như là B
because = since = as = given that = now that = seeing that (+ S + V) - bởi vì
in order that = so that (+ S + V) - để mà
although = even though = though (+ S + V) - mặc dù
whereas (+ S + V) - trái lại
while (+ S + V) - trong khi (diễn tả sự tương phản)
if (+ S + V) - nếu (diễn tả điều kiện)
unless (+ S + V) - trừ khi (diễn tả điều kiện)
as long as = so long as = provided that (+ S + V) - miễn là (diễn tả điều kiện)
even if (+ S + V) - ngay cả khi
in case (+ S + V) - phòng khi, trong trường hợp
when (+ S + V) - khi (diễn tả thời gian)
while (+ S + V) - trong khi (diễn tả thời gian)
once (+ S + V) - một khi (diễn tả thời gian)
as (+ S + V) - khi / bởi vì
until = till (+ S + V) - cho đến khi (diễn tả thời gian)
since (+ mốc thời gian) - kể từ
whenever (+ S + V) - bất kỳ khi nào
as soon as (+ S + V) - ngay khi
by the time (+ S + V) - vào lúc / trước khi
as though = as if (+ S + V) - như thể là
supposing that (+ S + V) - giả sử rằng
whether (+ S + V) - liệu rằng
both A and B - cả A và B
not only A but (also) B - không chỉ A mà còn B
either A or B - hoặc A hoặc B (dùng khi có 2 lựa chọn và chỉ chọn một)
neither A nor B - không A cũng không B
whether A or B - liệu rằng A hay B
transition words (n) - trạng từ liên kết (từ nối hai câu độc lập)
therefore (, + S + V) - do đó, vì vậy
thus (, + S + V) - do đó, vì thế
consequently (, + S + V) - kết quả là
as a result (, + S + V) - kết quả là
hence (, + S + V) - vì vậy, do đó
otherwise (, + S + V) - nếu không thì
however = nevertheless = nonetheless (, + S + V) - tuy nhiên
on the other hand (, + S + V) - mặt khác
in contrast = conversely = on the contrary (, + S + V) - ngược lại, trái lại
unfortunately (, + S + V) - không may là
in addition = additionally = besides (, + S + V) - ngoài ra, bênh cạnh đó
furthermore = moreover (, + S + V) - hơn thế nữa
in other words (, + S + V) - nói cách khác
for example = as an example = for instance (, + S + V) - ví dụ là
similarly = likewise (, + S + V) - tương tự
finally = eventually = ultimately (, + S + V) - cuối cùng
meanwhile (, + S + V) - trong khi đó (diễn tả hai hành động xảy ra cùng một lúc)
in the meantime (, + S + V) - trong lúc đó (trong lúc chờ đợi)
in fact (, + S + V) - thực tế là (dùng để bổ sung thông tin)
actually (, + S + V) - thực ra là (dùng để sửa lại thông tin cho chính xác)
as you can imagine (, + S + V) - như bạn có thể tưởng tượng
as you know (, + S + V) - như bạn biết
in general (, + S + V) - nói chung, nhìn chung
in summary (, + S + V) - nói tóm lại
in conclusion (, + S + V) - kết luận lại
after all (, + S + V) - suy cho cùng, rốt cuộc
DAY 21
preposition (n) - giới từ (ký hiệu là 'prep')
above - ở trên (không tiếp xúc)
below - phía dưới (không tiếp xúc)
over - + đồ vật bên trên, bao phủ (A lamp is hanging over the table.)
over (chỉ sự di chuyển) - vượt qua (She jumped over the fence.)
over + khoảng thời gian - qua, trong suốt (Over the past decade, technology has changed a lot.)
under - ở dưới (có che phủ hoặc tiếp xúc)
near - gần
by = beside = next to = adjacent to - kế bên, bên cạnh
inside - bên trong
outside - bên ngoài
between A and B - ở giữa (dùng trong trường hợp có 2 đối tượng)
among - trong số / ở giữa (dùng cho trường hợp có 3 đối tượng trở lên)
against - chống lại / tựa vào
lean against something - dựa lưng vào cái gì
in front of - phía trước
behind - phía sau
opposite = across from - đối diện
across - bên kia/ khắp (đi với địa điểm)
in time - kịp giờ (vừa kịp trước khi quá muộn)
on time - đúng giờ
during - trong suốt (thường đi kèm với khoảng thời gian)
for (+ thời gian) - trong khoảng (thường đi kèm với khoảng thời gian)
within - trong vòng (thường đi kèm với khoảng thời gian)
not ... until - mãi cho đến khi
as - như là, với vai trò là
upon (+ thời gian) - ngay khi
from A to B - từ A đến B
by (+ thời gian) - trước (lúc nào đó)
following - sau khi
before = prior to - trước khi
across - băng qua / khắp
along - dọc theo (thường đi kèm với địa điểm có chiều dài như beach/road/river/route)
into - vào bên trong (thường đi kèm với động từ)
out of (something) - ra khỏi cái gì
through - thông qua, xuyên qua
toward - về hướng, về phía (thường đi kèm với động từ run/go/move/walk)
round = around - xung quanh
in order to = so as to (+ Vo) - để mà
because of = owing to = due to = given = on account of = in light of - bởi vì
with - với
without - không có cái gì
about = concerning = regarding = on - về cái gì đó
despite = in spite of - mặc dù
notwithstanding - mặc dù
regardless of (something) - bất kể cái gì
except (for) = apart from = aside from - ngoại trừ
in addition to (something) - bên cạnh việc gì
in charge of (something) - phụ trách việc gì
such as - ví dụ là
according to (something) - theo cái gì
on behalf of (something) - thay mặt cho ai, cái gì
beyond - vượt quá
rather than = instead of - thay vì, hơn là
DAY 22
health = wellness (n) - sức khỏe
mental health (n) - sức khoẻ tinh thần
physical health (n) - sức khỏe thể chất
healthy (a) - khỏe mạnh
annual checkup (n) - buổi kiểm tra sức khỏe hàng năm
pharmacy = drug store (n) - tiệm thuốc
pharmaceutical (a) - thuộc về dược
pharmacist = physician (n) - dược sĩ
medicine = medication (n) - thuốc
prescription (n) - đơn thuốc
prescribe (v) - kê đơn
prevention (n) - sự phòng ngừa
prevent from (phrasal verb) - ngăn chặn khỏi cái gì
diagnosis (n) - sự chẩn đoán
symptom (n) - triệu chứng
recovery (n) - sự phục hồi, khôi phục
dietary (a) - chế độ ăn uống, ăn kiêng
balanced diet (n) - chế độ ăn cân bằng
fatigue (n) - sự mệt mỏi
immune system (n) - hệ miễn dịch
insurance (n) - bảo hiểm
medical facility (n) - cơ sở y tế
nutrition (n) - dinh dưỡng
relieve (v) - làm giảm, làm dịu đi
illness (n) - bệnh tật
injury (n) - chấn thương
fever (n) - sốt
cough (n/v) - ho, bị ho
allergy (n) - dị ứng
sore throat (n) - đau họng
muscles (n) - cơ bắp
bones (n) - xương
clinic = practice (n) - phòng khám
exercise routine (n) - thói quen tập thể dục
appearance (n) - vẻ bề ngoài / sự xuất hiện
confidence (n) - sự tự tin
cosmetic product (n) - sản phẩm mỹ phẩm
moisturizer (n) - kem dưỡng ẩm
lotion (n) - kem dưỡng da
sunscreen (n) - kem chống nắng
skin care (n) - chăm sóc da
lip gloss = lip stick (n) - son môi
hygiene (n) - vệ sinh cá nhân
DAY 23
product (n) - sản phẩm
product line (n) - dòng sản phẩm
product range (n) - phạm vi sản phẩm
assembly line (n) - dây chuyền lắp ráp
produce (n) - nông sản
produce = manufacture (v) - sản xuất
merchandise = goods = commodity (n) - hàng hóa
label (n) - nhãn hiệu
packaging (n) - bao bì, sự đóng gói
storage room = stockroom = warehouse (n) - nhà kho
inventory (n) - hàng tồn kho
item (n) - món đồ / khoản mục
expiration date (n) - ngày hết hạn
promotion (n) - sự khuyến mãi
canned food (n) - đồ ăn đóng hộp
parcel = package (n) - bưu kiện, gói hàng
nuts (n) - các loại hạt
refreshments = snacks = treats (n) - đồ ăn vặt, thức ăn nhẹ
beverage = drink (n) - đồ uống
feature (n/v) - (n) tính năng, đặc điểm / (v) trình bày, thể hiện
quality (n) - chất lượng
quantity (n) - số lượng
durability (n) - độ bền
reliability (n) - độ tin cậy
performance (n) - hiệu suất / màn biểu diễn
defect = faulty (n) - bị lỗi
warranty (n) - sự bảo hành
shipment (n) - lô hàng
specification (n) - thông số kỹ thuật
version = model = edition (n) - phiên bản
component (n) - thành phần
material (n) - nguyên vật liệu / tài liệu
metal (n) - kim loại
steel (n) - thép
lead (n) - chì
wood (n) - gỗ
lumber (n) - gỗ xẻ
plastic (n) - nhựa
ceramic (n) - gốm sứ
brick (n) - gạch
tile (n) - ngói nhà / gạch lót sàn
marble (n) - đá cẩm thạch
stone (n) - đá
granite (n) - đá hoa cương
concrete (n) - bê tông
cement (n) - xi măng
rubber (n) - cao su
DAY 24
contract (n) - hợp đồng
term (n) - điều khoản / kỳ hạn
branch (n) - chi nhánh
customer service (n) - dịch vụ khách hàng
identity verification - xác minh danh tính
interest (n) - lãi suất
loan (n) - khoản vay
mortgage (n) - khoản vay thế chấp
debt (n) - nợ
investment (n) - sự đầu tư
investor (n) - nhà đầu tư
bid (n) - cuộc đấu thầu
contractor (n) - nhà thầu
bank account (n) - tài khoản ngân hàng
checking account (n) - tài khoản thanh toán
saving account (n) - tài khoản tiết kiệm
currency exchange (n) - đổi ngoại tệ
payment method (n) - phương thức thanh toán
credit card (n) - thẻ tín dụng
debit card (n) - thẻ ghi nợ (thẻ ATM)
check (n) - tờ séc
ATM (Automated Teller Machine) - máy rút tiền tự động
deposit (n/v) - (n) tiền gửi, tiền đặt cọc / (v) gửi tiền
withdraw (v) - rút tiền
withdrawal (n) - sự rút tiền
transfer (n/v) - chuyển khoản
transaction (n) - giao dịch
balance (n) - số dư tài khoản / sự cân bằng
bank statement (n) - sao kê ngân hàng
stock = share (n) - cổ phiếu
bond (n) - trái phiếu
dividend (n) - cổ tức (tiền lời từ cổ phiếu)
stockholder = shareholder (n) - cổ đông (người nắm giữ cổ phiếu)
stock market (n) - thị trường chứng khoán
budget (n) - ngân sách
expense = expenditure = cost (n) - chi phí
income (n) - thu nhập
cash flow (n) - dòng tiền
asset (n) - tài sản
capital (n) - vốn / thủ đô
portfolio (n) - danh mục đầu tư / hồ sơ cá nhân
insurance (n) - bảo hiểm
inflation (n) - lạm phát (mất giá đồng tiền)
recession (n) - suy thoái kinh tế
tax (n) - thuế
exchange rate (n) - tỷ giá hối đoái (tỷ giá đổi tiền)
banker (n) - nhân viên ngân hàng
bank teller (n) - giao dịch viên ngân hàng
DAY 25
plant (n) - cây trồng / nhà máy
branch (n) - nhánh cây
leaf (n) - lá cây (số nhiều là leaves)
root (n) - rễ cây
trunk (n) - thân cây (thường dùng cho cây thân gỗ)
stem (n) - thân cây (thường dùng cho cây nhỏ)
flower bed (n) - luống hoa
weed = grass (n) - cỏ dại
lawn (n) - bãi cỏ
bush = shrub (n) - bụi cây
seed (n) - hạt giống
seedling (n) - cây giống
potted plant (n) - cây trồng trong chậu
vines (n) - cây dây leo
sand (n) - cát
soil (n) - đất
greenhouse (n) - nhà kính (trồng cây)
orchard (n) - vườn cây ăn quả
fence (n) - hàng rào
pond (n) - cái ao
landscape (n) - cảnh quan, phong cảnh
path = pathway = trail (n) - lối mòn, đường mòn
terrace (n) - sân hiên
fertilizer (n) - phân bón
insect (n) - côn trùng, sâu bọ
watering can (n) - bình tưới cây
gardening tools (n) - công cụ làm vườn
shovel (n) - cái xẻng
rake (n) - cái cào
saw (n) - cái cưa
trowel (n) - cái bay
hammer (n) - cây búa
nail (n) - cây đinh
screw (n) - ốc vít
screwdriver (n) - tua vít
wheelbarrow (n) - xe cút kít, xe rùa
prune = trim = cut (v) - cắt tỉa (cây cối)
playground (n) - sân chơi
picnic area (n) - khu vực dã ngoại
bench (n) - băng ghế
fountain (n) - đài phun nước
sculpture (n) - tượng điêu khắc
botanical garden (n) - vườn thực vật
trash can = trash bin (n) - thùng rác
plants and flowers (n) - cây trồng và hoa
sunflower (n) - hoa hướng dương
lavender (n) - hoa oải hương
oak tree (n) - cây sồi
maple tree (n) - cây lá phong
palm tree (n) - cây cọ
DAY 26
recreation (n) - hoạt động giải trí (nhấn mạnh đến hoạt động)
entertainment (n) - sự giải trí (nhấn mạnh đến việc thưởng thức cái gì đó)
exhibition = exposition = expo = exhibit (n) - cuộc triễn lãm
gallery (n) - phòng trưng bày
sculpture (n) - tác phẩm điêu khắc
masterpiece (n) - kiệt tác
portrait (n) - hình chân dung
director (n) - đạo diễn / giám đốc
producer (n) - nhà sản xuất
editor (n) - biên tập viên
screenwriter - biên kịch (người viết kịch bản)
cast (n) - dàn diễn viên
actor (n) - diễn viên / nam diễn viên
actress (n) - nữ diễn viên
genre = category (n) - thể loại
action (n) - phim hành động
comedy (n) - phim hài
drama (n) - phim chính kịch
horror (n) - kinh dị
romance (n) - phim tình cảm
mystery (n) - phim thể loại bí ẩn
animation (n) - phim hoạt hình
adventure (n) - phim thể loại phiêu lưu
science fiction (n) - khoa học viễn tưởng (sci-fi)
fiction (n) - hư cấu
non-fiction (n) - phi hư cấu (chuyện về người thật việc thật)
documentary (n) - phim tài liệu
script = screenplay (n) - kịch bản
episode (n) - tập phim
chapter (n) - chương (sách) / chi nhánh
soundtrack (n) - nhạc phim
plot (n) - cốt truyện
dubbing (n) - lồng tiếng
subtitles (n) - phụ đề
scene (n) - cảnh quay
behind the scenes - phía sau hậu trường
premiere (n) - buổi công chiếu
lyrics (n) - lời bài hát
melody (n) - giai điệu
orchestra (n) - ban nhạc / dàn nhạc
musician (n) - nhạc sĩ (nói chung)
composer (n) - nhà soạn nhạc
amusement park (n) - công viên giải trí
broadcast (n) - chương trình phát sóng
rehearsal (n) - buổi diễn tập
DAY 27
journalism = press (n) - báo chí
journalist (n) - nhà báo
reporter (n) - phóng viên
editor (n) - biên tập viên
column (n) - chuyên mục (trên báo)
columnist (n) - người viết chuyên mục (trên báo)
photographer (n) - nhiếp ảnh gia
article (n) - bài báo
news (n) - tin tức
newspaper (n) - tờ báo
magazine (n) - tạp chí (thiên về giải trí)
journal (n) - tạp chí (thiên về khoa học, nghiên cứu)
edition (n) - phiên bản
radio station (n) - trạm phát thanh
broadcast (n) - bản tin phát sóng
press conference (n) - cuộc họp báo
press release (n) - thông cáo báo chí
exclusive (a) - độc quyền
publish (v) - xuất bản, công bố
publisher (n) - nhà xuất bản
publication (n) - sự công bố, sự xuất bản
proofread (v) - đọc soát lỗi (hiệu đính)
fake news (n) - tin giả
caption (n) - chú thích
quote (n) - câu trích dẫn
correspondence (n) - thư từ
coverage (n) - việc đưa tin
issue (n) - (n) ấn phẩm / vấn đề ; (v) phát hành
memoir (n) - hồi ký
biography (n) - tiểu sử, lý lịch
subscription (n) - sự đăng ký
subscriber (n) - người đăng ký
advertisement = commercial (n) - quảng cáo
channel (n) - kênh truyền hình
satellite (n) - vệ tinh
on air (v) - lên sóng, phát sóng
stay tuned! - đừng chuyển kênh nhé!
host = presenter (n) - người dẫn chương trình
streaming service (n) - dịch vụ phát trực tuyến (như Netflix)
panel discussion (n) - thảo luận nhóm
social media (n) - mạng xã hội
spokesperson (n) - người phát ngôn
DAY 28
experiment (n) - cuộc thí nghiệm
conduct = carry out = implement (v) - tiến hành, thực hiện cái gì
investigate (v) - điều tra
theory (n) - lý thuyết, học thuyết
pilot study (n) - nghiên cứu ban đầu
conclusion (n) - sự kết luận
reliable (a) - đáng tin cậy
laboratory (n) - phòng thí nghiệm
test tube (n) - ống nghiệm
microscope (n) - kính hiển vi
thermometer (n) - nhiệt kế
binoculars (n) - ống nhòm
laboratory equipment (n) - dụng cụ phòng thí nghiệm
instrument (n) - dụng cụ (nói chung) / nhạc cụ
specimen (n) - mẫu vật
graph = chart = table (n) - bảng biểu
science (n) - khoa học
scientist (n) - nhà khoa học
research = study (n) - bài nghiên cứu
findings (n) - những phát hiện (sau khi nghiên cứu)
precision = accuracy (n) - độ chính xác
trial (n) - thử nghiệm
analysis (n) - sự phân tích
analyst (n) - nhà phân tích
telescope (n) - kính thiên văn
result = outcome (n) - kết quả
data (n) - dữ liệu
collect data - thu thập dữ liệu
sample (n) - mẫu thử
evaluate = assess = appraise (v) - đánh giá, thẩm định
prototype (n) - vật mẫu đầu tiên
innovative (a) - đổi mới, sáng tạo
observation (n) - sự quan sát
DAY 29
clinic = practice (n) - phòng khám
private practice (n) - phòng khám tư
appointment (n) - cuộc hẹn / sự bổ nhiệm
make an appointment - đặt lịch hẹn
doctor = physician (n) - bác sĩ
nurse (n) - y tá
dentist (n) - nha sĩ
optician (n) - bác sĩ nhãn khoa (mắt)
patient (n) - bệnh nhân
hearing impairment (n) - khiếm thính, lãng tai
physical therapy (n) - vật lý trị liệu
medicine = medication = drug (n) - thuốc, dược
medical (a) - thuộc về y tế
pharmaceutical (a) - thuộc về dược
drug store = pharmacy (n) - tiệm thuốc
pharmacist (n) - dược sĩ (người bán thuốc)
prescription (n) - sự kê đơn, đơn thuốc
prescribe (v) - kê đơn
treatment (n) - sự điều trị
surgery = operation (n) - cuộc phẫu thuật
check up (n) - buổi kiểm tra sức khỏe định kỳ
symptom (n) - triệu chứng
diagnosis (n) - sự chẩn đoán
emergency (n) - cấp cứu, khẩn cấp
flu (n) - bệnh cúm
fever (n) - sốt
cough (n) - ho
headache (n) - đau đầu
sore throat (n) - đau họng
stomachache (n) - đau bụng
injury (n) - chấn thương
allergy (n) - dị ứng
infection (n) - sự nhiễm trùng
medical record (n) - hồ sơ y tế
refill (a prescription) (v) - lấy lại thuốc (theo toa)
recover (v) - hồi phục, khôi phục
discharge (v) - xuất viện
health = well-being (n) - sức khỏe
mental health (n) - sức khỏe tinh thần
physical health (n) - sức khỏe thể chất
ill = sick (n) - bệnh
immune system (n) - hệ miễn dịch
exercise = work out (v) - tập thể dục
balanced diet (n) - chế độ ăn cân bằng
DAY 30
ceremony (n) - nghi thức, nghi lễ
parade (n) - cuộc diễu hành
itinerary = agenda = schedule (n) - lịch trình
celebration = anniversary = commemoration (n) - lễ kỷ niệm
conference = convention (n) - hội nghị
workshop = seminar = webinar = session (n) - hội thảo
session (n) - phiên, buổi
exhibition = exposition = expo = exposition (n) - cuộc triễn lãm
fair (n) - hội chợ
audience = spectator (n) - người xem, khán giả
attendee = participant (n) - người tham gia
competition = contest (n) - cuộc thi
guest (n) - khách mời
speaker (n) - diễn giả
host (n) - người chủ trì, người dẫn dắt (chương trình)
organizer (n) - người tổ chức, nhà tổ chức
sponsor (n) - nhà tài trợ
invitation (n) - thư mời, lời mời
registration (n) - sự đăng ký
opening speech (n) - bài phát biểu khai mạc
closing remark (n) - phát biểu bế mạc
stage (n) - sân khấu / giai đoạn
podium (n) - cái bục (phát biểu, nhận giải)
booth = stand = kiosk = pavilion (n) - gian hàng (hội chợ)
decoration (n) - sự trang trí
catering (n) - dịch vụ ăn uống
caterer (n) - nhà cung cấp thực phẩm
trophy (n) - chiếc cúp
meeting notes = meeting minutes (n) - biên bản, ghi chú cuộc họp
`;
const rawHomeworkData = `
Reading 1 - Tenses
work (v, n) - làm việc, công việc
look (v) - trông có vẻ, nhìn
suit (v) - phù hợp, vừa vặn
taste (v) - có vị, nếm
smell (v) - có mùi, ngửi
run (v) - chạy, vận hành
win (v) - chiến thắng, giành được
seem (v) - có vẻ như, dường như
keep (v) - giữ, duy trì
sound (v) - nghe có vẻ
calm (v) - làm dịu đi, trấn an
enjoy (v) - thưởng thức, tận hưởng
wait (v) - chờ đợi
arrive (v) - đến nơi
leave (v) - rời đi, bỏ lại
play (v) - chơi
start (v) - bắt đầu
travel (v) - đi du lịch, di chuyển
visit (v) - ghé thăm, viếng thăm
bloom (v) - nở hoa
end (v) - kết thúc
fall (v) - rơi, ngã, sụp đổ
flow (v) - chảy, trôi chảy
impress (v) - gây ấn tượng
manufacture (v) - sản xuất, chế tạo
settle (v) - giải quyết, dàn xếp
consult (v) - tham khảo, hỏi ý kiến, tư vấn
predict (v) - dự đoán
grow (v) - phát triển, tăng trưởng, trồng
improve (v) - cải thiện, nâng cao
require (v) - yêu cầu, đòi hỏi
hire (v) - thuê, mướn
suggest (v) - gợi ý, đề xuất
service (v) - bảo dưỡng, sửa chữa
seek (v) - tìm kiếm
volunteer (v, n) - tình nguyện, tình nguyện viên
vote (v) - bỏ phiếu, bầu chọn
acquire (v) - mua lại, đạt được
proceed (v) - tiến hành, tiếp tục
promote (v) - thúc đẩy, quảng bá, thăng chức
type (v) - đánh máy, gõ chữ
complete (v) - hoàn thành
explain (v) - giải thích
show (v) - chỉ ra, hiển thị, cho thấy
contain (v) - chứa đựng, bao gồm
arrange (v) - sắp xếp
contact (v) - liên lạc, tiếp xúc
open (v) - mở
drop (v) - giảm, rơi, sụt giảm
begin (v) - bắt đầu
dim (v) - làm mờ đi, giảm độ sáng
use (v) - sử dụng
celebrate (v) - ăn mừng, kỷ niệm
assist (v) - hỗ trợ, giúp đỡ
deliver (v) - giao hàng, phân phát
expire (v) - hết hạn
disappear (v) - biến mất
focus (v) - tập trung
calculate (v) - tính toán
sell (v) - bán
identify (v) - xác định, nhận diện
represent (v) - đại diện
struggle (v) - đấu tranh, vật lộn, gặp khó khăn
provide (v) - cung cấp
ensure (v) - đảm bảo
act (v) - đóng vai trò, hành động
reveal (v) - tiết lộ, công bố
schedule (v) - lên lịch trình
commute (v) - đi lại (bằng phương tiện công cộng)
familiarize (v) - làm quen, tìm hiểu kỹ
join (v) - tham gia, gia nhập
retire (v) - nghỉ hưu
promise (v) - hứa hẹn
become (v) - trở thành
anticipate (v) - mong đợi, lường trước, dự đoán
depart (v) - khởi hành, rời đi
conduct (v) - tiến hành, thực hiện
assume (v) - đảm nhận, giả định
continue (v) - tiếp tục
expand (v) - mở rộng
consider (v) - xem xét, cân nhắc
fill (out) (v) - điền vào (đơn)
book (v) - đặt chỗ, đặt phòng
accommodate (v) - chứa được, đáp ứng
notify (v) - thông báo
jacket (n) - áo khoác
water (n) - nước
life (n) - cuộc sống, sự sống
film / movie (n) - bộ phim
effect (n) - ảnh hưởng, tác động
stress (n, v) - sự căng thẳng, áp lực
traffic (n) - giao thông
people (n) - con người, mọi người
cake (n) - bánh ngọt
brother (n) - anh/em trai
race (n) - cuộc đua
voice (n) - giọng nói
concert (n) - buổi hòa nhạc
moment (n) - khoảnh khắc, lúc
bus (n) - xe buýt
party (n) - bữa tiệc, bên (đối tác)
football (n) - bóng đá
rain (n) - cơn mưa
child / children (n) - trẻ em
call (n) - cuộc gọi
grandparent (n) - ông bà
flower (n) - bông hoa
garden (n) - khu vườn
presentation (n) - bài thuyết trình
audience (n) - khán giả, thính giả
wallet (n) - ví tiền
footwear (n) - giày dép
year (n) - năm
week (n) - tuần
disagreement (n) - sự bất đồng, sự không đồng ý
competitor (n) - đối thủ cạnh tranh
infringement (n) - sự vi phạm (bản quyền, luật...)
electrician (n) - thợ điện
project (n) - dự án
study (n, v) - nghiên cứu, sự học tập
industry (n) - ngành công nghiệp
efficiency (n) - hiệu suất, hiệu quả
revision (n) - sự sửa đổi, ôn tập
process (n) - quy trình, quá trình
month (n) - tháng
manager (n) - người quản lý
president (n) - chủ tịch, tổng thống
specialist (n) - chuyên gia
communication (n) - sự giao tiếp, truyền thông
network (n) - mạng lưới, hệ thống mạng
suggestion (n) - sự gợi ý, đề xuất
technician (n) - kỹ thuật viên
stove (n) - bếp (bếp ga, bếp lò)
way (n) - cách, con đường
plastic (n) - nhựa, chất dẻo
staff / member (n) - nhân viên / thành viên
library (n) - thư viện
sale (n) - sự bán hàng, đợt giảm giá
board (n) - ban quản trị, hội đồng
discussion (n) - cuộc thảo luận, bàn bạc
team (n) - đội, nhóm
product (n) - sản phẩm
receptionist (n) - lễ tân
time (n) - thời gian, lần
note (n) - ghi chú
meeting (n) - cuộc họp
department (n) - phòng ban, bộ phận
amendment (n) - sự sửa đổi, bổ sung (luật, văn bản)
group (n) - nhóm
completion (n) - sự hoàn thành
map (n) - bản đồ
difficulty (n) - sự khó khăn
level (n) - mức độ, cấp độ
trail (n) - đường mòn
poll (n) - cuộc thăm dò ý kiến
connection (n) - sự kết nối
rise (n) - sự gia tăng
database (n) - cơ sở dữ liệu
range (n) - phạm vi, loạt
resource (n) - tài nguyên
material (n) - vật liệu, tài liệu
container (n) - thùng chứa, công-ten-nơ
arrangement (n) - sự sắp xếp
question (n) - câu hỏi
filming (n) - việc quay phim
documentary (n) - phim tài liệu
funding (n) - nguồn vốn, quỹ tài trợ
plant (n) - nhà máy, xí nghiệp, cây trồng
production (n) - sự sản xuất
light (n) - ánh sáng, đèn
cinema (n) - rạp chiếu phim
message (n) - tin nhắn, thông điệp
client (n) - khách hàng
property (n) - bất động sản, đặc tính, tài sản
interest (n) - sự quan tâm, sở thích, lãi suất
spending (n) - chi tiêu
record (n) - hồ sơ, biên bản, kỷ lục
statement (n) - bản sao kê, tuyên bố
activity (n) - hoạt động
dinner (n) - bữa tối
promotion (n) - sự thăng chức, khuyến mãi
trip (n) - chuyến đi
furniture (n) - đồ nội thất
century (n) - thế kỷ
interview (n) - cuộc phỏng vấn
applicant (n) - người nộp đơn, ứng viên
finalist (n) - người vào chung kết
consumer (n) - người tiêu dùng
retailer (n) - nhà bán lẻ
session (n) - phiên (làm việc, học tập...)
account (n) - tài khoản
expiration (n) - sự hết hạn
window (n) - cửa sổ
file (n) - tập tin, tài liệu
folder (n) - thư mục
computer (n) - máy tính
icon (n) - biểu tượng
lecturer (n) - giảng viên
independence (n) - sự độc lập
register (n) - máy tính tiền (cash register)
inventory (n) - hàng tồn kho, sự kiểm kê
calculator (n) - máy tính cầm tay
calculation (n) - sự tính toán
resident (n) - cư dân
home (n) - nhà, nơi ở
management (n) - ban quản lý, sự quản lý
candidate (n) - ứng viên
fair (n) - hội chợ
result (n) - kết quả
agent (n) - đại lý, người đại diện
buyer (n) - người mua
analysis (n) - sự phân tích
request (n) - lời yêu cầu, yêu cầu
table (n) - cái bàn
leveler (n) - thiết bị cân bằng
stability (n) - sự ổn định
surface (n) - bề mặt
layer (n) - lớp (bảo vệ, phủ...)
tile (n) - viên gạch lát
action (n) - hành động
singer (n) - ca sĩ
tour (n) - chuyến du lịch, chuyến lưu diễn
policy (n) - chính sách
class (n) - lớp học
experience (n) - kinh nghiệm, trải nghiệm
position (n) - vị trí
mentor (n) - người cố vấn
ticket (n) - vé
game (n) - trò chơi, trận đấu
organizer (n) - ban tổ chức, người tổ chức
firm (n) - công ty, hãng
attorney (n) - luật sư
affair (n) - vấn đề, sự việc (legal affairs - các vấn đề pháp lý)
internship (n) - kỳ thực tập
program (n) - chương trình
student (n) - học sinh, sinh viên
duty (n) - nhiệm vụ, bổ phận, thuế
seminar (n) - hội thảo
picnic (n) - buổi dã ngoại
volume (n) - thể tích, âm lượng, khối lượng
item (n) - mặt hàng, món đồ
concern (n) - sự lo lắng, mối quan ngại
environment (n) - môi trường
theater (n) - nhà hát
usher (n) - người dẫn chỗ
seat (n) - chỗ ngồi
base (n) - cơ sở, nền tảng (customer base - tệp khách hàng)
panel (n) - ban, nhóm người (judging panel - ban giám khảo)
entry (n) - tác phẩm dự thi, sự đi vào
period (n) - giai đoạn, khoảng thời gian
paperwork (n) - giấy tờ, thủ tục hành chính
loan (n) - khoản vay
bakery (n) - tiệm bánh
room (n) - phòng, không gian
stay (n) - thời gian lưu trú, sự ở lại
loyalty (n) - lòng trung thành
demographic (n) - nhóm nhân khẩu học
dormitory (n) - ký túc xá
maintenance (n) - sự bảo trì
spill (n) - sự tràn ra, sự đổ ra
laboratory (n) - phòng nghiệm
notification (n) - sự thông báo
Reading 2 - Active Passive
coordinate (v) - phối hợp, điều phối
delay (v, n) - trì hoãn, làm chậm trễ, sự trì hoãn
remind (v) - nhắc nhở
turn off (v) - tắt (thiết bị)
reschedule (v) - lên lại lịch, đổi lịch
book (v) - đặt chỗ, đặt trước
renovate (v) - cải tạo, nâng cấp, trùng tu
consider (v) - cân nhắc, xem xét
place (v, n) - đặt, để, nơi chốn
promote (v) - thăng chức, thúc đẩy, quảng bá
find (v) - tìm thấy
urge (v) - thúc giục, hối thúc
attend (v) - tham dự, có mặt
harvest (v, n) - thu hoạch, vụ thu hoạch
specialize (v) - chuyên về
cater (v) - cung cấp dịch vụ ăn uống, phục vụ
locate (v) - định vị, nằm ở
distribute (v) - phân phối, phân phát
meet (v) - gặp gỡ, đáp ứng, vấp phải
submit (v) - nộp, đệ trình
return (v, n) - trở về, gửi lại, sự trở lại
repair (v, n) - sửa chữa, sự sửa chữa
provide (v) - cung cấp
complete (v) - hoàn thành
require (v) - yêu cầu, đòi hỏi
approve (v) - phê duyệt, chấp thuận
start (v, n) - bắt đầu, sự bắt đầu
devise (v) - nghĩ ra, đặt ra (kế hoạch, chiến lược)
expect (v) - kỳ vọng, mong đợi
give (v) - đưa, cho, đem lại
interrupt (v) - ngắt quãng, làm gián đoạn
finish (v) - hoàn thành, kết thúc
experience (v, n) - trải nghiệm, gặp phải, kinh nghiệm
restore (v) - khôi phục, phục hồi
purchase (v, n) - mua, sắm sửa, sự mua sắm
recruit (v) - tuyển dụng
announce (v) - thông báo, công bố
write (v) - viết
please (v) - làm hài lòng, làm vui lòng
invite (v) - mời
visit (v, n) - ghé thăm, tham quan, chuyến viếng thăm
divide (v) - phân chia, chia ra
receive (v) - nhận
select (v) - lựa chọn
involve (v) - liên quan, bao gồm
revise (v) - sửa đổi, ôn tập
allow (v) - cho phép
sign (v) - ký tên, ký kết
cause (v, n) - gây ra, nguyên nhân
forget (v) - quên
verify (v) - xác minh, kiểm chứng
hold (v) - tổ chức, cầm, giữ
host (v, n) - tổ chức, làm chủ nhà, chủ nhà
ask (v) - yêu cầu, hỏi
respect (v, n) - tôn trọng, sự tôn trọng
name (v, n) - đặt tên, bổ nhiệm, tên
instruct (v) - hướng dẫn, chỉ thị
keep (v) - giữ, duy trì
acknowledge (v) - công nhận, thừa nhận, báo nhận
prepare (v) - chuẩn bị
commend (v) - khen ngợi, biểu dương
create (v) - tạo ra
conduct (v, n) - tiến hành, thực hiện, cách hành xử
reward (v, n) - khen thưởng, phần thưởng
exceed (v) - vượt quá
maintain (v) - duy trì, bảo dưỡng
collect (v) - thu gom, nhận, lấy
close (v) - đóng cửa, nhắm
offer (v, n) - cung cấp, tặng, đưa ra đề nghị
download (v, n) - tải xuống, lượt tải xuống
notify (v) - thông báo
complain (v) - phàn nàn, khiếu nại
remain (v) - vẫn còn, duy trì ở trạng thái
reduce (v) - giảm bớt
wax (v, n) - đánh bóng bằng sáp, chất sáp
postpone (v) - trì hoãn
standardize (v) - tiêu chuẩn hóa
perform (v) - thực hiện, biểu diễn
dissolve (v) - hòa tan, phân hủy
label (v, n) - dán nhãn, ghi nhãn, nhãn mác
installation (n) - sự lắp đặt
workstation (n) - máy trạm, vị trí làm việc
vendor (n) - nhà cung cấp, người bán hàng
release (n, v) - sự phát hành, công bố, phóng thích
report (v, n) - báo cáo, bản báo cáo
figure (n) - số liệu, nhân vật
coordinator (n) - người điều phối
equipment (n) - thiết bị
projection (n) - sự trình chiếu, sự dự tính
appointment (n) - cuộc hẹn
train (n) - tàu hỏa
associate (n) - cộng sự, nhân viên liên kết
department (n) - phòng ban, bộ phận
promotion (n) - sự thăng chức, khuyến mãi
cup (n) - cái cốc
head (n) - người đứng đầu, thủ trưởng
research (v, n) - nghiên cứu, công trình nghiên cứu
development (n) - sự phát triển
guideline (n) - hướng dẫn, nguyên tắc chỉ đạo
site (n) - trang web, địa điểm
employee (n) - nhân viên
meeting (n) - cuộc họp
budget (n) - ngân sách
officer (n) - viên chức, sĩ quan
weather (n) - thời tiết
summer (n) - mùa hè
crop (n) - vụ mùa
bakery (n) - tiệm bánh
dessert (n) - món tráng miệng
catering (n) - dịch vụ cung cấp đồ ăn uống
complex (n) - khu phức hợp
representative (n) - người đại diện
sample (n) - mẫu thử, hàng mẫu
medication (n) - dược phẩm, thuốc
office (n) - văn phòng
doctor (n) - bác sĩ
region (n) - vùng, miền
city (n) - thành phố
restriction (n) - sự hạn chế
opposition (n) - sự phản đối
resident (n) - cư dân
visitor (n) - khách tham quan, du khách
expense (n) - chi phí
trip (n) - chuyến đi
area (n) - khu vực
lot (n) - bãi (bãi đỗ xe)
plan (n) - kế hoạch, bản kế hoạch
communication (n) - sự giao tiếp, truyền thông
manager (n) - người quản lý
workforce (n) - lực lượng lao động
draft (n) - bản nháp
team (n) - đội, nhóm
strategy (n) - chiến lược
prototype (n) - mẫu thử nghiệm đầu tiên
engineer (n) - kỹ sư
advantage (n) - lợi thế
competition (n) - sự cạnh tranh, cuộc thi
construction (n) - sự xây dựng
storm (n) - cơn bão
building (n) - tòa nhà
interruption (n) - sự gián đoạn
service (n) - dịch vụ
moment (n) - khoảnh khắc, giây lát
concert (n) - buổi hòa nhạc
ticket (n) - vé
box office (n) - phòng bán vé
box (n) - cái hộp
researcher (n) - nhà nghiên cứu
target (n) - mục tiêu
stay (n) - lượt lưu trú, sự ở lại
discount (n) - sự giảm giá
fair (n) - hội chợ
employer (n) - người sử dụng lao động, chủ
agency (n) - đại lý, cơ quan
hiker (n) - người đi bộ đường dài
center (n) - trung tâm
map (n) - bản đồ
trail (n) - đường mòn
donation (n) - khoản quyên góp
fundraiser (n) - sự kiện gây quỹ, người gây quỹ
charity (n) - hội từ thiện, sự từ thiện
location (n) - địa điểm
vice president (n) - phó chủ tịch, phó giám đốc
president (n) - chủ tịch, giám đốc
company (n) - công ty
chairperson (n) - chủ tịch (hội đồng/cuộc họp)
vote (n) - sự bỏ phiếu, lá phiếu
member (n) - thành viên
program (n) - chương trình
schedule (n) - lịch trình, thời biểu
contract (n) - hợp đồng
update (n) - sự cập nhật, bản cập nhật
media (n) - phương tiện truyền thông
business (n) - doanh nghiệp, việc kinh doanh
customer (n) - khách hàng
mall (n) - trung tâm thương mại
project (n) - dự án
supervisor (n) - người giám sát
forecast (n) - dự báo (thời tiết)
rain (n) - cơn mưa
ceremony (n) - nghi lễ, buổi lễ
gallery (n) - phòng trưng bày nghệ thuật
event (n) - sự kiện
music (n) - âm nhạc
tourist (n) - khách du lịch
privacy (n) - sự riêng tư
group (n) - nhóm
application (n) - đơn xin, ứng dụng
funding (n) - nguồn vốn, kinh phí
consideration (n) - sự xem xét, cân nhắc
year (n) - năm
item (n) - món đồ, mặt hàng
hour (n) - giờ
role (n) - vai trò
director (n) - giám đốc, đạo diễn
participant (n) - người tham gia
discussion (n) - cuộc thảo luận
accordance (n) - sự phù hợp, sự đồng lòng
policy (n) - chính sách
reimbursement (n) - sự hoàn tiền, bồi hoàn
software (n) - phần mềm
training (n) - việc đào tạo, huấn luyện
dish (n) - món ăn
supervision (n) - sự giám sát
chef (n) - đầu bếp
library (n) - thư viện
lecture (n) - bài giảng, bài thuyết trình
negotiation (n) - sự đàm phán, thương lượng
lack (n) - sự thiếu sót, sự thiếu hụt
supplier (n) - nhà cung cấp
goal (n) - mục tiêu
productivity (n) - năng suất
prescription (n) - đơn thuốc
pharmacy (n) - nhà thuốc
guest (n) - khách
hotel (n) - khách sạn
booklet (n) - cuốn sách nhỏ
coupon (n) - phiếu giảm giá
attraction (n) - điểm thu hút khách du lịch
people (n) - con người
server (n) - người phục vụ
quality (n) - chất lượng
food (n) - thức ăn, thực phẩm
park (n) - công viên
season (n) - mùa (trong năm)
flooring (n) - vật liệu lát sàn, sàn nhà
lobby (n) - sảnh chờ
difficulty (n) - sự khó khăn
opening (n) - lễ khai trương, vị trí khuyết
store (n) - cửa hàng
component (n) - linh kiện, thành phần
part (n) - bộ phận, phần
door (n) - cánh cửa
replacement (n) - sự thay thế
system (n) - hệ thống
electrician (n) - thợ điện
blockage (n) - sự tắc nghẽn
sink (n) - bồn rửa
solution (n) - giải pháp, dung dịch
supplement (n) - thực phẩm bổ sung, phần bổ sung
headquarters (n) - trụ sở chính
factory (n) - nhà máy
deposit (n) - lớp bám tụ, tiền đặt cọc (clay deposits - mỏ đất sét)
Reading 3 - Noun
bring (v) - mang, đem lại
replace (v) - thay thế
explain (v) - giải thích
see (v) - thấy, xem
read (v) - đọc
convince (v) - thuyết phục
invest (v) - đầu tư
wait (v) - đợi, chờ
ask (v) - yêu cầu, hỏi
expand (v) - mở rộng
throw (away) (v) - vứt đi, ném đi
indicate (v) - chỉ ra, cho biết
respond (v) - phản hồi, trả lời
confirm (v) - xác nhận
set (v) - thiết lập, bố trí
search (v) - tìm kiếm
rise (v) - tăng lên, phát triển
judge (v) - đánh giá, phán xét
receive (v) - nhận
forward (v) - chuyển tiếp, gửi đi
feature (v) - xuất hiện nổi bật, mô tả đặc điểm
enter (into) (v) - ký kết, tham gia, bước vào
renegotiate (v) - đàm phán lại
buy (v) - mua
approve (v) - phê duyệt, chấp thuận
recognize (v) - công nhận, nhận ra
start (v) - bắt đầu
discuss (v) - thảo luận
provide (v) - cung cấp
reach (v) - liên hệ, đạt đến
hope (v) - hy vọng
create (v) - tạo ra
reuse (v) - tái sử dụng
allow (v) - cho phép
substitute (v) - thay thế, thế chỗ
visit (v) - ghé thăm, tham quan
make (v) - chế tạo, làm ra, thực hiện
include (v) - bao gồm
release (v) - phát hành, công bố
agree (v) - đồng ý
update (v) - cập nhật
ensure (v) - đảm bảo
follow (v) - tuân thủ, đi theo
commit (v) - cam kết
vary (v) - làm cho khác nhau, thay đổi
aim (v) - nhắm đến, hướng tới
increase (v) - tăng lên
meet (v) - đáp ứng, gặp gỡ, vấp phải
guarantee (v) - cam kết, bảo hành
distribute (v) - phân phát, phân phối
expect (v) - mong đợi, kỳ vọng
begin (v) - bắt đầu
pay (v) - thanh toán, trả tiền
conduct (v) - tiến hành, thực hiện
choose (v) - chọn, lựa chọn
submit (v) - nộp, đệ trình
hold (v) - tổ chức, cầm, giữ
audition (v) - thử giọng, thử vai
deliver (v) - giao hàng, phát biểu
answer (v) - trả lời
add (v) - thêm vào
continue (v) - tiếp tục
drag (v) - kéo, kéo lê (drag down - kéo xuống, làm suy giảm)
assign (v) - phân công, bổ nhiệm
click (v) - nhấp chuột
subscribe (v) - đăng ký (theo dõi, nhận tin)
hire (v) - thuê, tuyển dụng
train (v) - đào tạo, huấn luyện
transform (v) - biến đổi, chuyển hóa
oversee (v) - giám sát
open (v) - mở, khai trương
plan (v) - lên kế hoạch
form (v) - hình thành, thành lập
sign (v) - ký tên, ký kết
caution (v, n) - cảnh báo
give (v) - đưa, cho
permit (n) - giấy phép
entrance (n) - lối vào, cổng vào
station (n) - nhà ga, trạm
replacement (n) - sự thay thế, người thay thế
benefit (n) - lợi ích
database (n) - cơ sở dữ liệu
team (n) - đội, nhóm
newspaper (n) - tờ báo
increase (n) - sự tăng lên
number (n) - số lượng, con số
subscriber (n) - người đăng ký (thuê bao, báo...)
version (n) - phiên bản
report (n) - báo cáo, bản báo cáo
profitability (n) - sự có lợi nhuận, khả năng sinh lời
partner (n) - đối tác, cộng sự
company (n) - công ty
applicant (n) - người nộp đơn, ứng viên
application (n) - đơn xin, ứng dụng
interview (n) - cuộc phỏng vấn
room (n) - phòng, không gian
operation (n) - sự hoạt động, vận hành
firm (n) - công ty, hãng
factory (n) - nhà máy
proposal (n) - đề xuất, tờ trình
note (n) - ghi chú, lời lưu ý
idea (n) - ý tưởng
response (n) - sự phản hồi, câu trả lời
speaker (n) - người nói, diễn giả
morning (n) - buổi sáng
presentation (n) - bài thuyết trình, trình bày
confirmation (n) - sự xác nhận
head (n) - người đứng đầu, thủ trưởng
department (n) - phòng ban, bộ phận
expert (n) - chuyên gia
experience (n) - kinh nghiệm, trải nghiệm
contract (n) - hợp đồng
negotiation (n) - sự đàm phán, thương lượng
cost (n) - chi phí
price (n) - giá cả
issue (n) - vấn đề, số phát hành
challenge (n) - thử thách
performance (n) - màn trình diễn, hiệu suất
success (n) - sự thành công
coverage (n) - việc đưa tin, phạm vi bao phủ
seminar (n) - hội thảo
manager (n) - người quản lý
invitation (n) - thư mời, lời mời
notification (n) - thông báo, sự thông báo
magazine (n) - tạp chí
business (n) - doanh nghiệp, việc kinh doanh
agreement (n) - sự đồng ý, thỏa thuận
contractor (n) - nhà thầu
term (n) - điều khoản, thuật ngữ, kỳ hạn
office (n) - văn phòng
desk (n) - cái bàn làm việc
printer (n) - máy in
equipment (n) - thiết bị
vendor (n) - nhà cung cấp, người bán hàng
importance (n) - sự quan trọng
resource (n) - tài nguyên
effect (n) - tác động, ảnh hưởng
housing (n) - việc cung cấp nhà ở, nhà ở
area (n) - khu vực
conference (n) - hội nghị
development (n) - sự phát triển
quotation (n) - bảng báo giá, lời trích dẫn
request (n) - lời yêu cầu, yêu cầu
maintenance (n) - sự bảo trì, bảo dưỡng
client (n) - khách hàng
compliment (n) - lời khen ngợi
phone (n) - điện thoại
email (n) - thư điện tử
support (n) - sự hỗ trợ
question (n) - câu hỏi, vấn đề
product (n) - sản phẩm
packaging (n) - bao bì, đóng gói
design (n, v) - thiết kế, bản thiết kế
consumer (n) - người tiêu dùng
bottle (n) - cái chai
chef (n) - đầu bếp
patron (n) - khách hàng quen, người bảo trợ
menu (n) - thực đơn
substitution (n) - sự thay thế
location (n) - địa điểm, vị trí
warehouse (n) - nhà kho
investment (n) - sự đầu tư, khoản đầu tư
investor (n) - nhà đầu tư
employee (n) - nhân viên
option (n) - lựa chọn, quyền chọn
raise (n) - sự tăng lương
prize (n) - giải thưởng
research (n) - sự nghiên cứu
creativity (n) - sự sáng tạo
innovation (n) - sự đổi mới, tân tiến
analysis (n) - sự phân tích
market (n) - thị trường
conversation (n) - cuộc trò chuyện
technician (n) - kỹ thuật viên
manual (n) - sách hướng dẫn
procedure (n) - quy trình, thủ tục
care (n) - sự cẩn thận, chăm sóc
assurance (n) - sự đảm bảo, cam đoan
tech (n) - công nghệ
project (n) - dự án
line (n) - dòng (sản phẩm), đường nét
medication (n) - dược phẩm, thuốc
program (n) - chương trình
productivity (n) - năng suất
system (n) - hệ thống
restriction (n) - sự hạn chế
resident (n) - cư dân
visitor (n) - khách, khách tham quan
city (n) - thành phố
opposition (n) - sự phản đối
guarantee (n) - sự bảo hành, cam kết
staff (n) - nhân viên, đội ngũ
meeting (n) - cuộc họp
information (n) - thông tin
plant (n) - nhà máy, cây trồng
production (n) - sự sản xuất
fee (n) - lệ phí, phí
transfer (n) - sự chuyển khoản, chuyển nhượng
review (n) - sự xem xét, đánh giá
bid (n) - giá thầu, sự trả giá
gift (n) - món quà
supplier (n) - nhà cung cấp
card (n) - thẻ, thiệp
theater (n) - nhà hát, rạp hát
week (n) - tuần
audition (n) - buổi thử giọng, thử vai
shop (n) - cửa hàng
delivery (n) - sự giao hàng
representative (n) - người đại diện
receipt (n) - biên lai, sự nhận được
inquiry (n) - yêu cầu thông tin, sự hỏi han
nurse (n) - y tá
affiliation (n) - sự liên kết, sáp nhập
park (n) - công viên
copy (n) - bản sao
agenda (n) - chương trình nghị sự
profit (n) - lợi nhuận
weakness (n) - sự yếu kém, điểm yếu
photograph (n) - bức ảnh
foliage (n) - tán lá, lá cây
cover (n) - ảnh bìa, trang bìa
assignment (n) - nhiệm vụ, công việc được giao
material (n) - vật liệu, tài liệu
testing (n) - việc kiểm tra, thử nghiệm
group (n) - nhóm
biographer (n) - nhà viết tiểu sử
style (n) - phong cách, kiểu dáng
link (n) - đường dẫn, liên kết
newsletter (n) - bản tin
intention (n) - ý định, mục đích
lab (n) - phòng thí nghiệm
entrance (n) - lối vào
side (n) - khía cạnh, phía, mặt
building (n) - tòa nhà
computing (n) - tin học, việc điện toán
industry (n) - ngành công nghiệp
advancement (n) - sự tiến bộ, thăng tiến
museum (n) - bảo tàng
acquisition (n) - sự mua lại, sự đạt được
record (n) - hồ sơ, kỷ lục, bản ghi
car (n) - xe ô tô
service (n) - dịch vụ, sự phục vụ
store (n) - cửa hàng
partnership (n) - quan hệ đối tác, sự cộng tác
opportunity (n) - cơ hội
student (n) - học sinh, sinh viên
garment (n) - quần áo, hàng may mặc
manufacturing (n) - sự sản xuất, chế tạo
imitation (n) - sự bắt chước, hàng giả
council (n) - hội đồng
notice (n) - thông báo, sự chú ý
modification (n) - sự sửa đổi, thay đổi
structure (n) - cấu trúc, công trình kiến trúc
Reading 4 - Adjective
determine (v) - quyết định, xác định
require (v) - yêu cầu, đòi hỏi
test (v, n) - kiểm tra, thử nghiệm, bài kiểm tra
avoid (v) - tránh, né tránh
hire (v, n) - thuê, mướn, sự thuê mướn
look (for) (v) - tìm kiếm
advise (v) - khuyên bảo, tư vấn
become (v) - trở thành
suggest (v) - gợi ý, đề xuất
find (v) - tìm thấy, thấy rằng
discuss (v) - thảo luận
support (v, n) - hỗ trợ, ủng hộ, sự hỗ trợ
release (v, n) - phát hành, công bố, sự phát hành
allow (v) - cho phép
pay (v) - trả tiền, thanh toán
keep (v) - giữ, duy trì
contribute (v) - đóng góp, góp phần
prefer (v) - thích hơn
complete (v) - hoàn thành
transfer (v, n) - chuyển khoản, dời đi, sự chuyển giao
service (v, n) - bảo dưỡng, sửa chữa, dịch vụ
include (v) - bao gồm
check (v, n) - kiểm tra, đánh dấu, sự kiểm tra
renew (v) - gia hạn, làm mới
send (v) - gửi
ask (v) - yêu cầu, hỏi
bring (v) - mang, đem lại
receive (v) - nhận
decorate (v) - trang trí
provide (v) - cung cấp
close (v) - đóng cửa, kết thúc
sell (v) - bán
attend (v) - tham dự, có mặt
demonstrate (v) - chứng minh, trình bày mẫu
earn (v) - giành được, kiếm được
request (v, n) - yêu cầu, đề nghị, lời yêu cầu
obtain (v) - đạt được, có được
disclose (v) - tiết lộ, công bố
call (v, n) - gọi, gọi điện, cuộc gọi
need (v, n) - cần, nhu cầu
monitor (v, n) - theo dõi, giám sát, màn hình
import (v, n) - nhập khẩu, sự nhập khẩu
move (v, n) - di chuyển, dời lịch, sự dịch chuyển
fill (v) - điền đầy, lấp đầy, ứng tuyển
know (v) - biết
note (v, n) - ghi nhận, chú ý, ghi chú
recognize (v) - công nhận, nhận ra
contain (v) - chứa đựng, bao gồm
enclose (v) - đính kèm, gửi kèm
quit (v) - từ bỏ, nghỉ việc
pursue (v) - theo đuổi
summarize (v) - tóm tắt, tổng kết
propose (v) - đề xuất, đề nghị
report (v, n) - báo cáo, bản báo cáo
confuse (v) - làm bối rối, gây nhầm lẫn
address (v, n) - giải quyết, địa chỉ
elect (v) - bầu chọn, đắc cử
open (v) - mở, khai trương
extend (v) - kéo dài, gia hạn
last (v) - kéo dài, tồn tại
build (v) - xây dựng
aspire (v) - khao khát, mong mỏi
perform (v) - thực hiện, biểu diễn
turn off (v) - tắt (thiết bị)
furnish (v) - trang bị nội thất
direct (v) - hướng dẫn, gửi trực tiếp
list (v, n) - liệt kê, danh sách
update (v, n) - cập nhật, bản cập nhật
organize (v) - tổ chức, sắp xếp
deliver (v) - giao hàng, phát biểu
sign (v, n) - ký tên, ký kết, chữ ký
review (v, n) - đánh giá, xem lại, sự đánh giá
estimate (v, n) - ước tính, bảng ước tính
diagnose (v) - chẩn đoán
select (v) - chọn, lựa chọn
lead (v) - dẫn dắt, lãnh đạo
begin (v) - bắt đầu
master (v, n) - làm chủ, nắm vững, bậc thầy
name (v, n) - đặt tên, bổ nhiệm, tên
take (v) - mất (thời gian), lấy
appoint (v) - bổ nhiệm
answer (v, n) - trả lời, câu trả lời
approve (v) - phê duyệt, chấp thuận
award (v, n) - trao giải, giải thưởng
outline (v, n) - phác thảo, vạch ra, dàn ý
post (v, n) - đăng tải, bài đăng
satisfy (v) - làm hài lòng
urge (v) - thúc giục, hối thúc
stow (v) - xếp gọn, cất gọn
praise (v, n) - khen ngợi, ca ngợi, lời khen ngợi
choose (v) - chọn lựa
attach (v) - gắn kèm, đính kèm
access (v, n) - truy cập, tiếp cận, sự truy cập
appear (v) - xuất hiện, có vẻ như
remain (v) - duy trì, vẫn còn
engage (v) - thu hút, cam kết, tham gia
decrease (v, n) - giảm bớt, sự suy giảm
outperform (v) - làm tốt hơn, vượt trội hơn
honor (v, n) - vinh danh, tôn vinh, danh dự
reduce (v) - giảm bớt
planner (n) - người lên kế hoạch
chair (n) - cái ghế
forum (n) - diễn đàn
manager (n) - người quản lý
equipment (n) - thiết bị
malfunction (n) - sự cố, trục trặc
résumé (n) - sơ yếu lý lịch
applicant (n) - người nộp đơn, ứng viên
interview (n) - cuộc phỏng vấn, buổi phỏng vấn
cookware (n) - dụng cụ nấu ăn
utensils (n) - dụng cụ nhà bếp
owner (n) - chủ sở hữu
condominium (n) - căn hộ chung cư cao cấp
amenity (n) - tiện ích, sự tiện nghi
resident (n) - cư dân
ice cream (n) - kem
waiter (n) - bồi bàn, phục vụ nam
bank (n) - ngân hàng
application (n) - đơn xin, ứng dụng
bill (n) - hóa đơn
proposal (n) - đề xuất, tờ trình
development (n) - sự phát triển
software (n) - phần mềm
project (n) - dự án, công trình
fleet (n) - đội xe, đội tàu
van (n) - xe tải nhỏ
salad (n) - rau trộn
renewal (n) - sự gia hạn, đổi mới
unit (n) - đơn vị, bộ phận
bonus (n) - tiền thưởng
theme (n) - chủ đề
negotiator (n) - người đàm phán
orchestra (n) - dàn nhạc
session (n) - phiên (làm việc, học tập)
step (n) - bước, bước đi
machine (n) - máy móc
contrary (n) - sự ngược lại, điều trái ngược
cable (n) - dây cáp
consent (n) - sự đồng ý, bằng lòng
fairy tale (n) - truyện cổ tích
illustration (n) - hình minh họa
appliance (n) - thiết bị gia dụng
framework (n) - khuôn khổ, cơ cấu
collection (n) - bộ sưu tập
leather (n) - da thuộc
date (n) - ngày tháng
computer (n) - máy tính
error (n) - lỗi, sai sót
ad (n) - bài quảng cáo
newsletter (n) - bản tin
position (n) - vị trí, chức vụ
institution (n) - học viện, tổ chức
success (n) - sự thành công
booklet (n) - cuốn sách nhỏ
designer (n) - nhà thiết kế
career (n) - sự nghiệp
document (n) - tài liệu
regulation (n) - quy định, điều lệ
mayor (n) - thị trưởng
town (n) - thị trấn
traffic (n) - giao thông
problem (n) - vấn đề, trở ngại
flexibility (n) - sự linh hoạt
sunlight (n) - ánh sáng mặt trời
damage (n) - thiệt hại, sự hư hại
contractor (n) - nhà thầu
filtration (n) - sự lọc
class (n) - lớp học
chef (n) - đầu bếp
escalator (n) - thang cuốn
maintenance (n) - sự bảo trì, bảo dưỡng
exposition (n) - cuộc triển lãm
display (n) - sự trưng bày, hiển thị
apartment (n) - căn hộ
cost (n) - chi phí, giá cả
directory (n) - danh bạ, danh mục
stack (n) - đống, chồng
supervisor (n) - người giám sát
desk (n) - bàn làm việc
agreement (n) - thỏa thuận, hợp đồng
decision (n) - quyết định
landscaping (n) - việc cải tạo cảnh quan
fee (n) - lệ phí, phí
mechanic (n) - thợ cơ khí
repair (n) - sự sửa chữa
media (n) - phương tiện truyền thông
organization (n) - tổ chức, cơ cấu
prize (n) - giải thưởng
reimbursement (n) - sự hoàn tiền, bồi hoàn
paycheck (n) - phiếu lương, tiền lương
abundance (n) - sự dồi dào, phong phú
candidate (n) - ứng viên
CEO (n) - giám đốc điều hành
youth (n) - tuổi trẻ
director (n) - giám đốc, đạo diễn
trade (n) - thương mại, sự giao thương
commission (n) - ủy ban, tiền hoa hồng
board (n) - ban quản trị, hội đồng
architecture (n) - kiến trúc
policy (n) - chính sách
process (n) - quy trình, quá trình
procurement (n) - sự thu mua, mua sắm
feedback (n) - ý kiến phản hồi
basis (n) - nền tảng, cơ sở
gear (n) - đồ dùng, trang thiết bị
shift (n) - ca làm việc, sự dịch chuyển
achievement (n) - thành tựu, thành tích
copy (n) - bản sao
dumbbell (n) - quả tạ đơn
book (n) - cuốn sách
topic (n) - chủ đề, đề tài
loyalty (n) - lòng trung thành
tray (n) - cái khay
steel (n) - thép
surface (n) - bề mặt
tool (n) - công cụ, dụng cụ
storage (n) - kho chứa, sự lưu trữ
material (n) - vật liệu, tài liệu
nature (n) - bản chất, tự nhiên
audience (n) - khán giả
presentation (n) - bài thuyết trình
case (n) - trường hợp, hộp đựng
ink (n) - mực
toner (n) - hộp mực, nước hoa hồng
quarter (n) - quý (trong năm)
effort (n) - nỗ lực
country (n) - quốc gia
railway (n) - đường sắt
line (n) - dòng (sản phẩm), đường kẻ
citizen (n) - công dân
contribution (n) - sự đóng góp
community (n) - cộng đồng
progress (n) - sự tiến bộ, tiến trình
pollution (n) - sự ô nhiễm
Reading 5 - Adverb
persist (v) - kiên trì, bền bỉ
maintain (v) - duy trì, bảo trì
reduce (v) - giảm bớt
increase (v, n) - tăng lên, sự tăng trưởng
strategize (v) - lập chiến lược
predict (v) - dự đoán
encounter (v, n) - vấp phải, đối mặt, sự chạm trán
decline (v, n) - giảm, suy thoái, từ chối, sự sụt giảm
invest (v) - đầu tư
improve (v) - cải thiện, nâng cao
buy (v) - mua
ignore (v) - phớt lờ, bỏ qua
contribute (v) - đóng góp, góp phần
list (v, n) - liệt kê, ghi danh, danh sách
head (v, n) - di chuyển hướng về, dẫn đầu, người đứng đầu
turn (in) (v) - nộp
turn (on) (v) - bật (thiết bị)
recognize (v) - công nhận, nhận ra
reorganize (v) - tổ chức lại, tái cơ cấu
feature (v, n) - có đặc điểm nổi bật, mô tả, đặc điểm nổi bật
verify (v) - xác minh, kiểm chứng
conduct (v, n) - tiến hành, thực hiện, cách hành xử
retain (v) - giữ lại, duy trì
argue (v) - tranh luận, lập luận
study (v, n) - nghiên cứu, học tập, công trình nghiên cứu
interpret (v) - giải thích, thông dịch
secure (v) - đạt được, đảm bảo, thắt chặt
ask (v) - yêu cầu, hỏi
avoid (v) - tránh, né tránh
socialize (v) - giao lưu, hòa nhập xã hội
report (v, n) - báo cáo, bản báo cáo
excel (v) - vượt trội, xuất sắc
help (v, n) - giúp đỡ, sự giúp đỡ
manage (v) - quản lý, xoay xở
add (v) - thêm vào
receive (v) - nhận
rise (v, n) - tăng lên, mọc lên, sự gia tăng
adjust (v) - điều chỉnh
begin (v) - bắt đầu
schedule (v, n) - lên lịch trình, lịch trình
install (v) - cài đặt, lắp đặt
complete (v) - hoàn thành
involve (v) - liên quan, bao gồm
state (v, n) - phát biểu, tuyên bố, trạng thái, bang
wear (v) - mặc, mang
lead (v) - dẫn đến, dẫn dắt
fix (v) - sửa chữa, cố định
sell (v) - bán
award (v, n) - trao giải, giải thưởng
consider (v) - cân nhắc, xem xét
expand (v) - mở rộng
grow (v) - lớn lên, phát triển
redesign (v, n) - thiết kế lại, bản thiết kế lại
miss (v) - nhỡ, lỡ (chuyến bay), nhớ
design (v, n) - thiết kế, bản thiết kế
park (v, n) - đỗ xe, gửi xe, công viên
collaborate (v) - hợp tác, cộng tác
email (v, n) - gửi thư điện tử, thư điện tử
suggest (v) - gợi ý, đề xuất
postpone (v) - trì hoãn
pack (v) - đóng gói, xếp đồ
forget (v) - quên
bring (v) - mang, đem lại
map (v, n) - lập bản đồ, vạch ra, bản đồ
locate (v) - định vị, xác định vị trí
train (v, n) - huấn luyện, đào tạo, tàu hỏa
continue (v) - tiếp tục
cost (v, n) - tốn phí, trị giá, chi phí
finish (v) - hoàn thành, kết thúc
recycle (v) - tái chế
simplify (v) - đơn giản hóa
solicit (v) - thu hút, khẩn khoản, xin (ý kiến)
require (v) - yêu cầu, đòi hỏi
change (v, n) - thay đổi, sự thay đổi
persistence (n) - sự kiên trì, bền bỉ
growth (n) - sự tăng trưởng, phát triển
expansion (n) - sự mở rộng, giãn nở
plan (n) - kế hoạch, bản đồ
airline (n) - hãng hàng không
system (n) - hệ thống
time (n) - thời gian, lần
item (n) - mặt hàng, món đồ
snack (n) - đồ ăn nhẹ, món ăn vặt
battery (n) - pin, ắc quy
aisle (n) - lối đi (giữa các hàng ghế/kệ)
sale (n) - doanh số, sự bán hàng
strategy (n) - chiến lược
specialist (n) - chuyên gia
investment (n) - sự đầu tư
amount (n) - số lượng, khoảng
traffic (n) - giao thông
website (n) - trang web
owner (n) - chủ sở hữu
ad (n) - bài quảng cáo
media (n) - phương tiện truyền thông
furniture (n) - đồ nội thất
house (n) - ngôi nhà, căn nhà
safety (n) - sự an toàn
recommendation (n) - sự khuyến nghị, đề xuất
reader (n) - độc giả, người đọc
section (n) - phần, mục, bộ phận
columnist (n) - người viết chuyên mục
road (n) - con đường
street (n) - đường phố
sign (n) - biển hiệu, ký hiệu, dấu hiệu
driver (n) - tài xế, người lái xe
form (n) - mẫu đơn, hình dáng
office (n) - văn phòng
management (n) - ban quản lý, sự quản lý
importance (n) - sự quan trọng
decision (n) - quyết định, sự giải quyết
procedure (n) - quy trình, thủ tục
eye (n) - mắt, tầm nhìn
model (n) - kiểu mẫu, người mẫu
printer (n) - máy in
option (n) - lựa chọn
worker (n) - công nhân, người lao động
maintenance (n) - sự bảo trì, bảo dưỡng
facility (n) - cơ sở vật chất, trang thiết bị
care (n) - sự cẩn thận, chăm sóc
professor (n) - giáo sư
stance (n) - lập trường, quan điểm
data (n) - dữ liệu, số liệu
information (n) - thông tin
team (n) - đội, nhóm
contract (n) - hợp đồng
employee (n) - nhân viên
lobby (n) - sảnh chờ, hành lang
retailer (n) - nhà bán lẻ
swimwear (n) - đồ bơi
year (n) - năm
attorney (n) - luật sư
client (n) - khách hàng
asset (n) - tài sản
equipment (n) - thiết bị, trang bị
job (n) - công việc, việc làm
budget (n) - ngân sách
conference (n) - hội nghị
participant (n) - người tham gia
meeting (n) - cuộc họp
software (n) - phần mềm
guideline (n) - nguyên tắc chỉ dẫn, hướng dẫn
task (n) - nhiệm vụ, công việc
program (n) - chương trình
device (n) - thiết bị, công cụ
handbook (n) - sổ tay hướng dẫn
uniform (n) - đồng phục
provider (n) - nhà cung cấp
leak (n) - sự rò rỉ, vết rò rỉ
problem (n) - vấn đề, trở ngại
shoe (n) - đôi giày
shop (n) - cửa hàng
builder (n) - nhà thầu xây dựng, thợ xây
qualification (n) - bằng cấp, năng lực chuyên môn
warehouse (n) - nhà kho
tenure (n) - nhiệm kỳ, thời gian giữ chức vụ
property (n) - bất động sản, tài sản, đặc tính
workplace (n) - nơi làm việc
flight (n) - chuyến bay
app (n) - ứng dụng
insight (n) - sự hiểu biết sâu sắc, cái nhìn sâu sắc
professional (n) - chuyên gia, người chuyên nghiệp
film (n) - bộ phim
style (n) - phong cách, kiểu dáng
student (n) - học sinh, sinh viên
university (n) - trường đại học
library (n) - thư viện
collaboration (n) - sự hợp tác, cộng tác
instruction (n) - sự hướng dẫn, chỉ thị
experiment (n) - cuộc thí nghiệm, thử nghiệm
result (n) - kết quả
novel (n) - cuốn tiểu thuyết
news (n) - tin tức
source (n) - nguồn, nguồn tin
merger (n) - sự sáp nhập
retreat (n) - buổi dã ngoại, nơi nghỉ dưỡng, sự rút lui
date (n) - ngày tháng, cuộc hẹn
picnic (n) - buổi dã ngoại
temperature (n) - nhiệt độ
week (n) - tuần
material (n) - vật liệu, tài liệu
seeker (n) - người tìm kiếm
skill (n) - kỹ năng, kỹ xảo
suit (n) - bộ com-lê
tie (n) - cà vạt
dinner (n) - bữa tối
demand (n) - nhu cầu, yêu cầu
mineral (n) - khoáng sản, khoáng chất
interest (n) - sự quan tâm, lãi suất
position (n) - vị trí, chức vụ
installation (n) - sự lắp đặt
bench (n) - ghế băng, ghế dài
completion (n) - sự hoàn thành
decade (n) - thập kỷ
waste (n) - rác thải, chất thải, sự lãng phí
agency (n) - đại lý, cơ quan
consulting (n) - sự tư vấn
process (n) - quá trình, quy trình
campaign (n) - chiến dịch
feedback (n) - ý kiến phản hồi
plumbing (n) - hệ thống ống nước, công việc sửa ống nước
school (n) - trường học
committee (n) - ủy ban
vacation (n) - kỳ nghỉ
staff (n) - nhân viên, đội ngũ nhân viên
fertilizer (n) - phân bón
nutrient (n) - chất dinh dưỡng
soil (n) - đất trồng, thổ nhưỡng
Reading 6 - IPA
hire (v, n) - thuê, mướn
laboratory (n) - phòng thí nghiệm
worker (n) - công nhân, người lao động
boot (n) - giày ống, ủng
wear (v) - mặc, mang, đội
hike (n, v) - chuyến đi bộ đường dài, đi bộ
intern (n) - thực tập sinh
instrument (n) - dụng cụ, thiết bị
audience (n) - khán giả, thính giả
impression (n) - ấn tượng
speaker (n) - người nói, diễn giả
presentation (n) - bài thuyết trình
career (n) - sự nghiệp
fair (n) - hội chợ
attend (v) - tham dự
employer (n) - nhà tuyển dụng, người sử dụng lao động
agency (n) - đại lý, cơ quan
time sheet (n) - bảng chấm công
payroll (n) - bảng lương, bộ phận tính lương
department (n) - phòng ban, bộ phận
frame (n, v) - khung, đóng khung
weight (n) - trọng lượng, cân nặng
author (n) - tác giả
beautification (n) - sự làm đẹp, chỉnh trang
restore (v) - khôi phục
portfolio (n) - danh mục đầu tư, hồ sơ năng lực
resident (n) - cư dân
discount (n, v) - sự giảm giá, giảm giá
engineer (n) - kỹ sư
venue (n) - địa điểm tổ chức
evaluate (v) - đánh giá
attendance (n) - sự tham dự, số lượng người tham dự
executive (n) - giám đốc điều hành, quản lý cấp cao
praise (v, n) - khen ngợi, lời khen
concern (n, v) - mối quan tâm, lo lắng
manner (n) - cách thức, thái độ
feasibility (n) - tính khả thi
bridge (n) - cây cầu
annotation (n) - sự chú thích, phần chú giải
app (n) - ứng dụng
efficiency (n) - hiệu suất, hiệu quả
expert (n) - chuyên gia
work site (n) - công trường, nơi làm việc
flexibility (n) - sự linh hoạt
figure (n) - con số, số liệu
reinforce (v) - củng cố, tăng cường
arrangement (n) - sự sắp xếp
arrival (n) - sự đến nơi
headquarters (n) - trụ sở chính
ceiling fan (n) - quạt trần
customer (n) - khách hàng
adviser (n) - người cố vấn
inquiry (n) - yêu cầu thông tin, câu hỏi
text (n, v) - tin nhắn văn bản, nhắn tin
property (n) - bất động sản, tài sản
advertising (n) - sự quảng cáo, ngành quảng cáo
package (n) - gói hàng, gói dịch vụ
promote (v) - thúc đẩy, quảng bá
brand (n) - thương hiệu
identity (n) - bản sắc, danh tính
convey (v) - truyền đạt, truyền tải
image (n) - hình ảnh
committee (n) - ủy ban
candidate (n) - ứng cử viên
position (n) - vị trí
nominate (v) - đề cử
board (n) - ban quản trị, hội đồng
education (n) - giáo dục
meeting (n) - cuộc họp
stream (v, n) - phát trực tiếp, dòng suối
district (n) - quận, khu vực
editor (n) - biên tập viên
ability (n) - khả năng
approach (v, n) - tiếp cận, phương pháp tiếp cận
subject matter (n) - chủ đề
objectivity (n) - tính khách quan
effort (n) - sự nỗ lực
team (n) - đội, nhóm
staff (n) - nhân viên
get-together (n) - buổi họp mặt
recognize (v) - công nhận, nhận ra
student (n) - học sinh, sinh viên
university (n) - trường đại học
program (n) - chương trình
course (n) - khóa học
schedule (n, v) - lịch trình, lên lịch trình
detail (n, v) - chi tiết, trình bày chi tiết
leader (n) - nhà lãnh đạo
funding (n) - quỹ tài trợ, việc cấp vốn
participant (n) - người tham gia
debate (n, v) - cuộc tranh luận, tranh luận
amount (n) - số lượng, khoản
blast (n) - luồng gió, vụ nổ
workspace (n) - không gian làm việc
generate (v) - tạo ra, phát ra
stay (n, v) - sự lưu trú, ở lại
deliberation (n) - sự thảo luận kỹ, sự suy nghĩ cân nhắc
safety (n) - sự an toàn
building (n) - tòa nhà
exit (n, v) - lối thoát, ra ngoài
prioritization (n) - sự ưu tiên
prevention (n) - sự phòng ngừa
method (n) - phương pháp
treatment (n) - sự điều trị
health (n) - sức khỏe
outcome (n) - kết quả
lead (v) - dẫn đến, lãnh đạo
system (n) - hệ thống
store (n) - cửa hàng
business (n) - doanh nghiệp, việc kinh doanh
decline (n, v) - sự sụt giảm, suy giảm
commission (v, n) - ủy thác, tiền hoa hồng
option (n) - sự lựa chọn
layout (n) - bố cục
assess (v) - đánh giá
equipment (n) - thiết bị
atmosphere (n) - bầu không khí
superintendent (n) - giám đốc, người quản lý
accept (v) - chấp nhận
enthusiasm (n) - sự nhiệt tình
patio (n) - hiên nhà, sân trong
umbrella (n) - cái ô, dù
wind (n) - cơn gió
mile (n) - dặm
forefront (n) - tuyến đầu, vị trí hàng đầu
field (n) - lĩnh vực, cánh đồng
require (v) - yêu cầu
advance (n, v) - sự tiến bộ, tiến lên
agreement (n) - thỏa thuận, hợp đồng
official (n) - viên chức, quan chức
propose (v) - đề xuất
evaluate (v) - đánh giá, định giá
tester (n) - người kiểm tra, người thử nghiệm
level (n) - cấp độ, mức độ
frustrate (v) - làm thất vọng, gây bực bội
trade fair (n) - hội chợ thương mại
booth (n) - gian hàng
assemble (v) - lắp ráp
painting (n) - bức tranh
photograph (n) - bức ảnh
restaurant (n) - nhà hàng
decorate (v) - trang trí
meal (n) - bữa ăn
receipt (n) - biên lai, hóa đơn
submit (v) - nộp, đệ trình
reimburse (v) - hoàn tiền, bồi hoàn
skill (n) - kỹ năng
newspaper (n) - tờ báo
article (n) - bài báo
transportation (n) - giao thông vận tải
fare (n) - giá vé
decrease (n, v) - sự suy giảm, giảm bớt
affordability (n) - khả năng chi trả
destruction (n) - sự phá hủy, tiêu hủy
file (n, v) - hồ sơ, lưu trữ hồ sơ
maintain (v) - duy trì
confidentiality (n) - tính bảo mật
wind farm (n) - trang trại điện gió
opposition (n) - sự phản đối
cancel (v) - hủy bỏ
response (n) - sự phản hồi
territory (n) - lãnh thổ, khu vực
decide (v) - quyết định
proceed (v) - tiến hành, tiếp tục
expand (v) - mở rộng
caution (n, v) - sự thận trọng, cảnh báo
payment (n) - sự thanh toán
correspondence (n) - thư từ, thư tín
growth (n) - sự tăng trưởng
confirm (v) - xác nhận
separation (n) - sự tách rời, chia tách
document (n) - tài liệu
handle (v) - xử lý, cầm nắm
sharing (n) - sự chia sẻ
memo (n) - bản ghi nhớ
prohibit (v) - cấm, ngăn cấm
exhibition (n) - cuộc triển lãm
fee (n) - lệ phí, phí
waive (v) - miễn (phí), từ bỏ
artist (n) - nghệ sĩ, họa sĩ
stage (n) - giai đoạn, sân khấu
process (n, v) - quy trình, xử lý
satisfaction (n) - sự hài lòng
ensure (v) - đảm bảo
let (v) - để cho, cho phép
banner (n) - băng rôn, biểu ngữ
printing (n) - việc in ấn
request (n, v) - yêu cầu, lời yêu cầu
suspend (v) - đình chỉ, tạm ngưng
ship (v) - giao hàng, vận chuyển
reader (n) - độc giả
column (n) - chuyên mục (báo)
management (n) - sự quản lý, ban quản lý
advice (n) - lời khuyên
appreciate (v) - đánh giá cao, trân trọng
thought (n) - suy nghĩ, tư tưởng
computer (n) - máy tính
extension (n) - số máy lẻ, sự mở rộng
researcher (n) - nhà nghiên cứu
glass (n) - ly, cốc, kính
strain (n, v) - sự căng thẳng, làm căng thẳng
suggest (v) - gợi ý, cho thấy
prevent (v) - ngăn chặn
visitor (n) - khách tham quan
draw (v) - thu hút, vẽ
excitement (n) - sự phấn khích, hào hứng
graduate (n) - người tốt nghiệp
certification (n) - sự chứng nhận, giấy chứng nhận
world (n) - thế giới
adapt (v) - thích nghi
clothes (n) - quần áo
comment (n, v) - bình luận, lời bình luận
vacation (n) - kỳ nghỉ
information (n) - thông tin
vehicle (n) - xe cộ, phương tiện
island (n) - hòn đảo
woman (n) - người phụ nữ
women (n) - những người phụ nữ (số nhiều)
man (n) - người đàn ông
men (n) - những người đàn ông (số nhiều)
chef (n) - đầu bếp
asian (n) - người châu Á
knife (n) - con dao
machine (n) - máy móc
explanation (n) - lời giải thích
preparation (n) - sự chuẩn bị
photographer (n) - nhiếp ảnh gia
exhibit (n, v) - vật trưng bày, triển lãm
belonging (n) - đồ dùng cá nhân, tài sản
colleague (n) - đồng nghiệp
vegetable (n) - rau củ
chocolate (n) - sô-cô-la
genre (n) - thể loại
data (n) - dữ liệu
architect (n) - kiến trúc sư
recipe (n) - công thức nấu ăn
climb (v, n) - leo trèo, sự leo trèo
interest (n, v) - sự quan tâm, sở thích
determine (v) - xác định, quyết định
develop (v) - phát triển
persuade (v) - thuyết phục
procedure (n) - thủ tục, quy trình
negotiate (v) - đàm phán, thương lượng
itinerary (n) - lịch trình chuyến đi
representative (n) - người đại diện
refrigerator (n) - tủ lạnh
budget (n, v) - ngân sách, lên ngân sách
record (n, v) - hồ sơ/kỷ lục, ghi lại
present (n, v) - món quà/hiện tại, trình bày
permit (n, v) - giấy phép, cho phép
contract (n, v) - hợp đồng, ký hợp đồng
produce (n, v) - nông sản, sản xuất
increase (n, v) - sự gia tăng, tăng lên
progress (n, v) - sự tiến bộ, tiến triển
Reading 7 - Pronoun 
decide (v) - quyết định
run (v) - điều hành, chạy
business (n) - công việc kinh doanh, doanh nghiệp
manager (n) - người quản lý
appreciate (v) - đánh giá cao
dedication (n) - sự cống hiến
company (n) - công ty
pay raise (n) - sự tăng lương
project management software (n) - phần mềm quản lý dự án
allow (v) - cho phép
staff (n) - nhân viên
handle (v) - xử lý
task (n) - nhiệm vụ
limit (v) - giới hạn
break (n) - giờ nghỉ giải lao
cope (with) (v) - đối phó với
problem (n) - vấn đề
promise (v) - hứa
take (v) - nhận, lấy
responsibility (n) - trách nhiệm
project (n) - dự án
founder (n) - người sáng lập
taxi service (n) - dịch vụ taxi
drive (v) - lái xe
taxi (n) - xe taxi
item (n) - mặt hàng, món đồ
lose (v) - làm mất, thất lạc
transit (n) - quá trình vận chuyển
clean (v) - dọn dẹp, làm sạch
carpet (n) - tấm thảm
lobby (n) - sảnh
security camera (n) - camera an ninh
adjust (v) - điều chỉnh
record (v) - ghi lại
video (n) - đoạn phim, video
night (n) - ban đêm
year (n) - năm
office (n) - văn phòng
administrative assistant (n) - trợ lý hành chính
people (n) - mọi người, người
introduce (v) - giới thiệu
meeting (n) - cuộc họp
half (n) - một nửa
commercial contractor (n) - nhà thầu thương mại
worker (n) - công nhân
advise (v) - khuyên
operate (v) - vận hành
machine (n) - máy móc
merchant (n) - thương gia, người buôn bán
succeed (v) - thành công
benefit (v, n) - hưởng lợi, lợi ích
candidate (n) - ứng viên
position (n) - vị trí
qualification (n) - bằng cấp, trình độ chuyên môn
call (v) - gọi điện
housekeeping office (n) - văn phòng bộ phận buồng phòng
front desk (n) - quầy lễ tân
want (v) - muốn
towel (n) - khăn tắm
supply (n) - đồ dùng, vật tư
diet program (n) - chương trình ăn kiêng
assist (v) - hỗ trợ
encourage (v) - khuyến khích
lead (v) - dẫn dắt, có (một lối sống)
lifestyle (n) - lối sống
say (v) - nói
plan (n, v) - kế hoạch, lên kế hoạch
employee (n) - nhân viên
break room (n) - phòng nghỉ giải lao
customer service hotline (n) - đường dây nóng chăm sóc khách hàng
credit card (n) - thẻ tín dụng
steal (v) - đánh cắp
send (v) - gửi
e-mail (n) - thư điện tử
receipt (n) - sự nhận được, biên lai
application (n) - đơn đăng ký, ứng dụng
safety procedure (n) - quy trình an toàn
portfolio (n) - danh mục đầu tư, hồ sơ năng lực
think (v) - suy nghĩ
staff dinner (n) - bữa tối của nhân viên
give (v) - cho, mang lại
department (n) - phòng ban
chance (n) - cơ hội
interact (v) - tương tác
level (n) - mức độ
prepare (v) - chuẩn bị
marketing budget (n) - ngân sách tiếp thị
propose (v) - đề xuất
client meeting (n) - cuộc họp khách hàng
buy (v) - mua
ticket (n) - vé
concert (n) - buổi hòa nhạc
sell out (v) - bán hết
do (v) - làm
revise (v) - chỉnh sửa, sửa đổi
merchandise (n) - hàng hóa
ship (v) - giao hàng
venue (n) - địa điểm
request (v, n) - yêu cầu
play (n) - vở kịch
attend (v) - tham dự
standing desk (n) - bàn đứng
technical support team (n) - đội hỗ trợ kỹ thuật
come (v) - đến
component (n) - thành phần, linh kiện
dishwasher (n) - máy rửa bát
model (n) - mẫu mã
member (n) - thành viên
sales team (n) - đội ngũ bán hàng
see (v) - xem, thấy
sales forecast presentation (n) - bài thuyết trình dự báo doanh số
get (v) - có được, nhận được
job (n) - công việc
announce (v) - thông báo
retire (v) - nghỉ hưu
marketing manager (n) - giám đốc tiếp thị
meet (v) - gặp gỡ
press (n) - báo chí
vice president (n) - phó chủ tịch
warranty (n) - giấy bảo hành
peace of mind (n) - sự an tâm
finish (v) - hoàn thành
presentation (n) - bài thuyết trình
audience (n) - khán giả
permit (v) - cho phép
ask (v) - hỏi
question (n) - câu hỏi
management position (n) - vị trí quản lý
hiring committee (n) - hội đồng tuyển dụng
choose (v) - chọn lựa
learn (v) - biết được, học
finalist (n) - người lọt vào chung kết
technology competition (n) - cuộc thi công nghệ
dessert (n) - món tráng miệng
enjoy (v) - thưởng thức
painter (n) - họa sĩ
develop (v) - phát triển
style (n) - phong cách
live (v) - sinh sống
prevent (v) - ngăn chặn
graphic artist (n) - nghệ sĩ đồ họa
access (v) - truy cập
image file (n) - tệp hình ảnh
main database (n) - cơ sở dữ liệu chính
commend (v) - khen ngợi
account (n) - tài khoản, khách hàng
attract (v) - thu hút
attention (n) - sự chú ý
head of public relations (n) - trưởng bộ phận quan hệ công chúng
search (v) - tìm kiếm
auto glass repair shop (n) - tiệm sửa kính ô tô
technician (n) - kỹ thuật viên
expire (v) - hết hạn
tractor (n) - máy kéo
hour (n) - giờ
occur (v) - xảy ra
class (n) - lớp học
promote (v) - thăng chức, quảng bá
retirement party (n) - tiệc nghỉ hưu
coworker (n) - đồng nghiệp
student (n) - học sinh, sinh viên
transfer (v) - thuyên chuyển
branch (n) - chi nhánh
eliminate (v) - loại bỏ
corporate restructuring (n) - việc tái cơ cấu doanh nghiệp
intern (n) - thực tập sinh
complete (v) - hoàn thành
probation period (n) - thời gian thử việc
evaluate (v) - đánh giá
editor (n) - biên tập viên
include (v) - bao gồm
fact (n) - sự thật, dữ kiện
article (n) - bài báo
recover (v) - khôi phục
file (n) - tệp tài liệu
delete (v) - xóa
believe (v) - tin tưởng
skill (n) - kỹ năng
complement (v) - bổ sung
chef (n) - đầu bếp
equip (v) - trang bị
set (n) - bộ
kitchen knife (n) - dao làm bếp
dessert option (n) - lựa chọn món tráng miệng
caterer (n) - nhà cung cấp dịch vụ ăn uống
require (v) - yêu cầu
refrigeration (n) - sự làm lạnh, ướp lạnh
dress code (n) - quy định về trang phục
post (v) - dán, thông báo
spot (n) - vị trí, điểm
employee lounge (n) - phòng nghỉ nhân viên
floor (n) - tầng
renovate (v) - cải tạo, nâng cấp
evening (n) - buổi tối
owner (n) - chủ sở hữu
help (v, n) - giúp đỡ
prepare (v) - chuẩn bị
ingredient (n) - nguyên liệu
serve (v) - phục vụ
diner (n) - thực khách
leave (v) - rời đi
approval (n) - sự chấp thuận, phê duyệt
printer (n) - máy in
arrive (v) - đến
morning (n) - buổi sáng
connect (v) - kết nối
network (n) - mạng lưới
department manager (n) - trưởng phòng
delivery option (n) - tùy chọn giao hàng
customer (n) - khách hàng
preference (n) - sở thích, sự ưu tiên
Reading 8 - Conjunctions 
ensure (v) - đảm bảo, bảo đảm
fix (v) - sửa chữa, khắc phục, cố định
become (v) - trở thành
share (v, n) - chia sẻ, đóng góp, cổ phần
submit (v) - nộp, đệ trình
locate (v) - định vị, xác định vị trí
begin (v) - bắt đầu
negotiate (v) - đàm phán, thương lượng
finalize (v) - hoàn thành, chốt hạ
predict (v) - dự đoán
postpone (v) - trì hoãn
combine (v) - kết hợp
provide (v) - cung cấp
take (v) - lấy, cầm, mất (thời gian)
decide (v) - quyết định
reach (v) - đạt tới, liên hệ
introduce (v) - giới thiệu, ra mắt
analyze (v) - phân tích
please (v) - làm vui lòng, làm hài lòng
cancel (v) - hủy bỏ, bãi bỏ
remain (v) - duy trì, vẫn còn
authorize (v) - ủy quyền, cho phép
sign (v) - ký tên, ký kết, ra hiệu
call (v, n) - gọi, gọi điện, cuộc gọi
start (v, n) - bắt đầu, sự bắt đầu
move (v) - di chuyển, dời đi
renovate (v) - cải tạo, nâng cấp
lead (v) - dẫn đầu, dẫn dắt, dẫn đến
open (v, adj) - mở, khai trương, rộng mở
install (v) - lắp đặt, cài đặt
leak (v, n) - rò rỉ, sự rò rỉ
see (v) - nhìn, thấy, hiểu
deliver (v) - giao hàng, phát biểu
reserve (v, n) - đặt trước, bảo tồn, sự dự trữ
resume (v, n) - bắt đầu lại, tiếp tục, sơ yếu lý lịch
return (v, n) - trở lại, gửi lại, sự trở lại
request (v, n) - yêu cầu, đề nghị, lời yêu cầu
silence (v, n) - làm câm lặng, sự im lặng
advise (v) - khuyên bảo, tư vấn
sell (v) - bán
succeed (v) - thành công
register (v, n) - đăng ký, máy tính tiền
require (v) - yêu cầu, đòi hỏi
recommend (v) - khuyến nghị, giới thiệu, đề xuất
agree (v) - đồng ý
attend (v) - tham dự, có mặt
furnish (v) - trang bị đồ nội thất
do (v) - làm, thực hiện
complete (v, adj) - hoàn thành, đầy đủ
allow (v) - cho phép
ask (v) - yêu cầu, hỏi
leave (v, n) - rời đi, để lại, sự cho phép
oversee (v) - giám sát
engineer (v, n) - thiết kế kỹ thuật, chế tạo, kỹ sư
expect (v) - kỳ vọng, mong đợi
come (v) - đến, đi tới
put (up) (v) - dựng lên, treo lên
scan (v, n) - quét, quét mã, sự quét
field (v, n) - trả lời (câu hỏi), giải quyết nhanh (chất vấn), lĩnh vực
join (v) - tham gia, gia nhập
employ (v) - thuê làm, tuyển dụng
award (v, n) - trao giải, giải thưởng
mail (v, n) - gửi thư, thư từ
contact (v, n) - liên lạc, tiếp xúc, sự liên lạc
wish (v, n) - mong muốn, lời chúc
receive (v) - nhận
park (v, n) - đỗ xe, công viên
risk (v, n) - mạo hiểm, liều, rủi ro
tow (v, n) - cẩu, kéo (xe), sự cẩu xe
send (v) - gửi
edit (v) - biên tập, chỉnh sửa
change (v, n) - thay đổi, sự thay đổi
hold (v) - tổ chức, cầm, giữ
discuss (v) - thảo luận
go (v) - đi, chạy
hesitate (v) - do dự, ngập ngừng
want (v) - muốn
study (v, n) - học tập, nghiên cứu, công trình nghiên cứu
update (v, n) - cập nhật, bản cập nhật
run (v) - chạy, vận hành
break (down) (v) - hỏng hóc, bị suy sụp
draw (up) (v) - lập ra, soạn thảo
replace (v) - thay thế
arise (v) - phát sinh, nảy sinh
maintenance (n) - sự bảo trì, bảo dưỡng
equipment (n) - thiết bị, trang bị
issue (n) - vấn đề, số phát hành
attendee (n) - người tham gia
accommodations (n) - nơi ở, chỗ lưu trú
room (n) - phòng, không gian
space (n) - không gian, khoảng trống
agreement (n) - thỏa thuận, hợp đồng
campaign (n) - chiến dịch
term (n) - điều khoản, thuật ngữ, kỳ hạn
contract (n) - hợp đồng
rain (n) - cơn mưa
weekend (n) - cuối tuần
picnic (n) - buổi dã ngoại
internship (n) - kỳ thực tập, thực tập sinh
lecture (n) - bài giảng, bài thuyết trình
project (n) - dự án, công trình
instruction (n) - sự hướng dẫn, chỉ dẫn
experience (n) - kinh nghiệm, trải nghiệm
communications (n) - sự truyền thông, thông tin liên lạc
year (n) - năm
time (n) - thời gian, lần
band (n) - ban nhạc, nhóm
ticket (n) - vé
concert (n) - buổi hòa nhạc
sales (n) - doanh số, sự bán hàng
album (n) - album ảnh, đĩa nhạc
flavor (n) - hương vị
survey (n) - cuộc khảo sát
results (n) - kết quả
report (n) - báo cáo, bản báo cáo
staff (n) - nhân viên, đội ngũ nhân viên
vacation (n) - kỳ nghỉ
office (n) - văn phòng
CEO (n) - giám đốc điều hành
CFO (n) - giám đốc tài chính
check (n) - hóa đơn, séc, sự kiểm tra
chimney (n) - ống khói
inspection (n) - sự thanh tra, kiểm tra
cleaning (n) - việc lau dọn, làm sạch
winter (n) - mùa đông
help (n) - sự giúp đỡ
desk (n) - bàn làm việc
competitor (n) - đối thủ cạnh tranh
revenue (n) - doanh thu
innovation (n) - sự đổi mới, cải tiến
barbershop (n) - tiệm cắt tóc nam
neighborhood (n) - khu lân cận, khu xóm
cartridge (n) - hộp mực (máy in), đầu đạn
ink (n) - mực
presentation (n) - bài thuyết trình
overview (n) - cái nhìn tổng quan, tóm tắt
aspect (n) - khía cạnh
learning (n) - việc học tập, kiến thức tích lũy
opportunity (n) - cơ hội
development (n) - sự phát triển
advantage (n) - lợi thế, ưu điểm
dinner (n) - bữa tối
restaurant (n) - nhà hàng
committee (n) - ủy ban
meeting (n) - cuộc họp
theater (n) - nhà hát, rạp hát
device (n) - thiết bị, công cụ
play (n) - vở kịch, trò chơi
difficulty (n) - sự khó khăn
agent (n) - đại lý, người đại diện
month (n) - tháng
building (n) - tòa nhà, công trình xây dựng
realtor (n) - người môi giới bất động sản
banking (n) - hoạt động ngân hàng
customer (n) - khách hàng
holiday (n) - ngày lễ, kỳ nghỉ
conference (n) - hội nghị
supervisor (n) - người giám sát
repairs (n) - công việc sửa chữa, sự sửa chữa
personnel (n) - nhân sự, nhân viên
client (n) - khách hàng
station (n) - nhà ga, trạm
e-mail (n) - thư điện tử, email
opening (n) - lễ khai trương, vị trí khuyết
branch (n) - chi nhánh, cành cây
editor (n) - biên tập viên, người chỉnh sửa
director (n) - giám đốc, đạo diễn
approval (n) - sự phê duyệt, tán thành
sedan (n) - xe hạp, xe sedan
reliability (n) - độ tin cậy
mileage (n) - quãng đường di chuyển bằng dặm, mức tiêu hao nhiên liệu
team (n) - đội, nhóm
member (n) - thành viên
hotel (n) - khách sạn
site (n) - địa điểm, trang web
option (n) - lựa chọn
intern (n) - thực tập sinh
supplement (n) - thực phẩm bổ sung, phần bổ sung
pill (n) - viên thuốc
liquid (n) - chất lỏng
form (n) - hình thức, mẫu đơn
poster (n) - áp phích, tranh cổ động
gala (n) - buổi dạ tiệc, lễ hội
advance (n) - sự tiến bộ, sự ứng trước
checkout (n) - việc thanh toán, quầy thu ngân
cashier (n) - thu ngân
board (n) - ban quản trị, hội đồng, tấm bảng
accountant (n) - kế toán viên
investor (n) - nhà đầu tư
renovation (n) - sự cải tạo, đổi mới
park (n) - công viên
bid (n) - giá thầu, sự trả giá
service (n) - dịch vụ, sự bảo dưỡng
visitor (n) - khách, khách tham quan
area (n) - khu vực
vehicle (n) - xe cộ, phương tiện giao thông
system (n) - hệ thống
manager (n) - người quản lý
sheet (n) - tờ, tấm, bảng
speaker (n) - diễn giả, loa phát thanh
protocol (n) - giao thức, nghi thức ngoại giao
effect (n) - tác động, hiệu ứng, hiệu lực
diplomat (n) - nhà ngoại giao
relation (n) - mối quan hệ
university (n) - trường đại học
information (n) - thông tin
directory (n) - danh bạ, danh mục
computer (n) - máy tính
software (n) - phần mềm
projector (n) - máy chiếu
list (n) - danh sách
lighting (n) - hệ thống chiếu sáng
fixture (n) - đồ gá lắp cố định (đèn, vòi nước...)
bill (n) - hóa đơn
lunch (n) - bữa ăn trưa
sandwich (n) - bánh mì kẹp
salad (n) - món rau trộn, sa-lát
fries (n) - khoai tây chiên
bowl (n) - cái bát, tô
soup (n) - món súp, canh
problem (n) - vấn đề, trở ngại
purifier (n) - máy lọc, thiết bị làm sạch
storage (n) - kho chứa, sự lưu trữ
filter (n) - bộ lọc, màng lọc
Reading 9 - Prepositions 
process (v) - xử lý, chế biến
sell (v) - bán
feature (v, n) - có đặc điểm nổi bật, chiếu (phim), đặc tả, tính năng
discuss (v) - thảo luận
make (v) - chế tạo, làm ra, thực hiện
begin (v) - bắt đầu
scheduling (n, v) - lên lịch trình
monitor (v, n) - theo dõi, giám sát, màn hình
identify (v) - xác định, nhận diện
labeling (n, v) - dán nhãn, ghi nhãn
want (v) - muốn
surprise (v, n) - làm ngạc nhiên, sự ngạc nhiên
notify (v) - thông báo
perform (v) - biểu diễn, thực hiện
extend (v) - gửi tới, kéo dài, gia hạn
vary (v) - khác nhau, thay đổi
locate (v) - định vị, nằm ở
build (v) - xây dựng
approve (v) - phê duyệt, thông qua
list (v, n) - liệt kê, ghi danh, danh sách
finish (v) - hoàn thành, kết thúc
delay (v, n) - trì hoãn, sự chậm trễ
decide (v) - quyết định
reduce (v) - giảm bớt
file (v, n) - nộp, lưu trữ (hồ sơ), tập tin
practice (v, n) - thực hành, hành nghề, sự luyện tập
inform (v) - thông báo, báo tin
propose (v) - đề xuất, đề nghị
add (v) - thêm vào
visit (v, n) - ghé thăm, tham quan, chuyến viếng thăm
become (v) - trở thành
drop (v, n) - giảm, sụt, rơi, giọt nước
expect (v) - mong đợi, kỳ vọng
vote (v, n) - bỏ phiếu, bầu chọn, lá phiếu
award (v, n) - trao giải, giải thưởng
obtain (v) - đạt được, có được
remove (v) - dọn dẹp, gỡ bỏ, di chuyển
leave (v, n) - rời đi, bỏ lại, sự cho phép
specialize (v) - chuyên về
allow (v) - cho phép
open (v) - mở, khai trương
move (v, n) - di chuyển, tiến lên, sự di chuyển
undergo (v) - trải qua
interview (v, n) - phỏng vấn, cuộc phỏng vấn
serve (v) - phục vụ
meet (v) - gặp gỡ, đáp ứng
plan (v, n) - lên kế hoạch, kế hoạch
name (v, n) - đặt tên, bổ nhiệm, tên
cook (v, n) - nấu ăn, đầu bếp
double (v) - tăng gấp đôi, gấp hai lần
take (v) - lấy, cầm, thực hiện
stack (v, n) - chất đống, xếp chồng, đống
respond (v) - phản hồi, trả lời
provide (v) - cung cấp
expedite (v) - xúc tiến, đẩy nhanh
access (v, n) - truy cập, tiếp cận, sự truy cập
enter (v) - bước vào, nhập vào
attend (v) - tham dự, có mặt
reach (v) - liên lạc, đạt tới
call (v, n) - gọi, gọi điện, cuộc gọi
end (v, n) - kết thúc, phần cuối
complete (v, adj) - hoàn thành, đầy đủ
report (v, n) - báo cáo, bản báo cáo
survey (v, n) - khảo sát, cuộc khảo sát
guest (n) - khách, khách lưu trú
view (n) - quang cảnh, quan điểm, tầm nhìn
ocean (n) - đại dương
window (n) - cửa sổ
precipitation (n) - lượng mưa, sự kết tủa
year (n) - năm
payment (n) - khoản thanh toán, sự thanh toán
Sunday (n) - ngày Chủ nhật
hour (n) - giờ
publisher (n) - nhà xuất bản
book (n) - cuốn sách
cafeteria (n) - nhà ăn tự phục vụ
dish (n) - món ăn, cái đĩa
region (n) - vùng, miền
world (n) - thế giới
week (n) - tuần
temperature (n) - nhiệt độ
computer (n) - máy tính
degree (n) - độ, bằng cấp
council (n) - hội đồng
policy (n) - chính sách
administration (n) - ban quản trị, chính quyền, sự quản lý
class (n) - lớp học
software (n) - phần mềm
inventory (n) - hàng tồn kho, sự kiểm kê
control (n) - sự kiểm soát, điều khiển
consultant (n) - cố vấn, chuyên gia tư vấn
problem (n) - vấn đề, trở ngại
manager (n) - người quản lý
director (n) - giám đốc, đạo diễn
estimate (n) - sự ước tính, bảng ước tính
task (n) - nhiệm vụ, công việc
draft (n) - bản nháp
agreement (n) - thỏa thuận, hợp đồng
lawyer (n) - luật sư
team (n) - đội, nhóm
concern (n) - sự lo lắng, mối quan tâm
profit (n) - lợi nhuận
price (n) - giá cả
expectation (n) - sự kỳ vọng, mong đợi
jewelry (n) - trang sức
stock (n) - cổ phiếu, hàng tồn kho
vice president (n) - phó chủ tịch, phó giám đốc
marketing (n) - tiếp thị, sự marketing
cost (n) - chi phí, giá cả
destination (n) - điểm đến
weight (n) - trọng lượng, cân nặng
package (n) - kiện hàng, gói hàng, gói dịch vụ
farm (n) - nông trại
mart (n) - chợ, trung tâm thương mại
road (n) - con đường
lane (n) - làn đường, đường nhỏ
intersection (n) - giao lộ, ngã tư
application (n) - đơn xin, ứng dụng
center (n) - trung tâm
opposition (n) - sự phản đối
resident (n) - cư dân
announcement (n) - thông báo, lời công bố
luncheon (n) - tiệc trưa
pool (n) - hồ bơi
stage (n) - giai đoạn, sân khấu
profile (n) - hồ sơ, tiểu sử
date (n) - ngày tháng, cuộc hẹn
bus (n) - xe buýt
terminal (n) - nhà ga, bến xe
condition (n) - điều kiện, tình trạng
budget (n) - ngân sách
owner (n) - chủ sở hữu
size (n) - kích thước, quy mô
garage (n) - nhà để xe
house (n) - ngôi nhà, căn nhà
program (n) - chương trình
history (n) - lịch sử
paperwork (n) - giấy tờ, thủ tục hành chính
department (n) - phòng ban, bộ phận
attorney (n) - luật sư
firm (n) - công ty, hãng
law (n) - luật pháp
staff (n) - nhân viên, đội ngũ nhân viên
partnership (n) - quan hệ đối tác, sự cộng tác
finance (n) - tài chính
vehicle (n) - xe cộ, phương tiện
sedan (n) - xe sedan
office (n) - văn phòng
percent (n) - phần trăm
board (n) - ban quản trị, hội đồng, tấm bảng
role (n) - vai trò
contract (n) - hợp đồng
bonus (n) - tiền thưởng
photography (n) - nhiếp ảnh, sự chụp ảnh
equipment (n) - thiết bị, trang bị
lunch (n) - bữa trưa
weekday (n) - ngày thường
box (n) - cái hộp
lounge (n) - phòng chờ, sảnh chờ
broker (n) - người môi giới
document (n) - tài liệu
client (n) - khách hàng
bakery (n) - tiệm bánh
dessert (n) - món tráng miệng
catering (n) - dịch vụ cung cấp đồ ăn uống
challenge (n) - thử thách
shop (n) - cửa hàng
memory (n) - bộ nhớ, trí nhớ
user (n) - người dùng
decline (n) - sự sụt giảm, suy thoái
revenue (n) - doanh thu
quarter (n) - quý (trong năm)
component (n) - linh kiện, thành phần
expansion (n) - sự mở rộng
leadership (n) - khả năng lãnh đạo, ban lãnh đạo
applicant (n) - người nộp đơn, ứng viên
holiday (n) - ngày lễ, ngày nghỉ
sky (n) - bầu trời
rain (n) - cơn mưa
celebration (n) - sự ăn mừng, lễ kỷ niệm
promotion (n) - sự thăng chức, khuyến mãi
tea (n) - trà
cookie (n) - bánh quy
meeting (n) - cuộc họp
movie (n) - bộ phim
success (n) - sự thành công
winner (n) - người chiến thắng
competition (n) - cuộc thi
art (n) - nghệ thuật
debate (n) - cuộc tranh luận
campaign (n) - chiến dịch
company (n) - công ty
show (n) - chương trình, buổi biểu diễn
demand (n) - nhu cầu, yêu cầu
consumer (n) - người tiêu dùng
soloist (n) - người hát đơn ca, biểu diễn đơn
performance (n) - màn trình diễn, hiệu suất
lesson (n) - bài học
violin (n) - đàn vi-ô-lông
age (n) - độ tuổi, tuổi tác
wood (n) - gỗ, củi
pallet (n) - tấm pallet, kệ kê hàng
warehouse (n) - nhà kho
feedback (n) - ý kiến phản hồi
appointment (n) - cuộc hẹn
submission (n) - sự nộp, đệ trình
voucher (n) - phiếu mua hàng, biên nhận
refund (n) - tiền hoàn trả, sự hoàn tiền
code (n) - mật mã, mã số
directory (n) - danh bạ, danh mục
tenant (n) - người thuê nhà
representative (n) - người đại diện
service (n) - dịch vụ, sự bảo dưỡng
Saturday (n) - ngày thứ Bảy
gallery (n) - phòng trưng bày nghệ thuật
bistro (n) - nhà hàng nhỏ, quán rượu nhỏ
half (n) - một nửa
manufacturer (n) - nhà sản xuất
sale (n) - doanh số, sự bán hàng
Reading 10 - Relative Clause 
paint (v, n) - sơn, vẽ, bức tranh
recommend (v) - tiến cử, khuyến nghị, giới thiệu
return (v, n) - trả lại, gửi lại, sự trở lại
purchase (v, n) - mua, sắm sửa, sự mua sắm
present (v, n, adj) - trình bày, đưa ra, món quà, hiện tại
provide (v) - cung cấp
enable (v) - cho phép, làm cho có thể
access (v, n) - truy cập, tiếp cận, sự truy cập
teach (v) - dạy học, giảng dạy
experience (v, n) - trải nghiệm, gặp phải, kinh nghiệm
ask (v) - yêu cầu, hỏi
maintain (v) - duy trì, bảo trì
contact (v, n) - liên lạc, tiếp xúc, sự liên lạc
encourage (v) - khuyến khích, động viên
bring (v) - mang, đem lại
qualify (v) - đủ điều kiện, đủ tiêu chuẩn
respond (v) - phản hồi, phản ứng
collect (v) - thu gom, thu thập
send (v) - gửi
publish (v) - xuất bản
write (v) - viết
succeed (v) - thành công, nối nghiệp
run (v) - chạy, vận hành, quản lý
build (v) - xây dựng
undergo (v) - trải qua
contain (v) - chứa đựng, bao gồm
move (v, n) - di chuyển, sự dịch chuyển
park (v, n) - đỗ xe, gửi xe, công viên
help (v, n) - giúp đỡ, sự giúp đỡ
set (v, n) - thiết lập, cài đặt, bộ, nhóm
read (v) - đọc
tend (v) - có xu hướng, chăm sóc
charge (v, n) - phụ trách, sạc pin, tính phí, sự phụ trách
wish (v, n) - mong muốn, ước nguyện, lời chúc
fill (out) (v) - điền vào (đơn)
make (v) - chế tạo, làm ra, thực hiện
advertise (v) - quảng cáo
receive (v) - nhận
prepare (v) - chuẩn bị
come (out) (v) - ra mắt, xuất hiện
greet (v) - chào đón, chào hỏi
live (v, adj) - sinh sống, trực tiếp
appear (v) - xuất hiện, có vẻ như
develop (v) - phát triển, chế tạo
recognize (v) - công nhận, nhận ra
collaborate (v) - hợp tác, cộng tác
request (v, n) - yêu cầu, đề nghị, lời yêu cầu
attend (v) - tham dự, có mặt
congratulate (v) - chúc mừng
result (v, n) - dẫn đến, kết quả
add (v) - thêm vào
study (v, n) - học tập, nghiên cứu, công trình nghiên cứu
host (v, n) - tổ chức, làm chủ nhà, chủ nhà
cover (v, n) - bao phủ, đề cập đến, che đắp, ảnh bìa
include (v) - bao gồm
take (v) - lấy, cầm, thực hiện (nghỉ giải lao)
list (v, n) - liệt kê, ghi danh, danh sách
appoint (v) - bổ nhiệm, chỉ định
welcome (v, n) - chào mừng, sự chào đón
begin (v) - bắt đầu
silence (v, n) - làm câm lặng, sự im lặng
want (v) - muốn
deliver (v) - giao hàng, phát biểu
opt (for) (v) - lựa chọn
exceed (v) - vượt quá, vượt trội
differ (v) - khác biệt, bất đồng
construct (v) - xây dựng
rise (v, n) - tăng lên, sự gia tăng
see (v) - nhìn, thấy, hiểu
cater (v) - cung cấp dịch vụ ăn uống, phục vụ
hire (v, n) - thuê, mướn, sự thuê mướn
assemble (v) - lắp ráp, tập hợp
earn (v) - giành được, kiếm được
pay (v) - thanh toán, trả tiền
print (v) - in ấn
feel (v) - cảm thấy, cảm giác
repair (v, n) - sửa chữa, sự sửa chữa
instruct (v) - hướng dẫn, chỉ thị
grow (v) - lớn lên, phát triển, trồng
nominate (v) - đề cử
submit (v) - nộp, đệ trình
explain (v) - giải thích
hold (v) - tổ chức, cầm, giữ
manager (n) - người quản lý
friend (n) - người bạn
lobby (n) - sảnh chờ, hành lang
interior (n, adj) - nội thất, phía trong
customer (n) - khách hàng
merchandise (n) - hàng hóa
receipt (n) - biên lai, hóa đơn, sự nhận được
store (n) - cửa hàng
password (n) - mật khẩu
office (n) - văn phòng
student (n) - học sinh, sinh viên
information (n) - thông tin
children (n) - trẻ em
parents (n) - cha mẹ
teachers (n) - giáo viên
employee (n) - nhân viên
problem (n) - vấn đề, trở ngại
team (n) - đội, nhóm
products (n) - sản phẩm
arrangement (n) - sự sắp xếp
complications (n) - sự biến chứng, sự phức tạp
software (n) - phần mềm
matter (n) - vấn đề, chủ đề, vật chất
attention (n) - sự chú ý
room (n) - phòng, không gian
candidates (n) - ứng viên
experience (n) - kinh nghiệm, trải nghiệm
years (n) - năm
concerns (n) - mối quan tâm, sự lo lắng
department (n) - phòng ban, bộ phận
correspondence (n) - thư tín, sự trao đổi thư từ
book (n) - cuốn sách
minister (n) - bộ trưởng
lady (n) - quý bà, quý cô
husband (n) - người chồng
business (n) - doanh nghiệp, việc kinh doanh
renovation (n) - sự cải tạo, nâng cấp
cookbook (n) - sách dạy nấu ăn
recipe (n) - công thức nấu ăn
cars (n) - xe ô tô
spaces (n) - chỗ trống, không gian
leaders (n) - người lãnh đạo
standards (n) - tiêu chuẩn
labels (n) - nhãn mác
food (n) - thức ăn, thực phẩm
artist (n) - họa sĩ, nghệ sĩ
works (n) - tác phẩm, nhà máy
display (n) - sự trưng bày, hiển thị
gallery (n) - phòng trưng bày nghệ thuật
head (n) - người đứng đầu, thủ trưởng
gift (n) - món quà, món tiền tặng
brochure (n) - sách hướng dẫn nhỏ, tờ gấp quảng cáo
form (n) - hình thức, mẫu đơn
billboards (n) - biển quảng cáo ngoài trời
services (n) - dịch vụ
districts (n) - khu vực, quận
reason (n) - lý do
people (n) - con người, mọi người
firm (n) - công ty, hãng
award (n) - giải thưởng, phần thưởng
chef (n) - đầu bếp
entrée (n) - món chính
critic (n) - nhà phê bình
person (n) - người, cá nhân
majority (n) - đa số, phần lớn
occupants (n) - người cư ngụ, người thuê nhà
system (n) - hệ thống
agent (n) - đại lý, người đại diện
name (n) - tên
phone (n) - điện thoại
number (n) - con số, số lượng
advertisement (n) - bài quảng cáo, tờ quảng cáo
chemists (n) - nhà hóa học
material (n) - vật liệu, tài liệu
ceremony (n) - nghi lễ, buổi lễ
venue (n) - địa điểm tổ chức
ticket (n) - vé
play (n) - vở kịch, trò chơi
effort (n) - nỗ lực
reduction (n) - sự cắt giảm
costs (n) - chi phí
waste (n) - rác thải, chất thải, sự lãng phí
disposal (n) - sự xử lý, loại bỏ
line (n) - dòng (sản phẩm), đường nét
clothes (n) - quần áo
popularity (n) - sự phổ biến, được yêu thích
athletes (n) - vận động viên
position (n) - vị trí, chức vụ
training (n) - việc đào tạo, huấn luyện
school (n) - trường học
seminars (n) - hội thảo chuyên đề
experts (n) - chuyên gia
topics (n) - chủ đề, đề tài
technology (n) - công nghệ
computers (n) - máy tính
warranty (n) - giấy bảo hành, cam kết
repairs (n) - công việc sửa chữa
replacements (n) - sự thay thế
report (n) - báo cáo, bản báo cáo
breaks (n) - giờ nghỉ giải lao
members (n) - thành viên
meeting (n) - cuộc họp
appendix (n) - phụ lục
patient (n) - bệnh nhân
records (n) - hồ sơ, kỷ lục
confidentiality (n) - tính bảo mật
representative (n) - người đại diện
industry (n) - ngành công nghiệp
patrons (n) - khách hàng quen, người bảo hộ
phones (n) - điện thoại
show (n) - chương trình, buổi biểu diễn
customers (n) - khách hàng
receipts (n) - biên lai, hóa đơn
e-mail (n) - thư điện tử, email
service (n) - dịch vụ, sự phục vụ
goals (n) - mục tiêu
productivity (n) - năng suất
level (n) - mức độ, cấp độ
drawings (n) - bản vẽ, bức vẽ
structure (n) - cấu trúc, công trình kiến trúc
building (n) - tòa nhà, công trình xây dựng
cities (n) - thành phố
housing (n) - việc cung cấp nhà ở, nhà ở
prices (n) - giá cả
rise (n) - sự tăng lên
café (n) - quán cà phê
diners (n) - thực khách
reviews (n) - bài đánh giá, nhận xét
workers (n) - công nhân, người lao động
booth (n) - gian hàng, quầy
points (n) - điểm
orders (n) - đơn hàng
ability (n) - khả năng, năng lực
detail (n) - chi tiết
trait (n) - đặc điểm, đặc tính
translators (n) - biên dịch viên
apparel (n) - quần áo, y phục
images (n) - hình ảnh
faculty (n) - khoa, đội ngũ giảng viên
subjects (n) - môn học, chủ đề
peak (n) - đỉnh núi, đỉnh cao
meters (n) - mét
technician (n) - kỹ thuật viên
transmissions (n) - hộp số, sự truyền phát
supplies (n) - đồ dùng, vật tư
notes (n) - ghi chú
goal (n) - mục tiêu
negotiations (n) - sự đàm phán, thương lượng
solution (n) - giải pháp, dung dịch
parties (n) - các bên, bữa tiệc
plants (n) - thực vật, cây trồng, nhà máy
conditions (n) - điều kiện, tình trạng
lighting (n) - hệ thống chiếu sáng, ánh sáng
watering (n) - việc tưới nước
recognition (n) - sự công nhận, thừa nhận
card (n) - chiếc thẻ
holders (n) - chủ thẻ, người nắm giữ
rewards (n) - phần thưởng
fee (n) - phí, lệ phí
floor (n) - tầng (nhà), sàn nhà
room (n) - phòng, không gian
Reading 11 - Reduced Relative Clause 
submit (v) - nộp, đệ trình
encourage (v) - khuyến khích, động viên
bring (v) - mang, đem lại
experience (v, n) - trải nghiệm, gặp phải, kinh nghiệm
mail (v, n) - gửi thư, thư từ, bức thư
begin (v) - bắt đầu
inform (v) - thông báo, báo tin
provide (v) - cung cấp
distribute (v) - phân phối, phân phát
present (v, n, adj) - trình bày, đưa ra, món quà, hiện tại
attach (v) - gắn kèm, đính kèm
detail (v, n) - trình bày chi tiết, chi tiết
get (v) - lấy, nhận được
load (v) - bốc dỡ, chất hàng lên
unload (v) - dỡ hàng xuống
require (v) - yêu cầu, đòi hỏi
contain (v) - chứa đựng, bao gồm
rise (v, n) - tăng lên, mọc lên, sự gia tăng
release (v, n) - phát hành, công bố, sự phóng thích
serve (v) - phục vụ, đóng vai trò
send (v) - gửi
perform (v) - thực hiện, biểu diễn
give (v) - đưa, cho, tặng
make (v) - chế tạo, làm ra, thực hiện
apply (v) - ứng tuyển, áp dụng
list (v, n) - liệt kê, ghi danh, danh sách
consider (v) - cân nhắc, xem xét
need (v, n) - cần, nhu cầu
ensure (v) - đảm bảo, bảo đảm
order (v, n) - đặt hàng, ra lệnh, đơn hàng
relate (v) - liên quan, kể lại
contact (v, n) - liên lạc, tiếp xúc, sự liên lạc
seek (v) - tìm kiếm, mưu cầu
invent (v) - phát minh, sáng chế
direct (v, adj) - hướng dẫn, gửi trực tiếp, trực tiếp
update (v, n) - cập nhật, bản cập nhật
build (v) - xây dựng
remain (v) - duy trì, vẫn còn
stand (v) - đứng, chịu đựng
comment (v, n) - bình luận, lời nhận xét
promise (v, n) - hứa hẹn, lời hứa
discuss (v) - thảo luận
take (v) - lấy, cầm, thực hiện (chụp ảnh)
tour (v, n) - đi tham quan, chuyến du lịch
recommend (v) - tiến cử, đề xuất, giới thiệu
become (v) - trở thành
assess (v) - đánh giá, ước tính
determine (v) - quyết định, xác định
suit (v, n) - phù hợp, bộ com-lê
grant (v, n) - cấp phép, trao cho, trợ cấp, khoản tài trợ
pay (v) - thanh toán, trả tiền
predict (v) - dự đoán
gain (v, n) - đạt được, giành được, lợi ích
control (v, n) - kiểm soát, sự kiểm soát
monitor (v, n) - theo dõi, giám sát, màn hình
identify (v) - xác định, nhận diện
write (v) - viết
equip (v) - trang bị
remind (v) - nhắc nhở
buckle (v) - thắt (dây an toàn), khóa lại
request (v, n) - yêu cầu, đề nghị, lời yêu cầu
print (v) - in ấn
return (v, n) - trả lại, gửi lại, sự trở lại
compile (v) - biên soạn, tập hợp
access (v, n) - truy cập, tiếp cận, sự truy cập
manufacture (v) - sản xuất, chế tạo
eliminate (v) - loại bỏ, loại trừ
stay (v, n) - ở lại, lưu trú, sự ở lại
watch (v, n) - xem, theo dõi, đồng hồ đeo tay
feature (v, n) - có đặc điểm nổi bật, mô tả, đặc điểm nổi bật
obtain (v) - đạt được, có được
support (v, n) - hỗ trợ, ủng hộ, sự hỗ trợ
occupy (v) - chiếm giữ, cư ngụ
suggest (v) - gợi ý, đề xuất
damage (v, n) - làm hư hại, sự thiệt hại
divide (v) - phân chia, chia ra
receive (v) - nhận
associate (v, n) - liên kết, kết hợp, cộng sự
imitate (v) - bắt chước, mô phỏng
learn (v) - học tập, tìm hiểu
tend (v) - có xu hướng, chăm sóc
allocate (v) - phân bổ, chia phần
accept (v) - chấp nhận
evaluate (v) - đánh giá
decide (v) - quyết định
apply (for) (v) - nộp đơn xin
reduce (v) - giảm bớt
wait (v) - đợi, chờ
invest (v) - đầu tư
commit (v) - cam kết, phạm lỗi
display (v, n) - hiển thị, trưng bày, sự trưng bày
upgrade (v, n) - nâng cấp, sự nâng cấp
affect (v) - ảnh hưởng, tác động
revise (v) - sửa đổi, ôn tập
follow (v) - tuân thủ, đi theo
attend (v) - tham dự, có mặt
answer (v, n) - trả lời, câu trả lời
complete (v, adj) - hoàn thành, đầy đủ
head (n) - người đứng đầu, thủ trưởng
department (n) - phòng ban, bộ phận
room (n) - phòng, không gian
party (n) - bữa tiệc, bên đối tác
form (n) - mẫu đơn, hình thức
complications (n) - sự biến chứng, sự phức tạp
software (n) - phần mềm
matter (n) - vấn đề, chủ đề, vật chất
attention (n) - sự chú ý
notices (n) - thông báo, sự chú ý
residents (n) - cư dân
outages (n) - sự mất điện, cúp nước
crews (n) - đội công tác, tổ lái
lines (n) - đường dây điện, cáp
company (n) - công ty
newsletter (n) - bản tin
world (n) - thế giới
information (n) - thông tin
products (n) - sản phẩm
chart (n) - biểu đồ, bản đồ
e-mail (n) - thư điện tử, email
comparison (n) - sự so sánh
smartphone (n) - điện thoại thông minh
model (n) - kiểu mẫu, người mẫu
travelers (n) - khách du lịch, người lữ hành
booklet (n) - cuốn sách nhỏ
transportation (n) - sự vận chuyển, giao thông vận tải
spots (n) - địa điểm, danh lam thắng cảnh
accommodations (n) - nơi ở, chỗ lưu trú
bureau (n) - cục, vụ, văn phòng
equipment (n) - thiết bị, trang bị
merchandise (n) - hàng hóa
maintenance (n) - sự bảo trì, bảo dưỡng
spreadsheet (n) - bảng tính
data (n) - dữ liệu, số liệu
sales (n) - doanh số, sự bán hàng
quarter (n) - quý (trong năm)
profits (n) - lợi nhuận
figures (n) - số liệu, nhân vật
strategy (n) - chiến lược
firm (n) - công ty, hãng
management (n) - ban quản trị, sự quản lý
corporations (n) - tập đoàn, công ty lớn
letter (n) - lá thư, chữ cái
courier (n) - người đưa thư, chuyển phát nhanh
service (n) - dịch vụ, sự bảo dưỡng
deal (n) - lượng lớn, sự giao dịch
analysis (n) - sự phân tích
tasks (n) - nhiệm vụ, công việc
girl (n) - cô gái
gift (n) - món quà, năng khiếu
friend (n) - người bạn
changes (n) - sự thay đổi
house (n) - ngôi nhà, căn nhà
permit (n) - giấy phép
advertisement (n) - bài quảng cáo, tờ quảng cáo
qualifications (n) - bằng cấp, năng lực chuyên môn
interview (n) - cuộc phỏng vấn, buổi phỏng vấn
guidelines (n) - nguyên tắc hướng dẫn
suppliers (n) - nhà cung cấp
standards (n) - tiêu chuẩn
questions (n) - câu hỏi, vấn đề
resources (n) - nguồn lực, tài nguyên
patent (n) - bằng sáng chế, phát minh
valve (n) - van thiết bị
proposal (n) - đề xuất, tờ trình
budget (n) - ngân sách
inquiries (n) - yêu cầu thông tin, sự hỏi han
person (n) - người, cá nhân
directory (n) - danh bạ, danh mục
coastline (n) - đường bờ biển
lighthouses (n) - ngọn hải đăng
project (n) - dự án, công trình
mayor (n) - thị trưởng
meeting (n) - cuộc họp
costs (n) - chi phí
year (n) - năm
heads (n) - người đứng đầu, thủ trưởng
visitors (n) - khách, khách tham quan
photographs (n) - bức ảnh chụp
areas (n) - khu vực, diện tích
facility (n) - cơ sở vật chất, trang thiết bị
policies (n) - chính sách
consultant (n) - cố vấn, chuyên gia tư vấn
process (n) - quá trình, quy trình
singer (n) - ca sĩ
band (n) - ban nhạc, nhóm
act (n) - tiết mục biểu diễn, hành động, đạo luật
aspects (n) - khía cạnh
properties (n) - bất động sản, đặc tính, tài sản
circumstances (n) - hoàn cảnh, tình huống
fee (n) - phí, lệ phí
right (n) - quyền lợi, bên phải
image (n) - hình ảnh
purposes (n) - mục đích
fluctuations (n) - sự dao động, biến động
popularity (n) - sự phổ biến, nổi tiếng
adviser (n) - người cố vấn
inventory (n) - hàng tồn kho, sự kiểm kê
problem (n) - vấn đề, trở ngại
journal (n) - tạp chí chuyên ngành, nhật ký
articles (n) - bài báo, điều khoản
field (n) - lĩnh vực, cánh đồng
cars (n) - xe ô tô
alarm (n) - còi báo động, sự lo ngại
drivers (n) - tài xế, người lái xe
seat (n) - chỗ ngồi
belts (n) - dây đai an toàn
bank (n) - ngân hàng
transfers (n) - sự chuyển khoản, chuyển nhượng
time (n) - thời gian, lần
apparel (n) - quần áo, y phục
images (n) - hình ảnh
customer (n) - khách hàng
payments (n) - khoản thanh toán, sự thanh toán
county (n) - hạt, quận
parks (n) - công viên
trails (n) - đường mòn
bus (n) - xe buýt
mat (n) - tấm thảm
shape (n) - hình dáng, vóc dáng
performers (n) - người biểu diễn, nghệ sĩ
competition (n) - cuộc thi, sự cạnh tranh
remainder (n) - phần còn lại
show (n) - chương trình, buổi biểu diễn
cookbook (n) - sách dạy nấu ăn
dishes (n) - món ăn, đĩa đựng thức ăn
ingredients (n) - nguyên liệu, thành phần
profile (n) - hồ sơ, tiểu sử
date (n) - ngày tháng, cuộc hẹn
plan (n) - kế hoạch, bản đồ
organizations (n) - tổ chức
grant (n) - khoản tài trợ, trợ cấp
reports (n) - báo cáo
evaluation (n) - sự đánh giá, ước tính
employees (n) - nhân viên
offices (n) - văn phòng
coworkers (n) - đồng nghiệp
needs (n) - nhu cầu
privacy (n) - sự riêng tư
options (n) - lựa chọn
caterer (n) - nhà cung cấp đồ ăn uống
refrigeration (n) - sự làm lạnh, tủ lạnh
wall (n) - bức tường
mural (n) - bức tranh tường
donations (n) - khoản quyên góp
fundraiser (n) - sự kiện gây quỹ, người gây quỹ
charity (n) - hội từ thiện, sự từ thiện
locations (n) - địa điểm
funds (n) - nguồn tiền, quỹ
expenses (n) - chi phí
hairstylists (n) - thợ làm tóc
salon (n) - thẩm mỹ viện, cửa hàng làm đẹp
variety (n) - sự đa dạng, nhiều loại
participants (n) - người tham gia
instructor (n) - người hướng dẫn, huấn luyện viên thể hình
movements (n) - động tác, sự chuyển động
technique (n) - kỹ thuật, phương pháp kỹ thuật
portion (n) - phần chia, khẩu phần ăn
research (n) - sự nghiên cứu
development (n) - sự phát triển
proposals (n) - đề xuất, tờ trình
neighborhood (n) - khu lân cận, khu xóm
café (n) - quán cà phê
cream (n) - kem, chất kem
appearance (n) - diện mạo, sự xuất hiện
lines (n) - đường nhăn nhỏ
wrinkles (n) - nếp nhăn lớn trên da
assurance (n) - sự đảm bảo, cam đoan
orchestra (n) - dàn nhạc
skills (n) - kỹ năng, kỹ xảo
applicants (n) - người nộp đơn, ứng viên
position (n) - vị trí, chức vụ
education (n) - sự giáo dục, học vấn
clients (n) - khách hàng
problems (n) - vấn đề, trở ngại
spreadsheets (n) - bảng tính
change (n) - sự thay đổi
demand (n) - nhu cầu, yêu cầu
strategy (n) - chiến lược
regulations (n) - quy định, điều lệ
session (n) - phiên làm việc, buổi học
assistant (n) - trợ lý
copies (n) - bản sao
presentation (n) - bài thuyết trình
audience (n) - khán giả, thính giả
questions (n) - câu hỏi, vấn đề
Reading 12 - Comparatives 
manage (v) - quản lý, giải quyết
affect (v) - ảnh hưởng, tác động
reveal (v) - tiết lộ, công bố
invest (v) - đầu tư
wait (v) - chờ, đợi
commit (v) - cam kết, phạm lỗi
keep (v) - giữ, duy trì
contribute (v) - đóng góp, góp phần
think (v) - suy nghĩ, nghĩ rằng
offer (v, n) - cung cấp, đề nghị, tặng
implement (v) - thi hành, áp dụng, thực hiện
fill (v) - điền vào, lấp đầy, thực hiện (đơn hàng)
protect (v) - bảo vệ, che chở
circulate (v) - lưu thông, tuần hoàn, lưu hành
provide (v) - cung cấp
construct (v) - xây dựng
repair (v, n) - sửa chữa, sự sửa chữa
show (v, n) - chỉ ra, hiển thị, cho thấy, chương trình biểu diễn
pay (v) - thanh toán, trả tiền
do (v) - làm, thực hiện
undergo (v) - trải qua
treat (v, n) - đối xử, điều trị, thiết đãi
campaign (n, v) - chiến dịch, tham gia chiến dịch
report (v, n) - báo cáo, bản báo cáo
expect (v) - kỳ vọng, mong đợi
take (v) - lấy, cầm, thực hiện (nghỉ ngơi)
find (v) - tìm thấy, thấy rằng
proofread (v) - hiệu đính, đọc và sửa bản in thử
visit (v, n) - ghé thăm, tham quan, chuyến viếng thăm
speak (v) - nói, phát biểu
explain (v) - giải thích
rent (v, n) - thuê, mướn, tiền thuê
ship (v, n) - giao hàng, vận chuyển, tàu thủy
sell (v) - bán
commuters (n) - người đi làm bằng phương tiện công cộng
weather (n) - thời tiết
closures (n) - sự đóng cửa, sự rào đường
number (n) - số lượng, con số
accounts (n) - tài khoản
firms (n) - công ty, hãng
product (n) - sản phẩm
line (n) - dòng (sản phẩm), đường nét, vạch
soup (n) - món súp, canh
pumpkin (n) - quả bí ngô
understanding (n) - sự thấu hiểu, am hiểu
levels (n) - mức độ, cấp độ
data (n) - dữ liệu, số liệu
sites (n) - địa điểm, công trường, trang web
oil (n) - dầu ăn, dầu mỏ
drilling (n) - việc khoan, sự khoan lỗ
assurance (n) - sự đảm bảo, cam đoan
project (n) - dự án, công trình
factors (n) - nhân tố, yếu tố
business (n) - doanh nghiệp, việc kinh doanh
customers (n) - khách hàng
grants (n) - khoản tài trợ, trợ cấp
entrepreneurs (n) - doanh nhân, nhà khởi nghiệp
ideas (n) - ý tưởng
manager (n) - người quản lý
system (n) - hệ thống
orders (n) - đơn hàng, thứ tự, mệnh lệnh
jewelry (n) - trang sức
costume (n) - trang phục, đồ hóa trang
sales (n) - doanh số, sự bán hàng
software (n) - phần mềm
computer (n) - máy tính
applications (n) - ứng dụng, đơn xin
cars (n) - xe ô tô
passenger (n) - hành khách
technology (n) - công nghệ
vehicles (n) - xe cộ, phương tiện giao thông
ventilation (n) - sự thông gió, hệ thống thông gió
heat (n, v) - nhiệt độ, hơi nóng, làm nóng
campus (n) - khuôn viên trường học, bệnh viện
employer (n) - người sử dụng lao động, chủ
jobs (n) - công việc, việc làm
microwave (n) - lò vi sóng, sóng viba
containers (n) - thùng chứa, hộp đựng
engineer (n) - kỹ sư
bridge (n) - cây cầu
structure (n) - cấu trúc, công trình kiến trúc
study (n) - nghiên cứu, sự học tập
card (n) - chiếc thẻ, thẻ tín dụng
credit (n) - tín dụng, lòng tin
age-group (n) - nhóm tuổi
exhibit (n) - cuộc triển lãm, vật trưng bày
precautions (n) - sự phòng ngừa, cảnh giác
past (n) - quá khứ
tellers (n) - giao dịch viên ngân hàng, người kiểm phiếu
training (n) - việc đào tạo, huấn luyện
bank (n) - ngân hàng
expansion (n) - sự mở rộng
program (n) - chương trình
internship (n) - kỳ thực tập, thực tập sinh
members (n) - thành viên
staff (n) - nhân viên, đội ngũ nhân viên
meeting (n) - cuộc họp
presentations (n) - bài thuyết trình, trình bày
time (n) - thời gian, lần
questions (n) - câu hỏi, vấn đề
employees (n) - nhân viên
breaks (n) - giờ nghỉ giải lao, sự gãy vỡ
mistakes (n) - lỗi lầm, sai sót
people (n) - con người, mọi người
office (n) - văn phòng
e-mails (n) - thư điện tử, email
proofreading (n) - việc hiệu đính, đọc và sửa bản in thử
selection (n) - sự lựa chọn, tuyển chọn
paints (n) - sơn, màu vẽ
supplies (n) - đồ dùng, vật tư
premium (n) - tiền thưởng, phí bảo hiểm, chất lượng cao
salesperson (n) - nhân viên bán hàng
advantages (n) - lợi thế, ưu điểm
devices (n) - thiết bị, công cụ
construction (n) - sự xây dựng
architecture (n) - kiến trúc
city (n) - thành phố
luggage (n) - hành lý
tracking (n) - việc theo dõi, định vị
challenge (n) - thử thách
machinery (n) - máy móc, thiết bị máy móc
supplier (n) - nhà cung cấp
strawberries (n) - quả dâu tây
market (n) - thị trường, chợ nông sản
farmer (n) - nông dân
career (n) - sự nghiệp
history (n) - lịch sử
committee (n) - ủy ban
economics (n) - ngành kinh tế học
economy (n) - nền kinh tế, sự tiết kiệm
Part 1
paint (v) - sơn, vẽ
water (v) - tưới nước
fix (v) - sửa chữa
sweep (v) - quét
fold (v) - gấp
put (v) - đặt, để
study (v) - nghiên cứu, xem xét kỹ
close (v) - đóng
turn on (v) - bật (thiết bị)
give (v) - đưa, cho
post (v) - dán, thông báo
type (v) - đánh máy
hang up (v) - treo lên
stack (v) - xếp chồng
fall (v) - rơi, ngã
push (v) - đẩy
pay (v) - thanh toán, trả tiền
wash (v) - rửa
line up (v) - xếp hàng
cheer (v) - cổ vũ
locate (v) - nằm ở, định vị
cut (v) - cắt
wipe (v) - lau chùi
staple (v) - ghim (tài liệu)
saw (v) - cưa
lift (v) - nâng lên, nhấc lên
organize (v) - sắp xếp, tổ chức
stand (v) - đứng
reach (v) - với lấy, thò tay vào
enter (v) - đi vào
get onto (v) - bước lên (xe)
set (v) - đặt, để
press (v) - nhấn
remove (v) - tháo ra, gỡ bỏ
take off (v) - cởi ra, lấy ra
suspend (v) - treo lơ lửng
open (v) - mở
provide (v) - cung cấp
fish (v) - câu cá
board (v) - lên tàu/xe
read (v) - đọc
pick up (v) - nhặt lên, cầm lên
look through (v) - nhìn qua, lục lọi tìm kiếm
hold (v) - cầm, nắm, giữ
hang (v) - treo
roll up (v) - cuộn lại
install (v) - lắp đặt
mop (v) - lau sàn
tear down (v) - phá bỏ, dỡ bỏ
plant (v) - trồng cây
rake (v) - cào (lá)
repair (v) - sửa chữa
plug (v) - cắm (điện)
climb (v) - leo, trèo
tie (v) - buộc, thắt cột
house (n) - ngôi nhà
plant (n) - cái cây, thực vật
door (n) - cánh cửa
walkway (n) - lối đi bộ
paper (n) - giấy tờ
picture (n) - bức tranh, bức ảnh
frame (n) - khung ảnh
drawing (n) - bản vẽ, bức vẽ
window (n) - cửa sổ
light (n) - đèn, ánh sáng
book (n) - cuốn sách
sign (n) - biển báo
wall (n) - bức tường
keyboard (n) - bàn phím
clothing / clothes (n) - quần áo
box (n) - cái hộp
cart (n) - xe đẩy
bag (n) - cái túi
floor (n) - sàn nhà
chair (n) - cái ghế
desk (n) - bàn làm việc
customer (n) - khách hàng
meal (n) - bữa ăn
worker (n) - công nhân, người làm
dish (n) - đĩa, bát đĩa
food (n) - thức ăn
refrigerator (n) - tủ lạnh
pot (n) - nồi
counter (n) - quầy
runner (n) - người chạy bộ
race (n) - cuộc đua
sports team (n) - đội thể thao
athletic field (n) - sân điền kinh, sân thể thao
tree (n) - cái cây
lawn mower (n) - máy cắt cỏ
grass (n) - bãi cỏ
shirt (n) - áo sơ mi
copy machine (n) - máy photocopy
file cabinet (n) - tủ đựng hồ sơ
document (n) - tài liệu
office (n) - văn phòng
wood (n) - gỗ
hammer (n) - cây búa
toolbox (n) - hộp dụng cụ
group (n) - nhóm
building (n) - tòa nhà
bus (n) - xe buýt
glass bottle (n) - chai thủy tinh
shelf (n) - cái kệ, giá
button (n) - nút bấm
device (n) - thiết bị
safety gloves (n) - găng tay bảo hộ
lab coat (n) - áo khoác phòng thí nghiệm
hook (n) - cái móc
banner (n) - băng rôn, biểu ngữ
umbrella (n) - cái ô, dù
shade (n) - bóng râm
potted plant (n) - chậu cây
courtyard (n) - sân trong
leaf / leaves (n) - chiếc lá
pier (n) - bến tàu, cầu tàu
boat (n) - chiếc thuyền
backpack (n) - ba lô
purse (n) - ví nữ, túi xách nữ
suitcase (n) - vali
poster (n) - áp phích
basket (n) - cái rổ, giỏ
rug (n) - tấm thảm
flower (n) - bông hoa
pile (n) - đống
stair (n) - bậc thang
fruit (n) - trái cây
bin (n) - thùng chứa
cord (n) - dây điện
machine (n) - máy móc
coffee mug (n) - cốc cà phê
ladder (n) - cái thang
wooden plank (n) - tấm ván gỗ
rope (n) - sợi dây thừng
pole (n) - cái cột
Part 2
cost (n) - chi phí
repair (n, v) - sự sửa chữa, sửa chữa
warranty (n) - giấy bảo hành, sự bảo hành
box (n) - cái hộp
way (n) - cách thức, con đường
conference center (n) - trung tâm hội nghị
presentation (n) - bài thuyết trình
train schedule (n) - lịch trình tàu
manufacturing plant (n) - nhà máy sản xuất
living room (n) - phòng khách
furniture (n) - đồ nội thất
project proposal (n) - đề xuất dự án
projector (n) - máy chiếu
ingredient (n) - thành phần, nguyên liệu
cake (n) - bánh ngọt
fruit (n) - trái cây
nut (n) - hạt
cookbook (n) - sách dạy nấu ăn
floor (n) - tầng, sàn nhà
flight (n) - chuyến bay
business class (n) - hạng thương gia
travel agent (n) - đại lý du lịch
itinerary (n) - lịch trình chuyến đi
shopping center (n) - trung tâm mua sắm
apartment complex (n) - khu phức hợp căn hộ
company newsletter (n) - bản tin công ty
page (n) - trang
article (n) - bài báo
seal (v) - niêm phong, dán kín
envelope (n) - phong bì
training material (n) - tài liệu đào tạo
desk (n) - bàn làm việc
business (n) - doanh nghiệp, việc kinh doanh
launch (v) - ra mắt, khởi đầu
clothes (n) - quần áo
accessory (n) - phụ kiện
hobby (n) - sở thích
office (n) - văn phòng
printer (n) - máy in
water bill (n) - hóa đơn tiền nước
revise (v) - sửa đổi, duyệt lại
forklift (n) - xe nâng
fork (n) - cái nĩa
knife (n) - con dao
pack (v) - đóng gói, sửa soạn hành lý
trip (n) - chuyến đi
round-trip ticket (n) - vé khứ hồi
deliver (v) - giao hàng
package (n) - gói hàng
pick up (v) - lấy, đón
steel pipe (n) - ống thép
truck (n) - xe tải
application (n) - đơn đăng ký, ứng dụng
summer internship (n) - kỳ thực tập mùa hè
position (n) - vị trí
school (n) - trường học
winter (n) - mùa đông
design team (n) - đội thiết kế
cabinet (n) - tủ
project (n) - dự án
train (v) - đào tạo, huấn luyện
job (n) - công việc
agree (v) - đồng ý
manual (n) - sách hướng dẫn
cover design (n) - thiết kế bìa
client (n) - khách hàng
direct flight (n) - chuyến bay thẳng
filing cabinet (n) - tủ đựng hồ sơ
cabin (n) - khoang, nhà gỗ nhỏ
rent (v) - thuê
tile (n) - gạch lát
corner (n) - góc
request (n) - yêu cầu
approve (v) - phê duyệt
headquarters (n) - trụ sở chính
car engine (n) - động cơ xe hơi
check (v) - kiểm tra
mechanic (n) - thợ cơ khí
coffee shop (n) - quán cà phê
street (n) - đường phố
office supplies (n) - văn phòng phẩm
park (v, n) - đỗ xe, công viên
drive (v) - lái xe
medical checkup (n) - cuộc kiểm tra sức khỏe
treatment (n) - sự điều trị
bus (n) - xe buýt
main entrance (n) - lối vào chính
museum (n) - bảo tàng
rain (v, n) - mưa, cơn mưa
exhibit (n) - cuộc triển lãm, vật trưng bày
line (n) - hàng lối
parking garage (n) - nhà để xe
office building (n) - tòa nhà văn phòng
commute (n, v) - sự đi lại, đi làm
store manager (n) - cửa hàng trưởng
item (n) - mặt hàng
back room (n) - phòng phía sau
lunch (n) - bữa trưa
set up (v) - thiết lập, lắp đặt
packaging machine (n) - máy đóng gói
part (n) - linh kiện, bộ phận
loading dock (n) - khu vực bốc dỡ hàng
delivery (n) - sự giao hàng
sculpture (n) - tác phẩm điêu khắc
database (n) - cơ sở dữ liệu
course (n) - khóa học
culture (n) - văn hóa
demonstration (n) - sự trình diễn, giới thiệu
bus station (n) - bến xe buýt
lunchtime (n) - giờ ăn trưa
housing market (n) - thị trường nhà ở
senior director (n) - giám đốc cấp cao
head up (v) - dẫn đầu, lãnh đạo
morning (n) - buổi sáng
press release (n) - thông cáo báo chí
take care (v) - phụ trách, chăm lo
button (n) - nút bấm
newsstand (n) - sạp báo
stock (v, n) - nhập hàng, hàng tồn kho
shelf / shelves (n) - cái kệ
overnight worker (n) - công nhân làm ca đêm
room (n) - không gian, chỗ trống, căn phòng
lobby (n) - sảnh chờ
intern (n) - thực tập sinh
armchair (n) - ghế bành
photography (n) - nhiếp ảnh
bowling league (n) - giải đấu bowling
spring (n) - mùa xuân
stack (v, n) - xếp chồng, đống
plate (n) - cái đĩa
alphabetical order (n) - thứ tự bảng chữ cái
take charge (v) - phụ trách, đảm nhận
salesperson / salespeople (n) - nhân viên bán hàng
credit card (n) - thẻ tín dụng
sales event (n) - sự kiện giảm giá
tour group (n) - nhóm du lịch
price (n) - giá cả
conference call (n) - cuộc gọi hội nghị
registration fee (n) - phí đăng ký
change (n, v) - sự thay đổi, thay đổi
budget proposal (n) - đề xuất ngân sách
associate director (n) - phó giám đốc
funding (n) - kinh phí, tài trợ
range (n) - loạt, phạm vi
menu option (n) - lựa chọn thực đơn
meeting (n) - cuộc họp
cancel (v) - hủy bỏ
contract (n) - hợp đồng
airport (n) - sân bay
computer (n) - máy tính
hall (n) - hành lang
update (n) - bản cập nhật
install (v) - cài đặt
computer seminar (n) - hội thảo máy tính
delay (v, n) - trì hoãn, sự chậm trễ
storm (n) - cơn bão
pass (v) - đi qua
minute (n) - phút
authorize (v) - ủy quyền, cho phép
download (v) - tải xuống
software (n) - phần mềm
author (n) - tác giả
access (v, n) - truy cập, sự truy cập
folder (n) - thư mục
e-mail (n, v) - thư điện tử, gửi email
stamp (n) - con tem
resign (v) - từ chức
trainee (n) - người được đào tạo, thực tập sinh
computer lab (n) - phòng máy tính
copy (n) - bản sao
schedule (n) - lịch trình
station (n) - nhà ga, trạm
repair shop (n) - tiệm sửa chữa
merger (n) - sự sáp nhập
breakfast (n) - bữa sáng
representative (n) - người đại diện
dance performance (n) - tiết mục múa
seat (n) - chỗ ngồi
stage (n) - sân khấu
training session (n) - phiên đào tạo, buổi đào tạo
sign up (v) - đăng ký
attendance (n) - sự tham dự
postpone (v) - trì hoãn
caterer (n) - nhà cung cấp dịch vụ ăn uống
supply (v, n) - cung cấp, nguồn cung
company picnic (n) - buổi dã ngoại của công ty
phone (n) - điện thoại
résumé (n) - sơ yếu lý lịch
technical consultant (n) - cố vấn kỹ thuật
client reception (n) - tiệc chiêu đãi khách hàng
space (n) - không gian
restaurant (n) - nhà hàng
recommend (v) - giới thiệu, tiến cử
dinner (n) - bữa tối
envelope (n) - phong bì
photo (n) - bức ảnh
post office (n) - bưu điện
food supplier (n) - nhà cung cấp thực phẩm
vegetable aisle (n) - lối đi quầy rau củ
basis (n) - nền tảng, cơ sở
time sheet (n) - bảng chấm công
submit (v) - nộp
reset (v) - cài đặt lại
password (n) - mật khẩu
help desk (n) - bộ phận hỗ trợ
hire (v) - thuê, tuyển dụng
event planner (n) - người tổ chức sự kiện
organize (v) - tổ chức
holiday party (n) - tiệc ngày lễ
money (n) - tiền bạc
budget (n) - ngân sách
bottle (n) - cái chai
machine (n) - máy móc
produce (v) - sản xuất
soft drink (n) - nước ngọt
juice (n) - nước ép
toner (n) - mực in
stone (n) - hòn đá
run out (v) - hết, cạn kiệt
instruction (n) - hướng dẫn
interview (v, n) - phỏng vấn, cuộc phỏng vấn
question (n) - câu hỏi
candidate (n) - ứng viên
travel (v) - đi lại, du lịch
fitness trainer (n) - huấn luyện viên thể hình
fix (v) - sửa chữa
air conditioner (n) - máy điều hòa
cut (v) - cắt giảm
office expense (n) - chi phí văn phòng
meal (n) - bữa ăn
taxicab (n) - xe taxi
company retreat (n) - chuyến dã ngoại của công ty
name (n) - tên
ice cream (n) - kem
dessert (n) - món tráng miệng
sugar (n) - đường
café (n) - quán cà phê
appointment reminder (n) - lời nhắc cuộc hẹn
appreciate (v) - trân trọng, đánh giá cao
accept (v) - chấp nhận
paperwork (n) - giấy tờ
ticket (n) - vé
play (n) - vở kịch
team (n) - đội
win (v) - chiến thắng
plan (n) - kế hoạch
retirement party (n) - tiệc nghỉ hưu
volume (n) - âm lượng
tour (n) - chuyến tham quan
automobile factory (n) - nhà máy ô tô
model (n) - mẫu mã, mô hình
setup process (n) - quá trình cài đặt
sample (n) - mẫu, hàng mẫu
fabric (n) - vải
hotel room (n) - phòng khách sạn
brick wall (n) - bức tường gạch
garden (n) - khu vườn
Web site (n) - trang web
fitness center (n) - trung tâm thể dục
text (n) - văn bản
image (n) - hình ảnh
graphics department (n) - phòng đồ họa
high-definition camera (n) - máy ảnh độ nét cao
gym membership (n) - thẻ hội viên phòng tập
exercise routine (n) - thói quen tập thể dục
exercise room (n) - phòng tập thể dục
front desk (n) - quầy lễ tân
price tag (n) - thẻ giá
clearance item (n) - hàng thanh lý
label (v, n) - dán nhãn, nhãn mác
name tag (n) - bảng tên
newspaper layout (n) - bố cục tờ báo
computer program (n) - chương trình máy tính
monitor (n) - màn hình
plug in (v) - cắm điện
power cord (n) - dây nguồn
inventory process (n) - quy trình kiểm kê
fish (n) - con cá
carry (v) - mang, bán (hàng hóa)
shoe (n) - đôi giày
shipment (n) - lô hàng
carmaker (n) - nhà sản xuất ô tô
export (v) - xuất khẩu
electric car (n) - xe điện
car show (n) - triển lãm ô tô
promotion (n) - sự thăng chức
internal audit (n) - kiểm toán nội bộ
slide (n) - trang chiếu
movie (n) - bộ phim
purchase (n, v) - hàng hóa mua, mua sắm
expense report (n) - báo cáo chi phí
entrance (n) - lối vào
walk (n, v) - chuyến đi dạo, đi bộ
lunch menu (n) - thực đơn bữa trưa
clock (n) - đồng hồ
training program (n) - chương trình đào tạo
sale (n) - doanh số, sự bán hàng
rise (v) - tăng lên
percent (n) - phần trăm
building inspection (n) - việc thanh tra tòa nhà
e-mail address (n) - địa chỉ email
employee (n) - nhân viên
job announcement (n) - thông báo tuyển dụng
increase (n, v) - sự gia tăng, tăng lên
television show (n) - chương trình truyền hình
picture (n) - bức ảnh
photographer (n) - nhiếp ảnh gia
Part 3
focus group (n) - nhóm tập trung (khảo sát)
feedback (n) - phản hồi
cheese (n) - phô mai
love (v) - yêu thích
item (n) - mặt hàng, món đồ
lineup (n) - dòng sản phẩm, danh mục
cooking (n) - việc nấu ăn
mix (v) - trộn
sauce (n) - nước xốt
sell (v) - bán
version (n) - phiên bản
melt (v) - tan chảy
heat (v) - đun nóng, làm nóng
food product (n) - sản phẩm thực phẩm
candy (n) - kẹo
bread (n) - bánh mì
pasta (n) - mì ống
suggest (v) - gợi ý
lower (v) - hạ thấp, giảm
publish (v) - xuất bản, công bố
recipe (n) - công thức (nấu ăn)
offer (v) - cung cấp, đưa ra
option (n) - sự lựa chọn
sound (v) - nghe có vẻ
contact (v) - liên lạc
production manager (n) - giám đốc sản xuất
pass along (v) - truyền đạt, chuyển tiếp
suggestion (n) - lời gợi ý
update (n, v) - bản cập nhật, cập nhật
headquarters (n) - trụ sở chính
plan (v) - lên kế hoạch
advertising campaign (n) - chiến dịch quảng cáo
call (v) - gọi điện
book (v) - đặt (vé, chỗ)
ticket (n) - vé
tennis match (n) - trận đấu quần vợt
seat (n) - chỗ ngồi
surprise (v) - làm ngạc nhiên
win (v) - chiến thắng
championship (n) - giải vô địch
watch (v) - xem
play (v, n) - chơi, thi đấu
set (n) - bộ, nhóm
payment (n) - sự thanh toán
reserve (v) - đặt trước, giữ chỗ
sign up (v) - đăng ký
lesson (n) - bài học
competition (n) - cuộc thi
event (n) - sự kiện
ask (v) - hỏi, yêu cầu
merchandise (n) - hàng hóa
tournament (n) - giải đấu
interview (n) - cuộc phỏng vấn
start (v) - bắt đầu
institute (n) - viện, học viện
coach (n) - huấn luyện viên
require (v) - yêu cầu, đòi hỏi
parking permit (n) - giấy phép đỗ xe
photo ID (n) - giấy tờ tùy thân có ảnh
information (n) - thông tin
help (v, n) - giúp đỡ, sự giúp đỡ
organize (v) - tổ chức
library (n) - thư viện
fund-raising dinner (n) - bữa tối gây quỹ
hope (v) - hy vọng
raise (v) - quyên góp, nâng lên
expand (v) - mở rộng
book section (n) - khu vực sách
send out (v) - gửi đi
invitation (n) - lời mời, thiệp mời
handle (v) - xử lý, giải quyết
list (n) - danh sách
attendee (n) - người tham dự
save (v) - lưu
email (v) - gửi email
art gallery (n) - phòng trưng bày nghệ thuật
opening (n) - lễ khai trương
ceremony (n) - buổi lễ
book fair (n) - hội chợ sách
task (n) - nhiệm vụ
arrange (v) - sắp xếp
shuttle service (n) - dịch vụ đưa đón
choose (v) - chọn lựa
catering firm (n) - công ty cung cấp dịch vụ ăn uống
prepare (v) - chuẩn bị
speech (n) - bài phát biểu
speak (v) - nói chuyện
colleague (n) - đồng nghiệp
provide (v) - cung cấp
password (n) - mật khẩu
find (v) - tìm thấy
pen (n) - cái bút
give away (v) - tặng, phát miễn phí
community festival (n) - lễ hội cộng đồng
promote (v) - quảng bá, thúc đẩy
business (n) - doanh nghiệp, việc kinh doanh
print (v) - in ấn
cleaning service (n) - dịch vụ dọn dẹp
logo (n) - biểu trưng, logo
charge (n) - phí, tiền thù lao
paper (n) - giấy
hand out (v) - phân phát
mention (v) - đề cập
talk (v) - nói chuyện
cleaning product (n) - sản phẩm tẩy rửa
case (n) - thùng, hộp
orientation (n) - buổi định hướng
trade show (n) - hội chợ thương mại
color (n) - màu sắc
ink (n) - mực
author (n) - tác giả
booth (n) - gian hàng
focus group (n) - nhóm khảo sát tập trung
revise (v) - chỉnh sửa, duyệt lại
budget (n) - ngân sách
recycling facility (n) - cơ sở tái chế
move (v) - chuyển đi, di dời
electronics (n) - đồ điện tử
television (n) - ti vi
computer (n) - máy tính
get rid of (v) - vứt bỏ, loại bỏ
house (n) - ngôi nhà
market (n) - thị trường
friend (n) - người bạn
take (v) - nhận, lấy
accept (v) - chấp nhận
question (n) - câu hỏi
pickup service (n) - dịch vụ lấy hàng tận nơi
bring (v) - mang đến
website (n) - trang web
company (n) - công ty
remove (v) - dời đi, loại bỏ
dispose (v) - vứt bỏ, xử lý
delivery service (n) - dịch vụ giao hàng
electronics store (n) - cửa hàng điện tử
real estate agency (n) - đại lý bất động sản
yard waste (n) - rác thải sân vườn
furniture (n) - đồ nội thất
operation (n) - sự hoạt động
permit application (n) - đơn xin cấp phép
direction (n) - phương hướng, chỉ dẫn
site (n) - địa điểm
know (v) - biết
class (n) - lớp học
owner (n) - người làm chủ
stop in (v) - ghé vào
cookie (n) - bánh quy
piece (n) - mẩu, miếng
baked goods (n) - đồ nướng (bánh)
location (n) - địa điểm, chi nhánh
notice (v) - để ý, nhận thấy
restaurant (n) - nhà hàng
close down (v) - đóng cửa (ngừng kinh doanh)
building (n) - tòa nhà
rent (n, v) - tiền thuê, thuê mướn
university (n) - trường đại học
walk-in customer (n) - khách vãng lai
neighborhood (n) - khu xóm, khu lân cận
train (n) - tàu hỏa
fitness center (n) - trung tâm thể dục
culinary school (n) - trường dạy nấu ăn
bakery (n) - tiệm bánh
advantage (n) - lợi thế
point out (v) - chỉ ra
rental space (n) - không gian cho thuê
price (n) - giá cả
size (n) - kích thước
design (n) - thiết kế
video game (n) - trò chơi điện tử
release (v) - phát hành
improve (v) - cải thiện
finish (v) - hoàn thành
test (v) - kiểm tra, thử nghiệm
morning (n) - buổi sáng
issue (n) - vấn đề
stage (n) - giai đoạn, màn (game)
moment (n) - khoảnh khắc, lúc
character (n) - nhân vật
check (v) - kiểm tra
controller (n) - bộ điều khiển
problem (n) - vấn đề
happen (v) - xảy ra
actor (n) - diễn viên
film (n) - bộ phim
director (n) - đạo diễn, giám đốc
developer (n) - nhà phát triển
journalist (n) - nhà báo
secure (v) - đạt được, bảo đảm
funding (n) - nguồn vốn, quỹ
product (n) - sản phẩm
read (v) - đọc
script (n) - kịch bản
conduct (v) - tiến hành
consult (v) - tham khảo ý kiến
negotiate (v) - đàm phán
reach (v) - liên lạc được, tới
maintenance office (n) - văn phòng bảo trì
apartment complex (n) - khu phức hợp căn hộ
unit (n) - căn hộ, đơn vị
thermostat (n) - máy điều nhiệt
turn off (v) - tắt
turn on (v) - bật
install (v) - lắp đặt
look (n, v) - cái nhìn, nhìn
freeze (v) - đóng băng
delivery driver (n) - tài xế giao hàng
security guard (n) - nhân viên bảo vệ
maintenance worker (n) - nhân viên bảo trì
customer service representative (n) - đại diện dịch vụ khách hàng
device (n) - thiết bị
malfunction (v) - gặp trục trặc, lỗi
key (n) - chìa khóa
miss (v) - thất lạc, bỏ lỡ
parking area (n) - khu vực đỗ xe
receive (v) - nhận
mean (v) - có ý nghĩa, ý nói
weather forecast (n) - dự báo thời tiết
complete (v) - hoàn thành
park (v) - đỗ xe
meet (v) - gặp gỡ
discuss (v) - thảo luận
loan (n) - khoản vay
repair shop (n) - tiệm sửa chữa
open (v) - mở cửa, khai trương
snowmobile (n) - xe trượt tuyết
year (n) - năm
rent out (v) - cho thuê
sports equipment (n) - thiết bị thể thao
winter (n) - mùa đông
tourism (n) - ngành du lịch
increase (v) - tăng lên
space (n) - không gian
carry (v) - chứa, mang, bán
inventory (n) - hàng tồn kho
building design (n) - thiết kế tòa nhà
advertising plan (n) - kế hoạch quảng cáo
purchase (v) - mua
supplies (n) - vật tư, đồ dùng
store (n) - cửa hàng
apparel (n) - quần áo, trang phục
dealership (n) - đại lý (bán ô tô)
hotel chain (n) - chuỗi khách sạn
road (n) - con đường
cost (n) - chi phí
decrease (v) - giảm
weather pattern (n) - kiểu thời tiết
shift (v) - thay đổi, dịch chuyển
factory worker (n) - công nhân nhà máy
skill (n) - kỹ năng
peer-training program (n) - chương trình đào tạo đồng cấp
learner (n) - người học
shadow (v) - đi theo học việc
employee (n) - nhân viên
observe (v) - quan sát
job (n) - công việc
concern (v) - lo ngại
create (v) - tạo ra
burden (n) - gánh nặng
slow down (v) - làm chậm lại
explain (v) - giải thích
record (v) - ghi hình, ghi âm
video (n) - đoạn phim, video
edit (v) - chỉnh sửa (video, ảnh)
smartphone (n) - điện thoại thông minh
idea (n) - ý tưởng
capture (v) - ghi lại, thu giữ
expertise (n) - chuyên môn
production line (n) - dây chuyền sản xuất
opportunity (n) - cơ hội
upgrade (v) - nâng cấp
machinery (n) - máy móc
reorganize (v) - tổ chức lại
factory layout (n) - sơ đồ/bố trí nhà máy
expense (n) - chi phí
introduce (v) - đưa vào, giới thiệu
error (n) - lỗi
reduce (v) - giảm bớt
productivity (n) - năng suất
cause (v) - gây ra
confusion (n) - sự nhầm lẫn, bối rối
policy (n) - chính sách
establish (v) - thiết lập
implement (v) - thực hiện, thi hành
data security (n) - bảo mật dữ liệu
verify (v) - xác minh
airport (n) - sân bay
wait (v) - chờ đợi
flight (n) - chuyến bay
investor (n) - nhà đầu tư
contact information (n) - thông tin liên lạc
send (v) - gửi
day (n) - ngày
prefer (v) - thích hơn, ưu tiên
staff (n) - nhân viên
hear (v) - nghe
award (n) - giải thưởng
contribution (n) - sự đóng góp
community (n) - cộng đồng
announce (v) - thông báo
travel agency (n) - đại lý du lịch
warehouse (n) - nhà kho
graphic (n) - biểu đồ, hình ảnh
news (n) - tin tức
share (v) - chia sẻ
promotion (n) - sự thăng tiến
conference proposal (n) - đề xuất hội nghị
airline ticket (n) - vé máy bay
botanical garden (n) - vườn bách thảo
parking information (n) - thông tin đỗ xe
click (v) - nhấp chuột
page (n) - trang
scroll (v) - cuộn (chuột)
bottom (n) - dưới cùng, đáy
create (v) - tạo ra
visitor (n) - khách tham quan
amusement park (n) - công viên giải trí
concert hall (n) - phòng hòa nhạc
approval (n) - sự phê duyệt
manager (n) - người quản lý
attend (v) - tham dự
workshop (n) - hội thảo
arrive (v) - đến nơi
department (n) - phòng ban
bicycle rack (n) - giá để xe đạp
train station (n) - nhà ga tàu hỏa
decide (v) - quyết định
station entrance (n) - lối vào nhà ga
commuter (n) - người đi vé tháng, đi làm hàng ngày
spot (n) - vị trí, điểm
platform (n) - sân ga
estimate (n) - bảng báo giá, sự ước tính
repair (n) - sự sửa chữa
relocate (v) - di dời
apply (v) - nộp đơn, áp dụng
Part 4
specialize (v) - chuyên về
make (n) - nhãn hiệu, kiểu dáng (xe)
model (n) - mẫu mã
automobile (n) - xe ô tô
specialist (n) - chuyên gia
vehicle (n) - xe cộ, phương tiện
condition (n) - điều kiện, tình trạng
benefit (n) - lợi ích
offer (v) - cung cấp, đưa ra
warranty (n) - giấy bảo hành
driving (n) - việc lái xe
inventory (n) - sự kiểm kê, hàng tồn kho
supply (n) - nguồn cung, vật tư
patience (n) - sự kiên nhẫn
representative (n) - người đại diện
repair (v, n) - sửa chữa, sự sửa chữa
appliance (n) - thiết bị, dụng cụ (gia dụng)
schedule (v, n) - lên lịch, lịch trình
program (n) - chương trình
count (n) - sự đếm, kiểm đếm
celebration (n) - sự ăn mừng, lễ kỷ niệm
installation (n) - sự lắp đặt
employee (n) - nhân viên
facilitate (v) - tạo điều kiện thuận lợi, điều phối
orientation (n) - sự định hướng
session (n) - buổi, phiên
set up (v) - thiết lập
account (n) - tài khoản
page (n) - trang
binder (n) - bìa còng, bìa kẹp tài liệu
username (n) - tên đăng nhập
password (n) - mật khẩu
laptop (n) - máy tính xách tay
log in (v) - đăng nhập
credential (n) - thông tin đăng nhập, chứng chỉ
prompt (v) - nhắc nhở, thúc giục
create (v) - tạo ra
access (v, n) - truy cập, sự truy cập
department (n) - phòng ban
file (n) - tập tin, tài liệu
officer (n) - nhân viên (cảnh sát, bảo vệ), sĩ quan
executive (n) - ủy viên ban quản trị, giám đốc điều hành
listener (n) - người nghe
map (n) - bản đồ
contract (n) - hợp đồng
badge (n) - thẻ đeo, huy hiệu
protect (v) - bảo vệ
convention (n) - quy ước, quy tắc
archive (v) - lưu trữ
purchase (n, v) - món hàng, sự mua sắm, mua
game (n) - trò chơi
guest (n) - khách
consider (v) - cân nhắc, xem xét
buy (v) - mua
future (n) - tương lai
release (v) - phát hành, ra mắt
laundry (n) - tiệm giặt ủi
stadium (n) - sân vận động
arrive (v) - đến nơi
damage (v) - làm hư hại
delivery (n) - sự giao hàng
assemble (v) - lắp ráp
confirm (v) - xác nhận
replacement (n) - sự thay thế, đồ thay thế
part (n) - bộ phận, linh kiện
ship (v) - vận chuyển, giao hàng
last (v) - kéo dài
agenda (n) - chương trình nghị sự
item (n) - mục, mặt hàng
board (n) - ban quản trị, hội đồng
report (n) - báo cáo
disappoint (v) - làm thất vọng
drop (n, v) - sự sụt giảm, giảm
clothing (n) - quần áo
sale (n) - doanh số, việc bán hàng
decline (n) - sự suy giảm
distribution (n) - sự phân phối
issue (n) - vấn đề
factory (n) - nhà máy
customer (n) - khách hàng
recommend (v) - đề xuất, khuyên
manufacture (v) - sản xuất
location (n) - địa điểm, vị trí
facility (n) - cơ sở vật chất
consultant (n) - chuyên gia tư vấn
list (n) - danh sách
explain (v) - giải thích
pro (n) - ưu điểm
con (n) - nhược điểm
luggage (n) - hành lý
bedding (n) - bộ đồ giường (chăn, ga, gối)
shipping (n) - việc vận chuyển
procedure (n) - quy trình
passenger (n) - hành khách
train (n) - tàu hỏa
delay (v, n) - trì hoãn, sự chậm trễ
track (n) - đường ray
crew (n) - đội, nhóm
stretch (n) - dải, đoạn (đường)
town (n) - thị trấn
expect (v) - mong đợi, dự kiến
apologize (v) - xin lỗi
commuter (n) - người đi vé tháng, người đi làm hàng ngày
bus (n) - xe buýt
depart (v) - khởi hành
destination (n) - điểm đến
minute (n) - phút
reminder (n) - lời nhắc nhở
kiosk (n) - quầy hàng, ki-ốt
platform (n) - sân ga
announcement (n) - thông báo
package (n) - gói hàng, trọn gói
renovation (n) - sự cải tạo
alternative (n) - sự thay thế, phương án thay thế
arrangement (n) - sự sắp xếp
wait (n) - sự chờ đợi
date (n) - ngày tháng
inform (v) - thông báo
application (n) - ứng dụng, đơn đăng ký
area (n) - khu vực
reserve (v) - đặt trước
design (n, v) - thiết kế
team (n) - đội, nhóm
update (v) - cập nhật
logo (n) - biểu trưng
version (n) - phiên bản
color (n) - màu sắc
lettering (n) - kiểu chữ, chữ in
image (n) - hình ảnh
reflect (v) - phản ánh
history (n) - lịch sử
brand (n) - thương hiệu
prefer (v) - thích hơn
choose (v) - chọn lựa
vacation (n) - kỳ nghỉ
office (n) - văn phòng
assistant (n) - trợ lý
meeting (n) - cuộc họp
firm (n) - công ty, hãng
studio (n) - xưởng phim, phòng chụp ảnh
museum (n) - bảo tàng
newsletter (n) - bản tin
invoice (n) - hóa đơn
branch (n) - chi nhánh
conference (n) - hội nghị
agency (n) - cơ quan, đại lý
draft (n) - bản nháp
improvement (n) - sự cải tiến
plan (n) - kế hoạch
press (n) - báo chí
engine (n) - động cơ
respond (v) - phản hồi, đáp lại
inquiry (n) - câu hỏi, yêu cầu thông tin
upgrade (n, v) - sự nâng cấp, nâng cấp
address (v) - giải quyết, đề cập (tới vấn đề)
detail (n) - chi tiết
summary (n) - bản tóm tắt
finding (n) - phát hiện, kết quả
investor (n) - nhà đầu tư
official (n) - quan chức, viên chức
journalist (n) - nhà báo
project (n) - dự án
experience (n) - kinh nghiệm
policy (n) - chính sách
slide (n) - trang trình bày (slide)
sample (n) - hàng mẫu
manager (n) - người quản lý
explore (v) - khám phá, tìm hiểu
system (n) - hệ thống
cosmetics (n) - mỹ phẩm
store (n) - cửa hàng
associate (n) - cộng sự, nhân viên
payment (n) - sự thanh toán
tablet (n) - máy tính bảng
complaint (n) - lời phàn nàn
shopping (n) - việc mua sắm
line (n) - hàng lối
conduct (v) - tiến hành
trial run (n) - sự chạy thử
price (n) - giá cả
staff (n) - nhân viên
feedback (n) - phản hồi
compliment (v) - khen ngợi
express (v) - bày tỏ
frustration (n) - sự thất vọng, bực bội
justify (v) - bào chữa, biện minh
choice (n) - sự lựa chọn
news (n) - tin tức
tower (n) - tòa tháp
feature (n) - đặc điểm nổi bật
building (n) - tòa nhà
garden (n) - khu vườn
lobby (n) - sảnh chờ
management (n) - sự quản lý, ban quản lý
tenant (n) - người thuê (nhà, văn phòng)
interview (v, n) - phỏng vấn, cuộc phỏng vấn
recording (n) - bản ghi âm
artist (n) - nghệ sĩ
power (n) - năng lượng, điện
award (n) - giải thưởng
floor (n) - tầng (nhà)
photograph (n) - bức ảnh
layout (n) - bố cục
operation (n) - sự hoạt động, vận hành
mine (n) - mỏ (khoáng sản)
analysis (n) - sự phân tích
drilling (n) - việc khoan
screen (n) - màn hình
information (n) - thông tin
site (n) - địa điểm, công trường
deposit (n) - mỏ, lớp trầm tích
step (n) - bước
apply (v) - nộp đơn xin, áp dụng
permit (n) - giấy phép
engineer (n) - kỹ sư
technician (n) - kỹ thuật viên
manual (n) - sách hướng dẫn
`;