import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/Button'
import { EASE, DUR, viewportOnce } from '../../lib/motion'

export const CTA = () => {
  return (
    <section className="px-4 pb-16 pt-4 sm:px-6 lg:px-8 lg:pb-24">
      <motion.div
        className="mx-auto max-w-5xl rounded-[40px] border border-white/70 bg-gradient-to-br from-teal-700 via-teal-600 to-cyan-600 px-8 py-14 text-center text-white shadow-[18px_18px_48px_rgba(13,148,136,.24),-18px_-18px_48px_rgba(255,255,255,0.18)] sm:px-10 lg:px-16"
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={viewportOnce}
        transition={{ duration: DUR.emphasis, ease: EASE }}
      >
        <h2 className="mb-6 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
          Your SAT is coming up. Start today.
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-lg leading-8 text-teal-100">
          Most students improve by 80–150 points with four weeks of consistent practice. The sooner you start, the more time you have.
        </p>
        <div className="mt-2 flex flex-col justify-center gap-4 sm:flex-row">
          <Link to="/sign-up">
            <Button
              variant="secondary"
              size="lg"
              className="group min-w-[220px]"
            >
              Start for free
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <Button
            variant="outline-light"
            size="lg"
            className="min-w-[220px]"
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View pricing
          </Button>
        </div>
        <p className="mt-8 text-sm text-teal-100">
          No credit card required · Cancel anytime · 7-day free trial on Pro
        </p>
      </motion.div>
    </section>
  )
}
