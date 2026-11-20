export default function ButtonLink({
  href,
  children,
  variant = 'primary',
  className = '',
  ...props
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 sm:text-base'

  const variants = {
    primary:
      'gradient-brand text-white shadow-lg shadow-brand-900/25 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand-700/30',
    secondary:
      'border border-brand-200/90 bg-white text-slate-800 shadow-sm hover:border-brand-300 hover:bg-brand-50/80',
    ghost: 'text-brand-800 hover:bg-brand-50',
    dark: 'bg-brand-950 text-white hover:bg-brand-900',
  }

  return (
    <a href={href} className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </a>
  )
}