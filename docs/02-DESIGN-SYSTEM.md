# Design System — ShowMarket by ORION.Ltd

## Identitas merek

- **Perusahaan:** ORION.Ltd
- **Website showroom:** ShowMarket
- **Tagline:** Raise your creativity. Create your history.
- **Arah konsep:** modern industrial/editorial; rapi seperti katalog produk premium; aksen motorsport pada garis, angka, dan highlight—tanpa memakai logo atau aset resmi McLaren/Mercedes/F1.
- **Logo:** gunakan placeholder sampai logo final disediakan.

## Nama yang tampil kepada pengunjung

| Unit internal | Nama publik | Fokus |
|---|---|---|
| APP | ORITLE Apparel | T-shirt, polo, jacket, hoodie, apparel polos dan sablon/custom sesuai penawaran yang tersedia |
| SND | iQIFI Audio | Speaker/driver, power amplifier, mixer, mikrofon, audio management/DLMS, aksesori dan komponen audio |
| ASM | iQIFI Audio by ORION — Rakit Sound System | Konsultasi dan perakitan paket sound system custom |

Tampilkan APP/SND/ASM sebagai pengelompokan internal bila berguna untuk data, namun menu publik menggunakan nama yang lebih mudah dipahami pelanggan.

## Palet warna awal

Palet berikut adalah interpretasi desain awal yang terinspirasi oleh hitam, oranye, putih, dan perak sesuai brief pengguna. Ini bukan palet resmi tim/brand lain.

| Token | HEX | Kegunaan |
|---|---|---|
| `--color-ink` | `#101215` | Teks utama, footer, panel gelap |
| `--color-night` | `#080A0D` | Background gelap / hero |
| `--color-orange` | `#FF6A00` | CTA utama dan aksen brand |
| `--color-orange-hover` | `#E95D00` | Hover CTA |
| `--color-silver` | `#B7BEC7` | Detail dekoratif dan garis sekunder |
| `--color-paper` | `#F5F6F8` | Background halaman terang |
| `--color-white` | `#FFFFFF` | Surface/kartu |
| `--color-muted` | `#66707C` | Teks sekunder |
| `--color-border` | `#DDE1E6` | Border dan divider |
| `--color-success` | `#217A4B` | Status sukses |
| `--color-danger` | `#B42318` | Status kesalahan |

Aksen oranye digunakan terukur, bukan untuk semua elemen. Teks normal harus mempertahankan kontras yang memadai pada warna latarnya.

## Tipografi

- Judul: `Inter`, fallback `Arial, sans-serif`; bobot 600–800.
- Body/UI: `Inter`, fallback `Arial, sans-serif`; bobot 400–600.
- Harga/kode model: gunakan angka tabular bila tersedia.
- Hindari terlalu banyak font berbeda. Font eksternal baru ditambahkan setelah lisensi/performa dipertimbangkan.

## Tata letak dan ukuran

- Lebar konten desktop maksimum: `1200px` (awal, dapat disesuaikan).
- Padding horizontal: mobile `16px`, tablet `24px`, desktop `32px`.
- Spacing berbasis kelipatan `4px`.
- Radius kartu: `14px`; tombol: `10px`; tag: pill/`999px`.
- Grid produk: 2 kolom mobile besar jika layak; 2 tablet; 3–4 desktop; pastikan kartu tetap nyaman dibaca.
- Semua interaksi dapat digunakan dengan keyboard; focus indicator tidak boleh dihilangkan.

## Komponen reusable

1. `SiteHeader` — logo placeholder, desktop nav, mobile menu.
2. `SiteFooter` — unit bisnis, kontak, sosial media, legal.
3. `Button` — primary orange, secondary outline, text link.
4. `BusinessCard` — satu unit bisnis.
5. `ProductCard` — thumbnail, kategori, nama, brand/model, CTA.
6. `CategoryChip` — filter kategori.
7. `Breadcrumbs` — konteks halaman.
8. `MediaPlaceholder` — gambar berasio tetap, placeholder selama media final belum tersedia.
9. `InquiryForm` — nama, kontak, unit bisnis, kebutuhan, izin menghubungi; validasi frontend.
10. `StatusMessage` — success, empty, loading, dan error.

## Standar gambar

Gunakan file di `public/placeholders/`. Rasio yang paling umum untuk ShowMarket:

- `1-1.jpg` untuk kartu produk dan gambar persegi.
- `4-3.jpg` atau `3-2.jpg` untuk dokumentasi/workshop.
- `16-9.jpg` untuk video, hero media, dan thumbnail.
- `3-1.jpg` atau `2-1.jpg` untuk banner.
- `3-4.jpg` atau `4-5.jpg` untuk foto pakaian portrait.
- `9-16.jpg` untuk konten video vertikal.

CSS:

```css
.media-cover {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  object-position: center;
}

.product-image {
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: contain;
}
```

Gunakan `cover` untuk mengisi area foto yang boleh terpotong. Gunakan `contain` untuk logo atau foto produk yang harus terlihat utuh.

## Motion dan dark mode

- Animasi baru ditambahkan setelah layout dan aksesibilitas beres.
- Durasi UI sederhana: kira-kira `150–250ms`; hindari animasi berlebihan.
- Hormati `prefers-reduced-motion`.
- Dark mode boleh dikembangkan kemudian; pada fase pertama, fokus pada tema terang dengan hero/footer gelap.

## Nada penulisan

Profesional, jelas, ramah, tidak berlebihan. Jangan membuat klaim “resmi”, “authorized”, stok tersedia, garansi, atau kualitas tertentu tanpa konfirmasi yang mendukung.
