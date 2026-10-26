import { useId } from 'react'
import './ui.css'

export default function Input({ label, hint, error, id, className = '', wrapperClassName = '', ...inputProps }) {
  const generatedId = useId()
  const fieldId = id || generatedId
  const hintId = hint ? `${fieldId}-hint` : undefined
  const errorId = error ? `${fieldId}-error` : undefined

  return (
    <div className={`sm-field${wrapperClassName ? ` ${wrapperClassName}` : ''}`}>
      {label && <label className="sm-field__label" htmlFor={fieldId}>{label}{inputProps.required && <span aria-hidden="true"> *</span>}</label>}
      <input
        id={fieldId}
        className={`sm-input${className ? ` ${className}` : ''}`}
        {...inputProps}
        aria-invalid={error ? 'true' : inputProps['aria-invalid']}
        aria-describedby={[hintId, errorId, inputProps['aria-describedby']].filter(Boolean).join(' ') || undefined}
      />
      {hint && <span className="sm-field__hint" id={hintId}>{hint}</span>}
      {error && <span className="sm-field__error" id={errorId} role="alert">{error}</span>}
    </div>
  )
}
