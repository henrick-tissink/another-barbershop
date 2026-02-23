'use client'

import { cn } from '@/lib/utils'
import { TeamMember } from '@/types'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from './Button'

interface TeamCardProps {
  member: TeamMember
  className?: string
}

function getInitials(name: string): string {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

export function TeamCard({ member, className }: TeamCardProps) {
  return (
    <motion.div
      className={cn(
        'group relative rounded-lg overflow-hidden h-full',
        'border border-white/10 hover:border-[var(--color-burgundy)]/40',
        'bg-gradient-to-b from-[#1a1a1a] to-[#151515]',
        'transition-all duration-500',
        'hover:shadow-xl hover:shadow-[var(--color-burgundy)]/10',
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
      whileHover={{ y: -6 }}
    >
      {/* Photo / Initial Placeholder */}
      <div className="relative w-full aspect-[4/5] overflow-hidden">
        {member.image ? (
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[#222] via-[#1a1a1a] to-[#111]">
            {/* Decorative pattern for placeholder */}
            <div className="absolute inset-0 opacity-20">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, rgba(114,47,55,0.3) 1px, transparent 0)`,
                  backgroundSize: '24px 24px',
                }}
              />
            </div>
            {/* Initials */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <span className="text-6xl font-light text-[var(--color-burgundy)]/40 tracking-widest">
                  {getInitials(member.name)}
                </span>
                {/* Decorative ring */}
                <div className="absolute -inset-6 border border-[var(--color-burgundy)]/20 rounded-full" />
              </div>
            </div>
          </div>
        )}

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent to-transparent" />

        {/* Years badge */}
        <div className="absolute top-4 right-4 bg-[var(--color-burgundy)]/90 backdrop-blur-sm px-3 py-1.5 rounded-sm">
          <span className="text-white text-xs font-semibold">
            {member.yearsExperience}+ yrs
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col">
        <h3 className="text-lg font-medium text-white mb-1">
          {member.name}
        </h3>
        <p className="text-[var(--color-burgundy)] text-sm font-medium mb-4">
          {member.role}
        </p>

        {member.quote && (
          <blockquote className="relative pl-4 border-l-2 border-[var(--color-burgundy)]/30 mb-5">
            <p className="text-white/40 text-sm italic leading-relaxed line-clamp-2">
              &ldquo;{member.quote}&rdquo;
            </p>
          </blockquote>
        )}

        {/* Booking Button */}
        <div className="mt-auto pt-4 border-t border-white/5">
          <Button
            href={member.bookingUrl}
            variant="outline"
            size="sm"
            className="w-full text-xs hover:shadow-lg hover:shadow-[var(--color-burgundy)]/20"
          >
            Book with {member.name.split(' ')[0]}
          </Button>
        </div>
      </div>
    </motion.div>
  )
}

export default TeamCard
