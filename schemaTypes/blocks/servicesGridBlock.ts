import { ThLargeIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export const servicesGridBlock = defineType({
  name: 'servicesGridBlock',
  title: 'Services Grid Section Block',
  type: 'object',
  icon: ThLargeIcon,
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
      title: 'Section Tag / Eyebrow',
      type: 'string',
      fieldset: 'content',
      description: 'Optional small tagline displayed above headline.',
    }),
    defineField({
      name: 'heading',
      title: 'Section Title',
      type: 'string',
      fieldset: 'content',
      validation: (Rule) => Rule.required().error('Services section title is required.'),
    }),
    defineField({
      name: 'description',
      title: 'Section Description',
      type: 'text',
      rows: 2,
      fieldset: 'content',
    }),
    defineField({
      name: 'selectionMode',
      title: 'Service Display Mode',
      type: 'string',
      fieldset: 'content',
      options: {
        list: [
          { title: 'Show All Active Services Automatically', value: 'all' },
          { title: 'Select Specific Services Manually', value: 'manual' },
        ],
        layout: 'radio',
      },
      initialValue: 'all',
    }),
    defineField({
      name: 'selectedServices',
      title: 'Selected Services',
      type: 'array',
      fieldset: 'content',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{ type: 'service' }],
        }),
      ],
      hidden: ({ parent }) => parent?.selectionMode !== 'manual',
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
      title: 'Service Card Background Color',
      type: 'hexColor',
      fieldset: 'colors',
    }),
    defineField({
      name: 'cardBorderColor',
      title: 'Service Card Border Color',
      type: 'hexColor',
      fieldset: 'colors',
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      mode: 'selectionMode',
    },
    prepare({ title, mode }) {
      return {
        title: `Services Grid: ${title || 'Untitled'}`,
        subtitle: `Mode: ${mode === 'manual' ? 'Manual Selection' : 'All Active Services'}`,
      }
    },
  },
})
