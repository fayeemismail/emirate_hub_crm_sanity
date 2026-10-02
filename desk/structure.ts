import {
  SparklesIcon,
  TagIcon,
  BillIcon,
  CogIcon,
  UsersIcon,
  CommentIcon,
  DocumentTextIcon,
  HelpCircleIcon,
  InfoOutlineIcon,
  PinIcon,
  RocketIcon,
  MenuIcon,
  ComponentIcon,
  ControlsIcon,
} from '@sanity/icons'
import { StructureResolver } from 'sanity/structure'

// Define document types that should act as singletons
const singletonTypes = new Set([
  // Emirate Hub Public Website Singletons
  'emirateHomeHero',
  'emirateHomePricing',
  'emirateHomeServices',
  'emirateHomeContact',
  'emirateHomeTestimonials',
  'emirateHomeBlogSection',
  'emirateHomeFaq',
  'emirateAboutHero',
  'emirateAboutVision',
  'emirateAboutLocation',
  'emirateBlogHero',
  'emirateBlogSettings',
  'emirateServicesHero',
  'emirateAdditionalServicesSection',
  'emirateServicesFaq',
  'emirateServicesCta',
  'emirateNavbar',
  'emirateFooter',
  'emirateContactConfig',
])

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Website & CRM Studio')
    .items([
      // ============================================
      // 1. Emirate Hub Public Website
      // ============================================
      S.listItem()
        .title('Emirate Hub Public Website')
        .icon(SparklesIcon)
        .child(
          S.list()
            .title('Emirate Hub Public Website')
            .items([
              // Home Page Group
              S.listItem()
                .title('Home Page Sections')
                .icon(SparklesIcon)
                .child(
                  S.list()
                    .title('Home Page Sections')
                    .items([
                      S.listItem()
                        .title('Hero Panorama Section')
                        .icon(SparklesIcon)
                        .child(S.document().schemaType('emirateHomeHero').documentId('emirateHomeHero')),
                      S.listItem()
                        .title('Pricing Packages')
                        .icon(BillIcon)
                        .child(S.document().schemaType('emirateHomePricing').documentId('emirateHomePricing')),
                      S.listItem()
                        .title('Services Overview')
                        .icon(CogIcon)
                        .child(S.document().schemaType('emirateHomeServices').documentId('emirateHomeServices')),
                      S.listItem()
                        .title('Contact Advisory Section')
                        .icon(UsersIcon)
                        .child(S.document().schemaType('emirateHomeContact').documentId('emirateHomeContact')),
                      S.listItem()
                        .title('Testimonials Constellation')
                        .icon(CommentIcon)
                        .child(S.document().schemaType('emirateHomeTestimonials').documentId('emirateHomeTestimonials')),
                      S.listItem()
                        .title('Blogs & News Feed')
                        .icon(DocumentTextIcon)
                        .child(S.document().schemaType('emirateHomeBlogSection').documentId('emirateHomeBlogSection')),
                      S.listItem()
                        .title('Frequently Asked Questions')
                        .icon(HelpCircleIcon)
                        .child(S.document().schemaType('emirateHomeFaq').documentId('emirateHomeFaq')),
                    ])
                ),

              // About Us Page Group
              S.listItem()
                .title('About Us Page')
                .icon(InfoOutlineIcon)
                .child(
                  S.list()
                    .title('About Us Sections')
                    .items([
                      S.listItem()
                        .title('About Hero & Story')
                        .icon(InfoOutlineIcon)
                        .child(S.document().schemaType('emirateAboutHero').documentId('emirateAboutHero')),
                      S.listItem()
                        .title('Vision & Mission Showcase')
                        .icon(SparklesIcon)
                        .child(S.document().schemaType('emirateAboutVision').documentId('emirateAboutVision')),
                      S.listItem()
                        .title('Office Location & Hours')
                        .icon(PinIcon)
                        .child(S.document().schemaType('emirateAboutLocation').documentId('emirateAboutLocation')),
                    ])
                ),

              // Services Page Group
              S.listItem()
                .title('Services Page & Collection')
                .icon(CogIcon)
                .child(
                  S.list()
                    .title('Services Management')
                    .items([
                      S.listItem()
                        .title('All Corporate Services (Collection)')
                        .icon(CogIcon)
                        .child(S.documentTypeList('emirateCorporateService').title('All Corporate Services')),
                      S.listItem()
                        .title('Services Page Hero')
                        .icon(SparklesIcon)
                        .child(S.document().schemaType('emirateServicesHero').documentId('emirateServicesHero')),
                      S.listItem()
                        .title('Additional Support Services')
                        .icon(CogIcon)
                        .child(S.document().schemaType('emirateAdditionalServicesSection').documentId('emirateAdditionalServicesSection')),
                      S.listItem()
                        .title('Services FAQ & Advisory Desk')
                        .icon(HelpCircleIcon)
                        .child(S.document().schemaType('emirateServicesFaq').documentId('emirateServicesFaq')),
                      S.listItem()
                        .title('Bottom Call to Action Banner')
                        .icon(RocketIcon)
                        .child(S.document().schemaType('emirateServicesCta').documentId('emirateServicesCta')),
                    ])
                ),

              // Blog Page Group
              S.listItem()
                .title('Blog & Articles')
                .icon(DocumentTextIcon)
                .child(
                  S.list()
                    .title('Blog Management')
                    .items([
                      S.listItem()
                        .title('All Blog Posts (Collection)')
                        .icon(DocumentTextIcon)
                        .child(S.documentTypeList('emirateBlogPost').title('All Blog Articles')),
                      S.listItem()
                        .title('Blog Listing Hero')
                        .icon(SparklesIcon)
                        .child(S.document().schemaType('emirateBlogHero').documentId('emirateBlogHero')),
                      S.listItem()
                        .title('Blog Display Order & Settings')
                        .icon(TagIcon)
                        .child(S.document().schemaType('emirateBlogSettings').documentId('emirateBlogSettings')),
                    ])
                ),

              // Common / Header & Footer Group
              S.listItem()
                .title('Header, Footer & Inquiries')
                .icon(MenuIcon)
                .child(
                  S.list()
                    .title('Common Website Configuration')
                    .items([
                      S.listItem()
                        .title('Navbar & Direct Chat')
                        .icon(MenuIcon)
                        .child(S.document().schemaType('emirateNavbar').documentId('emirateNavbar')),
                      S.listItem()
                        .title('Footer & Office Contacts')
                        .icon(ComponentIcon)
                        .child(S.document().schemaType('emirateFooter').documentId('emirateFooter')),
                      S.listItem()
                        .title('Contact Form Options')
                        .icon(ControlsIcon)
                        .child(S.document().schemaType('emirateContactConfig').documentId('emirateContactConfig')),
                    ])
                ),
            ])
        ),

      S.divider(),

      // ============================================
      // 2. CRM Pipeline Stages
      // ============================================
      S.listItem()
        .title('CRM Pipeline Stages')
        .icon(TagIcon)
        .child(S.documentTypeList('leadStatus').title('All Pipeline Stages')),
    ])

