import { defineType, defineField } from 'sanity'
import { ControlsIcon } from '@sanity/icons'

export const emirateContactConfig = defineType({
  name: 'emirateContactConfig',
  title: 'Contact Form Configuration',
  type: 'document',
  icon: ControlsIcon,
  fields: [
    defineField({
      name: 'backgroundColor',
      title: 'Form Container Background Color',
      type: 'hexColor',
      initialValue: '#FFFFFF',
      description: 'Background color of the contact form container.',
    }),
    defineField({
      name: 'selectPlaceholder',
      title: 'Service Select Placeholder',
      type: 'string',
      initialValue: 'Select Service',
    }),
    defineField({
      name: 'options',
      title: 'Inquiry Service Options',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'contactServiceOption',
          title: 'Service Option',
          fields: [
            defineField({
              name: 'value',
              title: 'Option Value / ID',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'label',
              title: 'Option Label Display',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'label',
              subtitle: 'value',
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'selectPlaceholder',
    },
    prepare({ title }) {
      return {
        title: 'Contact Form Configuration',
        subtitle: `Placeholder: ${title || 'Select Service'}`,
      }
    },
  },
})
