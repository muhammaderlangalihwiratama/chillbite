/* ==========================================================================
   CHILLBITE - Admin Pesanan Interactive Logic (js/admin_pesanan.js)
   ========================================================================== */

function kirimPesananAdmin(orderId, nama) {
  alert(`Pesanan ${orderId} milik ${nama} telah diserahkan kepada kurir pengiriman berpendingin.`);
  CHILLBITE_DATA.tampilkanToast(`Pesanan ${orderId} beralih status ke DIKIRIM!`);
}

function selesaikanPesananAdmin(orderId, nama) {
  alert(`Pesanan ${orderId} milik ${nama} telah berhasil diterima pelanggan dan diselesaikan.`);
  CHILLBITE_DATA.tampilkanToast(`Pesanan ${orderId} beralih status ke SELESAI!`);
}

function eksporPesanan() {
  alert("Data seluruh pesanan berhasil diekspor ke format spreadsheet Excel (.xlsx)!");
}
