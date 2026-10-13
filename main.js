"use strict";
const $id = (id) => document.getElementById(id);
const norm = (s) => s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d");
const el = (tag, cls, text) => { const e = document.createElement(tag); if (cls) e.className = cls; if (text !== undefined) e.textContent = text; return e; };
const chips = (arr) => { const f = document.createDocumentFragment(); arr.forEach((s) => f.appendChild(el("span", "chip", s))); return f; };
/* Hàng chip riêng: không bị kéo giãn khi nằm trong thẻ dùng flex-column */
const chipRow = (arr) => { const d = el("div", "chip-row"); d.appendChild(chips(arr)); return d; };
/* Loại sản phẩm -> màu thanh đầu thẻ (luôn kèm chữ trong huy hiệu) */
const TYPE_CLASS = { "Dạy học": "accent-yellow", "Lập trình": "accent-green" };
const typeBadge = (type) => el("span", "type-badge " + (TYPE_CLASS[type] || "accent-green"), type);
const CV_EMPTY = '<div class="cv-empty-state"><img src="image/cvtrong.jpg" width="240" height="160" alt="Tờ hồ sơ còn trống đặt cạnh cây bút (thay bằng ảnh minh họa của nhóm)"><p>Chưa có dữ liệu. Nhập vào form hoặc bấm “Dùng thử”.</p></div>';

/* Ảnh: mọi tệp trong image/ đều là .jpg, truyền thẳng đường dẫn đầy đủ */
function picture(src, alt, cls, w, h) {
  const i = el("img", cls || ""); i.src = src; i.alt = alt; i.loading = "lazy"; if (w) { i.width = w; i.height = h; }
  return i;
}
function photoBox(src, alt, cls) {
  const box = el("div", "thumb has-photo " + (cls || "")); box.appendChild(picture(src, alt)); return box;
}
/* Ảnh nền tùy chọn: chỉ gắn khi tải thành công */
function loadImage(src, onOk) {
  const img = new Image();
  img.onload = () => onOk(img);
  img.src = src;
}
function initHero() {
  const hero = $id("hero");
  if (!hero) return;
  loadImage(IMAGES.hero, () => {
    hero.style.setProperty("--hero-img", 'url("' + IMAGES.hero + '")');
    hero.classList.add("has-bg");
  });
}
function initGallery() {
  const box = $id("gallery");
  if (!box) return;
  GALLERY.forEach((g) => {
    const col = el("div", "col-12 col-md-4"), fig = el("figure", "gallery-item");
    fig.appendChild(photoBox(g.file, g.alt)); fig.appendChild(el("figcaption", "", g.caption));
    col.appendChild(fig); box.appendChild(col);
  });
}
const thumbFor = (p) => photoBox(IMAGES.product(p.id), PRODUCT_ALT[p.id] || "Ảnh sản phẩm " + p.title);

/* Trang chủ: số liệu tính từ mảng */
function initStats() {
  if (!$id("stat-members")) return;
  $id("stat-members").textContent = MEMBERS.length;
  $id("stat-products").textContent = PRODUCTS.length;
  $id("stat-skills").textContent = SKILLS.length;
}

/* Thành viên: render + tìm kiếm */
function initMembers() {
  const box = $id("member-list");
  if (!box) return;
  function render() {
    const kw = norm($id("m-search").value.trim());
    const list = MEMBERS.filter((m) => kw === "" || norm([m.name, m.role, ...m.skills].join(" ")).includes(kw));
    box.innerHTML = "";
    list.forEach((m) => {
      const col = el("div", "col-12 col-md-6 col-lg-4"), card = el("div", "card h-100"), body = el("div", "card-body");
      const head = el("div", "d-flex gap-3 align-items-center mb-2");
      const av = el("div", "avatar has-photo"); av.appendChild(picture(IMAGES.member(m.id), MEMBER_ALT[m.id] || "Ảnh thành viên " + m.id, "", 64, 64)); head.appendChild(av);
      const t = el("div"); t.appendChild(el("h2", "h5 mb-0", m.name)); t.appendChild(el("p", "small text-muted-fg mb-0", m.role + ", năm " + m.year));
      head.appendChild(t); body.appendChild(head);
      body.appendChild(el("p", "", m.bio)); body.appendChild(chipRow(m.skills));
      card.appendChild(body); col.appendChild(card); box.appendChild(col);
    });
    $id("member-empty").classList.toggle("d-none", list.length > 0);
    $id("m-count").textContent = "Hiển thị " + list.length + "/" + MEMBERS.length + " thành viên";
  }
  $id("m-search").addEventListener("input", render);
  render();
}

