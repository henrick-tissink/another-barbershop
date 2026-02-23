'use client'

import { useLocale } from 'next-intl'
import { useRouter, usePathname } from '@/i18n/navigation'
import { locales, type Locale } from '@/i18n/config'

const languageNames: Record<Locale, string> = {
  ro: 'RO',
  en: 'EN',
}

export function LanguageSwitcher() {
  const locale = useLocale() as Locale
  const router = useRouter()
  const pathname = usePathname()

  const switchLocale = (newLocale: Locale) => {
    router.replace(pathname, { locale: newLocale })
  }

  return (
    <div className="flex items-center gap-1">
      {locales.map((l, index) => (
        <span key={l} className="flex items-center">
          <button
            onClick={() => switchLocale(l)}
            className={`text-sm tracking-wide transition-colors duration-300 ${
              locale === l
                ? 'text-white font-medium'
                : 'text-white/50 hover:text-white'
            }`}
          >
            {languageNames[l]}
          </button>
          {index < locales.length - 1 && (
            <span className="text-white/30 mx-1.5">|</span>
          )}
        </span>
      ))}
    </div>
  )
}
