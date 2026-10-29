# Menerapkan ShowMarket Phase 4 ke repository

Paket Phase 4 adalah overlay di atas fondasi Phase 3. ZIP ini tidak membawa folder `.git` dan tidak melakukan push otomatis.

1. Pastikan semua perubahan yang sudah ada di repository lokal di-commit atau di-backup.
2. Ekstrak ZIP ke folder sementara. Buka folder `orion-project/`, lalu salin **isinya** ke root repository Orion lokal—jangan membuat folder `orion-project` bersarang. Tinjau diff dan jangan timpa perubahan lokal yang belum di-commit tanpa membandingkannya.
3. Dari root repository, jalankan:

   ```bash
   npm install
   npm run dev
   ```

4. Uji setiap URL yang tercantum pada `docs/PHASE-4-ROUTING.md`, termasuk detail dinamis `/app/produk/produk-contoh` dan `/portofolio/proyek-contoh`, navigasi header/footer, breadcrumb, tombol kembali, mode tema, dan menu pada layar kecil.
5. Jalankan pemeriksaan:

   ```bash
   npm run lint
   npm run build
   ```

6. Jika uji lokal lolos, commit dan push:

   ```bash
   git add .
   git commit -m "feat: add ShowMarket page layout and routing"
   git push
   ```

## Perhatian

- Jangan menghapus atau mengubah folder `.git` repository lokal.
- Paket tidak menyertakan `node_modules`.
- Produk, harga, stok, spesifikasi, portofolio, alamat detail, dan nomor WhatsApp lengkap belum ditambahkan tanpa verifikasi.
- Direct URL pada hosting produksi membutuhkan konfigurasi SPA fallback. Itu dibahas pada Fase 8 deployment.
