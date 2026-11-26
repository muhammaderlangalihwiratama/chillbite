/* ==========================================================================
   CHILLBITE - Beranda Interactivity (js/beranda.js)
   Sederhana, ringan, dan fungsional
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Inisialisasi Counter Keranjang
  let jumlahKeranjang = 0;
  const badgeCounter = document.getElementById("cart-counter");
  const tombolBeliList = document.querySelectorAll(".tombol-keranjang");
  const toast = document.getElementById("toast-pesan");

  // Fungsi Menampilkan Notifikasi Toast
  function showToast(pesan) {
    if (!toast) return;
    toast.textContent = pesan;
    toast.classList.add("muncul");
    setTimeout(() => {
      toast.classList.remove("muncul");
    }, 2500);
  }

  // Event Klik "+ Tambah ke Keranjang"
  tombolBeliList.forEach((tombol) => {
    tombol.addEventListener("click", (e) => {
      e.preventDefault();
      const kartu = tombol.closest(".kartu-produk");
      const namaProduk = kartu ? kartu.querySelector(".nama-produk").textContent : "Produk";

      jumlahKeranjang++;
      if (badgeCounter) {
        badgeCounter.textContent = jumlahKeranjang;
        badgeCounter.style.display = "flex";
      }

      showToast(`🛒 ${namaProduk} berhasil ditambahkan ke keranjang!`);
    });
  });

  // 2. Filter Kategori Produk Populer
  const tabFilter = document.querySelectorAll(".tab-link");
  const kartuProdukList = document.querySelectorAll(".kartu-produk");

  tabFilter.forEach((tab) => {
    tab.addEventListener("click", (e) => {
      e.preventDefault();

      // Update style tab aktif
      tabFilter.forEach((t) => t.classList.remove("aktif"));
      tab.classList.add("aktif");

      const kategoriDipilih = tab.getAttribute("data-kategori");

      kartuProdukList.forEach((kartu) => {
        const kategoriProduk = kartu.getAttribute("data-kategori");
        if (kategoriDipilih === "semua" || kategoriProduk === kategoriDipilih) {
          kartu.style.display = "flex";
        } else {
          kartu.style.display = "none";
        }
      });
    });
  });

  // 3. Pencarian Cepat
  const searchBtn = document.getElementById("btn-search");
  if (searchBtn) {
    searchBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const query = prompt("Cari produk frozen food favoritmu:");
      if (query && query.trim() !== "") {
        const q = query.toLowerCase().trim();
        let ketemu = 0;
        kartuProdukList.forEach((kartu) => {
          const nama = kartu.querySelector(".nama-produk").textContent.toLowerCase();
          if (nama.includes(q)) {
            kartu.style.display = "flex";
            ketemu++;
          } else {
            kartu.style.display = "none";
          }
        });
        showToast(`🔍 Ditemukan ${ketemu} produk untuk "${query}"`);
        document.getElementById("produk-terlaris")?.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
});
