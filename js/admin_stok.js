/* ==========================================================================
   CHILLBITE - Admin Stok Interactive Logic (js/admin_stok.js)
   ========================================================================== */

function sesuaikanStok(id, delta, nama) {
  const el = document.getElementById(`stok-val-${id}`);
  if (el) {
    let current = parseInt(el.textContent) || 0;
    if (current + delta >= 0) {
      current += delta;
      el.textContent = current;
      CHILLBITE_DATA.tampilkanToast(`Stok "${nama}" disesuaikan: ${current} unit`);
    }
  }
}

function restockSekarang() {
  alert("⚡ Formulir purchase order (PO) restock supplier otomatis dibuat!");
  CHILLBITE_DATA.tampilkanToast("Permintaan restock berhasil dikirim ke supplier.");
}
