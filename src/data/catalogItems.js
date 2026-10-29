/**
 * Local demo entries for Phase 6 interactions.
 * These are category/service previews, NOT verified product listings.
 * Do not add prices, stock, model numbers or technical specifications until verified.
 */
const appItems = [
  {
    id: 'app-tshirt-polo', slug: 't-shirt-polo', name: 'T-shirt & polo', category: 'Pakaian dasar',
    description: 'Kategori untuk kebutuhan kaos, polo, komunitas, seragam, dan identitas usaha. Detail bahan, ukuran, minimum order, serta harga menunggu verifikasi.',
    keywords: ['kaos', 'tshirt', 't-shirt', 'polo', 'seragam', 'komunitas', 'grosir'],
    statusLabel: 'Preview kategori', statusVariant: 'info',
    partnerReferences: ['Cititex', 'New States Apparel'],
    galleryLabel: 'Slot media kategori apparel',
  },
  {
    id: 'app-jaket-hoodie', slug: 'jaket-hoodie', name: 'Jaket & hoodie', category: 'Outerwear',
    description: 'Kategori outerwear untuk kebutuhan personal, komunitas, maupun bisnis. Model, bahan, pilihan warna, ukuran, dan harga belum ditetapkan.',
    keywords: ['jaket', 'hoodie', 'outerwear', 'zip hoodie', 'sweater'],
    statusLabel: 'Preview kategori', statusVariant: 'info',
    partnerReferences: ['Cititex', 'New States Apparel'],
    galleryLabel: 'Slot media outerwear',
  },
  {
    id: 'app-sablon-custom', slug: 'sablon-custom', name: 'Sablon custom', category: 'Layanan custom',
    description: 'Area informasi untuk kebutuhan sablon khusus. Jenis pengerjaan, ketentuan jumlah, file desain, dan estimasi biaya perlu dikonfirmasi melalui konsultasi.',
    keywords: ['sablon', 'custom', 'desain', 'print', 'cetak', 'kaos custom'],
    statusLabel: 'Preview layanan', statusVariant: 'warning',
    partnerReferences: ['Cititex', 'New States Apparel'],
    galleryLabel: 'Slot media sablon custom',
  },
  {
    id: 'app-grosir-apparel', slug: 'grosir-apparel', name: 'Kebutuhan apparel grosir', category: 'Grosir',
    description: 'Kategori untuk menjajaki kebutuhan pakaian dalam jumlah grosir. Harga bertingkat, minimum order, dan ketersediaan tidak ditampilkan sebelum dikonfirmasi.',
    keywords: ['grosir', 'bulk', 'borongan', 'reseller', 'kaos polos'],
    statusLabel: 'Preview kategori', statusVariant: 'info',
    partnerReferences: ['Cititex', 'New States Apparel'],
    galleryLabel: 'Slot media grosir apparel',
  },
]

