/* ==========================================================================
   CHILLBITE - Register Interactivity (js/register.js)
   Fitur: Validasi registrasi, konfirmasi password, dan feedback
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const formRegister = document.getElementById("form-register");
  const inputNama = document.getElementById("nama");
  const inputUsername = document.getElementById("username");
  const inputEmail = document.getElementById("email");
  const inputPassword = document.getElementById("password");
  const inputKonfirmasi = document.getElementById("konfirmasi");
  const checkSetuju = document.getElementById("setuju");
  const pesanError = document.getElementById("pesan-error");

  function tampilkanError(teks) {
    if (pesanError) {
      pesanError.textContent = teks;
      pesanError.style.display = "block";
    }
  }

  function sembunyikanError() {
    if (pesanError) {
      pesanError.style.display = "none";
    }
  }

  if (formRegister) {
    formRegister.addEventListener("submit", (e) => {
      e.preventDefault();
      sembunyikanError();

      const nama = inputNama.value.trim();
      const username = inputUsername.value.trim();
      const email = inputEmail.value.trim();
      const password = inputPassword.value;
      const konfirmasi = inputKonfirmasi.value;

      if (!nama || !username || !email || !password || !konfirmasi) {
        tampilkanError("⚠️ Semua kolom wajib diisi!");
        return;
      }

      if (password.length < 6) {
        tampilkanError("⚠️ Kata sandi minimal harus 6 karakter!");
        inputPassword.focus();
        return;
      }

      if (password !== konfirmasi) {
        tampilkanError("⚠️ Konfirmasi kata sandi tidak cocok!");
        inputKonfirmasi.focus();
        return;
      }

      if (!checkSetuju.checked) {
        tampilkanError("⚠️ Anda harus menyetujui Syarat & Ketentuan terlebih dahulu!");
        return;
      }

      // Simulasi submit sukses
      const tombolSubmit = formRegister.querySelector(".tombol-utama");
      if (tombolSubmit) {
        tombolSubmit.textContent = "Mendaftarkan Akun...";
        tombolSubmit.style.opacity = "0.8";
        tombolSubmit.disabled = true;
      }

      setTimeout(() => {
        alert(`Pendaftaran berhasil! Selamat bergabung di CHILLBITE, ${nama}.\nSilakan masuk dengan akun baru Anda.`);
        window.location.href = "login.html";
      }, 700);
    });
  }
});
