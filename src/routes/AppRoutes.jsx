import { Route, Routes } from 'react-router'
import MainLayout from '../layouts/MainLayout.jsx'
import HomePage from '../pages/home/HomePage.jsx'
import BusinessPage from '../pages/business/BusinessPage.jsx'
import CatalogPage from '../pages/catalog/CatalogPage.jsx'
import ProductDetailPage from '../pages/catalog/ProductDetailPage.jsx'
import PortfolioPage from '../pages/portfolio/PortfolioPage.jsx'
import ProjectDetailPage from '../pages/portfolio/ProjectDetailPage.jsx'
import AboutPage from '../pages/about/AboutPage.jsx'
import ContactPage from '../pages/about/ContactPage.jsx'
import PrivacyPage from '../pages/legal/PrivacyPage.jsx'
import TermsPage from '../pages/legal/TermsPage.jsx'
import NotFoundPage from '../pages/NotFoundPage.jsx'

/** Public URL map for ShowMarket. */
export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="app" element={<BusinessPage businessId="app" />} />
        <Route path="app/katalog" element={<CatalogPage businessId="app" />} />
        <Route path="app/produk/:slug" element={<ProductDetailPage businessId="app" />} />
        <Route path="snd" element={<BusinessPage businessId="snd" />} />
        <Route path="snd/katalog" element={<CatalogPage businessId="snd" />} />
        <Route path="snd/produk/:slug" element={<ProductDetailPage businessId="snd" />} />
        <Route path="asm" element={<BusinessPage businessId="asm" />} />
        <Route path="asm/katalog" element={<CatalogPage businessId="asm" />} />
        <Route path="asm/layanan/:slug" element={<ProductDetailPage businessId="asm" />} />
        <Route path="portofolio" element={<PortfolioPage />} />
        <Route path="portofolio/:slug" element={<ProjectDetailPage />} />
        <Route path="tentang" element={<AboutPage />} />
        <Route path="kontak" element={<ContactPage />} />
        <Route path="kebijakan-privasi" element={<PrivacyPage />} />
        <Route path="syarat-penggunaan" element={<TermsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
