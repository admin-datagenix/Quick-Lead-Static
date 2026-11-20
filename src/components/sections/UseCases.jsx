import { motion } from 'framer-motion'
import { useCases } from '../../data/siteData'
import AnimatedSection from '../ui/AnimatedSection'
import SectionHeader from '../ui/SectionHeader'

export default function UseCases() {
  return (
    <section className="section-muted section-pad">
      <div className="section-shell">
        <AnimatedSection>
          <SectionHeader
            eyebrow="Who it's for"
            title="Who can use QuickLeads?"
            description="Built for teams on the exhibition circuit — and leaders who need clear ROI from every event."
          />
        </AnimatedSection>

        <div className="mt-10 grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {useCases.map((card, i) => (
            <AnimatedSection key={card.title} delay={i * 0.06} as="div" stretch className="h-full">
              <motion.div
                className="card-premium group relative flex h-full flex-col overflow-hidden p-7 sm:p-8"
                whileHover={{ y: -6 }}
              >
                <div
                  className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${card.accent}`}
                  aria-hidden
                />
                <div
                  className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${card.accent} text-xl font-bold text-white shadow-lg`}
                >
                  {card.title.charAt(0)}
                </div>
                <h3 className="font-display text-lg font-bold text-slate-900 sm:text-xl">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">{card.desc}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}