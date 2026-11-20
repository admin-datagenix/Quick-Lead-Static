import { motion } from 'framer-motion'
import { features } from '../../data/siteData'
import AnimatedSection from '../ui/AnimatedSection'
import SectionHeader from '../ui/SectionHeader'

export default function Features() {
  return (
    <section id="features" className="section-pad bg-white border-b border-slate-200/80">
      <div className="section-shell">
        <AnimatedSection>
          <SectionHeader
            eyebrow="Features"
            title="Made for busy exhibition halls"
            description="Weak signal, long queues, and visitors who give you thirty seconds. QuickLeads is built specifically for those conditions."
          />
        </AnimatedSection>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <AnimatedSection key={feature.title} delay={(i % 6) * 0.05} as="li" className="list-none">
                <motion.article
                  className="card-premium group h-full p-7 sm:p-8 border border-slate-200/90 hover:border-sky-300"
                  whileHover={{ y: -4 }}
                >
                  <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-sky-50 text-sky-700 transition-colors duration-300 group-hover:bg-sky-700 group-hover:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <h3 className="font-display mt-5 text-xl font-bold text-slate-900">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                    {feature.desc}
                  </p>
                </motion.article>
              </AnimatedSection>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
