import { BarChartIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export const statsBlock = defineType({
  name: 'statsBlock',
  title: 'Key Metrics & Statistics Block',
  type: 'object',
  icon: BarChartIcon,
  fieldsets: [
    {
      name: 'content',
      title: 'Content',
      options: { collapsible: true, collapsed: false },
    },
    {
      name: 'colors',
      title: 'Custom Section Colors (Optional)',
      options: { collapsible: true, collapsed: true },
    },
  ],
  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Eyebrow Badge Text',
      type: 'string',
      fieldset: 'content',
      description: 'Optional small tag line displayed above the heading (e.g. "OUR IMPACT").',
    }),
    defineField({
      name: 'heading',
      title: 'Section Headline',
      type: 'string',
      fieldset: 'content',
    }),
    defineField({
      name: 'description',
      title: 'Section Description',
      type: 'text',
      rows: 2,
      fieldset: 'content',
    }),
    defineField({
      name: 'stats',
      title: 'Statistics Items',
      type: 'array',
      fieldset: 'content',
      validation: (Rule) => Rule.required().min(1).error('At least one stat item is required.'),
      of: [
        defineArrayMember({
          type: 'object',
          name: 'statItem',
          title: 'Stat Item',
          fields: [
            defineField({
              name: 'value',
              title: 'Stat Value / Number',
              type: 'string',
              description: 'e.g. "10k+", "99.9%", "$50M+"',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'label',
              title: 'Stat Label / Metric Name',
              type: 'string',
              description: 'e.g. "Active Clients", "Uptime SLA", "Revenue Generated"',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Optional Context Snippet',
              type: 'string',
              description: 'e.g. "Across 40+ countries worldwide"',
            }),
            defineField({
              name: 'valueColor',
              title: 'Stat Value Highlight Color',
              type: 'hexColor',
            }),
          ],
          preview: {
            select: {
              title: 'value',
              subtitle: 'label',
            },
            prepare({ title, subtitle }) {
              return {
                title: title || 'No value',
                subtitle: subtitle || 'No label',
              }
            },
          },
        }),
      ],
    }),

    // --- COLOR OVERRIDES ---
    defineField({
      name: 'sectionBgColor',
      title: 'Section Background Color',
      type: 'hexColor',
      fieldset: 'colors',
    }),
    defineField({
      name: 'cardBgColor',
      title: 'Stat Card Background Color',
      type: 'hexColor',
      fieldset: 'colors',
    }),
    defineField({
      name: 'cardBorderColor',
      title: 'Stat Card Border Color',
      type: 'hexColor',
      fieldset: 'colors',
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      stats: 'stats',
    },
    prepare({ title, stats }) {
      const count = Array.isArray(stats) ? stats.length : 0
      return {
        title: `Stats: ${title || 'Untitled Section'}`,
        subtitle: `${count} metric item${count === 1 ? '' : 's'}`,
      }
    },
  },
})
