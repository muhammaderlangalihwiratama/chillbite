/* ==========================================================================
   CHILLBITE - Detail Produk Interactive Logic (js/detail_produk.js)
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const btnMinus = document.getElementById("btn-minus");
  const btnPlus = document.getElementById("btn-plus");
  const qtyInput = document.getElementById("qty-input");
  const btnAdd = document.getElementById("btn-tambah-keranjang");
  const btnFav = document.getElementById("btn-favorit");

  const STOK_MAKSIMAL = 50;

  if (btnMinus && btnPlus && qtyInput) {
    btnMinus.addEventListener("click", () => {
      let val = parseInt(qtyInput.value) || 1;
      if (val > 1) {
        qtyInput.value = val - 1;
      }
    });

    btnPlus.addEventListener("click", () => {
      let val = parseInt(qtyInput.value) || 1;
      if (val < STOK_MAKSIMAL) {
        qtyInput.value = val + 1;
      } else {
        CHILLBITE_DATA.tampilkanToast(`⚠️ Batas maksimal pembelian adalah ${STOK_MAKSIMAL} unit!`);
      }
    });
  }

  if (btnAdd) {
    btnAdd.addEventListener("click", () => {
      const val = parseInt(qtyInput.value) || 1;
      CHILLBITE_DATA.addToCart(1, val);
    });
  }

  if (btnFav) {
    btnFav.addEventListener("click", () => {
      btnFav.textContent = btnFav.textContent === "🤍" ? "❤️" : "🤍";
      CHILLBITE_DATA.tampilkanToast("Status favorit produk telah diperbarui!");
    });
  }
});
