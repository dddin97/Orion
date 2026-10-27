import { ArrowUpRight, Clock3, Instagram, Mail, MapPin, MessageCircle, ShieldCheck } from 'lucide-react'
import PageIntro from '../../components/shared/PageIntro.jsx'
import '../../styles/phase-5-showroom.css'

const socialLinks = [
  { label: 'ORITLE Apparel Instagram', handle: '@oritleapparel', href: 'https://www.instagram.com/oritleapparel/' },
  { label: 'iQIFI Audio Instagram', handle: '@iqifiaudio', href: 'https://www.instagram.com/iqifiaudio/' },
]
export default function ContactPage() {
  return (
    <main className="sm5-page sm5-contact">
      <PageIntro eyebrow="CONTACT / ORION.LTD" title="Mulai dengan kebutuhan Anda." description="Pilih lini usaha yang relevan, lalu hubungi ORION untuk pertanyaan awal mengenai apparel, perangkat audio, atau rencana rakit sound system." code="CONTACT / 001" note="Kanal yang belum terkonfirmasi tidak ditautkan sebagai kontak aktif." breadcrumbs={[{ label: 'Kontak' }]} />
      <section className="sm5-container sm5-section"><div className="sm5-contact-grid"><div className="sm5-contact-copy"><span className="sm5-eyebrow">CONTACT POINTS</span><h2>Satu percakapan untuk menentukan langkah berikutnya.</h2><p>Untuk saat ini, email adalah kanal kontak lengkap yang bisa digunakan dari website. Nomor WhatsApp pada brief masih disamarkan, sehingga tautan WhatsApp belum dapat dibuat dengan aman.</p><a className="sm5-button sm5-button--primary" href="mailto:orion.ltd@gmail.com?subject=Pertanyaan%20ShowMarket">Kirim email ke ORION <ArrowUpRight size={16} aria-hidden="true" /></a><div className="sm5-contact-note"><ShieldCheck size={18} aria-hidden="true" /><p>Nomor lengkap, alamat detail, dan titik Google Maps akan ditambahkan setelah dikonfirmasi.</p></div></div>
        <div className="sm5-contact-list">
          <div className="sm5-contact-item"><span className="sm5-contact-item__icon"><Mail size={19} aria-hidden="true" /></span><div><span>Email</span><a href="mailto:orion.ltd@gmail.com">orion.ltd@gmail.com</a><small>Kanal utama untuk pertanyaan awal.</small></div></div>
          <div className="sm5-contact-item"><span className="sm5-contact-item__icon"><MessageCircle size={19} aria-hidden="true" /></span><div><span>WhatsApp APP</span><p>0831-1197-XXX</p><small>Nomor lengkap belum dipublikasikan; tautan belum aktif.</small></div></div>
          <div className="sm5-contact-item"><span className="sm5-contact-item__icon"><MessageCircle size={19} aria-hidden="true" /></span><div><span>WhatsApp SND & ASM</span><p>0859-2934-XXXX</p><small>Nomor lengkap belum dipublikasikan; tautan belum aktif.</small></div></div>
          <div className="sm5-contact-item"><span className="sm5-contact-item__icon"><Clock3 size={19} aria-hidden="true" /></span><div><span>Jam operasional</span><p>Senin–Jumat, 08.00–20.00 WIB</p><small>Tidak termasuk hari libur nasional.</small></div></div>
          <div className="sm5-contact-item"><span className="sm5-contact-item__icon"><MapPin size={19} aria-hidden="true" /></span><div><span>Area layanan ASM</span><p>Ngronggot, Nganjuk · Ngajum, Malang</p><small>Jawa Timur; alamat detail dan Google Maps belum tersedia.</small></div></div>
        </div></div>
      </section>
      <section className="sm5-social-band"><div className="sm5-container"><div className="sm5-section-heading"><div><span className="sm5-eyebrow">SOCIAL CHANNELS</span><h2>Ikuti kanal usaha.</h2></div><p>Tautan berikut berasal dari brief proyek. Kanal Facebook, TikTok, dan toko marketplace ShowMarket belum ditautkan karena URL final belum dipastikan.</p></div><div className="sm5-social-grid">{socialLinks.map((social) => <a href={social.href} key={social.handle} target="_blank" rel="noreferrer"><Instagram size={20} aria-hidden="true" /><span><strong>{social.handle}</strong><small>{social.label}</small></span><ArrowUpRight size={16} aria-hidden="true" /></a>)}</div></div></section>
      <section className="sm5-container sm5-cta-wrap"><div className="sm5-cta-band"><div><span className="sm5-eyebrow">BEFORE YOU CONTACT</span><h2>Informasi apa yang baik disiapkan?</h2><p>Untuk APP: jenis produk, jumlah, ukuran, dan kebutuhan custom. Untuk SND: tujuan penggunaan dan tipe perangkat. Untuk ASM: lokasi, cakupan penggunaan, serta kisaran anggaran.</p></div><a className="sm5-button sm5-button--light" href="mailto:orion.ltd@gmail.com?subject=Kebutuhan%20ShowMarket">Siapkan pertanyaan<Mail size={16} aria-hidden="true" /></a></div></section>
    </main>
  )
}
