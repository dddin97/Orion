import { FileText } from 'lucide-react'
import { Link } from 'react-router'
import PageIntro from '../../components/shared/PageIntro.jsx'
import './legal.css'

export default function TermsPage() {
  return (
    <main className="legal-page">
      <PageIntro
        eyebrow="LEGAL / TERMS"
        title="Syarat penggunaan."
        description="Ketentuan awal untuk menggunakan ShowMarket sebagai showroom digital dan pusat informasi mengenai lini usaha ORION.Ltd."
        code="LEGAL / TERMS"
        note="Draf operasional — terakhir disiapkan 29 Oktober 2026."
        breadcrumbs={[{ label: 'Syarat Penggunaan' }]}
      />
      <section className="legal-document sm5-container" aria-labelledby="terms-status-heading">
        <div className="legal-notice" role="note">
          <FileText size={21} aria-hidden="true" />
          <div><h2 id="terms-status-heading">Status dokumen</h2><p>Draf ini menggambarkan fungsi ShowMarket yang direncanakan sekarang. Tinjau dan sesuaikan sebelum website dipublikasikan secara umum atau mulai menawarkan transaksi secara online.</p></div>
        </div>
        <div className="legal-section">
          <h2>1. Fungsi ShowMarket</h2>
          <p>ShowMarket merupakan showroom informasi yang memperkenalkan ORITLE Apparel (APP), iQIFI Audio (SND), dan layanan Audio System Assembly (ASM). Pada versi saat ini, website tidak menyediakan checkout, pembayaran online, pemesanan otomatis, atau konfirmasi stok real-time.</p>
        </div>
        <div className="legal-section">
          <h2>2. Akurasi informasi</h2>
          <p>Kategori yang ditandai sebagai preview, placeholder, atau menunggu verifikasi bukan pernyataan bahwa suatu model, varian, harga, stok, atau layanan tersedia untuk dipesan. Rincian produk, spesifikasi, harga jual ORION, estimasi pengerjaan, dan ketersediaan perlu dikonfirmasi melalui komunikasi langsung sebelum keputusan pembelian.</p>
        </div>
        <div className="legal-section">
          <h2>3. Permintaan informasi bukan pesanan</h2>
          <p>Pengiriman pertanyaan atau inquiry hanya merupakan permintaan informasi. Hal tersebut tidak dengan sendirinya membentuk pesanan, persetujuan harga, jaminan stok, maupun kontrak jual beli. Kesepakatan baru berlaku sesuai konfirmasi terpisah dari pihak yang berwenang.</p>
        </div>
        <div className="legal-section">
          <h2>4. Merek, foto, dan konten</h2>
          <p>Nama dan merek mitra disebut untuk membantu pengunjung menemukan sumber referensi. Merek dagang dan materi milik mitra tetap menjadi hak pemiliknya. Logo, foto, video, spesifikasi, atau karya pihak ketiga tidak boleh disalin atau digunakan ulang tanpa hak atau izin yang diperlukan. Detail kepemilikan dan izin publikasi perlu dipastikan sebelum sebuah materi ditampilkan sebagai aset ShowMarket.</p>
        </div>
        <div className="legal-section">
          <h2>5. Tautan eksternal</h2>
          <p>Tautan ke situs mitra, marketplace, atau media sosial disediakan untuk referensi. ORION tidak mengendalikan konten, kebijakan, harga, layanan, atau praktik privasi situs eksternal. Periksa syarat yang berlaku di situs tujuan sebelum menggunakannya atau melakukan transaksi di sana.</p>
        </div>
        <div className="legal-section">
          <h2>6. Penggunaan yang wajar</h2>
          <p>Gunakan website secara wajar dan jangan mencoba mengganggu layanan, mengakses sistem tanpa izin, memasukkan kode berbahaya, atau menyalahgunakan konten maupun informasi kontak yang ditampilkan.</p>
        </div>
        <div className="legal-section">
          <h2>7. Perubahan syarat dan kontak</h2>
          <p>Informasi dan syarat ini dapat diperbarui mengikuti perubahan website dan operasi usaha. Untuk pertanyaan mengenai ShowMarket, hubungi <a href="mailto:orion.ltd@gmail.com">orion.ltd@gmail.com</a> atau lihat halaman <Link to="/kontak">Kontak</Link>.</p>
        </div>
      </section>
    </main>
  )
}
