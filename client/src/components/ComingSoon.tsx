import { ArrowLeft, Construction } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import AppShell from './layout/AppShell'
import { Button } from './ui/Button'
import { fadeUp } from '../lib/motion'

interface ComingSoonProps {
  title: string
  description: string
  icon: LucideIcon
}

export default function ComingSoon({ title, description, icon: Icon }: ComingSoonProps) {
  return (
    <AppShell>
      <div className="flex flex-col items-center py-16">
        <motion.div
          className="w-full max-w-2xl text-center"
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
          <div className="glass-icon mx-auto mb-6 h-20 w-20 bg-gradient-to-br from-teal-100 via-cyan-50 to-white text-teal-700">
            <Icon size={36} />
          </div>
          <span className="glass-pill px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-[0.2em] text-teal-700">
            <Construction size={12} className="mr-1.5" />
            Coming soon
          </span>
          <h1 className="mt-4 text-3xl font-extrabold tracking-[-0.04em] text-teal-950 sm:text-4xl">{title}</h1>
          <p className="mt-4 text-lg leading-8 text-teal-800/75">{description}</p>
          <div className="mt-8">
            <Link to="/dashboard" className="inline-block">
              <Button variant="primary" size="lg">
                <ArrowLeft size={16} />
                Back to dashboard
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </AppShell>
  )
}
