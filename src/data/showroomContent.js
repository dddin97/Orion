/**
 * Konten showcase Fase 5.
 * Semua item katalog di bawah adalah PREVIEW KATEGORI/UI, bukan SKU atau produk nyata.
 * Model, spesifikasi, harga, stok, dan media produk hanya boleh ditambahkan setelah diverifikasi.
 */
export const partnerSources = {
  app: [
    {
      name: 'Cititex',
      note: 'Sumber referensi apparel dan produk polos.',
      links: [
        { label: 'Website', href: 'https://cititex.com/' },
        { label: 'Shopee', href: 'https://shopee.co.id/cititex' },
        { label: 'Instagram', href: 'https://www.instagram.com/cititex.id/' },
      ],
    },
    {
      name: 'New States Apparel',
      note: 'Sumber referensi produk dan apparel.',
      links: [
        { label: 'Shopee', href: 'https://shopee.co.id/newstatesapparelofficial' },
        { label: 'Instagram', href: 'https://www.instagram.com/newstatesapparel/' },
      ],
    },
  ],
  snd: [
    { name: 'ACR', note: 'Referensi speaker dan komponen audio.', links: [{ label: 'Website', href: 'https://acrspeaker.com/' }, { label: 'Shopee', href: 'https://shopee.co.id/acrspeaker.official' }, { label: 'Instagram', href: 'https://www.instagram.com/acrspeaker/' }] },
    { name: 'Legacy', note: 'Referensi lini produk audio.', links: [{ label: 'Website', href: 'https://www.legacy.us.com/' }, { label: 'Instagram', href: 'https://www.instagram.com/legacy.speaker/' }] },
    { name: 'JIC', note: 'Referensi lini produk speaker.', links: [{ label: 'Website', href: 'https://jicspeaker.com/' }] },
    { name: 'Betavo', note: 'Referensi produk audio.', links: [{ label: 'Website', href: 'https://www.betavoaudio.com/' }, { label: 'Shopee', href: 'https://shopee.co.id/betavoaudio' }, { label: 'Instagram', href: 'https://www.instagram.com/betavoaudioofficial/' }] },
    { name: 'Ashley', note: 'Referensi perangkat pro audio.', links: [{ label: 'Website global', href: 'https://www.ashleyproaudio.com/' }, { label: 'Indonesia', href: 'https://ashleyaudioindonesia.com/' }, { label: 'Shopee', href: 'https://shopee.co.id/ashleyaudio' }, { label: 'Instagram', href: 'https://www.instagram.com/ashley_proaudio/' }] },
    { name: 'Fest by Brewog', note: 'Referensi kanal audio dan produk.', links: [{ label: 'Shopee', href: 'https://shopee.co.id/brewog.fest_indonesia' }, { label: 'Fest Instagram', href: 'https://www.instagram.com/brewogfestindonesia/' }, { label: 'Brewog Audio', href: 'https://www.instagram.com/brewogaudio/' }, { label: 'Huper Audio', href: 'https://www.instagram.com/brewoghuperaudio/' }, { label: 'Betavo Indonesia', href: 'https://www.instagram.com/brewogbetavo_indonesia/' }, { label: 'Ashley Nusantara', href: 'https://www.instagram.com/brewogashleynusantara/' }] },
  ],
};

/**
 * Kartu di sini merepresentasikan kategori yang dapat diisi nanti,
 * bukan klaim bahwa model/produk tertentu telah tersedia.
 */
