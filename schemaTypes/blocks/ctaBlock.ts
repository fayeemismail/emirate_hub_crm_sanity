import { RocketIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export const ctaBlock = defineType({
  name: 'ctaBlock',
  title: 'Call-to-Action Banner Block',
  type: 'object',
  icon: RocketIcon,
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
      name: 'eyebrow',
      title: 'Eyebrow Badge Text',
      type: 'string',
      fieldset: 'content',
      description: 'Optional small tagline displayed above headline.',
    }),
    defineField({
      name: 'heading',
      title: 'Banner Headline',
      type: 'string',
      fieldset: 'content',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Paragraph Text',
      type: 'text',
      rows: 2,
      fieldset: 'content',
    }),
    defineField({
      name: 'ctas',
      title: 'Action Buttons',
      type: 'array',
      fieldset: 'content',
      of: [defineArrayMember({ type: 'cta' })],
      validation: (Rule) => Rule.max(3).warning('Recommended maximum 2-3 buttons.'),
    }),

    // --- COLOR OVERRIDES ---
    defineField({
      name: 'bannerBgStart',
      title: 'Banner Background Gradient Start',
      type: 'hexColor',
      fieldset: 'colors',
    }),
    defineField({
      name: 'bannerBgEnd',
      title: 'Banner Background Gradient End',
      type: 'hexColor',
      fieldset: 'colors',
    }),
    defineField({
      name: 'bannerBorderColor',
      title: 'Banner Border Color',
      type: 'hexColor',
      fieldset: 'colors',
    }),
    defineField({
      name: 'headingColor',
      title: 'Headline Color',
      type: 'hexColor',
      fieldset: 'colors',
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      subtitle: 'eyebrow',
    },
    prepare({ title, subtitle }) {
      return {
        title: `CTA Banner: ${title || 'Untitled'}`,
        subtitle: subtitle ? `Badge: ${subtitle}` : 'CTA Banner Section',
      }
    },
  },
})
