// Dữ liệu mẫu đã ẩn danh. Nhóm thay bằng dữ liệu thật khi từng thành viên đồng ý công bố.
const MEMBERS = [
  { id: 1, name: "Thành viên 1", role: "Trưởng nhóm, lập trình web", year: 4, skills: ["HTML/CSS", "JavaScript", "Git"], bio: "Phụ trách cấu trúc website và quy trình Git của nhóm." },
  { id: 2, name: "Thành viên 2", role: "Thiết kế giao diện", year: 4, skills: ["Bootstrap", "Thiết kế UI", "HTML/CSS"], bio: "Xây dựng bố cục, màu sắc và kiểm tra giao diện trên điện thoại." },
  { id: 3, name: "Thành viên 3", role: "Thiết kế bài giảng", year: 3, skills: ["Soạn bài giảng", "Trình bày", "Canva"], bio: "Soạn bài giảng Tin học THCS có hình ảnh và ví dụ." },
  { id: 4, name: "Thành viên 4", role: "Câu hỏi và kiểm thử", year: 3, skills: ["Soạn câu hỏi", "Kiểm thử", "Excel"], bio: "Biên soạn câu hỏi trắc nghiệm và kiểm thử trên nhiều thiết bị." },
  { id: 5, name: "Thành viên 5", role: "Lập trình trò chơi ôn tập", year: 3, skills: ["JavaScript", "Python", "Git"], bio: "Viết các trò chơi ôn tập nhỏ chạy trên trình duyệt." },
  { id: 6, name: "Thành viên 6", role: "Truyền thông nhóm", year: 2, skills: ["Canva", "Viết nội dung", "Trình bày"], bio: "Viết nội dung giới thiệu và quay video demo." }
];

