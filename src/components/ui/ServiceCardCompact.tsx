'use client'

import { cn } from '@/lib/utils'
import { Service } from '@/types'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { siteConfig } from '@/data/siteConfig'

interface ServiceCardCompactProps {
  service: Service
  className?: string
}

export function ServiceCardCompact({ service, className }: ServiceCardCompactProps) {
  const t = useTranslations('services')
  const tCommon = useTranslations('common')

  return (
    <motion.a
      href={siteConfig.bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'group relative rounded-lg p-5 block cursor-pointer h-full',
        'border border-white/10 hover:border-[var(--color-burgundy)]/50',
        'bg-[#1d1d1d]',
        'transition-all duration-300',
        'hover:bg-[#252525]',
        className
      )}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Service name */}
      <h3 className="text-base font-medium text-white group-hover:text-[var(--color-burgundy)] transition-colors duration-300 mb-3 pr-6">
        {t(`items.${service.id}.name`)}
      </h3>

      {/* Price - prominent */}
      <div className="flex items-baseline justify-between">
        <span className="text-[var(--color-burgundy)] font-bold text-xl">
          {service.price}
          <span className="text-xs font-normal text-white/40 ml-1">{service.currency}</span>
        </span>
        {service.duration && (
          <span className="text-white/30 text-xs flex items-center gap-1">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
            {service.duration}&apos;
          </span>
        )}
      </div>

      {/* Hover arrow indicator */}
      <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[var(--color-burgundy)]">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </div>
    </motion.a>
  )
}
