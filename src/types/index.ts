export interface Service {
  id: string
  price: number
  currency: 'RON'
  duration?: number
}

export interface TeamMember {
  id: string
  name: string
  roleKey: 'founder' | 'senior' | 'barber'
  yearsExperience: number
  image: string | null
  bookingUrl: string
}

export interface GalleryImage {
  id: string
  src: string
  alt: string
  category: 'haircut' | 'beard' | 'atmosphere'
}

export interface SiteConfig {
  name: string
  tagline: string
  address: {
    street: string
    city: string
    postalCode: string
    country: string
  }
  phone: string
  whatsapp: string
  social: {
    instagram?: string
    tiktok?: string
  }
  hours: {
    weekdays: string
    saturday: string
    sunday: string
  }
  bookingUrl: string
  coordinates: {
    lat: number
    lng: number
  }
}

export interface NavItem {
  key: string
  label: string
  href: string
}
