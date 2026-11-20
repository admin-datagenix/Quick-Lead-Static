import { ArrowLeft, Clock3, Download, Globe2, Mail, MessageCircle, Phone } from 'lucide-react'
import { ANDROID_APK_FILENAME, APP_URL, DATAGENIX, androidApkDownloadHref } from '../../data/siteData'
import Footer from '../layout/Footer'
import Navbar from '../layout/Navbar'
import ButtonLink from '../ui/ButtonLink'

function ContactTile({ icon: Icon, label, children }) {
  return (
    <li className="flex min-h-[8rem] flex-col rounded-xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm sm:min-h-[8.5rem] sm:p-5">
      <div className="flex items-center gap-2.5">
        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/15 text-sky-100">
          <Icon className="h-5 w-5" aria-hidden />
        </span>
        <span className="text-sm font-bold uppercase tracking-wide text-sky-100/90 sm:text-base">{label}</span>
      </div>
      <div className="mt-3 flex flex-1 flex-col justify-end text-base font-medium leading-snug text-white sm:text-lg">
        {children}
      </div>
    </li>
  )
}

export default function HelpPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f7fbfd]">
      <Navbar isHelpPage />

      <main className="section-shell flex min-h-0 flex-1 flex-col justify-center py-24 sm:py-28">
        <div className="mx-auto w-full max-w-5xl">
          <div className="mb-4 flex items-center justify-between gap-4">
            <a
              href="/index.html"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-brand-700"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              Back To Home
            </a>
            <p className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-brand-700">
              <MessageCircle className="h-3.5 w-3.5" aria-hidden />
              Help &amp; Support
            </p>
          </div>

          <article className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-950 via-brand-800 to-brand-600 p-6 text-white shadow-2xl shadow-brand-900/35 sm:p-8 lg:p-10">
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-400/25 blur-3xl" aria-hidden />
            <div className="pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl" aria-hidden />

            <header className="relative flex flex-col gap-5 border-b border-white/15 pb-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
                <a
                  href={DATAGENIX.website}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-fit rounded-xl bg-white px-4 py-3 shadow-lg transition-transform hover:scale-[1.02]"
                  aria-label="Visit DatagenixAI Website"
                >
                  <img
                    src={DATAGENIX.logoSrc}
                    alt="DatagenixAI"
                    className="h-9 w-auto max-w-[200px] object-contain sm:h-10"
                    width={200}
                    height={40}
                  />
                </a>
                <div className="sm:border-l sm:border-white/15 sm:pl-5">
                  <h1 className="font-display text-2xl font-extrabold tracking-tight sm:text-3xl">Help</h1>
                  <p className="mt-1 text-sm text-sky-100/95">
                    QuickLeads by {DATAGENIX.legalName}
                  </p>
                </div>
              </div>
              <p className="max-w-md text-sm text-sky-100/90 sm:text-right">
                Reply within 24 hours ({DATAGENIX.hours}).
              </p>
            </header>

            <ul className="relative mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
              <ContactTile icon={Mail} label="Email">
                <a
                  href={`mailto:${DATAGENIX.email}`}
                  className="font-medium text-white hover:text-sky-100"
                >
                  {DATAGENIX.email}
                </a>
              </ContactTile>

              <ContactTile icon={Phone} label="Phone">
                <a href={`tel:${DATAGENIX.phoneTel}`} className="font-medium text-white hover:text-sky-100">
                  {DATAGENIX.phone}
                </a>
              </ContactTile>

              <ContactTile icon={Globe2} label="Website">
                <a
                  href={DATAGENIX.website}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-white hover:text-sky-100"
                >
                  www.datagenix.in
                </a>
              </ContactTile>

              <ContactTile icon={Clock3} label="Hours">
                <p className="font-medium text-white">{DATAGENIX.hours}</p>
              </ContactTile>
            </ul>

            <div className="relative mt-8 flex flex-col gap-3 border-t border-white/15 pt-6 sm:flex-row sm:flex-wrap sm:justify-end">
              <ButtonLink
                href={androidApkDownloadHref}
                download={ANDROID_APK_FILENAME}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/90 bg-white px-7 py-3.5 text-base font-bold text-brand-900 shadow-lg hover:bg-sky-50 sm:min-w-[13.5rem] sm:text-lg"
              >
                <Download className="h-5 w-5" aria-hidden />
                Download App
              </ButtonLink>
              <ButtonLink
                href={APP_URL}
                className="border border-white/90 bg-white px-7 py-3.5 text-base font-bold text-brand-900 shadow-lg hover:bg-sky-50 sm:min-w-[13.5rem] sm:text-lg"
              >
                Open Web Dashboard
              </ButtonLink>
            </div>
          </article>
        </div>
      </main>

      <Footer isHelpPage />
    </div>
  )
}