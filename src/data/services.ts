import type { Service } from '@/types'

export const services: Service[] = [
  {
    id: 'classic-haircut',
    name: 'The Classic',
    description: 'Consultation, cut, and styling. The full experience.',
    price: 80,
    currency: 'RON',
    duration: 45,
  },
  {
    id: 'beard-trim',
    name: 'Beard Work',
    description: 'Shaping, lining, and conditioning. Sharp and clean.',
    price: 50,
    currency: 'RON',
    duration: 30,
  },
  {
    id: 'full-service',
    name: 'The Works',
    description: 'Haircut and beard trim together. Our most popular choice.',
    price: 120,
    currency: 'RON',
    duration: 60,
  },
  {
    id: 'buzz-cut',
    name: 'Clean Buzz',
    description: 'Precise clipper work. Simple. Done right.',
    price: 50,
    currency: 'RON',
    duration: 20,
  },
  {
    id: 'kids-cut',
    name: 'Junior Cut',
    description: 'For the young gentlemen. Ages 12 and under.',
    price: 60,
    currency: 'RON',
    duration: 30,
  },
  {
    id: 'hot-towel-shave',
    name: 'Hot Towel Shave',
    description: 'Traditional straight razor. A proper experience.',
    price: 70,
    currency: 'RON',
    duration: 45,
  },
]
