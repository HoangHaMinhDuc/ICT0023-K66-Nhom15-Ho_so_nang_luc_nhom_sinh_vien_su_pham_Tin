# KẾ HOẠCH KIỂM THỬ (TEST PLAN) - GIAI ĐOẠN v0.1
Dự án: Hồ sơ năng lực nhóm sinh viên Sư phạm Tin Học (Nhóm 15)
Người lập: Tester(Ngô Thùy Ngân)

## 1. Chuẩn hóa dữ liệu tĩnh đầu vào
- **Tài nguyên ảnh đại diện:** 4 ảnh chân dung tỉ lệ vuông 1:1, lưu tại thư mục "images".
- **Trích ngang kỹ năng:** Đã chuẩn hóa danh sách kỹ năng chuyên môn và vai trò 4 thành viên để nạp vào "data.js" và "thanh-vien.html".

## 2. Danh mục các trường dữ liệu Form tạo hồ sơ cá nhân (cong-cu.html)
| STT | Tên trường | Thuộc tính ID | Kiểu dữ liệu | Bắt buộc | Tiêu chí hợp lệ |
| :---: | :--- | :--- | :---: | :---: | :--- |
| 1 | Họ và tên | "input-hoten" | Text | Có | Độ dài 2 - 50 ký tự, không chứa số hoặc ký tự lạ |
| 2 | Vị trí / Chức danh | "input-chucdanh" | Text | Có | Độ dài 5 - 50 ký tự (Gợi ý: Sinh viên Sư phạm Tin Học) |
| 3 | Email | "input-email" | Email | Có | Định dạng chuẩn abc@gmail.com |
| 4 | Số điện thoại | "input-sdt" | Tel | Có | 10 số, bắt đầu bằng chữ số 0 |
| 5 | Quê quán / Địa chỉ | "input-diachi" | Text | Không | Cho phép để trống |
| 6 | Mục tiêu nghề nghiệp | "input-muctieu" | Textarea | Có | Đoạn văn ngắn 20 - 200 từ |
| 7 | Kỹ năng nổi bật | "input-kynang" | Textarea | Có | Ngăn cách bằng dấu phẩy |
| 8 | Quá trình học tập | "input-hocvan" | Textarea | Có | Tối thiểu ghi thông tin lớp, ngành, trường |

## 3. Bộ ca kiểm thử (Test Cases) cho giai đoạn nhập liệu Form
### Nhóm 1: Kiểm thử các nút tính năng tương tác
**1 (Nút "Dùng thử"):**
  - Thao tác: Bấm nút "Dùng thử" khi form đang rỗng.
  - Kết quả mong đợi: Toàn bộ 8 trường dữ liệu được tự động điền giá trị mẫu từ "data.js"; khung xem trước cập nhật ngay lập tức; Console không báo lỗi.
**2 (Nút "Đặt lại"):**
  - Thao tác: Bấm nút "Đặt lại" khi form đang có dữ liệu.
  - Kết quả mong đợi: Toàn bộ ô nhập liệu xóa sạch về chuỗi rỗng; khung xem trước trở về trạng thái placeholder ban đầu; Console không báo lỗi.
**3 (Nút "In / Xuất PDF"):**
  - Thao tác: Bấm nút "In hồ sơ".
  - Kết quả mong đợi: Cửa sổ "window.print()" mở ra; CSS "@media print" ẩn menu, chân trang và form nhập liệu; chỉ hiển thị vùng hồ sơ.

### Nhóm 2: Kiểm thử các trường hợp biên & Ràng buộc dữ liệu
**4 (Biên 1 - Bỏ trống trường bắt buộc):**
  - Thao tác: Để trống các trường bắt buộc (Họ tên hoặc Email) và bấm tạo hồ sơ.
  - Kết quả mong đợi: Trình duyệt kích hoạt cảnh báo hợp lệ HTML5/JS (báo đỏ ô trống), không cho phép sinh hồ sơ rỗng.
**5 (Biên 2 - Định dạng Email sai):**
  - Thao tác: Nhập email không chứa ký tự "@" hoặc không có tên miền.
  - Kết quả mong đợi: Hiển thị thông báo yêu cầu nhập đúng định dạng email.
**6 (Biên 3 - Số điện thoại không hợp lệ):**
  - Thao tác: Nhập số điện thoại chứa ký tự chữ cái hoặc độ dài khác 10 số.
  - Kết quả mong đợi: Hệ thống cảnh báo không hợp lệ.
**7 (Biên 4 - Chuỗi văn bản cực dài):**
  - Thao tác: Dán đoạn văn bản hơn 1.000 ký tự vào ô Kỹ năng hoặc Mục tiêu.
  - Kết quả mong đợi: Khung hiển thị hồ sơ tự động xuống dòng, không làm vỡ bố cục giao diện hay tràn viền trang web.
