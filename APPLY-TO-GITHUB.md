# Menerapkan ShowMarket Phase 3 ke repository

Paket ini merupakan overlay di atas fondasi `Orion_ShowMarket_Phase2_Setup.zip`, bukan clone Git dan tidak berisi folder `.git`.

1. Backup atau commit perubahan lokal Anda terlebih dahulu.
2. Ekstrak ZIP ke folder sementara. Masuk ke folder hasil ekstrak `orion-project/`, lalu salin **isinya** (bukan folder `orion-project` sebagai subfolder baru) ke root repository Orion lokal. Izinkan file dengan nama sama diperbarui.
3. Dari root proyek jalankan `npm install`, `npm run lint`, dan `npm run build`.
4. Periksa beranda pada `npm run dev` di desktop dan layar kecil.
5. Jika semua pemeriksaan lulus, commit perubahan:

```bash
git add .
git commit -m "feat: add ShowMarket design system and reusable UI kit"
git push
```

Jika Anda sudah mengubah file yang sama sejak commit Fase 2, jangan timpa tanpa meninjau diff. Bandingkan perubahan di `src/pages/home/HomePage.jsx`, `src/index.css`, dan `README.md` terlebih dahulu.
