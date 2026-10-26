import './ui.css'

/** Shared accessible button/link primitive. Use href for navigation and onClick for actions. */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  block = false,
  loading = false,
  disabled = false,
  href,
  target,
  rel,
  type = 'button',
  className = '',
  onClick,
  ...props
}) {
  const classes = ['sm-button', `sm-button--${variant}`, size !== 'md' ? `sm-button--${size}` : '', block ? 'sm-button--block' : '', className]
    .filter(Boolean)
    .join(' ')

  const content = <>{loading && <span className="sm-button__spinner" aria-hidden="true" />}{children}</>

  if (href) {
    return (
      <a
        className={classes}
        href={disabled ? undefined : href}
        target={target}
        rel={target === '_blank' ? (rel || 'noreferrer') : rel}
        aria-disabled={disabled || loading ? 'true' : undefined}
        aria-busy={loading || undefined}
        onClick={disabled || loading ? (event) => event.preventDefault() : onClick}
        {...props}
      >
        {content}
      </a>
    )
  }

  return (
    <button className={classes} type={type} disabled={disabled || loading} aria-busy={loading || undefined} onClick={onClick} {...props}>
      {content}
    </button>
  )
}
