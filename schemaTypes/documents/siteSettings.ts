import { ControlsIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings & Brand Info',
  type: 'document',
  icon: ControlsIcon,
  fieldsets: [
    {
      name: 'branding',
      title: '1. Brand Identity & Logo',
      options: { collapsible: true, collapsed: false },
    },
    {
      name: 'seo',
      title: '2. Global SEO & Metadata',
      options: { collapsible: true, collapsed: false },
    },
    {
      name: 'contact',
      title: '3. Organization & Support Contact',
      options: { collapsible: true, collapsed: false },
    },
    {
      name: 'colors',
      title: '4. Quick Brand Colors',
      options: { collapsible: true, collapsed: false },
    },
  ],
  fields: [
    // --- 1. BRAND IDENTITY ---
    defineField({
      name: 'companyName',
      title: 'Company / Brand Name',
      type: 'string',
      fieldset: 'branding',
      initialValue: 'Emirate Hub',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'companyTagline',
      title: 'Brand Subtitle / Tagline',
      type: 'string',
      fieldset: 'branding',
      initialValue: 'Business Consultancy',
    }),
    defineField({
      name: 'logoIcon',
      title: 'Lucide Brand Icon Name',
      type: 'string',
      fieldset: 'branding',
      description: 'e.g. "Briefcase", "Shield", "Zap", "Globe"',
      initialValue: 'Briefcase',
    }),
    defineField({
      name: 'logoImage',
      title: 'Brand Logo Graphic Asset',
      type: 'imageWithAlt',
      fieldset: 'branding',
    }),
    defineField({
      name: 'favicon',
      title: 'Favicon Asset',
      type: 'image',
      fieldset: 'branding',
    }),

    // --- 2. SEO & METADATA ---
    defineField({
      name: 'siteTitle',
      title: 'Global Website Title',
      type: 'string',
      fieldset: 'seo',
      initialValue: 'Emirate Hub CRM • Executive Business Consultancy Admin Portal',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'siteUrl',
      title: 'Canonical Website Domain URL',
      type: 'url',
      fieldset: 'seo',
      description:
        'Primary domain URL used for canonical links and sitemap generation (e.g. https://yourdomain.com).',
    }),
    defineField({
      name: 'siteDescription',
      title: 'Default Meta Description',
      type: 'text',
      rows: 3,
      fieldset: 'seo',
      initialValue:
        'Enterprise CRM and advisory management platform for Emirate Hub Business Consultancy.',
    }),
    defineField({
      name: 'defaultOgImage',
      title: 'Default Social Share Image (Open Graph)',
      type: 'imageWithAlt',
      fieldset: 'seo',
    }),
    defineField({
      name: 'disallowedPaths',
      title: 'Search Bot Disallowed Paths (robots.txt)',
      type: 'array',
      fieldset: 'seo',
      of: [defineArrayMember({ type: 'string' })],
      description:
        'Paths search engine crawlers should ignore (e.g. "/studio", "/api/", "/admin/").',
      initialValue: ['/studio', '/api/'],
    }),

    // --- 3. ORGANIZATION CONTACT ---
    defineField({
      name: 'supportEmail',
      title: 'Support / Admin Email',
      type: 'string',
      fieldset: 'contact',
      initialValue: 'admin@emirate.com',
    }),
    defineField({
      name: 'supportPhone',
      title: 'Support Phone Number',
      type: 'string',
      fieldset: 'contact',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Platform Profiles',
      type: 'array',
      fieldset: 'contact',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'socialPlatform',
          fields: [
            defineField({
              name: 'platform',
              title: 'Platform Name',
              type: 'string',
              description: 'e.g. Twitter/X, LinkedIn, GitHub, Instagram',
            }),
            defineField({
              name: 'url',
              title: 'Profile URL',
              type: 'url',
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
      ],
    }),

    // --- 4. BRAND COLORS ---
    defineField({
      name: 'primaryBrandColor',
      title: 'Primary Brand Color',
      type: 'hexColor',
      fieldset: 'colors',
      initialValue: '#0284C7',
    }),
    defineField({
      name: 'secondaryBrandColor',
      title: 'Secondary Brand Color',
      type: 'hexColor',
      fieldset: 'colors',
      initialValue: '#38BDF8',
    }),
    defineField({
      name: 'accentBrandColor',
      title: 'Accent Highlight Color',
      type: 'hexColor',
      fieldset: 'colors',
      initialValue: '#F59E0B',
    }),
  ],
  preview: {
    select: {
      title: 'companyName',
      subtitle: 'companyTagline',
    },
    prepare({ title, subtitle }) {
      return {
        title: title || 'Global Site Settings',
        subtitle: subtitle || 'Brand identity, SEO & support settings',
      }
    },
  },
})
