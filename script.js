document.addEventListener('DOMContentLoaded', function () {
    // mendapatkan referensi ke elemen-elemen HTML berdasarkan ID mereka
    const teksArea = document.getElementById('teksUntukDisalin');
    const tombolSalin = document.getElementById('tombolSalin');
    const tombolHapus = document.getElementById('tombolHapus');
    const pesanElem = document.getElementById('pesan');

    // event listener untuk tombol Salin ketika diklik
    tombolSalin.addEventListener('click', function () {
        // memilih seluruh teks di dalam textarea
        teksArea.select();
        // untuk perangkat mobile, set rentang seleksi agar benar-benar semua teks terpilih
        teksArea.setSelectionRange(0, teksArea.value.length);

        try {
            // mengeksekusi perintah salin ke clipboard
            document.execCommand('copy');
            // menampilkan pesan sukses
            pesanElem.textContent = 'Teks berhasil disalin!';
            // menghapus pesan setelah 3 detik
            setTimeout(() => {
                pesanElem.textContent = '';
            }, 3000);
        } catch (err) {
            // menampilkan pesan gagal jika terjadi kesalahan saat menyalin
            pesanElem.textContent = 'Gagal menyalin teks.';
            // mencatat error ke konsol untuk debugging
            console.error('Gagal menyalin: ', err);
        }
    });

    // event listener untuk tombol Hapus ketika diklik
    tombolHapus.addEventListener('click', function () {
        // mengosongkan nilai (teks) di dalam textarea
        teksArea.value = '';
        // menampilkan pesan bahwa teks telah dihapus
        pesanElem.textContent = 'Teks telah dihapus.';
        // menghapus pesan setelah 3 detik
        setTimeout(() => {
            pesanElem.textContent = '';
        }, 3000);
    });
});
