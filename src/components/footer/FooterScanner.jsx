import { motion } from 'framer-motion'
import { QrCode, ScanLine } from 'lucide-react'

function MiniScanner({ delay = 0 }) {
  return (
    <motion.div
      className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-brand-400/30 bg-white/5 shadow-lg backdrop-blur-sm sm:h-24 sm:w-24"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      animate={{ y: [0, -5, 0] }}
      transition={{
        y: { duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay },
        opacity: { duration: 0.4, delay: delay * 0.15 },
      }}
    >
      <QrCode className="h-9 w-9 text-brand-200/95 sm:h-10 sm:w-10" strokeWidth={1.2} />
      <span className="absolute inset-3 overflow-hidden rounded-lg" aria-hidden>
        <motion.span
          className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brand-300 to-transparent shadow-[0_0_10px_rgba(111,181,212,0.9)]"
          animate={{ top: ['12%', '82%', '12%'] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut', delay }}
        />
        <span className="absolute left-1 top-1 h-3 w-3 border-l border-t border-brand-300/90" />
        <span className="absolute right-1 top-1 h-3 w-3 border-r border-t border-brand-300/90" />
        <span className="absolute bottom-1 left-1 h-3 w-3 border-b border-l border-brand-300/90" />
        <span className="absolute bottom-1 right-1 h-3 w-3 border-b border-r border-brand-300/90" />
      </span>
      <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full gradient-brand text-white shadow-md">
        <ScanLine className="h-3.5 w-3.5" />
      </span>
    </motion.div>
  )
}

export default function FooterScanner() {
  return (
    <div className="relative overflow-hidden border-b border-brand-800/50 bg-gradient-to-r from-brand-950 via-brand-800 to-brand-700 py-10 sm:py-12">
      <motion.div
        className="absolute inset-0 bg-[linear-gradient(105deg,transparent_35%,rgba(168,212,232,0.15)_50%,transparent_65%)]"
        animate={{ x: ['-100%', '200%'] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'linear' }}
        aria-hidden
      />
      <div className="section-shell relative flex flex-col items-center gap-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-200 sm:text-base">
          Scan · Capture · Convert
        </p>
        <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-8">
          {[0, 1, 2, 3, 4].map((i) => (
            <MiniScanner key={i} delay={i * 0.35} />
          ))}
        </div>
        <p className="max-w-lg text-sm text-brand-100/90 sm:text-base">
          QR-powered lead capture — every scan routed to your live dashboard.
        </p>
      </div>
    </div>
  )
}