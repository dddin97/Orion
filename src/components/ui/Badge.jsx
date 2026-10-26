import { CheckCircle2, AlertCircle, Clock3, Info } from 'lucide-react'
import './ui.css'

const statusIcons = {
  success: CheckCircle2,
  warning: Clock3,
  danger: AlertCircle,
  info: Info,
}

export default function Badge({ children, variant = 'neutral', dot = false, icon = false, className = '' }) {
  const Icon = icon ? statusIcons[variant] : null
  return (
    <span className={`sm-badge sm-badge--${variant}${className ? ` ${className}` : ''}`}>
      {dot && <span className="sm-badge__dot" aria-hidden="true" />}
      {Icon && <Icon size={13} aria-hidden="true" />}
      {children}
    </span>
  )
}
