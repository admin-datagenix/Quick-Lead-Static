import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { APP_URL } from '../../data/siteData'
import AnimatedSection from '../ui/AnimatedSection'
import ButtonLink from '../ui/ButtonLink'

export default function FinalCTA() {
  return (
    <section className="section-pad">
      <div className="section-shell">
        <AnimatedSection>
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-950 via-brand-800 to-brand-600 px-8 py-12 text-center shadow-2xl shadow-brand-900/30 sm:px-12 sm:py-14 lg:px-16">
            <motion.div
              className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-brand-400/25 blur-3xl"
              aria-hidden
              animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl"
              aria-hidden
              animate={{ x: [0, -20, 0], y: [0, -15, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            />

            <div className="relative">
              <h2 className="font-display text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl">
                Never Miss a Business Opportunity Again.
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-blue-100/95 sm:text-lg">
                Start capturing smarter leads and turn every interaction into a business opportunity.
              </p>
              <div className="mt-10 flex justify-center">
                <ButtonLink href={APP_URL} className="px-8 py-3.5">
                  Start for Free
                  <ArrowRight className="h-5 w-5" aria-hidden />
                </ButtonLink>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}