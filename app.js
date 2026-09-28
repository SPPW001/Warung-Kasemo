const menuData = [
  { category: 'Paket Keluarga', items: [
    { name: 'Paket Argopuro (4 orang)', price: 165000, note: '4 nasi, gurame selimut kangkung, nila tempe asam manis, 2 ayam crispy, cah tauge, 4 lemon tea' },
    { name: 'Paket Artomoro (4 orang)', price: 165000, note: '4 nasi, gurame bakar, nila goreng, ayam crispy, bebek goreng, cah kangkung, 4 es kopyor' },
    { name: 'Paket Antaboga (4 orang)', price: 165000, note: '4 nasi, gurame asam manis, puyuh goreng, 4 tempe goreng, 2 ayam crispy, cah kangkung, 4 lemon tea' },
    { name: 'Paket Kembang Desa (3 orang)', price: 120000, note: '3 nasi, gurame asam manis, 2 nila bakar, cah kangkung, es teh, es jeruk, es kopyor' },
    { name: 'Paket Arjuna (3 orang)', price: 120000, note: '3 nasi, bebek goreng, 4 tempe goreng, 2 nila bakar, cah pokcoy, 2 es teh, es kopyor' },
    { name: 'Paket Bima (3 orang)', price: 120000, note: '3 nasi, gurame bakar, 4 tempe goreng, 2 nila goreng, terong goreng, 3 es jeruk' },
  ]},
  { category: 'Special Penyetan', items: [
    { name: 'Ayam Goreng Penyet', price: 23000 },
    { name: 'Ayam Kampung Penyet', price: 31000 },
    { name: 'Bebek Penyet', price: 32000 },
    { name: 'Tahu Tempe Penyet', price: 15000 },
    { name: 'Terong Penyet', price: 12000 },
  ]},
  { category: 'Special Gurame', items: [
    { name: 'Gurame Asam Manis', price: 64000 }, { name: 'Gurame Bakar', price: 61000 },
    { name: 'Gurame Sambal Pecak', price: 55000 }, { name: 'Gurame Kuah Pedas', price: 59000 },
    { name: 'Gurame Pontianak', price: 61000 }, { name: 'Gurame Goreng', price: 49000 },
    { name: 'Gurame Selimut Kangkung', price: 58000 }, { name: 'Gurame Terbang', price: 53000 },
  ]},
  { category: 'Nila & Lele', items: [
    { name: 'Nila Bakar Special', price: 26000 }, { name: 'Nila Tempe Asam Manis', price: 28000 },
    { name: 'Nila Goreng', price: 24000 }, { name: 'Lele Goreng Double', price: 23000 },
    { name: 'Lele Bakar', price: 25000 }, { name: 'Lele Bakar Madu', price: 28000 },
    { name: 'Lele Sambal Matah', price: 27000 },
  ]},
  { category: 'Burung Puyuh & Seafood', items: [
    { name: 'Burung Puyuh Goreng', price: 23000 }, { name: 'Burung Puyuh Bakar', price: 25000 },
    { name: 'Burung Puyuh Bakar Madu', price: 28000 }, { name: 'Cumi Hitam', price: 28000 },
    { name: 'Cumi Crispy', price: 25000 }, { name: 'Cumi Asam Manis', price: 40000 },
    { name: 'Udang Asam Manis', price: 40000 }, { name: 'Udang Crispy', price: 25000 },
    { name: 'Udang Matah', price: 29000 },
  ]},
  { category: 'Ayam & Nasi Goreng', items: [
    { name: 'Ayam Satu Ekor Bakar Madu', price: 102000 }, { name: 'Ayam Goreng', price: 18000 },
    { name: 'Ayam Crispy', price: 20000 }, { name: 'Ayam Bakar', price: 23000 },
    { name: 'Ayam Fillet', price: 22000 }, { name: 'Ayam Crispy Bakar', price: 22000 },
    { name: 'Ayam Bakar Madu', price: 25000 }, { name: 'Ayam Kampung Goreng', price: 28000 },
    { name: 'Ayam Kampung Bakar', price: 30000 }, { name: 'Ayam Kampung Bakar Madu', price: 35000 },
    { name: 'Ayam 1/2 Ekor', price: 55000 }, { name: 'Ayam 1 Ekor', price: 97000 },
    { name: 'Nasi Goreng Ikan Asap', price: 26000 }, { name: 'Nasi Goreng Seafood', price: 28000 },
    { name: 'Nasi Goreng Original', price: 23000 }, { name: 'Nasi Goreng Special', price: 25000 },
    { name: 'Nasi Goreng Jawa', price: 25000 },
  ]},
  { category: 'Bebek, Soto & Mie', items: [
    { name: 'Bebek Bakar Madu', price: 37000 }, { name: 'Bebek Goreng', price: 29000 },
    { name: 'Bebek Bakar', price: 33000 }, { name: 'Soto Djogja', price: 17000 },
    { name: 'Mie Double', price: 16000 }, { name: 'Mie Gulai Aceh', price: 25000 },
  ]},
  { category: 'Tumis & Pendamping', items: [
    { name: 'Tumis Kangkung', price: 15000 }, { name: 'Tumis Pokcoy', price: 15000 },
    { name: 'Tumis Tauge', price: 15000 }, { name: 'Sambal Terasi', price: 3000 },
    { name: 'Sambal Matah', price: 3000 }, { name: 'Sambal Kecap', price: 3000 },
    { name: 'Sambal Ijo', price: 3000 }, { name: 'Sambal Bawang', price: 3000 },
    { name: 'Tahu Goreng', price: 5000 }, { name: 'Tempe Goreng', price: 5000 },
    { name: 'Telur', price: 5000 }, { name: 'Nasi Putih', price: 5000 },
  ]},
  { category: 'Camilan', items: [
    { name: 'Tempe Mendoan', price: 16000 }, { name: 'Onion Rings', price: 15000 },
    { name: 'Singkong Keju', price: 16000 }, { name: 'Potato Wedges', price: 13000 },
    { name: 'French Fries', price: 16000 }, { name: 'Jamur Crispy', price: 15000 },
    { name: 'Donat', price: 15000 }, { name: 'Sosis', price: 15000 },
    { name: 'Cireng Bumbu Rujak', price: 15000 }, { name: 'Pisang Goreng', price: 15000 },
    { name: 'Tahu Tuna', price: 15000 }, { name: 'Roti Maryam', price: 15000 },
    { name: 'Banana Split', price: 18000 },
  ]},
  { category: 'Frappe & Ice Cream', items: [
    { name: 'Frappe Oreo', price: 19000 }, { name: 'Ice Cream', price: 19000 },
    { name: 'Frappe Mangga', price: 19000 }, { name: 'Frappe Strawberry', price: 19000 },
    { name: 'Frappe Choco Cheese', price: 19000 }, { name: 'Frappe Choco', price: 19000 },
    { name: 'Frappe Melon', price: 19000 }, { name: 'Frappe Semangka', price: 19000 },
    { name: 'Frappe Matcha', price: 19000 },
  ]},
  { category: 'Base Milk', items: [
    { name: 'Yakult Matcha', price: 15000 }, { name: 'Thai Tea', price: 15000 },
    { name: 'Rum Regal', price: 15000 }, { name: 'Matcha', price: 15000 },
    { name: 'Red Velvet', price: 15000 }, { name: 'Blueberry', price: 15000 },
    { name: 'Taro', price: 15000 }, { name: 'Choco Ovaltine', price: 15000 },
    { name: 'Choco Cheese', price: 15000 }, { name: 'Oreo', price: 15000 },
    { name: 'Milo', price: 15000 }, { name: 'Tiramisu', price: 15000 },
    { name: 'Leci Yakult', price: 15000 }, { name: 'Susu Strawberry', price: 15000 },
    { name: 'Susu Leci', price: 15000 }, { name: 'Teh Tarik', price: 15000 },
  ]},
  { category: 'Coffee', items: [
    { name: 'Ice Kopi Susu Kasemo', price: 15000 }, { name: 'Brown Sugar', price: 15000 },
    { name: 'Coffee Latte (Caramel/Hazelnut/Vanila)', price: 15000 }, { name: 'Long Black', price: 15000 },
    { name: 'Americano', price: 15000 }, { name: 'Cappucino', price: 15000 },
    { name: 'Mochacino', price: 15000 }, { name: 'V60', price: 15000 },
    { name: 'Kopi Rempah', price: 15000 }, { name: 'Kopi Tubruk', price: 15000 },
    { name: 'Kopi Jahe', price: 15000 }, { name: 'Kopi Susu', price: 15000 },
    { name: 'Vietnam Drip', price: 15000 }, { name: 'Matcha Presso', price: 15000 },
    { name: 'Berry Presso', price: 15000 }, { name: 'Expresso', price: 15000 },
    { name: 'Lemon Presso', price: 15000 }, { name: 'Avo Coffee', price: 20000 },
    { name: 'Affogato', price: 22000 },
  ]},
  { category: 'Nusantara & Jus Buah', items: [
    { name: 'Es Buah Special', price: 15000 }, { name: 'Ice Kopyor', price: 14000 },
    { name: 'Ice Timun', price: 12000 }, { name: 'Cincau', price: 10000 },
    { name: 'Mega Mendung', price: 15000 }, { name: 'Soda Gembira', price: 15000 },
    { name: 'Ice Teh', price: 6000 }, { name: 'Ice Jeruk', price: 9000 },
    { name: 'Ice Jeruk Nipis', price: 8000 }, { name: 'Jus Mangga', price: 15000 },
    { name: 'Jus Semangka', price: 15000 }, { name: 'Jus Melon', price: 15000 },
    { name: 'Jus Alpukat', price: 15000 }, { name: 'Jus Tomat', price: 15000 },
    { name: 'Jus Jeruk', price: 15000 }, { name: 'Jus Lemon', price: 15000 },
    { name: 'Jus Buah Naga', price: 15000 },
  ]},
  { category: 'Fresh Drink', items: [
    { name: 'Lemon Tea', price: 10000 }, { name: 'Lemon Squash', price: 13000 },
    { name: 'Lychee Tea', price: 13000 }, { name: 'Strawberry Tea', price: 13000 },
    { name: 'Rainbow Mocktail', price: 15000 }, { name: 'Jeruk Squash', price: 15000 },
    { name: 'Jahe Squash', price: 15000 }, { name: 'Strawberry Squash', price: 15000 },
    { name: 'Blue Sky', price: 15000 }, { name: 'Blue Caracao', price: 15000 },
  ]},
  { category: 'Wedang & Minuman Hangat', items: [
    { name: 'Jamule (Jahe, Madu, Lemon, Geprekan Sereh)', price: 15000 },
    { name: 'Jahe Susu', price: 10000 }, { name: 'Teh Panas', price: 6000 },
    { name: 'Jeruk Panas', price: 9000 }, { name: 'Jeruk Nipis', price: 8000 },
    { name: 'Susu Putih Hangat', price: 15000 }, { name: 'Coklat Hangat', price: 15000 },
    { name: 'Jahe Madu', price: 10000 }, { name: 'Jahe Panas', price: 10000 },
    { name: 'Lemon Tea Hangat', price: 10000 }, { name: 'Wedang Uwuh', price: 15000 },
    { name: 'Rosella', price: 15000 }, { name: 'Teh Telang', price: 15000 },
    { name: 'Eksotis', price: 15000 },
  ]},
  { category: 'Special Signature', items: [
    { name: 'Matcha Aloevera', price: 15000 }, { name: 'Aloevera Lime Lychee', price: 15000 },
    { name: 'Gatot Kaca', price: 15000 }, { name: 'Degan Jelly', price: 20000 },
  ]},
];

