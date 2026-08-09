import { motion } from 'framer-motion'
import { HOW_IT_WORKS } from '../../lib/constants'
import { fadeUp, staggerContainer, viewportOnce } from '../../lib/motion'

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mx-auto mb-12 max-w-2xl text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <span className="section-kicker mb-4 block font-mono">How it works</span>
          <h2 className="mb-4 text-3xl font-extrabold text-teal-950 sm:text-4xl">
            From sign-up to score improvement
          </h2>
          <p className="text-lg leading-8 text-teal-800/75">
            Most students see measurable improvement within two weeks.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-6 md:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {HOW_IT_WORKS.map((step) => (
            <motion.div
              key={step.step}
              variants={fadeUp}
              className="glass-card relative p-8 text-left transition-all duration-200 hover:-translate-y-1"
            >
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-[20px] bg-gradient-to-br from-teal-100 via-cyan-50 to-white font-mono text-lg font-bold text-teal-700 shadow-[8px_8px_20px_rgba(38,100,158,0.16),-8px_-8px_18px_rgba(255,255,255,0.9)]">
                {step.step}
              </div>
              <h3 className="mb-3 text-xl font-bold text-teal-950">{step.title}</h3>
              <p className="leading-7 text-teal-800/75">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
