import { useUser, useClerk } from '@clerk/clerk-react'
import { LogOut } from 'lucide-react'
import type { ReactNode } from 'react'

export default function AppShell({ children }: { children: ReactNode }) {
  const { user } = useUser()
  const { signOut } = useClerk()

  return (
    <div className="landing-background min-h-screen text-teal-900 antialiased">
      <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
        <nav className="glass-nav mx-auto flex h-16 max-w-7xl items-center justify-between rounded-full px-4 sm:px-6">
          <a href="/dashboard" className="flex items-center gap-2 no-underline">
            <img src="/Logo.svg" alt="SATitude Logo" className="h-11 w-auto sm:h-12" />
          </a>
          <div className="flex items-center gap-4">
            <span className="hidden text-sm font-medium text-teal-700 lg:block">
              {user?.primaryEmailAddress?.emailAddress}
            </span>
            <button
              onClick={() => signOut({ redirectUrl: '/' })}
              className="flex h-11 min-h-[44px] items-center gap-1.5 rounded-full border border-white/70 bg-white/60 px-4 text-sm font-semibold text-teal-800 shadow-[0_8px_20px_-8px_rgba(19,78,74,.16),inset_0_1px_0_rgba(255,255,255,.7)] backdrop-blur-md transition-colors hover:bg-white/90 hover:text-teal-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
              aria-label="Sign out"
            >
              <LogOut size={17} />
              <span className="hidden md:inline">Sign out</span>
            </button>
          </div>
        </nav>
      </header>
      <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">{children}</main>
    </div>
  )
}
