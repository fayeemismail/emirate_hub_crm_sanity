import { CogIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const service = defineType({
  name: 'service',
  title: 'Services Collection',
  type: 'document',
  icon: CogIcon,
  groups: [
    { name: 'content', title: 'Service Details', default: true },
    { name: 'colors', title: 'Card & Icon Colors' },
    { name: 'seo', title: 'SEO & Metadata' },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Service Title',
      type: 'string',
      group: 'content',
      description:
        'e.g. "Web Development", "AI & Automation", "Cloud Infrastructure", "Enterprise Consulting".',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      group: 'content',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Display Order Index',
      type: 'number',
      group: 'content',
      description: 'Sorting index for catalogs and dropdowns (e.g. 1, 2, 3, 4).',
      initialValue: 0,
    }),
    defineField({
      name: 'category',
      title: 'Service Category',
      type: 'string',
      group: 'content',
      description:
        'Category group (e.g. "Consulting", "Engineering", "Design", "Cloud", "Security").',
    }),
    defineField({
      name: 'icon',
      title: 'Lucide Icon Key',
      type: 'string',
      group: 'content',
      description:
        'Name of Lucide React icon (e.g. "Code", "Bot", "Cloud", "Layout", "Briefcase", "Smartphone", "ShieldCheck").',
      initialValue: 'Code',
    }),
    defineField({
      name: 'tagline',
      title: 'Short Summary Tagline',
      type: 'text',
      rows: 2,
      group: 'content',
      description:
        'Brief description displayed on the homepage services grid cards and consultancy catalog.',
      validation: (Rule) => Rule.required().max(250),
    }),
    defineField({
      name: 'coverImage',
      title: 'Service Cover / Thumbnail Image',
      type: 'imageWithAlt',
      group: 'content',
    }),
    defineField({
      name: 'body',
      title: 'Detailed Service Description',
      type: 'richText',
      group: 'content',
    }),
    defineField({
      name: 'formEnabled',
      title: 'Enable in Public Inquiries Form',
      type: 'boolean',
      group: 'content',
      description:
        'Whether this service appears in the contact & inquiry simulator dropdown selection.',
      initialValue: true,
    }),
    defineField({
      name: 'featured',
      title: 'Highlight as Featured Service',
      type: 'boolean',
      group: 'content',
      initialValue: false,
    }),
    defineField({
      name: 'badgeText',
      title: 'Custom Badge Tag',
      type: 'string',
      group: 'content',
      description: 'Optional badge label (e.g. "Active Offering", "Enterprise", "Popular").',
      initialValue: 'Active Offering',
    }),

    // --- COLOR CUSTOMIZATIONS (NO HARD CODING) ---
    defineField({
      name: 'iconColor',
      title: 'Icon Color',
      type: 'hexColor',
      group: 'colors',
      description: 'Color of the service icon graphic.',
      initialValue: '#818CF8',
    }),
    defineField({
      name: 'iconBgColor',
      title: 'Icon Box Background Color',
      type: 'hexColor',
      group: 'colors',
      description: 'Background tint for the icon rounded box.',
      initialValue: '#6366F11F',
    }),
    defineField({
      name: 'badgeTextColor',
      title: 'Badge Text Color',
      type: 'hexColor',
      group: 'colors',
      description: 'Text color of the service badge.',
      initialValue: '#34D399',
    }),
    defineField({
      name: 'badgeBgColor',
      title: 'Badge Background Color',
      type: 'hexColor',
      group: 'colors',
      description: 'Background color of the service badge.',
      initialValue: '#10B9811F',
    }),
    defineField({
      name: 'cardAccentColor',
      title: 'Card Accent Border / Glow Color',
      type: 'hexColor',
      group: 'colors',
      description: 'Custom hover border glow for this specific service card.',
      initialValue: '#38BDF866',
    }),

    defineField({
      name: 'faqs',
      title: 'Service-Specific FAQs',
      type: 'faqBlock',
      group: 'content',
      description: 'Optional FAQ accordion section answering questions specific to this service.',
    }),
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'seo',
      group: 'seo',
    }),
  ],
  orderings: [
    {
      title: 'Order (Ascending)',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'tagline',
      media: 'coverImage.asset',
      featured: 'featured',
    },
    prepare({ title, subtitle, media, featured }) {
      return {
        title: `${title || 'Untitled'}${featured ? ' ⭐ [Featured]' : ''}`,
        subtitle: subtitle || 'Service Item',
        media,
      }
    },
  },
})
