import { ShieldCheck } from 'lucide-react'
import { Link } from 'react-router'
import PageIntro from '../../components/shared/PageIntro.jsx'
import './legal.css'

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <PageIntro
        eyebrow="LEGAL / PRIVACY"
        title="Kebijakan privasi."
        description="Penjelasan awal tentang data yang mungkin diproses ketika Anda menggunakan ShowMarket. Dokumen ini perlu ditinjau kembali sebelum website diluncurkan secara publik."
        code="LEGAL / PRIVACY"
        note="Draf operasional — terakhir disiapkan 29 Oktober 2026."
        breadcrumbs={[{ label: 'Kebijakan Privasi' }]}
      />
      <section className="legal-document sm5-container" aria-labelledby="privacy-status-heading">
        <div className="legal-notice" role="note">
          <ShieldCheck size={21} aria-hidden="true" />
          <div><h2 id="privacy-status-heading">Status dokumen</h2><p>Ini adalah draf berdasarkan fitur website yang direncanakan saat ini, bukan nasihat hukum. Perbarui apabila hosting, analytics, formulir, sistem penyimpanan, atau alur bisnis berubah.</p></div>
        </div>
        <div className="legal-section">
          <h2>1. Pengelola dan ruang lingkup</h2>
          <p>ShowMarket adalah showroom digital ORION.Ltd yang memperkenalkan ORITLE Apparel, iQIFI Audio, dan layanan Audio System Assembly (ASM). Untuk pertanyaan privasi, gunakan <a href="mailto:orion.ltd@gmail.com">orion.ltd@gmail.com</a>.</p>
        </div>
        <div className="legal-section">
          <h2>2. Informasi yang diproses</h2>
          <ul>
            <li><strong>Pesan yang Anda kirim sendiri:</strong> jika Anda memilih tautan email atau menyalin draf inquiry lalu mengirimkannya, ORION menerima informasi yang Anda sertakan di pesan tersebut.</li>
            <li><strong>Preferensi tema:</strong> website dapat menyimpan pilihan tema terang/gelap di penyimpanan lokal browser dengan kunci <code>orion-showmarket-theme</code>.</li>
            <li><strong>Data teknis hosting:</strong> penyedia hosting dapat memproses log teknis seperti alamat IP, waktu permintaan, dan informasi browser sesuai konfigurasi serta kebijakan mereka. Detail aktual bergantung pada penyedia hosting yang akhirnya digunakan.</li>
            <li><strong>Font eksternal:</strong> versi sekarang memuat font dari Google Fonts. Permintaan ke layanan eksternal tersebut tunduk pada ketentuan dan kebijakan penyedia terkait.</li>
          </ul>
        </div>
        <div className="legal-section">
          <h2>3. Formulir dan penyimpanan</h2>
          <p>Versi frontend saat ini tidak memiliki akun pelanggan, payment gateway, atau database backend untuk menyimpan inquiry. Validasi dan penyusunan draf pesan berlangsung di browser; pesan baru diteruskan ketika Anda sendiri mengirimkannya melalui aplikasi email atau kanal lain. Jangan memasukkan informasi sensitif yang tidak diperlukan.</p>
        </div>
        <div className="legal-section">
          <h2>4. Tautan pihak ketiga</h2>
          <p>ShowMarket dapat menautkan website mitra atau marketplace. Ketika Anda membuka tautan tersebut, pemrosesan data di situs tujuan mengikuti ketentuan masing-masing penyedia, bukan pengaturan website ShowMarket.</p>
        </div>
        <div className="legal-section">
          <h2>5. Penggunaan, penyimpanan, dan hak Anda</h2>
          <p>Informasi yang Anda kirim melalui email digunakan untuk menanggapi pertanyaan bisnis yang Anda sampaikan dan dikelola melalui kanal komunikasi yang digunakan ORION. Untuk pertanyaan atau permintaan terkait data pribadi, hubungi email di atas dan jelaskan permintaan Anda. Proses serta jangka waktu penanganan harus disesuaikan dengan sistem operasional final.</p>
          <p>Pengelolaan data pribadi perlu diperiksa terhadap ketentuan yang berlaku, termasuk <a href="https://peraturan.bpk.go.id/Details/229798/uu-no-27-tahun-2022" target="_blank" rel="noreferrer">UU Republik Indonesia Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi</a>.</p>
        </div>
        <div className="legal-section">
          <h2>6. Perubahan kebijakan</h2>
          <p>Kebijakan ini dapat diperbarui ketika fitur, layanan, penyedia hosting, atau praktik pemrosesan data berubah. Versi final perlu mencantumkan tanggal pembaruan dan informasi kontak yang telah dikonfirmasi.</p>
        </div>
        <div className="legal-footer-note"><p>Untuk pertanyaan lebih lanjut, silakan membuka halaman <Link to="/kontak">Kontak ORION</Link>.</p></div>
      </section>
    </main>
  )
}
