import { defineType, defineField } from 'sanity'
import { CaseIcon } from '@sanity/icons'

export const emirateServicesSeo = defineType({
  name: 'emirateServicesSeo',
  title: 'Services Page SEO',
  type: 'document',
  icon: CaseIcon,
  fieldsets: [
    {
      name: 'searchMeta',
      title: '1. Search Engine Snippet (Google Search)',
      options: { collapsible: true, collapsed: false },
    },
    {
      name: 'socialMeta',
      title: '2. Social Share Previews (Open Graph & X/Twitter)',
      options: { collapsible: true, collapsed: false },
    },
    {
      name: 'indexing',
      title: '3. Indexing & Canonical Directives',
      options: { collapsible: true, collapsed: false },
    },
  ],
  fields: [
    defineField({
      name: 'pageName',
      title: 'Page Name',
      type: 'string',
      readOnly: true,
      initialValue: 'Services Overview Page (/services)',
    }),
    defineField({
      name: 'route',
      title: 'Page Route',
      type: 'string',
      readOnly: true,
      initialValue: '/services',
    }),

    // --- 1. SEARCH ENGINE SNIPPET ---
    defineField({
      name: 'seoTitle',
      title: 'SEO Title (Search Results & Browser Tab)',
      type: 'string',
      fieldset: 'searchMeta',
      description: 'Optimal length: 50-60 characters.',
      initialValue: 'Corporate Services & Solutions | Emirate Hub Dubai',
      validation: (Rule) => Rule.required().max(70),
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      fieldset: 'searchMeta',
      description: 'Optimal length: 120-160 characters.',
      initialValue:
        'Explore end-to-end corporate solutions by Emirate Hub: mainland & freezone company formation, visa processing, PRO government relations, banking, and office rentals.',
      validation: (Rule) => Rule.required().max(160),
    }),
    defineField({
      name: 'keywords',
      title: 'Search Keywords / Topic Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
      fieldset: 'searchMeta',
      initialValue: [
        'Mainland License Dubai',
        'Freezone Business Setup',
        'UAE Visa Services',
        'PRO Services Dubai',
        'Corporate Bank Account Opening',
        'Dubai Office Rentals',
        'Company Formation Services',
        'Emirate Hub Services',
      ],
    }),

    // --- 2. SOCIAL SHARE PREVIEWS ---
    defineField({
      name: 'ogTitle',
      title: 'Open Graph Title (Social Media)',
      type: 'string',
      fieldset: 'socialMeta',
      initialValue: 'Corporate Services & Business Setup Solutions | Emirate Hub Dubai',
    }),
    defineField({
      name: 'ogDescription',
      title: 'Open Graph Description',
      type: 'text',
      rows: 2,
      fieldset: 'socialMeta',
      initialValue:
        'Comprehensive business incorporation, immigration, corporate tax, PRO clearing, and commercial office rentals across Dubai and the UAE.',
    }),
    defineField({
      name: 'ogImage',
      title: 'Social Share Image (1200×630 recommended)',
      type: 'image',
      options: { hotspot: true },
      fieldset: 'socialMeta',
      description: 'Featured visual when this page is shared on LinkedIn, WhatsApp, Facebook, or X.',
    }),
    defineField({
      name: 'ogImageAlt',
      title: 'Social Image Alt Text',
      type: 'string',
      fieldset: 'socialMeta',
      initialValue: 'Emirate Hub Corporate Business Setup Services in Dubai',
    }),
    defineField({
      name: 'ogType',
      title: 'Open Graph Type',
      type: 'string',
      fieldset: 'socialMeta',
      initialValue: 'website',
      readOnly: true,
    }),
    defineField({
      name: 'twitterCardType',
      title: 'Twitter / X Card Type',
      type: 'string',
      fieldset: 'socialMeta',
      options: {
        list: [
          { title: 'Large Image (summary_large_image)', value: 'summary_large_image' },
          { title: 'Compact (summary)', value: 'summary' },
        ],
      },
      initialValue: 'summary_large_image',
    }),

    // --- 3. INDEXING & CANONICAL ---
    defineField({
      name: 'canonicalUrl',
      title: 'Canonical URL',
      type: 'url',
      fieldset: 'indexing',
      initialValue: 'https://emiratehub.ae/services',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'noIndex',
      title: 'Block from Search Engines (noindex)',
      type: 'boolean',
      fieldset: 'indexing',
      description: 'Set to true only if you want search engines to ignore this page.',
      initialValue: false,
    }),
    defineField({
      name: 'noFollow',
      title: 'Do Not Follow Links (nofollow)',
      type: 'boolean',
      fieldset: 'indexing',
      initialValue: false,
    }),
    defineField({
      name: 'jsonLdType',
      title: 'Schema.org Type',
      type: 'string',
      fieldset: 'indexing',
      initialValue: 'WebPage',
      readOnly: true,
    }),
  ],
  preview: {
    select: {
      title: 'seoTitle',
      subtitle: 'canonicalUrl',
    },
    prepare({ title, subtitle }) {
      return {
        title: title || 'Services Page SEO',
        subtitle: subtitle || 'https://emiratehub.ae/services',
      }
    },
  },
})
