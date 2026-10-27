
/** Public-facing business descriptions based on the supplied ORION brief. */
export const businesses = {
  app: {
    id: 'app',
    code: 'APP',
    name: 'ORITLE Apparel',
    shortName: 'ORITLE',
    eyebrow: 'APPAREL & CUSTOM',
    title: 'Apparel yang mengikuti kebutuhan Anda.',
    description: 'Lini apparel untuk kebutuhan kaos, polo, jaket, hoodie, grosir, dan sablon custom bagi personal, komunitas, maupun bisnis.',
    detail: 'ShowMarket akan menjadi tempat untuk mengenali kategori apparel dan mengirim permintaan kebutuhan custom. Produk, minimum pemesanan, pilihan warna, ukuran, dan harga akan ditampilkan setelah data dan ketentuannya diverifikasi.',
    tags: ['T-shirt & polo', 'Jaket & hoodie', 'Grosir', 'Sablon custom'],
    accent: 'orange',
    partnerNames: ['Cititex', 'New States Apparel'],
    catalogPath: '/app/katalog',
  },
  snd: {
    id: 'snd',
    code: 'SND',
    name: 'iQIFI Audio',
    shortName: 'iQIFI AUDIO',
    eyebrow: 'SOUND SYSTEM & ELECTRONICS',
    title: 'Kenali perangkat audio untuk berbagai kebutuhan.',
    description: 'Lini perangkat audio dan elektronik yang mencakup speaker/driver, power amplifier, mixer, mikrofon, prosesor, dan komponen pendukung.',
    detail: 'Katalog akan disusun dari sumber mitra yang tercantum dalam brief. Model, spesifikasi teknis, ketersediaan, harga jual ORION, dan status penggunaan media wajib diverifikasi sebelum produk dipublikasikan.',
    tags: ['Speaker & driver', 'Amplifier & mixer', 'Mikrofon', 'Pro audio'],
    accent: 'silver',
    partnerNames: ['ACR', 'Legacy', 'JIC', 'Betavo', 'Ashley', 'Fest by Brewog'],
    catalogPath: '/snd/katalog',
  },
  asm: {
    id: 'asm',
    code: 'ASM',
    name: 'Audio System Assembly',
    shortName: 'ASM',
    eyebrow: 'CUSTOM AUDIO SYSTEM',
    title: 'Rencanakan sistem audio sesuai tujuan penggunaan.',
    description: 'Layanan konsultasi dan perencanaan perakitan paket sound system custom berdasarkan tujuan penggunaan, ruang/lokasi, konfigurasi, dan anggaran.',
    detail: 'Tahap awal layanan adalah memahami kebutuhan. Rekomendasi konfigurasi dan estimasi biaya harus disusun berdasarkan konsultasi dan perangkat yang benar-benar tersedia; website ini belum menerima pemesanan otomatis.',
    tags: ['Konsultasi kebutuhan', 'Rencana konfigurasi', 'Perakitan custom'],
    accent: 'blue',
    partnerNames: ['Mengacu pada lini perangkat audio SND'],
    catalogPath: '/asm/katalog',
  },
}

export const getBusiness = (businessId) => businesses[businessId] || null
