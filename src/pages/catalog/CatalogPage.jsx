
import { ArrowLeft, ArrowUpRight, PackageSearch } from 'lucide-react'
import PageIntro from '../../components/shared/PageIntro.jsx'
import { Button, StatusMessage } from '../../components/ui/index.js'
import { getBusiness } from '../../data/businesses.js'
import './CatalogPage.css'

export default function CatalogPage({ businessId }) {
  const business = getBusiness(businessId)
  if (!business) return null
  const isService = businessId === 'asm'
  const pageLabel = isService ? 'Layanan' : 'Katalog'

  return (
    <main>
      <PageIntro
        eyebrow={`${business.code} / ${pageLabel.toUpperCase()}`}
        title={isService ? 'Ruang lingkup layanan ASM.' : `Jelajahi ${business.name}.`}
        description={isService
          ? 'Halaman ini akan menampilkan alur konsultasi, ruang lingkup perakitan, dan contoh proyek setelah informasi layanan difinalisasi.'
          : 'Halaman katalog menyiapkan tempat untuk daftar produk, kategori, dan detail item. Produk nyata baru akan dimasukkan setelah data dari sumbernya diverifikasi.'}
        code={`${business.code} / CATALOG`}
        breadcrumbs={[{ label: business.name, href: `/${business.id}` }, { label: pageLabel }]}
      />
      <section className="route-section route-container catalog-route">
        <div className="catalog-route__heading">
          <span className="catalog-route__icon"><PackageSearch size={24} aria-hidden="true" /></span>
          <div><span className="route-eyebrow">STATUS KONTEN / {business.code}</span><h2>{isService ? 'Rincian layanan sedang disiapkan.' : 'Katalog belum dipublikasikan.'}</h2></div>
        </div>
        <StatusMessage variant="info" title="Data produk belum tersedia untuk publikasi">
          {isService
            ? 'Kami belum menampilkan daftar paket atau biaya rakit karena perlu disusun sesuai kebutuhan dan perangkat yang benar-benar tersedia.'
            : 'Model, kategori, spesifikasi, gambar, harga jual ORION, dan ketersediaan harus diverifikasi terlebih dahulu. Tidak ada harga atau spesifikasi rekaan pada halaman ini.'}
        </StatusMessage>
        <div className="catalog-route__checklist">
          {(isService
            ? ['Pemetaan kebutuhan penggunaan', 'Rencana konfigurasi perangkat', 'Diskusi anggaran dan ruang lingkup']
            : ['Nama dan model produk terverifikasi', 'Spesifikasi dari sumber yang dapat ditelusuri', 'Harga dan ketersediaan dikonfirmasi', 'Status izin media diperiksa']
          ).map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, '0')}</span><p>{item}</p></div>)}
        </div>
        <div className="route-actions">
          <Button href={`/${business.id}`} variant="secondary"><ArrowLeft size={15} aria-hidden="true" /> Kembali ke {business.code}</Button>
          <Button href="/kontak">Tanya lebih lanjut <ArrowUpRight size={15} aria-hidden="true" /></Button>
        </div>
        <p className="catalog-route__small-note">Data contoh lokal akan ditambahkan pada Fase 5; pencarian, filter, sorting, dan interaksi katalog dikerjakan pada Fase 6.</p>
      </section>
    </main>
  )
}
