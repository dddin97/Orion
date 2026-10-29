
import { Moon, Sun } from 'lucide-react'
import { Link, NavLink } from 'react-router'
import BrandMark from './BrandMark.jsx'
import './SiteHeader.css'

export default function SiteHeader({
  menuOpen = false,
  onMenuToggle = () => {},
  onNavigate = () => {},
  lightMode = false,
  onToggleTheme = () => {},
}) {
  const closeMenu = () => onNavigate()
  const navClass = ({ isActive }) => `main-nav-link${isActive ? ' is-active' : ''}`

  return (
    <>
      <div className="announcement-bar">
        <span className="announcement-dot" />
        <span>SHOWMARKET BY ORION.LTD</span>
        <span className="announcement-separator">/</span>
        <span className="announcement-message">Showcase untuk produk, ide, dan solusi.</span>
      </div>

      <header className="site-header">
        <Link className="brand-lockup" to="/" onClick={closeMenu} aria-label="ORION ShowMarket, ke beranda">
          <BrandMark />
          <span className="brand-text"><strong>ORION<span>.</span></strong><small>SHOWMARKET</small></span>
        </Link>

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
          <NavLink className={navClass} to="/" end onClick={closeMenu}>Beranda</NavLink>
          <NavLink className={navClass} to="/app" onClick={closeMenu}>APP</NavLink>
          <NavLink className={navClass} to="/snd" onClick={closeMenu}>SND</NavLink>
          <NavLink className={navClass} to="/asm" onClick={closeMenu}>ASM</NavLink>
          <NavLink className={navClass} to="/portofolio" onClick={closeMenu}>Portofolio</NavLink>
          <NavLink className={navClass} to="/tentang" onClick={closeMenu}>Tentang</NavLink>
          <NavLink className={navClass} to="/kontak" onClick={closeMenu}>Kontak</NavLink>
          <button
            className="theme-toggle"
            type="button"
            onClick={onToggleTheme}
            aria-label={lightMode ? 'Aktifkan tema gelap' : 'Aktifkan tema terang'}
            title={lightMode ? 'Tema gelap' : 'Tema terang'}
          >
            {lightMode ? <Moon size={16} strokeWidth={1.8} /> : <Sun size={16} strokeWidth={1.8} />}
          </button>
          <Link className="nav-cta" to="/app/katalog" onClick={closeMenu}>Jelajahi katalog <span aria-hidden="true">↗</span></Link>
        </nav>
      </header>
    </>
  )
}
