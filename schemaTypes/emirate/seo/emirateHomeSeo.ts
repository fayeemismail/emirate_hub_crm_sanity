import { defineType, defineField } from 'sanity'
import { SparklesIcon } from '@sanity/icons'

export const emirateHomeSeo = defineType({
  name: 'emirateHomeSeo',
  title: 'Home Page SEO',
  type: 'document',
  icon: SparklesIcon,
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
      initialValue: 'Home Page (/)',
    }),
    defineField({
      name: 'route',
      title: 'Page Route',
      type: 'string',
      readOnly: true,
      initialValue: '/',
    }),

    // --- 1. SEARCH ENGINE SNIPPET ---
    defineField({
      name: 'seoTitle',
      title: 'SEO Title (Search Results & Browser Tab)',
      type: 'string',
      fieldset: 'searchMeta',
      description: 'Optimal length: 50-60 characters.',
      initialValue: 'Emirate Hub | Business Setup & Company Formation Dubai, UAE',
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
        'Launch your UAE enterprise with Emirate Hub. Streamlined mainland and free zone company formation, licensing, corporate tax registration, and investor visas.',
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
        'Business Setup Dubai',
        'Company Formation UAE',
        'Trade License Dubai',
        'Mainland Business Setup',
        'Free Zone License',
        'Emirate Hub',
        'Corporate Tax UAE',
        'Investor Visa Dubai',
      ],
    }),

    // --- 2. SOCIAL SHARE PREVIEWS ---
    defineField({
      name: 'ogTitle',
      title: 'Open Graph Title (Social Media)',
      type: 'string',
      fieldset: 'socialMeta',
      initialValue: 'Emirate Hub | Business Setup & Company Formation in Dubai',
    }),
    defineField({
      name: 'ogDescription',
      title: 'Open Graph Description',
      type: 'text',
      rows: 2,
      fieldset: 'socialMeta',
      initialValue:
        'Cost-effective mainland and free zone business setup in Dubai with verified corporate advisors. Commercial licensing, Golden Visas, and banking assistance.',
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
      initialValue: 'Emirate Hub Executive Corporate Advisory and UAE Panorama View',
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
      initialValue: 'https://emiratehub.ae/',
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
        title: title || 'Home Page SEO',
        subtitle: subtitle || 'https://emiratehub.ae/',
      }
    },
  },
})
