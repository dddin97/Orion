import { useMemo, useState } from 'react'
import { Search, SlidersHorizontal, X } from 'lucide-react'
import PageIntro from '../../components/shared/PageIntro.jsx'
import { Button, ProductCard, StatusMessage } from '../../components/ui/index.js'
import { getBusiness } from '../../data/businesses.js'
import { getCatalogItemsForBusiness, getCatalogItemHref } from '../../data/catalogItems.js'
import './CatalogPage.css'

const normalize = (value) => String(value || '').toLocaleLowerCase('id-ID').normalize('NFD').replace(/[\u0300-\u036f]/g, '')

export default function CatalogPage({ businessId }) {
  const business = getBusiness(businessId)
  const items = getCatalogItemsForBusiness(businessId)
  const isService = businessId === 'asm'
  const pageLabel = isService ? 'Layanan' : 'Katalog'
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('all')
  const [sortBy, setSortBy] = useState('featured')

  const categories = useMemo(
    () => [...new Set(items.map((item) => item.category).filter(Boolean))].sort((a, b) => a.localeCompare(b, 'id')),
    [items],
  )

  const filteredItems = useMemo(() => {
    const needle = normalize(query.trim())
    const matched = items.filter((item) => {
      const matchesCategory = category === 'all' || item.category === category
      const searchable = [item.name, item.category, item.description, ...(item.keywords || []), ...(item.partnerReferences || [])].join(' ')
      return matchesCategory && (!needle || normalize(searchable).includes(needle))
    })
    if (sortBy === 'name-asc') matched.sort((a, b) => a.name.localeCompare(b.name, 'id'))
    if (sortBy === 'name-desc') matched.sort((a, b) => b.name.localeCompare(a.name, 'id'))
    if (sortBy === 'category-asc') matched.sort((a, b) => a.category.localeCompare(b.category, 'id') || a.name.localeCompare(b.name, 'id'))
    return matched
  }, [items, query, category, sortBy])

  const resetFilters = () => {
    setQuery('')
    setCategory('all')
    setSortBy('featured')
  }

  if (!business) return null

  return (
    <main>
      <PageIntro
        eyebrow={`${business.code} / ${pageLabel.toUpperCase()}`}
        title={isService ? 'Temukan alur layanan perakitan audio.' : `Jelajahi kategori ${business.name}.`}
        description={isService
          ? 'Telusuri tahap konsultasi, perencanaan konfigurasi, dan perakitan custom. Entri saat ini merupakan contoh antarmuka layanan, bukan penawaran harga.'
          : 'Cari dan saring kategori untuk membantu menemukan kebutuhan Anda. Entri di bawah adalah preview kategori lokal; bukan daftar produk dan harga yang telah dikonfirmasi.'}
        code={`${business.code} / ${isService ? 'SERVICES' : 'CATALOG'}`}
        breadcrumbs={[{ label: business.name, href: `/${business.id}` }, { label: pageLabel }]}
      />

      <section className="route-section route-container catalog-route catalog-interactive" aria-labelledby="catalog-results-title">
        <div className="catalog-controls">
          <label className="catalog-controls__field" htmlFor={`catalog-search-${businessId}`}>
            <span><Search size={14} aria-hidden="true" /> Cari {isService ? 'layanan' : 'kategori'}</span>
            <input
              id={`catalog-search-${businessId}`}
              className="sm-input"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={isService ? 'Contoh: konsultasi, rakit…' : 'Contoh: kaos, speaker, mixer…'}
              autoComplete="off"
            />
          </label>
          <label className="catalog-controls__field" htmlFor={`catalog-category-${businessId}`}>
            <span><SlidersHorizontal size={14} aria-hidden="true" /> Kategori</span>
            <select id={`catalog-category-${businessId}`} className="sm-input" value={category} onChange={(event) => setCategory(event.target.value)}>
              <option value="all">Semua kategori</option>
              {categories.map((itemCategory) => <option value={itemCategory} key={itemCategory}>{itemCategory}</option>)}
            </select>
          </label>
          <label className="catalog-controls__field" htmlFor={`catalog-sort-${businessId}`}>
            <span>Urutkan</span>
            <select id={`catalog-sort-${businessId}`} className="sm-input" value={sortBy} onChange={(event) => setSortBy(event.target.value)}>
              <option value="featured">Urutan awal</option>
              <option value="name-asc">Nama: A–Z</option>
              <option value="name-desc">Nama: Z–A</option>
              <option value="category-asc">Kategori: A–Z</option>
            </select>
          </label>
        </div>

        <div className="catalog-results-bar">
          <div>
            <span className="route-eyebrow">HASIL PENCARIAN / {business.code}</span>
            <h2 id="catalog-results-title">{filteredItems.length} {isService ? 'layanan' : 'kategori'} ditemukan</h2>
          </div>
          {(query || category !== 'all' || sortBy !== 'featured') && (
            <Button variant="ghost" size="sm" onClick={resetFilters}><X size={14} aria-hidden="true" /> Reset filter</Button>
          )}
        </div>

        <div className="catalog-demo-note">
          <StatusMessage variant="info" title="Konten pratinjau lokal">
            Kategori ini dipakai untuk menguji pencarian dan filter. Model, spesifikasi, harga, stok, serta foto produk aktual belum dipublikasikan sampai diverifikasi.
          </StatusMessage>
        </div>

        {filteredItems.length > 0 ? (
          <div className="catalog-results-grid">
            {filteredItems.map((item) => (
              <ProductCard
                key={item.id}
                product={{ ...item, imageLabel: 'Placeholder media — foto aktual belum tersedia', imageAlt: 'Placeholder media; bukan foto produk aktual' }}
                href={getCatalogItemHref(businessId, item)}
                actionLabel={isService ? 'Lihat layanan' : 'Lihat kategori'}
                showPrice={false}
                className="phase6-product-card"
              />
            ))}
          </div>
        ) : (
          <div className="catalog-empty-state" aria-live="polite">
            <Search size={26} aria-hidden="true" />
            <h3>Tidak ada hasil yang cocok.</h3>
            <p>Coba kata pencarian lain atau hapus filter kategori untuk melihat seluruh entri pratinjau.</p>
            <Button onClick={resetFilters}>Tampilkan semua kategori</Button>
          </div>
        )}
      </section>
    </main>
  )
}
