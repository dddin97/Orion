import { useEffect } from 'react'
import { useLocation } from 'react-router'
import { getBusiness } from '../../data/businesses.js'
import { getCatalogEntry, getPortfolioSlot } from '../../data/showroomContent.js'

const defaultMeta = {
  title: 'ORION ShowMarket — The Sky Hunter',
  description: 'ShowMarket by ORION.Ltd, showroom digital untuk mengenal ORITLE Apparel, iQIFI Audio, dan layanan Audio System Assembly.',
  robots: 'index,follow',
}

const staticPages = {
  '/': defaultMeta,
  '/app': {
    title: 'ORITLE Apparel (APP) | ORION ShowMarket',
    description: 'Kenali kategori apparel ORITLE: T-shirt, polo, jaket, hoodie, grosir, dan sablon custom. Detail produk dikonfirmasi setelah verifikasi.',
    robots: 'index,follow',
  },
  '/app/katalog': {
    title: 'Katalog Apparel | ORITLE APP — ORION ShowMarket',
    description: 'Jelajahi kategori apparel ORITLE, termasuk T-shirt, polo, jaket, hoodie, dan sablon custom. Preview kategori bukan daftar stok atau model aktual.',
    robots: 'noindex,follow',
  },
  '/snd': {
    title: 'iQIFI Audio (SND) | ORION ShowMarket',
    description: 'Kenali kategori speaker, driver, amplifier, mixer, mikrofon, dan perangkat pendukung sound system di iQIFI Audio.',
    robots: 'index,follow',
  },
  '/snd/katalog': {
    title: 'Katalog Audio | iQIFI Audio — ORION ShowMarket',
    description: 'Jelajahi kategori perangkat audio dan elektronik dari sumber mitra. Model, spesifikasi, harga, dan ketersediaan menunggu verifikasi.',
    robots: 'noindex,follow',
  },
  '/asm': {
    title: 'Audio System Assembly (ASM) | ORION ShowMarket',
    description: 'Informasi konsultasi dan perencanaan perakitan paket sound system sesuai penggunaan, konfigurasi, lokasi, dan anggaran.',
    robots: 'index,follow',
  },
  '/asm/katalog': {
    title: 'Layanan Perakitan Sound System | ASM — ORION ShowMarket',
    description: 'Kenali alur konsultasi, perencanaan konfigurasi, dan perakitan sound system custom. Kebutuhan serta estimasi biaya dikonfirmasi melalui diskusi.',
    robots: 'noindex,follow',
  },
  '/portofolio': {
    title: 'Portofolio | ORION ShowMarket',
    description: 'Ruang dokumentasi untuk apparel, perangkat audio, dan proyek sound system assembly. Materi akan ditampilkan setelah detail dan izin publikasi diverifikasi.',
    robots: 'noindex,follow',
  },
  '/tentang': {
    title: 'Tentang ORION.Ltd dan ShowMarket',
    description: 'Pelajari ShowMarket, showroom digital ORION.Ltd yang memperkenalkan ORITLE Apparel, iQIFI Audio, dan Audio System Assembly.',
    robots: 'index,follow',
  },
  '/kontak': {
    title: 'Kontak ORION ShowMarket',
    description: 'Hubungi ORION melalui email untuk pertanyaan tentang apparel, perangkat audio, dan layanan perakitan sound system.',
    robots: 'index,follow',
  },
  '/kebijakan-privasi': {
    title: 'Kebijakan Privasi | ORION ShowMarket',
    description: 'Informasi tentang data yang diproses ketika Anda menggunakan website ShowMarket, preferensi tema, dan kanal kontak ORION.',
    robots: 'index,follow',
  },
  '/syarat-penggunaan': {
    title: 'Syarat Penggunaan | ORION ShowMarket',
    description: 'Ketentuan penggunaan ShowMarket sebagai showroom informasi produk dan layanan ORION.Ltd.',
    robots: 'index,follow',
  },
}

function prettifySlug(slug = '') {
  return decodeURIComponent(slug)
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')
}

