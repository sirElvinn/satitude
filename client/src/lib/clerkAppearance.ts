import type { ComponentProps } from 'react'
import { SignIn } from '@clerk/clerk-react'

type SignInAppearance = NonNullable<ComponentProps<typeof SignIn>['appearance']>

const TEAL_PRIMARY = '#0d9488'
const TEAL_FOREGROUND = '#134e4a'
const TEAL_MUTED = '#5b8179'
const TEAL_NAVY = '#042f2e'
const AMBER_START = '#f59e0b'
const AMBER_END = '#ea580c'
const DANGER = '#dc2626'
const BORDER = '#c7e6df'

const fontSans =
  "'Open Sans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
const fontHeading = "'Poppins', ui-sans-serif, system-ui, sans-serif"
const fontMono = "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"

export const clerkAppearance: SignInAppearance = {
  variables: {
    colorPrimary: TEAL_PRIMARY,
    colorForeground: TEAL_FOREGROUND,
    colorMutedForeground: TEAL_MUTED,
    colorBackground: 'rgba(255, 255, 255, 0.55)',
    colorInput: 'rgba(255, 255, 255, 0.72)',
    colorInputForeground: TEAL_FOREGROUND,
    colorBorder: BORDER,
    colorNeutral: '#d6eee8',
    colorDanger: DANGER,
    colorSuccess: '#16a34a',
    colorRing: TEAL_PRIMARY,
    fontFamily: fontSans,
    fontFamilyButtons: fontHeading,
    fontSize: '0.9375rem',
    borderRadius: '0.875rem',
  },
  elements: {
    rootBox: {
      width: '100%',
    },
    card: {
      backgroundColor: 'rgba(255, 255, 255, 0.55)',
      backgroundImage: 'none',
      borderRadius: '1.25rem',
      border: '1px solid rgba(255, 255, 255, 0.6)',
      boxShadow: '0 24px 48px -12px rgba(19, 78, 74, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.7)',
      padding: '1.75rem 1.5rem',
      width: '100%',
      backdropFilter: 'blur(18px)',
      WebkitBackdropFilter: 'blur(18px)',
    },
    header: 'hidden',
    logoBox: 'hidden',
    form: {
      gap: '0.75rem',
    },
    formFieldLabel: {
      fontSize: '0.8125rem',
      fontWeight: 700,
      color: TEAL_NAVY,
    },
    formFieldInput: {
      backgroundColor: 'rgba(255, 255, 255, 0.72)',
      color: TEAL_FOREGROUND,
      border: `1px solid ${BORDER}`,
      borderRadius: '0.625rem',
      minHeight: '48px',
      fontSize: '1rem',
      boxShadow: '0 2px 6px -2px rgba(19, 78, 74, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
      transition: 'border-color .2s ease, box-shadow .2s ease',
      '&:focus': {
        borderColor: TEAL_PRIMARY,
        boxShadow: '0 0 0 3px rgba(13, 148, 136, 0.18), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
      },
    },
    formFieldErrorText: {
      color: DANGER,
      fontSize: '0.8125rem',
    },
    formButtonPrimary: {
      background: `linear-gradient(135deg, ${AMBER_START} 0%, ${AMBER_END} 100%)`,
      border: '1px solid rgba(255, 255, 255, 0.45)',
      borderRadius: '0.875rem',
      color: TEAL_FOREGROUND,
      fontWeight: 800,
      minHeight: '48px',
      boxShadow: '0 10px 24px -6px rgba(217, 119, 6, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.5)',
      transition: 'transform .2s ease, box-shadow .2s ease',
      '&:hover, &:focus, &:active': {
        background: `linear-gradient(135deg, ${AMBER_START} 0%, ${AMBER_END} 100%)`,
        boxShadow: '0 14px 28px -6px rgba(217, 119, 6, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.55)',
        transform: 'translateY(-1px)',
      },
    },
    socialButtonsBlockButton: {
      backgroundColor: 'rgba(255, 255, 255, 0.6)',
      border: `1px solid ${BORDER}`,
      borderRadius: '0.75rem',
      color: TEAL_FOREGROUND,
      fontWeight: 700,
      minHeight: '48px',
      boxShadow: '0 6px 16px -6px rgba(19, 78, 74, 0.16), inset 0 1px 0 rgba(255, 255, 255, 0.7)',
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
      transition: 'background-color .2s ease, transform .2s ease',
      '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
      },
    },
    socialButtonsBlockButtonText: {
      color: TEAL_FOREGROUND,
    },
    dividerLine: {
      backgroundColor: BORDER,
    },
    dividerText: {
      color: TEAL_MUTED,
      fontSize: '0.8125rem',
    },
    footerActionLink: {
      color: TEAL_PRIMARY,
      fontWeight: 700,
      '&:hover': {
        color: '#0f766e',
      },
    },
    footerActionText: {
      color: TEAL_MUTED,
    },
    otpCodeFieldInput: {
      backgroundColor: 'rgba(255, 255, 255, 0.72)',
      color: TEAL_FOREGROUND,
      border: `1px solid ${BORDER}`,
      borderRadius: '0.625rem',
      fontWeight: 700,
      fontFamily: fontMono,
      '&:focus': {
        borderColor: TEAL_PRIMARY,
        boxShadow: '0 0 0 3px rgba(13, 148, 136, 0.18)',
      },
    },
    alert: {
      borderRadius: '0.75rem',
      border: `1px solid ${BORDER}`,
      backgroundColor: 'rgba(255, 255, 255, 0.7)',
    },
    alertText: {
      color: DANGER,
      fontSize: '0.875rem',
    },
    footer: 'hidden',
  },
  layout: {
    socialButtonsPlacement: 'bottom',
  },
}
