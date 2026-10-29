# Phase 2 changelog — setup proyek

Tanggal paket: 25 Oktober 2026

## Added
- Integrasi Tailwind CSS v4 dengan `@tailwindcss/vite`.
- `BrowserRouter` pada entry point React.
- Lucide React untuk ikon tema.
- ESLint flat config; Oxlint tetap bisa dijalankan terpisah.
- Struktur folder modular sesuai roadmap ShowMarket.
- Dokumentasi setup dan cara menerapkan perubahan ke GitHub.
- Persyaratan Node.js ditulis di `package.json` dan `.nvmrc`.

## Refactor
- Halaman prototype dipindahkan dari `src/App.jsx` ke `src/pages/home/HomePage.jsx`.
- CSS khusus beranda dipindahkan ke `src/pages/home/HomePage.css`.
- `src/App.jsx` kini menjadi root aplikasi sederhana.
- Google Fonts dipanggil dari `index.html` agar impor Tailwind tetap berada di bagian awal CSS.

## Belum termasuk
- URL route per halaman, layout bersama, dan halaman 404 (Fase 4).
- Design system reusable lengkap (Fase 3).
- Katalog produk, filter, detail produk, inquiry interaktif (Fase 5–6).
- Backend, database, login, dashboard admin.

## Validasi di lingkungan ini
- `package.json` valid JSON.
- `vite.config.js` dan `eslint.config.js` lolos pemeriksaan sintaks Node.
- Semua impor relatif source yang diperiksa menunjuk ke file yang ada.
- Build produksi dan lint penuh belum dapat dijalankan karena akses registry npm dari lingkungan kerja mengalami timeout. Jalankan `npm install`, `npm run lint`, dan `npm run build` di komputer lokal sebelum push.
