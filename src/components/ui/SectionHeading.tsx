'use client'

import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  className?: string
  align?: 'left' | 'center' | 'right'
}

export function SectionHeading({
  title,
  subtitle,
  className,
  align = 'center',
}: SectionHeadingProps) {
  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  }

  return (
    <div className={cn('flex flex-col mb-12', alignmentClasses[align], className)}>
      <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-white)] mb-4">
        {title}
      </h2>

      {/* Steady Line - 24px burgundy line */}
      <div
        className="h-[3px] bg-[var(--color-burgundy)] mb-4"
        style={{ width: '24px' }}
        aria-hidden="true"
      />

      {subtitle && (
        <p className="text-[var(--color-medium-grey)] text-lg max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default SectionHeading