/* Sản phẩm: lọc nhiều tiêu chí + sắp xếp + modal */
function initProducts() {
  const box = $id("product-list");
  if (!box) return;
  const modal = new bootstrap.Modal($id("productModal"));
  const skills = [...new Set(PRODUCTS.flatMap((p) => p.skills))].sort();
  const years = [...new Set(PRODUCTS.map((p) => p.year))].sort().reverse();
  const fill = (id, first, arr) => { const s = $id(id); s.appendChild(new Option(first, "")); arr.forEach((v) => s.appendChild(new Option(v, v))); };
  fill("p-skill", "Tất cả kỹ năng", skills); fill("p-year", "Tất cả năm", years);
  function render() {
    const kw = norm($id("p-search").value.trim()), sk = $id("p-skill").value, yr = $id("p-year").value;
    const list = PRODUCTS.filter((p) => (sk === "" || p.skills.includes(sk)) && (yr === "" || p.year === yr) &&
      (kw === "" || norm(p.title + " " + p.summary).includes(kw)));
    if ($id("p-sort").value === "az") list.sort((a, b) => a.title.localeCompare(b.title, "vi"));
    else list.sort((a, b) => b.year.localeCompare(a.year) || b.id - a.id);
    box.innerHTML = "";
    list.forEach((p) => {
      const col = el("div", "col-12 col-md-6 col-lg-4"), card = el("div", "card h-100 accent " + (TYPE_CLASS[p.type] || "accent-green")), body = el("div", "card-body d-flex flex-column");
      const meta = el("p", "small text-muted-fg mb-2"); meta.appendChild(typeBadge(p.type)); meta.appendChild(document.createTextNode("Năm học " + p.year));
      body.appendChild(meta);
      body.appendChild(el("h2", "h5", p.title)); body.appendChild(el("p", "", p.summary)); body.appendChild(chipRow(p.skills));
      const b = el("button", "btn btn-outline-ink btn-sm mt-auto align-self-start", "Xem chi tiết"); b.type = "button";
      b.addEventListener("click", () => {
        $id("productModalTitle").textContent = p.title;
        const mb = $id("productModalBody"); mb.innerHTML = "";
        mb.appendChild(thumbFor(p)); const mm = el("p", "small text-muted-fg"); mm.appendChild(typeBadge(p.type)); mm.appendChild(document.createTextNode("Năm học " + p.year)); mb.appendChild(mm); mb.appendChild(el("p", "", p.detail));
if (p.link) {
  const a = el("a", "", "Xem sản phẩm");
  a.href = p.link; a.target = "_blank"; a.rel = "noopener noreferrer";
  const lp = el("p"); lp.appendChild(a); mb.appendChild(lp);
}; mb.appendChild(chipRow(p.skills));
        modal.show();
      });
      body.appendChild(b); card.appendChild(thumbFor(p)); card.appendChild(body); col.appendChild(card); box.appendChild(col);
    });
    $id("product-empty").classList.toggle("d-none", list.length > 0);
    $id("p-count").textContent = "Hiển thị " + list.length + "/" + PRODUCTS.length + " sản phẩm";
  }
  ["p-search", "p-skill", "p-year", "p-sort"].forEach((id) => $id(id).addEventListener(id === "p-search" ? "input" : "change", render));
  $id("p-reset").addEventListener("click", () => { ["p-search", "p-skill", "p-year"].forEach((id) => { $id(id).value = ""; }); $id("p-sort").value = "new"; render(); });
  render();
}

