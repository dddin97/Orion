import { ArrowLeft, ArrowRight, AudioLines, CircleHelp, Package, Shirt, Wrench } from 'lucide-react'
import { Link, useParams } from 'react-router'
import PageIntro from '../../components/shared/PageIntro.jsx'
import { getBusiness } from '../../data/businesses.js'
import { catalogContent, getCatalogEntry } from '../../data/showroomContent.js'
import '../../styles/phase-5-showroom.css'

const artIcons = { apparel: Shirt, audio: AudioLines, assembly: Wrench, custom: Package }

export default function ProductDetailPage({ businessId }) {
  const { slug } = useParams()
  const business = getBusiness(businessId)
  if (!business) return null
  const isAsm = businessId === 'asm'
  const entry = getCatalogEntry(businessId, slug)
  const basePath = business.catalogPath
  const itemLabel = isAsm ? 'layanan' : 'produk'
  if (!entry) {
    return <main className="sm5-page"><PageIntro eyebrow={`${business.code} / DETAIL`} title={`${isAsm ? 'Layanan' : 'Item'} belum ditemukan.`} description="Alamat detail dikenali oleh sistem, tetapi belum terhubung ke konten kategori atau item yang disiapkan." code="CONTENT / NOT FOUND" breadcrumbs={[{ label: business.name, href: `/${businessId}` }, { label: isAsm ? 'Layanan' : 'Katalog', href: basePath }, { label: 'Detail' }]} /><section className="sm5-container sm5-section"><div className="sm5-empty-state"><CircleHelp size={34} aria-hidden="true" /><h2>Belum ada konten untuk alamat ini.</h2><p>Periksa kembali tautan atau kembali ke daftar kategori. Data model dan spesifikasi tidak dibuat secara otomatis.</p><Link className="sm5-button sm5-button--primary" to={basePath}><ArrowLeft size={16} aria-hidden="true" />Kembali ke {isAsm ? 'layanan' : 'katalog'}</Link></div></section></main>
  }
  const Icon = artIcons[entry.icon] || Package
  return (
    <main className="sm5-page sm5-detail">
      <PageIntro
        eyebrow={`${business.code} / ${isAsm ? 'SERVICE PREVIEW' : 'CATEGORY PREVIEW'}`}
        title={entry.title}
        description={entry.description}
        code={`${business.code} / DETAIL`}
        note="Contoh tampilan detail untuk pengembangan frontend."
        breadcrumbs={[{ label: business.name, href: `/${businessId}` }, { label: isAsm ? 'Layanan' : 'Katalog', href: basePath }, { label: entry.title }]}
      />
      <section className="sm5-container sm5-section">
        <div className="sm5-detail-grid">
          <div className="sm5-detail-art"><span className="sm5-detail-art__corner">{business.code} / PREVIEW</span><Icon size={76} strokeWidth={1.1} aria-hidden="true" /><span className="sm5-detail-art__caption">MEDIA PLACEHOLDER<br />BUKAN FOTO PRODUK AKTUAL</span></div>
          <div className="sm5-detail-copy"><span className="sm5-status-label">{isAsm ? 'CONTOH STRUKTUR LAYANAN' : 'KATEGORI CONTOH — BUKAN SKU'}</span><h2>{isAsm ? 'Rincian ditentukan melalui konsultasi.' : 'Informasi item akan dilengkapi setelah verifikasi.'}</h2><p>{entry.details}</p>
            <div className="sm5-detail-facts"><div><span>{isAsm ? 'Ruang lingkup' : 'Model / varian'}</span><strong>{isAsm ? 'Dikonfirmasi saat diskusi' : 'Belum diverifikasi'}</strong></div><div><span>{isAsm ? 'Estimasi biaya' : 'Spesifikasi'}</span><strong>Belum dipublikasikan</strong></div><div><span>{isAsm ? 'Jadwal' : 'Harga jual ORION'}</span><strong>Perlu konfirmasi</strong></div><div><span>{isAsm ? 'Status pemesanan' : 'Ketersediaan'}</span><strong>Belum dikonfirmasi</strong></div></div>
            <div className="sm5-actions"><a className="sm5-button sm5-button--primary" href={`mailto:orion.ltd@gmail.com?subject=${encodeURIComponent(`Pertanyaan ${business.code} - ${entry.title}`)}&body=${encodeURIComponent(`Halo ORION, saya ingin bertanya mengenai ${entry.title}. Mohon informasi lebih lanjut setelah detailnya tersedia.`)}`}>Tanyakan melalui email <ArrowRight size={16} aria-hidden="true" /></a><Link className="sm5-button sm5-button--secondary" to={basePath}><ArrowLeft size={16} aria-hidden="true" />Kembali ke daftar</Link></div>
            <p className="sm5-footnote">Label dan ilustrasi di halaman ini hanya menunjukkan struktur UI. Tidak ada klaim bahwa produk atau layanan tertentu sedang tersedia untuk dipesan.</p>
          </div>
        </div>
        <div className="sm5-related"><div><span className="sm5-eyebrow">RELATED / {business.code}</span><h2>Kembali menjelajahi {isAsm ? 'layanan' : 'kategori'}.</h2></div><div className="sm5-related-links">{catalogContent[businessId].filter((item) => item.slug !== entry.slug).map((item) => <Link to={`/${businessId}/${isAsm ? 'layanan' : 'produk'}/${item.slug}`} key={item.slug}>{item.title}<ArrowRight size={14} aria-hidden="true" /></Link>)}</div></div>
      </section>
    </main>
  )
}
