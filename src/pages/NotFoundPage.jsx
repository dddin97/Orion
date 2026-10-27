
import { ArrowLeft, ArrowUpRight, Compass } from 'lucide-react'
import { useNavigate, useLocation } from 'react-router'
import PageIntro from '../components/shared/PageIntro.jsx'
import { Button } from '../components/ui/index.js'
import './NotFoundPage.css'

export default function NotFoundPage() {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <main>
      <PageIntro eyebrow="404 / PAGE NOT FOUND" title="Halaman ini belum ditemukan." description="Alamat yang Anda buka tidak cocok dengan halaman ShowMarket yang tersedia. Periksa kembali URL atau kembali ke halaman utama." code="404 / LOST IN SPACE" breadcrumbs={[{ label: '404' }]} />
      <section className="route-section route-container not-found-route">
        <div className="not-found-route__mark"><Compass size={34} aria-hidden="true" /><span>404</span></div>
        <div><span className="route-eyebrow">UNKNOWN DESTINATION</span><h2>Sepertinya kita keluar dari jalur.</h2><p>Alamat: <code>{location.pathname}</code></p><div className="route-actions"><Button variant="secondary" onClick={() => (window.history.state?.idx > 0 ? navigate(-1) : navigate('/'))}><ArrowLeft size={15} aria-hidden="true" /> Kembali ke halaman sebelumnya</Button><Button href="/">Ke beranda <ArrowUpRight size={15} aria-hidden="true" /></Button></div></div>
      </section>
    </main>
  )
}
