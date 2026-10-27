
import { ChevronRight, House } from 'lucide-react'
import { Link } from 'react-router'
import './ui.css'

function isExternalHref(href) {
  return /^(https?:|mailto:|tel:)/i.test(href || '')
}

export default function Breadcrumbs({ items = [], showHome = true, homeLabel = 'Beranda', className = '' }) {
  const allItems = [...(showHome ? [{ label: homeLabel, href: '/', home: true }] : []), ...items]

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="sm-breadcrumbs">
        {allItems.map((item, index) => {
          const isLast = index === allItems.length - 1
          const label = <>{item.home && <House size={13} aria-hidden="true" />}<span>{item.label}</span></>
          return (
            <li key={`${item.label}-${index}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              {index > 0 && <ChevronRight className="sm-breadcrumbs__separator" size={13} aria-hidden="true" />}
              {item.href && !isLast
                ? (isExternalHref(item.href)
                  ? <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noreferrer' : undefined}>{label}</a>
                  : <Link to={item.href}>{label}</Link>)
                : <span aria-current={isLast ? 'page' : undefined}>{label}</span>}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
