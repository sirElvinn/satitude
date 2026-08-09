import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Star } from 'lucide-react'
import { useAuth } from '@clerk/clerk-react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/Button'
import { Badge } from '../ui/Badge'
import ModelViewer from '../ModelViewer'
import { staggerContainer, fadeUp, EASE, DUR } from '../../lib/motion'

export const Hero = () => {
  const { isSignedIn } = useAuth()
  const prefersReducedMotion = useReducedMotion()

  const scrollToHowItWorks = () => {
    document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })
  }

  const blobProps = (delay: number) => ({
    animate: prefersReducedMotion ? {} : { y: [0, -16, 0] },
    transition: { duration: 7, delay, repeat: prefersReducedMotion ? 0 : Infinity, ease: 'easeInOut' as const },
  })

  return (
    <section className="relative flex min-h-[calc(100svh-80px)] items-center overflow-hidden" aria-labelledby="hero-title">
      {/* Floating clay blobs — soft 3D depth per claymorphism guidance */}
      <motion.div {...blobProps(0)} className="pointer-events-none absolute left-[12%] top-[16%] h-5 w-5 rounded-full bg-white/80 shadow-[4px_5px_10px_rgba(80,125,131,.16),-3px_-3px_7px_white]" />
      <motion.div {...blobProps(1.2)} className="pointer-events-none absolute right-[10%] top-[24%] h-3.5 w-3.5 rounded-full bg-amber-200/70 shadow-[4px_5px_10px_rgba(180,140,80,.18),-3px_-3px_7px_rgba(255,255,255,.9)]" />
      <motion.div {...blobProps(2.4)} className="pointer-events-none absolute bottom-[14%] left-[38%] h-4 w-4 rounded-full bg-teal-200/70 shadow-[4px_5px_10px_rgba(60,140,140,.18),-3px_-3px_7px_rgba(255,255,255,.9)]" />

      <div className="relative mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-12 lg:py-6 xl:py-10">
        <div className="z-10 max-w-2xl lg:pr-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={fadeUp}>
              <Badge variant="blue" className="shimmer mb-5 font-mono">Digital SAT · Bluebook-style practice</Badge>
            </motion.div>
            <motion.h1 id="hero-title" variants={fadeUp} className="mb-5 text-4xl font-extrabold leading-[0.92] tracking-[-0.055em] text-teal-950 drop-shadow-[0_3px_0_rgba(255,255,255,.75)] sm:text-5xl lg:text-6xl xl:text-[4.35rem]">
              Make your <span className="text-teal-700">Digital SAT</span> prep feel brilliantly clear.
            </motion.h1>
            <motion.p variants={fadeUp} className="mb-7 max-w-xl text-base leading-7 text-teal-800/75 sm:text-lg sm:leading-8">
              Realistic Bluebook-style tests, an AI tutor that explains every answer, and analytics that show you exactly what to practice next.
            </motion.p>
            <motion.div variants={fadeUp} className="mb-7 flex flex-col gap-3 sm:flex-row">
              <Link to={isSignedIn ? '/dashboard' : '/sign-up'}>
                <Button variant="primary" size="lg">Start practicing free <ArrowRight size={20} /></Button>
              </Link>
              <Button variant="secondary" size="lg" onClick={scrollToHowItWorks}>See how it works</Button>
            </motion.div>
            <motion.div variants={fadeUp} className="flex items-center gap-4">
              <div className="flex -space-x-2" aria-hidden="true">
                {['PK', 'MW', 'AT', 'JS'].map((initials) => <div key={initials} className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-teal-100 to-cyan-50 text-[10px] font-bold text-teal-700 shadow-sm">{initials}</div>)}
              </div>
              <div className="flex items-center gap-1.5" aria-label="Rated five stars by over fifty thousand students">
                <div className="flex" aria-hidden="true">{[1, 2, 3, 4, 5].map((s) => <Star key={s} size={14} className="fill-amber-400 text-amber-400" />)}</div>
                <span className="text-sm text-teal-800/75"><strong className="font-bold text-teal-950">50,000+</strong> students improved their score</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: DUR.hero, ease: EASE, delay: 0.15 }}
          className="relative z-10 ml-4 hidden w-full max-w-[600px] items-center justify-center lg:flex xl:ml-8"
        >
          <div className="absolute inset-0 -z-10 rounded-full bg-teal-300/40 blur-[85px]" />
          <div className="float-soft w-full max-w-[520px] drop-shadow-[0_30px_22px_rgba(33,87,111,.14)]"><ModelViewer /></div>
        </motion.div>
      </div>
    </section>
  )
}
