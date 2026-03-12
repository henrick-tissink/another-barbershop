export type ServiceTier = 'essentials' | 'experience'

export interface Service {
  id: string
  price: number
  currency: 'RON'
  duration?: number
  tier: ServiceTier
}

export interface TeamMember {
  id: string
  name: string
  roleKey: 'founder' | 'senior' | 'barber'
  yearsExperience: number
  image: string | null
  bookingUrl: string
}

export type GalleryCategory = 'interior' | 'details' | 'atmosphere' | 'personality';

export interface GalleryImage {
  id: string;
  src: string;
  altKey: string;           // Translation key for i18n
  category: GalleryCategory;
  width: number;            // Required for CLS prevention
  height: number;           // Required for CLS prevention
  featured?: boolean;
  priority?: boolean;       // For above-fold images
}

export interface Video {
  id: string
  src: string
  poster: string
  titleKey: string
  descriptionKey: string
  duration: number
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
