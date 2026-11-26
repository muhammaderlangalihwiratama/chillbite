/* ==========================================================================
   CHILLBITE - Admin Produk Interactive Logic (js/admin_produk.js)
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const btnTambah = document.getElementById("btn-tambah-produk");

  if (btnTambah) {
    btnTambah.addEventListener("click", () => {
      const nama = prompt("Masukkan nama produk baru:");
      if (nama) {
        CHILLBITE_DATA.tampilkanToast(`✅ Produk baru "${nama}" berhasil didaftarkan ke katalog!`);
      }
    });
  }
});

function ubahProdukAdmin(nama) {
  const hargaBaru = prompt(`Ubah harga untuk "${nama}":`, "30000");
  if (hargaBaru) {
    CHILLBITE_DATA.tampilkanToast(`✅ Harga produk "${nama}" berhasil diubah menjadi Rp ${parseInt(hargaBaru).toLocaleString("id-ID")}!`);
  }
}

function hapusProdukAdmin(nama) {
  if (confirm(`Apakah Anda yakin ingin menghapus produk "${nama}" dari katalog?`)) {
    CHILLBITE_DATA.tampilkanToast(`🗑️ Produk "${nama}" telah dihapus.`);
  }
}
