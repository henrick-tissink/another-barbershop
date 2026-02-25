import type { Service } from '@/types'

export const services: Service[] = [
  // THE ESSENTIALS - quick decision services
  {
    id: 'trim',
    price: 50,
    currency: 'RON',
    duration: 15,
    tier: 'essentials',
  },
  {
    id: 'styling',
    price: 40,
    currency: 'RON',
    duration: 10,
    tier: 'essentials',
  },
  {
    id: 'beard',
    price: 50,
    currency: 'RON',
    duration: 30,
    tier: 'essentials',
  },
  {
    id: 'haircut',
    price: 95,
    currency: 'RON',
    duration: 35,
    tier: 'essentials',
  },

  // THE EXPERIENCE - premium combos
  {
    id: 'hair-and-beard',
    price: 130,
    currency: 'RON',
    duration: 60,
    tier: 'experience',
  },
  {
    id: 'medium-long-hair-beard',
    price: 145,
    currency: 'RON',
    duration: 60,
    tier: 'experience',
  },
  {
    id: 'medium-long-haircut',
    price: 120,
    currency: 'RON',
    duration: 60,
    tier: 'experience',
  },
  {
    id: 'beard-trim',
    price: 90,
    currency: 'RON',
    duration: 40,
    tier: 'experience',
  },
]

export const bookingUrl = 'https://mero.ro/p/another-barbershop'
