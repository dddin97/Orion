# Fase 7 — Kualitas dan SEO

## Tujuan

Menyiapkan dasar metadata halaman, aksesibilitas keyboard, media responsif, halaman privasi/syarat, dan sitemap yang hanya dibuat setelah domain produksi ditetapkan.

## Perubahan utama

- `PageMetadata.jsx` memperbarui title, description, robots, Open Graph, dan Twitter meta berdasarkan route React Router.
- `VITE_SITE_URL` menjadi opsi konfigurasi domain. Canonical URL dan `og:url` tidak dibuat saat nilai domain belum ditentukan, untuk menghindari canonical palsu.
- Katalog, detail kategori/layanan, serta halaman/slot portofolio yang masih berisi placeholder diberi `noindex,follow` sampai konten aktual dipublikasikan.
- `OptimizedImage.jsx` menyediakan pilihan AVIF/WebP/fallback, ukuran intrinsik, `sizes`, lazy loading, async decoding, dan prioritas opsional untuk gambar hero.
- Skip link, focus-visible, target anchor dengan scroll margin, dukungan reduced-motion, forced-colors, dan tautan legal di footer.
- Pilihan tema disimpan menggunakan `localStorage`; aplikasi tetap berfungsi bila storage dinonaktifkan.
- Halaman `/kebijakan-privasi` dan `/syarat-penggunaan` ditambahkan.
- `public/robots.txt` mengizinkan crawl, namun tidak mencantumkan sitemap dengan domain rekaan.
- Skrip sitemap memuat route publik yang relatif siap diindeks; rute detail berbentuk demo tidak dimasukkan.

## Domain, canonical, dan sitemap

Domain produksi belum ditetapkan dalam brief. Jangan mengganti nilai berikut dengan domain contoh lalu deploy.

1. Setelah domain/URL publik final tersedia, tambahkan `VITE_SITE_URL=https://domain-resmi-anda.id` pada environment hosting.
2. Dari root proyek, jalankan `node scripts/generate-sitemap.mjs https://domain-resmi-anda.id`.
3. Periksa `public/sitemap.xml` dan `public/robots.txt`. Tambahkan baris Sitemap ke robots.txt dengan URL domain yang benar.
4. Build ulang dan periksa bahwa `dist/sitemap.xml` tersedia sesudah `npm run build`.

Skrip secara sengaja menolak beberapa pola domain contoh/placeholder. Jangan gunakan domain yang belum dimiliki atau dikendalikan.

## Optimasi gambar

Belum ada produk aktual atau portofolio yang dapat dimasukkan ke tahap ini. Placeholder CSS tetap dipakai. Saat aset berizin tersedia, ikuti `public/media/README.md` dan gunakan `OptimizedImage`.

## SEO dan batasan SPA

Aplikasi menggunakan React + Vite client-side. Metadata diubah di browser setelah JavaScript berjalan; crawler yang tidak menjalankan JavaScript mungkin hanya membaca metadata awal `index.html`. Sebelum launch dan bila SEO halaman individual menjadi prioritas bisnis, evaluasi prerender/SSG atau migrasi ke framework dengan rendering server sesuai roadmap. Jangan menjanjikan metadata dinamis akan terbaca oleh semua crawler tanpa uji nyata.

## Privasi dan syarat

Halaman legal adalah draf operasional berdasar fitur saat ini (website showroom statis, preferensi tema lokal, tautan eksternal, kontak via email). Tinjau kembali dengan praktik final dan penasihat yang sesuai sebelum launch. Saat ini tidak dinyatakan adanya backend, pemrosesan formulir server, pembayaran, atau akun pengguna.

## Checklist pengujian

### Route dan metadata

- [ ] Buka setiap URL publik, lalu periksa `document.title` di DevTools.
- [ ] Pastikan meta `description`, `robots`, `og:title`, `og:description`, dan Twitter tags berubah saat navigasi internal.
- [ ] Pastikan route tidak dikenal memiliki `noindex,follow`.
- [ ] Pastikan halaman katalog dan portofolio yang isinya masih preview memiliki `noindex,follow`.
- [ ] Pastikan canonical dan `og:url` tidak ada saat domain belum dikonfigurasi.
- [ ] Setelah domain final, cek canonical satu per satu dan sitemap dengan domain yang sama.

### Aksesibilitas

- [ ] Gunakan Tab/Shift+Tab saja dari awal halaman; skip link muncul saat fokus dan membawa fokus/scroll ke area utama.
- [ ] Focus ring terlihat di tombol, link, input, select, dan komponen modal.
- [ ] Gunakan pembaca layar untuk memeriksa nama tautan dan urutan heading.
- [ ] Periksa kontras warna teks normal dan teks kecil pada tema gelap maupun terang dengan alat pemeriksa kontras; target minimum WCAG AA umumnya 4.5:1 untuk teks normal dan 3:1 untuk teks besar.
- [ ] Aktifkan reduced motion OS dan pastikan transisi/animasi berkurang.
- [ ] Uji browser yang menggunakan forced-colors/high contrast bila tersedia.

### Responsivitas dan media

- [ ] Uji lebar 320, 375, 768, 1024, dan 1440 px; tidak boleh ada horizontal overflow yang tidak disengaja.
- [ ] Pastikan gambar punya alt, width, height, dan strategi loading yang sesuai.
- [ ] Uji gambar rusak/tidak tersedia dan ukuran viewport kecil.
- [ ] Pastikan tidak ada aset mitra/pelanggan tanpa izin publikasi.

### Build

```bash
npm run lint
npm run build
npm run preview
```

Paket overlay ini tidak diklaim telah lolos build/lint penuh terhadap working tree lengkap karena dependensi dan perubahan lokal perlu diuji pada clone repository pengguna.
