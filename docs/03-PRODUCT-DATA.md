# Struktur Data Katalog Produk

## Prinsip

ShowMarket adalah katalog lintas unit bisnis. Produk harus bersumber dari katalog mitra/brand atau data yang diberikan ORION. Data sumber digunakan sebagai dasar informasi, bukan bukti otomatis bahwa ORION adalah distributor resmi. Status kemitraan dan hak pemakaian foto/logo harus disimpan terpisah.

## Taksonomi awal

### APP — ORITLE Apparel

- T-shirt / kaos
- Long sleeve
- Polo shirt
- Hoodie dan sweatshirt
- Jacket
- Sport / Dri-Fit
- Headwear / topi
- Custom printing / sablon (layanan)

Ini adalah kategori rencana berdasarkan brief dan kategori yang muncul pada katalog Cititex. Produk individual baru dipublikasikan setelah dipilih dan divalidasi.

### SND — iQIFI Audio

- Speaker driver: woofer, subwoofer, full-range, midrange, tweeter, compression driver
- Speaker pasif / kabinet
- Power amplifier dan amplifier
- Mixer audio
- Mikrofon
- Audio management / DLMS
- Kabel, aksesori, sparepart, dan komponen terkait
- Sewa sound system (layanan; bukan produk barang)

Kategori tersebut adalah titik awal untuk inventarisasi. Tidak semua mitra pasti menjual tiap kategori.

### ASM — Rakit Sound System

- Konsultasi kebutuhan dan desain sistem
- Perakitan paket sound system custom
- Pemilihan komponen berdasarkan kebutuhan dan anggaran
- Dokumentasi hasil rakitan/proyek jika tersedia dan diizinkan

ASM adalah katalog layanan dan proyek, bukan salinan produk tanpa konteks dari SND. Komponen yang dipakai bisa berasal dari SND atau pemasok sesuai kebutuhan.

## Skema data yang disarankan

| Field | Wajib | Keterangan |
|---|---|---|
| `id` | Ya | ID stabil internal |
| `slug` | Ya | URL unik |
| `businessUnit` | Ya | `APP`, `SND`, atau `ASM` |
| `type` | Ya | `product` atau `service` |
| `name` | Ya | Nama produk/layanan yang tervalidasi |
| `brand` | Jika ada | Brand pemilik produk, bukan otomatis brand ORION |
| `model` | Jika ada | Model/SKU dari sumber |
| `category` | Ya | Kategori katalog |
| `shortDescription` | Ya sebelum publikasi | Ringkasan faktual, ditulis ulang tanpa mengubah makna |
| `specifications` | Jika sumber ada | Objek key/value spesifikasi dengan referensi sumber |
| `images` | Jika ada | URL/file, lisensi/izin, sumber dan alt text |
| `sourcePartner` | Ya untuk produk mitra | Nama produsen/pemasok yang menjadi sumber data |
| `sourceUrl` | Ya | URL halaman resmi produk/katalog |
| `sourceCheckedAt` | Ya | Tanggal terakhir verifikasi |
| `price` | Opsional | Jangan diisi sampai aturan harga internal dikonfirmasi |
| `priceSource` | Jika harga ada | Sumber dan tanggal harga diperiksa |
| `availability` | Opsional | Hanya jika ada data mutakhir yang bisa dipertanggungjawabkan |
| `marketplaceUrl` | Opsional | Tautan Shopee/listing yang diverifikasi |
| `inquiryEnabled` | Ya | Apakah CTA inquiry dapat dipakai setelah nomor dikonfirmasi |
| `publicationStatus` | Ya | `draft`, `review`, atau `published` |
| `partnerRelationshipVerified` | Ya untuk klaim kemitraan | Status dokumentasi kemitraan, bukan perkiraan |

## Aturan publikasi

- Produk baru masuk sebagai `draft`.
- Wajib ada sumber untuk nama/model/spesifikasi yang ditampilkan.
- Jangan menyalin foto dari halaman lain sebelum memastikan hak penggunaan/izin.
- Harga yang terlihat pada website mitra bisa berbeda dari harga ORION/reseller. Jangan menganggapnya harga jual ORION.
- Aturan harga di dokumen sumber merujuk pada lampiran `Orion.xlsx`, tetapi file tersebut belum disertakan pada materi yang tersedia; tidak ada harga jual ORION yang ditetapkan di fondasi ini.
- Jangan tampilkan stok real-time jika tidak ada integrasi/sumber inventaris.
- `published` berarti isi sudah dicek dan CTA/tautan berfungsi.

## Alur produk

Temukan sumber → ekstrak model dan spesifikasi → catat URL & tanggal → cek harga/aturan internal → cek izin gambar → konfirmasi status mitra → isi listing → tinjau → publikasikan.
