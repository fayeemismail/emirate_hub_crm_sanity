import { defineType, defineField } from 'sanity'
import { SparklesIcon } from '@sanity/icons'

export const emirateServicesHero = defineType({
  name: 'emirateServicesHero',
  title: 'Services: Hero Section',
  type: 'document',
  icon: SparklesIcon,
  fields: [
    defineField({
      name: 'active',
      title: 'Section Active',
      type: 'boolean',
      initialValue: true,
      description: 'Toggle visibility of the services hero header.',
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Section Background Color',
      type: 'hexColor',
      initialValue: '#000000',
      description: 'Background color of the services hero section.',
    }),
    defineField({
      name: 'titleColor',
      title: 'Title Text Color',
      type: 'hexColor',
      initialValue: '#FFFFFF',
      description: 'Color of the services hero main title text.',
    }),
    defineField({
      name: 'highlightColor',
      title: 'Highlighted Title Color',
      type: 'hexColor',
      initialValue: '#E02126',
      description: 'Color of the highlighted text ("UAE Business Growth").',
    }),
    defineField({
      name: 'subheadingColor',
      title: 'Subheading Text Color',
      type: 'hexColor',
      initialValue: '#FFFFFF',
      description: 'Color of the hero subheading paragraph.',
    }),
    defineField({
      name: 'descriptionColor',
      title: 'Description Text Color',
      type: 'hexColor',
      initialValue: '#D1D5DB',
      description: 'Color of the extended narrative description text.',
    }),
    defineField({
      name: 'buttonBackgroundColor',
      title: 'CTA Button Background Color',
      type: 'hexColor',
      initialValue: '#E02126',
      description: 'Color of the CTA button background.',
    }),
    defineField({
      name: 'buttonTextColor',
      title: 'CTA Button Text Color',
      type: 'hexColor',
      initialValue: '#FFFFFF',
      description: 'Color of the CTA button text.',
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Background Hero Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'breadcrumb',
      title: 'Breadcrumb Navigation',
      type: 'object',
      fields: [
        defineField({
          name: 'parentLabel',
          title: 'Parent Label',
          type: 'string',
          initialValue: 'Home',
        }),
        defineField({
          name: 'parentHref',
          title: 'Parent URL',
          type: 'string',
          initialValue: '/',
        }),
        defineField({
          name: 'label',
          title: 'Current Page Label',
          type: 'string',
          initialValue: 'Services',
        }),
      ],
    }),
    defineField({
      name: 'title',
      title: 'Title Prefix',
      type: 'string',
      initialValue: 'Comprehensive Corporate Services for ',
    }),
    defineField({
      name: 'highlightedTitle',
      title: 'Highlighted Title',
      type: 'string',
      initialValue: 'UAE Business Growth',
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'string',
      initialValue: 'Our Expertise & Solutions Tailored for Your Enterprise.',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      initialValue:
        'From company formation and lifetime visas to corporate tax compliance, office rentals, bank account opening, and digital branding — Emirate Hub delivers turnkey solutions to establish, scale, and manage your enterprise effortlessly.',
    }),
    defineField({
      name: 'buttonText',
      title: 'CTA Button Text',
      type: 'string',
      initialValue: 'CONNECT WITH AN EXPERT',
    }),
    defineField({
      name: 'buttonHref',
      title: 'CTA Button URL',
      type: 'string',
      initialValue: '/#contact-us',
    }),
  ],
  preview: {
    select: {
      title: 'highlightedTitle',
      subtitle: 'title',
      media: 'backgroundImage',
    },
    prepare({ title, subtitle, media }) {
      return {
        title: 'Services: Hero Section',
        subtitle: `${subtitle || 'Services for'} ${title || 'UAE Business Growth'}`,
        media,
      }
    },
  },
})
