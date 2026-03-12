import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { locales, type Locale } from '@/i18n/config'
import '../globals.css'

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  style: 'italic',
  display: 'swap',
  variable: '--font-playfair',
})

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const messages = await getMessages({ locale })
  const t = messages.metadata as Record<string, string>

  return {
    metadataBase: new URL('https://anotherbarbershop.ro'),
    title: {
      default: t.title,
      template: '%s | Another Barbershop',
    },
    description: t.description,
    keywords: [
      'barbershop bucurești',
      'frizerie bucurești',
      'haircut bucurești',
      'beard trim bucurești',
      'barber shop romania',
    ],
    authors: [{ name: 'Another Barbershop' }],
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: 'any' },
        { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      ],
      apple: [
        { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      ],
    },
    manifest: '/site.webmanifest',
    openGraph: {
      type: 'website',
      locale: locale === 'ro' ? 'ro_RO' : 'en_US',
      url: 'https://anotherbarbershop.ro',
      siteName: 'Another Barbershop',
      title: t.title,
      description: t.description,
      images: [
        {
          url: '/images/og/storefront.png',
          width: 1200,
          height: 630,
          alt: 'Another Barbershop - Premium barbershop in București',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t.title,
      description: t.description,
      images: ['/images/og/storefront.png'],
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: locale === 'ro' ? 'https://anotherbarbershop.ro' : 'https://anotherbarbershop.ro/en',
      languages: {
        'ro': 'https://anotherbarbershop.ro',
        'en': 'https://anotherbarbershop.ro/en',
      },
    },
  }
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params

  // Validate locale
  if (!locales.includes(locale as Locale)) {
    notFound()
  }

  // Enable static rendering
  setRequestLocale(locale)

  // Get messages for the current locale
  const messages = await getMessages()

  return (
    <html lang={locale} className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
