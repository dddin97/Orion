import { useState } from 'react'
import { ArrowLeft, ArrowUpRight, ImagePlus, Play, ZoomIn } from 'lucide-react'
import { useParams } from 'react-router'
import PageIntro from '../../components/shared/PageIntro.jsx'
import { Button, MediaPlaceholder, Modal, ProductCard, StatusMessage } from '../../components/ui/index.js'
import { getBusiness } from '../../data/businesses.js'
import { getCatalogItem, getCatalogItemsForBusiness, getCatalogItemHref } from '../../data/catalogItems.js'
import './CatalogPage.css'

function buildGallery(item, isService) {
  const kind = isService ? 'portfolio' : 'product'
  return [
    { id: 'primary', ratio: '1:1', type: kind, label: item.galleryLabel || 'Slot media utama', title: 'Media utama' },
    { id: 'support', ratio: '3:2', type: 'image', label: 'Placeholder foto pendukung', title: 'Foto pendukung' },
    { id: 'video', ratio: '16:9', type: 'video', label: 'Slot video belum tersedia', title: 'Video' },
  ]
}

export default function ProductDetailPage({ businessId }) {
  const { slug } = useParams()
  const business = getBusiness(businessId)
  const item = getCatalogItem(businessId, slug)
  const isService = businessId === 'asm' || item?.statusLabel === 'Preview layanan'
  const [galleryState, setGalleryState] = useState({ slug: null, index: 0, open: false })
  const gallery = item ? buildGallery(item, isService) : []
  const activeMediaIndex = galleryState.slug === slug ? galleryState.index : 0
  const galleryOpen = galleryState.slug === slug && galleryState.open
  const activeMedia = gallery[activeMediaIndex]
  const relatedItems = getCatalogItemsForBusiness(businessId).filter((entry) => entry.slug !== slug).slice(0, 3)

  if (!business) return null

  if (!item) {
    return (
      <main>
        <PageIntro
          eyebrow={`${business.code} / ${isService ? 'SERVICE DETAIL' : 'DETAIL'}`}
          title="Konten belum tersedia."
          description="Alamat detail ini belum terhubung ke entri kategori lokal yang dikenali oleh ShowMarket."
          code={String(slug || 'ITEM').toUpperCase().slice(0, 18)}
          breadcrumbs={[{ label: business.name, href: `/${business.id}` }, { label: isService ? 'Layanan' : 'Katalog', href: business.catalogPath }, { label: 'Detail' }]}
        />
        <section className="route-section route-container product-detail-route">
          <StatusMessage variant="info" title="Entri tidak ditemukan">Tidak ada kategori atau layanan dengan kode URL <code>{slug}</code>.</StatusMessage>
          <div className="route-actions"><Button href={business.catalogPath} variant="secondary"><ArrowLeft size={15} aria-hidden="true" /> Kembali ke {isService ? 'layanan' : 'katalog'}</Button></div>
        </section>
      </main>
    )
  }

  const inquiryHref = `/kontak?bidang=${encodeURIComponent(businessId)}&item=${encodeURIComponent(item.slug)}`

  return (
    <main>
      <PageIntro
        eyebrow={`${business.code} / ${isService ? 'SERVICE PREVIEW' : 'CATEGORY PREVIEW'}`}
        title={item.name}
        description={item.description}
        code={String(item.slug).toUpperCase().slice(0, 18)}
        note="Pratinjau antarmuka — bukan daftar produk atau penawaran final."
        breadcrumbs={[{ label: business.name, href: `/${business.id}` }, { label: isService ? 'Layanan' : 'Katalog', href: business.catalogPath }, { label: item.name }]}
      />

      <section className="route-section route-container product-detail-route">
        <div className="product-detail-route__grid">
          <div>
            <div className="product-detail-route__gallery" aria-label="Galeri media pratinjau">
              {gallery.map((media, index) => (
                <button
                  type="button"
                  key={media.id}
                  className={`product-detail-route__gallery-item${index === 0 ? ' product-detail-route__gallery-main' : ''}`}
                  onClick={() => setGalleryState({ slug, index, open: true })}
                  aria-label={`Buka ${media.title}: ${media.label}`}
                >
                  <MediaPlaceholder aspectRatio={media.ratio} type={media.type} label={media.label} caption="PLACEHOLDER / BELUM ADA ASET TERKONFIRMASI" />
                  <span className="product-detail-route__gallery-item-label">
                    <span>{media.title}</span>{media.type === 'video' ? <Play size={13} aria-hidden="true" /> : <ZoomIn size={13} aria-hidden="true" />}
                  </span>
                </button>
              ))}
            </div>
            <p className="catalog-route__small-note">Galeri ini menunjukkan interaksi media. Placeholder bukan foto produk atau dokumentasi pekerjaan yang sebenarnya.</p>
          </div>

          <div className="product-detail-route__copy">
            <span className="product-detail-route__label"><ImagePlus size={14} aria-hidden="true" /> {isService ? 'Pratinjau layanan' : 'Pratinjau kategori'}</span>
            <h2>{isService ? 'Ruang lingkup dibahas saat konsultasi.' : 'Detail produk akan dilengkapi setelah verifikasi.'}</h2>
            <p>{isService
              ? 'Kebutuhan, lokasi, konfigurasi, komponen, jadwal, dan estimasi biaya perlu dibahas dahulu. Halaman ini belum menjadi paket layanan atau penawaran resmi.'
              : 'Entri ini mewakili kategori produk, bukan model tertentu. Spesifikasi teknis, harga jual ORION, ketersediaan, dan media akan diisi setelah sumber serta izin publikasi diperiksa.'}</p>

            <div className="product-detail-route__facts">
              <div className="product-detail-route__fact"><span>Status data</span><strong>Pratinjau lokal</strong></div>
              <div className="product-detail-route__fact"><span>{isService ? 'Harga layanan' : 'Harga produk'}</span><strong>Belum dikonfirmasi</strong></div>
              <div className="product-detail-route__fact"><span>{isService ? 'Ruang lingkup' : 'Model / spesifikasi'}</span><strong>Perlu verifikasi</strong></div>
              <div className="product-detail-route__fact"><span>Media</span><strong>Placeholder sementara</strong></div>
            </div>

            {item.partnerReferences?.length > 0 && (
              <p className="catalog-route__small-note">Referensi mitra pada brief: {item.partnerReferences.join(', ')}. Daftar ini bukan konfirmasi ketersediaan produk tertentu atau izin penggunaan foto.</p>
            )}
            <div className="route-actions">
              <Button href={business.catalogPath} variant="secondary"><ArrowLeft size={15} aria-hidden="true" /> Kembali ke {isService ? 'layanan' : 'katalog'}</Button>
              <Button href={inquiryHref}>Tanyakan kebutuhan <ArrowUpRight size={15} aria-hidden="true" /></Button>
            </div>
          </div>
        </div>

        {relatedItems.length > 0 && (
          <section className="product-detail-route__related" aria-labelledby="related-categories-title">
            <div className="product-detail-route__related-heading">
              <div><span className="route-eyebrow">JELAJAHI / {business.code}</span><h2 id="related-categories-title">Kategori lainnya.</h2></div>
              <Button href={business.catalogPath} variant="ghost" size="sm">Lihat semua <ArrowUpRight size={14} aria-hidden="true" /></Button>
            </div>
            <div className="product-detail-route__related-grid">
              {relatedItems.map((related) => (
                <ProductCard key={related.id} product={{ ...related, imageLabel: 'Placeholder media — foto aktual belum tersedia', imageAlt: 'Placeholder media; bukan foto produk aktual' }} href={getCatalogItemHref(businessId, related)} showPrice={false} actionLabel={isService ? 'Lihat layanan' : 'Lihat kategori'} className="phase6-product-card" />
              ))}
            </div>
          </section>
        )}
      </section>

      <Modal
        isOpen={galleryOpen}
        onClose={() => setGalleryState((current) => ({ ...current, open: false }))}
        title={activeMedia?.title || 'Media pratinjau'}
        description={activeMedia?.label || 'Placeholder media'}
        className="phase6-gallery-modal"
      >
        {activeMedia && (
          <div className="phase6-gallery-modal__media">
            <MediaPlaceholder aspectRatio={activeMedia.ratio} type={activeMedia.type} label={activeMedia.label} caption="PLACEHOLDER / BELUM ADA ASET TERKONFIRMASI" />
            <p className="phase6-gallery-modal__note">Media ini hanya placeholder lokal untuk menguji modal galeri. Ganti dengan foto/video yang sudah diverifikasi dan diizinkan untuk dipublikasikan.</p>
          </div>
        )}
      </Modal>
    </main>
  )
}
