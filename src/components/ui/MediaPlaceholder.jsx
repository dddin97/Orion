import { useState } from 'react'
import { Camera, Image as ImageIcon, Package, Video } from 'lucide-react'
import './ui.css'

const MEDIA_RATIOS = {
  '1:1': { css: '1 / 1', file: '1-1.jpg' },
  '1.91:1': { css: '1.91 / 1', file: '1.91-1.jpg' },
  '9:16': { css: '9 / 16', file: '9-16.jpg' },
  '5:4': { css: '5 / 4', file: '5-4.jpg' },
  '5:3': { css: '5 / 3', file: '5-3.jpg' },
  '2:5': { css: '2 / 5', file: '2-5.jpg' },
  '3:2': { css: '3 / 2', file: '3-2.jpg' },
  '16:10': { css: '16 / 10', file: '16-10.jpg' },
  '17:9': { css: '17 / 9', file: '17-9.jpg' },
  '4:3': { css: '4 / 3', file: '4-3.jpg' },
  '4:1': { css: '4 / 1', file: '4-1.jpg' },
  '8:1': { css: '8 / 1', file: '8-1.jpg' },
  '3:4': { css: '3 / 4', file: '3-4.jpg' },
  '4:5': { css: '4 / 5', file: '4-5.jpg' },
  '16:9': { css: '16 / 9', file: '16-9.jpg' },
  '2:1': { css: '2 / 1', file: '2-1.jpg' },
  '3:1': { css: '3 / 1', file: '3-1.jpg' },
  '3:5': { css: '3 / 5', file: '3-5.jpg' },
  '2:3': { css: '2 / 3', file: '2-3.jpg' },
  '21:9': { css: '21 / 9', file: '21-9.jpg' },
}

const mediaIcon = { image: ImageIcon, product: Package, video: Video, portfolio: Camera, logo: ImageIcon }

/** Uses the supplied Phase-1 ratio placeholders until a verified asset is provided. */
export default function MediaPlaceholder({
  aspectRatio = '16:9',
  label = 'Media belum tersedia',
  caption,
  type = 'image',
  src,
  alt = '',
  fit = 'cover',
  className = '',
  loading = 'lazy',
}) {
  const [failedImageSrc, setFailedImageSrc] = useState(null)
  const ratio = MEDIA_RATIOS[aspectRatio] || { css: aspectRatio.replace(':', ' / '), file: '16-9.jpg' }
  const imageSrc = src || `/placeholders/${ratio.file}`
  const Icon = mediaIcon[type] || ImageIcon
  const showImage = Boolean(imageSrc) && failedImageSrc !== imageSrc

  return (
    <div className={`sm-media-placeholder${className ? ` ${className}` : ''}`} style={{ aspectRatio: ratio.css }} role={showImage ? undefined : 'img'} aria-label={showImage ? undefined : label}>
      {showImage && (
        <img
          className={`sm-media-placeholder__image${fit === 'contain' ? ' sm-media-placeholder__image--contain' : ''}`}
          src={imageSrc}
          alt={alt || (src ? label : '')}
          loading={loading}
          onError={() => setFailedImageSrc(imageSrc)}
        />
      )}
      {!showImage && (
        <div className="sm-media-placeholder__fallback" aria-hidden="true">
          <Icon className="sm-media-placeholder__icon" size={28} strokeWidth={1.5} />
          <span className="sm-media-placeholder__label">{label}</span>
          {caption && <span className="sm-media-placeholder__caption">{caption}</span>}
        </div>
      )}
    </div>
  )
}

export { MEDIA_RATIOS }
