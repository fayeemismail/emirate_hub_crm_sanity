import { HelpCircleIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export const faqBlock = defineType({
  name: 'faqBlock',
  title: 'FAQ Accordion Section Block',
  type: 'object',
  icon: HelpCircleIcon,
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
      description: 'Optional small tagline (e.g. "FREQUENTLY ASKED QUESTIONS").',
    }),
    defineField({
      name: 'heading',
      title: 'Section Headline',
      type: 'string',
      fieldset: 'content',
      validation: (Rule) => Rule.required().error('FAQ headline is required.'),
    }),
    defineField({
      name: 'description',
      title: 'Section Description',
      type: 'text',
      rows: 2,
      fieldset: 'content',
    }),
    defineField({
      name: 'items',
      title: 'FAQ Question & Answer Items',
      type: 'array',
      fieldset: 'content',
      validation: (Rule) => Rule.required().min(1).error('At least one FAQ item is required.'),
      of: [
        defineArrayMember({
          type: 'object',
          name: 'faqItem',
          title: 'FAQ Item',
          fields: [
            defineField({
              name: 'question',
              title: 'Question',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'answer',
              title: 'Detailed Answer',
              type: 'richText',
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'question',
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
      title: 'Accordion Item Background Color',
      type: 'hexColor',
      fieldset: 'colors',
    }),
    defineField({
      name: 'cardBorderColor',
      title: 'Accordion Item Border Color',
      type: 'hexColor',
      fieldset: 'colors',
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      items: 'items',
    },
    prepare({ title, items }) {
      const count = Array.isArray(items) ? items.length : 0
      return {
        title: `FAQ: ${title || 'Untitled Section'}`,
        subtitle: `${count} question${count === 1 ? '' : 's'}`,
      }
    },
  },
})
