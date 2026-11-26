/* ==========================================================================
   CHILLBITE - Keranjang Interactive Logic (js/keranjang.js)
   ========================================================================== */

const keranjangItems = {
  1: { nama: "Nugget Ayam Premium", harga: 45000, qty: 2 },
  2: { nama: "Kentang Goreng Premium", harga: 50000, qty: 1 },
  3: { nama: "Bakso Sapi", harga: 26500, qty: 3 }
};

function hitungTotalKeranjang() {
  let total = 0;
  let count = 0;
  for (const id in keranjangItems) {
    total += keranjangItems[id].harga * keranjangItems[id].qty;
    count += keranjangItems[id].qty;
  }
  const totalEl = document.getElementById("total-belanja");
  if (totalEl) {
    totalEl.textContent = CHILLBITE_DATA.formatRupiah(total);
  }
}

function ubahJumlahKeranjang(id, delta) {
  if (!keranjangItems[id]) return;
  if (keranjangItems[id].qty + delta >= 1) {
    keranjangItems[id].qty += delta;
    const qtyEl = document.getElementById(`qty-${id}`);
    const subtotalEl = document.getElementById(`subtotal-${id}`);
    if (qtyEl) qtyEl.textContent = keranjangItems[id].qty;
    if (subtotalEl) subtotalEl.textContent = CHILLBITE_DATA.formatRupiah(keranjangItems[id].harga * keranjangItems[id].qty);
    hitungTotalKeranjang();
  }
}

function hapusBarisKeranjang(id) {
  const row = document.querySelector(`tr[data-id="${id}"]`);
  if (row) {
    row.remove();
    delete keranjangItems[id];
    hitungTotalKeranjang();
    CHILLBITE_DATA.tampilkanToast("Item telah dihapus dari keranjang!");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  hitungTotalKeranjang();
});
