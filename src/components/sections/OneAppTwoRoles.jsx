import { motion } from 'framer-motion'
import { Check, Shield, UserCheck } from 'lucide-react'
import AnimatedSection from '../ui/AnimatedSection'
import SectionHeader from '../ui/SectionHeader'

const adminPoints = [
  'Create company groups and lead forms with your own custom fields',
  'Invite, activate or remove salespeople at any time',
  'See leads per form and per salesman in real-time',
  'Extend an event’s dates and update schedules with one tap',
  'Export filtered leads to Excel or CSV, with an audit log of every export',
]

const salesmanPoints = [
  'One tap on "Add Lead" immediately opens your primary form',
  'Quickly verify visitor details on a clean review screen before saving',
  'Print ready-to-use A4 QR sheets with your personal name and salesman ID',
  'Keep capturing without signal — leads automatically sync when back online',
  'See today’s count and recent leads right on your mobile Home screen',
]

function RoleCard({ badge, badgeIcon: BadgeIcon, badgeClass, roleNote, title, subtitle, points, checkClass, footerLeft, footerRight, footerRightClass, delay }) {
  return (
    <AnimatedSection delay={delay} stretch className="h-full">
      <motion.article
        whileHover={{ y: -4 }}
        className="card-premium relative flex h-full min-h-full flex-col overflow-hidden border border-slate-200/90 p-8 sm:p-10 hover:border-sky-300"
      >
        <div className="pointer-events-none absolute top-0 right-0 h-32 w-32 rounded-bl-full bg-gradient-to-br from-sky-100/60 to-transparent" aria-hidden />

        <div className="relative flex flex-1 flex-col">
          <div className="flex items-center justify-between gap-4">
            <span
              className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-wider ${badgeClass}`}
            >
              <BadgeIcon className="h-3.5 w-3.5" aria-hidden />
              {badge}
            </span>
            <span className="text-xs font-mono text-slate-400">{roleNote}</span>
          </div>

          <div className="mt-5 min-h-[7.25rem] sm:min-h-[7.75rem]">
            <h3 className="font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">{title}</h3>
            <p className="mt-2 text-base leading-relaxed text-slate-600">{subtitle}</p>
          </div>

          <ul className="mt-8 flex-1 space-y-3.5">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm text-slate-700 sm:text-base">
                <span
                  className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${checkClass}`}
                >
                  <Check className="h-3.5 w-3.5" strokeWidth={2.8} aria-hidden />
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex min-h-[3.25rem] shrink-0 items-center justify-between gap-4 border-t border-slate-100 pt-6 font-mono text-xs text-slate-500">
          <span>{footerLeft}</span>
          <span className={`text-right font-semibold ${footerRightClass}`}>{footerRight}</span>
        </div>
      </motion.article>
    </AnimatedSection>
  )
}

export default function OneAppTwoRoles() {
  return (
    <section id="roles" className="section-pad relative overflow-hidden bg-white">
      <div className="section-shell">
        <AnimatedSection>
          <SectionHeader
            eyebrow="Built for both sides of the stall"
            title="One app, two roles"
            description="Whether you oversee the entire exhibition or meet visitors face-to-face on the floor, QuickLeads gives your team tailored workflows."
          />
        </AnimatedSection>

        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-2 lg:gap-8">
          <RoleCard
            delay={0.1}
            badge="Admin"
            badgeIcon={Shield}
            badgeClass="bg-sky-100 text-sky-800 [&>svg]:text-sky-700"
            roleNote="Owner & Manager"
            title="Run the event from your phone"
            subtitle="Full control over forms, team access, live performance analytics, and data exports."
            points={adminPoints}
            checkClass="bg-sky-100 text-sky-700"
            footerLeft="Group Level Security"
            footerRight="Live Web & Mobile Access"
            footerRightClass="text-sky-700"
          />
          <RoleCard
            delay={0.2}
            badge="Salesman"
            badgeIcon={UserCheck}
            badgeClass="bg-emerald-100 text-emerald-800 [&>svg]:text-emerald-700"
            roleNote="Booth & Floor Rep"
            title="Capture a lead before the visitor walks away"
            subtitle="High-speed capture, offline reliability, personal QR codes, and instant daily stats."
            points={salesmanPoints}
            checkClass="bg-emerald-100 text-emerald-700"
            footerLeft="Personal QR Codes"
            footerRight="100% Offline Capable"
            footerRightClass="text-emerald-700"
          />
        </div>
      </div>
    </section>
  )
}