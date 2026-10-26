import './SectionHeading.css'

export default function SectionHeading({ eyebrow, title, description, light = false, className = '' }) {
  return (
    <div className={`section-heading${light ? ' section-heading-light' : ''}${className ? ` ${className}` : ''}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}
