# Fase 8 — Deployment Frontend ShowMarket

## Sasaran

Men-deploy frontend React + Vite ShowMarket ke Vercel, menjaga URL React Router tetap dapat diakses langsung, memvalidasi build produksi, serta menyediakan prosedur pemeriksaan dan rollback.

## Status hosting yang diketahui

Repository Orion saat ini mencantumkan `https://orion-project-eta.vercel.app/` sebagai URL website. Anggap alamat tersebut sebagai URL deployment Vercel yang sedang digunakan, bukan domain bermerek khusus ORION. Domain kustom dapat ditambahkan belakangan.

## Konfigurasi proyek Vercel

Di Vercel Dashboard, buka proyek yang terhubung ke repository `dddin97/Orion` dan periksa **Settings → Build and Deployment**:

| Pengaturan | Nilai yang direkomendasikan |
| --- | --- |
| Framework Preset | Vite |
| Root Directory | `.` (root repository) |
| Production Branch | `main` |
| Install Command | `npm ci` |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Node.js | 22.x atau versi yang memenuhi `engines.node` pada `package.json` |

File `vercel.json` di root repository menyimpan build/output config, SPA fallback, beberapa header keamanan dasar, serta cache panjang untuk aset build bernama hash. File ini perlu di-commit agar pengaturan berjalan konsisten lintas deployment. Paket juga menyertakan sitemap dan robots yang memakai URL Vercel yang saat ini tercantum pada halaman About repository (`orion-project-eta.vercel.app`) sebagai host sementara; ganti keduanya jika URL produksi berubah.

## Apa yang diperbaiki paket ini

- Menambahkan `vercel.json` untuk build Vite dan rewrite SPA ke `/index.html`, agar URL seperti `/app/katalog` dan `/snd/produk/speaker-driver` bisa membuka aplikasi saat di-refresh atau dibuka langsung.
- Menambahkan header keamanan dasar: `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, dan `Permissions-Policy`.
- Mendaftarkan route `/kebijakan-privasi` dan `/syarat-penggunaan`, karena file halaman legal tersedia dalam repository tetapi belum terdaftar pada `AppRoutes.jsx` yang diperiksa saat paket dibuat.
- Menambahkan `scripts/check-deployment.mjs` untuk pemeriksaan output build lokal.

## Pengujian lokal sebelum push

Jalankan pada root repository:

```bash
npm ci
npm run lint
npm run build
node scripts/check-deployment.mjs
npm run preview
```

Buka alamat lokal yang dicetak oleh Vite Preview, lalu uji URL berikut dengan membuka langsung URL (bukan hanya menavigasi dari homepage):

- `/`
- `/app`
- `/app/katalog`
- `/snd/katalog`
- `/asm/katalog`
- `/portofolio`
- `/tentang`
- `/kontak`
- `/kebijakan-privasi`
- `/syarat-penggunaan`
- `/url-yang-tidak-ada` — harus menampilkan UI 404 aplikasi.

Pastikan font, favicon, gambar, navigasi, formulir frontend, dan tema berfungsi. Jangan anggap lulus hanya karena homepage tampil.

## Deploy melalui GitHub ↔ Vercel

Jika proyek sudah tersambung ke GitHub, Vercel biasanya menjalankan deployment secara otomatis setelah push. Untuk risiko lebih rendah:

1. Buat branch `phase-8-deployment`.
2. Terapkan perubahan, kemudian jalankan lint/build/smoke-check.
3. Push branch tersebut dan buka URL Preview Deployment di Vercel.
4. Uji semua deep link dan aset.
5. Setelah lolos, merge ke `main` atau push ke branch produksi sesuai pengaturan proyek.
6. Buka tab Deployments dan pastikan deployment terbaru berstatus Ready.

Jika Anda langsung commit ke `main`, pastikan build pada deployment Production berhasil sebelum membagikan URL itu.

## HTTPS dan domain

URL Vercel `*.vercel.app` dapat dipakai sementara. Untuk domain kustom di kemudian hari, tambahkan domain melalui **Settings → Domains**, ikuti catatan DNS yang ditampilkan Vercel, lalu tunggu verifikasi dan sertifikat TLS selesai. Jangan mengarang record DNS atau menambahkan domain yang belum dimiliki.

Paket ini menyertakan `public/sitemap.xml` dan `public/robots.txt` untuk URL Vercel yang tercantum saat ini. Jika Anda menggunakan URL tersebut sebagai host sementara, verifikasi setiap URL sitemap setelah deployment. Setelah domain kustom dipasang, perbarui sitemap dan baris `Sitemap:` pada robots.txt. Skrip Fase 7 dapat dipakai untuk membangun ulang sitemap:

```bash
node scripts/generate-sitemap.mjs https://URL-PUBLIK-YANG-SEBENARNYA
```

Ganti URL di perintah dengan origin HTTPS publik yang benar-benar dipakai. Setelah sitemap dihasilkan, cek `public/sitemap.xml`, output `dist/sitemap.xml`, dan pastikan `public/robots.txt` memiliki baris `Sitemap: https://URL-PUBLIK-YANG-SEBENARNYA/sitemap.xml`. Pastikan hanya URL yang memang memiliki route dan layak diindeks yang dicantumkan.

## Rollback

Jika deployment terbaru merusak website:

1. Buka Vercel → Project → Deployments.
2. Pilih deployment Production terakhir yang diketahui berfungsi.
3. Gunakan tindakan rollback/promote yang disediakan Vercel untuk mengembalikannya menjadi deployment aktif.
4. Setelah layanan stabil, perbaiki kode pada branch baru, jalankan pemeriksaan lokal, dan buat deployment baru.

Jangan menghapus deployment yang sebelumnya berfungsi sebagai bagian dari rollback.

## Batasan dan catatan SEO

Ini tetap aplikasi SPA client-side. Rewrite SPA membuat deep link dapat dimuat tetapi respons route yang tidak dikenal dapat tetap berstatus HTTP 200 sebelum React menampilkan UI 404. Untuk kebutuhan SEO tingkat lanjut, pertimbangkan prerendering/SSG dan pengujian status HTTP sebelum launch final.

Halaman privasi/syarat di repository tetap draf operasional. Tinjau lagi sebelum peluncuran publik dan sesuaikan dengan host, layanan eksternal, serta alur data yang benar-benar digunakan.
