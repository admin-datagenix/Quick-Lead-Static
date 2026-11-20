/**
 * Full-width app UI capture — avoid CSS transform on the img so text stays sharp.
 */
export default function AppScreenshot({
  src,
  alt,
  className = '',
  priority = false,
  maxWidthClass = 'max-w-[1024px]',
  width = 1024,
  height = 769,
}) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      decoding={priority ? 'sync' : 'async'}
      fetchPriority={priority ? 'high' : 'auto'}
      loading={priority ? 'eager' : 'lazy'}
      className={`app-screenshot block h-auto w-full ${maxWidthClass} ${className}`.trim()}
    />
  )
}