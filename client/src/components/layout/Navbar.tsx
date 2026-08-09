import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useAuth } from '@clerk/clerk-react'
import { AnimatePresence, motion } from 'framer-motion'
import { Button } from '../ui/Button'
import { NAV_LINKS } from '../../lib/constants'

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const { isSignedIn } = useAuth()

  return (
    <header className="sticky top-0 z-50 bg-transparent px-4 pt-4 sm:px-6 lg:px-8">
      <nav className="glass-nav mx-auto flex h-16 max-w-7xl items-center justify-between rounded-full px-4 sm:px-6">
        <a href="/" className="flex items-center gap-2 no-underline">
          <img src="/Logo.svg" alt="SATitude Logo" className="h-12 w-auto sm:h-14" />
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-semibold text-teal-800 transition-all duration-200 hover:-translate-y-0.5 hover:text-teal-900"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          {isSignedIn ? (
            <Link to="/dashboard">
              <Button variant="primary" size="sm">Dashboard</Button>
            </Link>
          ) : (
            <>
              <Link to="/sign-in">
                <Button variant="ghost" size="sm">Log in</Button>
              </Link>
              <Link to="/sign-up">
                <Button variant="primary" size="sm">Start for free</Button>
              </Link>
            </>
          )}
        </div>

        <button
          className="flex h-11 w-11 items-center justify-center rounded-full p-2 text-teal-800 transition-colors hover:bg-white/90 hover:text-teal-900 md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
              className="glass-nav absolute left-4 right-4 top-20 z-50 rounded-3xl p-6 md:hidden"
            >
              <div className="flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="rounded-2xl px-4 py-3 text-sm font-semibold text-teal-800 transition-colors hover:bg-white/90 hover:text-teal-900"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="flex flex-col gap-3 border-t border-white/70 pt-2">
                {isSignedIn ? (
                  <Link to="/dashboard" onClick={() => setMenuOpen(false)}>
                    <Button variant="primary" size="sm">Dashboard</Button>
                  </Link>
                ) : (
                  <>
                    <Link to="/sign-in" onClick={() => setMenuOpen(false)}>
                      <Button variant="outline" size="sm">Log in</Button>
                    </Link>
                    <Link to="/sign-up" onClick={() => setMenuOpen(false)}>
                      <Button variant="primary" size="sm">Start for free</Button>
                    </Link>
                  </>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