/* Kỹ năng: bảng sắp xếp + hỏi đáp (jQuery) */
function initSkills() {
  if (!$id("skill-body")) return;
  let key = "level", dir = -1;
  function render() {
    const rows = [...SKILLS].sort((a, b) => (typeof a[key] === "number" ? a[key] - b[key] : a[key].localeCompare(b[key], "vi")) * dir);
    const tb = $id("skill-body"); tb.innerHTML = "";
    rows.forEach((s) => {
      const tr = el("tr"); tr.appendChild(el("td", "", s.name));
      const td = el("td"), m = el("span", "meter"), i = el("i"); i.style.width = s.level * 20 + "%"; m.appendChild(i);
      td.appendChild(m); td.appendChild(document.createTextNode(s.level + "/5")); tr.appendChild(td); tr.appendChild(el("td", "", s.note)); tb.appendChild(tr);
    });
  }
  document.querySelectorAll(".sort-btn").forEach((b) => b.addEventListener("click", () => {
    dir = key === b.dataset.key ? -dir : 1; key = b.dataset.key; render();
  }));
  render();
  const box = $id("faq-list");
  FAQS.forEach((f, i) => {
    box.insertAdjacentHTML("beforeend", '<div class="accordion-item faq-item"><h3 class="accordion-header"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq' + i + '" aria-expanded="false" aria-controls="faq' + i + '"></button></h3><div id="faq' + i + '" class="accordion-collapse collapse" data-bs-parent="#faq-list"><div class="accordion-body"></div></div></div>');
    const it = box.lastElementChild; it.querySelector("button").textContent = f.q; it.querySelector(".accordion-body").textContent = f.a;
  });
  function filter() {
    const kw = norm($("#faq-search").val().trim()); let n = 0;
    $(".faq-item").each(function () { const hit = kw === "" || norm($(this).text()).includes(kw); $(this).toggle(hit); if (hit) n++; });
    $("#faq-empty").toggleClass("d-none", n > 0); $("#faq-count").text("Có " + n + "/" + FAQS.length + " câu hỏi");
  }
  $("#faq-search").on("input", filter); filter();
}

