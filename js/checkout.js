/* ==========================================================================
   CHILLBITE - Checkout Interactive Logic (js/checkout.js)
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const btnBuatPesanan = document.getElementById("btn-buat-pesanan");
  const inputNama = document.getElementById("nama_penerima");
  const inputAlamat = document.getElementById("alamat_lengkap");
  const inputTelp = document.getElementById("no_telepon");

  if (btnBuatPesanan) {
    btnBuatPesanan.addEventListener("click", () => {
      const nama = inputNama ? inputNama.value.trim() : "";
      const alamat = inputAlamat ? inputAlamat.value.trim() : "";
      const telp = inputTelp ? inputTelp.value.trim() : "";

      if (!nama || !alamat || !telp) {
        alert("⚠️ Mohon lengkapi nama penerima, alamat pengiriman, dan nomor telepon!");
        return;
      }

      btnBuatPesanan.textContent = "Sedang Memproses Pesanan...";
      btnBuatPesanan.disabled = true;

      setTimeout(() => {
        alert("🎉 Pesanan Anda #INV-004 berhasil dibuat! Terima kasih telah berbelanja di CHILLBITE.");
        window.location.href = "riwayat_pelanggan.html";
      }, 800);
    });
  }
});
