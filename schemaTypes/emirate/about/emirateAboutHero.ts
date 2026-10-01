import { defineType, defineField } from 'sanity'
import { InfoOutlineIcon } from '@sanity/icons'

export const emirateAboutHero = defineType({
  name: 'emirateAboutHero',
  title: 'About: Hero Section',
  type: 'document',
  icon: InfoOutlineIcon,
  fields: [
    defineField({
      name: 'active',
      title: 'Section Active',
      type: 'boolean',
      initialValue: true,
      description: 'Toggle visibility of the About hero section.',
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Section Background Color',
      type: 'hexColor',
      initialValue: '#000000',
      description: 'Background color of the About hero section.',
    }),
    defineField({
      name: 'titleColor',
      title: 'Title Text Color',
      type: 'hexColor',
      initialValue: '#FFFFFF',
      description: 'Color of the title heading.',
    }),
    defineField({
      name: 'highlightColor',
      title: 'Highlighted Title Color',
      type: 'hexColor',
      initialValue: '#E02126',
      description: 'Color of the highlighted company name keyword.',
    }),
    defineField({
      name: 'descriptionColor',
      title: 'Description Text Color',
      type: 'hexColor',
      initialValue: '#D1D5DB',
      description: 'Color of the bottom narrative description text.',
    }),
    defineField({
      name: 'cardBackgroundColor',
      title: 'Center Card Background Color',
      type: 'hexColor',
      initialValue: '#18181B',
      description: 'Background color of the floating center team card.',
    }),
    defineField({
      name: 'cardTitleColor',
      title: 'Center Card Title Color',
      type: 'hexColor',
      initialValue: '#FFFFFF',
      description: 'Color of the center team card headline.',
    }),
    defineField({
      name: 'cardTextColor',
      title: 'Center Card Description Color',
      type: 'hexColor',
      initialValue: '#9CA3AF',
      description: 'Color of the center team card body text.',
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
          initialValue: 'About Us',
        }),
      ],
    }),
    defineField({
      name: 'title',
      title: 'Title Prefix',
      type: 'string',
      initialValue: 'About',
    }),
    defineField({
      name: 'highlightedTitle',
      title: 'Highlighted Title',
      type: 'string',
      initialValue: 'EMIRATE HUB',
    }),
    defineField({
      name: 'bottomDescription',
      title: 'Bottom Description',
      type: 'text',
      rows: 3,
      initialValue:
        'Emirate Hub is a team of passionate makers, advisors, and corporate strategists dedicated to building solutions and services that empower businesses to grow in Dubai and across the UAE.',
    }),
    defineField({
      name: 'centerCard',
      title: 'Center Feature Card',
      type: 'object',
      fields: [
        defineField({
          name: 'badgeIcon',
          title: 'Badge Icon Name',
          type: 'string',
          initialValue: 'users',
        }),
        defineField({
          name: 'title',
          title: 'Card Title',
          type: 'string',
          initialValue: 'A Team Committed to Real Impact',
        }),
        defineField({
          name: 'description',
          title: 'Card Description',
          type: 'text',
          rows: 3,
          initialValue:
            "Emirate Hub is built by a diverse team of thinkers, legal strategists, and corporate builders who care deeply about helping businesses grow. With a focus on simplicity, performance, and people, we're creating solutions that truly make a difference.",
        }),
      ],
    }),
    defineField({
      name: 'images',
      title: 'Hero Collage Images',
      type: 'object',
      fields: [
        defineField({
          name: 'topLeft',
          title: 'Top Left Image',
          type: 'image',
          options: { hotspot: true },
          fields: [{ name: 'alt', title: 'Alt Text', type: 'string' }],
        }),
        defineField({
          name: 'bottomLeft',
          title: 'Bottom Left Image',
          type: 'image',
          options: { hotspot: true },
          fields: [{ name: 'alt', title: 'Alt Text', type: 'string' }],
        }),
        defineField({
          name: 'topRight',
          title: 'Top Right Image',
          type: 'image',
          options: { hotspot: true },
          fields: [{ name: 'alt', title: 'Alt Text', type: 'string' }],
        }),
        defineField({
          name: 'bottomRight',
          title: 'Bottom Right Image',
          type: 'image',
          options: { hotspot: true },
          fields: [{ name: 'alt', title: 'Alt Text', type: 'string' }],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'highlightedTitle',
      subtitle: 'title',
    },
    prepare({ title, subtitle }) {
      return {
        title: 'About: Hero Section',
        subtitle: `${subtitle || 'About'} ${title || 'EMIRATE HUB'}`,
      }
    },
  },
})
