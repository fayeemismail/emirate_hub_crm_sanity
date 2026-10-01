import { defineType, defineField } from 'sanity'
import { HelpCircleIcon } from '@sanity/icons'

export const emirateHomeFaq = defineType({
  name: 'emirateHomeFaq',
  title: 'Home: FAQ Section',
  type: 'document',
  icon: HelpCircleIcon,
  fields: [
    defineField({
      name: 'active',
      title: 'Section Active',
      type: 'boolean',
      initialValue: true,
      description: 'Toggle visibility of the FAQ section on the home page.',
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Section Background Color',
      type: 'hexColor',
      initialValue: '#F2F3EE',
      description: 'Background color of the FAQ section.',
    }),
    defineField({
      name: 'titleColor',
      title: 'Main Title Color',
      type: 'hexColor',
      initialValue: '#E02126',
      description: 'Color of the FAQ heading.',
    }),
    defineField({
      name: 'subtitleColor',
      title: 'Subtitle Text Color',
      type: 'hexColor',
      initialValue: '#111827',
      description: 'Color of the subtitle text ("Questions ? Look here.").',
    }),
    defineField({
      name: 'questionColor',
      title: 'Accordion Question Color',
      type: 'hexColor',
      initialValue: '#111827',
      description: 'Color of the question text inside accordion items.',
    }),
    defineField({
      name: 'answerColor',
      title: 'Accordion Answer Color',
      type: 'hexColor',
      initialValue: '#4B5563',
      description: 'Color of the expandable answer text.',
    }),
    defineField({
      name: 'title',
      title: 'Main Title',
      type: 'string',
      initialValue: 'FAQ',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      initialValue: 'Questions ? Look here.',
    }),
    defineField({
      name: 'image',
      title: 'Feature Image',
      type: 'image',
      options: { hotspot: true },
      description: 'Consultation specialist photo displayed next to FAQ items.',
    }),
    defineField({
      name: 'faqs',
      title: 'FAQ Accordion Items',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'homeFaqItem',
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
              title: 'Answer',
              type: 'text',
              rows: 3,
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'question',
              subtitle: 'answer',
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      media: 'image',
    },
    prepare({ title, subtitle, media }) {
      return {
        title: 'Home: FAQ Section',
        subtitle: `${title || 'FAQ'} — ${subtitle || ''}`.trim(),
        media,
      }
    },
  },
})
