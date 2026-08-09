import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Button } from '../components/ui/Button'
import { Footer } from '../components/layout/Footer'
import { fadeUp, staggerContainer } from '../lib/motion'

export default function NotFound() {
  return (
    <div className="landing-background flex min-h-screen flex-col text-teal-900 antialiased">
      <motion.div
        className="flex flex-1 flex-col items-center justify-center gap-8 px-8 py-16 md:flex-row md:px-16"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        <div className="max-w-xl">
          <motion.div variants={fadeUp}>
            <span className="glass-pill mb-8 px-4 py-2 font-mono text-sm font-bold uppercase tracking-[0.2em] text-teal-700">
              Error · 404
            </span>
          </motion.div>

          <motion.h1 variants={fadeUp} className="mb-8 text-5xl font-extrabold leading-tight tracking-[-0.04em] text-teal-950 md:text-6xl">
            Looks Like Your
            <br />
            <span className="text-teal-700">Navigator Took an L</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="mb-8 text-lg leading-relaxed text-teal-800/75">
            It looks like this page couldn't score high enough to stay in our index! Don't worry, even the sharpest minds lose their way. Let's get you back on track for a perfect score.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <Link to="/" className="inline-block">
              <Button variant="primary" size="lg">Back to home →</Button>
            </Link>
            <Link to="/" className="inline-block">
              <Button variant="outline" size="lg">Try a practice test</Button>
            </Link>
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          className="flex flex-1 items-center justify-center"
        >
          <div className="relative w-[420px] h-[420px] md:w-[560px] md:h-[560px]">
            <img
              src="/models/404-mascot-updated.png"
              alt="404 Mascot"
              className="float-soft h-full w-full object-contain"
            />
          </div>
        </motion.div>
      </motion.div>

      <Footer />
    </div>
  )
}
