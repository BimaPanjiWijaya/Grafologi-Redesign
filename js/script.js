const daftarBtn = document.getElementById("daftarBtn");
const modalOverlay = document.getElementById("modalOverlay");
const modalCloseBtn = document.getElementById("modalCloseBtn");

daftarBtn.addEventListener("click", function () {
  modalOverlay.classList.add("active");
});

modalCloseBtn.addEventListener("click", function () {
  modalOverlay.classList.remove("active");
});

modalOverlay.addEventListener("click", function (e) {
  if (e.target === modalOverlay) {
    modalOverlay.classList.remove("active");
  }
});
