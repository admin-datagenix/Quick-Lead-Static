export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
  dark = false,
  className = '',
}) {
  const alignClass =
    align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl text-left'

  return (
    <header className={`${alignClass} ${className}`}>
      <p
        className={`text-xs font-bold uppercase tracking-[0.18em] sm:text-sm ${
          dark ? 'text-brand-300' : 'text-brand-700'
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`font-display mt-4 text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl lg:leading-[1.15] ${
          dark ? 'text-white' : 'text-slate-900'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            dark ? 'text-brand-100/90' : 'text-slate-600'
          }`}
        >
          {description}
        </p>
      )}
    </header>
  )
}