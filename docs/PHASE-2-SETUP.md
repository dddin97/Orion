# ShowMarket — Fase 2: Setup Proyek

## Status
Fondasi React + Vite dari Prototype v1 dipertahankan. Paket setup berikut ditambahkan untuk menyiapkan struktur fase selanjutnya:

- Tailwind CSS v4 melalui plugin Vite (`@tailwindcss/vite`).
- React Router pada entry point, tanpa memindahkan navigasi halaman ke route terpisah sebelum Fase 4.
- Lucide React; ikon tema terang/gelap pada beranda menggunakan ikon Sun/Moon.
- ESLint flat config; Oxlint tetap tersedia sebagai perintah tambahan.
- Struktur folder target untuk components, layouts, pages, data, hooks, lib, services, routes, dan styles.

## Menjalankan

Gunakan Node.js yang kompatibel dengan versi Vite pada `package.json`, lalu dari root folder proyek jalankan:

```bash
npm install
npm run dev
```

Pemeriksaan kualitas dan build:

```bash
npm run lint
npm run build
npm run preview
```

Opsional, untuk lint tambahan:

```bash
npm run lint:ox
```

## Catatan arsitektur

- `src/App.jsx` tetap sederhana sebagai root aplikasi.
- Halaman showcase Prototype v1 sekarang berada di `src/pages/home/HomePage.jsx` dengan CSS-nya di sebelahnya.
- `BrowserRouter` sudah dipasang, tetapi route publik belum dibuat. Routing aktual, layout bersama, dan halaman 404 adalah pekerjaan Fase 4.
- Tailwind sudah dikonfigurasi; CSS kustom lama tetap dipertahankan agar tampilan Prototype v1 tidak berubah drastis. Utility Tailwind dapat dipakai mulai komponen baru.
- Belum ada katalog produk, harga jual, stok, cart, checkout, autentikasi, atau backend di fase ini.

## Dependensi penting

- React + Vite: fondasi frontend.
- Tailwind CSS: utility styling dan sistem desain.
- React Router: navigasi URL saat fase routing dimulai.
- Lucide React: ikon UI.
- ESLint dan Oxlint: pemeriksaan kualitas kode.
