export default function BrandLogo({
  className = '',
  showWordmark = false,
  isWhite = false,
  wordmarkClass = '',
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 font-display text-xl sm:text-2xl font-extrabold tracking-tight ${wordmarkClass}`}>
      <span className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl bg-sky-700 text-white shadow-md shadow-sky-900/20">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="3" y="3" width="7" height="7" rx="1.5" />
          <rect x="14" y="3" width="7" height="7" rx="1.5" />
          <rect x="3" y="14" width="7" height="7" rx="1.5" />
          <path d="M14 14h3v3h-3z" fill="currentColor" />
          <path d="M20 20h-3" />
        </svg>
      </span>
      {showWordmark && (
        <span className={isWhite ? 'text-white' : 'text-slate-900'}>
          Quick<b className={isWhite ? 'text-sky-300 font-extrabold' : 'text-sky-600 font-extrabold'}>Leads</b>
        </span>
      )}
    </span>
  )
}
