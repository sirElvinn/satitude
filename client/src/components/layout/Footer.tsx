import { HackerText } from '../ui/HackerText'

const PRODUCT_LINKS = ['Practice Tests', 'Question Bank', 'AI Tutor', 'Analytics']
const COMPANY_LINKS = ['About', 'Blog', 'Careers', 'Contact']
const LEGAL_LINKS = ['Privacy Policy', 'Terms of Service', 'Cookie Policy']

export const Footer = () => {
  return (
    <footer className="px-4 pb-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[36px] border border-white/70 bg-teal-950/85 px-6 py-10 text-teal-100/90 shadow-[16px_16px_40px_rgba(15,23,42,0.2)] sm:px-8 lg:px-10 lg:py-12">
        <div className="mb-10 grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="mb-4 flex items-center gap-2 no-underline">
              <img
                src="/Logo.svg"
                alt="SATitude Logo"
                className="h-10 w-auto"
              />
            </a>
            <p className="text-sm leading-7 text-teal-600/50">
              The most realistic digital SAT prep, powered by AI tutoring.
            </p>
          </div>

          <div>
            <HackerText as="h4" text="Product" className="mb-4 text-sm font-semibold text-white" />
            <ul className="space-y-3 text-sm">
              {PRODUCT_LINKS.map((label) => (
                <li key={label}>
                  <a href="#" className="transition-colors hover:text-white">
                    <HackerText text={label} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <HackerText as="h4" text="Company" className="mb-4 text-sm font-semibold text-white" />
            <ul className="space-y-3 text-sm">
              {COMPANY_LINKS.map((label) => (
                <li key={label}>
                  <a href="#" className="transition-colors hover:text-white">
                    <HackerText text={label} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <HackerText as="h4" text="Legal" className="mb-4 text-sm font-semibold text-white" />
            <ul className="space-y-3 text-sm">
              {LEGAL_LINKS.map((label) => (
                <li key={label}>
                  <a href="#" className="transition-colors hover:text-white">
                    <HackerText text={label} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center text-sm text-teal-700/60 sm:flex-row sm:text-left">
          <p>© 2026 SATitude. Not affiliated with College Board.</p>
          <p>Built for students, by students.</p>
        </div>
      </div>
    </footer>
  )
}