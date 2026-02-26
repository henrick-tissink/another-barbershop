'use client'

import { useRef, useEffect, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import type { Video } from '@/types'

interface VideoPlayerProps {
  video: Video
  isPlaying: boolean
  onPlay: () => void
  onEnded: () => void
  playLabel: string
}

export function VideoPlayer({ video, isPlaying, onPlay, onEnded, playLabel }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [progress, setProgress] = useState(0)
  const [isMuted, setIsMuted] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)

  useEffect(() => {
    const videoEl = videoRef.current
    if (!videoEl) return

    if (isPlaying) {
      videoEl.play().catch(() => {
        // Autoplay was prevented, user needs to interact
      })
    } else {
      videoEl.pause()
      videoEl.currentTime = 0
      setProgress(0)
      setCurrentTime(0)
    }
  }, [isPlaying])

  // Reset when video changes
  useEffect(() => {
    const videoEl = videoRef.current
    if (videoEl) {
      videoEl.load()
      videoEl.currentTime = 0
      setProgress(0)
      setCurrentTime(0)
    }
  }, [video.id])

  const handleTimeUpdate = useCallback(() => {
    const videoEl = videoRef.current
    if (videoEl && videoEl.duration) {
      setProgress((videoEl.currentTime / videoEl.duration) * 100)
      setCurrentTime(videoEl.currentTime)
    }
  }, [])

  const handleProgressClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const videoEl = videoRef.current
    if (!videoEl || !videoEl.duration) return

    const rect = e.currentTarget.getBoundingClientRect()
    const clickPosition = (e.clientX - rect.left) / rect.width
    videoEl.currentTime = clickPosition * videoEl.duration
  }, [])

  const toggleMute = useCallback(() => {
    const videoEl = videoRef.current
    if (videoEl) {
      videoEl.muted = !videoEl.muted
      setIsMuted(!isMuted)
    }
  }, [isMuted])

  const togglePlay = useCallback(() => {
    const videoEl = videoRef.current
    if (!videoEl) return

    if (videoEl.paused) {
      onPlay()
    } else {
      videoEl.pause()
    }
  }, [onPlay])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div className="relative w-full h-full rounded-lg overflow-hidden border border-white/10 bg-[#0a0a0a]">
      {/* Video Element */}
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        onEnded={onEnded}
        onTimeUpdate={handleTimeUpdate}
        playsInline
        muted={isMuted}
        preload="none"
        poster={video.poster}
      >
        <source src={video.src} type="video/mp4" />
      </video>

      {/* Poster Image (shown when not playing) */}
      <AnimatePresence>
        {!isPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            <Image
              src={video.poster}
              alt=""
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Play Button Overlay (when not playing) */}
      <AnimatePresence>
        {!isPlaying && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onPlay}
            className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 group cursor-pointer z-10"
          >
            {/* Play icon with burgundy glow */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[var(--color-burgundy)] flex items-center justify-center shadow-[0_0_40px_rgba(114,47,55,0.6)] transition-shadow group-hover:shadow-[0_0_60px_rgba(114,47,55,0.8)]"
            >
              <svg className="w-8 h-8 md:w-10 md:h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </motion.div>
            <span className="mt-5 text-white/80 text-sm tracking-[0.2em] uppercase font-medium">
              {playLabel}
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Custom Controls (when playing) */}
      <AnimatePresence>
        {isPlaying && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent pt-16 pb-4 px-4 md:px-6"
          >
            {/* Progress bar */}
            <div
              className="h-1 bg-white/20 rounded-full overflow-hidden mb-4 cursor-pointer group"
              onClick={handleProgressClick}
            >
              <motion.div
                className="h-full bg-[var(--color-burgundy)] relative"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            </div>

            {/* Control buttons */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                {/* Play/Pause toggle */}
                <button
                  onClick={togglePlay}
                  className="w-10 h-10 flex items-center justify-center text-white/80 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                  </svg>
                </button>

                {/* Mute toggle */}
                <button
                  onClick={toggleMute}
                  className="w-10 h-10 flex items-center justify-center text-white/80 hover:text-white transition-colors"
                >
                  {isMuted ? (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
                    </svg>
                  ) : (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                    </svg>
                  )}
                </button>

                {/* Duration display */}
                <span className="text-white/60 text-sm font-mono">
                  {formatTime(currentTime)} / {formatTime(video.duration)}
                </span>
              </div>

              {/* Fullscreen button (optional) */}
              <button
                onClick={() => videoRef.current?.requestFullscreen()}
                className="w-10 h-10 flex items-center justify-center text-white/80 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
