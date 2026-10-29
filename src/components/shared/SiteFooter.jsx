
import { Link } from 'react-router'
import BrandMark from './BrandMark.jsx'
import './SiteFooter.css'

export default function SiteFooter({ year = new Date().getFullYear() }) {
  return (
    <footer className="site-footer">
      <Link className="footer-brand" to="/" aria-label="ORION, kembali ke beranda">
        <BrandMark compact />
        <span><strong>ORION<span>.</span></strong><small>THE SKY HUNTER</small></span>
      </Link>
      <p>Raise your creativity. Create your history.</p>
      <div className="footer-bottom">
        <span>© {year} ORION.Ltd — ShowMarket</span>
        <a href="#showmarket-top">Kembali ke atas ↑</a>
        <span>Made to explore.</span>
      </div>
    </footer>
  )
}
