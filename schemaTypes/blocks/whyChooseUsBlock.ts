import { CheckmarkCircleIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export const whyChooseUsBlock = defineType({
  name: 'whyChooseUsBlock',
  title: 'Why Choose Us / Value Proposition Block',
  type: 'object',
  icon: CheckmarkCircleIcon,
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
      description: 'Optional small tag line (e.g. "WHY CHOOSE US").',
    }),
    defineField({
      name: 'heading',
      title: 'Section Headline',
      type: 'string',
      fieldset: 'content',
      description: 'Optional section title (e.g. "Engineered for Modern Enterprise Growth").',
    }),
    defineField({
      name: 'description',
      title: 'Section Description',
      type: 'text',
      rows: 2,
      fieldset: 'content',
    }),
    defineField({
      name: 'ctas',
      title: 'Call to Action Buttons',
      type: 'array',
      fieldset: 'content',
      of: [defineArrayMember({ type: 'cta' })],
      description: 'Optional section action buttons.',
    }),
    defineField({
      name: 'items',
      title: 'Value Proposition Items / Feature Graphics',
      type: 'array',
      fieldset: 'content',
      validation: (Rule) => Rule.required().min(1).error('At least one item is required.'),
      of: [
        defineArrayMember({
          type: 'object',
          name: 'valuePropItem',
          title: 'Value Prop / Feature Item',
          fields: [
            defineField({
              name: 'title',
              title: 'Item Title',
              type: 'string',
              description: 'Optional title (e.g. "99.99% Uptime Guarantee").',
            }),
            defineField({
              name: 'description',
              title: 'Item Description',
              type: 'text',
              rows: 2,
              description: 'Optional detail snippet.',
            }),
            defineField({
              name: 'icon',
              title: 'Lucide Icon Key',
              type: 'string',
              description: 'Optional Lucide icon key (e.g. "Zap", "ShieldCheck", "Clock").',
            }),
            defineField({
              name: 'iconColor',
              title: 'Icon Color',
              type: 'hexColor',
            }),
            defineField({
              name: 'iconBgColor',
              title: 'Icon Background Color',
              type: 'hexColor',
            }),
            defineField({
              name: 'image',
              title: 'Item Graphic / Illustration',
              type: 'imageWithAlt',
              description: 'Optional feature graphic, illustration, or photo.',
            }),
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'description',
              media: 'image.asset',
            },
            prepare({ title, subtitle, media }) {
              return {
                title: title || 'Untitled Item',
                subtitle: subtitle || 'Value Proposition Item',
                media,
              }
            },
          },
        }),
      ],
    }),

    // --- COLOR OVERRIDES ---
    defineField({
      name: 'sectionBgColor',
      title: 'Section Background Color',
      type: 'hexColor',
      fieldset: 'colors',
    }),
    defineField({
      name: 'cardBgColor',
      title: 'Card Background Color',
      type: 'hexColor',
      fieldset: 'colors',
    }),
    defineField({
      name: 'cardBorderColor',
      title: 'Card Border Color',
      type: 'hexColor',
      fieldset: 'colors',
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      items: 'items',
    },
    prepare({ title, items }) {
      const count = Array.isArray(items) ? items.length : 0
      return {
        title: `Why Choose Us: ${title || 'Untitled Section'}`,
        subtitle: `${count} item${count === 1 ? '' : 's'}`,
      }
    },
  },
})
