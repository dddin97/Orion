
import { ArrowUpRight, Compass, Layers3, ShieldCheck } from 'lucide-react'
import PageIntro from '../../components/shared/PageIntro.jsx'
import { Button } from '../../components/ui/index.js'
import './AboutContactPage.css'

const principles = [
  { icon: Compass, title: 'Showroom-first', text: 'Membantu pengunjung mengenali lini usaha, produk, dan layanan sebelum menghubungi tim ORION.' },
  { icon: Layers3, title: 'Tiga bidang usaha', text: 'APP berfokus pada apparel, SND pada perangkat audio, dan ASM pada konsultasi perakitan sound system.' },
  { icon: ShieldCheck, title: 'Informasi terverifikasi', text: 'Spesifikasi, harga, ketersediaan, media, dan portofolio harus diperiksa sebelum ditayangkan sebagai informasi publik.' },
]

export default function AboutPage() {
  return (
    <main>
      <PageIntro eyebrow="ABOUT / ORION.LTD" title="Satu showroom untuk tiga bidang usaha." description="ShowMarket adalah showroom digital ORION.Ltd untuk memperkenalkan ORITLE Apparel, iQIFI Audio, dan layanan Audio System Assembly kepada calon pelanggan." code="ABOUT / ORION" breadcrumbs={[{ label: 'Tentang' }]} />
      <section className="route-section route-container about-route">
        <div className="about-route__principles">
          {principles.map(({ icon: Icon, title, text }, index) => <article className="about-principle" key={title}><span className="about-principle__number">0{index + 1}</span><Icon size={21} aria-hidden="true" /><h2>{title}</h2><p>{text}</p></article>)}
        </div>
        <div className="about-route__statement"><span className="route-eyebrow">THE SKY HUNTER</span><h2>Raise your creativity.<br /><em>Create your history.</em></h2><p>Untuk tahap awal, ShowMarket berfungsi sebagai online showroom dan pusat permintaan informasi. Fitur transaksi otomatis, stok real-time, dan pengelolaan melalui backend dapat dipertimbangkan setelah kebutuhan bisnis dan frontend stabil.</p><Button href="/kontak">Hubungi ORION <ArrowUpRight size={15} aria-hidden="true" /></Button></div>
      </section>
    </main>
  )
}
