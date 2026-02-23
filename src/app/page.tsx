import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { TeamSection } from '@/components/sections/TeamSection'
import { GallerySection } from '@/components/sections/GallerySection'
import { ContactSection } from '@/components/sections/ContactSection'
import { siteConfig } from '@/data/siteConfig'
import { services } from '@/data/services'

// JSON-LD Schema for Local Business SEO
function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BarberShop',
    '@id': 'https://anotherbarbershop.ro/#barbershop',
    name: siteConfig.name,
    description:
      'Premium barbershop in București offering expert haircuts, beard trims, and grooming services.',
    url: 'https://anotherbarbershop.ro',
    telephone: siteConfig.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      postalCode: siteConfig.address.postalCode,
      addressCountry: 'RO',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.coordinates.lat,
      longitude: siteConfig.coordinates.lng,
    },
    image: 'https://anotherbarbershop.ro/images/og-image.jpg',
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '10:00',
        closes: '20:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '10:00',
        closes: '18:00',
      },
    ],
    sameAs: [siteConfig.social.instagram].filter(Boolean),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Barbershop Services',
      itemListElement: services.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.name,
          description: service.description,
        },
        price: service.price,
        priceCurrency: 'RON',
      })),
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default function HomePage() {
  return (
    <>
      <LocalBusinessSchema />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TeamSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
