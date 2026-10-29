/**
 * Accessible image wrapper for verified local/authorized assets.
 * Pass intrinsic width/height to reduce layout shift. Optional AVIF/WebP sources
 * let the browser choose a supported format; `src` remains the fallback.
 */
export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  avifSrc,
  webpSrc,
  srcSet,
  sizes = '(max-width: 720px) 100vw, 50vw',
  loading = 'lazy',
  priority = false,
  className = '',
  ...imgProps
}) {
  if (!src) return null

  return (
    <picture className={className ? `sm-optimized-picture ${className}` : 'sm-optimized-picture'}>
      {avifSrc ? <source srcSet={avifSrc} type="image/avif" sizes={sizes} /> : null}
      {webpSrc ? <source srcSet={webpSrc} type="image/webp" sizes={sizes} /> : null}
      <img
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt ?? ''}
        width={width}
        height={height}
        loading={priority ? 'eager' : loading}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding="async"
        {...imgProps}
      />
    </picture>
  )
}
