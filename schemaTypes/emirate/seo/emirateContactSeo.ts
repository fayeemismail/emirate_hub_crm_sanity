import { defineType, defineField } from 'sanity'
import { EnvelopeIcon } from '@sanity/icons'

export const emirateContactSeo = defineType({
  name: 'emirateContactSeo',
  title: 'Contact Section SEO',
  type: 'document',
  icon: EnvelopeIcon,
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
      title: 'Page / Section Name',
      type: 'string',
      readOnly: true,
      initialValue: 'Contact Advisory Section (/#contact-us)',
    }),
    defineField({
      name: 'route',
      title: 'Page Route',
      type: 'string',
      readOnly: true,
      initialValue: '/#contact-us',
    }),

    // --- 1. SEARCH ENGINE SNIPPET ---
    defineField({
      name: 'seoTitle',
      title: 'SEO Title (Search Results & Browser Tab)',
      type: 'string',
      fieldset: 'searchMeta',
      description: 'Optimal length: 50-60 characters.',
      initialValue: 'Contact Our Setup Advisors | Emirate Hub Business Bay Dubai',
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
        'Connect with certified UAE business setup advisors at Emirate Hub. Schedule a 1-on-1 consultation at Iris Bay Tower, Business Bay, Dubai, or send an inquiry online.',
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
        'Contact Emirate Hub',
        'Business Setup Consultation Dubai',
        'Company Formation Experts Iris Bay',
        'UAE Business Advisory Office',
        'Dubai PRO Advisory',
      ],
    }),

    // --- 2. SOCIAL SHARE PREVIEWS ---
    defineField({
      name: 'ogTitle',
      title: 'Open Graph Title (Social Media)',
      type: 'string',
      fieldset: 'socialMeta',
      initialValue: 'Contact Emirate Hub | Certified UAE Business Setup Advisors',
    }),
    defineField({
      name: 'ogDescription',
      title: 'Open Graph Description',
      type: 'text',
      rows: 2,
      fieldset: 'socialMeta',
      initialValue:
        'Get 1-on-1 confidential corporate setup advisory tailored to your business goals. Headquartered in Business Bay, Dubai.',
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
      initialValue: 'Emirate Hub Senior Business Setup Advisors Available Online',
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
      initialValue: 'https://emiratehub.ae/#contact-us',
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
      initialValue: 'ContactPage',
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
        title: title || 'Contact Section SEO',
        subtitle: subtitle || 'https://emiratehub.ae/#contact-us',
      }
    },
  },
})
