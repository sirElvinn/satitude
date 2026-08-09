import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'outline-light' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit'
  disabled?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  type = 'button',
  disabled = false,
}) => {
  const base =
    'relative inline-flex cursor-pointer items-center justify-center rounded-full font-heading font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal-500 disabled:cursor-not-allowed disabled:opacity-50 motion-reduce:transform-none motion-reduce:transition-none active:translate-y-[2px] active:scale-[0.97]'

  const variants = {
    primary:
      'border border-white/45 bg-gradient-to-br from-amber-500 to-orange-600 text-teal-950 shadow-[0_10px_24px_-6px_rgba(217,119,6,.45),inset_0_1px_0_rgba(255,255,255,.5)] hover:-translate-y-1 hover:shadow-[0_16px_30px_-6px_rgba(217,119,6,.5),inset_0_1px_0_rgba(255,255,255,.55)]',
    secondary:
      'border border-white/70 bg-white/60 text-teal-800 shadow-[0_8px_20px_-8px_rgba(19,78,74,.18),inset_0_1px_0_rgba(255,255,255,.7)] backdrop-blur-md hover:-translate-y-1 hover:bg-white/85',
    outline:
      'border border-teal-700/25 bg-white/40 text-teal-800 shadow-[0_8px_20px_-8px_rgba(19,78,74,.16),inset_0_1px_0_rgba(255,255,255,.7)] backdrop-blur-md hover:-translate-y-0.5 hover:bg-white/70',
    'outline-light':
      'border border-white/50 bg-white/10 text-white shadow-[0_8px_20px_-8px_rgba(2,44,34,.3),inset_0_1px_0_rgba(255,255,255,.25)] hover:bg-white/20',
    ghost: 'text-teal-800 bg-transparent shadow-none hover:text-teal-950',
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant]} ${sizeClasses[size]} ${className}`}
    >
      {children}
    </button>
  )
}

const sizeClasses = {
  sm: 'px-4 py-2 text-sm min-h-[40px]',
  md: 'px-6 py-3 text-sm min-h-[44px]',
  lg: 'px-8 py-4 text-base min-h-[52px]',
}
