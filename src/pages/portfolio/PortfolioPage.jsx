import { ArrowRight, AudioLines, FileImage, Shirt, Wrench } from 'lucide-react'
import { Link } from 'react-router'
import PageIntro from '../../components/shared/PageIntro.jsx'
import { portfolioSlots } from '../../data/showroomContent.js'
import '../../styles/phase-5-showroom.css'

const artIcons = { APP: Shirt, SND: AudioLines, ASM: Wrench }
export default function PortfolioPage() {
  return (
    <main className="sm5-page sm5-portfolio">
      <PageIntro eyebrow="PORTFOLIO / DOCUMENTATION" title="Ruang untuk karya yang dapat dibuktikan." description="Halaman portofolio menyiapkan struktur dokumentasi untuk apparel, perangkat audio, dan proyek rakitan sound system. Konten baru akan ditampilkan setelah detail pekerjaan dan izin publikasi diperiksa." code="WORK / ARCHIVE" note="Slot yang tampil bukan klaim proyek atau hasil kerja yang sudah selesai." breadcrumbs={[{ label: 'Portofolio' }]} />
      <section className="sm5-container sm5-section"><div className="sm5-catalog-banner"><div className="sm5-catalog-banner__icon"><FileImage size={21} aria-hidden="true" /></div><div><strong>Dokumentasi menunggu verifikasi.</strong><p>Foto mitra atau pelanggan tidak digunakan sebelum hak penggunaan dan izin publikasinya jelas.</p></div></div>
        <div className="sm5-section-heading"><div><span className="sm5-eyebrow">DOCUMENTATION SLOTS / 03</span><h2>Bidang dokumentasi.</h2></div><p>Struktur sudah tersedia agar contoh pekerjaan yang benar dapat ditambahkan tanpa mengubah tata letak utama.</p></div>
        <div className="sm5-portfolio-grid">{portfolioSlots.map((slot, index) => { const Icon = artIcons[slot.code]; return <article className="sm5-portfolio-card" key={slot.slug}><Link to={`/portofolio/${slot.slug}`} className="sm5-portfolio-card__link"><div className="sm5-portfolio-visual"><span>{String(index + 1).padStart(2, '0')} / {slot.code}</span><Icon size={45} strokeWidth={1.2} aria-hidden="true" /><span className="sm5-demo-label">MENUNGGU DOKUMENTASI</span></div><div className="sm5-portfolio-card__body"><span className="sm5-eyebrow">{slot.code} / DOCUMENTATION SLOT</span><h3>{slot.title}</h3><p>{slot.description}</p><span className="sm5-inline-link">Lihat status <ArrowRight size={15} aria-hidden="true" /></span></div></Link></article> })}</div>
      </section>
      <section className="sm5-container sm5-cta-wrap"><div className="sm5-cta-band"><div><span className="sm5-eyebrow">CONTRIBUTE DOCUMENTATION</span><h2>Siapkan dokumentasi yang layak publikasi.</h2><p>Detail proyek, peran yang dilakukan, pemilik karya, serta izin foto/video perlu dipastikan sebelum masuk ke portofolio publik.</p></div><Link className="sm5-button sm5-button--light" to="/kontak">Hubungi ORION<ArrowRight size={16} aria-hidden="true" /></Link></div></section>
    </main>
  )
}
