import { ArrowUpRight } from 'lucide-react'
import Button from './Button.jsx'
import Badge from './Badge.jsx'
import MediaPlaceholder from './MediaPlaceholder.jsx'
import Card from './Card.jsx'
import './ui.css'

/** Render only supplied product facts; never infers price, stock, or model specifications. */
export default function ProductCard({
  product,
  href,
  onAction,
  actionLabel = 'Lihat detail',
  showPrice = true,
  className = '',
}) {
  if (!product) return null
  const productName = product.name || product.title || 'Nama produk belum tersedia'
  const productHref = href || product.href || product.productUrl
  const category = product.categoryName || product.category
  const details = [product.brand, product.model].filter(Boolean).join(' · ')
  const priceLabel = product.priceLabel || (product.price !== undefined && product.price !== null ? product.price : null)

  return (
    <Card interactive className={`sm-product-card${className ? ` ${className}` : ''}`}>
      <div className="sm-product-card__media">
        <MediaPlaceholder
          aspectRatio="1:1"
          type="product"
          src={product.image || product.imageUrl}
          label={product.imageLabel || productName}
          fit={product.imageFit || 'contain'}
          alt={product.imageAlt || productName}
        />
        {product.statusLabel && <div style={{ position: 'absolute', left: 12, top: 12 }}><Badge variant={product.statusVariant || 'neutral'}>{product.statusLabel}</Badge></div>}
      </div>
      <div className="sm-product-card__body">
        {category && <span className="sm-product-card__category">{category}</span>}
        <h3 className="sm-product-card__title">{productName}</h3>
        {details && <p className="sm-product-card__meta">{details}</p>}
        {product.description && <p className="sm-product-card__meta">{product.description}</p>}
        {showPrice && priceLabel !== null && priceLabel !== undefined && <div className="sm-product-card__price">{priceLabel}</div>}
        {(productHref || onAction) && (
          <div className="sm-product-card__actions">
            {productHref ? <Button href={productHref} variant="secondary" block>{actionLabel}<ArrowUpRight size={15} aria-hidden="true" /></Button> : <Button onClick={onAction} variant="secondary" block>{actionLabel}</Button>}
          </div>
        )}
      </div>
    </Card>
  )
}
