import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { steps } from '../../data/siteData'
import AnimatedSection from '../ui/AnimatedSection'
import SectionHeader from '../ui/SectionHeader'

/** Icon row Y from top of each card (p-7 + step chip + gap + half of 48px icon). */
const TIMELINE_TOP_LG = '5.625rem'

export default function HowItWorks() {
  return (
    <section id="how" className="section-muted section-pad relative overflow-hidden border-b border-slate-200/80">
      <div
        className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-brand-300/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-10 h-64 w-64 rounded-full bg-brand-400/15 blur-3xl"
        aria-hidden
      />

      <div className="section-shell relative">
        <AnimatedSection>
          <SectionHeader
            eyebrow="How it works"
            title="From empty stall to follow-up list in four steps"
            description="Set it up the evening before the show. Your team is capturing leads the moment the doors open."
          />
        </AnimatedSection>

        <div className="relative mt-12 lg:mt-14">
          <ol className="relative grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {/* Desktop: one continuous timeline through all step nodes */}
            <motion.div
              className="pointer-events-none absolute left-0 right-0 z-[1] hidden lg:block"
              style={{ top: TIMELINE_TOP_LG }}
              aria-hidden
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute left-[12.5%] right-[12.5%] top-1/2 h-[3px] -translate-y-1/2 overflow-hidden rounded-full">
                <motion.div
                  className="process-connector h-full w-full rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                  style={{ transformOrigin: 'left center' }}
                />
              </div>
            </motion.div>

            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <AnimatedSection
                  key={step.n}
                  delay={i * 0.07}
                  as="li"
                  stretch
                  className="list-none"
                >
                  <motion.article
                    className="group relative flex h-full min-h-[19.5rem] flex-col overflow-visible rounded-2xl border border-brand-100/90 bg-white p-6 shadow-[0_20px_50px_-36px_rgba(8,63,88,0.35)] ring-1 ring-slate-900/[0.04] transition-shadow duration-300 sm:min-h-[21rem] sm:p-7 lg:min-h-[22.5rem] hover:border-brand-200 hover:shadow-[0_28px_60px_-34px_rgba(17,94,140,0.28)]"
                    whileHover={{ y: -5 }}
                    transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                  >
                    <div
                      className="pointer-events-none absolute inset-x-0 top-0 h-32 overflow-hidden rounded-t-2xl bg-gradient-to-b from-brand-50/80 to-transparent"
                      aria-hidden
                    />

                    <span className="absolute right-3 top-3 z-20 inline-flex rounded-full border border-brand-100 bg-white/95 px-2.5 py-0.5 font-mono text-[0.625rem] font-bold uppercase tracking-[0.14em] text-brand-800 shadow-sm sm:right-4 sm:top-4 sm:px-3 sm:py-1">
                      Step {step.n}
                    </span>

                    <div className="relative z-10 flex flex-1 flex-col">
                      <div className="relative mb-5 mt-1 flex h-12 justify-start lg:mt-2 lg:justify-center">
                        <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl gradient-brand text-white shadow-lg shadow-brand-700/25 ring-[5px] ring-white">
                          <Icon className="h-5 w-5" aria-hidden strokeWidth={2.25} />
                        </div>
                      </div>

                      <h3 className="font-display text-lg font-bold leading-snug text-slate-900 sm:text-xl lg:text-center">
                        {step.title}
                      </h3>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 sm:text-[0.95rem] lg:text-center lg:px-1">
                        {step.desc}
                      </p>
                    </div>

                    <div className="relative z-10 mt-6 flex min-h-[3.75rem] items-center gap-3 rounded-xl border border-brand-100/80 bg-gradient-to-br from-brand-50/90 via-white to-brand-50/40 px-4 py-3.5 shadow-inner shadow-white/80">
                      <span
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-brand-700 shadow-sm ring-1 ring-brand-100"
                        aria-hidden
                      >
                        <Check className="h-4 w-4" strokeWidth={2.75} />
                      </span>
                      <p className="text-sm font-semibold leading-snug text-brand-950">
                        {step.outcome}
                      </p>
                    </div>
                  </motion.article>
                </AnimatedSection>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}