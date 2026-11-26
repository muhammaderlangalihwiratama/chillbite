/* ==========================================================================
   CHILLBITE - Login Interactivity (js/login.js)
   Fitur: Toggle kata sandi, validasi, dan feedback interaktif
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const formLogin = document.getElementById("form-login");
  const inputUsername = document.getElementById("username");
  const inputPassword = document.getElementById("password");
  const btnTogglePassword = document.getElementById("toggle-password");
  const pesanError = document.getElementById("pesan-error");

  // 1. Toggle Show/Hide Password
  if (btnTogglePassword && inputPassword) {
    btnTogglePassword.addEventListener("click", () => {
      const typeSaatIni = inputPassword.getAttribute("type");
      if (typeSaatIni === "password") {
        inputPassword.setAttribute("type", "text");
        btnTogglePassword.textContent = "🙈";
        btnTogglePassword.setAttribute("title", "Sembunyikan kata sandi");
      } else {
        inputPassword.setAttribute("type", "password");
        btnTogglePassword.textContent = "👁";
        btnTogglePassword.setAttribute("title", "Lihat kata sandi");
      }
    });
  }

  // 2. Validasi & Submit Form Login
  if (formLogin) {
    formLogin.addEventListener("submit", (e) => {
      e.preventDefault();

      const username = inputUsername.value.trim();
      const password = inputPassword.value.trim();

      if (!username || !password) {
        if (pesanError) {
          pesanError.textContent = "⚠️ Mohon isi nama pengguna dan kata sandi!";
          pesanError.style.display = "block";
        }
        return;
      }

      // Sembunyikan pesan error jika ada
      if (pesanError) {
        pesanError.style.display = "none";
      }

      // Simulasi proses login berhasil
      const tombolMasuk = formLogin.querySelector(".tombol-utama");
      if (tombolMasuk) {
        tombolMasuk.textContent = "Sedang Masuk...";
        tombolMasuk.style.opacity = "0.8";
        tombolMasuk.disabled = true;
      }

      setTimeout(() => {
        alert(`Selamat datang kembali di CHILLBITE, ${username}!`);
        window.location.href = "beranda.html";
      }, 700);
    });
  }
});
