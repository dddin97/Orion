
# Fase 4 — Layout dan Routing

## Tujuan

Fase ini membuat layout dan navigasi multi-halaman sesuai roadmap ShowMarket. Seluruh halaman memakai `MainLayout`, `SiteHeader`, dan `SiteFooter` bersama. Tema terang/gelap berada pada layout agar tetap aktif ketika berpindah route selama sesi berjalan.

## URL publik

| URL | Halaman | Status |
| --- | --- | --- |
| `/` | Beranda ShowMarket | Konten dari prototype awal |
| `/app` | ORITLE Apparel | Landing page lini usaha |
| `/app/katalog` | Katalog APP | Kerangka; menunggu data produk terverifikasi |
| `/app/produk/:slug` | Detail produk APP | Kerangka; memerlukan produk terdaftar |
| `/snd` | iQIFI Audio | Landing page lini usaha |
| `/snd/katalog` | Katalog SND | Kerangka; menunggu data produk terverifikasi |
| `/snd/produk/:slug` | Detail produk SND | Kerangka; memerlukan produk terdaftar |
| `/asm` | Audio System Assembly | Landing page layanan |
| `/asm/katalog` | Ruang lingkup layanan ASM | Kerangka; paket/layanan belum dipublikasikan |
| `/asm/layanan/:slug` | Detail layanan ASM | Kerangka; memerlukan rincian layanan terverifikasi |
| `/portofolio` | Daftar portofolio | Kerangka; menunggu dokumentasi dan izin publikasi |
| `/portofolio/:slug` | Detail proyek | Kerangka; hanya terisi jika proyek terverifikasi |
| `/tentang` | Tentang ShowMarket | Konten deskriptif berdasarkan brief |
| `/kontak` | Kontak | Menggunakan data yang tersedia; kontak disamarkan tetap disamarkan |
| `*` | 404 | Menampilkan URL yang tidak dikenali dan tautan kembali |

## Struktur implementasi

- `src/routes/AppRoutes.jsx`: peta URL React Router.
- `src/layouts/MainLayout.jsx`: layout bersama, theme state, dan pengelolaan scroll untuk anchor.
- `src/components/shared/PageIntro.jsx`: heading internal halaman dan breadcrumb.
- `src/data/businesses.js`: data deskriptif lini APP, SND, dan ASM.
- `src/pages/business/BusinessPage.jsx`: template landing page lini usaha.
- `src/pages/catalog/`: template katalog dan detail produk.
- `src/pages/portfolio/`: halaman daftar dan detail proyek.
- `src/pages/about/`: halaman tentang dan kontak.
- `src/pages/NotFoundPage.jsx`: fallback 404.

## Validasi manual

Jalankan `npm install`, lalu `npm run dev`. Uji URL dalam tabel di atas; untuk rute dinamis coba `/app/produk/produk-contoh` dan `/portofolio/proyek-contoh`. Rute dinamis harus membuka kerangka status kosong, bukan menganggap data tersebut sebagai produk/proyek nyata. Uji juga navigasi header/footer, tombol kembali, tautan breadcrumb, theme toggle, menu mobile, dan pembukaan URL langsung.

Kemudian jalankan `npm run lint` dan `npm run build`. Ketika website dideploy ke hosting statis, konfigurasi SPA fallback/direct URL termasuk Fase 8, sehingga URL dalam masih perlu diuji lagi pada hosting target.

## Batas fase

Fase 4 membangun struktur navigasi dan template halaman, bukan mengisi katalog produk nyata. Data produk contoh lokal dan konten lengkap tiap halaman masuk Fase 5. Pencarian, filter, sorting, galeri interaktif, formulir inquiry, dan interaksi katalog masuk Fase 6.