export const catalogContent = {
  app: [
    { slug: 't-shirt-polo', title: 'T-shirt & polo', kind: 'category', icon: 'apparel', description: 'Ruang katalog untuk kaos dan polo polos atau kebutuhan apparel harian.', details: 'Pilihan bahan, warna, ukuran, minimum pemesanan, dan model akan dimasukkan setelah sumber produk serta ketentuannya diverifikasi.' },
    { slug: 'jaket-hoodie', title: 'Jaket & hoodie', kind: 'category', icon: 'apparel', description: 'Ruang katalog untuk jaket, hoodie, dan apparel outerwear.', details: 'Varian produk, bahan, ukuran, dan opsi pemesanan belum dipublikasikan.' },
    { slug: 'sablon-custom', title: 'Sablon custom', kind: 'service-preview', icon: 'custom', description: 'Area informasi untuk kebutuhan sablon custom sesuai desain atau kebutuhan pelanggan.', details: 'Teknik sablon, ketentuan file desain, kuantitas minimum, dan estimasi pengerjaan dikonfirmasi saat konsultasi.' },
  ],
  snd: [
    { slug: 'speaker-driver', title: 'Speaker & driver', kind: 'category', icon: 'audio', description: 'Ruang katalog untuk speaker, driver, dan komponen terkait.', details: 'Ukuran, model, parameter teknis, dan kecocokan penggunaan hanya akan ditampilkan dari spesifikasi sumber resmi yang terverifikasi.' },
    { slug: 'amplifier-mixer', title: 'Amplifier & mixer', kind: 'category', icon: 'audio', description: 'Ruang katalog untuk power amplifier, mixer, dan perangkat pengolah sinyal.', details: 'Model, daya, konektivitas, spesifikasi teknis, harga, dan ketersediaan belum dipublikasikan.' },
    { slug: 'mikrofon-processing', title: 'Mikrofon & processing', kind: 'category', icon: 'audio', description: 'Ruang katalog untuk mikrofon, prosesor, DLMS, dan perangkat pendukung audio.', details: 'Katalog spesifik per model akan diisi setelah referensi resmi diperiksa.' },
  ],
  asm: [
    { slug: 'konsultasi-kebutuhan', title: 'Konsultasi kebutuhan', kind: 'service-preview', icon: 'assembly', description: 'Memetakan tujuan penggunaan, lokasi, cakupan acara, dan kebutuhan dasar sistem audio.', details: 'Tahap awal untuk menyusun kebutuhan, bukan pemesanan otomatis atau konfirmasi ketersediaan perangkat.' },
    { slug: 'rencana-konfigurasi', title: 'Perencanaan konfigurasi', kind: 'service-preview', icon: 'assembly', description: 'Menyusun gambaran konfigurasi perangkat berdasarkan kebutuhan dan anggaran yang dibahas.', details: 'Konfigurasi dan estimasi biaya ditentukan setelah kebutuhan serta perangkat yang relevan dikonfirmasi.' },
    { slug: 'rakit-custom', title: 'Perakitan sound system custom', kind: 'service-preview', icon: 'assembly', description: 'Area informasi layanan perakitan sound system yang disusun sesuai kebutuhan penggunaan.', details: 'Ruang lingkup, komponen, lokasi pengerjaan, jadwal, dan biaya harus dikonfirmasi terlebih dahulu.' },
  ],
};

export function getCatalogEntry(businessId, slug) {
  return (catalogContent[businessId] || []).find((item) => item.slug === slug) || null;
}

/** Slot dokumentasi portofolio — bukan proyek/hasil kerja yang diklaim sudah selesai. */
export const portfolioSlots = [
  { slug: 'apparel-custom', code: 'APP', title: 'Apparel & custom', description: 'Slot dokumentasi untuk contoh apparel, hasil sablon, atau pesanan custom yang telah memperoleh izin publikasi.', note: 'Dokumentasi dan izin penggunaan foto belum difinalisasi.' },
  { slug: 'audio-electronics', code: 'SND', title: 'Audio & electronics', description: 'Slot dokumentasi untuk perangkat, demo sistem, atau kegiatan terkait audio yang terverifikasi.', note: 'Belum ada media produk atau dokumentasi pekerjaan yang dipublikasikan.' },
  { slug: 'system-assembly', code: 'ASM', title: 'Sound system assembly', description: 'Slot dokumentasi untuk proyek rakitan, konfigurasi sistem, atau instalasi yang telah mendapat izin.', note: 'Foto, detail konfigurasi, dan izin pemilik proyek masih menunggu konfirmasi.' },
];

export function getPortfolioSlot(slug) {
  return portfolioSlots.find((item) => item.slug === slug) || null;
}
