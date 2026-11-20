import { motion } from 'framer-motion'
import AppScreenshot from '../ui/AppScreenshot'

export default function DashboardScreenshot() {
  return (
    <motion.div
      className="relative w-full"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="absolute -inset-4 rounded-[2rem] bg-brand-500/10"
        aria-hidden
      />

      <motion.div
        className="relative overflow-hidden rounded-2xl border border-brand-200/80 bg-white p-1.5 shadow-[0_24px_64px_-28px_rgba(8,63,88,0.4)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <AppScreenshot
          src="/screenshots/dashboard.png"
          alt="QuickLeads admin dashboard showing lead analytics, QR share, and team performance"
          priority
          className="rounded-xl"
          maxWidthClass="max-w-full"
        />
      </motion.div>
    </motion.div>
  )
}