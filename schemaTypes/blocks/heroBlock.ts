import { ImageIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export const heroBlock = defineType({
  name: 'heroBlock',
  title: 'Hero Section Block',
  type: 'object',
  icon: ImageIcon,
  fieldsets: [
    {
      name: 'content',
      title: 'Content',
      options: { collapsible: true, collapsed: false },
    },
    {
      name: 'colors',
      title: 'Custom Section Colors (Optional)',
      options: { collapsible: true, collapsed: true },
    },
  ],
  fields: [
    defineField({
      name: 'badge',
      title: 'Eyebrow Badge Text',
      type: 'string',
      fieldset: 'content',
      description:
        'Small tag or badge displayed above the main heading (e.g., "✨ Introducing New Feature").',
    }),
    defineField({
      name: 'heading',
      title: 'Main Headline',
      type: 'string',
      fieldset: 'content',
      validation: (Rule) => Rule.required().error('Hero headline is required.'),
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading Description',
      type: 'text',
      rows: 3,
      fieldset: 'content',
    }),
    defineField({
      name: 'ctas',
      title: 'Call to Action Buttons',
      type: 'array',
      fieldset: 'content',
      of: [defineArrayMember({ type: 'cta' })],
      validation: (Rule) => Rule.max(3).warning('Recommended maximum 2-3 buttons in Hero.'),
    }),
    defineField({
      name: 'image',
      title: 'Responsive Hero Visual Media',
      type: 'responsiveImage',
      fieldset: 'content',
      description: 'Device-adaptable image set supporting Desktop, Tablet, and Mobile layouts.',
    }),

    // --- COLOR OVERRIDES ---
    defineField({
      name: 'sectionBgColor',
      title: 'Section Background Color',
      type: 'hexColor',
      fieldset: 'colors',
    }),
    defineField({
      name: 'headingColor',
      title: 'Heading Text Color',
      type: 'hexColor',
      fieldset: 'colors',
    }),
    defineField({
      name: 'badgeBgColor',
      title: 'Eyebrow Badge Background',
      type: 'hexColor',
      fieldset: 'colors',
    }),
    defineField({
      name: 'badgeTextColor',
      title: 'Eyebrow Badge Text Color',
      type: 'hexColor',
      fieldset: 'colors',
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      subtitle: 'badge',
      media: 'image.desktop.asset',
    },
    prepare({ title, subtitle, media }) {
      return {
        title: `Hero: ${title || 'Untitled'}`,
        subtitle: subtitle ? `Badge: ${subtitle}` : 'Hero Section',
        media,
      }
    },
  },
})
