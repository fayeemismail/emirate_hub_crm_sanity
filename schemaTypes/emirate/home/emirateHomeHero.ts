import { SparklesIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const emirateHomeHero = defineType({
  name: 'emirateHomeHero',
  title: 'Home: Hero Section',
  type: 'document',
  icon: SparklesIcon,
  fields: [
    defineField({
      name: 'active',
      title: 'Section Active',
      type: 'boolean',
      initialValue: true,
      description: 'Toggle visibility of the home hero section.',
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Section Background Color',
      type: 'hexColor',
      initialValue: '#000000',
      description: 'Section background color behind the panorama canvas.',
    }),
    defineField({
      name: 'headingColor',
      title: 'Heading Text Color',
      type: 'hexColor',
      initialValue: '#FFFFFF',
      description: 'Color of the main hero heading text.',
    }),
    defineField({
      name: 'highlightColor',
      title: 'Highlighted Keyword Color',
      type: 'hexColor',
      initialValue: '#E02126',
      description: 'Color of the bold/highlighted search keywords.',
    }),
    defineField({
      name: 'subheadingColor',
      title: 'Subheading Text Color',
      type: 'hexColor',
      initialValue: '#FFFFFF',
      description: 'Color of the hero subheading text.',
    }),
    defineField({
      name: 'descriptionColor',
      title: 'Description Text Color',
      type: 'hexColor',
      initialValue: '#D1D5DB',
      description: 'Color of the supporting description paragraph.',
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Primary Panorama Background Image',
      type: 'image',
      options: { hotspot: true },
      description: 'High-resolution panorama image for the interactive rotating hero background.',
    }),
    defineField({
      name: 'backgroundImages',
      title: 'Additional Panorama Loop Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      description: 'Sequential panorama stills (Marina, Abu Dhabi, Creek) used for seamless looping.',
    }),
    defineField({
      name: 'heading',
      title: 'Hero Heading Structure',
      type: 'object',
      fields: [
        defineField({
          name: 'prefix',
          title: 'Heading Prefix',
          type: 'string',
          initialValue: 'Your',
        }),
        defineField({
          name: 'boldKeyword',
          title: 'Bold Keyword (Italicized/Highlighted)',
          type: 'string',
          initialValue: 'Search',
        }),
        defineField({
          name: 'middle',
          title: 'Middle Text',
          type: 'string',
          initialValue: 'for the right',
        }),
        defineField({
          name: 'highlightedText',
          title: 'Highlighted Keyword Text',
          type: 'string',
          initialValue: 'UAE business license',
        }),
        defineField({
          name: 'suffix',
          title: 'Heading Suffix',
          type: 'string',
          initialValue: ' ends here.',
        }),
      ],
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'string',
      initialValue: 'Get the most cost-effective mainland or free zone setup with a partner you can trust.',
    }),
    defineField({
      name: 'description',
      title: 'Hero Description',
      type: 'text',
      rows: 3,
      initialValue:
        'We deliver comprehensive, end-to-end solutions spanning business setup, licensing, visa processing, compliance, and corporate service equipping you to establish, expand, and maintain a thriving business in the UAE.',
    }),
    defineField({
      name: 'buttonText',
      title: 'CTA Button Text',
      type: 'string',
      initialValue: 'REQUEST INFORMATION',
    }),
    defineField({
      name: 'buttonHref',
      title: 'CTA Button Target URL',
      type: 'string',
      initialValue: '/#contact-us',
    }),
  ],
  preview: {
    select: {
      title: 'heading.highlightedText',
      subtitle: 'subheading',
      media: 'backgroundImage',
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || 'Home: Hero Section',
        subtitle: subtitle || 'Emirate Hub Home Hero Panorama',
        media,
      }
    },
  },
})
