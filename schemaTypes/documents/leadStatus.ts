import { TagIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const leadStatus = defineType({
  name: 'leadStatus',
  title: 'CRM Lead Status',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Status Display Name',
      type: 'string',
      description:
        'Human-readable title for the pipeline stage (e.g. "Pending", "In Progress", "Resolved", "Archived").',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Status Slug',
      type: 'slug',
      description:
        'Unique lowercased identifier used in CRM Backend (e.g. "pending", "in-progress", "resolved", "archived").',
      options: {
        source: 'title',
        maxLength: 50,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Pipeline Order Index',
      type: 'number',
      description: 'Numeric sorting position for Kanban board columns (e.g., 10, 20, 30, 40).',
      initialValue: 0,
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'color',
      title: 'Badge Accent Color (HEX)',
      type: 'hexColor',
      description: 'Primary accent color for stage badge / column indicator.',
      initialValue: '#38BDF8',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'bgColor',
      title: 'Badge / Column Background Color (HEX)',
      type: 'hexColor',
      description: 'Background color for Kanban column headers and inquiry status badges.',
      initialValue: '#0284C726',
    }),
    defineField({
      name: 'borderColor',
      title: 'Badge / Column Border Color (HEX)',
      type: 'hexColor',
      description: 'Border outline color for status badge & Kanban column header.',
      initialValue: '#38BDF84D',
    }),
    defineField({
      name: 'textColor',
      title: 'Badge Text Color (HEX)',
      type: 'hexColor',
      description: 'Color of status text inside badge.',
      initialValue: '#FFFFFF',
    }),
    defineField({
      name: 'description',
      title: 'Stage Description',
      type: 'text',
      rows: 2,
      description: 'Internal documentation explaining when a lead transitions to this stage.',
    }),
    defineField({
      name: 'isDefault',
      title: 'Default Initial Stage',
      type: 'boolean',
      description:
        'If enabled, newly submitted public leads automatically start in this pipeline stage.',
      initialValue: false,
    }),
    defineField({
      name: 'isActive',
      title: 'Is Active Pipeline Stage',
      type: 'boolean',
      description: 'Whether this status stage is enabled in the active CRM pipeline.',
      initialValue: true,
    }),
  ],
  orderings: [
    {
      title: 'Pipeline Order (Ascending)',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug.current',
      order: 'order',
      isActive: 'isActive',
      isDefault: 'isDefault',
    },
    prepare({ title, slug, order, isActive, isDefault }) {
      const defaultTag = isDefault ? ' [DEFAULT]' : ''
      const inactiveTag = isActive === false ? ' [INACTIVE]' : ''
      return {
        title: `${title}${defaultTag}${inactiveTag}`,
        subtitle: `Slug: ${slug} | Order: ${order}`,
      }
    },
  },
})
