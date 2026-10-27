
import { ArrowLeft, Images } from 'lucide-react'
import { useParams } from 'react-router'
import PageIntro from '../../components/shared/PageIntro.jsx'
import { Button, StatusMessage } from '../../components/ui/index.js'
import './PortfolioPage.css'

export default function ProjectDetailPage() {
  const { slug } = useParams()
  return (
    <main>
      <PageIntro eyebrow="PORTFOLIO / PROJECT DETAIL" title="Detail proyek." description="Halaman detail proyek tersedia sebagai kerangka navigasi. Konten hanya akan ditampilkan setelah data pekerjaan dan izin publikasi diverifikasi." code={String(slug || 'PROJECT').toUpperCase().slice(0, 18)} breadcrumbs={[{ label: 'Portofolio', href: '/portofolio' }, { label: 'Detail proyek' }]} />
      <section className="route-section route-container portfolio-route">
        <div className="portfolio-route__empty"><span className="portfolio-route__icon"><Images size={25} aria-hidden="true" /></span><h2>Proyek tidak tersedia.</h2><p>Belum ada proyek yang terhubung ke alamat <code>{slug}</code>. Alamat ini tidak menampilkan data contoh yang dianggap sebagai pekerjaan nyata.</p><StatusMessage variant="info" title="Belum ada data terverifikasi">Foto hasil pekerjaan, deskripsi proyek, dan informasi klien masih menunggu dokumentasi serta izin.</StatusMessage><Button href="/portofolio" variant="secondary"><ArrowLeft size={15} aria-hidden="true" /> Kembali ke portofolio</Button></div>
      </section>
    </main>
  )
}
