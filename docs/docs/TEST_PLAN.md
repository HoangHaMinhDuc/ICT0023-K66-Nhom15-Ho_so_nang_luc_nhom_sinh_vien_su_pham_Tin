KẾ HOẠCH KIỂM THỬ (TEST PLAN) & QUY CÁCH DỮ LIỆU FORM
- **Chủ đề:** Hồ sơ năng lực nhóm sinh viên Sư phạm Tin Học
- **Người lập:** Tester(Ngô Thùy Ngân)
- 
## 1. Danh sách các trường dữ liệu cho Form tạo hồ sơ cá nhân
Bảng quy chuẩn các ô nhập liệu trên giao diện cong-cu.html để Coder và Navigator xây dựng:

| STT | Tên trường (Field) | ID phần tử HTML | Kiểu dữ liệu | Bắt buộc | Ràng buộc kiểm thử |
| :---: | :--- | :--- | :---: | :---: | :--- |
| 1 | Họ và tên | `input-hoten` | Text | Có | Từ 2 đến 50 ký tự |
| 2 | Chức danh / Vị trí | `input-chucdanh` | Text | Có | Mặc định gợi ý: Sinh viên Sư phạm Tin học |
| 3 | Email liên hệ | `input-email` | Email | Có | Đúng cấu trúc email (chứa @ và tên miền) |
| 4 | Số điện thoại | `input-sdt` | Tel | Có | Đúng 10 chữ số, bắt đầu bằng số 0 |
| 5 | Quê quán / Địa chỉ | `input-diachi` | Text | Không | Cho phép để trống |
| 6 | Mục tiêu nghề nghiệp | `input-muctieu` | Textarea | Có | Đoạn văn ngắn 20 - 200 từ |
| 7 | Kỹ năng chuyên môn | `input-kynang` | Textarea | Có | Danh sách kỹ năng (HTML, CSS, JS, C++,...) |
| 8 | Quá trình học tập | `input-hocvan` | Textarea | Có | Thông tin lớp, trường, năm học |

## 2. Kế hoạch kiểm thử chi tiết (Test Plan)

### 2.1. Kiểm thử giao diện & Trải nghiệm
- Menu điều hướng (Navbar) hiển thị đúng và dùng chung trên toàn bộ các trang.
- Website không bị tràn viền ngang khi xem trên màn hình điện thoại.
- Mọi hình ảnh đều có thuộc tính thẻ `alt`, mọi ô nhập đều có thẻ `label`.

### 2.2. Kiểm thử các trường hợp biên & Xử lý ngoại lệ
- **Trường hợp biên 1 (Dữ liệu rỗng):** Bỏ trống toàn bộ các ô bắt buộc và bấm "Tạo hồ sơ" -> Hệ thống phải báo lỗi rõ ràng, không xuất hồ sơ rỗng.
- **Trường hợp biên 2 (Dữ liệu sai định dạng):** Nhập email thiếu ký tự `@` hoặc số điện thoại có chữ -> Hệ thống chặn lại và thông báo lỗi cụ thể.
- **Trường hợp biên 3 (Nút Đặt lại):** Khi đang có dữ liệu, bấm nút "Đặt lại" -> Toàn bộ form và khung xem trước phải xóa sạch về ban đầu.
- **Nút "Dùng thử":** Bấm nút -> Tự động điền đầy đủ dữ liệu mẫu chuẩn và hiển thị ngay khung xem trước hồ sơ.

### 2.3. Kiểm thử cơ chế in (Print/PDF) và Console
- Bấm "In hồ sơ" -> Cửa sổ in của trình duyệt bật lên, tự động ẩn menu điều hướng, form và các nút bấm theo quy tắc "@media print".
- Nhấn F12 kiểm tra tab Console trên trình duyệt: Luồng thao tác chính không xuất hiện bất kỳ thông báo lỗi đỏ nào (0 Console Error).