export function resolvePageMetadata(pathname) {
  const path = pathname.replace(/\/+$/, '') || '/'
  if (staticPages[path]) return staticPages[path]

  const itemMatch = path.match(/^\/(app|snd|asm)\/(?:produk|layanan)\/([^/]+)$/)
  if (itemMatch) {
    const [, businessId, slug] = itemMatch
    const business = getBusiness(businessId)
    const entry = getCatalogEntry(businessId, slug)
    if (business && entry) {
      return {
        title: `${entry.title} | ${business.name} — ORION ShowMarket`,
        description: `${entry.description} Informasi ini merupakan preview kategori; rincian aktual akan dilengkapi setelah verifikasi.`,
        // Detail ini masih berupa placeholder kategori/layanan, bukan katalog item final.
        robots: 'noindex,follow',
      }
    }
    return {
      title: `Detail belum tersedia | ${business?.name || 'ORION ShowMarket'}`,
      description: 'Detail ini belum terhubung ke konten yang telah diverifikasi.',
      robots: 'noindex,follow',
    }
  }

  const portfolioMatch = path.match(/^\/portofolio\/([^/]+)$/)
  if (portfolioMatch) {
    const slot = getPortfolioSlot(portfolioMatch[1])
    return slot
      ? {
          title: `${slot.title} | Portofolio ORION ShowMarket`,
          description: `${slot.description} Slot ini belum merupakan studi kasus final dan tidak menyatakan proyek telah selesai.`,
          robots: 'noindex,follow',
        }
      : { title: 'Dokumentasi belum tersedia | ORION ShowMarket', description: 'Dokumentasi portofolio belum tersedia untuk alamat ini.', robots: 'noindex,follow' }
  }

  return {
    title: 'Halaman tidak ditemukan | ORION ShowMarket',
    description: 'Alamat yang Anda buka tidak tersedia di ShowMarket. Kembali ke beranda untuk melanjutkan.',
    robots: 'noindex,follow',
  }
}

function upsertMeta(attribute, key, content) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

function upsertLink(rel, href) {
  let element = document.head.querySelector(`link[rel="${rel}"]`)
  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', rel)
    document.head.appendChild(element)
  }
  element.setAttribute('href', href)
}

/** Updates page metadata on client-side route changes. Set VITE_SITE_URL only after a real domain is chosen. */
export default function PageMetadata() {
  const { pathname } = useLocation()

  useEffect(() => {
    const meta = resolvePageMetadata(pathname)
    document.title = meta.title
    upsertMeta('name', 'description', meta.description)
    upsertMeta('name', 'robots', meta.robots)
    upsertMeta('property', 'og:title', meta.title)
    upsertMeta('property', 'og:description', meta.description)
    upsertMeta('property', 'og:type', 'website')
    upsertMeta('property', 'og:locale', 'id_ID')
    upsertMeta('name', 'twitter:card', 'summary')
    upsertMeta('name', 'twitter:title', meta.title)
    upsertMeta('name', 'twitter:description', meta.description)

    const configuredSiteUrl = import.meta.env.VITE_SITE_URL?.trim()
    let canonicalApplied = false
    if (configuredSiteUrl && meta.robots === 'index,follow') {
      try {
        const base = new URL(configuredSiteUrl)
        const isPlaceholderHost = /example|your-domain|domain-anda|domain-resmi-anda/i.test(base.hostname)
        if (!isPlaceholderHost && (base.protocol === 'https:' || base.hostname === 'localhost')) {
          const canonicalUrl = new URL(pathname, base.origin).href
          upsertLink('canonical', canonicalUrl)
          upsertMeta('property', 'og:url', canonicalUrl)
          canonicalApplied = true
        }
      } catch {
        // A malformed domain should not create a false canonical URL.
      }
    }
    if (!canonicalApplied) {
      document.head.querySelector('link[rel="canonical"]')?.remove()
      document.head.querySelector('meta[property="og:url"]')?.remove()
    }
  }, [pathname])

  return null
}
