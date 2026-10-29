import { useId } from 'react'
import './ui.css'

export default function Textarea({ label, hint, error, id, className = '', wrapperClassName = '', rows = 4, ...textareaProps }) {
  const generatedId = useId()
  const fieldId = id || generatedId
  const hintId = hint ? `${fieldId}-hint` : undefined
  const errorId = error ? `${fieldId}-error` : undefined

  return (
    <div className={`sm-field${wrapperClassName ? ` ${wrapperClassName}` : ''}`}>
      {label && <label className="sm-field__label" htmlFor={fieldId}>{label}{textareaProps.required && <span aria-hidden="true"> *</span>}</label>}
      <textarea
        id={fieldId}
        rows={rows}
        className={`sm-textarea${className ? ` ${className}` : ''}`}
        {...textareaProps}
        aria-invalid={error ? 'true' : textareaProps['aria-invalid']}
        aria-describedby={[hintId, errorId, textareaProps['aria-describedby']].filter(Boolean).join(' ') || undefined}
      />
      {hint && <span className="sm-field__hint" id={hintId}>{hint}</span>}
      {error && <span className="sm-field__error" id={errorId} role="alert">{error}</span>}
    </div>
  )
}