/* Tạo hồ sơ: kiểm tra dữ liệu + tính tức thời + in (jQuery cho xem trước) */
function initCv() {
  const form = $id("cv-form");
  if (!form) return;
  const ids = ["t-name", "t-class", "t-email", "t-start", "t-projects", "t-skills", "t-goal"];
  const YEAR = new Date().getFullYear();
  let photoUrl = "";
  const photoInput = $id("t-photo");
  photoInput.addEventListener("change", () => {
    const f = photoInput.files[0], hint = photoInput.nextElementSibling;
    photoInput.classList.remove("is-invalid"); hint.textContent = "";
    if (photoUrl) { URL.revokeObjectURL(photoUrl); photoUrl = ""; }
    if (!f) return;
    if (!["image/jpeg", "image/png", "image/webp"].includes(f.type)) { photoInput.classList.add("is-invalid"); hint.textContent = "Chỉ nhận ảnh JPG, PNG hoặc WebP."; photoInput.value = ""; return; }
    if (f.size > 2 * 1024 * 1024) { photoInput.classList.add("is-invalid"); hint.textContent = "Ảnh nặng " + (f.size / 1048576).toFixed(1) + " MB, tối đa 2 MB."; photoInput.value = ""; return; }
    photoUrl = URL.createObjectURL(f);
    if ($id("cv").querySelector("h2")) renderCv(read());
  });
  const setErr = (e, msg, errs) => { e.classList.add("is-invalid"); e.nextElementSibling.textContent = msg; errs.push({ id: e.id, msg }); };
  function read() {
    const v = {}; ids.forEach((id) => { v[id] = $id(id).value.trim(); }); return v;
  }
  function completion(v) { const n = ids.filter((id) => v[id] !== "").length; return Math.round((n / ids.length) * 100); }
  function updateBar(v) {
    const p = completion(v);
    $("#cv-progress").css("width", p + "%"); $("#cv-progress-pct").text(p + "%"); $("#cv-progress-wrap").attr("aria-valuenow", p);
  }
  function clear() {
    form.querySelectorAll(".is-invalid").forEach((e) => { e.classList.remove("is-invalid"); e.nextElementSibling.textContent = ""; });
    $("#cv-errors").addClass("d-none").empty();
  }
  function validate(v) {
    const errs = [];
    if (v["t-name"].length < 2) setErr($id("t-name"), "Họ tên cần ít nhất 2 ký tự.", errs);
    if (v["t-class"] === "") setErr($id("t-class"), "Hãy nhập lớp hoặc ngành.", errs);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v["t-email"])) setErr($id("t-email"), "Email chưa đúng định dạng, ví dụ ten@email.com.", errs);
    const y = Number(v["t-start"]);
    if (!/^\d{4}$/.test(v["t-start"]) || y < 2000 || y > YEAR) setErr($id("t-start"), "Nhập năm có 4 chữ số từ 2000 đến " + YEAR + ".", errs);
    if (!/^\d{1,3}$/.test(v["t-projects"])) setErr($id("t-projects"), "Số sản phẩm phải là số nguyên từ 0 đến 999.", errs);
    const sk = parseSkills(v["t-skills"]);
    if (sk.length === 0) setErr($id("t-skills"), "Nhập ít nhất một kỹ năng.", errs);
    else if (sk.length > 8) setErr($id("t-skills"), "Tối đa 8 kỹ năng, bạn đã nhập " + sk.length + ".", errs);
    if (v["t-goal"].length > 200) setErr($id("t-goal"), "Mục tiêu dài " + v["t-goal"].length + "/200 ký tự.", errs);
    return errs;
  }
  const parseSkills = (s) => [...new Set(s.split(",").map((x) => x.trim()).filter((x) => x !== ""))];
  function renderCv(v) {
    const years = Math.max(0, YEAR - Number(v["t-start"]));
    const cv = $id("cv"); cv.innerHTML = "";
    if (photoUrl) { const im = el("img", "cv-photo"); im.src = photoUrl; im.alt = "Ảnh đại diện của " + v["t-name"]; im.width = 96; im.height = 96; cv.appendChild(im); }
    cv.appendChild(el("h2", "h3 mb-0", v["t-name"]));
    cv.appendChild(el("p", "mb-2", v["t-class"] + "  |  " + v["t-email"]));
    cv.appendChild(el("h3", "", "Tóm tắt"));
    cv.appendChild(el("p", "", years + " năm học lập trình, " + Number(v["t-projects"]) + " sản phẩm đã hoàn thành."));
    cv.appendChild(el("h3", "", "Kỹ năng")); const p = el("p"); p.appendChild(chips(parseSkills(v["t-skills"]))); cv.appendChild(p);
    cv.appendChild(el("h3", "", "Mục tiêu nghề nghiệp"));
    cv.appendChild(el("p", "", v["t-goal"] === "" ? "Chưa nhập mục tiêu." : v["t-goal"]));
    $id("cv-print").disabled = false;
  }
  form.addEventListener("submit", (e) => {
    e.preventDefault(); clear();
    const v = read(); updateBar(v); const errs = validate(v);
    if (errs.length) {
      const box = $("#cv-errors").removeClass("d-none").html("<strong>Có " + errs.length + " lỗi cần sửa:</strong>");
      const ul = $("<ul class='mb-0'></ul>");
      errs.forEach((x) => ul.append($("<li></li>").append($("<a></a>").attr("href", "#" + x.id).text(x.msg))));
      box.append(ul).trigger("focus"); return;
    }
    renderCv(v);
  });
  $(form).on("input", () => updateBar(read()));
  $id("cv-sample").addEventListener("click", () => {
    const s = { "t-name": "Nguyễn Văn Mẫu", "t-class": "ĐHSP Tin K66", "t-email": "mau@example.com", "t-start": String(YEAR - 3), "t-projects": "5", "t-skills": "HTML/CSS, JavaScript, Git, Soạn bài giảng", "t-goal": "Trở thành giáo viên Tin học biết dùng sản phẩm số để dạy học." };
    ids.forEach((id) => { $id(id).value = s[id]; }); form.requestSubmit();
  });
  form.addEventListener("reset", () => { clear(); if (photoUrl) { URL.revokeObjectURL(photoUrl); photoUrl = ""; } $id("cv").innerHTML = CV_EMPTY; $id("cv-print").disabled = true; setTimeout(() => updateBar(read()), 0); });
  $id("cv-print").addEventListener("click", () => window.print());
}

