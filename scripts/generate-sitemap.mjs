import { writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'

const input = process.argv[2] || process.env.VITE_SITE_URL || process.env.SITE_URL
if (!input) {
  console.error('Domain belum diberikan. Jalankan: node scripts/generate-sitemap.mjs https://domain-resmi-anda.id')
  process.exit(1)
}

let site
try {
  site = new URL(input)
} catch {
  console.error('URL tidak valid. Berikan URL domain publik yang sebenarnya, misalnya https://showmarket-domain-anda.id')
  process.exit(1)
}
if (site.protocol !== 'https:' && site.hostname !== 'localhost') {
  console.error('Gunakan HTTPS untuk domain produksi. HTTP hanya diizinkan untuk localhost.')
  process.exit(1)
}
if (site.pathname !== '/' || site.search || site.hash || /example\.(com|org|net|id)$/i.test(site.hostname) || /your-domain|domain-anda|example/i.test(site.hostname)) {
  console.error('Berikan origin domain final saja, tanpa path/query, bukan domain contoh atau placeholder.')
  process.exit(1)
}
const origin = site.origin
const paths = [
  '/',
  '/app',
  '/snd',
  '/asm',
  '/tentang',
  '/kontak',
  '/kebijakan-privasi',
  '/syarat-penggunaan',
]
const today = new Date().toISOString().slice(0, 10)
const urls = paths.map((path) => `  <url>\n    <loc>${origin}${path}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`).join('\n')
const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
await writeFile(resolve('public/sitemap.xml'), xml, 'utf8')
console.log(`Sitemap dibuat: public/sitemap.xml (${paths.length} URL untuk ${origin})`)
console.log('Tinjau URL dan tanggalnya sebelum deployment. Detail kategori/portofolio demo sengaja tidak dimasukkan.')
