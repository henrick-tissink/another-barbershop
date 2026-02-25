'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import type { Video } from '@/types'

interface VideoThumbnailProps {
  video: Video
  title: string
  isActive: boolean
  onClick: () => void
  index: number
}

export function VideoThumbnail({ video, title, isActive, onClick, index }: VideoThumbnailProps) {
  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onClick={onClick}
      className={`
        relative flex-shrink-0 w-36 md:w-44 aspect-video rounded-lg overflow-hidden
        border-2 transition-all duration-300 group
        ${isActive
          ? 'border-[var(--color-burgundy)] shadow-[0_0_25px_rgba(114,47,55,0.5)]'
          : 'border-white/10 hover:border-white/30'
        }
      `}
    >
      <Image
        src={video.poster}
        alt={title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Active overlay */}
      {isActive && (
        <div className="absolute inset-0 bg-[var(--color-burgundy)]/20" />
      )}

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

      {/* Play icon indicator */}
      <div className={`
        absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        w-10 h-10 rounded-full flex items-center justify-center
        transition-all duration-300
        ${isActive
          ? 'bg-[var(--color-burgundy)] scale-100'
          : 'bg-black/50 scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-100'
        }
      `}>
        <svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z"/>
        </svg>
      </div>

      {/* Duration badge */}
      <div className="absolute top-2 right-2 px-2 py-0.5 bg-black/70 rounded text-white/80 text-xs font-mono">
        {formatDuration(video.duration)}
      </div>

      {/* Label */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-3 pt-6">
        <span className="text-white text-sm font-medium truncate block">
          {title}
        </span>
      </div>
    </motion.button>
  )
}
