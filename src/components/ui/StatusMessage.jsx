import { AlertCircle, CheckCircle2, Info, LoaderCircle, TriangleAlert } from 'lucide-react'
import './ui.css'

const variants = {
  success: { icon: CheckCircle2, title: 'Berhasil' },
  warning: { icon: TriangleAlert, title: 'Perlu perhatian' },
  error: { icon: AlertCircle, title: 'Terjadi kendala' },
  info: { icon: Info, title: 'Informasi' },
  loading: { icon: LoaderCircle, title: 'Memuat data' },
}

export default function StatusMessage({ variant = 'info', title, children, className = '' }) {
  const config = variants[variant] || variants.info
  const Icon = config.icon
  return (
    <div className={`sm-status-message sm-status-message--${variant}${className ? ` ${className}` : ''}`} role={variant === 'error' ? 'alert' : 'status'}>
      <Icon className="sm-status-message__icon" size={18} aria-hidden="true" />
      <div>
        <p className="sm-status-message__title">{title || config.title}</p>
        {children && <p className="sm-status-message__description">{children}</p>}
      </div>
    </div>
  )
}
