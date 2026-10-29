# Apply Fase 7 ke repository Orion

Paket ini adalah **overlay**, bukan pengganti seluruh repository. Terapkan hanya setelah Fase 6 tersimpan dengan commit.

1. Di root clone Orion, jalankan `git status` dan pastikan perubahan lokal sudah di-commit atau dicadangkan.
2. Ekstrak ZIP ke folder sementara.
3. Salin isi folder `orion-project/` ke root repository Orion. Tinjau diff sebelum menyetujui overwrite.
4. Jalankan `npm run dev`, uji route lama serta `/kebijakan-privasi` dan `/syarat-penggunaan`.
5. Jalankan `npm run lint` dan `npm run build`; jangan push jika pemeriksaan gagal.
6. Setelah hasil pemeriksaan baik:

```bash
git add .
git commit -m "feat: add ShowMarket quality and SEO foundations"
git push
```

## Environment produksi

Setelah domain publik benar-benar dipilih, set `VITE_SITE_URL` pada environment build. Kemudian jalankan:

```bash
node scripts/generate-sitemap.mjs https://DOMAIN-RESMI-ANDA
npm run build
```

Ganti contoh di atas dengan domain yang Anda miliki/kendalikan. Jangan deploy string placeholder. Periksa `public/robots.txt`, `public/sitemap.xml`, dan `dist/sitemap.xml`.
