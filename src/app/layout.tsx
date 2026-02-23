import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { siteConfig } from '@/data/siteConfig'

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

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#722F37',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://anotherbarbershop.ro'),
  title: {
    default: 'Another Barbershop | Premium Barbershop in București',
    template: '%s | Another Barbershop',
  },
  description:
    'Another Barbershop in București - Not about hype, just doing things right. Expert haircuts, beard trims, and grooming services by skilled barbers with 6+ years experience.',
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
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'ro_RO',
    url: 'https://anotherbarbershop.ro',
    siteName: siteConfig.name,
    title: 'Another Barbershop | Premium Barbershop in București',
    description:
      'Not about hype — just doing things right. Expert haircuts and grooming by skilled barbers.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Another Barbershop - Premium Barbershop in București',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Another Barbershop | București',
    description: 'Not about hype — just doing things right.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ro" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
