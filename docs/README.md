# Hồ sơ năng lực nhóm sinh viên sư phạm Tin (Nhóm 15)

Bài tập lớn ICT0023, K66. Website tĩnh dùng HTML, CSS, Bootstrap, JavaScript, jQuery; chạy hoàn toàn trên trình duyệt.

- **Website:** https://TEN-TAI-KHOAN.github.io/ICT0023-K66-Nhom15-HoSoNangLucSuPhamTin/ (cập nhật sau khi bật Pages)
- **Người dùng:** sinh viên chuẩn bị thực tập và tuyển dụng.

| Họ tên | GitHub | Vai trò | Nhiệm vụ |
|---|---|---|---|
| (điền) | (điền) | (điền) | (điền) |

## Trang
`index.html` giới thiệu · `thanh-vien.html` hồ sơ thành viên · `san-pham.html` sản phẩm (lọc, sắp xếp, modal) · `ky-nang.html` kỹ năng và hỏi đáp · `cong-cu.html` tạo hồ sơ in · `lien-he.html` form liên hệ

## Ba chức năng bắt buộc
1. Render từ mảng đối tượng: `MEMBERS`, `PRODUCTS`, `SKILLS`, `FAQS` trong `js/data.js`.
2. Tìm kiếm, lọc, sắp xếp: `initMembers`, `initProducts`, `initSkills`.
3. Kiểm tra form và kết quả tức thời: `initCv` (số năm kinh nghiệm, độ hoàn thiện, hồ sơ xem trước, in), `initContact`.

Không dùng backend, localStorage hay cookie. Dữ liệu đặt lại khi tải trang. Xem `docs/` để làm báo cáo và nộp bài.

## Ảnh
Xem `images/README.md` (tên tệp, kích thước, quy tắc) và `tools/toi-uu-anh.py` (nén ảnh và xóa vị trí GPS).

## Bảng màu (đổi ở `:root` trong `css/style.css`)
Ý tưởng "bàn giáo viên", tỉ lệ 60-30-10: nền giấy ô ly (`--paper`) 60, xanh phấn bảng (`--ink` #0F5A46) 30, vàng bút dạ (`--hl` #FFE45C) và đỏ bút chấm bài (`--margin` #C8372D) 10. Mọi cặp chữ/nền đều đạt tương phản tối thiểu 4.5:1, có cả chế độ tối. Ảnh `.svg` dùng màu cố định cùng bảng màu này; nếu đổi màu chủ đạo, cần đổi cả các tệp SVG.
