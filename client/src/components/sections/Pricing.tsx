import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { Button } from '../ui/Button'
import { PRICING } from '../../lib/constants'
import { fadeUp, staggerContainer, viewportOnce } from '../../lib/motion'

export const Pricing = () => {
  return (
    <section id="pricing" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mx-auto mb-12 max-w-2xl text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <span className="section-kicker mb-4 block font-mono">Pricing</span>
          <h2 className="mb-4 text-3xl font-extrabold text-teal-950 sm:text-4xl">
            Start free, upgrade when you’re ready
          </h2>
          <p className="text-lg leading-8 text-teal-800/75">
            No credit card needed to get started. Cancel Pro anytime.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {PRICING.map((plan) => (
            <motion.div
              key={plan.name}
              variants={fadeUp}
              className={`glass-card relative flex flex-col overflow-hidden p-8 ${plan.highlighted ? 'border-teal-200 bg-gradient-to-br from-teal-700 via-teal-600 to-cyan-600 text-white shadow-[16px_18px_36px_rgba(13,148,136,.3),-12px_-12px_28px_rgba(255,255,255,.7),inset_0_1px_0_rgba(255,255,255,.35)]' : 'bg-white/70 text-teal-900'}`}
            >
              {plan.highlighted && (
                <span className="mb-5 inline-flex -rotate-2 self-start rounded-full border border-amber-200 bg-amber-100 px-4 py-2 font-mono text-[10px] font-extrabold uppercase tracking-[0.2em] text-amber-900 shadow-[0_8px_16px_-6px_rgba(217,119,6,.35)]">
                  Most popular
                </span>
              )}

              <div className="mb-6">
                <h3 className={`mb-1 text-2xl font-bold ${plan.highlighted ? 'text-white' : 'text-teal-950'}`}>
                  {plan.name}
                </h3>
                <p className={`mb-4 text-sm ${plan.highlighted ? 'text-teal-50' : 'text-teal-800/75'}`}>
                  {plan.description}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className={`font-mono text-5xl font-extrabold ${plan.highlighted ? 'text-white' : 'text-teal-950'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm ${plan.highlighted ? 'text-teal-50' : 'text-teal-800/75'}`}>
                    / {plan.period}
                  </span>
                </div>
              </div>

              <ul className="mb-8 flex-1 space-y-3 text-sm">
                {plan.features.map((feature: string) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check size={16} className={`mt-0.5 flex-shrink-0 ${plan.highlighted ? 'text-teal-100' : 'text-teal-700'}`} />
                    <span className={plan.highlighted ? 'text-teal-50' : 'text-teal-800/75'}>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.highlighted ? 'outline-light' : 'secondary'}
                className="w-full justify-center"
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