const cart = new Map();
const rupiah = value => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(value);
const menuCategories = document.getElementById('menuCategories');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const menuSearch = document.getElementById('menuSearch');

function itemKey(category, name) { return `${category}__${name}`; }

function renderMenu(filter = '') {
  const q = filter.trim().toLowerCase();
  menuCategories.innerHTML = '';
  menuData.forEach((group, groupIndex) => {
    const items = group.items.filter(i => `${i.name} ${i.note || ''}`.toLowerCase().includes(q));
    if (!items.length) return;
    const wrapper = document.createElement('div');
    wrapper.className = `menu-category ${q || groupIndex === 0 ? 'open' : ''}`;
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'category-toggle';
    button.innerHTML = `<span>${group.category}</span><small>${items.length} item • buka/tutup</small>`;
    button.addEventListener('click', () => wrapper.classList.toggle('open'));
    const list = document.createElement('div');
    list.className = 'category-items';
    items.forEach(item => {
      const key = itemKey(group.category, item.name);
      const row = document.createElement('div');
      row.className = 'menu-item';
      row.dataset.search = item.name.toLowerCase();
      row.innerHTML = `
        <div class="menu-item-name"><strong>${item.name}</strong>${item.note ? `<small>${item.note}</small>` : ''}</div>
        <div class="menu-price">${rupiah(item.price)}</div>
        <div class="qty">
          <button type="button" aria-label="Kurangi ${item.name}" data-action="minus">−</button>
          <span>${cart.get(key)?.qty || 0}</span>
          <button type="button" aria-label="Tambah ${item.name}" data-action="plus">+</button>
        </div>`;
      row.querySelector('[data-action="plus"]').addEventListener('click', () => changeQty(key, group.category, item, 1));
      row.querySelector('[data-action="minus"]').addEventListener('click', () => changeQty(key, group.category, item, -1));
      list.appendChild(row);
    });
    wrapper.append(button, list);
    menuCategories.appendChild(wrapper);
  });
}

