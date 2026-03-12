'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/Button'

export default function NotFound() {
  const t = useTranslations('notFound')
  const tGallery = useTranslations('gallery')

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#111]">
      <div className="text-center max-w-lg px-6">
        <div className="relative aspect-square w-64 mx-auto mb-8 opacity-60">
          <Image
            src="/images/gallery/originals/conspiracy-board-2.webp"
            alt={tGallery('images.conspiracyBoard2')}
            fill
            sizes="256px"
            className="object-cover rounded-lg"
          />
        </div>
        <h1 className="text-4xl font-bold text-white mb-4">404</h1>
        <p className="text-white/60 mb-8">{t('message')}</p>
        <Button href="/" variant="primary">{t('backHome')}</Button>
      </div>
    </div>
  )
}
