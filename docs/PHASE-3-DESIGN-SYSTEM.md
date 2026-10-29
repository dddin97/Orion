# Fase 3 — Design System dan Komponen

## Hasil fase

Fase ini menyiapkan UI kit yang dapat digunakan ulang oleh beranda, halaman unit usaha, katalog, detail produk, portofolio, dan formulir pada fase-fase berikutnya. Tampilan utama Prototype v1 dipertahankan; header dan footer dikeluarkan menjadi komponen shared agar dapat digunakan ulang.

## Identitas visual

- Arah: modern industrial/editorial dengan elemen garis, nomor, dan aksen oranye.
- Warna: hitam `#0a0b0c`, oranye `#ff6b2c`, putih hangat `#f4f2ed`, perak `#c5c9ca`.
- Tipografi: DM Sans untuk body/UI, Manrope untuk heading, DM Mono untuk label/kode.
- Container rekomendasi: maksimum 1200 px; gutter mobile 16 px, tablet 24 px, desktop 32 px.
- Spacing menggunakan kelipatan 4 px. Radius kartu 14 px, input/button 10 px, chip 999 px.
- Motion normal 150–320 ms; `prefers-reduced-motion` tetap dihormati.
- Fokus keyboard terlihat; label input, error, dan dialog menggunakan atribusi ARIA.

Tokens terdapat di `src/styles/tokens.css`. Nama token memakai prefix `--sm-` agar tidak bertabrakan dengan CSS lama yang dipertahankan dari prototype.

## Komponen reusable

### Shared

- `SiteHeader`: announcement bar, navigasi desktop/mobile, kontrol tema.
- `SiteFooter`: identitas ORION, tagline, copyright, tautan kembali ke atas.
- `BrandMark`: logo orbital konseptual sementara, bukan logo final resmi.
- `SectionHeading`: eyebrow, judul, dan deskripsi section.

### UI

- `Button`, `Badge`, `Input`, `Textarea`.
- `Card` + `CardHeader` / `CardContent` / `CardFooter`.
- `Modal`, `MediaPlaceholder`, `CategoryChip`, `Breadcrumbs`, `StatusMessage`.
- `BusinessCard` dan `ProductCard` sebagai dasar untuk fase showroom/katalog.

Contoh button:

```jsx
<Button variant="primary" size="lg" href="#business">Jelajahi ShowMarket</Button>
<Button variant="secondary" onClick={openDialog}>Lihat detail</Button>
```

Contoh field dan error:

```jsx
<Input label="Nama lengkap" name="name" required placeholder="Masukkan nama" />
<Input label="Email" name="email" type="email" error={emailError} />
```

Contoh kartu produk dengan data yang tersedia saja:

```jsx
<ProductCard
  product={{ name: 'Nama produk yang sudah diverifikasi', category: 'Audio', image: '/placeholders/1-1.jpg' }}
  href="https://example.com/katalog"
/>
```

## Media placeholder

File dari fondasi Fase 1 disertakan di `public/placeholders/` sebanyak 20 rasio. `MediaPlaceholder` menerima `aspectRatio`, `type`, `label`, `caption`, `src`, `alt`, dan `fit`. Jika tidak diberi `src`, komponen memilih file placeholder berdasarkan rasio; jika file tidak berhasil dimuat, komponen menampilkan fallback visual.

Rasio didukung: `1:1`, `1.91:1`, `9:16`, `5:4`, `5:3`, `2:5`, `3:2`, `16:10`, `17:9`, `4:3`, `4:1`, `8:1`, `3:4`, `4:5`, `16:9`, `2:1`, `3:1`, `3:5`, `2:3`, `21:9`.

Rekomendasi: kartu produk `1:1` + `fit="contain"`; banner `3:1` atau `2:1`; media/video `16:9` atau `21:9`; foto portrait `3:4` atau `4:5`; konten vertikal `9:16`.

## Validasi dan batas fase

- Tidak ada dependensi runtime baru selain yang sudah ada pada Fase 2.
- Header masih menggunakan anchor ke section beranda. URL halaman dan layout lintas route adalah Fase 4.
- Belum ada form inquiry yang mengirim data, pencarian katalog, data harga, stok, checkout, backend, atau dashboard admin.
- Foto placeholder bukan aset produk mitra dan tidak menyiratkan ketersediaan produk.
- `npm run lint` dan `npm run build` perlu dijalankan di komputer pengembang setelah `npm install`, karena lingkungan pembuat paket ini tidak dapat menjangkau registry npm untuk memasang dependensi Fase 2.
