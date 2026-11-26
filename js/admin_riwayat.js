/* ==========================================================================
   CHILLBITE - Admin Riwayat & Laporan Interactive Logic (js/admin_riwayat.js)
   ========================================================================== */

function lihatDetailTransaksiAdmin(no, tgl, nama, total, status) {
  alert(`Detail Transaksi #${no}\nTanggal: ${tgl}\nPelanggan: ${nama}\nTotal Pembayaran: ${total}\nStatus Pesanan: ${status}\nMetode Pembayaran: Terverifikasi.`);
}

function eksporLaporan() {
  alert("Laporan Penjualan periode 15 - 22 Nov 2026 berhasil diunduh dalam format PDF / Excel.");
}
