
import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router'
import SiteHeader from '../components/shared/SiteHeader.jsx'
import SiteFooter from '../components/shared/SiteFooter.jsx'
import './MainLayout.css'

function ScrollManager() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const targetId = decodeURIComponent(location.hash.slice(1))
      window.requestAnimationFrame(() => {
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
      return
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [location.pathname, location.hash])

  return null
}

export default function MainLayout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [lightMode, setLightMode] = useState(false)

  return (
    <div id="showmarket-top" className={`site-shell${lightMode ? ' light-mode' : ''}`}>
      <ScrollManager />
      <SiteHeader
        menuOpen={menuOpen}
        onMenuToggle={() => setMenuOpen((open) => !open)}
        onNavigate={() => setMenuOpen(false)}
        lightMode={lightMode}
        onToggleTheme={() => setLightMode((current) => !current)}
      />
      <Outlet />
      <SiteFooter />
    </div>
  )
}
