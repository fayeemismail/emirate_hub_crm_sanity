import { defineType, defineField } from 'sanity'
import { CogIcon } from '@sanity/icons'

export const emirateCorporateService = defineType({
  name: 'emirateCorporateService',
  title: 'Emirate Hub: Corporate Service',
  type: 'document',
  icon: CogIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Service Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug / URL Identifier',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'number',
      title: 'Display Number',
      type: 'string',
      description: 'e.g. 01, 02, 03',
      initialValue: '01',
    }),
    defineField({
      name: 'tag',
      title: 'Service Tag / Category',
      type: 'string',
      description: 'e.g. COMPANY FORMATION, VISA & IMMIGRATION, GOVERNMENT RELATIONS',
    }),
    defineField({
      name: 'serviceType',
      title: 'Service Type Tier',
      type: 'string',
      options: {
        list: [
          { title: 'Main Service (Featured)', value: 'main service' },
          { title: 'Normal Service', value: 'normal service' },
        ],
      },
      initialValue: 'main service',
    }),
    defineField({
      name: 'active',
      title: 'Service Active',
      type: 'boolean',
      initialValue: true,
      description: 'Toggle visibility on the website.',
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Page / Card Background Color',
      type: 'hexColor',
      initialValue: '#000000',
      description: 'Background color for this service detail / card.',
    }),
    defineField({
      name: 'titleColor',
      title: 'Service Title Color',
      type: 'hexColor',
      initialValue: '#FFFFFF',
      description: 'Color of the service headline title.',
    }),
    defineField({
      name: 'tagColor',
      title: 'Service Tag Color',
      type: 'hexColor',
      initialValue: '#E02126',
      description: 'Color of the service category badge / tag.',
    }),
    defineField({
      name: 'descriptionColor',
      title: 'Description Text Color',
      type: 'hexColor',
      initialValue: '#D1D5DB',
      description: 'Color of the service overview description paragraph.',
    }),
    defineField({
      name: 'featuresTextColor',
      title: 'Key Features Text Color',
      type: 'hexColor',
      initialValue: '#F3F4F6',
      description: 'Color of bullet points in the features list.',
    }),
    defineField({
      name: 'image',
      title: 'Service Image',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Overview Description',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'featuresHeading',
      title: 'Features Heading',
      type: 'string',
      initialValue: "What's Included:",
    }),
    defineField({
      name: 'keyFeatures',
      title: 'Key Features / Highlights',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'buttonText',
      title: 'Enquiry Button Text',
      type: 'string',
      initialValue: 'ENQUIRE FOR THIS SERVICE',
    }),
    defineField({
      name: 'buttonHref',
      title: 'Enquiry Button URL',
      type: 'string',
      initialValue: '/#contact-us',
    }),

    // Detailed service view fields (from lib/services.ts)
    defineField({
      name: 'timeline',
      title: 'Turnaround Timeline',
      type: 'string',
      description: 'e.g. 3 - 5 Business Days, 2 - 4 Business Days',
      initialValue: '3 - 5 Business Days',
    }),
    defineField({
      name: 'jurisdiction',
      title: 'Eligible Jurisdiction',
      type: 'string',
      description: 'e.g. Mainland, Free Zone & Offshore',
      initialValue: 'Mainland, Free Zone & Offshore',
    }),
    defineField({
      name: 'steps',
      title: 'Step-by-Step Execution Process',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'processStep',
          title: 'Process Step',
          fields: [
            defineField({
              name: 'step',
              title: 'Step Number',
              type: 'string',
              description: 'e.g. 01, 02, 03',
              initialValue: '01',
            }),
            defineField({
              name: 'title',
              title: 'Step Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Step Description',
              type: 'text',
              rows: 3,
            }),
          ],
          preview: {
            select: {
              step: 'step',
              title: 'title',
            },
            prepare({ step, title }) {
              return {
                title: `${step ? `[${step}] ` : ''}${title || 'Process Step'}`,
              }
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      number: 'number',
      tag: 'tag',
      media: 'image',
    },
    prepare({ title, number, tag, media }) {
      return {
        title: `${number ? `[${number}] ` : ''}${title || 'Corporate Service'}`,
        subtitle: tag,
        media,
      }
    },
  },
})