function changeQty(key, category, item, delta) {
  const current = cart.get(key) || { category, ...item, qty: 0 };
  current.qty = Math.max(0, current.qty + delta);
  if (current.qty === 0) cart.delete(key); else cart.set(key, current);
  renderMenu(menuSearch.value);
  updateCartSummary();
}

function updateCartSummary() {
  let qty = 0, total = 0;
  cart.forEach(item => { qty += item.qty; total += item.qty * item.price; });
  cartItems.textContent = qty;
  cartTotal.textContent = rupiah(total);
}

menuSearch.addEventListener('input', e => renderMenu(e.target.value));
renderMenu();
updateCartSummary();

// Mobile navigation
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
navToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', open);
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

// Booking hours
const bookingDate = document.getElementById('bookingDate');
const bookingTime = document.getElementById('bookingTime');
const now = new Date();
bookingDate.min = now.toISOString().split('T')[0];
for (let hour = 8; hour <= 21; hour++) {
  ['00','30'].forEach(min => {
    if (hour === 21 && min === '30') return;
    const value = `${String(hour).padStart(2,'0')}:${min}`;
    const opt = document.createElement('option');
    opt.value = value; opt.textContent = value;
    bookingTime.appendChild(opt);
  });
}

function selectedArea() { return document.querySelector('input[name="area"]:checked')?.value || ''; }
function goStep(step) {
  document.querySelectorAll('.booking-step').forEach(el => el.classList.toggle('active', Number(el.dataset.step) === step));
  document.querySelectorAll('.step-tab').forEach(el => el.classList.toggle('active', Number(el.dataset.stepTab) === step));
  if (step === 3) renderFinalSummary();
  document.getElementById('reservasi').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function validateStep1() {
  const guests = Number(document.getElementById('guestCount').value);
  if (!bookingDate.value || !bookingTime.value || !guests || !selectedArea()) {
    alert('Lengkapi tanggal, jam, jumlah tamu, dan area terlebih dahulu.');
    return false;
  }
  return true;
}

document.querySelectorAll('.next-step').forEach(btn => btn.addEventListener('click', () => {
  const target = Number(btn.dataset.next);
  if (target === 2 && !validateStep1()) return;
  goStep(target);
}));
document.querySelectorAll('.prev-step').forEach(btn => btn.addEventListener('click', () => goStep(Number(btn.dataset.prev))));
document.querySelectorAll('.step-tab').forEach(btn => btn.addEventListener('click', () => {
  const target = Number(btn.dataset.stepTab);
  if (target > 1 && !validateStep1()) return;
  goStep(target);
}));

const availabilityStatus = document.getElementById('availabilityStatus');
document.getElementById('checkAvailability').addEventListener('click', () => {
  if (!validateStep1()) return;
  availabilityStatus.classList.add('success');
  availabilityStatus.innerHTML = `Status demo: <strong>${selectedArea()} tersedia</strong> untuk alur simulasi. Ketersediaan sebenarnya tetap perlu dikonfirmasi ke admin Kasemo.`;
});

function getCartArray() { return [...cart.values()]; }
function renderFinalSummary() {
  const guests = document.getElementById('guestCount').value;
  const items = getCartArray();
  const total = items.reduce((sum, item) => sum + item.qty * item.price, 0);
  document.getElementById('finalSummary').innerHTML = `
    <h3>Ringkasan</h3>
    <div class="summary-line"><span>Tanggal</span><strong>${bookingDate.value || '-'}</strong></div>
    <div class="summary-line"><span>Jam</span><strong>${bookingTime.value || '-'}</strong></div>
    <div class="summary-line"><span>Tamu</span><strong>${guests || '-'} orang</strong></div>
    <div class="summary-line"><span>Area</span><strong>${selectedArea() || '-'}</strong></div>
    <div class="summary-menu">
      <strong>Menu dipilih</strong>
      ${items.length ? `<ul>${items.map(i => `<li>${i.qty}x ${i.name} - ${rupiah(i.qty * i.price)}</li>`).join('')}</ul>` : '<p>Belum memilih menu.</p>'}
    </div>
    <div class="summary-total">Estimasi menu: ${rupiah(total)}</div>`;
}

const form = document.getElementById('reservationForm');
form.addEventListener('submit', e => {
  e.preventDefault();
  if (!validateStep1()) { goStep(1); return; }
  const name = document.getElementById('customerName').value.trim();
  const phone = document.getElementById('customerPhone').value.trim();
  if (!name || !phone) { alert('Nama dan nomor WhatsApp pemesan masih kosong.'); return; }

  const items = getCartArray();
  const total = items.reduce((sum, item) => sum + item.qty * item.price, 0);
  const menuText = items.length
    ? items.map(i => `- ${i.qty}x ${i.name} (${rupiah(i.qty * i.price)})`).join('\n')
    : '- Belum memilih menu';
  const notes = document.getElementById('customerNotes').value.trim() || '-';
  const message = `Halo Warung Kasemo, saya ingin mengajukan reservasi.\n\nNama: ${name}\nNo. WA: ${phone}\nTanggal: ${bookingDate.value}\nJam: ${bookingTime.value}\nJumlah tamu: ${document.getElementById('guestCount').value} orang\nArea: ${selectedArea()}\n\nPilihan menu:\n${menuText}\nEstimasi menu: ${rupiah(total)}\n\nCatatan: ${notes}\n\nMohon konfirmasi ketersediaan tempat dan pesanan. Terima kasih.`;
  window.open(`https://wa.me/6282142705441?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
});
