// Ambil elemen HTML
const usernameSpan = document.getElementById('username');
const logoutBtn = document.getElementById('logout-btn');
const logoutModal = document.getElementById('logout-modal');
const confirmLogoutBtn = document.getElementById('confirm-logout');
const cancelLogoutBtn = document.getElementById('cancel-logout');

// Ambil nama pengguna dari localStorage
const currentUser = localStorage.getItem('currentUser');

// Jika tidak ada pengguna yang login, arahkan kembali ke halaman login
if (!currentUser) {
    alert('Anda belum login!');
    window.location.href = 'index.html'; // Ganti dengan halaman login Anda
} else {
    // Tampilkan nama pengguna di dashboard
    usernameSpan.textContent = currentUser;
}

// Fungsi untuk menampilkan modal logout
logoutBtn.addEventListener('click', () => {
    // Tampilkan modal alert
    logoutModal.classList.add('show');
});

// Fungsi untuk logout saat konfirmasi OK
confirmLogoutBtn.addEventListener('click', () => {
    localStorage.removeItem('currentUser'); // Hapus data pengguna saat ini

    // Tampilkan toast notification sebagai feedback logout
    const toast = document.createElement('div');
    toast.classList.add('toast', 'show');
    toast.textContent = 'Anda telah logout!';
    document.body.appendChild(toast);

    // Setelah beberapa detik, sembunyikan toast notification
    setTimeout(() => {
        toast.classList.add('hide');
        // Hapus toast dari DOM setelah animasi selesai
        setTimeout(() => toast.remove(), 500);
    }, 2000);

    // Arahkan kembali ke halaman login
    window.location.href = 'index.html';
});

// Fungsi untuk membatalkan logout
cancelLogoutBtn.addEventListener('click', () => {
    // Sembunyikan modal alert
    logoutModal.classList.remove('show');
});
