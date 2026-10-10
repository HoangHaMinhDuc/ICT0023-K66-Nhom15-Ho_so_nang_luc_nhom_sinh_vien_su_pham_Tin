document.addEventListener("DOMContentLoaded", () => {
  console.log("Hệ thống đã sẵn sàng!");
  khoiTaoCacNut();
});

function khoiTaoCacNut() {
  const nutIn = document.getElementById("btn-in");
  const nutDungThu = document.getElementById("btn-dung-thu");
  const nutDatLai = document.getElementById("btn-dat-lai");

  if (nutIn) {
    nutIn.addEventListener("click", () => {
      window.print();
    });
  }

  if (nutDungThu) {
    nutDungThu.addEventListener("click", dienDuLieuMau);
  }

  if (nutDatLai) {
    nutDatLai.addEventListener("click", datLaiForm);
  }
}


function dienDuLieuMau() {
  console.log("Đang điền dữ liệu mẫu...");
}

function datLaiForm() {
  console.log("Đã đặt lại dữ liệu.");
}

function locSanPham(danhSach, tieuChi) {
}
