# Fase 6 — Interaksi Frontend

## Cakupan

Fase ini menambahkan interaksi sisi browser tanpa backend atau dependensi baru:

- Pencarian katalog berdasarkan nama, kategori, deskripsi, kata kunci, dan referensi mitra.
- Filter kategori serta pengurutan nama/kategori (bukan harga, karena harga aktual belum tersedia).
- Entri data lokal di `src/data/catalogItems.js` untuk menguji alur UI. Entri tersebut adalah contoh kategori/layanan, bukan produk nyata.
- Halaman detail kategori/layanan yang mengenali slug, membuka galeri modal, menampilkan placeholder foto/video, dan menyarankan entri terkait.
- Formulir inquiry dengan validasi sisi klien, pembuatan draf pesan, salin teks, dan pembukaan draf email.
- Preferensi tema terang/gelap yang disimpan di `localStorage` dengan fallback jika storage diblokir.
- Animasi ringan dengan dukungan `prefers-reduced-motion`.

## Batasan yang disengaja

- Tidak ada API, database, autentikasi, checkout, cart, atau pengiriman form ke server.
- Nomor WhatsApp pada brief belum lengkap; formulir tidak membuat URL WhatsApp yang tidak valid. Draf bisa disalin atau dibuka sebagai email.
- Tidak ada harga, model, stok, atau spesifikasi produk rekaan.
- Media di detail adalah placeholder lokal untuk menguji modal, bukan foto/video asli atau portofolio nyata.

## File utama

- `src/data/catalogItems.js`
- `src/pages/catalog/CatalogPage.jsx`
- `src/pages/catalog/CatalogPage.css`
- `src/pages/catalog/ProductDetailPage.jsx`
- `src/components/shared/InquiryForm.jsx`
- `src/components/shared/InquiryForm.css`
- `src/pages/about/ContactPage.jsx`
- `src/layouts/MainLayout.jsx`
- `src/styles/phase-6-interactions.css`

## Uji manual

1. Buka `/app/katalog`, cari `kaos`, ubah filter kategori, ganti urutan A–Z/Z–A, lalu reset filter.
2. Uji pencarian dan filter di `/snd/katalog` serta `/asm/katalog`.
3. Buka `/app/produk/t-shirt-polo`, tekan setiap item galeri, lalu tutup modal melalui tombol X atau tombol Escape. Coba `/snd/produk/speaker-driver` dan `/asm/layanan/konsultasi-kebutuhan`.
4. Coba URL detail yang tidak dikenal, misalnya `/app/produk/model-yang-tidak-ada`.
5. Ubah tema terang/gelap, refresh halaman, lalu pastikan pilihan tersimpan.
6. Buka `/kontak`; kirim formulir kosong untuk melihat validasi. Isi data contoh, siapkan draf, lalu coba salin teks dan membuka draf email. Pesan tidak terkirim otomatis.
7. Uji layout pada layar lebar dan lebar ponsel. Pastikan animasi tidak mengganggu ketika sistem memakai preferensi reduce motion.
8. Jalankan `npm run lint` dan `npm run build` setelah overlay diterapkan.
