import type { Variants } from 'framer-motion'

// ─── Design motion tokens (ui-ux-pro-max tempo + framer-motion skill) ───────
// Easy-out curve — fast exit, soft landing. Used for all passive reveals.
export const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

// Duration tokens (ms): 150 micro, 250 base, 400 emphasis, 600 hero
export const DUR = {
  micro: 0.15,
  base: 0.25,
  emphasis: 0.4,
  hero: 0.6,
} as const

// Single-element reveal. y stays small (≤24px) per the skill's text-animation rule.
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: DUR.emphasis, ease: EASE },
  },
}

// Stagger container — orchestrates children with a gentle cascade.
export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

// Standard viewport config for scroll reveals — trigger once, start a touch early.
export const viewportOnce = { once: true, margin: '-80px' } as const

// Hero-grade reveal with a longer, softer entrance.
export const heroReveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: DUR.hero, ease: EASE },
  },
}
