import { ArrowRight, Compass, Layers3, ShieldCheck, Sparkles } from 'lucide-react'
import { Link } from 'react-router'
import PageIntro from '../../components/shared/PageIntro.jsx'
import '../../styles/phase-5-showroom.css'

const principles = [
  { icon: Compass, number: '01', title: 'Showroom-first', text: 'Membantu pengunjung mengenali lini usaha, kategori, layanan, dan sumber referensi sebelum menghubungi tim ORION.' },
  { icon: Layers3, number: '02', title: 'Tiga bidang usaha', text: 'APP berfokus pada apparel, SND pada audio dan elektronik, sedangkan ASM pada konsultasi serta perencanaan sound system custom.' },
  { icon: ShieldCheck, number: '03', title: 'Informasi yang dapat dipertanggungjawabkan', text: 'Spesifikasi, harga, ketersediaan, media, serta portofolio tidak akan ditampilkan sebagai fakta sebelum diperiksa.' },
]
const businessLinks = [
  { code: 'APP', title: 'ORITLE Apparel', description: 'Apparel, grosir, dan kebutuhan sablon custom.', href: '/app' },
  { code: 'SND', title: 'iQIFI Audio', description: 'Perangkat audio, speaker, dan elektronik pendukung.', href: '/snd' },
  { code: 'ASM', title: 'Audio System Assembly', description: 'Konsultasi kebutuhan dan perencanaan rakit sound system.', href: '/asm' },
]
export default function AboutPage() {
  return (
    <main className="sm5-page sm5-about">
      <PageIntro eyebrow="ABOUT / ORION.LTD" title="Satu showroom untuk tiga bidang usaha." description="ShowMarket adalah showroom digital ORION.Ltd untuk memperkenalkan ORITLE Apparel, iQIFI Audio, dan layanan Audio System Assembly kepada calon pelanggan." code="ABOUT / ORION" note="The Sky Hunter" breadcrumbs={[{ label: 'Tentang' }]} />
      <section className="sm5-container sm5-section"><div className="sm5-about-lead"><div><span className="sm5-eyebrow">OUR PURPOSE</span><h2>Memperjelas pilihan, sebelum percakapan dimulai.</h2></div><div><p>ShowMarket dirancang sebagai pusat informasi. Pengunjung dapat memahami ruang lingkup tiap usaha, menelusuri kategori, membuka sumber referensi, melihat dokumentasi yang sudah diizinkan, dan menghubungi ORION untuk informasi lanjutan.</p><p>Pada tahap awal, situs ini tidak memproses pembayaran otomatis dan tidak menjanjikan stok real-time. Transaksi, spesifikasi, harga, serta ketentuan pemesanan dikonfirmasi melalui kanal usaha yang tersedia.</p></div></div>
        <div className="sm5-principle-grid">{principles.map(({ icon: Icon, number, title, text }) => <article className="sm5-principle-card" key={number}><span className="sm5-index">{number}</span><Icon size={24} strokeWidth={1.4} aria-hidden="true" /><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>
      <section className="sm5-about-business-band"><div className="sm5-container"><div className="sm5-section-heading"><div><span className="sm5-eyebrow">THE ORION ECOSYSTEM</span><h2>Tiga fokus, satu pintu masuk.</h2></div><p>Pilih lini usaha yang paling relevan dengan kebutuhan Anda.</p></div><div className="sm5-about-business-grid">{businessLinks.map((item) => <Link to={item.href} key={item.code}><span>{item.code}</span><h3>{item.title}</h3><p>{item.description}</p><b>Jelajahi <ArrowRight size={14} aria-hidden="true" /></b></Link>)}</div></div></section>
      <section className="sm5-container sm5-about-statement"><Sparkles size={22} aria-hidden="true" /><span className="sm5-eyebrow">THE SKY HUNTER</span><h2>Raise your creativity.<br /><em>Create your history.</em></h2><p>Identitas, daftar produk, dan portofolio akan berkembang bertahap seiring verifikasi data serta kesiapan materi publikasi.</p><Link className="sm5-button sm5-button--primary" to="/kontak">Hubungi ORION<ArrowRight size={16} aria-hidden="true" /></Link></section>
    </main>
  )
}
