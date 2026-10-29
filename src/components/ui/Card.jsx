import './ui.css'

export function Card({ children, className = '', interactive = false, as: Element = 'article', ...props }) {
  return <Element className={`sm-card${interactive ? ' sm-card--interactive' : ''}${className ? ` ${className}` : ''}`} {...props}>{children}</Element>
}

export function CardHeader({ children, title, description, action, className = '' }) {
  return (
    <div className={`sm-card__header${className ? ` ${className}` : ''}`}>
      <div>
        {title && <h3 className="sm-card__title">{title}</h3>}
        {description && <p className="sm-card__description">{description}</p>}
        {children}
      </div>
      {action}
    </div>
  )
}

export function CardContent({ children, className = '' }) {
  return <div className={`sm-card__content${className ? ` ${className}` : ''}`}>{children}</div>
}

export function CardFooter({ children, className = '' }) {
  return <div className={`sm-card__footer${className ? ` ${className}` : ''}`}>{children}</div>
}

export default Card
