# Menerapkan Fase 2 ke repository GitHub

Paket ini tidak menyertakan folder `.git`, jadi riwayat repository Anda tetap aman.

1. Buka atau clone repository `https://github.com/dddin97/Orion.git` dan pastikan perubahan Anda sebelumnya sudah di-commit.
2. Ekstrak isi ZIP Fase 2 ke folder repository, setujui penggantian file yang namanya sama. Jangan menghapus folder `.git`.
3. Dari terminal di root repository, jalankan:

   ```bash
   npm install
   npm run dev
   ```

4. Setelah website tampil, hentikan server dengan `Ctrl+C`, lalu jalankan:

   ```bash
   npm run lint
   npm run build
   ```

5. Jika semua perintah berhasil, periksa perubahan dengan `git status`, lalu commit dan push:

   ```bash
   git add .
   git commit -m "chore: configure ShowMarket phase 2 setup"
   git push
   ```

`npm install` akan menyelaraskan atau membuat `package-lock.json` berdasarkan dependensi Fase 2. Jangan menjalankan `npm ci` sebelum lockfile terselaraskan.

Jika build atau lint menghasilkan error di komputer Anda, salin teks error lengkap agar dapat diperbaiki sebelum masuk Fase 3.
