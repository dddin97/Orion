import { useEffect, useId } from 'react'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'
import './ui.css'

export default function Modal({
  isOpen,
  onClose,
  title,
  description,
  children,
  footer,
  closeOnOverlayClick = true,
  closeLabel = 'Tutup dialog',
  className = '',
}) {
  const titleId = useId()
  const descriptionId = useId()

  useEffect(() => {
    if (!isOpen) return undefined
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose?.()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen || typeof document === 'undefined') return null

  return createPortal(
    <div
      className="sm-modal-backdrop"
      onMouseDown={(event) => {
        if (closeOnOverlayClick && event.target === event.currentTarget) onClose?.()
      }}
    >
      <section
        className={`sm-modal${className ? ` ${className}` : ''}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? titleId : undefined}
        aria-describedby={description ? descriptionId : undefined}
      >
        <header className="sm-modal__header">
          <div>
            {title && <h2 className="sm-modal__title" id={titleId}>{title}</h2>}
            {description && <p className="sm-modal__description" id={descriptionId}>{description}</p>}
          </div>
          <button className="sm-modal-close" type="button" onClick={onClose} aria-label={closeLabel}>
            <X size={17} aria-hidden="true" />
          </button>
        </header>
        <div className="sm-modal__content">{children}</div>
        {footer && <footer className="sm-modal__footer">{footer}</footer>}
      </section>
    </div>,
    document.body,
  )
}
