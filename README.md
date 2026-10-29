# ORION ShowMarket

ShowMarket adalah showroom digital untuk memperkenalkan lini usaha ORION.Ltd:

- **APP — ORITLE Apparel:** apparel, grosir, dan sablon custom.
- **SND — iQIFI Audio:** perangkat audio dan elektronik.
- **ASM — Audio System Assembly:** konsultasi dan perencanaan rakit sound system custom.

Tagline: **Raise your creativity. Create your history.**  
Brand line: **The Sky Hunter.**

## Tech stack

- React + Vite
- Tailwind CSS v4 via `@tailwindcss/vite`
- React Router (routing halaman terpusat pada `src/routes/AppRoutes.jsx`)
- Lucide React
- ESLint flat config + Oxlint opsional
- CSS responsif kustom yang sudah digunakan pada Prototype v1

## Memulai proyek

Pastikan Node.js kompatibel dengan versi Vite di `package.json`, kemudian jalankan:

```bash
npm install
npm run dev
```

Perintah lain:

```bash
npm run lint
npm run build
npm run preview
npm run lint:ox # opsional
```

## Struktur utama

```text
src/
├── App.jsx
├── main.jsx
├── index.css
├── components/
│   ├── shared/
│   └── ui/
├── layouts/
├── pages/
│   ├── home/
│   ├── business/
│   ├── catalog/
│   ├── portfolio/
│   ├── about/
│   └── legal/
├── data/
├── hooks/
├── lib/
├── services/
├── routes/
└── styles/
docs/
├── PHASE-2-SETUP.md
└── PHASE-3-DESIGN-SYSTEM.md
```

Folder disiapkan dan diisi bertahap berdasarkan roadmap. Fase 4 menambahkan route map, layout bersama, dan template halaman publik.

## Status roadmap

- **Fase 1 — Perencanaan dan fondasi:** acuan dari brief serta Prototype v1.
- **Fase 2 — Setup proyek:** React + Vite, Tailwind, React Router, Lucide React, ESLint, dan struktur folder telah dikonfigurasi.
- **Fase 3 — Design system dan komponen:** tokens, shared header/footer, primitives UI, kartu usaha/produk, dan 20 placeholder media telah disiapkan; lihat `docs/PHASE-3-DESIGN-SYSTEM.md`.
- **Fase 4 — Layout dan routing:** `MainLayout`, navigasi route, halaman APP/SND/ASM, katalog/detail, portofolio/detail proyek, tentang, kontak, dan 404 telah disiapkan. Lihat `docs/PHASE-4-ROUTING.md`.
- Fase 5–10 mengikuti roadmap `Orion Web`.

## Sumber mitra

- Cititex: https://cititex.com/
- New States Apparel: https://shopee.co.id/newstatesapparelofficial
- ACR: https://acrspeaker.com/
- Legacy: https://www.legacy.us.com/
- JIC: https://jicspeaker.com/
- Betavo: https://www.betavoaudio.com/
- Ashley Pro Audio: https://www.ashleyproaudio.com/
- Fest by Brewog: https://shopee.co.id/brewog.fest_indonesia

Tautan tersebut adalah sumber referensi yang diberikan dalam brief, bukan pernyataan bahwa semua aset mitra sudah memperoleh izin penggunaan.

## Catatan data publik

Informasi produk, harga jual ORION, stok, testimoni, portofolio, nomor WhatsApp lengkap, tautan toko resmi ORITLE/iQIFI, alamat detail, dan Google Maps harus dimasukkan atau diverifikasi sebelum dipublikasikan. Harga yang tercantum pada website mitra bukan otomatis harga jual ORION. Materi gambar, logo, video, dan promosi milik pihak lain hanya digunakan setelah hak penggunaan atau izinnya dipastikan.
