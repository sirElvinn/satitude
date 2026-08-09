import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { TESTIMONIALS } from '../../lib/constants'
import { fadeUp, staggerContainer, viewportOnce } from '../../lib/motion'

export const Testimonials = () => {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mx-auto mb-12 max-w-2xl text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <span className="section-kicker mb-4 block font-mono">Testimonials</span>
          <h2 className="mb-4 text-3xl font-extrabold text-teal-950 sm:text-4xl">
            Real students, real score gains
          </h2>
          <p className="text-lg leading-8 text-teal-800/75">
            Hear from students who improved their SAT scores with SATitude.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-6 md:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {TESTIMONIALS.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              variants={fadeUp}
              className="glass-card p-8"
            >
              <div className="mb-4 flex" aria-label="5 out of 5 stars">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={15} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="mb-6 text-base leading-8 text-teal-800/75">“{testimonial.text}”</p>
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-teal-100 to-cyan-50 text-sm font-bold text-teal-700 shadow-sm">
                  {testimonial.name
                    .split(' ')
                    .map((name) => name[0])
                    .join('')}
                </div>
                <div>
                  <div className="text-sm font-semibold text-teal-950">{testimonial.name}</div>
                  <div className="font-mono text-sm font-medium text-teal-700">{testimonial.score}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