const PRODUCTS = [
  { id: 1, title: "Bài giảng Thuật toán sắp xếp", type: "Dạy học", year: "2025-2026", skills: ["Soạn bài giảng", "Trình bày"], summary: "Bài giảng minh họa sắp xếp nổi bọt bằng hình ảnh.", detail: "Dành cho học sinh THPT. Gồm mục tiêu, ví dụ từng bước, bài tập cuối bài và đáp án. Đã dạy thử với một nhóm bạn học." },
  { id: 2, title: "Phiếu bài tập Soạn thảo văn bản", type: "Dạy học", year: "2025-2026", skills: ["Soạn câu hỏi", "Excel"], summary: "Bộ phiếu 3 mức độ cho học sinh THCS.", detail: "Có phiếu cơ bản, nâng cao và đáp án. Nhóm kiểm tra độ rõ của đề bằng cách cho bạn học làm thử." },
  { id: 3, title: "Trắc nghiệm ôn tập Mạng máy tính", type: "Lập trình", year: "2025-2026", skills: ["JavaScript", "HTML/CSS"], summary: "Ứng dụng web chấm điểm và giải thích đáp án.", detail: "Dữ liệu câu hỏi nằm trong mảng đối tượng, chấm điểm bằng JavaScript và xử lý trường hợp chưa chọn đáp án." },
  { id: 4, title: "Thẻ thuật ngữ Tin học 8", type: "Lập trình", year: "2024-2025", skills: ["JavaScript", "Bootstrap"], summary: "Bộ thẻ lật giúp ghi nhớ thuật ngữ.", detail: "Có tìm kiếm thuật ngữ, nút xáo trộn và nút đặt lại. Thiết kế đọc tốt trên điện thoại." },
  { id: 5, title: "Kịch bản giờ dạy Python cơ bản", type: "Dạy học", year: "2024-2025", skills: ["Python", "Soạn bài giảng"], summary: "Kế hoạch bài dạy vòng lặp for cho học sinh mới.", detail: "Gồm mục tiêu, hoạt động khởi động, bài tập thực hành và tiêu chí đánh giá." },
  { id: 6, title: "Website lớp học", type: "Lập trình", year: "2024-2025", skills: ["HTML/CSS", "Bootstrap", "Git"], summary: "Website tĩnh giới thiệu lớp, có menu và bố cục responsive.", detail: "Là sản phẩm đầu tiên của nhóm khi học web. Dùng Bootstrap grid và quản lý phiên bản bằng Git." },
  { id: 7, title: "Công cụ chia nhóm ngẫu nhiên", type: "Lập trình", year: "2025-2026", skills: ["JavaScript", "Kiểm thử"], summary: "Chia danh sách học sinh thành các nhóm đều nhau.", detail: "Dùng dữ liệu mẫu. Xử lý danh sách rỗng, trùng tên và số nhóm lớn hơn số người." },
  { id: 8, title: "Poster ôn tập an toàn thông tin", type: "Dạy học", year: "2024-2025", skills: ["Canva", "Thiết kế UI"], summary: "Áp phích 5 quy tắc giữ an toàn trên mạng.", detail: "Thiết kế khổ A3, chữ lớn, tương phản cao để treo ở phòng máy." }
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

// ===== CẤU HÌNH ẢNH (đổi tên/đuôi tệp ở đây, không cần sửa nơi khác) =====
const IMG_EXT = "jpg"; // đổi thành "webp" nếu dùng ảnh WebP
const IMAGES = {
  hero: "images/hero-bg." + IMG_EXT,                 // ảnh nền tùy chọn cho phần đầu trang chủ (1920x1080)
  member: (id) => "images/thanh-vien-" + id,         // mỗi thành viên một ảnh vuông
  product: (id) => "images/san-pham-" + id,          // mỗi sản phẩm một ảnh 16:9
  placeholder: "images/placeholder.svg"
};
// Mặc định trang dùng ảnh minh họa .svg cùng tên. Chép ảnh thật (vd. san-pham-1.jpg) vào images/ là trang tự dùng ảnh thật.
const MEMBER_ALT = {
  1: "Ảnh chân dung thành viên 1, trưởng nhóm phụ trách lập trình web",
  2: "Ảnh chân dung thành viên 2, phụ trách thiết kế giao diện",
  3: "Ảnh chân dung thành viên 3, phụ trách thiết kế bài giảng",
  4: "Ảnh chân dung thành viên 4, phụ trách câu hỏi và kiểm thử",
  5: "Ảnh chân dung thành viên 5, phụ trách lập trình trò chơi ôn tập",
  6: "Ảnh chân dung thành viên 6, phụ trách truyền thông nhóm"
};
const PRODUCT_ALT = {
  1: "Ảnh chụp màn hình bài giảng thuật toán sắp xếp nổi bọt",
  2: "Ảnh chụp phiếu bài tập soạn thảo văn bản đã in ra",
  3: "Ảnh chụp màn hình ứng dụng trắc nghiệm ôn tập mạng máy tính",
  4: "Ảnh chụp màn hình bộ thẻ lật thuật ngữ Tin học 8",
  5: "Ảnh chụp slide kịch bản giờ dạy Python vòng lặp for",
  6: "Ảnh chụp màn hình website lớp học",
  7: "Ảnh chụp màn hình công cụ chia nhóm ngẫu nhiên",
  8: "Ảnh chụp áp phích ôn tập an toàn thông tin treo ở phòng máy"
};
const GALLERY = [
  { file: "images/hoat-dong-1", alt: "Ảnh nhóm họp bàn kế hoạch làm website quanh bàn có laptop", caption: "Họp nhóm lập kế hoạch" },
  { file: "images/hoat-dong-2", alt: "Ảnh sinh viên thực hành lập trình trong phòng máy", caption: "Thực hành trong phòng máy" },
  { file: "images/hoat-dong-3", alt: "Ảnh một bạn giảng thử bài trước lớp bên cạnh bảng", caption: "Giảng thử trước lớp" }
];
