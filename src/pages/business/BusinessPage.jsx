import { ArrowRight, AudioLines, ExternalLink, Mail, MapPin, Package, Shirt, Wrench } from 'lucide-react'
import { Link } from 'react-router'
import PageIntro from '../../components/shared/PageIntro.jsx'
import { getBusiness } from '../../data/businesses.js'
import { catalogContent, partnerSources } from '../../data/showroomContent.js'
import '../../styles/phase-5-showroom.css'

const artIcons = { apparel: Shirt, audio: AudioLines, assembly: Wrench, custom: Package }

function PartnerCard({ partner, index }) {
  return (
    <article className="sm5-partner-card">
      <div className="sm5-partner-card__top">
        <span className="sm5-index">{String(index + 1).padStart(2, '0')}</span>
        <ExternalLink size={16} aria-hidden="true" />
      </div>
      <h3>{partner.name}</h3>
      <p>{partner.note}</p>
      <div className="sm5-source-links">
        {partner.links.map((link) => (
          <a key={`${partner.name}-${link.label}`} href={link.href} target="_blank" rel="noreferrer">
            {link.label}<ExternalLink size={12} aria-hidden="true" />
          </a>
        ))}
      </div>
    </article>
  )
}

export default function BusinessPage({ businessId }) {
  const business = getBusiness(businessId)
  if (!business) return null
  const entries = catalogContent[businessId] || []
  const partners = partnerSources[businessId] || []
  const Icon = businessId === 'app' ? Shirt : businessId === 'snd' ? AudioLines : Wrench
  const isAsm = businessId === 'asm'
  return (
    <main className={`sm5-page sm5-business sm5-business--${business.accent}`}>
      <PageIntro
        eyebrow={`${business.code} / ${business.eyebrow}`}
        title={business.title}
        description={business.description}
        code={`${business.code} / SHOWROOM`}
        note="Satu ekosistem ORION, dengan fokus usaha yang berbeda."
        breadcrumbs={[{ label: business.name }]}
      />

      <section className="sm5-container sm5-business-intro">
        <div className="sm5-business-copy">
          <span className="sm5-eyebrow">MENGENAL LINI / {business.code}</span>
          <h2>{isAsm ? 'Sistem yang dirancang dari kebutuhan.' : `Temukan arah kebutuhan ${business.code === 'APP' ? 'apparel' : 'audio'} Anda.`}</h2>
          <p>{business.detail}</p>
          <div className="sm5-tag-list">{business.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
          <div className="sm5-actions">
            <Link className="sm5-button sm5-button--primary" to={business.catalogPath}>{isAsm ? 'Jelajahi layanan' : 'Jelajahi katalog'}<ArrowRight size={16} aria-hidden="true" /></Link>
            <Link className="sm5-button sm5-button--secondary" to="/kontak">Hubungi ORION<ArrowRight size={16} aria-hidden="true" /></Link>
          </div>
        </div>
        <aside className="sm5-feature-panel">
          <div className="sm5-feature-panel__art"><Icon size={58} strokeWidth={1.25} aria-hidden="true" /><span>{business.code} / 0{businessId === 'app' ? 1 : businessId === 'snd' ? 2 : 3}</span></div>
          <p className="sm5-eyebrow">FOKUS UTAMA</p>
          <ul>{business.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
          <p className="sm5-note">Konten produk, media, dan detail harga akan ditampilkan setelah proses verifikasi.</p>
        </aside>
      </section>

      <section className="sm5-container sm5-section">
        <div className="sm5-section-heading">
          <div><span className="sm5-eyebrow">JELAJAHI / {business.code}</span><h2>{isAsm ? 'Tahapan layanan' : 'Kategori yang akan diisi'}</h2></div>
          <p>{isAsm ? 'Mulai dari pemetaan kebutuhan, lalu susun konfigurasi dan detail penawaran bersama tim.' : 'Kartu berikut adalah contoh susunan kategori website, bukan daftar produk atau SKU yang sudah tersedia.'}</p>
        </div>
        <div className="sm5-category-grid">
          {entries.map((entry, index) => {
            const EntryIcon = artIcons[entry.icon] || Package
            const path = `/${businessId}/${businessId === 'asm' ? 'layanan' : 'produk'}/${entry.slug}`
            return (
              <Link className="sm5-category-card" to={path} key={entry.slug}>
                <div className="sm5-category-card__visual"><span>{String(index + 1).padStart(2, '0')}</span><EntryIcon size={36} strokeWidth={1.35} aria-hidden="true" /><span className="sm5-demo-label">PREVIEW</span></div>
                <div className="sm5-category-card__body"><span className="sm5-eyebrow">{isAsm ? 'AREA LAYANAN' : 'KATEGORI CONTOH'}</span><h3>{entry.title}</h3><p>{entry.description}</p><span className="sm5-inline-link">Lihat detail <ArrowRight size={15} aria-hidden="true" /></span></div>
              </Link>
            )
          })}
        </div>
      </section>

      {businessId === 'asm' ? (
        <section className="sm5-location-band">
          <div className="sm5-container">
            <div className="sm5-section-heading"><div><span className="sm5-eyebrow">AREA LAYANAN / ASM</span><h2>Lokasi yang tercantum di brief.</h2></div><p>Informasi di bawah hanya tingkat wilayah. Alamat lengkap dan titik Google Maps belum dikonfirmasi.</p></div>
            <div className="sm5-location-grid">
              <article><MapPin size={20} aria-hidden="true" /><span>AREA 01</span><h3>Ngronggot, Nganjuk</h3><p>Jawa Timur · Alamat detail belum dipublikasikan.</p></article>
              <article><MapPin size={20} aria-hidden="true" /><span>AREA 02</span><h3>Ngajum, Malang</h3><p>Jawa Timur · Alamat detail belum dipublikasikan.</p></article>
            </div>
          </div>
        </section>
      ) : (
        <section className="sm5-container sm5-section">
          <div className="sm5-section-heading"><div><span className="sm5-eyebrow">PARTNER SOURCES / {business.code}</span><h2>Sumber referensi mitra.</h2></div><p>Tautan ini membantu pengunjung membuka kanal sumber. Pencantuman tautan bukan klaim status reseller resmi, afiliasi, atau izin memakai aset.</p></div>
          <div className="sm5-partner-grid">{partners.map((partner, index) => <PartnerCard partner={partner} index={index} key={partner.name} />)}</div>
          <p className="sm5-footnote">Logo, foto, video, dan materi promosi milik mitra tidak ditampilkan sebagai aset ShowMarket pada tahap ini.</p>
        </section>
      )}

      <section className="sm5-container sm5-cta-wrap">
        <div className="sm5-cta-band"><div><span className="sm5-eyebrow">NEXT STEP / {business.code}</span><h2>{isAsm ? 'Mulai dari kebutuhan, bukan asumsi.' : 'Ada kebutuhan spesifik? Mari diskusikan.'}</h2><p>{isAsm ? 'Sampaikan penggunaan, lokasi, dan anggaran awal agar kebutuhan dapat dipetakan sebelum penawaran.' : 'Produk, ketentuan pemesanan, dan harga akan dikonfirmasi berdasarkan data terbaru dari sumber terkait.'}</p></div><a className="sm5-button sm5-button--light" href={`mailto:orion.ltd@gmail.com?subject=${encodeURIComponent(`Pertanyaan ${business.code} - ShowMarket`)}`}>Kirim email<Mail size={16} aria-hidden="true" /></a></div>
      </section>
    </main>
  )
}
