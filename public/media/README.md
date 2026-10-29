# Panduan media ShowMarket (Fase 7)

Saat foto/ilustrasi yang memiliki izin sudah tersedia:

- Simpan master di luar bundle aplikasi atau dalam folder sumber yang terdokumentasi.
- Untuk foto web, utamakan AVIF/WebP dengan fallback JPEG/PNG jika diperlukan.
- Ekspor beberapa ukuran sesuai lebar tampil (misalnya 480, 960, 1440 px), bukan satu file sangat besar untuk semua perangkat.
- Isi `width` dan `height` pada elemen gambar untuk mengurangi layout shift.
- Gunakan `loading="lazy"` dan `decoding="async"` untuk media di luar area awal; gunakan `priority` hanya untuk gambar utama yang benar-benar tampil di atas lipatan.
- Tulis `alt` yang menjelaskan informasi gambar. Gunakan `alt=""` untuk gambar dekoratif.
- Jangan mengunduh atau memublikasikan foto mitra/pelanggan sampai hak penggunaan dan izin publikasi terkonfirmasi.
- Jangan gunakan nama file sebagai satu-satunya teks alternatif. Pastikan fallback/placeholder masih memiliki konteks saat gambar gagal dimuat.

Komponen `src/components/shared/OptimizedImage.jsx` menyediakan `picture`, AVIF/WebP, dimensi intrinsik, `sizes`, lazy loading, dan prioritas untuk digunakan saat aset terverifikasi tersedia.
