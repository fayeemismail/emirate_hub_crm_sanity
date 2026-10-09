import { defineType, defineField } from 'sanity'
import { ComponentIcon } from '@sanity/icons'

export const emirateFooter = defineType({
  name: 'emirateFooter',
  title: 'Footer Configuration',
  type: 'document',
  icon: ComponentIcon,
  fields: [
    defineField({
      name: 'logo',
      title: 'Footer Logo',
      type: 'image',
      options: { hotspot: true },
      description:
        'Logo shown in the footer brand column. Transparent PNG or SVG recommended. If not uploaded, defaults to /images/logo.png.',
    }),
    defineField({
      name: 'logoAlt',
      title: 'Logo Alt Text',
      type: 'string',
      initialValue: 'Emirate Hub',
      description: 'Alternative text for the footer logo for accessibility and SEO.',
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Footer Background Color',
      type: 'hexColor',
      initialValue: '#E2E8F0',
      description: 'Background color of the website footer.',
    }),
    defineField({
      name: 'columnTitleColor',
      title: 'Column Titles Color (Quick Links, Core Services, etc.)',
      type: 'hexColor',
      initialValue: '#E02126',
      description:
        'Accent color for column headings like Quick Links, Core Services, and Working Hours (defaults to #E02126).',
    }),
    defineField({
      name: 'headingColor',
      title: 'Headings & Card Titles Color',
      type: 'hexColor',
      initialValue: '#000000',
      description: 'Color of card titles (e.g. Head Office) and section subheadings in the footer.',
    }),
    defineField({
      name: 'textColor',
      title: 'Description & Body Text Color',
      type: 'hexColor',
      initialValue: '#141414',
      description:
        'Color of brand description, office address, working hours, and general body text.',
    }),
    defineField({
      name: 'linkColor',
      title: 'Footer Links Color',
      type: 'hexColor',
      initialValue: '#000000',
      description: 'Color of quick links, core services links, and legal links.',
    }),
    defineField({
      name: 'contactTextColor',
      title: 'Direct Contact (Phone & Email) Text Color',
      type: 'hexColor',
      initialValue: '#000000',
      description:
        'Text color of the direct phone number and email address located under the office card.',
    }),
    defineField({
      name: 'contactIconColor',
      title: 'Direct Contact (Phone & Email) Icon Color',
      type: 'hexColor',
      initialValue: '#000000',
      description: 'Color of the phone and email icons beside the direct contact details.',
    }),
    defineField({
      name: 'officeCardBg',
      title: 'Office Location Card Background Color',
      type: 'hexColor',
      initialValue: '#E2E8F0',
      description:
        'Optional custom background color for the head office location card (e.g. #FFFFFF or dark tint).',
    }),
    defineField({
      name: 'officeCardBorder',
      title: 'Office Location Card Border Color',
      type: 'hexColor',
      description: 'Optional custom border color for the head office location card.',
    }),
    defineField({
      name: 'copyrightColor',
      title: 'Copyright Notice Color',
      type: 'hexColor',
      initialValue: '#000000',
      description: 'Color of the bottom copyright notice text.',
    }),
    defineField({
      name: 'socialIconColor',
      title: 'Social Icons & Label Color',
      type: 'hexColor',
      initialValue: '#000000',
      description: 'Color of social media icons and the "Connect with us" label at the bottom.',
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
      media: 'logo',
    },
    prepare({ title, media }) {
      return {
        title: 'Footer Configuration',
        subtitle: title || '© Emirate Hub Corporate Services',
        media,
      }
    },
  },
})
