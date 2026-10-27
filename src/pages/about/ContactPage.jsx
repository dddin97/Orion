
import { ArrowUpRight, Mail, MapPin, MessageCircle, Clock3 } from 'lucide-react'
import PageIntro from '../../components/shared/PageIntro.jsx'
import { Button, StatusMessage } from '../../components/ui/index.js'
import './AboutContactPage.css'

export default function ContactPage() {
  return (
    <main>
      <PageIntro eyebrow="CONTACT / ORION.LTD" title="Mulai dengan kebutuhan Anda." description="Gunakan informasi kontak yang sudah tersedia untuk memperkenalkan kebutuhan apparel, perangkat audio, atau rencana rakit sound system." code="CONTACT / 001" breadcrumbs={[{ label: 'Kontak' }]} />
      <section className="route-section route-container contact-route">
        <div className="contact-route__intro"><span className="route-eyebrow">CONTACT POINTS</span><h2>Saluran komunikasi ORION.</h2><p>Nomor WhatsApp masih disamarkan pada brief. Kami tidak menggantinya dengan nomor rekaan. Detail alamat dan tautan peta akan ditambahkan setelah konfirmasi.</p><Button href="mailto:orion.ltd@gmail.com">Kirim email <ArrowUpRight size={15} aria-hidden="true" /></Button></div>
        <div className="contact-route__details">
          <div><Mail size={18} aria-hidden="true" /><span>Email</span><a href="mailto:orion.ltd@gmail.com">orion.ltd@gmail.com</a></div>
          <div><MessageCircle size={18} aria-hidden="true" /><span>WhatsApp APP</span><p>0831-1197-XXX <small>(nomor lengkap belum dipublikasikan)</small></p></div>
          <div><MessageCircle size={18} aria-hidden="true" /><span>WhatsApp SND & ASM</span><p>0859-2934-XXXX <small>(nomor lengkap belum dipublikasikan)</small></p></div>
          <div><Clock3 size={18} aria-hidden="true" /><span>Jam operasional</span><p>Senin–Jumat, 08.00–20.00; selain hari libur nasional.</p></div>
          <div><MapPin size={18} aria-hidden="true" /><span>Area ASM</span><p>Ngronggot, Nganjuk dan Ngajum, Malang, Jawa Timur. <small>Alamat detail belum dipublikasikan.</small></p></div>
        </div>
        <div className="contact-route__notice"><StatusMessage variant="info" title="Lokasi dan kontak sedang dikonfirmasi">Google Maps, alamat lengkap, dan nomor publik akan ditambahkan setelah datanya dipastikan.</StatusMessage></div>
      </section>
    </main>
  )
}
