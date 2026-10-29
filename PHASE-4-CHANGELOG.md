
# Changelog — Fase 4

- Mengganti root halaman tunggal menjadi konfigurasi `Routes` terpusat.
- Menambahkan `MainLayout` dengan header/footer bersama serta tema yang disimpan pada layout.
- Mengubah navigasi header, footer, breadcrumb, dan `Button` untuk memakai client-side routing pada tautan internal.
- Membuat route landing APP, SND, ASM; katalog; detail produk; portofolio; detail proyek; tentang; kontak; serta 404.
- Menambahkan data deskriptif lini usaha ke `src/data/businesses.js`.
- Menambahkan `PageIntro` dan template CSS internal halaman.
- Menambahkan scroll-to-hash/top pada perubahan route.
- Mempertahankan batasan data: belum ada produk, harga, portofolio, nomor kontak lengkap, atau alamat detail yang dikarang.
- Menambahkan dokumen URL dan skenario tes manual.

## Validasi yang harus dilakukan di lingkungan pengembang

```bash
npm install
npm run dev
npm run lint
npm run build
```

Build belum dianggap lulus sebelum perintah tersebut berjalan sukses pada repository hasil overlay.
