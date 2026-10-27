
import { ArrowLeft, FileSearch } from 'lucide-react'
import PageIntro from '../../components/shared/PageIntro.jsx'
import { Button, MediaPlaceholder, StatusMessage } from '../../components/ui/index.js'
import { getBusiness } from '../../data/businesses.js'
import { useParams } from 'react-router'
import './CatalogPage.css'

export default function ProductDetailPage({ businessId }) {
  const { slug } = useParams()
  const business = getBusiness(businessId)
  if (!business) return null
  const isService = businessId === 'asm'
  const detailLabel = isService ? 'Detail layanan' : 'Detail produk'

  return (
    <main>
      <PageIntro
        eyebrow={`${business.code} / ${isService ? 'SERVICE DETAIL' : 'PRODUCT DETAIL'}`}
        title={isService ? 'Detail layanan.' : 'Detail produk.'}
        description={isService ? "Struktur URL detail layanan tersedia. Rincian layanan akan ditampilkan setelah ruang lingkupnya dikonfirmasi." : "Struktur URL detail produk sudah tersedia. Data produk akan terhubung setelah katalog tervalidasi dimasukkan ke data lokal ShowMarket."}
        code={String(slug || 'ITEM').toUpperCase().slice(0, 18)}
        breadcrumbs={[{ label: business.name, href: `/${business.id}` }, { label: isService ? 'Layanan' : 'Katalog', href: business.catalogPath }, { label: detailLabel }]}
      />
      <section className="route-section route-container product-detail-route">
        <div className="product-detail-route__grid">
          <MediaPlaceholder aspectRatio="1:1" type={isService ? "image" : "product"} label={isService ? "Ilustrasi layanan belum tersedia" : "Foto produk belum tersedia"} caption={`${business.code} / ${isService ? "SERVICE" : "PRODUCT"} MEDIA`} />
          <div className="product-detail-route__copy">
            <span className="route-eyebrow">ITEM / {business.code}</span>
            <h2>{isService ? 'Detail layanan sedang disiapkan.' : 'Detail produk sedang disiapkan.'}</h2>
            <p>{isService ? "Alamat ini dikenali oleh sistem, tetapi belum terhubung ke rincian layanan yang telah difinalisasi." : "Alamat ini dikenali oleh sistem, tetapi belum terhubung ke data produk yang telah diverifikasi. Nama, model, spesifikasi, harga, stok, serta foto tidak akan dibuat-buat."}</p>
            <StatusMessage variant="info" title={isService ? "Layanan belum terdaftar" : "Produk belum terdaftar"}>Kode URL: <code>{slug}</code></StatusMessage>
            <div className="route-actions"><Button href={business.catalogPath} variant="secondary"><ArrowLeft size={15} aria-hidden="true" /> Kembali ke {isService ? 'layanan' : 'katalog'}</Button><Button href="/kontak"><FileSearch size={15} aria-hidden="true" /> {isService ? 'Tanyakan layanan' : 'Tanyakan produk'}</Button></div>
          </div>
        </div>
      </section>
    </main>
  )
}
