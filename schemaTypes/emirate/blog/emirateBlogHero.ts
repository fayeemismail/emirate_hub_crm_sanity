import { defineType, defineField } from 'sanity'
import { SparklesIcon } from '@sanity/icons'

export const emirateBlogHero = defineType({
  name: 'emirateBlogHero',
  title: 'Blog: Hero Section',
  type: 'document',
  icon: SparklesIcon,
  fields: [
    defineField({
      name: 'active',
      title: 'Section Active',
      type: 'boolean',
      initialValue: true,
      description: 'Toggle visibility of the blog hero header.',
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Section Background Color',
      type: 'hexColor',
      initialValue: '#0A0D14',
      description: 'Background color of the blog hero header.',
    }),
    defineField({
      name: 'titleColor',
      title: 'Title Text Color',
      type: 'hexColor',
      initialValue: '#FFFFFF',
      description: 'Color of the blog hero main title text.',
    }),
    defineField({
      name: 'highlightColor',
      title: 'Highlighted Title Color',
      type: 'hexColor',
      initialValue: '#E02126',
      description: 'Color of the highlighted keyword ("Market Updates").',
    }),
    defineField({
      name: 'subtitleColor',
      title: 'Subtitle Text Color',
      type: 'hexColor',
      initialValue: '#D1D5DB',
      description: 'Color of the authoritative subtitle sentence.',
    }),
    defineField({
      name: 'descriptionColor',
      title: 'Description Text Color',
      type: 'hexColor',
      initialValue: '#9CA3AF',
      description: 'Color of the supporting overview description text.',
    }),
    defineField({
      name: 'breadcrumb',
      title: 'Breadcrumb Navigation',
      type: 'object',
      fields: [
        defineField({
          name: 'parentLabel',
          title: 'Parent Label',
          type: 'string',
          initialValue: 'Home',
        }),
        defineField({
          name: 'parentHref',
          title: 'Parent URL',
          type: 'string',
          initialValue: '/',
        }),
        defineField({
          name: 'label',
          title: 'Current Page Label',
          type: 'string',
          initialValue: 'Blogs & Insights',
        }),
      ],
    }),
    defineField({
      name: 'badge',
      title: 'Section Badge',
      type: 'string',
      initialValue: 'LATEST INSIGHTS & REGULATIONS',
    }),
    defineField({
      name: 'title',
      title: 'Title Prefix',
      type: 'string',
      initialValue: 'UAE Business Insights &',
    }),
    defineField({
      name: 'highlightedTitle',
      title: 'Highlighted Title',
      type: 'string',
      initialValue: 'Market Updates',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      initialValue:
        'Authoritative perspectives on UAE corporate setup, tax strategies, and regulatory compliance.',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      initialValue:
        "Stay informed with actionable advice from Emirate Hub's advisors. Explore in-depth guides on VAT registration, corporate tax reliefs, international expansions, and corporate governance in Dubai.",
    }),
    defineField({
      name: 'stats',
      title: 'Quick Stats Badges',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'statItem',
          title: 'Stat Item',
          fields: [
            defineField({
              name: 'value',
              title: 'Stat Value',
              type: 'string',
              description: 'e.g. 100%, 2026, 3-5 Days',
            }),
            defineField({
              name: 'label',
              title: 'Stat Label',
              type: 'string',
              description: 'e.g. Regulatory Accuracy, Compliance Directives',
            }),
          ],
          preview: {
            select: {
              title: 'value',
              subtitle: 'label',
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'highlightedTitle',
      subtitle: 'badge',
    },
    prepare({ title, subtitle }) {
      return {
        title: 'Blog: Hero Section',
        subtitle: `${subtitle || 'Blogs & Insights'} — ${title || 'Market Updates'}`,
      }
    },
  },
})
