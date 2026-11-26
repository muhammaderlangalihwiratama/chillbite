/* ==========================================================================
   CHILLBITE - Admin Profil Toko Interactive Logic (js/admin_profil.js)
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const formToko = document.getElementById("form-toko");
  const formPassword = document.getElementById("form-password-admin");
  const btnGantiLogo = document.getElementById("btn-ganti-logo");

  if (formToko) {
    formToko.addEventListener("submit", (e) => {
      e.preventDefault();
      CHILLBITE_DATA.tampilkanToast("✅ Informasi toko berhasil disimpan!");
    });
  }

  if (formPassword) {
    formPassword.addEventListener("submit", (e) => {
      e.preventDefault();
      const passBaru = document.getElementById("pass_baru").value;
      const passKonf = document.getElementById("pass_konf").value;

      if (passBaru.length < 8) {
        alert("⚠️ Password baru minimal 8 karakter!");
        return;
      }

      if (passBaru !== passKonf) {
        alert("⚠️ Konfirmasi password baru tidak cocok!");
        return;
      }

      CHILLBITE_DATA.tampilkanToast("✅ Password admin berhasil diperbarui!");
      formPassword.reset();
    });
  }

  if (btnGantiLogo) {
    btnGantiLogo.addEventListener("click", () => {
      alert("Pilih file gambar logo baru (.PNG / .JPG, maks 2MB).");
    });
  }
});
