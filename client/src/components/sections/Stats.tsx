import { useEffect, useRef, useState } from 'react'
import { animate, motion, useInView, useReducedMotion } from 'framer-motion'
import { BookOpenCheck, ChartNoAxesCombined, Sparkles, Trophy } from 'lucide-react'
import { STATS } from '../../lib/constants'
import { staggerContainer, fadeUp, viewportOnce } from '../../lib/motion'

const ICONS = [Trophy, BookOpenCheck, ChartNoAxesCombined, Sparkles]

function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const prefersReducedMotion = useReducedMotion()
  const [display, setDisplay] = useState(value)

  useEffect(() => {
    const match = value.match(/^([\d.,]+)(.*)$/)
    if (!match) return
    const target = parseFloat(match[1].replace(/,/g, ''))
    const suffix = match[2] ?? ''

    if (!inView || prefersReducedMotion) return

    const controls = animate(0, target, {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => {
        setDisplay(Math.round(latest).toLocaleString('en-US').concat(suffix))
      },
    })
    return () => controls.stop()
  }, [inView, value, prefersReducedMotion])

  return (
    <div ref={ref} className="mb-1 font-mono text-3xl font-extrabold tracking-[-.05em] text-teal-700 lg:text-4xl" aria-label={value}>
      {display}
    </div>
  )
}

export const Stats = () => (
  <section className="relative z-20 -mt-7 px-4 sm:px-6 lg:px-8" aria-label="SATitude results">
    <div className="mx-auto max-w-7xl">
      <motion.div
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        {STATS.map((stat, i) => {
          const Icon = ICONS[i]
          return (
            <motion.div
              key={stat.value}
              variants={fadeUp}
              className="glass-card group px-5 py-5 text-center transition-transform duration-200 hover:-translate-y-1 sm:px-6"
            >
              <div className="glass-icon mx-auto mb-3 h-11 w-11 bg-gradient-to-br from-teal-100 via-cyan-50 to-white text-teal-700 transition-transform duration-200 group-hover:rotate-6">
                <Icon size={21} />
              </div>
              <CountUp value={stat.value} />
              <div className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-teal-700/60">{stat.label}</div>
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  </section>
)
