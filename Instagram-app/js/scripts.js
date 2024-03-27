function toggleMore() {
    var moreMenu = document.getElementById("moreMenu");
    moreMenu.style.display = moreMenu.style.display === "block" ? "none" : "block";
}

const daftarMakanan1 = [
    { name: 'Bakso', price: 10000 },
    { name: 'Soto', price: 25000 },
    { name: 'Pecel', price: 15000 },
    { name: 'Nasi Goreng', price: 12000 }
];

let totalPembelian1 = 0;
for (let i = 0; i < daftarMakanan1.length; i++) {
    totalPembelian1 += daftarMakanan1[i].price;
}

const diskon1 = totalPembelian1 * 0.1;
const totalDiskon1 = totalPembelian1 - diskon1;

const postHTML3 = `
    <div class="post">
        <div class="post-header">
            <div class="profile-info">
                <img src="https://tse3.mm.bing.net/th?id=OIP.uKiis9EcpaVnAomfsOYAKAHaJW&pid=Api&P=0&h=180" alt="User Image">
                <h3>Knights Templar</h3>
            </div>
        </div>
        <div class="post-content">
            <div class="post-content" style="border: 2px solid #ccc; padding: 10px;">
                <p>Daftar Pembelian:</p>
                <ul>
                    <li>Bakso: Rp ${daftarMakanan1[0].price}</li>
                    <li>Soto: Rp ${daftarMakanan1[1].price}</li>
                    <li>Tahu Telor: Rp ${daftarMakanan1[2].price}</li>
                    <li>Nasi Goreng: Rp ${daftarMakanan1[3].price}</li>
                </ul>
                <p>Total Pembelian: Rp ${totalPembelian1}</p>
                <p>Total Setelah Diskon: Rp ${totalDiskon1}</p>
            </div>
            <div class="post-actions">
            <button class="like-btn"><i class="fas fa-heart"></i></button>
            <button class="comment-btn"><i class="fas fa-comment"></i></button>
            <button class="share-btn"><i class="fas fa-share"></i></button>
            </div>
            <div class="post-comments">
                <!-- Komentar-komentar di sini -->
            </div>
            <div class="add-comment">
                <input type="text" placeholder="Add a comment...">
                <button class="comment-btn"><i class="fas fa-comment"></i></button>
            </div>
        </div>
    </div>
`;

const daftarMakanan = [
    { nama: 'Bakso', harga: 10000 },
    { nama: 'Soto', harga: 25000 },
    { nama: 'Pecel', harga: 15000 }
];

const indexPecel = daftarMakanan.findIndex(item => item.nama === 'Pecel');
if (indexPecel !== -1) {
    daftarMakanan[indexPecel].nama = 'Tahu Telor';
}

const nasiGoreng = { nama: 'Nasi Goreng', harga: 12000 };
daftarMakanan.push(nasiGoreng);

let totalPembelian = 0;
daftarMakanan.forEach(item => {
    totalPembelian += item.harga;
});

const postHTML1 = `
    <div class="post">
        <div class="post-header">
            <div class="profile-info">
                <img src="https://tse2.mm.bing.net/th?id=OIP.T-6tg79Ux2Ks13ZG326WkwHaJJ&pid=Api&P=0&h=180" alt="User Image">
                <h3>Rimuru Tempest</h3>
            </div>
        </div>
        <div class="post-content">
            <div class="post-content" style="border: 2px solid #ccc; padding: 10px;">
                <p>Daftar Pembelian:</p>
                <ul>
                    <li>Bakso: Rp ${daftarMakanan[0].harga}</li>
                    <li>Soto: Rp ${daftarMakanan[1].harga}</li>
                    <li>Tahu Telor: Rp ${daftarMakanan[2].harga}</li>
                    <li>Nasi Goreng: Rp ${daftarMakanan[3].harga}</li>
                </ul>
                <p>Total Pembelian: Rp ${totalPembelian}</p>
            </div>
            <div class="post-actions">
            <button class="like-btn"><i class="fas fa-heart"></i></button>
            <button class="comment-btn"><i class="fas fa-comment"></i></button>
            <button class="share-btn"><i class="fas fa-share"></i></button>
            </div>
            <div class="post-comments">
                <!-- Komentar-komentar di sini -->
            </div>
            <div class="add-comment">
                <input type="text" placeholder="Add a comment...">
                <button class="comment-btn"><i class="fas fa-comment"></i></button>
            </div>
        </div>
    </div>
`;

const makanan1 = 10000;
const makanan2 = 25000;
const makanan3 = 15000;
const total = makanan1 + makanan2 + makanan3;
const diskon = total * 0.1;
const totalBayar = total - diskon;

const postHTML2 = `
    <div class="post">
        <div class="post-header">
            <div class="profile-info">
                <img src="https://tse2.mm.bing.net/th?id=OIP.T-6tg79Ux2Ks13ZG326WkwHaJJ&pid=Api&P=0&h=180" alt="User Image">
                <h3>Diablo</h3>
            </div>
        </div>
        <div class="post-content">
        <div class="post-content" style="border: 2px solid #ccc; padding: 10px;">
            <p>Daftar Pembelian:</p>
            <ul>
                <li>Bakso: Rp ${makanan1}</li>
                <li>Soto: Rp ${makanan2}</li>
                <li>Pecel: Rp ${makanan3}</li>
            </ul>
            <p>Total Pembayaran (Setelah Diskon 10%): Rp ${totalBayar}</p>
        </div>
        <div class="post-actions">
        <button class="like-btn"><i class="fas fa-heart"></i></button>
        <button class="comment-btn"><i class="fas fa-comment"></i></button>
        <button class="share-btn"><i class="fas fa-share"></i></button>
        </div>
        <div class="post-comments">
            <!-- Komentar-komentar di sini -->
        </div>
        <div class="add-comment">
            <input type="text" placeholder="Add a comment...">
            <button class="comment-btn"><i class="fas fa-comment"></i></button>
        </div>
    </div>
`;

const postsContainer1 = document.getElementById('postsContainer');
postsContainer1.innerHTML = postHTML1;

const postsContainer2 = document.getElementById('postsContainer2');
postsContainer2.innerHTML = postHTML2;

const postsContainer3 = document.getElementById('postsContainer3');
postsContainer3.innerHTML = postHTML3;
