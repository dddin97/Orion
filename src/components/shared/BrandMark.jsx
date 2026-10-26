export default function BrandMark({ compact = false }) {
  return (
    <svg
      className={`orbital-mark${compact ? ' orbital-mark-compact' : ''}`}
      viewBox="0 0 44 44"
      role="img"
      aria-label="Logo konseptual ORION"
    >
      <circle cx="22" cy="22" r="15" fill="none" stroke="currentColor" strokeWidth="1.4" opacity=".6" />
      <ellipse cx="22" cy="22" rx="20" ry="8" transform="rotate(-36 22 22)" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="32.5" cy="10.5" r="3.2" fill="var(--accent, var(--sm-color-orange))" />
      <circle cx="22" cy="22" r="4.2" fill="currentColor" />
    </svg>
  )
}
