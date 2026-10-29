# Cara menerapkan overlay Fase 6

Paket ini hanya berisi file baru dan file yang perlu diganti; bukan salinan penuh repository.

1. Pastikan Fase 5 sudah commit dan `git status` bersih pada clone lokal `dddin97/Orion`.
2. Unduh ZIP ini dan ekstrak ke folder sementara.
3. Masuk ke folder `orion-project` di dalam ZIP.
4. Salin folder `src` dan `docs` serta file `PHASE-6-CHANGELOG.md` ini ke root repository lokal. Gabungkan folder; jangan membuat folder `orion-project` bersarang. Tinjau diff sebelum menimpa file lokal yang pernah Anda edit sendiri.
5. Jalankan `npm install` hanya jika dependency lokal belum terpasang; paket Fase 6 tidak menambahkan dependency baru.
6. Jalankan `npm run dev`, lalu uji semua langkah dalam `docs/PHASE-6-INTERACTIONS.md`.
7. Jalankan `npm run lint` dan `npm run build`. Perbaiki error lokal sebelum commit.
8. Setelah lolos, commit dan push:

```bash
git add .
git commit -m "feat: add ShowMarket frontend interactions"
git push
```

Jika file lokal berbeda dari overlay, jangan menimpa secara membabi buta: gunakan diff/merge agar perubahan yang sudah Anda buat tetap dipertahankan.
