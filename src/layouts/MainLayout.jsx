import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router'
import SiteHeader from '../components/shared/SiteHeader.jsx'
import SiteFooter from '../components/shared/SiteFooter.jsx'
import PageMetadata from '../components/shared/PageMetadata.jsx'
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

function readSavedTheme() {
  try {
    return window.localStorage.getItem('orion-showmarket-theme') === 'light'
  } catch {
    return false
  }
}

export default function MainLayout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [lightMode, setLightMode] = useState(readSavedTheme)

  useEffect(() => {
    try {
      window.localStorage.setItem('orion-showmarket-theme', lightMode ? 'light' : 'dark')
    } catch {
      // Theme remains usable when browser storage is disabled.
    }
    document.documentElement.style.colorScheme = lightMode ? 'light' : 'dark'
  }, [lightMode])

  return (
    <div id="showmarket-top" className={`site-shell${lightMode ? ' light-mode' : ''}`}>
      <PageMetadata />
      <ScrollManager />
      <a className="skip-link" href="#main-content">Lewati ke konten utama</a>
      <SiteHeader
        menuOpen={menuOpen}
        onMenuToggle={() => setMenuOpen((open) => !open)}
        onNavigate={() => setMenuOpen(false)}
        lightMode={lightMode}
        onToggleTheme={() => setLightMode((current) => !current)}
      />
      <div id="main-content" className="site-content" tabIndex="-1">
        <Outlet />
      </div>
      <SiteFooter />
    </div>
  )
}
