import { Link } from 'react-router-dom'
import { SignUp } from '@clerk/clerk-react'
import { motion } from 'framer-motion'
import { fadeUp } from '../../lib/motion'
import { clerkAppearance } from '../../lib/clerkAppearance'

export default function SignUpPage() {
  return (
    <div className="landing-background relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-12">
      <div className="pointer-events-none absolute -top-24 right-[8%] h-80 w-80 rounded-full bg-teal-300/40 blur-[90px]" />
      <div className="pointer-events-none absolute -bottom-24 left-[6%] h-80 w-80 rounded-full bg-amber-300/40 blur-[90px]" />

      <motion.div
        className="w-full max-w-md"
        variants={fadeUp}
        initial="hidden"
        animate="show"
      >
        <div className="mb-8 flex flex-col items-center text-center">
          <img src="/Logo.svg" alt="SATitude Logo" className="mb-6 h-12 w-auto" />
          <p className="section-kicker mb-3 block font-mono">Get started</p>
          <h1 className="font-heading text-3xl font-bold tracking-[-0.03em] text-teal-950 sm:text-4xl">
            Create your SATitude account
          </h1>
          <p className="mt-3 text-sm leading-6 text-teal-800/70">
            Join and save your practice progress, AI explanations, and score analytics.
          </p>
        </div>

        <SignUp routing="path" path="/sign-up" forceRedirectUrl="/dashboard" appearance={clerkAppearance} />

        <p className="mt-6 text-center text-sm text-teal-800/70">
          Already have an account?{' '}
          <Link to="/sign-in" className="font-bold text-teal-700 hover:text-teal-800">
            Sign in
          </Link>
        </p>
      </motion.div>
    </div>
  )
}
