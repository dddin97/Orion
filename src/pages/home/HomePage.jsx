import { Link } from 'react-router'
import SectionHeading from '../../components/shared/SectionHeading.jsx'
import './HomePage.css'

const businessLines = [
  {
    id: 'apparel',
    code: 'APP',
    name: 'ORITLE Apparel',
    eyebrow: 'APPAREL & CUSTOM',
    description:
      'Kebutuhan kaos polos, polo, jaket, hoodie, hingga apparel custom untuk personal, komunitas, dan bisnis.',
    tags: ['T-shirt & polo', 'Jaket & hoodie', 'Sablon custom'],
    number: '01',
    accent: 'orange',
    action: 'Jelajahi sumber apparel',
    href: '/app',
  },
  {
    id: 'audio',
    code: 'SND',
    name: 'iQIFI Audio',
    eyebrow: 'AUDIO & ELECTRONICS',
    description:
      'Referensi komponen audio, speaker, amplifier, mixer, mikrofon, dan perangkat pendukung kebutuhan sound system.',
    tags: ['Speaker & driver', 'Amplifier & mixer', 'Perangkat audio'],
    number: '02',
    accent: 'silver',
    action: 'Jelajahi sumber audio',
    href: '/snd',
  },
  {
    id: 'assembly',
    code: 'ASM',
    name: 'Audio System Assembly',
    eyebrow: 'CUSTOM BUILD SERVICE',
    description:
      'Konsultasi dan perencanaan perakitan paket sound system sesuai kebutuhan penggunaan, konfigurasi, dan anggaran.',
    tags: ['Konsultasi kebutuhan', 'Perencanaan sistem', 'Rakit custom'],
    number: '03',
    accent: 'blue',
    action: 'Lihat alur layanan',
    href: '/asm',
  },
]

const apparelPartners = [
  { name: 'Cititex', description: 'Referensi apparel dan produk polos', links: [{ label: 'Website', href: 'https://cititex.com/' }, { label: 'Shopee', href: 'https://shopee.co.id/cititex' }, { label: 'Instagram', href: 'https://www.instagram.com/cititex.id/' }] },
  { name: 'New States Apparel', description: 'Referensi produk dan apparel', links: [{ label: 'Shopee', href: 'https://shopee.co.id/newstatesapparelofficial' }, { label: 'Instagram', href: 'https://www.instagram.com/newstatesapparel/' }] },
]

const audioPartners = [
  { name: 'ACR', description: 'Katalog speaker dan komponen audio', links: [{ label: 'Website', href: 'https://acrspeaker.com/' }, { label: 'Shopee', href: 'https://shopee.co.id/acrspeaker.official' }, { label: 'Instagram', href: 'https://www.instagram.com/acrspeaker/' }] },
  { name: 'Legacy', description: 'Referensi produk audio', links: [{ label: 'Website', href: 'https://www.legacy.us.com/' }, { label: 'Instagram', href: 'https://www.instagram.com/legacy.speaker/' }] },
  { name: 'JIC', description: 'Referensi lini produk speaker', links: [{ label: 'Website', href: 'https://jicspeaker.com/' }] },
  { name: 'Betavo', description: 'Referensi produk audio', links: [{ label: 'Website', href: 'https://www.betavoaudio.com/' }, { label: 'Shopee', href: 'https://shopee.co.id/betavoaudio' }, { label: 'Instagram', href: 'https://www.instagram.com/betavoaudioofficial/' }] },
  { name: 'Ashley', description: 'Referensi produk pro audio', links: [{ label: 'Website', href: 'https://www.ashleyproaudio.com/' }, { label: 'Indonesia', href: 'https://ashleyaudioindonesia.com/' }, { label: 'Shopee', href: 'https://shopee.co.id/ashleyaudio' }, { label: 'Instagram', href: 'https://www.instagram.com/ashley_proaudio/' }] },
  { name: 'Fest by Brewog', description: 'Referensi kanal audio dan produk', links: [{ label: 'Shopee', href: 'https://shopee.co.id/brewog.fest_indonesia' }, { label: 'Fest IG', href: 'https://www.instagram.com/brewogfestindonesia/' }, { label: 'Brewog Audio', href: 'https://www.instagram.com/brewogaudio/' }, { label: 'Huper Audio', href: 'https://www.instagram.com/brewoghuperaudio/' }, { label: 'Betavo ID', href: 'https://www.instagram.com/brewogbetavo_indonesia/' }, { label: 'Ashley ID', href: 'https://www.instagram.com/brewogashleynusantara/' }] },
]

function PartnerCard({ partner }) {
  return (
    <article className="partner-card">
      <div className="partner-card-top">
        <span className="partner-symbol" aria-hidden="true">{partner.name.slice(0, 1)}</span>
        <span className="partner-link-icon" aria-hidden="true">↗</span>
      </div>
      <h3>{partner.name}</h3>
      <p>{partner.description}</p>
      <div className="partner-links">
        {partner.links.map((link) => (
          <a key={`${partner.name}-${link.label}`} href={link.href} target="_blank" rel="noreferrer">
            {link.label}<span aria-hidden="true">↗</span>
          </a>
        ))}
      </div>
    </article>
  )
}

