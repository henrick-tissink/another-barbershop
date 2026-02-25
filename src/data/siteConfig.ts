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
    instagram: 'https://www.instagram.com/anotherbarbershop1',
    tiktok: 'https://www.tiktok.com/@another.barbershop1',
  },
  hours: {
    weekdays: '10:00 - 20:00',
    saturday: '10:00 - 18:00',
    sunday: 'Closed',
  },
  bookingUrl: 'https://mero.ro/p/another-barbershop',
  coordinates: {
    lat: 44.4378,
    lng: 26.0946,
  },
}

export const navItems = [
  { key: 'about', label: 'About', href: '#about' },
  { key: 'services', label: 'Services', href: '#services' },
  { key: 'team', label: 'Team', href: '#team' },
  { key: 'gallery', label: 'Gallery', href: '#gallery' },
  { key: 'contact', label: 'Contact', href: '#contact' },
]
