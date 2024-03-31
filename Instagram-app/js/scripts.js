function toggleMore() {
    var moreMenu = document.getElementById("moreMenu");
    moreMenu.style.display = moreMenu.style.display === "block" ? "none" : "block";
}

// pos 1
const dmnList1 = document.querySelector('.dmn-list1');
const daftarMakanan1 = [
    { name: 'Bakso', price: 10000 },
    { name: 'Soto', price: 25000 },
    { name: 'Pecel', price: 15000 },
    { name: 'Nasi Goreng', price: 12000 }
];

let totalPembelian1 = 0;
let dmn1 = "";
for (let i = 0; i < daftarMakanan1.length; i++) {
    dmn1 += `<li>${daftarMakanan1[i].name} : ${daftarMakanan1[i].price}</li>`;
    totalPembelian1 += daftarMakanan1[i].price;
}

dmnList1.innerHTML = dmn1;
const totalDiskon1 = totalPembelian1 * 0.1;
const totalBayar1 = totalPembelian1 - totalDiskon1;
document.getElementById('totalPembelian1').textContent = totalPembelian1;
document.getElementById('totalDiskon1').textContent = totalDiskon1;

// pos 2
const dmnList2 = document.querySelector('.dmn-list2'); 
const daftarMakanan2 = [
    { nama: 'Bakso', harga: 10000 },
    { nama: 'Soto', harga: 25000 },
    { nama: 'Pecel', harga: 15000 }
];

const indexPecel = daftarMakanan2.findIndex(item => item.nama === 'Pecel');
if (indexPecel !== -1) {
    daftarMakanan2[indexPecel].nama = 'Tahu Telor';
}

const nasiGoreng = { nama: 'Nasi Goreng', harga: 12000 };
daftarMakanan2.push(nasiGoreng);

let dmn2 = '';
let totalPembelian2 = 0;
daftarMakanan2.forEach(item => {
    dmn2 += `<li>${item.nama} : Rp ${item.harga}</li>`;
    totalPembelian2 += item.harga;
});

dmnList2.innerHTML = dmn2;
const totalDiskon2 = totalPembelian2 * 0.1;
const totalBayar2 = totalPembelian2 - totalDiskon2;
document.getElementById('totalPembelian2').textContent = totalPembelian2;
document.getElementById('totalDiskon2').textContent = totalDiskon2;

// pos ke 3
const dmnList3 = document.querySelector('.dmn-list3'); 
const daftarMakanan3 = [
    { Nama: 'Bakso', Harga: 10000 },
    { Nama: 'Soto', Harga: 25000 },
    { Nama: 'Pecel', Harga: 15000 },
];

let totalPembelian3 = 0;
let dmn3 = "";
for (let i = 0; i < daftarMakanan3.length; i++) {
    dmn3 += `<li>${daftarMakanan3[i].Nama} : ${daftarMakanan3[i].Harga}</li>`;
    totalPembelian3 += daftarMakanan3[i].Harga;
}

dmnList3.innerHTML = dmn3;
const totalDiskon3 = totalPembelian3 * 0.1;
const totalBayar3 = totalPembelian3 - totalDiskon3;
document.getElementById('totalPembelian3').textContent = totalPembelian3;
document.getElementById('totalDiskon3').textContent = totalDiskon3;

// pos ke 4
const dmnList4 = document.querySelector('.dmn-list4');
const daftarMakanan4 = [
    { Nama: 'nasi pecel', Harga: 10000, Variant: ['pedas banget', 'pedas', 'original'] },
    { Nama: 'nasi jagung', Harga: 25000, Variant: ['pedas banget', 'pedas', 'original'] },
    { Nama: 'nasi ayam', Harga: 15000, Variant: ['pedas banget', 'pedas', 'original'] },
    { Nama: 'nasi krawu', Harga: 12000, Variant: ['pedas banget', 'pedas', 'original'] },
    { Nama: 'nasi rendang', Harga: 16000, Variant: ['pedas banget', 'pedas', 'original'] },
    { Nama: 'nasi lele', Harga: 11000, Variant: ['pedas banget', 'pedas', 'original'] },
];

const menuPecel = daftarMakanan4.find(menu => menu.Nama === 'nasi pecel');
if (menuPecel) {
    menuPecel.Harga = 5000;
}

const level = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

const isMember = true;

const listPemesanan = [
    { Nama: 'nasi pecel', Variant: 'Pedes Banget', Jumlah: 3 },
    { Nama: 'nasi jagung', Variant: 'Original', Jumlah: 2 },
    { Nama: 'nasi lele', Variant: 'Pedas', Jumlah: 1 },
];

let totalPemesanan = 0;
let dmn4 = "<h3>Daftar Makanan:</h3>";
daftarMakanan4.forEach(menu => {
    const variantPedasBanget = menu.Variant.indexOf('pedas banget');
    if (variantPedasBanget !== -1) {
        dmn4 += `<li>${menu.Nama} : Rp ${menu.Harga} Variant: ${menu.Variant.join(', ')} (${level.join(', ')})</li>`;
    } else {
        dmn4 += `<li>${menu.Nama} : Rp ${menu.Harga} Variant: ${menu.Variant.join(', ')}</li>`;
    }
});

dmn4 += "<h3>List Pemesanan:</h3>";
listPemesanan.forEach(item => {
    const menu = daftarMakanan4.find(m => m.Nama === item.Nama);
    if (menu) {
        const subtotal = menu.Harga * item.Jumlah;
        totalPemesanan += subtotal;
        dmn4 += `<li>${menu.Nama} ${item.Variant} (${item.Jumlah} porsi) : Rp ${subtotal}</li>`;
    }
});

let totalDiskon = 0;
if (isMember) {
    totalDiskon = totalPemesanan * 0.1;
}
const pajak = totalPemesanan * 0.11;
const totalBayar = totalPemesanan - totalDiskon + pajak;

dmnList4.innerHTML = dmn4;

console.log('List Pemesanan:');
listPemesanan.forEach(item => {
    console.log(`${item.Nama} ${item.Variant} (${item.Jumlah} porsi)`);
});

console.log('Total Pembayaran: Rp', totalPemesanan);
console.log('Total Setelah Diskon: Rp', totalPemesanan - totalDiskon);
console.log('Total Pembayaran Setelah Pajak: Rp', totalBayar);

document.getElementById('totalPemesanan').textContent = totalPemesanan;
document.getElementById('totalDiskon').textContent = totalDiskon;
document.getElementById('totalPajak').textContent = pajak;
document.getElementById('totalBayar').textContent = totalBayar;
