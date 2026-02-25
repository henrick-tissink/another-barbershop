'use client'

import { useState, useRef, useCallback } from 'react'
import { motion, useInView } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { videos } from '@/data/videos'
import { VideoPlayer } from '@/components/ui/VideoPlayer'
import { VideoThumbnail } from '@/components/ui/VideoThumbnail'

export function VideoShowcaseSection() {
  const [activeVideoId, setActiveVideoId] = useState(videos[0].id)
  const [isPlaying, setIsPlaying] = useState(false)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  const t = useTranslations('videos')

  const activeVideo = videos.find(v => v.id === activeVideoId)!

  const handleThumbnailClick = useCallback((videoId: string) => {
    if (videoId !== activeVideoId) {
      setIsPlaying(false)
      setActiveVideoId(videoId)
    }
  }, [activeVideoId])

  const handlePlay = useCallback(() => {
    setIsPlaying(true)
  }, [])

  const handleEnded = useCallback(() => {
    setIsPlaying(false)
  }, [])

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="relative py-28 md:py-40"
      style={{ backgroundColor: '#0d0d0d' }}
    >
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative container mx-auto px-6 md:px-8 max-w-6xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="flex items-center justify-center gap-6 mb-6">
            <div className="w-12 h-[2px] bg-white/20" />
            <span className="text-[var(--color-burgundy)] text-sm tracking-[0.25em] uppercase font-semibold">
              {t('label')}
            </span>
            <div className="w-12 h-[2px] bg-white/20" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight">
            {t('title')}
          </h2>
          <p className="mt-6 text-white/40 text-lg max-w-xl mx-auto">
            {t('description')}
          </p>
          {/* The Steady Line */}
          <div className="w-16 h-[3px] bg-[var(--color-burgundy)] mx-auto mt-10 shadow-[0_0_15px_rgba(114,47,55,0.4)]" />
        </motion.div>

        {/* Featured Video Player */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative aspect-video max-w-4xl mx-auto mb-8"
        >
          <VideoPlayer
            video={activeVideo}
            isPlaying={isPlaying}
            onPlay={handlePlay}
            onEnded={handleEnded}
            playLabel={t('watchWithSound')}
          />
        </motion.div>

        {/* Active video title and description */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-10 max-w-4xl mx-auto"
        >
          <h3 className="text-xl md:text-2xl font-light text-white mb-2">
            {t(`items.${activeVideo.titleKey}.title`)}
          </h3>
          <p className="text-white/50 text-sm md:text-base">
            {t(`items.${activeVideo.titleKey}.description`)}
          </p>
        </motion.div>

        {/* Thumbnail Selection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center gap-4 md:gap-6 overflow-x-auto pb-4 px-4 -mx-4 md:mx-0 md:px-0 md:overflow-visible snap-x md:snap-none"
        >
          {videos.map((video, index) => (
            <div key={video.id} className="snap-center">
              <VideoThumbnail
                video={video}
                title={t(`items.${video.titleKey}.title`)}
                isActive={video.id === activeVideoId}
                onClick={() => handleThumbnailClick(video.id)}
                index={index}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