function HomePage() {
  return (
    <main>
        <section className="hero-section" id="home">
          <div className="hero-grid-lines" aria-hidden="true" />
          <div className="hero-copy">
            <div className="hero-kicker"><span>THE SKY HUNTER</span><span className="kicker-line" /></div>
            <h1>Raise your creativity.<br /><em>Create your history.</em></h1>
            <p className="hero-description">Satu showroom digital untuk mengenal lini apparel, perangkat audio, dan layanan rakit sound system dari ekosistem ORION.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#business">Jelajahi ShowMarket <span aria-hidden="true">↗</span></a>
              <a className="button button-secondary" href="#how-it-works">Kenali layanan <span aria-hidden="true">↓</span></a>
            </div>
            <div className="hero-note"><span className="note-line" />Informasi produk dan kanal resmi diperbarui bertahap.</div>
          </div>

          <div className="hero-art" aria-label="Ilustrasi konseptual showroom ORION">
            <div className="hero-orbit orbit-one" />
            <div className="hero-orbit orbit-two" />
            <div className="hero-orbit orbit-three" />
            <div className="hero-crosshair crosshair-one" />
            <div className="hero-crosshair crosshair-two" />
            <div className="hero-core">
              <span className="core-overline">ORION / 001</span>
              <span className="core-star">✦</span>
              <span className="core-word">OMNI<span>•</span></span>
              <span className="core-subtitle">ONE SHOWROOM, MANY POSSIBILITIES</span>
            </div>
            <div className="art-label art-label-top"><span>01</span> APPAREL</div>
            <div className="art-label art-label-right"><span>02</span> AUDIO</div>
            <div className="art-label art-label-bottom"><span>03</span> CUSTOM BUILD</div>
            <div className="art-index">ID / ORN-26</div>
          </div>
          <div className="hero-bottomline"><span>ORION.LTD</span><span>APPAREL&nbsp; · &nbsp;AUDIO&nbsp; · &nbsp;ASSEMBLY</span><span>01 — 03</span></div>
        </section>

        <section className="intro-strip" aria-label="Ringkasan ShowMarket">
          <div><span className="strip-number">01</span><p>Kenali lini usaha</p></div>
          <div><span className="strip-number">02</span><p>Jelajahi sumber produk</p></div>
          <div><span className="strip-number">03</span><p>Konsultasikan kebutuhan</p></div>
          <div className="strip-brand">CREATED TO CONNECT <span>↗</span></div>
        </section>

        <section className="business-section section-pad" id="business">
          <SectionHeading eyebrow="OUR BUSINESS UNIVERSE / 01—03" title={<>Tiga bidang. <em>Satu tujuan.</em></>} description="Pilih bidang yang paling sesuai dengan kebutuhan Anda. Setiap lini memiliki fokus produk dan layanan yang berbeda." />
          <div className="business-grid">
            {businessLines.map((business) => (
              <article className={`business-card accent-${business.accent}`} key={business.id}>
                <div className="business-card-head"><span className="business-number">{business.number} / 03</span><span className="business-code">{business.code}</span></div>
                <div className="business-graphic" aria-hidden="true">
                  {business.id === 'apparel' && <div className="graphic-shirt"><span /></div>}
                  {business.id === 'audio' && <div className="graphic-speaker"><span className="speaker-large" /><span className="speaker-small" /></div>}
                  {business.id === 'assembly' && <div className="graphic-blueprint"><span /><span /><span /><span /><b>ASM</b></div>}
                </div>
                <div className="business-card-body">
                  <span className="eyebrow">{business.eyebrow}</span>
                  <h3>{business.name}</h3>
                  <p>{business.description}</p>
                  <div className="business-tags">{business.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <Link className="text-link" to={business.href}>{business.action} <span aria-hidden="true">↗</span></Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="partners-section section-pad" id="partners">
          <div className="partners-heading-row">
            <SectionHeading eyebrow="REFERENCE CHANNELS / PARTNER SOURCES" title={<>Kenali lebih dekat<br /><em>produk dan mereknya.</em></>} description="Kunjungi situs dan kanal yang tercantum untuk melihat katalog resmi. Data model, spesifikasi, harga, dan penggunaan aset produk akan ditambahkan setelah diverifikasi." light />
            <div className="partners-side-note"><span className="side-note-mark">↗</span><p>Gunakan tautan sumber sebagai rujukan. Ketersediaan barang dan harga mengikuti informasi dari masing-masing kanal.</p></div>
          </div>
          <div className="partner-category" id="partners-apparel">
            <div className="partner-category-heading"><div><span className="eyebrow">APP / ORITLE APPAREL</span><h3>Sumber apparel</h3></div><span className="category-count">02 SUMBER</span></div>
            <div className="partner-grid partner-grid-apparel">{apparelPartners.map((partner) => <PartnerCard key={partner.name} partner={partner} />)}</div>
          </div>
          <div className="partner-category" id="partners-audio">
            <div className="partner-category-heading"><div><span className="eyebrow">SND / iQIFI AUDIO</span><h3>Sumber audio & elektronik</h3></div><span className="category-count">06 SUMBER</span></div>
            <div className="partner-grid">{audioPartners.map((partner) => <PartnerCard key={partner.name} partner={partner} />)}</div>
          </div>
          <p className="partner-disclaimer">Catatan: halaman ini menampilkan tautan sumber berdasarkan brief proyek. Logo, foto produk, video, maupun materi promosi pihak lain belum ditampilkan sebagai aset ShowMarket.</p>
        </section>

        <section className="assembly-section section-pad" id="how-it-works">
          <div className="assembly-visual" aria-hidden="true">
            <div className="assembly-orbit" />
            <div className="assembly-box box-back" /><div className="assembly-box box-front" />
            <div className="assembly-stamp"><span>ASM</span><small>BUILD WITH PURPOSE</small></div>
            <div className="assembly-coordinate">07° 36' S<br />111° 54' E</div>
          </div>
          <div className="assembly-copy">
            <SectionHeading eyebrow="ASM / CUSTOM AUDIO SYSTEM" title={<>Bukan sekadar membeli.<br /><em>Rancang sistemnya.</em></>} description="Untuk kebutuhan sound system custom, mulai dari tujuan penggunaan hingga rencana konfigurasi perangkat, konsultasi menjadi langkah awal yang penting." />
            <div className="process-list">
              <div className="process-item"><span>01</span><div><h3>Ceritakan kebutuhan</h3><p>Jelaskan penggunaan, ruang atau lokasi, dan preferensi Anda.</p></div></div>
              <div className="process-item"><span>02</span><div><h3>Diskusikan konfigurasi</h3><p>Susun kebutuhan perangkat dan pilihan komponen berdasarkan informasi yang tersedia.</p></div></div>
              <div className="process-item"><span>03</span><div><h3>Lanjutkan ke penawaran</h3><p>Rincian paket, harga, dan pengerjaan dikonfirmasi langsung sebelum transaksi.</p></div></div>
            </div>
            <a className="button button-primary" href="mailto:orion.ltd@gmail.com?subject=Konsultasi%20ShowMarket%20-%20ASM">Mulai lewat email <span aria-hidden="true">↗</span></a>
          </div>
        </section>

        <section className="catalog-note-section section-pad" id="catalog">
          <div className="catalog-note-content">
            <span className="eyebrow">CATALOG STATUS / IN PROGRESS</span>
            <h2>Katalog yang tepat dimulai dari <em>data yang terverifikasi.</em></h2>
            <p>Daftar produk, detail spesifikasi, harga, dan tautan pembelian akan diisi bertahap dari sumber resmi. Untuk saat ini, ShowMarket berfungsi sebagai showroom informasi dan pengarah ke kanal referensi.</p>
          </div>
          <div className="catalog-status-list">
            <div><span className="status-marker status-ready" /><span>Struktur lini usaha</span><b>SIAP</b></div>
            <div><span className="status-marker status-ready" /><span>Tautan sumber mitra</span><b>TERSEDIA</b></div>
            <div><span className="status-marker status-pending" /><span>Data produk & harga</span><b>VERIFIKASI</b></div>
            <div><span className="status-marker status-pending" /><span>Link toko resmi ShowMarket</span><b>MENUNGGU</b></div>
          </div>
        </section>

        <section className="contact-section section-pad" id="contact">
          <div className="contact-card">
            <div className="contact-copy">
              <span className="eyebrow">LET'S BUILD SOMETHING</span>
              <h2>Ada kebutuhan?<br /><em>Mulai dari percakapan.</em></h2>
              <p>Hubungi ORION untuk pertanyaan umum atau diskusi awal mengenai apparel, audio, dan layanan perakitan.</p>
              <a className="button button-primary" href="mailto:orion.ltd@gmail.com?subject=Pertanyaan%20ShowMarket">Email ORION <span aria-hidden="true">↗</span></a>
            </div>
            <div className="contact-details">
              <div><span>Email</span><a href="mailto:orion.ltd@gmail.com">orion.ltd@gmail.com</a></div>
              <div><span>Jam operasional</span><p>Senin–Jumat, 08.00–20.00 WIB<br /><small>Kecuali hari libur nasional</small></p></div>
              <div><span>Lokasi layanan ASM</span><p>Ngronggot, Nganjuk & Ngajum, Malang<br /><small>Alamat detail dan tautan Maps akan diperbarui.</small></p></div>
              <div><span>Instagram</span><p><a href="https://www.instagram.com/oritleapparel/" target="_blank" rel="noreferrer">@oritleapparel</a> (APP)<br /><a href="https://www.instagram.com/iqifiaudio/" target="_blank" rel="noreferrer">@iqifiaudio</a> (SND & ASM)</p></div>
              <div><span>WhatsApp</span><p>Nomor lengkap belum dipublikasikan.</p></div>
            </div>
          </div>
        </section>
    </main>
  )
}

export default HomePage
