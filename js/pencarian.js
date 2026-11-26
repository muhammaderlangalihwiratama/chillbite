/* ==========================================================================
   CHILLBITE - Pencarian Interactive Logic (js/pencarian.js)
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const formPencarian = document.getElementById("form-pencarian");
  const inputCari = document.getElementById("input-pencarian");
  const infoCount = document.getElementById("jumlah-hasil-cari");
  const cards = document.querySelectorAll(".kartu-katalog-item");

  if (formPencarian) {
    formPencarian.addEventListener("submit", (e) => {
      e.preventDefault();
      const keyword = inputCari.value.trim().toLowerCase();
      let count = 0;

      cards.forEach(card => {
        const title = card.querySelector(".nama-produk-katalog").textContent.toLowerCase();
        const cat = card.querySelector(".kategori-label").textContent.toLowerCase();
        if (!keyword || title.includes(keyword) || cat.includes(keyword)) {
          card.style.display = "flex";
          count++;
        } else {
          card.style.display = "none";
        }
      });

      if (infoCount) {
        infoCount.innerHTML = `Ditemukan <strong>${count} produk</strong> dengan kata kunci "${inputCari.value}"`;
      }
    });
  }
});
