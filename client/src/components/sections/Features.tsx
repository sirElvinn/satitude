import { motion } from 'framer-motion'
import { BookOpen, BrainCircuit, BarChart3, Target } from 'lucide-react'
import { FEATURES } from '../../lib/constants'
import { fadeUp, staggerContainer, viewportOnce } from '../../lib/motion'

const ICONS: Record<string, React.ReactNode> = {
  exam: <BookOpen size={32} />,
  brain: <BrainCircuit size={32} />,
  chart: <BarChart3 size={32} />,
  target: <Target size={32} />,
}

export const Features = () => {
  return (
    <section id="features" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mx-auto mb-10 max-w-2xl text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <span className="section-kicker mb-4 block font-mono">Everything you need</span>
          <h2 className="mb-4 text-3xl font-extrabold text-teal-950 sm:text-4xl">
            Built around how the real SAT works
          </h2>
          <p className="text-lg leading-8 text-teal-800/75">
            Not generic test prep. SATitude is built specifically for the digital SAT format — adaptive, section-based, and timed exactly like the real thing.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-6 md:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              variants={fadeUp}
              className={`glass-card flex flex-col justify-center p-8 transition-all duration-200 hover:-translate-y-1 ${i === 0 ? 'md:col-span-2 md:flex-row md:items-center md:gap-8' : ''}`}
            >
              <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-[24px] bg-gradient-to-br from-teal-100 via-cyan-50 to-white text-teal-700 shadow-[8px_8px_20px_rgba(38,100,158,0.16),-8px_-8px_20px_rgba(255,255,255,0.9)] ${i === 0 ? 'mb-0 md:h-20 md:w-20' : 'mb-5'}`}>
                {i === 0 ? <BookOpen size={40} /> : ICONS[feature.icon]}
              </div>
              <div>
                <h3 className={`mb-2 font-bold text-teal-950 ${i === 0 ? 'text-2xl' : 'text-xl'}`}>{feature.title}</h3>
                <p className={`leading-7 text-teal-800/75 ${i === 0 ? 'text-base' : 'text-sm'}`}>{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
