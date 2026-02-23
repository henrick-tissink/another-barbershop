'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { ButtonHTMLAttributes, AnchorHTMLAttributes, forwardRef } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonBaseProps {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  children: React.ReactNode
}

type ButtonAsButton = ButtonBaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
    href?: never
  }

type ButtonAsLink = ButtonBaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps> & {
    href: string
  }

type ButtonProps = ButtonAsButton | ButtonAsLink

const variantStyles: Record<ButtonVariant, string> = {
  primary: cn(
    'bg-[var(--color-burgundy)] text-white',
    'hover:bg-[var(--color-burgundy-light)]',
    'active:bg-[var(--color-burgundy-dark)]',
    'border border-transparent'
  ),
  secondary: cn(
    'bg-white/10 text-white',
    'hover:bg-white/20',
    'active:bg-white/5',
    'border border-transparent'
  ),
  outline: cn(
    'bg-transparent text-[var(--color-burgundy)]',
    'border border-[var(--color-burgundy)]',
    'hover:bg-[var(--color-burgundy)] hover:text-white'
  ),
  ghost: cn(
    'bg-transparent text-white/70',
    'hover:text-white hover:bg-white/5',
    'border border-transparent'
  ),
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm tracking-wide',
  md: 'px-6 py-3 text-sm tracking-wide',
  lg: 'px-8 py-4 text-base tracking-wide',
}

const baseStyles = cn(
  'inline-flex items-center justify-center',
  'font-medium rounded-sm',
  'transition-all duration-300 ease-out',
  'focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-burgundy)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-black)]',
  'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none'
)

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className, children, ...props }, ref) => {
    const combinedClassName = cn(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      className
    )

    if ('href' in props && props.href) {
      const { href, ...linkProps } = props as ButtonAsLink
      const isExternal = href.startsWith('http') || href.startsWith('//')

      if (isExternal) {
        return (
          <a
            href={href}
            ref={ref as React.Ref<HTMLAnchorElement>}
            className={combinedClassName}
            target="_blank"
            rel="noopener noreferrer"
            {...linkProps}
          >
            {children}
          </a>
        )
      }

      return (
        <Link
          href={href}
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={combinedClassName}
          {...linkProps}
        >
          {children}
        </Link>
      )
    }

    const buttonProps = props as ButtonAsButton
    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={combinedClassName}
        {...buttonProps}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
