import { Moon, Sun } from 'lucide-react'
import BrandMark from './BrandMark.jsx'
import './SiteHeader.css'

/**
 * Shared header for the showroom. Navigation targets are anchors for the current
 * single-page homepage; Phase 4 will convert public destinations to route links.
 */
export default function SiteHeader({
  menuOpen = false,
  onMenuToggle = () => {},
  onNavigate = () => {},
  lightMode = false,
  onToggleTheme = () => {},
}) {
  const closeMenu = () => onNavigate()

  return (
    <>
      <div className="announcement-bar">
        <span className="announcement-dot" />
        <span>SHOWMARKET BY ORION.LTD</span>
        <span className="announcement-separator">/</span>
        <span className="announcement-message">Showcase untuk produk, ide, dan solusi.</span>
      </div>

      <header className="site-header">
        <a className="brand-lockup" href="#home" onClick={closeMenu} aria-label="ORION ShowMarket, ke beranda">
          <BrandMark />
          <span className="brand-text"><strong>ORION<span>.</span></strong><small>SHOWMARKET</small></span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          onClick={onMenuToggle}
          aria-expanded={menuOpen}
          aria-controls="showmarket-primary-navigation"
          aria-label={menuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
        >
          <span /><span /><span />
        </button>

        <nav id="showmarket-primary-navigation" className={`main-nav${menuOpen ? ' nav-open' : ''}`} aria-label="Navigasi utama">
          <a href="#home" onClick={closeMenu}>Beranda</a>
          <a href="#business" onClick={closeMenu}>Lini Usaha</a>
          <a href="#partners" onClick={closeMenu}>Sumber Mitra</a>
          <a href="#how-it-works" onClick={closeMenu}>Cara Kerja</a>
          <a href="#contact" onClick={closeMenu}>Kontak</a>
          <button
            className="theme-toggle"
            type="button"
            onClick={onToggleTheme}
            aria-label={lightMode ? 'Aktifkan tema gelap' : 'Aktifkan tema terang'}
            title={lightMode ? 'Tema gelap' : 'Tema terang'}
          >
            {lightMode ? <Moon size={16} strokeWidth={1.8} /> : <Sun size={16} strokeWidth={1.8} />}
          </button>
          <a className="nav-cta" href="#business" onClick={closeMenu}>Jelajahi <span aria-hidden="true">↗</span></a>
        </nav>
      </header>
    </>
  )
}
