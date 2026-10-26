# Changelog — Phase 3

## Added
- Design tokens dengan prefix `--sm-` untuk warna, tipografi, container, gutter, spacing, radius, shadow, dan motion.
- Komponen shared `BrandMark`, `SiteHeader`, `SiteFooter`, dan `SectionHeading`.
- UI primitives `Button`, `Badge`, `Input`, `Textarea`, `Card`, `Modal`, `MediaPlaceholder`, `CategoryChip`, `Breadcrumbs`, dan `StatusMessage`.
- Komponen awal `BusinessCard` dan `ProductCard` untuk halaman showroom/katalog berikutnya.
- 20 placeholder media dari fondasi Fase 1 disalin ke `public/placeholders/`.
- Dokumentasi UI kit dan panduan penggunaan pada `docs/PHASE-3-DESIGN-SYSTEM.md`.

## Changed
- Beranda menggunakan `SiteHeader`, `SiteFooter`, dan `SectionHeading` yang reusable.
- Tailwind CSS dan stylesheet prototype tetap dipertahankan.

## Not included yet
- Routing aktual dan halaman 404 (Fase 4).
- Halaman APP/SND/ASM dan katalog produk (Fase 5).
- Pencarian, filter, formulir inquiry interaktif, serta simulasi produk (Fase 6).
