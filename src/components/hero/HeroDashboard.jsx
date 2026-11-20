import { motion } from 'framer-motion'
import { ArrowUpRight, TrendingUp } from 'lucide-react'
import { dashboardStats, salesmanPerformance } from '../../data/siteData'
import AnimatedCounter from '../ui/AnimatedCounter'

function MiniBar({ pct, delay = 0 }) {
  return (
    <motion.div
      className="h-2.5 overflow-hidden rounded-full bg-slate-100"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-violet-500"
        initial={{ width: 0 }}
        whileInView={{ width: `${pct}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay, ease: 'easeOut' }}
      />
    </motion.div>
  )
}

export default function HeroDashboard() {
  return (
    <motion.div
      className="glass relative w-full rounded-[1.75rem] p-5 sm:p-7"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="mb-5 flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-slate-500 sm:text-sm">
            Live dashboard
          </p>
          <p className="mt-1 text-base font-semibold text-slate-900 sm:text-lg">
            India Expo 2026 — Booth A12
          </p>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-sm font-semibold text-emerald-700">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
          Live
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
        {[
          { label: 'Total leads', value: dashboardStats.totalLeads },
          { label: 'Completed', value: dashboardStats.completed },
          { label: 'In progress', value: dashboardStats.incomplete },
          { label: 'Active forms', value: dashboardStats.activeForms },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-slate-100 bg-white/90 p-4 shadow-sm"
          >
            <p className="text-xs font-medium text-slate-500 sm:text-sm">{stat.label}</p>
            <p className="mt-1 text-xl font-bold text-slate-900 sm:text-2xl">
              <AnimatedCounter value={stat.value} />
            </p>
          </div>
        ))}
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-slate-100 bg-white/90 p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-slate-800">Event performance</p>
            <TrendingUp className="h-5 w-5 text-emerald-500" aria-hidden />
          </div>
          <div className="mt-4 space-y-3">
            {[
              { label: 'Mon', pct: 62 },
              { label: 'Tue', pct: 88 },
              { label: 'Wed', pct: 74 },
            ].map((d, i) => (
              <div key={d.label} className="flex items-center gap-3 text-sm text-slate-500">
                <span className="w-8 font-medium">{d.label}</span>
                <div className="flex-1">
                  <MiniBar pct={d.pct} delay={i * 0.1} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-100 bg-white/90 p-4 shadow-sm">
          <p className="text-sm font-semibold text-slate-800">Top salesmen today</p>
          <ul className="mt-3 space-y-3">
            {salesmanPerformance.slice(0, 3).map((s) => (
              <li key={s.name} className="flex items-center justify-between text-sm sm:text-base">
                <span className="font-medium text-slate-800">{s.name}</span>
                <span className="text-slate-500">
                  {s.leads} leads · <span className="font-semibold text-blue-600">{s.conversion}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <motion.div
        className="glass animate-float-delayed absolute -right-6 top-10 hidden w-44 rounded-2xl p-4 lg:block"
        aria-hidden
      >
        <p className="text-xs font-medium text-slate-500 sm:text-sm">QR scan</p>
        <p className="text-xl font-bold text-slate-900">+24</p>
        <p className="text-xs font-medium text-emerald-600 sm:text-sm">last hour</p>
      </motion.div>

      <motion.div
        className="glass animate-float absolute -left-8 bottom-14 hidden w-48 rounded-2xl p-4 lg:block"
        aria-hidden
      >
        <div className="flex items-center justify-between text-sm font-medium text-slate-700">
          <span>Follow-up due</span>
          <ArrowUpRight className="h-4 w-4 text-violet-500" />
        </div>
        <p className="mt-1 text-2xl font-bold text-slate-900">18</p>
      </motion.div>
    </motion.div>
  )
}