const sndItems = [
  {
    id: 'snd-speaker-driver', slug: 'speaker-driver', name: 'Speaker & driver', category: 'Speaker',
    description: 'Kategori untuk menjelajahi perangkat speaker dan driver dari lini mitra. Model, ukuran, parameter teknis, harga, dan stok belum dimasukkan.',
    keywords: ['speaker', 'driver', 'woofer', 'subwoofer', 'midrange', 'tweeter', 'komponen audio'],
    statusLabel: 'Preview kategori', statusVariant: 'info',
    partnerReferences: ['ACR', 'Legacy', 'JIC', 'Betavo', 'Ashley', 'Fest by Brewog'],
    galleryLabel: 'Slot media speaker dan driver',
  },
  {
    id: 'snd-amplifier-mixer', slug: 'amplifier-mixer', name: 'Power amplifier & mixer', category: 'Elektronik audio',
    description: 'Kategori perangkat penguat daya dan mixer. Daya keluaran, konektivitas, model, harga, dan ketersediaan harus mengikuti data resmi produk.',
    keywords: ['power amplifier', 'amplifier', 'mixer', 'power', 'penguat', 'audio'],
    statusLabel: 'Preview kategori', statusVariant: 'info',
    partnerReferences: ['ACR', 'Legacy', 'JIC', 'Betavo', 'Ashley', 'Fest by Brewog'],
    galleryLabel: 'Slot media amplifier dan mixer',
  },
  {
    id: 'snd-mikrofon', slug: 'mikrofon', name: 'Mikrofon', category: 'Perangkat audio',
    description: 'Kategori untuk kebutuhan mikrofon. Tipe, pola tangkap, koneksi, aksesori, dan spesifikasi belum ditentukan pada data demo ini.',
    keywords: ['mic', 'microphone', 'mikrofon', 'wireless', 'kabel'],
    statusLabel: 'Preview kategori', statusVariant: 'info',
    partnerReferences: ['ACR', 'Legacy', 'JIC', 'Betavo', 'Ashley', 'Fest by Brewog'],
    galleryLabel: 'Slot media mikrofon',
  },
  {
    id: 'snd-pro-audio', slug: 'pro-audio-processing', name: 'Pro audio & processing', category: 'Pro audio',
    description: 'Kategori untuk perangkat pemrosesan sinyal dan perlengkapan pro audio. Fungsi, model, fitur, dan spesifikasi akan diisi dari sumber terverifikasi.',
    keywords: ['processor', 'prosesor', 'DSP', 'DLMS', 'equalizer', 'pro audio'],
    statusLabel: 'Preview kategori', statusVariant: 'info',
    partnerReferences: ['ACR', 'Legacy', 'JIC', 'Betavo', 'Ashley', 'Fest by Brewog'],
    galleryLabel: 'Slot media pro audio',
  },
  {
    id: 'snd-sewa-audio', slug: 'sewa-sound-system', name: 'Sewa sound system', category: 'Layanan audio',
    description: 'Area informasi layanan sewa sound system untuk acara. Paket, cakupan wilayah, ketersediaan tanggal, dan estimasi biaya harus dikonfirmasi terlebih dahulu.',
    keywords: ['rental', 'sewa', 'acara', 'event', 'sound system'],
    statusLabel: 'Preview layanan', statusVariant: 'warning',
    partnerReferences: [],
    galleryLabel: 'Slot media layanan audio',
  },
]

const asmItems = [
  {
    id: 'asm-konsultasi', slug: 'konsultasi-kebutuhan', name: 'Konsultasi kebutuhan audio', category: 'Konsultasi',
    description: 'Langkah awal untuk membahas tujuan penggunaan, lokasi, kebutuhan pengguna, dan kisaran anggaran sebelum menyusun rencana sistem.',
    keywords: ['konsultasi', 'kebutuhan', 'ruangan', 'acara', 'anggaran'],
    statusLabel: 'Preview layanan', statusVariant: 'warning',
    partnerReferences: [], galleryLabel: 'Ilustrasi konsultasi audio',
  },
  {
    id: 'asm-konfigurasi', slug: 'perencanaan-konfigurasi', name: 'Perencanaan konfigurasi', category: 'Perencanaan',
    description: 'Tahap penyusunan kebutuhan perangkat dan rancangan konfigurasi. Rekomendasi akan dibuat berdasarkan kebutuhan aktual dan perangkat yang dapat diverifikasi.',
    keywords: ['konfigurasi', 'perencanaan', 'perangkat', 'sistem', 'rancangan'],
    statusLabel: 'Preview layanan', statusVariant: 'warning',
    partnerReferences: [], galleryLabel: 'Ilustrasi konfigurasi sound system',
  },
  {
    id: 'asm-rakit-custom', slug: 'perakitan-custom', name: 'Perakitan sound system custom', category: 'Perakitan',
    description: 'Area layanan untuk mendiskusikan perakitan sound system sesuai tujuan penggunaan. Ruang lingkup kerja, komponen, waktu, dan biaya belum menjadi penawaran resmi.',
    keywords: ['rakit', 'perakitan', 'custom', 'sound system', 'audio system'],
    statusLabel: 'Preview layanan', statusVariant: 'warning',
    partnerReferences: [], galleryLabel: 'Ilustrasi perakitan sound system',
  },
]

export const catalogItems = { app: appItems, snd: sndItems, asm: asmItems }

export function getCatalogItemsForBusiness(businessId) {
  return catalogItems[businessId] || []
}

export function getCatalogItem(businessId, slug) {
  return getCatalogItemsForBusiness(businessId).find((item) => item.slug === slug) || null
}

export function getCatalogItemHref(businessId, item) {
  if (!item) return `/${businessId}/katalog`
  return businessId === 'asm'
    ? `/asm/layanan/${item.slug}`
    : `/${businessId}/produk/${item.slug}`
}
