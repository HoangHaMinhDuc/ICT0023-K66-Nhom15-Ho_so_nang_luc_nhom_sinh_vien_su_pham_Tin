// Dữ liệu mẫu đã ẩn danh. Nhóm thay bằng dữ liệu thật khi từng thành viên đồng ý công bố.
const MEMBERS = [
  { id: 1, name: "Khúc Trọng Nam", role: "Nhóm trưởng, Driver", year: 2, skills: ["HTML/CSS", "JavaScript", "Git"], bio: "Phụ trách cấu trúc website và quy trình Git của nhóm." },
  { id: 2, name: "Ngô Thuỳ Ngân", role: "Thành viên, Tester", year: 2, skills: ["HTML/CSS", "JavaScript", "Git"], bio: "Phụ trách kiểm tra, chỉnh sửa, bổ sung nội dung trang web." },
  { id: 3, name: "Hoàng Hà Minh Đức", role: "Thành viên, Coordinator", year: 2, skills: ["HTML/CSS", "JavaScript", "Git"], bio: "Phụ trách phân công nhiệm vụ, vai trò của từng thành viên cũng như kiểm duyệt chỉnh sửa nội dung đã gửi." },
  { id: 4, name: "Hà Tuấn Hưng", role: "Thành viên, Navigator", year: 2, skills: ["HTML/CSS", "JavaScript", "Git"], bio: "Phụ trách cấu thành nội dung, soạn thảo hướng đi cho trang web (về cái gì, làm gì)." }
];

const PRODUCTS = [
  { id: 1, title: "Thiết kế dịch vụ chuyển đổi số cho doanh nghiệp Sơn La", type: "Dạy học", year: "2025-2026", skills: ["Soạn bài giảng", "Trình bày"], summary: "Khoá học hướng dẫn doanh nghiệp tiếp cận chuyển đổi số.", detail: "Dành cho những doanh nghiệp chưa tiếp cận được chuyển đổi số, giúp quảng bá sản phẩm tăng doanh thu." },
  { id: 2, title: "Phiếu bài tập cho thiết kế web", type: "Dạy học", year: "2025-2026", skills: ["Soạn câu hỏi", "HTML"], summary: "Bộ câu hỏi nhiều mức độ cho sinh viên học thiết kế web.", detail: "Có câu hỏi cơ bản, nâng cao và đáp án. Nhóm kiểm tra độ rõ của đề bằng cách cho bạn học làm thử.",link:"https://thietkeweb500cau.wasmer.app/" }, 
  { id: 3, title: "Trang web mô phỏng môi trường cho cây cà chua", type: "Lập trình", year: "2025-2026", skills: ["JavaScript", "HTML/CSS"], summary: "Ứng dụng web mô phỏng các điều kiện tự nhiên phức tạp.", detail: "Dữ liệu dựa trên các nguồn tham khảo trên mạng để xây dựng phòng thí nghiệm ảo. ",link:"https://phongthinghiemao2.wasmer.app/" },
  { id: 4, title: "Website hồ sơ năng lực sư phạm tin", type: "Lập trình", year: "2024-2025", skills: ["HTML/CSS", "Bootstrap", "Git"], summary: "Website tĩnh giới thiệu hồ sơ năng lực sinh viên sư phạm tin, có menu và bố cục responsive.", detail: "Là sản phẩm đầu tiên của nhóm khi học web. Dùng Bootstrap grid và quản lý phiên bản bằng Git." },
  { id: 5, title: "Poster trung thu", type: "Dạy học", year: "2024-2025", skills: ["Canva", "Thiết kế UI"], summary: "Áp phích chào mừng ngày trung thu.", detail: "Thiết kế khổ A0, chữ lớn, màu sắc xinh động làm poster tuyên truyền.",link:"https://canva.link/ibgbeepfawmmmuq" }
];

