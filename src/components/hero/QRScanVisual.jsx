import { motion } from 'framer-motion'
import { QrCode, ScanLine } from 'lucide-react'

export default function QRScanVisual() {
  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[260px] rounded-3xl border border-brand-200/70 bg-gradient-to-br from-white to-brand-50 p-6 shadow-2xl shadow-brand-900/15"
      aria-hidden
    >
      <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-brand-500/25 to-brand-300/15" />
      <div className="relative flex h-full flex-col items-center justify-center rounded-2xl bg-white">
        <QrCode className="h-28 w-28 text-slate-800 sm:h-32 sm:w-32" strokeWidth={1.15} />
        <div className="absolute inset-5 overflow-hidden rounded-xl">
          <div className="animate-scan-line absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent shadow-[0_0_16px_rgba(37,99,235,0.85)]" />
          <span className="absolute left-2 top-2 h-5 w-5 border-l-2 border-t-2 border-blue-500" />
          <span className="absolute right-2 top-2 h-5 w-5 border-r-2 border-t-2 border-blue-500" />
          <span className="absolute bottom-2 left-2 h-5 w-5 border-b-2 border-l-2 border-blue-500" />
          <span className="absolute bottom-2 right-2 h-5 w-5 border-b-2 border-r-2 border-blue-500" />
        </div>
        <div className="absolute -right-2 -top-2 flex h-12 w-12 items-center justify-center rounded-full bg-brand-600 text-white shadow-xl">
          <ScanLine className="h-6 w-6" />
        </div>
        <span className="absolute -bottom-4 rounded-full bg-emerald-500 px-4 py-1.5 text-sm font-semibold text-white shadow-lg">
          Lead captured
        </span>
      </div>
      <motion.div
        className="animate-pulse-ring absolute -left-6 top-1/4 h-20 w-20 rounded-full border border-blue-400/40"
        initial={{ opacity: 0.5 }}
      />
    </div>
  )
}