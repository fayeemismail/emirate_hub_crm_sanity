import { defineType, defineField } from 'sanity'
import { MenuIcon } from '@sanity/icons'

export const emirateNavbar = defineType({
  name: 'emirateNavbar',
  title: 'Header & Navigation Bar',
  type: 'document',
  icon: MenuIcon,
  fields: [
    defineField({
      name: 'logo',
      title: 'Navbar Logo',
      type: 'image',
      options: { hotspot: true },
      description: 'Logo shown at the top-left of the header. Transparent PNG or SVG recommended.',
    }),
    defineField({
      name: 'logoAlt',
      title: 'Logo Alt Text',
      type: 'string',
      initialValue: 'Emirate Hub',
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Navbar Background Color',
      type: 'hexColor',
      initialValue: '#000000',
      description: 'Background color of the header navbar.',
    }),
    defineField({
      name: 'linkColor',
      title: 'Navigation Links Color',
      type: 'hexColor',
      initialValue: '#FFFFFF',
      description: 'Text color of the navigation menu items.',
    }),
    defineField({
      name: 'phoneColor',
      title: 'Phone Number Color',
      type: 'hexColor',
      initialValue: '#FFFFFF',
      description: 'Color of the top phone number text.',
    }),
    defineField({
      name: 'phone',
      title: 'Contact Phone Number',
      type: 'string',
      initialValue: '+971 50 943 2297',
    }),
    defineField({
      name: 'whatsappUrl',
      title: 'WhatsApp Direct Chat Link',
      type: 'url',
      initialValue: 'https://wa.me/971509432297',
    }),
    defineField({
      name: 'ctaText',
      title: 'CTA Button Text',
      type: 'string',
      initialValue: 'Request Consultation',
    }),
    defineField({
      name: 'ctaHref',
      title: 'CTA Button URL',
      type: 'string',
      initialValue: '/#contact-us',
    }),
    defineField({
      name: 'navLinks',
      title: 'Navigation Menu Links',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'navLinkItem',
          title: 'Link Item',
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
  ],
  preview: {
    select: {
      phone: 'phone',
      media: 'logo',
    },
    prepare({ phone, media }) {
      return {
        title: 'Header & Navigation Bar',
        subtitle: `Phone: ${phone || 'Not set'}`,
        media,
      }
    },
  },
})
