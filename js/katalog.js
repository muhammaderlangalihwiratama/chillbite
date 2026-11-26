/* ==========================================================================
   CHILLBITE - Katalog Interactive Logic (js/katalog.js)
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const filterItems = document.querySelectorAll(".item-kategori-filter");
  const checkPromo = document.getElementById("check-promo");
  const sortSelect = document.getElementById("sort-produk");
  const cards = Array.from(document.querySelectorAll(".kartu-katalog-item"));
  const container = document.getElementById("wadah-produk-katalog");

  let activeCategory = "semua";

  function applyFilters() {
    cards.forEach(card => {
      const matchCat = (activeCategory === "semua" || card.getAttribute("data-kategori") === activeCategory);
      const isPromo = card.classList.contains("promo-item");
      const matchPromo = !checkPromo || !checkPromo.checked || isPromo;

      if (matchCat && matchPromo) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  }

  // Filter Kategori
  filterItems.forEach(item => {
    item.addEventListener("click", () => {
      filterItems.forEach(i => i.classList.remove("aktif"));
      item.classList.add("aktif");
      activeCategory = item.getAttribute("data-filter");
      applyFilters();
    });
  });

  // Checkbox Promo
  if (checkPromo) {
    checkPromo.addEventListener("change", applyFilters);
  }

  // Urutan Produk
  if (sortSelect && container) {
    sortSelect.addEventListener("change", () => {
      const val = sortSelect.value;
      const sorted = [...cards];
      if (val === "termurah") {
        sorted.sort((a, b) => parseInt(a.dataset.harga) - parseInt(b.dataset.harga));
      } else if (val === "termahal") {
        sorted.sort((a, b) => parseInt(b.dataset.harga) - parseInt(a.dataset.harga));
      }
      sorted.forEach(c => container.appendChild(c));
    });
  }
});
