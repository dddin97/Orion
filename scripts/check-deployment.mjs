import { existsSync, readFileSync, statSync } from 'node:fs'
import { resolve, join, relative, sep } from 'node:path'

const root = process.cwd()
const dist = resolve(root, 'dist')
const failures = []
const notes = []

function fail(message) {
  failures.push(message)
}

function checkFile(path, label) {
  if (!existsSync(path) || !statSync(path).isFile()) {
    fail(`${label} tidak ditemukan: ${relative(root, path).split(sep).join('/')}`)
    return false
  }
  return true
}

if (!existsSync(dist) || !statSync(dist).isDirectory()) {
  console.error('Folder dist/ belum ditemukan. Jalankan `npm run build` dahulu.')
  process.exit(1)
}

const htmlPath = join(dist, 'index.html')
const robotsPath = join(dist, 'robots.txt')
const vercelPath = resolve(root, 'vercel.json')
const routesPath = resolve(root, 'src/routes/AppRoutes.jsx')

if (checkFile(htmlPath, 'Entry HTML')) {
  const html = readFileSync(htmlPath, 'utf8')
  if (!html.includes('<div id="root"></div>')) {
    fail('index.html tidak berisi mount point #root React yang diharapkan.')
  }
  const localRefs = [...html.matchAll(/(?:src|href)=["']([^"']+)["']/g)]
    .map((match) => match[1])
    .filter((url) => url.startsWith('/') && !url.startsWith('//'))
  for (const url of localRefs) {
    const pathname = decodeURIComponent(url.split(/[?#]/, 1)[0])
    if (pathname === '/') continue
    const target = resolve(dist, `.${pathname}`)
    if (!existsSync(target)) fail(`Aset lokal dari index.html tidak ditemukan: ${url}`)
  }
}

checkFile(robotsPath, 'robots.txt')
if (checkFile(vercelPath, 'Konfigurasi Vercel')) {
  try {
    const config = JSON.parse(readFileSync(vercelPath, 'utf8'))
    if (config.outputDirectory !== 'dist') fail('vercel.json harus memakai outputDirectory "dist".')
    if (!Array.isArray(config.rewrites) || !config.rewrites.some((rule) => rule.destination === '/index.html')) {
      fail('vercel.json belum memiliki rewrite SPA menuju /index.html.')
    }
  } catch (error) {
    fail(`vercel.json tidak valid: ${error.message}`)
  }
}

if (checkFile(routesPath, 'Konfigurasi React Router')) {
  const routes = readFileSync(routesPath, 'utf8')
  for (const route of ['kebijakan-privasi', 'syarat-penggunaan']) {
    if (!routes.includes(`path="${route}"`)) fail(`Route legal belum terdaftar: /${route}`)
  }
}

if (!existsSync(join(dist, 'sitemap.xml'))) {
  notes.push('sitemap.xml tidak ditemukan. Ini tidak menggagalkan build; buat setelah URL publik yang akan dipakai untuk sitemap dipastikan dan route sitemap ditinjau.')
}

if (failures.length) {
  console.error('\nPEMERIKSAAN DEPLOYMENT: GAGAL')
  for (const failure of failures) console.error(`- ${failure}`)
  process.exit(1)
}

console.log('PEMERIKSAAN DEPLOYMENT: LULUS')
console.log('- dist/index.html dan referensi aset lokal ditemukan.')
console.log('- robots.txt tersedia di output produksi.')
console.log('- vercel.json valid dan fallback SPA mengarah ke /index.html.')
console.log('- Route legal tersedia di React Router.')
for (const note of notes) console.warn(`CATATAN: ${note}`)
