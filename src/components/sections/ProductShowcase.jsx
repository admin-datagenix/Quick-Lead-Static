import { AnimatePresence, motion } from 'framer-motion'
import { Monitor, Smartphone } from 'lucide-react'
import { useMemo, useState } from 'react'
import { appScreenshots, mobileScreenshots } from '../../data/siteData'
import AnimatedSection from '../ui/AnimatedSection'
import AppScreenshot from '../ui/AppScreenshot'
import SectionHeader from '../ui/SectionHeader'

const platforms = [
  {
    id: 'web',
    label: 'Web dashboard',
    icon: Monitor,
    description: 'Admin analytics, forms, leads, and team oversight in the browser.',
  },
  {
    id: 'android',
    label: 'Android app',
    icon: Smartphone,
    description: 'The same workflows on the floor — group home, forms, leads, and alerts.',
  },
]

export default function ProductShowcase() {
  const [platform, setPlatform] = useState('web')
  const [tab, setTab] = useState(appScreenshots[0].id)

  const screens = platform === 'web' ? appScreenshots : mobileScreenshots
  const active = screens.find((s) => s.id === tab) ?? screens[0]

  const ActivePlatformIcon = useMemo(
    () => platforms.find((p) => p.id === platform)?.icon ?? Monitor,
    [platform],
  )

  function selectPlatform(id) {
    setPlatform(id)
    const next = id === 'web' ? appScreenshots : mobileScreenshots
    setTab(next[0].id)
  }

  return (
    <section id="product" className="section-pad relative overflow-hidden bg-gradient-to-b from-brand-950 via-brand-900 to-brand-800 text-white">
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(61,150,184,0.2),_transparent_55%),radial-gradient(ellipse_at_bottom_right,_rgba(17,94,140,0.25),_transparent_50%)]"
        aria-hidden
      />
      <div className="section-shell relative">
        <AnimatedSection>
          <SectionHeader
            dark
            eyebrow="Product showcase"
            title="The real QuickLeads app — built for exhibition teams"
            description={
              platform === 'web'
                ? 'Web dashboard for admins. Android for sales reps on the stall — same product, two surfaces.'
                : 'Real Android screenshots — group home, forms, leads, and push-style notifications on the floor.'
            }
          />
        </AnimatedSection>

        <AnimatedSection className="mt-8" delay={0.08}>
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-brand-950/40 shadow-2xl">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 bg-brand-950/80 px-4 py-3 sm:px-5">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/90" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/90" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/90" />
                <span className="ml-2 flex items-center gap-1.5 text-xs text-brand-200 sm:text-sm">
                  <ActivePlatformIcon className="h-3.5 w-3.5" aria-hidden />
                  QuickLeads — {active.label}
                </span>
              </div>

              <div
                className="flex rounded-lg border border-white/15 bg-brand-950/60 p-1"
                role="tablist"
                aria-label="Platform"
              >
                {platforms.map((p) => {
                  const Icon = p.icon
                  return (
                    <button
                      key={p.id}
                      type="button"
                      role="tab"
                      aria-selected={platform === p.id}
                      onClick={() => selectPlatform(p.id)}
                      className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-semibold transition-colors sm:text-sm ${
                        platform === p.id
                          ? 'bg-white text-brand-900 shadow-sm'
                          : 'text-brand-200 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      <Icon className="h-3.5 w-3.5" aria-hidden />
                      {p.label}
                    </button>
                  )
                })}
              </div>
            </div>

            <div
              className="flex gap-2 overflow-x-auto border-b border-white/10 p-3 sm:flex-wrap sm:p-4"
              role="tablist"
              aria-label="Screens"
            >
              {screens.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  role="tab"
                  aria-selected={tab === t.id}
                  onClick={() => setTab(t.id)}
                  className={`shrink-0 rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
                    tab === t.id
                      ? 'gradient-brand text-white shadow-md shadow-brand-900/40'
                      : 'text-brand-200 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            <div className="bg-slate-100 p-4 sm:p-6" role="tabpanel">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${platform}-${active.id}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className={
                    platform === 'android'
                      ? 'mx-auto max-w-xl'
                      : 'mx-auto w-full max-w-[1024px]'
                  }
                >
                  {platform === 'android' ? (
                    <div className="rounded-[1.75rem] border-[5px] border-slate-800 bg-slate-900 p-1.5 shadow-[0_32px_64px_-24px_rgba(0,0,0,0.55)] ring-1 ring-white/10">
                      <div className="overflow-hidden rounded-[1.35rem] bg-white">
                        <AppScreenshot
                          src={active.src}
                          alt={active.alt}
                          priority
                          width={active.width}
                          height={active.height}
                          maxWidthClass="max-w-full"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg">
                      <AppScreenshot
                        src={active.src}
                        alt={active.alt}
                        priority
                        width={active.width}
                        height={active.height}
                      />
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}