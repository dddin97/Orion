import { ChevronRight, House } from 'lucide-react'
import './ui.css'

export default function Breadcrumbs({ items = [], showHome = true, homeLabel = 'Beranda', className = '' }) {
  const allItems = [...(showHome ? [{ label: homeLabel, href: '#home', home: true }] : []), ...items]
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="sm-breadcrumbs">
        {allItems.map((item, index) => {
          const isLast = index === allItems.length - 1
          return (
            <li key={`${item.label}-${index}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              {index > 0 && <ChevronRight className="sm-breadcrumbs__separator" size={13} aria-hidden="true" />}
              {item.href && !isLast ? (
                <a href={item.href}>{item.home && <House size={13} aria-hidden="true" />}<span>{item.label}</span></a>
              ) : (
                <span aria-current={isLast ? 'page' : undefined}>{item.label}</span>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
