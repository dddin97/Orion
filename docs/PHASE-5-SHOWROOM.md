# Fase 5 — Halaman Showroom

## Tujuan
Melengkapi halaman publik ShowMarket menggunakan React + Vite dan React Router yang sudah ada. Fase ini tetap **frontend-first**, tanpa backend, database, checkout, pembayaran, login, atau dashboard admin.

## Halaman yang dikembangkan
- Beranda: mempertahankan `src/pages/home/HomePage.jsx` yang sudah ada di repository dan telah memuat hero, tiga lini usaha, sumber mitra, proses ASM, status katalog, dan kontak ringkas.
- APP/SND/ASM: deskripsi usaha, kategori, jalur ke katalog/detail, sumber mitra yang relevan, atau area layanan ASM.
- Katalog: halaman katalog berbasis kategori/layanan contoh.
- Detail: pola halaman detail kategori/layanan dengan status data yang belum terverifikasi.
- Portofolio dan detail: slot dokumentasi, bukan contoh proyek fiktif.
- Tentang: tujuan ShowMarket, prinsip publikasi, dan ringkasan tiga lini usaha.
- Kontak: email, jam operasional, area ASM, nomor WhatsApp tersamarkan, dan tautan Instagram dari brief.

## Aturan data
1. Semua kartu katalog pada `src/data/showroomContent.js` berstatus preview kategori/UI; tidak ada klaim model produk, SKU, spesifikasi, harga, stok, atau foto produk nyata.
2. Kartu portofolio adalah slot dokumentasi; bukan klaim bahwa sebuah proyek telah dikerjakan.
3. Nomor WhatsApp tetap ditampilkan dalam bentuk tersamarkan sesuai brief. Tautan WhatsApp tidak dibuat karena nomor lengkap belum tersedia.
4. Lokasi ASM hanya ditampilkan pada tingkat wilayah: Ngronggot, Nganjuk dan Ngajum, Malang. Alamat detail / Google Maps belum ditampilkan.
5. Tautan mitra adalah sumber referensi publik. Jangan menganggapnya sebagai bukti status reseller resmi atau izin pemakaian aset.

## File overlay
- `src/App.jsx` (mengaktifkan `AppRoutes` agar route Fase 4 benar-benar dipakai)
- `src/data/showroomContent.js`
- `src/pages/business/BusinessPage.jsx`
- `src/pages/catalog/CatalogPage.jsx`
- `src/pages/catalog/ProductDetailPage.jsx`
- `src/pages/portfolio/PortfolioPage.jsx`
- `src/pages/portfolio/ProjectDetailPage.jsx`
- `src/pages/about/AboutPage.jsx`
- `src/pages/about/ContactPage.jsx`
- `src/styles/phase-5-showroom.css`

Route yang ada pada Fase 4 dipakai kembali. Saya menemukan bahwa `src/App.jsx` yang tampil di branch publik masih merender `HomePage` langsung, sehingga konfigurasi `AppRoutes` tidak aktif. Overlay ini memperbaiki wiring `src/App.jsx` agar semua route Fase 4 dan halaman Fase 5 dapat diakses. File `src/routes/AppRoutes.jsx`, `src/main.jsx`, `MainLayout`, `SiteHeader`, `SiteFooter`, dan `HomePage` tetap dipertahankan.

## Validasi manual
1. `npm install`
2. `npm run dev`
3. Buka `/`, `/app`, `/app/katalog`, `/app/produk/t-shirt-polo`, `/snd`, `/snd/katalog`, `/snd/produk/speaker-driver`, `/asm`, `/asm/katalog`, `/asm/layanan/konsultasi-kebutuhan`, `/portofolio`, `/portofolio/apparel-custom`, `/tentang`, `/kontak`, dan URL yang tidak ada.
4. Pastikan seluruh tautan kategori/detail, sumber mitra, email, serta navigasi header/footer bekerja.
5. Jalankan `npm run lint` dan `npm run build` dari repository asli.

## Di luar cakupan Fase 5
Pencarian aktif, filter, sorting, galeri modal, form inquiry tervalidasi, dark-mode persistence, animasi, optimasi metadata/SEO lanjut, backend, dan integrasi marketplace tetap mengikuti fase roadmap masing-masing.
