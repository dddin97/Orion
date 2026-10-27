# Cara menerapkan overlay Fase 5

Paket ini hanya berisi file overlay yang perlu ditambahkan/diganti, bukan clone penuh repository. Satu pengecualian adalah `src/App.jsx`: versi branch publik yang berhasil diperiksa masih merender `HomePage` langsung, sehingga file ini diperbarui untuk menggunakan `AppRoutes` dan mengaktifkan routing.

1. Pastikan Fase 4 sudah di-commit dan working tree Git Anda bersih (`git status`).
2. Unduh dan ekstrak ZIP ini di folder sementara.
3. Salin isi folder `orion-project` ke root clone repository Orion Anda. Overlay ini tidak menyertakan `.git`, `package.json`, `package-lock.json`, `main.jsx`, `AppRoutes.jsx`, layout, navbar/footer, atau halaman beranda.
4. Tinjau perubahan dengan `git diff --stat` dan `git diff` sebelum menguji.
5. Jalankan:

```bash
npm install
npm run dev
```

6. Uji URL dan alur pada `docs/PHASE-5-SHOWROOM.md`.
7. Jalankan pemeriksaan:

```bash
npm run lint
npm run build
```

8. Jika semuanya lolos, commit dan push:

```bash
git add .
git commit -m "feat: complete ShowMarket public showroom pages"
git push
```

Jika ada perubahan lokal pada file yang sama, gabungkan secara manual terlebih dahulu; jangan langsung menimpa tanpa meninjau diff.
