import { defineType, defineField } from 'sanity'
import { ComponentIcon } from '@sanity/icons'

export const emirateFooter = defineType({
  name: 'emirateFooter',
  title: 'Footer Configuration',
  type: 'document',
  icon: ComponentIcon,
  fields: [
    defineField({
      name: 'backgroundColor',
      title: 'Footer Background Color',
      type: 'hexColor',
      initialValue: '#000000',
      description: 'Background color of the website footer.',
    }),
    defineField({
      name: 'headingColor',
      title: 'Headings & Titles Color',
      type: 'hexColor',
      initialValue: '#FFFFFF',
      description: 'Color of column headings and card titles in the footer.',
    }),
    defineField({
      name: 'textColor',
      title: 'Description & Body Text Color',
      type: 'hexColor',
      initialValue: '#9CA3AF',
      description: 'Color of brand description and general body text.',
    }),
    defineField({
      name: 'linkColor',
      title: 'Footer Links Color',
      type: 'hexColor',
      initialValue: '#D1D5DB',
      description: 'Color of quick links and core services links.',
    }),
    defineField({
      name: 'copyrightColor',
      title: 'Copyright Notice Color',
      type: 'hexColor',
      initialValue: '#6B7280',
      description: 'Color of the bottom copyright notice text.',
    }),
    defineField({
      name: 'description',
      title: 'Brand Description',
      type: 'text',
      rows: 3,
      initialValue:
        "Dubai's leading corporate advisory and business setup firm. Empowering entrepreneurs and global enterprises to establish and scale across the UAE.",
    }),
    defineField({
      name: 'headOffice',
      title: 'Head Office Location Card',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Card Title',
          type: 'string',
          initialValue: 'Head Office',
        }),
        defineField({
          name: 'unit',
          title: 'Unit & Floor',
          type: 'string',
          initialValue: '2204, 22nd Floor, Iris Bay Tower',
        }),
        defineField({
          name: 'location',
          title: 'City & Country',
          type: 'string',
          initialValue: 'Business Bay, Dubai, United Arab Emirates',
        }),
        defineField({
          name: 'mapsUrl',
          title: 'Google Maps Link',
          type: 'url',
          initialValue:
            'https://www.google.com/maps/search/?api=1&query=Iris+Bay+Tower+Business+Bay+Dubai',
        }),
      ],
    }),
    defineField({
      name: 'phone',
      title: 'Office Phone Number',
      type: 'string',
      initialValue: '+971 50 943 2297',
    }),
    defineField({
      name: 'email',
      title: 'Contact Email Address',
      type: 'string',
      initialValue: 'contact@emiratehub.ae',
    }),
    defineField({
      name: 'workingHours',
      title: 'Working Hours Summary',
      type: 'string',
      initialValue: 'Mon – Fri: 9:00 AM – 6:00 PM',
    }),
    defineField({
      name: 'quickLinks',
      title: 'Quick Navigation Links',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'footerLink',
          title: 'Footer Link',
          fields: [
            defineField({
              name: 'name',
              title: 'Label',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'href',
              title: 'Target URL',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'href',
            },
          },
        },
      ],
    }),
    defineField({
      name: 'coreServices',
      title: 'Core Services Footer Links',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'footerServiceLink',
          title: 'Service Link',
          fields: [
            defineField({
              name: 'name',
              title: 'Label',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'href',
              title: 'Target URL',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'href',
            },
          },
        },
      ],
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Media Profiles',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'socialLinkItem',
          title: 'Social Profile',
          fields: [
            defineField({
              name: 'platform',
              title: 'Platform Name',
              type: 'string',
              options: {
                list: [
                  { title: 'LinkedIn', value: 'linkedin' },
                  { title: 'X (Twitter)', value: 'twitter' },
                  { title: 'Instagram', value: 'instagram' },
                  { title: 'Facebook', value: 'facebook' },
                  { title: 'YouTube', value: 'youtube' },
                ],
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'url',
              title: 'Profile URL',
              type: 'url',
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'platform',
              subtitle: 'url',
            },
          },
        },
      ],
    }),
    defineField({
      name: 'copyrightText',
      title: 'Copyright Notice',
      type: 'string',
      initialValue: '© 2026 Emirate Hub Corporate Services. All rights reserved.',
    }),
  ],
  preview: {
    select: {
      title: 'copyrightText',
    },
    prepare({ title }) {
      return {
        title: 'Footer Configuration',
        subtitle: title || '© Emirate Hub Corporate Services',
      }
    },
  },
})
