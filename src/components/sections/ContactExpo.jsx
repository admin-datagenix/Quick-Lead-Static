import { Check, Copy, Download, Mail, MessageSquare, Phone } from 'lucide-react'
import { useState } from 'react'
import { ANDROID_APK_FILENAME, DATAGENIX, androidApkDownloadHref } from '../../data/siteData'
import AnimatedSection from '../ui/AnimatedSection'
import ButtonLink from '../ui/ButtonLink'

export default function ContactExpo() {
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [copiedPhone, setCopiedPhone] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(DATAGENIX.email)
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2000)
  }

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(DATAGENIX.phone)
    setCopiedPhone(true)
    setTimeout(() => setCopiedPhone(false), 2000)
  }

  return (
    <section id="contact" className="section-pad">
      <div className="section-shell">
        <AnimatedSection>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-900 via-sky-800 to-sky-700 p-8 sm:p-12 lg:p-16 text-white shadow-2xl shadow-sky-900/30">
            {/* Background decoration */}
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl pointer-events-none" />
            <div className="absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl pointer-events-none" />

            <div className="relative grid gap-10 lg:grid-cols-12 lg:gap-12 items-center">
              <div className="lg:col-span-7">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1 text-xs font-mono font-semibold uppercase tracking-wider text-sky-100">
                  <MessageSquare className="h-3.5 w-3.5" />
                  Upcoming Trade Show?
                </span>
                <h2 className="font-display mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                  Have an expo coming up?
                </h2>
                <p className="mt-4 text-base sm:text-lg leading-relaxed text-sky-100 max-w-xl">
                  Tell us your event dates and the size of your sales team. We’ll help configure your custom forms, generate your salesperson QR sheets, and ensure your team is ready for day one.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <ButtonLink
                    href={androidApkDownloadHref}
                    download={ANDROID_APK_FILENAME}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-sky-900 hover:bg-sky-50 shadow-lg px-7 py-3.5 font-bold"
                  >
                    <Download className="h-5 w-5" />
                    Download App
                  </ButtonLink>
                  <ButtonLink
                    href={`https://wa.me/917385256569?text=Hi%20DatagenixAI%2C%20I%20want%20to%20set%20up%20QuickLeads%20for%20our%20upcoming%20expo`}
                    target="_blank"
                    rel="noreferrer"
                    variant="ghost"
                    className="border border-white/30 text-white hover:bg-white/10 px-6 py-3.5"
                  >
                    Chat on WhatsApp
                  </ButtonLink>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-2xl border border-white/20 bg-white/10 p-6 sm:p-7 backdrop-blur-md space-y-4">
                  <div>
                    <span className="block text-xs font-mono font-semibold uppercase tracking-wider text-sky-200">
                      Direct Email Support
                    </span>
                    <div className="mt-2 flex items-center justify-between gap-2 rounded-xl bg-white/10 p-2.5 px-3.5 border border-white/15">
                      <div className="flex items-center gap-2.5 overflow-hidden">
                        <Mail className="h-4 w-4 text-sky-300 shrink-0" />
                        <code className="text-sm font-mono text-white truncate">{DATAGENIX.email}</code>
                      </div>
                      <button
                        type="button"
                        onClick={handleCopyEmail}
                        className="inline-flex items-center gap-1.5 rounded-lg bg-white/20 px-3 py-1.5 text-xs font-semibold text-white hover:bg-white/30 transition-colors"
                      >
                        {copiedEmail ? (
                          <>
                            <Check className="h-3.5 w-3.5 text-emerald-300" />
                            Copied
                          </>
                        ) : (
                          <>
                            <Copy className="h-3.5 w-3.5" />
                            Copy
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  <div>
                    <span className="block text-xs font-mono font-semibold uppercase tracking-wider text-sky-200">
                      Phone &amp; WhatsApp
                    </span>
                    <div className="mt-2 flex items-center justify-between gap-2 rounded-xl bg-white/10 p-2.5 px-3.5 border border-white/15">
                      <div className="flex items-center gap-2.5 overflow-hidden">
                        <Phone className="h-4 w-4 text-sky-300 shrink-0" />
                        <code className="text-sm font-mono text-white truncate">{DATAGENIX.phone}</code>
                      </div>
                      <button
                        type="button"
                        onClick={handleCopyPhone}
                        className="inline-flex items-center gap-1.5 rounded-lg bg-white/20 px-3 py-1.5 text-xs font-semibold text-white hover:bg-white/30 transition-colors"
                      >
                        {copiedPhone ? (
                          <>
                            <Check className="h-3.5 w-3.5 text-emerald-300" />
                            Copied
                          </>
                        ) : (
                          <>
                            <Copy className="h-3.5 w-3.5" />
                            Copy
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  <p className="text-xs text-sky-200/90 pt-1 font-mono">
                    Mon – Sat, 9 AM – 7 PM IST · Response within 24 hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
