import { motion } from 'framer-motion'
import { ArrowRight, Check, Download, QrCode, Sparkles } from 'lucide-react'
import { ANDROID_APK_FILENAME, androidApkDownloadHref, trustBadges } from '../../data/siteData'
import DashboardScreenshot from '../hero/DashboardScreenshot'
import QRScanVisual from '../hero/QRScanVisual'
import ButtonLink from '../ui/ButtonLink'

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200/80 pt-28 pb-14 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-16">
      <div className="hero-glow grid-pattern absolute inset-0" aria-hidden />
      <div className="section-shell relative">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-12">
          <div className="max-w-2xl lg:max-w-none">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="eyebrow-pill"
            >
              <Sparkles className="h-4 w-4 text-sky-600" aria-hidden />
              Lead capture for exhibitions &amp; events
            </motion.div>

            <motion.h1
              className="font-display mt-6 text-[2.25rem] font-extrabold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.25rem]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
            >
              Every visitor at your stall,{' '}
              <span className="gradient-text">captured in seconds.</span>
            </motion.h1>

            <motion.p
              className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.12 }}
            >
              Your salesmen add leads from their phones, or visitors scan a QR code and fill the form themselves. Every lead reaches one list, tagged with the form, the salesman and the time.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18 }}
            >
              <ButtonLink
                href={androidApkDownloadHref}
                download={ANDROID_APK_FILENAME}
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-[12rem] bg-sky-700 hover:bg-sky-800 text-white font-bold px-7 py-3.5 shadow-lg shadow-sky-900/20"
              >
                <Download className="h-5 w-5" />
                Download App
              </ButtonLink>
              <ButtonLink href="#how" variant="secondary" className="min-w-[11.5rem] px-6 py-3.5">
                See How It Works
              </ButtonLink>
            </motion.div>

            <ul className="mt-8 flex flex-wrap items-center gap-4 sm:gap-6 text-sm font-medium text-slate-600">
              {trustBadges.map(({ icon: Icon, label }, i) => (
                <motion.li
                  key={label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 + i * 0.08 }}
                  className="inline-flex items-center gap-2"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  <span>{label}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="relative mx-auto w-full">
            <DashboardScreenshot />
            <motion.div
              className="absolute -bottom-6 right-0 z-20 sm:right-4 lg:-right-2"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.55, duration: 0.6 }}
            >
              <QRScanVisual />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
