import { defineType, defineField } from 'sanity'
import { HelpCircleIcon } from '@sanity/icons'

export const emirateServicesFaq = defineType({
  name: 'emirateServicesFaq',
  title: 'Services: FAQ Section',
  type: 'document',
  icon: HelpCircleIcon,
  fields: [
    defineField({
      name: 'active',
      title: 'Section Active',
      type: 'boolean',
      initialValue: true,
      description: 'Toggle visibility of the services FAQ section.',
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Section Background Color',
      type: 'hexColor',
      initialValue: '#000000',
      description: 'Background color of the services FAQ section.',
    }),
    defineField({
      name: 'titleColor',
      title: 'Section Title Color',
      type: 'hexColor',
      initialValue: '#FFFFFF',
      description: 'Color of the section title heading.',
    }),
    defineField({
      name: 'highlightColor',
      title: 'Highlighted Title Color',
      type: 'hexColor',
      initialValue: '#E02126',
      description: 'Color of the highlighted text ("UAE Corporate Setup").',
    }),
    defineField({
      name: 'descriptionColor',
      title: 'Description Text Color',
      type: 'hexColor',
      initialValue: '#9CA3AF',
      description: 'Color of the supporting description paragraph.',
    }),
    defineField({
      name: 'questionColor',
      title: 'Question Text Color',
      type: 'hexColor',
      initialValue: '#FFFFFF',
      description: 'Color of the FAQ question accordion trigger.',
    }),
    defineField({
      name: 'answerColor',
      title: 'Answer Text Color',
      type: 'hexColor',
      initialValue: '#D1D5DB',
      description: 'Color of the expandable FAQ answer paragraph.',
    }),
    defineField({
      name: 'sectionHeader',
      title: 'Section Header',
      type: 'object',
      fields: [
        defineField({
          name: 'badge',
          title: 'Badge',
          type: 'string',
          initialValue: 'HELP & ADVISORY DESK',
        }),
        defineField({
          name: 'titlePrefix',
          title: 'Title Prefix',
          type: 'string',
          initialValue: 'Everything You Need to Know About',
        }),
        defineField({
          name: 'highlightedTitle',
          title: 'Highlighted Title',
          type: 'string',
          initialValue: 'UAE Corporate Setup',
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 3,
          initialValue:
            'Have questions before incorporating your enterprise? Browse our curated answers or use the instant search to find solutions tailored to your business.',
        }),
        defineField({
          name: 'searchPlaceholder',
          title: 'Search Box Placeholder',
          type: 'string',
          initialValue:
            'Search questions by topic (e.g. visa, corporate tax, license, banking)...',
        }),
      ],
    }),
    defineField({
      name: 'helpBox',
      title: 'Advisory Help Callout Box',
      type: 'object',
      fields: [
        defineField({
          name: 'active',
          title: 'Help Box Active',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          initialValue: 'Still have specific questions?',
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 2,
          initialValue:
            'Our senior business setup consultants are ready to provide a personalized advisory session tailored to your exact business activities.',
        }),
        defineField({
          name: 'buttonText',
          title: 'Advisory Button Text',
          type: 'string',
          initialValue: 'REQUEST ADVISORY CALL',
        }),
        defineField({
          name: 'buttonHref',
          title: 'Advisory Button URL',
          type: 'string',
          initialValue: '/#contact-us',
        }),
        defineField({
          name: 'whatsappText',
          title: 'WhatsApp Button Text',
          type: 'string',
          initialValue: 'CHAT ON WHATSAPP',
        }),
        defineField({
          name: 'whatsappHref',
          title: 'WhatsApp Link URL',
          type: 'url',
          initialValue: 'https://wa.me/971509432297',
        }),
      ],
    }),
    defineField({
      name: 'items',
      title: 'FAQ Accordion Items',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'serviceFaqItem',
          title: 'FAQ Item',
          fields: [
            defineField({
              name: 'number',
              title: 'Display Number',
              type: 'string',
              description: 'e.g. 01, 02',
            }),
            defineField({
              name: 'category',
              title: 'Category Tag',
              type: 'string',
              description: 'e.g. LICENSING & SETUP, INCORPORATION SPEED, VISA & RESIDENCY',
            }),
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
              number: 'number',
              question: 'question',
              category: 'category',
            },
            prepare({ number, question, category }) {
              return {
                title: `${number ? `[${number}] ` : ''}${question || 'FAQ Item'}`,
                subtitle: category,
              }
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'sectionHeader.highlightedTitle',
      subtitle: 'sectionHeader.badge',
    },
    prepare({ title, subtitle }) {
      return {
        title: 'Services: FAQ Section',
        subtitle: `${subtitle || 'FAQ'} — ${title || 'UAE Corporate Setup'}`,
      }
    },
  },
})
