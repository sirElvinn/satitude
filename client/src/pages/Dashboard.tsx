import { useUser } from '@clerk/clerk-react'
import { useSync } from '../hooks/useSync'
import { BookOpen, BarChart3, BrainCircuit, Target, ChevronRight, Flame } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AppShell from '../components/layout/AppShell'
import { Button } from '../components/ui/Button'
import { staggerContainer, fadeUp } from '../lib/motion'

export default function Dashboard() {
  useSync()

  const { user } = useUser()

  const firstName = user?.firstName || 'there'

  const stats = [
    { label: 'Tests Taken', value: '0', icon: BookOpen, tile: 'from-teal-100 to-cyan-50 text-teal-700' },
    { label: 'Questions Answered', value: '0', icon: Target, tile: 'from-violet-100 to-indigo-50 text-violet-700' },
    { label: 'Current Streak', value: '0d', icon: Flame, tile: 'from-amber-100 to-orange-50 text-amber-600' },
    { label: 'Avg. Score', value: '—', icon: BarChart3, tile: 'from-emerald-100 to-green-50 text-emerald-700' },
  ]

  const quickActions = [
    {
      title: 'Take a Practice Test',
      description: 'Full-length Bluebook-style exam with adaptive difficulty.',
      icon: BookOpen,
      href: '/practice/test',
      tile: 'from-teal-100 to-cyan-50 text-teal-700',
    },
    {
      title: 'Question Bank',
      description: 'Drill specific topics, skills, and difficulty levels.',
      icon: Target,
      href: '/practice/questions',
      tile: 'from-violet-100 to-indigo-50 text-violet-700',
    },
    {
      title: 'AI Tutor',
      description: 'Ask anything about a concept or get a question explained.',
      icon: BrainCircuit,
      href: '/tutor',
      tile: 'from-fuchsia-100 to-pink-50 text-fuchsia-700',
    },
    {
      title: 'My Analytics',
      description: 'See your score trends and find your weak spots.',
      icon: BarChart3,
      href: '/analytics',
      tile: 'from-emerald-100 to-green-50 text-emerald-700',
    },
  ]

  return (
    <AppShell>
      {/* Greeting */}
      <div className="mb-8">
        <span className="section-kicker mb-3 block font-mono">Dashboard</span>
        <h1 className="text-3xl font-extrabold tracking-[-0.04em] text-teal-950 sm:text-4xl">
          Welcome back, {firstName}
        </h1>
        <p className="mt-2 text-teal-800/75">
          Ready to practice? Let's get your score moving.
        </p>
      </div>

      {/* Stats row */}
      <motion.div
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            variants={fadeUp}
            className="glass-card group flex items-center gap-4 p-5 transition-transform duration-200 hover:-translate-y-1"
          >
            <div className={`glass-icon h-12 w-12 shrink-0 bg-gradient-to-br ${stat.tile}`}>
              <stat.icon size={20} />
            </div>
            <div>
              <div className="font-mono text-2xl font-extrabold tracking-[-.04em] text-teal-700">{stat.value}</div>
              <div className="text-xs font-medium text-teal-700/60">{stat.label}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Quick actions */}
      <h2 className="section-kicker mb-3 mt-12 block font-mono">Quick actions</h2>
      <motion.div
        className="grid gap-4 md:grid-cols-2"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        {quickActions.map((action) => (
          <motion.div key={action.title} variants={fadeUp}>
            <Link
              to={action.href}
              className="glass-card group flex items-center gap-5 p-6 transition-all duration-200 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
            >
              <div className={`glass-icon h-14 w-14 shrink-0 bg-gradient-to-br ${action.tile}`}>
                <action.icon size={24} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-teal-950">{action.title}</h3>
                <p className="mt-0.5 text-sm leading-6 text-teal-700/60">{action.description}</p>
              </div>
              <ChevronRight size={18} className="shrink-0 text-teal-600/50 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-teal-900" />
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Getting started banner */}
      <motion.div
        className="mt-12 flex flex-col items-start justify-between gap-6 rounded-[36px] border border-white/70 bg-gradient-to-br from-teal-700 via-teal-600 to-cyan-600 p-8 text-white shadow-[18px_18px_48px_rgba(13,148,136,.24),-18px_-18px_48px_rgba(255,255,255,0.18)] sm:flex-row sm:items-center"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      >
        <div>
          <span className="mb-2 block font-mono text-xs font-bold uppercase tracking-[0.2em] text-teal-100">
            Get started
          </span>
          <h3 className="text-2xl font-extrabold tracking-[-0.03em]">
            Take your first practice test
          </h3>
          <p className="mt-2 max-w-md text-sm leading-6 text-teal-100">
            Your diagnostic test sets your baseline score and creates a personalised study plan.
          </p>
        </div>
        <Link to="/practice/test" className="shrink-0">
          <Button variant="secondary" size="lg" className="group min-w-[180px]">
            Start test
            <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </motion.div>
    </AppShell>
  )
}
