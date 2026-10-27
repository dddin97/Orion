
import { ArrowUpRight, Images } from 'lucide-react'
import PageIntro from '../../components/shared/PageIntro.jsx'
import { Button, StatusMessage } from '../../components/ui/index.js'
import './PortfolioPage.css'

export default function PortfolioPage() {
  return (
    <main>
      <PageIntro eyebrow="PORTFOLIO / SHOWCASE" title="Karya dan proyek, dalam satu ruang." description="Portofolio akan merangkum hasil pekerjaan apparel custom, proyek audio, dan rakitan sound system ketika dokumentasi serta izin publikasinya sudah tersedia." code="WORK / 001" breadcrumbs={[{ label: 'Portofolio' }]} />
      <section className="route-section route-container portfolio-route">
        <div className="portfolio-route__empty"><span className="portfolio-route__icon"><Images size={25} aria-hidden="true" /></span><span className="route-eyebrow">PROJECT ARCHIVE / 00</span><h2>Portofolio belum dipublikasikan.</h2><p>Belum ada proyek yang ditampilkan. Dokumentasi akan ditambahkan setelah detail pekerjaan, pemilik proyek, dan hak penggunaan media diperiksa.</p><StatusMessage variant="info" title="Area konten telah disiapkan">Halaman daftar dan pola URL detail proyek sudah tersedia untuk diisi pada fase halaman showroom.</StatusMessage><Button href="/kontak">Diskusikan kebutuhan <ArrowUpRight size={15} aria-hidden="true" /></Button></div>
      </section>
    </main>
  )
}
