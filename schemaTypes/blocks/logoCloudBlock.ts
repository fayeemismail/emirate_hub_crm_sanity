import { StarIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export const logoCloudBlock = defineType({
  name: 'logoCloudBlock',
  title: 'Client & Partner Logo Cloud Block',
  type: 'object',
  icon: StarIcon,
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
      title: 'Eyebrow Tag',
      type: 'string',
      fieldset: 'content',
      description: 'Optional small label (e.g. "TRUSTED BY 500+ ENTERPRISES").',
    }),
    defineField({
      name: 'heading',
      title: 'Section Headline',
      type: 'string',
      fieldset: 'content',
    }),
    defineField({
      name: 'logos',
      title: 'Client Logos',
      type: 'array',
      fieldset: 'content',
      validation: (Rule) => Rule.required().min(1).error('At least one logo is required.'),
      of: [
        defineArrayMember({
          type: 'object',
          name: 'logoItem',
          title: 'Logo Item',
          fields: [
            defineField({
              name: 'companyName',
              title: 'Company Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'logo',
              title: 'Logo Image',
              type: 'imageWithAlt',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'websiteUrl',
              title: 'Company Website URL (Optional)',
              type: 'url',
            }),
          ],
          preview: {
            select: {
              title: 'companyName',
              media: 'logo.asset',
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
  ],
  preview: {
    select: {
      title: 'heading',
      logos: 'logos',
    },
    prepare({ title, logos }) {
      const count = Array.isArray(logos) ? logos.length : 0
      return {
        title: `Logo Cloud: ${title || 'Untitled Section'}`,
        subtitle: `${count} logo${count === 1 ? '' : 's'}`,
      }
    },
  },
})
