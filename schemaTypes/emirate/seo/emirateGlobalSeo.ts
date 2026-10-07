import { defineType, defineField } from 'sanity'
import { EarthGlobeIcon } from '@sanity/icons'

export const emirateGlobalSeo = defineType({
  name: 'emirateGlobalSeo',
  title: 'Global SEO, Analytics & Tracking',
  type: 'document',
  icon: EarthGlobeIcon,
  fieldsets: [
    {
      name: 'siteIdentity',
      title: '1. Site Identity & Canonical Defaults',
      options: { collapsible: true, collapsed: false },
    },
    {
      name: 'defaultMeta',
      title: '2. Default Meta & Social Sharing',
      options: { collapsible: true, collapsed: false },
    },
    {
      name: 'organization',
      title: '3. Organization Structured Data (Knowledge Graph)',
      options: { collapsible: true, collapsed: false },
    },
    {
      name: 'googleAnalytics',
      title: '4. Google Analytics (GA4)',
      options: { collapsible: true, collapsed: false },
    },
    {
      name: 'googleTagManager',
      title: '5. Google Tag Manager (GTM)',
      options: { collapsible: true, collapsed: false },
    },
    {
      name: 'crawling',
      title: '6. Crawling & Robots Directives',
      options: { collapsible: true, collapsed: false },
    },
  ],
  fields: [
    // --- 1. SITE IDENTITY & CANONICAL DEFAULTS ---
    defineField({
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
      fieldset: 'siteIdentity',
      description: 'Primary public brand name.',
      initialValue: 'Emirate Hub',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'siteUrl',
      title: 'Official Website Domain URL',
      type: 'url',
      fieldset: 'siteIdentity',
      description: 'Canonical base domain URL for all canonical tags and sitemaps.',
      initialValue: 'https://emiratehub.ae',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'titleSeparator',
      title: 'Title Separator Symbol',
      type: 'string',
      fieldset: 'siteIdentity',
      description: 'Separator character used between page title and brand name (e.g. "|" or "•").',
      initialValue: '|',
    }),
    defineField({
      name: 'locale',
      title: 'Default Language & Locale',
      type: 'string',
      fieldset: 'siteIdentity',
      description: 'BCP-47 language tag for HTML and Open Graph.',
      initialValue: 'en_AE',
    }),

    // --- 2. DEFAULT META & SOCIAL SHARING ---
    defineField({
      name: 'defaultSeoTitle',
      title: 'Default SEO Title',
      type: 'string',
      fieldset: 'defaultMeta',
      description: 'Fallback browser title when a page does not specify its own title.',
      initialValue: 'Emirate Hub | Business Setup & Company Formation Dubai',
      validation: (Rule) => Rule.required().max(70),
    }),
    defineField({
      name: 'defaultMetaDescription',
      title: 'Default Meta Description',
      type: 'text',
      rows: 3,
      fieldset: 'defaultMeta',
      description: 'Fallback description snippet for search engine listings.',
      initialValue:
        'Emirate Hub provides executive corporate advisory, UAE mainland and freezone company formation, trade licensing, investor visas, and corporate banking in Dubai.',
      validation: (Rule) => Rule.required().max(160),
    }),
    defineField({
      name: 'defaultKeywords',
      title: 'Default Site Keywords',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
      fieldset: 'defaultMeta',
      description: 'Broad search keywords characterizing the core business operations.',
      initialValue: [
        'Emirate Hub',
        'Business Setup Dubai',
        'Company Formation UAE',
        'Corporate Advisory Dubai',
        'Trade License UAE',
        'Mainland Business Setup',
        'Free Zone License',
        'Investor Visa Dubai',
      ],
    }),
    defineField({
      name: 'defaultOgImage',
      title: 'Default Social Share Image (1200×630)',
      type: 'image',
      options: { hotspot: true },
      fieldset: 'defaultMeta',
      description: 'Default 1.91:1 banner shown when sharing links on WhatsApp, LinkedIn, X, and Facebook.',
    }),
    defineField({
      name: 'defaultOgImageAlt',
      title: 'Default Social Image Alt Text',
      type: 'string',
      fieldset: 'defaultMeta',
      initialValue: 'Emirate Hub Corporate Business Setup in Dubai UAE',
    }),
    defineField({
      name: 'twitterCardType',
      title: 'Twitter / X Card Format',
      type: 'string',
      fieldset: 'defaultMeta',
      options: {
        list: [
          { title: 'Large Image Summary (summary_large_image)', value: 'summary_large_image' },
          { title: 'Compact Summary (summary)', value: 'summary' },
        ],
      },
      initialValue: 'summary_large_image',
    }),

    // --- 3. ORGANIZATION STRUCTURED DATA ---
    defineField({
      name: 'organizationName',
      title: 'Legal Organization Name',
      type: 'string',
      fieldset: 'organization',
      initialValue: 'Emirate Hub Corporate Services',
    }),
    defineField({
      name: 'organizationDescription',
      title: 'Organization Description (Knowledge Graph)',
      type: 'text',
      rows: 3,
      fieldset: 'organization',
      initialValue:
        'Emirate Hub is a premier UAE business setup and corporate advisory firm headquartered in Business Bay, Dubai. The firm specializes in mainland and free zone company incorporation, trade licensing, residency visas, banking support, and statutory compliance.',
    }),
    defineField({
      name: 'organizationLogo',
      title: 'Organization Logo Asset',
      type: 'image',
      fieldset: 'organization',
      description: 'High-resolution brand logo asset for Google Knowledge Graph and schema.org.',
    }),
    defineField({
      name: 'addressStreet',
      title: 'Headquarters Street Address',
      type: 'string',
      fieldset: 'organization',
      initialValue: 'Unit 2204, 22nd Floor, Iris Bay Tower',
    }),
    defineField({
      name: 'addressLocality',
      title: 'City & District',
      type: 'string',
      fieldset: 'organization',
      initialValue: 'Business Bay, Dubai',
    }),
    defineField({
      name: 'addressCountry',
      title: 'Country',
      type: 'string',
      fieldset: 'organization',
      initialValue: 'United Arab Emirates',
    }),
    defineField({
      name: 'supportPhone',
      title: 'Official Advisory Hotline',
      type: 'string',
      fieldset: 'organization',
      initialValue: '+971 50 943 2297',
    }),
    defineField({
      name: 'supportEmail',
      title: 'Inquiries Email Address',
      type: 'string',
      fieldset: 'organization',
      initialValue: 'contact@emiratehub.ae',
    }),
    defineField({
      name: 'workingHours',
      title: 'Consultation Operating Hours',
      type: 'string',
      fieldset: 'organization',
      initialValue: 'Mon – Fri: 9:00 AM – 6:00 PM; Saturday: 10:00 AM – 3:00 PM; Sunday: Closed',
    }),
    defineField({
      name: 'googleMapsUrl',
      title: 'Headquarters Google Maps URL',
      type: 'url',
      fieldset: 'organization',
      initialValue: 'https://www.google.com/maps/search/?api=1&query=Iris+Bay+Tower+Business+Bay+Dubai',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Verified Social Profiles',
      type: 'array',
      fieldset: 'organization',
      of: [
        {
          type: 'object',
          name: 'socialItem',
          fields: [
            defineField({ name: 'platform', title: 'Platform Name', type: 'string' }),
            defineField({ name: 'url', title: 'Profile URL', type: 'url' }),
          ],
        },
      ],
      initialValue: [
        { platform: 'LinkedIn', url: 'https://www.linkedin.com/company/emiratehub' },
        { platform: 'Instagram', url: 'https://www.instagram.com/emiratehub' },
        { platform: 'X (Twitter)', url: 'https://x.com/emiratehub' },
        { platform: 'Facebook', url: 'https://www.facebook.com/emiratehub' },
      ],
    }),

    // --- 4. GOOGLE ANALYTICS (GA4) ---
    defineField({
      name: 'gaEnabled',
      title: 'Enable Google Analytics (GA4)',
      type: 'boolean',
      fieldset: 'googleAnalytics',
      description: 'Master toggle to activate Google Analytics 4 tracking on the public website.',
      initialValue: false,
    }),
    defineField({
      name: 'gaMeasurementId',
      title: 'GA4 Measurement ID',
      type: 'string',
      fieldset: 'googleAnalytics',
      description: 'Your Google Analytics 4 Measurement ID (e.g. G-XXXXXXXXXX). Kept inactive until ready.',
      initialValue: '',
      placeholder: 'G-XXXXXXXXXX',
    }),
    defineField({
      name: 'gaAnonymizeIp',
      title: 'Anonymize IP Addresses',
      type: 'boolean',
      fieldset: 'googleAnalytics',
      description: 'Privacy-safe tracking that masks visitor IP addresses.',
      initialValue: true,
    }),

    // --- 5. GOOGLE TAG MANAGER (GTM) ---
    defineField({
      name: 'gtmEnabled',
      title: 'Enable Google Tag Manager (GTM)',
      type: 'boolean',
      fieldset: 'googleTagManager',
      description: 'Master toggle to activate Google Tag Manager script injection.',
      initialValue: false,
    }),
    defineField({
      name: 'gtmContainerId',
      title: 'GTM Container ID',
      type: 'string',
      fieldset: 'googleTagManager',
      description: 'Your Google Tag Manager Container ID (e.g. GTM-XXXXXXX). Kept inactive until ready.',
      initialValue: '',
      placeholder: 'GTM-XXXXXXX',
    }),

    // --- 6. CRAWLING & ROBOTS ---
    defineField({
      name: 'disallowedPaths',
      title: 'Robots.txt Disallowed Paths',
      type: 'array',
      of: [{ type: 'string' }],
      fieldset: 'crawling',
      description: 'Paths search engine crawlers should not index.',
      initialValue: ['/studio', '/api/', '/coming-soon'],
    }),
  ],
  preview: {
    select: {
      title: 'siteName',
      subtitle: 'siteUrl',
    },
    prepare({ title, subtitle }) {
      return {
        title: title || 'Global SEO & Analytics',
        subtitle: subtitle || 'https://emiratehub.ae',
      }
    },
  },
})
