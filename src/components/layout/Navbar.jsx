import { Download, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { ANDROID_APK_FILENAME, APP_URL, androidApkDownloadHref, navLinks } from '../../data/siteData'
import BrandLogo from '../brand/BrandLogo'
import ButtonLink from '../ui/ButtonLink'

export default function Navbar({ isHelpPage = false }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const homeHref = isHelpPage ? '/index.html' : '#'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-slate-200/90 bg-white/95 shadow-sm shadow-slate-900/5 backdrop-blur-xl'
          : 'bg-white/80 backdrop-blur-md'
      }`}
    >
      <div className="section-shell flex items-center justify-between gap-4 py-3.5 sm:py-4">
        <a href={homeHref} className="group" aria-label="QuickLeads home">
          <BrandLogo showWordmark />
        </a>

        <nav className="hidden items-center gap-7 xl:gap-8 lg:flex" aria-label="Main">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={
                isHelpPage && link.href.startsWith('#')
                  ? `/index.html${link.href}`
                  : link.href
              }
              className="text-sm font-medium text-slate-600 transition-colors hover:text-sky-700"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ButtonLink
            href={APP_URL}
            variant="ghost"
            className="px-4 py-2.5 text-sm font-semibold text-slate-700 hover:text-sky-700"
          >
            Sign In
          </ButtonLink>
          <ButtonLink
            href={androidApkDownloadHref}
            download={ANDROID_APK_FILENAME}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 text-sm font-bold bg-sky-700 hover:bg-sky-800 text-white shadow-md shadow-sky-900/15"
          >
            <Download className="h-4 w-4" />
            Download App
          </ButtonLink>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-700 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-100 bg-white px-5 pb-8 pt-4 shadow-xl md:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={
                  isHelpPage && link.href.startsWith('#')
                    ? `/index.html${link.href}`
                    : link.href
                }
                className="rounded-xl px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-5 flex flex-col gap-3">
            <ButtonLink href={APP_URL} variant="secondary">
              Sign In
            </ButtonLink>
            <ButtonLink
              href={androidApkDownloadHref}
              download={ANDROID_APK_FILENAME}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sky-700 hover:bg-sky-800 text-white"
            >
              <Download className="h-4 w-4" />
              Download App
            </ButtonLink>
          </div>
        </div>
      )}
    </header>
  )
}
