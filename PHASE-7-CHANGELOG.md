# Changelog — Fase 7

- Menambahkan pengelola metadata route untuk title, description, robots, Open Graph, dan Twitter.
- Membuat canonical dan `og:url` kondisional berdasarkan `VITE_SITE_URL`, tanpa mengarang domain.
- Menandai detail kategori/layanan dan slot portofolio demo sebagai `noindex,follow`.
- Menambahkan `OptimizedImage` untuk aset terverifikasi dengan AVIF/WebP/fallback, dimensions, lazy loading, dan fetch priority.
- Menambahkan skip link, focus-visible yang lebih kuat, scroll margin, forced-colors, dan dukungan reduced-motion.
- Menyimpan preferensi tema secara lokal dan menangani kondisi `localStorage` tidak tersedia.
- Menambahkan halaman kebijakan privasi dan syarat penggunaan sebagai draf.
- Menambahkan tautan kebijakan legal di footer.
- Menambahkan `robots.txt` dan skrip pembuatan sitemap setelah domain resmi tersedia.
- Tidak menambahkan dependensi npm baru.

Belum diuji dengan `npm run lint`/`npm run build` pada working tree lengkap; lakukan validasi di clone repository sebelum commit.
