import type { SiteConfig } from '@/types'

export const siteConfig: SiteConfig = {
  name: 'Another Barbershop',
  tagline: 'Doing things right.',
  address: {
    street: 'Strada Constantin Aricescu 22',
    city: 'București',
    postalCode: '011685',
    country: 'Romania',
  },
  phone: '0779 260 568',
  whatsapp: 'https://wa.me/40779260568',
  social: {
    instagram: 'https://instagram.com/anotherbarbershop.ro',
    tiktok: undefined,
  },
  hours: {
    weekdays: '10:00 - 20:00',
    saturday: '10:00 - 18:00',
    sunday: 'Closed',
  },
  bookingUrl: 'https://mero.ro',
  coordinates: {
    lat: 44.4378,
    lng: 26.0946,
  },
}

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Team', href: '#team' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]
