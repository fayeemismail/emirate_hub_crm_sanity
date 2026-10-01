import { SplitVerticalIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const leadPriority = defineType({
  name: 'leadPriority',
  title: 'Inquiry Priority Level',
  type: 'document',
  icon: SplitVerticalIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Priority Display Name',
      type: 'string',
      description: 'Human-readable priority level name (e.g. "High", "Medium", "Low").',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Priority Slug',
      type: 'slug',
      description: 'Identifier for backend API mapping (e.g. "high", "medium", "low").',
      options: {
        source: 'title',
        maxLength: 30,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Priority Rank (1 = Highest)',
      type: 'number',
      description: 'Rank for sorting cards & inquiries (e.g. 1 for High, 2 for Medium, 3 for Low).',
      initialValue: 1,
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'color',
      title: 'Priority Accent Color',
      type: 'hexColor',
      description: 'Main accent color used for tags, dots, and indicators.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'bgColor',
      title: 'Badge Background Color',
      type: 'hexColor',
      description: 'Background tint for priority badges in table rows and Kanban cards.',
    }),
    defineField({
      name: 'borderColor',
      title: 'Badge Border Color',
      type: 'hexColor',
      description: 'Border outline color for priority badges.',
    }),
    defineField({
      name: 'textColor',
      title: 'Badge Text Color',
      type: 'hexColor',
      description: 'Text color inside the priority badge.',
    }),
    defineField({
      name: 'description',
      title: 'Description & SLA Policy',
      type: 'text',
      rows: 2,
      description: 'Optional guideline (e.g. "Immediate outreach within 2 business hours").',
    }),
  ],
  orderings: [
    {
      title: 'Priority Rank (1 to 3)',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug.current',
      order: 'order',
    },
    prepare({ title, slug, order }) {
      return {
        title: `Priority: ${title || 'Untitled'} (Rank ${order || 1})`,
        subtitle: `Slug: ${slug || ''}`,
      }
    },
  },
})
