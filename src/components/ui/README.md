# UI Kit — ShowMarket Phase 3

Semua komponen di folder ini dibuat untuk digunakan ulang. Impor satu komponen langsung atau melalui `src/components/ui/index.js`.

```jsx
import { Badge, Button, Card, Input, MediaPlaceholder, ProductCard } from '../../components/ui'
```

Komponen inti:

- `Button`: `primary`, `secondary`, `ghost`, `danger`; ukuran `sm`, `md` (default), `lg`; opsi `block`, `loading`, `disabled`, `href`.
- `Badge`: status `neutral`, `accent`, `success`, `warning`, `danger`, `info`.
- `Input` dan `Textarea`: label/hint/error yang terhubung dengan elemen input melalui ID dan ARIA.
- `Card`, `CardHeader`, `CardContent`, `CardFooter`: kerangka kartu serbaguna.
- `Modal`: dialog terkontrol dengan Escape untuk menutup, pembatasan scroll halaman saat terbuka, label ARIA, dan opsi klik backdrop.
- `MediaPlaceholder`: rasio 20 placeholder yang tersedia di `public/placeholders/`; menerima `src`, `alt`, `fit`, dan label.
- `BusinessCard`, `ProductCard`, `CategoryChip`, `Breadcrumbs`, dan `StatusMessage`: komponen untuk halaman publik mendatang.

`ProductCard` hanya menampilkan fakta yang diberikan. Komponen tidak mengarang harga, model, stok, garansi, atau spesifikasi.
