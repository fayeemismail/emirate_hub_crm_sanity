import { defineType, defineField } from 'sanity'
import { AddIcon } from '@sanity/icons'

export const emirateAdditionalServicesSection = defineType({
  name: 'emirateAdditionalServicesSection',
  title: 'Services: Additional Support Services',
  type: 'document',
  icon: AddIcon,
  fields: [
    defineField({
      name: 'active',
      title: 'Section Active',
      type: 'boolean',
      initialValue: true,
      description: 'Toggle visibility of the additional services section.',
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Section Background Color',
      type: 'hexColor',
      initialValue: '#000000',
      description: 'Background color of the additional services section.',
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
      description: 'Color of the highlighted title keyword.',
    }),
    defineField({
      name: 'descriptionColor',
      title: 'Description Text Color',
      type: 'hexColor',
      initialValue: '#9CA3AF',
      description: 'Color of the supporting description paragraph.',
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
          initialValue: 'ADDITIONAL SUPPORT SERVICES',
        }),
        defineField({
          name: 'titlePrefix',
          title: 'Title Prefix',
          type: 'string',
          initialValue: 'Value-Added Corporate Solutions for',
        }),
        defineField({
          name: 'highlightedTitle',
          title: 'Highlighted Title',
          type: 'string',
          initialValue: 'Seamless UAE Operations',
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 3,
          initialValue:
            'Complement your core business setup with our suite of specialized administrative, legal, and operational support services tailored for businesses across Dubai and the UAE.',
        }),
      ],
    }),
    defineField({
      name: 'services',
      title: 'Additional Services Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'additionalServiceCard',
          title: 'Additional Service Card',
          fields: [
            defineField({
              name: 'id',
              title: 'Service ID / Anchor',
              type: 'string',
              description: 'e.g. trademark-ip-registration, tax-readiness',
            }),
            defineField({
              name: 'number',
              title: 'Display Number',
              type: 'string',
              description: 'e.g. 01, 02',
            }),
            defineField({
              name: 'badge',
              title: 'Category Badge',
              type: 'string',
              description: 'e.g. LEGAL PROTECTION, TAX & COMPLIANCE, DOCUMENTATION',
            }),
            defineField({
              name: 'title',
              title: 'Service Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 3,
            }),
            defineField({
              name: 'featuresHeading',
              title: 'Features Heading',
              type: 'string',
              initialValue: 'Key Highlights:',
            }),
            defineField({
              name: 'features',
              title: 'Key Feature Points',
              type: 'array',
              of: [{ type: 'string' }],
            }),
            defineField({
              name: 'buttonText',
              title: 'Button Text',
              type: 'string',
              initialValue: 'ENQUIRE SERVICE',
            }),
            defineField({
              name: 'buttonHref',
              title: 'Button URL',
              type: 'string',
              initialValue: '/#contact-us',
            }),
          ],
          preview: {
            select: {
              number: 'number',
              title: 'title',
              badge: 'badge',
            },
            prepare({ number, title, badge }) {
              return {
                title: `${number ? `[${number}] ` : ''}${title || 'Additional Service'}`,
                subtitle: badge,
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
        title: 'Services: Additional Support Services',
        subtitle: `${subtitle || 'Support Services'} — ${title || 'Seamless UAE Operations'}`,
      }
    },
  },
})