/* Liên hệ */
function initContact() {
  const form = $id("contact-form");
  if (!form) return;
  const msg = $id("f-msg"), MIN = 10, MAX = 300, modal = new bootstrap.Modal($id("previewModal")), box = $id("form-errors");
  const upd = () => { const n = msg.value.trim().length; $id("f-count").textContent = n < MIN ? "Đã nhập " + n + "/" + MAX + " ký tự — cần thêm " + (MIN - n) + " ký tự." : "Đã nhập " + n + "/" + MAX + " ký tự."; };
  msg.addEventListener("input", upd);
  const clear = () => { form.querySelectorAll(".is-invalid").forEach((e) => { e.classList.remove("is-invalid"); e.nextElementSibling.textContent = ""; }); box.classList.add("d-none"); box.innerHTML = ""; };
  form.addEventListener("submit", (e) => {
    e.preventDefault(); clear(); const errs = [];
    const add = (e2, m) => { e2.classList.add("is-invalid"); e2.nextElementSibling.textContent = m; errs.push([e2.id, m]); };
    const n = $id("f-name"), em = $id("f-email"), t = $id("f-topic"), len = msg.value.trim().length;
    if (n.value.trim().length < 2) add(n, "Họ tên cần ít nhất 2 ký tự.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em.value.trim())) add(em, "Email chưa đúng định dạng, ví dụ ten@email.com.");
    if (t.value === "") add(t, "Hãy chọn bạn là ai.");
    if (len < MIN) add(msg, "Lời nhắn quá ngắn (" + len + "/" + MIN + " ký tự)."); else if (len > MAX) add(msg, "Lời nhắn quá dài (" + len + "/" + MAX + " ký tự).");
    if (errs.length) {
      box.innerHTML = "<strong>Có " + errs.length + " lỗi cần sửa:</strong>"; const ul = el("ul", "mb-0");
      errs.forEach(([id, m]) => { const li = el("li"), a = el("a", "", m); a.href = "#" + id; li.appendChild(a); ul.appendChild(li); });
      box.appendChild(ul); box.classList.remove("d-none"); box.focus(); return;
    }
    const b = $id("previewBody"); b.innerHTML = "";
    [["Họ tên", n.value.trim()], ["Email", em.value.trim()], ["Bạn là", t.value], ["Lời nhắn", msg.value.trim()]].forEach(([k, v]) => { const p = el("p"); p.appendChild(el("strong", "", k + ": ")); p.appendChild(document.createTextNode(v)); b.appendChild(p); });
    b.appendChild(el("p", "small", "Đây chỉ là bản xem trước, chưa có dữ liệu nào được gửi đi.")); modal.show();
  });
  $id("f-sample").addEventListener("click", () => { $id("f-name").value = "Người xem mẫu"; $id("f-email").value = "mau@example.com"; $id("f-topic").value = "Giảng viên"; msg.value = "Em muốn xem thêm bài giảng thuật toán của nhóm."; upd(); });
  form.addEventListener("reset", () => { clear(); setTimeout(upd, 0); });
}

document.addEventListener("DOMContentLoaded", () => { initHero(); initGallery(); initStats(); initMembers(); initProducts(); initSkills(); initCv(); initContact(); });
