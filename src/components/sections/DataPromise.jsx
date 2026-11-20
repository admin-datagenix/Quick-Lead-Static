import { ArrowRight, KeyRound, Lock, Trash2 } from 'lucide-react'
import AnimatedSection from '../ui/AnimatedSection'

const promises = [
  {
    icon: Lock,
    title: 'Each group is separate',
    desc: 'Only admins of your company group see your full lead data. Salespeople see just the names and timestamps of leads they personally captured.',
  },
  {
    icon: KeyRound,
    title: 'Login without passwords',
    desc: 'Sign in securely with a one-time code (OTP) sent directly to your registered mobile. We store auth codes and tokens only in securely hashed form.',
  },
  {
    icon: Trash2,
    title: 'Delete when you want',
    desc: 'Ask us to delete your account and company lead data at any time. No dark patterns — our privacy policy clearly details the deletion procedure.',
  },
]

export default function DataPromise() {
  return (
    <section id="data" className="section-pad border-y border-slate-200/80 bg-slate-50/70">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12 items-start">
          <div className="lg:col-span-5">
            <AnimatedSection>
              <span className="eyebrow-pill mb-4 font-mono text-xs uppercase tracking-wider text-sky-800">
                Your data
              </span>
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Your leads belong to your business
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                We store lead data strictly to run the service for you. We do not sell your data, use
                it for third-party advertising, or share it with any other customers.
              </p>
              <div className="mt-6">
                <a
                  href="/privacy.html"
                  className="inline-flex items-center gap-2 font-semibold text-sky-700 hover:text-sky-800 transition-colors"
                >
                  Read the complete privacy policy
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </AnimatedSection>
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-4">
              {promises.map((item, i) => {
                const Icon = item.icon
                return (
                  <AnimatedSection key={item.title} delay={i * 0.1}>
                    <div className="card-premium flex items-start gap-4 p-5 sm:p-6 bg-white border border-slate-200/90 hover:border-sky-300">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-700">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-display text-lg font-bold text-slate-900">{item.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-slate-600 sm:text-base">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </AnimatedSection>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
