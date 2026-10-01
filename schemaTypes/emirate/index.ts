import { type SchemaTypeDefinition } from 'sanity'

// Home Page Schemas
import { emirateHomeHero } from './home/emirateHomeHero'
import { emirateHomePricing } from './home/emirateHomePricing'
import { emirateHomeServices } from './home/emirateHomeServices'
import { emirateHomeContact } from './home/emirateHomeContact'
import { emirateHomeTestimonials } from './home/emirateHomeTestimonials'
import { emirateHomeBlogSection } from './home/emirateHomeBlogSection'
import { emirateHomeFaq } from './home/emirateHomeFaq'

// About Page Schemas
import { emirateAboutHero } from './about/emirateAboutHero'
import { emirateAboutVision } from './about/emirateAboutVision'
import { emirateAboutLocation } from './about/emirateAboutLocation'

// Blog Schemas
import { emirateBlogPost } from './blog/emirateBlogPost'
import { emirateBlogHero } from './blog/emirateBlogHero'
import { emirateBlogSettings } from './blog/emirateBlogSettings'

// Services Schemas
import { emirateCorporateService } from './services/emirateCorporateService'
import { emirateServicesHero } from './services/emirateServicesHero'
import { emirateAdditionalServicesSection } from './services/emirateAdditionalServicesSection'
import { emirateServicesFaq } from './services/emirateServicesFaq'
import { emirateServicesCta } from './services/emirateServicesCta'

// Common & Global Site Schemas
import { emirateNavbar } from './common/emirateNavbar'
import { emirateFooter } from './common/emirateFooter'
import { emirateContactConfig } from './common/emirateContactConfig'

export const emirateSchemas: SchemaTypeDefinition[] = [
  // Home
  emirateHomeHero,
  emirateHomePricing,
  emirateHomeServices,
  emirateHomeContact,
  emirateHomeTestimonials,
  emirateHomeBlogSection,
  emirateHomeFaq,

  // About
  emirateAboutHero,
  emirateAboutVision,
  emirateAboutLocation,

  // Blog
  emirateBlogPost,
  emirateBlogHero,
  emirateBlogSettings,

  // Services
  emirateCorporateService,
  emirateServicesHero,
  emirateAdditionalServicesSection,
  emirateServicesFaq,
  emirateServicesCta,

  // Common
  emirateNavbar,
  emirateFooter,
  emirateContactConfig,
]

export {
  emirateHomeHero,
  emirateHomePricing,
  emirateHomeServices,
  emirateHomeContact,
  emirateHomeTestimonials,
  emirateHomeBlogSection,
  emirateHomeFaq,
  emirateAboutHero,
  emirateAboutVision,
  emirateAboutLocation,
  emirateBlogPost,
  emirateBlogHero,
  emirateBlogSettings,
  emirateCorporateService,
  emirateServicesHero,
  emirateAdditionalServicesSection,
  emirateServicesFaq,
  emirateServicesCta,
  emirateNavbar,
  emirateFooter,
  emirateContactConfig,
}
