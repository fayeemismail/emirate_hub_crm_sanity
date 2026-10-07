import { defineType, defineField } from 'sanity'
import { InfoOutlineIcon } from '@sanity/icons'

export const emirateAboutSeo = defineType({
  name: 'emirateAboutSeo',
  title: 'About Us Page SEO',
  type: 'document',
  icon: InfoOutlineIcon,
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
      initialValue: 'About Us Page (/about)',
    }),
    defineField({
      name: 'route',
      title: 'Page Route',
      type: 'string',
      readOnly: true,
      initialValue: '/about',
    }),

    // --- 1. SEARCH ENGINE SNIPPET ---
    defineField({
      name: 'seoTitle',
      title: 'SEO Title (Search Results & Browser Tab)',
      type: 'string',
      fieldset: 'searchMeta',
      initialValue: 'About Us | Emirate Hub Corporate Advisory Dubai',
      validation: (Rule) => Rule.required().max(70),
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      fieldset: 'searchMeta',
      initialValue:
        'Meet the team of corporate strategists and legal advisors at Emirate Hub in Business Bay, Dubai. Learn our story, mission, and commitment to business growth.',
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
        'About Emirate Hub',
        'Corporate Advisory Team Dubai',
        'Business Consultants Business Bay',
        'Company Formation Experts',
        'Dubai Corporate Strategists',
      ],
    }),

    // --- 2. SOCIAL SHARE PREVIEWS ---
    defineField({
      name: 'ogTitle',
      title: 'Open Graph Title (Social Media)',
      type: 'string',
      fieldset: 'socialMeta',
      initialValue: 'About Emirate Hub | Corporate Advisory & Company Setup Specialists',
    }),
    defineField({
      name: 'ogDescription',
      title: 'Open Graph Description',
      type: 'text',
      rows: 2,
      fieldset: 'socialMeta',
      initialValue:
        'Dedicated business advisors, legal strategists, and corporate builders empowering entrepreneurs to grow across Dubai and the UAE.',
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
      initialValue: 'Emirate Hub Corporate Advisory Team in Business Bay Dubai',
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
      initialValue: 'https://emiratehub.ae/about',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'noIndex',
      title: 'Block from Search Engines (noindex)',
      type: 'boolean',
      fieldset: 'indexing',
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
      initialValue: 'Organization',
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
        title: title || 'About Us Page SEO',
        subtitle: subtitle || 'https://emiratehub.ae/about',
      }
    },
  },
})
