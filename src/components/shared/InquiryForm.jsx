import { useState } from 'react'
import { useSearchParams } from 'react-router'
import { ArrowUpRight, Check, Copy, FileText } from 'lucide-react'
import { Button, Input, StatusMessage, Textarea } from '../ui/index.js'
import { getBusiness } from '../../data/businesses.js'
import { getCatalogItem } from '../../data/catalogItems.js'
import './InquiryForm.css'

const emptyValues = { name: '', contact: '', businessId: '', details: '' }

function validate(values) {
  const errors = {}
  if (values.name.trim().length < 2) errors.name = 'Nama minimal 2 karakter.'
  if (values.contact.trim().length < 5) errors.contact = 'Isi nomor WhatsApp atau email yang bisa dihubungi.'
  if (!['app', 'snd', 'asm'].includes(values.businessId)) errors.businessId = 'Pilih bidang usaha yang sesuai.'
  if (values.details.trim().length < 15) errors.details = 'Jelaskan kebutuhan minimal 15 karakter agar bisa ditindaklanjuti.'
  return errors
}

export default function InquiryForm() {
  const [searchParams] = useSearchParams()
  const queryBusinessId = searchParams.get('bidang') || ''
  const queryItemSlug = searchParams.get('item') || ''
  const preselectedItem = getCatalogItem(queryBusinessId, queryItemSlug)
  const [values, setValues] = useState(() => ({
    ...emptyValues,
    businessId: ['app', 'snd', 'asm'].includes(queryBusinessId) ? queryBusinessId : '',
    details: preselectedItem ? `Saya ingin bertanya tentang ${preselectedItem.name}. Mohon informasi lebih lanjut. ` : '',
  }))
  const [attempted, setAttempted] = useState(false)
  const [preparedMessage, setPreparedMessage] = useState('')
  const [copyStatus, setCopyStatus] = useState('')
  const errors = validate(values)
  const business = getBusiness(values.businessId)
  const emailHref = preparedMessage
    ? `mailto:orion.ltd@gmail.com?subject=${encodeURIComponent(`Permintaan informasi ${business?.code || 'ShowMarket'}`)}&body=${encodeURIComponent(preparedMessage)}`
    : 'mailto:orion.ltd@gmail.com?subject=Permintaan%20informasi%20ShowMarket'

  const updateValue = (field, value) => {
    setValues((current) => ({ ...current, [field]: value }))
    setCopyStatus('')
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setAttempted(true)
    setCopyStatus('')
    if (Object.keys(errors).length > 0) {
      setPreparedMessage('')
      return
    }
    const message = [
      'Halo ORION.Ltd, saya ingin mengajukan pertanyaan melalui ShowMarket.',
      '',
      `Nama: ${values.name.trim()}`,
      `Kontak balasan: ${values.contact.trim()}`,
      `Bidang usaha: ${business?.code || ''} — ${business?.name || ''}`,
      '',
      'Kebutuhan:',
      values.details.trim(),
      '',
      'Catatan: informasi ini disiapkan dari formulir frontend ShowMarket dan belum terkirim otomatis.',
    ].join('\n')
    setPreparedMessage(message)
  }

  const copyMessage = async () => {
    if (!preparedMessage) return
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard API tidak tersedia')
      await navigator.clipboard.writeText(preparedMessage)
      setCopyStatus('Pesan berhasil disalin. Tempelkan ke kanal komunikasi ORION yang telah dikonfirmasi.')
    } catch {
      setCopyStatus('Penyalinan otomatis tidak tersedia di browser ini. Pilih teks pada pratinjau pesan lalu salin secara manual.')
    }
  }

  return (
    <div className="inquiry-panel" id="form-permintaan">
      <div className="inquiry-panel__heading">
        <span className="route-eyebrow">INQUIRY / FRONTEND FORM</span>
        <h2>Jelaskan kebutuhan Anda.</h2>
        <p>Formulir ini memvalidasi masukan di browser dan menyiapkan draf pesan. Belum ada backend, pesan tidak disimpan ke server, dan WhatsApp otomatis belum aktif karena nomor publik lengkap belum dikonfirmasi.</p>
      </div>

      <form className="inquiry-form" onSubmit={handleSubmit} noValidate>
        <Input label="Nama" name="name" value={values.name} onChange={(event) => updateValue('name', event.target.value)} placeholder="Nama Anda" autoComplete="name" required error={attempted ? errors.name : undefined} />
        <Input label="Kontak balasan" name="contact" value={values.contact} onChange={(event) => updateValue('contact', event.target.value)} placeholder="Nomor WhatsApp atau email" autoComplete="email" required error={attempted ? errors.contact : undefined} />
        <div className="sm-field">
          <label className="sm-field__label" htmlFor="inquiry-business">Bidang usaha <span aria-hidden="true">*</span></label>
          <select id="inquiry-business" name="businessId" className="sm-input" value={values.businessId} onChange={(event) => updateValue('businessId', event.target.value)} aria-invalid={attempted && errors.businessId ? 'true' : undefined} required>
            <option value="">Pilih bidang usaha</option>
            <option value="app">APP — ORITLE Apparel</option>
            <option value="snd">SND — iQIFI Audio</option>
            <option value="asm">ASM — Audio System Assembly</option>
          </select>
          {attempted && errors.businessId && <span className="sm-field__error" role="alert">{errors.businessId}</span>}
        </div>
        <Textarea label="Ceritakan kebutuhan" name="details" value={values.details} onChange={(event) => updateValue('details', event.target.value)} placeholder="Tuliskan kategori, tujuan penggunaan, jumlah/perkiraan kebutuhan, lokasi umum, atau pertanyaan Anda…" rows={5} maxLength={2000} required error={attempted ? errors.details : undefined} hint={`${values.details.length}/2000 karakter. Hindari memasukkan data pribadi yang tidak diperlukan.`} />
        <div className="inquiry-form__footer">
          <span>Wajib diisi ditandai dengan *</span>
          <Button type="submit"><FileText size={15} aria-hidden="true" /> Siapkan draf pesan</Button>
        </div>
      </form>

      {preparedMessage && (
        <section className="inquiry-preview" aria-live="polite" aria-labelledby="inquiry-preview-title">
          <div className="inquiry-preview__heading"><Check size={18} aria-hidden="true" /><div><span className="route-eyebrow">VALIDASI BERHASIL</span><h3 id="inquiry-preview-title">Draf siap digunakan.</h3></div></div>
          <p>Pesan belum dikirim. Anda dapat menyalinnya atau membuat draf email agar dapat ditinjau kembali sebelum dikirim.</p>
          <textarea className="sm-textarea inquiry-preview__message" readOnly value={preparedMessage} rows={9} aria-label="Pratinjau draf pesan inquiry" />
          <div className="route-actions inquiry-preview__actions">
            <Button onClick={copyMessage} variant="secondary"><Copy size={15} aria-hidden="true" /> Salin pesan</Button>
            <Button href={emailHref}>Buat draf email <ArrowUpRight size={15} aria-hidden="true" /></Button>
          </div>
          {copyStatus && <p className="inquiry-preview__copy-status" role="status">{copyStatus}</p>}
          <StatusMessage variant="info" title="WhatsApp belum terhubung otomatis">Nomor pada brief masih disamarkan. Setelah nomor resmi lengkap dikonfirmasi, tautan WhatsApp dapat ditambahkan tanpa mengubah proses validasi formulir.</StatusMessage>
        </section>
      )}
    </div>
  )
}
