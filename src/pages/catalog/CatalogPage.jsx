import { ArrowRight, AudioLines, Info, Package, Shirt, Wrench } from 'lucide-react'
import { Link } from 'react-router'
import PageIntro from '../../components/shared/PageIntro.jsx'
import { getBusiness } from '../../data/businesses.js'
import { catalogContent, partnerSources } from '../../data/showroomContent.js'
import '../../styles/phase-5-showroom.css'

const artIcons = { apparel: Shirt, audio: AudioLines, assembly: Wrench, custom: Package }

export default function CatalogPage({ businessId }) {
  const business = getBusiness(businessId)
  if (!business) return null
  const isAsm = businessId === 'asm'
  const entries = catalogContent[businessId] || []
  const partners = partnerSources[businessId] || []
  return (
    <main className="sm5-page sm5-catalog">
      <PageIntro
        eyebrow={`${business.code} / ${isAsm ? 'SERVICE DIRECTORY' : 'CATALOGUE'}`}
        title={isAsm ? 'Ruang lingkup layanan ASM.' : `Jelajahi kategori ${business.name}.`}
        description={isAsm ? 'Pahami tahapan konsultasi dan area layanan sebelum mendiskusikan konfigurasi sound system custom.' : `Halaman ini menyiapkan struktur katalog ${business.name}. Item yang terlihat merupakan preview kategori untuk keperluan pengembangan UI, bukan daftar model yang telah dikonfirmasi tersedia.`}
        code={`${business.code} / ${isAsm ? 'SERVICES' : 'CATALOG'}`}
        note="Katalog publik akan diisi bertahap setelah sumber, spesifikasi, harga, dan media diverifikasi."
        breadcrumbs={[{ label: business.name, href: `/${businessId}` }, { label: isAsm ? 'Layanan' : 'Katalog' }]}
      />
      <section className="sm5-container sm5-section">
        <div className="sm5-catalog-banner"><div className="sm5-catalog-banner__icon"><Info size={21} aria-hidden="true" /></div><div><strong>{isAsm ? 'Halaman layanan — tahap informasi' : 'Preview kategori — belum menjadi katalog produk aktual'}</strong><p>{isAsm ? 'Belum ada harga paket atau daftar perangkat tetap. Rincian disusun setelah kebutuhan penggunaan dan komponen dibahas.' : 'Nama model, varian, spesifikasi, harga jual ORION, stok, serta tautan transaksi tidak direka pada fase ini.'}</p></div></div>
        <div className="sm5-section-heading"><div><span className="sm5-eyebrow">{isAsm ? 'SERVICE AREAS' : 'CATEGORY INDEX'} / {business.code}</span><h2>{isAsm ? 'Pilih titik awal konsultasi.' : 'Kategori untuk dijelajahi.'}</h2></div><p>{isAsm ? 'Setiap konsultasi akan disesuaikan dengan kebutuhan penggunaan.' : 'Buka kategori untuk melihat format detail yang akan dipakai ketika data produk terverifikasi tersedia.'}</p></div>
        <div className="sm5-category-grid sm5-category-grid--catalog">
          {entries.map((entry, index) => {
            const EntryIcon = artIcons[entry.icon] || Package
            const path = `/${businessId}/${isAsm ? 'layanan' : 'produk'}/${entry.slug}`
            return <article className="sm5-category-card" key={entry.slug}><Link to={path} className="sm5-category-card__link"><div className="sm5-category-card__visual"><span>{String(index + 1).padStart(2, '0')}</span><EntryIcon size={38} strokeWidth={1.3} aria-hidden="true" /><span className="sm5-demo-label">{isAsm ? 'SERVICE PREVIEW' : 'CATEGORY PREVIEW'}</span></div><div className="sm5-category-card__body"><span className="sm5-eyebrow">{isAsm ? 'RUANG LINGKUP' : 'KATEGORI'}</span><h3>{entry.title}</h3><p>{entry.description}</p><span className="sm5-inline-link">Buka detail <ArrowRight size={15} aria-hidden="true" /></span></div></Link></article>
          })}
        </div>
      </section>
      {!isAsm && partners.length > 0 && <section className="sm5-partner-strip"><div className="sm5-container"><div className="sm5-section-heading"><div><span className="sm5-eyebrow">REFERENCE CHANNELS</span><h2>Sumber untuk riset katalog.</h2></div><p>Gunakan sumber berikut sebagai titik awal pemeriksaan. Harga mitra bukan otomatis harga jual ORION.</p></div><div className="sm5-source-compact">{partners.map((partner) => <div key={partner.name}><strong>{partner.name}</strong><span>{partner.note}</span><a href={partner.links[0].href} target="_blank" rel="noreferrer">Buka sumber utama <ArrowRight size={14} aria-hidden="true" /></a></div>)}</div></div></section>}
      <section className="sm5-container sm5-cta-wrap"><div className="sm5-cta-band"><div><span className="sm5-eyebrow">NEED A RECOMMENDATION?</span><h2>{isAsm ? 'Diskusikan rencana sistem audio Anda.' : 'Tanyakan kategori yang Anda butuhkan.'}</h2><p>Hubungi tim melalui email sementara. Kanal WhatsApp lengkap dan tautan toko ShowMarket akan ditambahkan setelah dikonfirmasi.</p></div><Link className="sm5-button sm5-button--light" to="/kontak">Lihat kontak<ArrowRight size={16} aria-hidden="true" /></Link></div></section>
    </main>
  )
}
