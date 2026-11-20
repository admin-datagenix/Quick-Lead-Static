import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import AnimatedSection from '../ui/AnimatedSection'
import SectionHeader from '../ui/SectionHeader'

const faqs = [
  {
    q: 'Do visitors need to install the app?',
    a: 'No. Visitors scan the QR code using their regular phone camera browser and fill a fast, responsive mobile web form. Only your company admins and sales representatives install the QuickLeads app.',
  },
  {
    q: 'What happens if there is no internet in the exhibition hall?',
    a: 'Salespeople keep capturing leads without interruption. Leads are securely stored offline on the phone and automatically upload and sync with the central dashboard as soon as internet connectivity returns.',
  },
  {
    q: 'Can one person be an admin and a salesman?',
    a: 'Yes. Roles are configured per company group, so you can easily manage your own organization as an admin while also participating in another company’s campaign as a salesperson.',
  },
  {
    q: 'Can I stop a salesman from capturing leads?',
    a: 'Yes. You can deactivate them instantly from the salesman management screen or remove them from the group. All leads they previously captured remain securely stored in your company dashboard.',
  },
  {
    q: 'Which phones and devices are supported?',
    a: 'Sales reps use the QuickLeads Android app on the floor. Admins and managers run the full web dashboard in any modern browser on desktop or tablet.',
  },
  {
    q: 'How do personal QR codes work for salespeople?',
    a: 'Every salesperson receives a unique printable A4 QR sheet containing their name and ID. When booth visitors scan that QR code, the inquiry is automatically credited to that salesperson in live reports.',
  },
  {
    q: 'Can we export leads to Excel or CRM systems?',
    a: 'Yes. Admins can export all or filtered leads to Excel (.xlsx) and CSV with a single click. Every custom question and answer is organized neatly into dedicated columns ready for CRM import.',
  },
]

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div className="border border-slate-200/90 rounded-2xl bg-white overflow-hidden transition-all duration-200 hover:border-sky-300">
      <button
        type="button"
        onClick={onToggle}
        className="w-full py-5 px-6 flex items-center justify-between text-left font-display text-base sm:text-lg font-bold text-slate-900 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="pr-4">{item.q}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600"
        >
          <ChevronDown className="h-4 w-4" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            <div className="px-6 pb-6 pt-1 text-sm sm:text-base leading-relaxed text-slate-600 border-t border-slate-100">
              {item.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="section-pad bg-white">
      <div className="section-shell max-w-4xl">
        <AnimatedSection>
          <SectionHeader
            eyebrow="Questions"
            title="Frequently asked questions"
            description="Everything you need to know about setting up forms, offline capture, and team roles for your next exhibition."
          />
        </AnimatedSection>

        <div className="mt-10 space-y-3.5">
          {faqs.map((faq, idx) => (
            <AnimatedSection key={faq.q} delay={idx * 0.04}>
              <FaqItem
                item={faq}
                isOpen={openIndex === idx}
                onToggle={() => setOpenIndex(openIndex === idx ? -1 : idx)}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
