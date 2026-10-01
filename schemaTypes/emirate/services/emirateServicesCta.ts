import { defineType, defineField } from 'sanity'
import { RocketIcon } from '@sanity/icons'

export const emirateServicesCta = defineType({
  name: 'emirateServicesCta',
  title: 'Services: Call to Action Section',
  type: 'document',
  icon: RocketIcon,
  fields: [
    defineField({
      name: 'active',
      title: 'Section Active',
      type: 'boolean',
      initialValue: true,
      description: 'Toggle visibility of the services CTA banner.',
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Section Background Color',
      type: 'hexColor',
      initialValue: '#000000',
      description: 'Background color of the CTA section.',
    }),
    defineField({
      name: 'tagColor',
      title: 'Tagline Badge Color',
      type: 'hexColor',
      initialValue: '#E02126',
      description: 'Color of the uppercase tagline badge.',
    }),
    defineField({
      name: 'titleColor',
      title: 'Headline Title Color',
      type: 'hexColor',
      initialValue: '#FFFFFF',
      description: 'Color of the headline title text.',
    }),
    defineField({
      name: 'descriptionColor',
      title: 'Description Text Color',
      type: 'hexColor',
      initialValue: '#D1D5DB',
      description: 'Color of the supporting description paragraph.',
    }),
    defineField({
      name: 'tag',
      title: 'Tagline Badge',
      type: 'string',
      initialValue: 'START YOUR UAE JOURNEY',
    }),
    defineField({
      name: 'title',
      title: 'Headline Title',
      type: 'string',
      initialValue: 'Ready to Establish & Scale Your Business in Dubai?',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      initialValue:
        'Speak directly with our senior corporate setup consultants for a personalized advisory session tailored to your business activities and growth plans.',
    }),
    defineField({
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      initialValue: 'REQUEST A FREE CONSULTATION',
    }),
    defineField({
      name: 'buttonHref',
      title: 'Button Target URL',
      type: 'string',
      initialValue: '/#contact-us',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'tag',
    },
    prepare({ title, subtitle }) {
      return {
        title: 'Services: Call to Action Section',
        subtitle: `${subtitle || 'CTA'} — ${title || 'Ready to Establish?'}`,
      }
    },
  },
})
