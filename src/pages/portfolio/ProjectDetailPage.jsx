import { ArrowLeft, FileImage, ShieldCheck } from 'lucide-react'
import { Link, useParams } from 'react-router'
import PageIntro from '../../components/shared/PageIntro.jsx'
import { getPortfolioSlot } from '../../data/showroomContent.js'
import '../../styles/phase-5-showroom.css'

export default function ProjectDetailPage() {
  const { slug } = useParams()
  const slot = getPortfolioSlot(slug)
  if (!slot) {
    return <main className="sm5-page"><PageIntro eyebrow="PORTFOLIO / DETAIL" title="Dokumentasi tidak ditemukan." description="Alamat ini belum terhubung ke slot portofolio yang tersedia." code="WORK / NOT FOUND" breadcrumbs={[{ label: 'Portofolio', href: '/portofolio' }, { label: 'Detail' }]} /><section className="sm5-container sm5-section"><div className="sm5-empty-state"><FileImage size={34} aria-hidden="true" /><h2>Belum ada dokumentasi di alamat ini.</h2><p>Kembali ke halaman portofolio untuk melihat bidang dokumentasi yang sedang disiapkan.</p><Link className="sm5-button sm5-button--primary" to="/portofolio"><ArrowLeft size={16} aria-hidden="true" />Kembali ke portofolio</Link></div></section></main>
  }
  return (
    <main className="sm5-page sm5-portfolio-detail"><PageIntro eyebrow={`PORTFOLIO / ${slot.code} / DETAIL`} title={slot.title} description={slot.description} code={`${slot.code} / PENDING`} note="Slot dokumentasi, bukan studi kasus final." breadcrumbs={[{ label: 'Portofolio', href: '/portofolio' }, { label: slot.title }]} />
      <section className="sm5-container sm5-section"><div className="sm5-portfolio-detail-grid"><div className="sm5-detail-art sm5-detail-art--portfolio"><FileImage size={70} strokeWidth={1.15} aria-hidden="true" /><span className="sm5-detail-art__caption">PORTFOLIO MEDIA<br />PLACEHOLDER ONLY</span></div><div className="sm5-detail-copy"><span className="sm5-status-label">MENUNGGU DOKUMENTASI</span><h2>Ruang ini akan diisi dengan dokumentasi yang terverifikasi.</h2><p>{slot.note}</p><div className="sm5-catalog-banner sm5-catalog-banner--inline"><div className="sm5-catalog-banner__icon"><ShieldCheck size={20} aria-hidden="true" /></div><div><strong>Checklist publikasi</strong><p>Detail pekerjaan, izin pemilik karya, persetujuan penggunaan media, serta keterangan yang akurat harus tersedia sebelum proyek ditampilkan.</p></div></div><Link className="sm5-button sm5-button--secondary" to="/portofolio"><ArrowLeft size={16} aria-hidden="true" />Kembali ke portofolio</Link></div></div></section>
    </main>
  )
}