const SKILLS = [
  { name: "HTML/CSS", level: 5, note: "Dùng ở mọi sản phẩm web của nhóm" },
  { name: "JavaScript", level: 4, note: "Xử lý dữ liệu, DOM, sự kiện" },
  { name: "Bootstrap", level: 4, note: "Grid, navbar, card, modal" },
  { name: "Git", level: 3, note: "Branch và Pull Request theo chức năng" },
  { name: "Python", level: 3, note: "Bài tập nhập môn" },
  { name: "Soạn bài giảng", level: 4, note: "Có mục tiêu, ví dụ và bài tập" },
  { name: "Soạn câu hỏi", level: 4, note: "Câu hỏi nhiều mức độ có đáp án" },
  { name: "Kiểm thử", level: 3, note: "Thử trường hợp rỗng, sai, không tìm thấy" }
];

const FAQS = [
  { q: "Hồ sơ này dùng để làm gì?", a: "Giúp nơi thực tập và nhà tuyển dụng xem nhanh năng lực và sản phẩm của nhóm." },
  { q: "Làm sao in hồ sơ cá nhân?", a: "Vào trang Tạo hồ sơ, nhập thông tin hoặc bấm Dùng thử, rồi bấm In hồ sơ. Chỉ phần hồ sơ được in." },
  { q: "Thông tin tôi nhập có bị lưu không?", a: "Không. Trang chạy hoàn toàn trên trình duyệt và dữ liệu mất khi bạn tải lại trang." },
  { q: "Tôi có nên nhập số điện thoại, địa chỉ thật?", a: "Không nên khi thử. Hãy dùng dữ liệu mẫu hoặc biệt danh." },
  { q: "Năm kinh nghiệm được tính thế nào?", a: "Bằng năm hiện tại trừ năm bắt đầu học lập trình, tối thiểu là 0." },
  { q: "Độ hoàn thiện hồ sơ nghĩa là gì?", a: "Là phần trăm số mục bạn đã điền trong tổng số bảy mục của form." },
  { q: "Sản phẩm của nhóm có dùng ảnh bên ngoài không?", a: "Chỉ dùng ảnh có quyền sử dụng và ghi nguồn trong SOURCES.md." },
  { q: "Liên hệ nhóm bằng cách nào?", a: "Dùng form ở trang Liên hệ. Lời nhắn chỉ xem trước trên trình duyệt." }
];

// ===== CẤU HÌNH ẢNH (thư mục image/, tên tệp liền không dấu gạch nối, đuôi .jpg) =====
const IMAGES = {
  hero: "image/herobg.jpg",         // ảnh nền tùy chọn cho phần đầu trang chủ; không có tệp thì bỏ qua
  member: (id) => "image/thanhvien" + id + ".jpg",     // thanhvien1, thanhvien2, ...
  product: (id) => "image/sanpham" + id + ".jpg",      // sanpham1 ... sanpham8
  placeholder: "image/placeholder.jpg"
};
// Quy ước: mọi ảnh trong image/ đều có đuôi .jpg, viết thẳng đường dẫn đầy đủ trong HTML hoặc dùng các hàm ở trên.
const MEMBER_ALT = {
  1: "Ảnh chân dung Khúc Trọng Nam",
  2: "Ảnh chân dung Ngô Thuỳ Ngân",
  3: "Ảnh chân dung Hoàng Hà Minh Đức",
  4: "Ảnh chân dung Hà Tuấn Hưng"
};
const PRODUCT_ALT = {
  1: "Ảnh chụp màn hình bài slide về chuyển đổi số cho doanh nghiệp Sơn La",
  2: "Ảnh chụp web quiz cho môn thiết kế web",
  3: "Ảnh chụp màn hình trang web mô phỏng cây cà chua",
  4: "Ảnh chụp màn hình website hồ sơ năng lực sư phạm tin",
  5: "Ảnh chụp poster trung thu"
};
const GALLERY = [
  { file: "image/hoatdong1.jpg", alt: "Ảnh nhóm họp bàn kế hoạch làm website quanh bàn có laptop", caption: "Họp nhóm lập kế hoạch" },
  { file: "image/hoatdong2.jpg", alt: "Ảnh sinh viên thực hành lập trình trong phòng máy", caption: "Thực hành trong phòng máy" },
  { file: "image/hoatdong3.jpg", alt: "Ảnh một bạn giảng thử bài trước lớp bên cạnh bảng", caption: "Giảng thử trước lớp" }
];
