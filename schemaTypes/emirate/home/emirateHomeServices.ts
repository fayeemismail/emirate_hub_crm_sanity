import { defineType, defineField } from 'sanity'
import { CogIcon } from '@sanity/icons'

export const emirateHomeServices = defineType({
  name: 'emirateHomeServices',
  title: 'Home: Services Section',
  type: 'document',
  icon: CogIcon,
  fields: [
    defineField({
      name: 'active',
      title: 'Section Active',
      type: 'boolean',
      initialValue: true,
      description: 'Toggle visibility of the home services section.',
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Section Background Color',
      type: 'hexColor',
      initialValue: '#000000',
      description: 'Background color of the home services section.',
    }),
    defineField({
      name: 'titleColor',
      title: 'Section Title Color',
      type: 'hexColor',
      initialValue: '#FFFFFF',
      description: 'Text color of the section title heading.',
    }),
    defineField({
      name: 'highlightColor',
      title: 'Highlighted Title Color',
      type: 'hexColor',
      initialValue: '#E02126',
      description: 'Color of the highlighted brand name keyword.',
    }),
    defineField({
      name: 'descriptionColor',
      title: 'Description Text Color',
      type: 'hexColor',
      initialValue: '#9CA3AF',
      description: 'Color of the supporting description paragraph.',
    }),
    defineField({
      name: 'badge',
      title: 'Badge',
      type: 'string',
      initialValue: 'SERVICES',
    }),
    defineField({
      name: 'titlePrefix',
      title: 'Title Prefix',
      type: 'string',
      initialValue: 'What ',
    }),
    defineField({
      name: 'highlightedTitle',
      title: 'Highlighted Title',
      type: 'string',
      initialValue: 'Emirate Hub',
    }),
    defineField({
      name: 'titleSuffix',
      title: 'Title Suffix',
      type: 'string',
      initialValue: ' can do for you',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      initialValue:
        'Emirate Hub provides premium standards of business setup solutions for SMEs through our wide network of Professional Partners and Business Communities.',
    }),
    defineField({
      name: 'viewAllButtonText',
      title: 'View All Button Text',
      type: 'string',
      initialValue: 'VIEW ALL SERVICES',
    }),
    defineField({
      name: 'viewAllButtonHref',
      title: 'View All Button Target URL',
      type: 'string',
      initialValue: '/services',
    }),
    defineField({
      name: 'services',
      title: 'Featured Services Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'homeServiceCard',
          title: 'Service Card',
          fields: [
            defineField({
              name: 'slug',
              title: 'Service Slug',
              type: 'string',
              description: 'e.g. business-incorporation, visa-services, pro-government-liaison',
            }),
            defineField({
              name: 'number',
              title: 'Number Display',
              type: 'string',
              description: 'e.g. 01, 02, 03',
            }),
            defineField({
              name: 'tag',
              title: 'Tag / Category',
              type: 'string',
              description: 'e.g. COMPANY FORMATION, VISA & IMMIGRATION',
            }),
            defineField({
              name: 'title',
              title: 'Service Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'cardTitleColor',
              title: 'Card Title Color (Override)',
              type: 'hexColor',
              description: 'Color of this service card title.',
            }),
            defineField({
              name: 'cardTextColor',
              title: 'Card Description Color (Override)',
              type: 'hexColor',
              description: 'Color of this service card description.',
            }),
            defineField({
              name: 'image',
              title: 'Service Image',
              type: 'image',
              options: { hotspot: true },
            }),
            defineField({
              name: 'description',
              title: 'Short Description',
              type: 'text',
              rows: 3,
            }),
            defineField({
              name: 'buttonText',
              title: 'Button Text',
              type: 'string',
              initialValue: 'LEARN MORE',
            }),
            defineField({
              name: 'active',
              title: 'Card Active',
              type: 'boolean',
              initialValue: true,
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
                title: `${number ? `[${number}] ` : ''}${title || 'Service Card'}`,
                subtitle: tag,
                media,
              }
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'highlightedTitle',
    },
    prepare({ title }) {
      return {
        title: 'Home: Services Section',
        subtitle: title || 'Featured Services',
      }
    },
  },
})
