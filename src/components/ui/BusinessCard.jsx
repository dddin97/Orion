import { ArrowUpRight } from 'lucide-react'
import Button from './Button.jsx'
import Badge from './Badge.jsx'
import MediaPlaceholder from './MediaPlaceholder.jsx'
import Card from './Card.jsx'
import './ui.css'

export default function BusinessCard({
  name,
  eyebrow,
  description,
  tags = [],
  href,
  imageSrc,
  imageLabel,
  accent = 'orange',
  actionLabel = 'Jelajahi bidang',
  code,
}) {
  return (
    <Card interactive className={`sm-business-card sm-business-card--${accent}`}>
      <div className="sm-product-card__media">
        <MediaPlaceholder aspectRatio="4:3" type="image" src={imageSrc} label={imageLabel || name || 'Media usaha'} caption={code || 'SHOWMARKET / BUSINESS'} />
        {code && <span className="sm-business-card__code">{code}</span>}
      </div>
      <div className="sm-product-card__body">
        {eyebrow && <span className="sm-product-card__category">{eyebrow}</span>}
        <h3 className="sm-product-card__title">{name}</h3>
        {description && <p className="sm-product-card__meta">{description}</p>}
        {tags.length > 0 && <div className="sm-business-card__tags">{tags.map((tag) => <Badge key={tag} variant="neutral">{tag}</Badge>)}</div>}
        {href && <Button href={href} variant="secondary" block>{actionLabel}<ArrowUpRight size={15} aria-hidden="true" /></Button>}
      </div>
    </Card>
  )
}
