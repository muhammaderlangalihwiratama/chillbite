/* ==========================================================================
   CHILLBITE - Global Core Shared Script (js/main.js)
   Mengelola state keranjang, notifikasi toast, dan data produk
   ========================================================================== */

const CHILLBITE_DATA = {
  produk: [
    { id: 1, nama: "Nugget Ayam", kategori: "nugget-sosis", labelKategori: "Nugget & Sosis", harga: 30000, stok: 50, tag: "Terlaris", gambar: "../assets/images/gambar frozen food.jpg" },
    { id: 2, nama: "Kentang Goreng", kategori: "camilan", labelKategori: "Camilan", harga: 27000, stok: 70, tag: "Terlaris", gambar: "../assets/images/Supermarket Cold Storage in UAE _ Fresh Food Refrigeration.jpg" },
    { id: 3, nama: "Bakso Sapi", kategori: "bakso", labelKategori: "Bakso", harga: 26500, stok: 60, tag: "Terlaris", gambar: "../assets/images/frozen food.jpg" },
    { id: 4, nama: "Dimsum Ayam", kategori: "dimsum", labelKategori: "Dimsum", harga: 42000, stok: 45, tag: "Terlaris", gambar: "../assets/images/Frozen Foods & Ready Meals Online UAE _ Martoo_ae.jpg" },
    { id: 5, nama: "Sosis Ayam", kategori: "nugget-sosis", labelKategori: "Nugget & Sosis", harga: 45000, stok: 40, tag: "Terlaris", gambar: "../assets/images/MISI SEAFOOD FLIER DESIGN.jpg" },
    { id: 6, nama: "Cheese Steak", kategori: "daging-seafood", labelKategori: "Daging & Seafood", harga: 75000, stok: 25, tag: "Promo", gambar: "../assets/images/gambar ayam.jpeg" },
    { id: 7, nama: "Udang Keju", kategori: "daging-seafood", labelKategori: "Daging & Seafood", harga: 38000, stok: 18, tag: "Terlaris", gambar: "../assets/images/Frozen Foods & Ready Meals Online UAE _ Martoo_ae.jpg" },
    { id: 8, nama: "Cireng Crispy", kategori: "camilan", labelKategori: "Camilan", harga: 24000, stok: 12, tag: "Promo", gambar: "../assets/images/gambar frozen food.jpg" }
  ],

  // Format angka ke format mata uang Rupiah
  formatRupiah(angka) {
    return "Rp " + angka.toLocaleString("id-ID");
  },

  // Mendapatkan jumlah item di keranjang dari LocalStorage
  getCart() {
    const data = localStorage.getItem("chillbite_cart");
    return data ? JSON.parse(data) : [
      { id: 1, nama: "Nugget Ayam Premium", harga: 45000, jumlah: 2, kategori: "NUGGET & SOSIS", gambar: "../assets/images/gambar frozen food.jpg" },
      { id: 2, nama: "Kentang Goreng Premium", harga: 50000, jumlah: 1, kategori: "CAMILAN", gambar: "../assets/images/Supermarket Cold Storage in UAE _ Fresh Food Refrigeration.jpg" },
      { id: 3, nama: "Bakso Sapi", harga: 26500, jumlah: 3, kategori: "BAKSO", gambar: "../assets/images/frozen food.jpg" }
    ];
  },

  saveCart(cart) {
    localStorage.setItem("chillbite_cart", JSON.stringify(cart));
    this.updateCartCounter();
  },

  addToCart(id, jumlah = 1) {
    const cart = this.getCart();
    const produk = this.produk.find(p => p.id === id);
    if (!produk) return;

    const existing = cart.find(item => item.id === id);
    if (existing) {
      existing.jumlah += jumlah;
    } else {
      cart.push({
        id: produk.id,
        nama: produk.nama,
        harga: produk.harga,
        jumlah: jumlah,
        kategori: produk.labelKategori.toUpperCase(),
        gambar: produk.gambar
      });
    }

    this.saveCart(cart);
    this.tampilkanToast(`✅ "${produk.nama}" berhasil ditambahkan ke keranjang!`);
  },

  updateCartCounter() {
    const cart = this.getCart();
    const totalItem = cart.reduce((total, item) => total + item.jumlah, 0);
    const badges = document.querySelectorAll(".badge-counter, #cart-counter");
    badges.forEach(badge => {
      badge.textContent = totalItem;
      badge.style.display = totalItem > 0 ? "flex" : "none";
    });
  },

  tampilkanToast(pesan) {
    let toast = document.getElementById("toast-pesan");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "toast-pesan";
      toast.style.position = "fixed";
      toast.style.bottom = "24px";
      toast.style.right = "24px";
      toast.style.backgroundColor = "#1b3a5c";
      toast.style.color = "#ffffff";
      toast.style.padding = "12px 20px";
      toast.style.borderRadius = "8px";
      toast.style.boxShadow = "0 8px 24px rgba(0,0,0,0.18)";
      toast.style.zIndex = "9999";
      toast.style.fontSize = "14px";
      toast.style.fontWeight = "600";
      toast.style.transition = "all 0.3s ease";
      toast.style.transform = "translateY(100px)";
      toast.style.opacity = "0";
      document.body.appendChild(toast);
    }

    toast.textContent = pesan;
    toast.style.transform = "translateY(0)";
    toast.style.opacity = "1";

    setTimeout(() => {
      toast.style.transform = "translateY(100px)";
      toast.style.opacity = "0";
    }, 2800);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  CHILLBITE_DATA.updateCartCounter();
});
