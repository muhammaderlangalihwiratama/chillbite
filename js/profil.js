/* ==========================================================================
   CHILLBITE - Profil Pelanggan Interactive Logic (js/profil.js)
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const formProfil = document.getElementById("form-edit-profil");
  const btnGantiFoto = document.getElementById("btn-ganti-foto");

  if (formProfil) {
    formProfil.addEventListener("submit", (e) => {
      e.preventDefault();
      CHILLBITE_DATA.tampilkanToast("✅ Data profil berhasil diperbarui!");
    });
  }

  if (btnGantiFoto) {
    btnGantiFoto.addEventListener("click", () => {
      alert("Pilih foto baru dari perangkat Anda untuk mengganti foto profil.");
    });
  }
});
