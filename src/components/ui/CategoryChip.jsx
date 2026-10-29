import './ui.css'

export default function CategoryChip({ children, selected = false, onClick, className = '', type = 'button' }) {
  return (
    <button
      className={`sm-chip${className ? ` ${className}` : ''}`}
      type={type}
      aria-pressed={selected}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
