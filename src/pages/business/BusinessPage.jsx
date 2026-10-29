
import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router'
import PageIntro from '../../components/shared/PageIntro.jsx'
import { Badge, Button, MediaPlaceholder, StatusMessage } from '../../components/ui/index.js'
import { getBusiness } from '../../data/businesses.js'
import './BusinessPage.css'

export default function BusinessPage({ businessId }) {
  const business = getBusiness(businessId)
  if (!business) return null

  return (
    <main className={`business-route business-route--${business.accent}`}>
      <PageIntro
        eyebrow={`${business.code} / ${business.eyebrow}`}
        title={business.title}
        description={business.description}
        code={`${business.code} / 03`}
        note="Satu ekosistem ORION, dengan fokus usaha yang berbeda."
        breadcrumbs={[{ label: business.name }]}
      />

      <section className="route-section route-container">
        <div className="business-route__grid">
          <div className="business-route__main">
            <span className="route-eyebrow">RUANG LINGKUP / {business.code}</span>
            <h2>{business.name}</h2>
            <p className="business-route__description">{business.detail}</p>
            <div className="business-route__tags">
              {business.tags.map((tag) => <Badge key={tag} variant="neutral">{tag}</Badge>)}
            </div>
            <div className="route-actions">
              <Button href={business.catalogPath} size="lg">Jelajahi {business.code === 'ASM' ? 'layanan' : 'katalog'} <ArrowUpRight size={16} aria-hidden="true" /></Button>
              <Button href="/kontak" variant="secondary" size="lg">Hubungi ORION <ArrowDownRight size={16} aria-hidden="true" /></Button>
            </div>
          </div>

          <aside className="business-route__aside">
            <MediaPlaceholder aspectRatio="4:3" type="image" label={business.name} caption={`MEDIA ${business.code} / PLACEHOLDER`} />
            <StatusMessage variant="info" title="Halaman sedang disiapkan">
              Detail produk, media, harga, dan portofolio akan ditampilkan setelah data serta izin publikasinya terverifikasi.
            </StatusMessage>
          </aside>
        </div>
      </section>

      <section className="route-section business-route__references">
        <div className="route-container">
          <div className="business-route__references-heading">
            <div><span className="route-eyebrow">REFERENCE / SOURCES</span><h2>Sumber informasi yang terkait.</h2></div>
            <p>Tautan ini merupakan referensi yang tercantum dalam brief, bukan pernyataan bahwa seluruh produk atau materi visual telah mendapat izin publikasi.</p>
          </div>
          <div className="business-route__reference-list">
            {business.partnerNames.map((partner, index) => (
              <div className="business-route__reference-item" key={partner}>
                <span>{String(index + 1).padStart(2, '0')}</span><strong>{partner}</strong><span className="business-route__reference-indicator" aria-hidden="true" />
              </div>
            ))}
          </div>
          <p className="business-route__reference-footnote">Informasi produk dan harga jual ORION tidak diasumsikan sama dengan katalog pemasok.</p>
          <div className="business-route__bottom-links">
            <Link to="/portofolio">Lihat struktur portofolio <ArrowUpRight size={14} aria-hidden="true" /></Link>
            <Link to="/tentang">Tentang ShowMarket <ArrowUpRight size={14} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>
    </main>
  )
}
