import { Link } from 'react-router'
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
    const isInternal = href.startsWith('/')
    const LinkComponent = isInternal ? Link : 'a'
    const routeProps = isInternal ? { to: href } : { href: disabled ? undefined : href }
    return (
      <LinkComponent
        className={classes}
        {...routeProps}
        target={isInternal ? undefined : target}
        rel={!isInternal && target === '_blank' ? (rel || 'noreferrer') : rel}
        aria-disabled={disabled || loading ? 'true' : undefined}
        aria-busy={loading || undefined}
        onClick={disabled || loading ? (event) => event.preventDefault() : onClick}
        {...props}
      >
        {content}
      </LinkComponent>
    )
  }

  return (
    <button className={classes} type={type} disabled={disabled || loading} aria-busy={loading || undefined} onClick={onClick} {...props}>
      {content}
    </button>
  )
}
