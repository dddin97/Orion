
import Breadcrumbs from '../ui/Breadcrumbs.jsx'
import './PageIntro.css'

export default function PageIntro({ eyebrow, title, description, breadcrumbs = [], note, code }) {
  return (
    <section className="route-intro">
      <div className="route-container">
        <Breadcrumbs items={breadcrumbs} className="route-breadcrumbs" />
        <div className="route-intro__grid">
          <div className="route-intro__copy">
            {eyebrow && <span className="route-eyebrow">{eyebrow}</span>}
            <h1>{title}</h1>
            {description && <p>{description}</p>}
          </div>
          <div className="route-intro__aside" aria-label="Identitas halaman">
            <span className="route-intro__aside-label">ORION / SHOWMARKET</span>
            <span className="route-intro__code">{code || 'THE SKY HUNTER'}</span>
            {note && <p>{note}</p>}
            <span className="route-intro__aside-rule" />
          </div>
        </div>
      </div>
    </section>
  )
}
