import BrandLogo from '../brand/BrandLogo'

export default function Footer({ isHelpPage = false }) {
  const sectionHref = (href) =>
    isHelpPage && href.startsWith('#') ? `/index.html${href}` : href

  return (
    <footer className="border-t border-slate-200 bg-white text-slate-600 text-sm">
      <div className="section-shell py-8 sm:py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <BrandLogo />
            <div className="text-slate-600">
              © {new Date().getFullYear()} QuickLeads by{' '}
              <a
                href="https://www.datagenix.in"
                target="_blank"
                rel="noreferrer"
                className="font-bold text-sky-700 hover:text-sky-800 transition-colors"
              >
                DatagenixAI
              </a>
              . All rights reserved.
            </div>
          </div>

          <nav
            className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-600 font-medium"
            aria-label="Footer"
          >
            <a href={sectionHref('#how')} className="hover:text-sky-700 transition-colors">
              How it works
            </a>
            <a href={sectionHref('#roles')} className="hover:text-sky-700 transition-colors">
              Roles
            </a>
            <a href={sectionHref('#features')} className="hover:text-sky-700 transition-colors">
              Features
            </a>
            <a href={sectionHref('#faq')} className="hover:text-sky-700 transition-colors">
              FAQ
            </a>
            <a href="/privacy.html" className="hover:text-sky-700 transition-colors">
              Privacy Policy
            </a>
            <a href="/help.html" className="hover:text-sky-700 transition-colors">
              Help
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
