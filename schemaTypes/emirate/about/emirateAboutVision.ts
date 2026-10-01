import { defineType, defineField } from 'sanity'
import { EyeOpenIcon } from '@sanity/icons'

export const emirateAboutVision = defineType({
  name: 'emirateAboutVision',
  title: 'About: Vision & Mission',
  type: 'document',
  icon: EyeOpenIcon,
  fields: [
    defineField({
      name: 'active',
      title: 'Section Active',
      type: 'boolean',
      initialValue: true,
      description: 'Toggle visibility of the vision & mission section.',
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Section Background Color',
      type: 'hexColor',
      initialValue: '#000000',
      description: 'Background color of the vision & mission section.',
    }),
    defineField({
      name: 'titleColor',
      title: 'Section Title Color',
      type: 'hexColor',
      initialValue: '#FFFFFF',
      description: 'Color of the section main title.',
    }),
    defineField({
      name: 'subtitleColor',
      title: 'Section Subtitle Color',
      type: 'hexColor',
      initialValue: '#9CA3AF',
      description: 'Color of the section header subtitle.',
    }),
    defineField({
      name: 'cardTitleColor',
      title: 'Purpose & Mission Title Color',
      type: 'hexColor',
      initialValue: '#FFFFFF',
      description: 'Color of the Purpose and Mission headlines.',
    }),
    defineField({
      name: 'cardTextColor',
      title: 'Purpose & Mission Text Color',
      type: 'hexColor',
      initialValue: '#D1D5DB',
      description: 'Color of the Purpose and Mission narrative text.',
    }),
    defineField({
      name: 'header',
      title: 'Section Header',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
          initialValue: 'Our Vision, Your Future',
        }),
        defineField({
          name: 'subtitle',
          title: 'Section Subtitle',
          type: 'text',
          rows: 2,
          initialValue:
            'Creating modern enterprise solutions that inspire sustainable business growth, stronger corporate communities, and lasting value across the UAE.',
        }),
      ],
    }),
    defineField({
      name: 'vision',
      title: 'Vision / Purpose',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Vision Title',
          type: 'string',
          initialValue: 'Our Purpose',
        }),
        defineField({
          name: 'description',
          title: 'Vision Description',
          type: 'text',
          rows: 3,
          initialValue:
            'To become the most trusted corporate setup and business advisory partner for global enterprises, modern founders, and ambitious investors in Dubai and beyond.',
        }),
      ],
    }),
    defineField({
      name: 'mission',
      title: 'Mission',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Mission Title',
          type: 'string',
          initialValue: 'Our Mission',
        }),
        defineField({
          name: 'description',
          title: 'Mission Description',
          type: 'text',
          rows: 3,
          initialValue:
            'Our mission is to deliver comprehensive turnkey corporate solutions and business licenses with complete transparency, uncompromising integrity, and unmatched client satisfaction.',
        }),
      ],
    }),
    defineField({
      name: 'images',
      title: 'Architecture & Skyline Showcase Columns',
      type: 'object',
      fields: [
        defineField({
          name: 'column1',
          title: 'Column 1 Image',
          type: 'image',
          options: { hotspot: true },
          fields: [{ name: 'alt', title: 'Alt Text', type: 'string' }],
        }),
        defineField({
          name: 'column2',
          title: 'Column 2 Image',
          type: 'image',
          options: { hotspot: true },
          fields: [{ name: 'alt', title: 'Alt Text', type: 'string' }],
        }),
        defineField({
          name: 'column3',
          title: 'Column 3 Image',
          type: 'image',
          options: { hotspot: true },
          fields: [{ name: 'alt', title: 'Alt Text', type: 'string' }],
        }),
        defineField({
          name: 'column4',
          title: 'Column 4 Image',
          type: 'image',
          options: { hotspot: true },
          fields: [{ name: 'alt', title: 'Alt Text', type: 'string' }],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'header.title',
      subtitle: 'header.subtitle',
    },
    prepare({ title, subtitle }) {
      return {
        title: 'About: Vision & Mission',
        subtitle: title || subtitle || 'Our Vision, Your Future',
      }
    },
  },
})
