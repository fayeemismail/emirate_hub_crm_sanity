import { CommentIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export const testimonialsBlock = defineType({
  name: 'testimonialsBlock',
  title: 'Testimonials & Reviews Block',
  type: 'object',
  icon: CommentIcon,
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
      description: 'Optional small tag line (e.g. "WHAT OUR CLIENTS SAY").',
    }),
    defineField({
      name: 'heading',
      title: 'Section Headline',
      type: 'string',
      fieldset: 'content',
      initialValue: 'Trusted by High-Growth Enterprise Leaders',
    }),
    defineField({
      name: 'description',
      title: 'Section Description',
      type: 'text',
      rows: 2,
      fieldset: 'content',
    }),
    defineField({
      name: 'testimonials',
      title: 'Testimonials Items',
      type: 'array',
      fieldset: 'content',
      validation: (Rule) => Rule.required().min(1).error('At least one testimonial is required.'),
      of: [
        defineArrayMember({
          type: 'object',
          name: 'testimonialItem',
          title: 'Testimonial Item',
          fields: [
            defineField({
              name: 'quote',
              title: 'Client Quote / Feedback',
              type: 'text',
              rows: 3,
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'authorName',
              title: 'Client Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'authorTitle',
              title: 'Client Title & Company',
              type: 'string',
              description: 'e.g. "CTO, BioMend Labs"',
            }),
            defineField({
              name: 'authorImage',
              title: 'Author Portrait Photo',
              type: 'imageWithAlt',
            }),
            defineField({
              name: 'companyLogo',
              title: 'Company Logo Graphic',
              type: 'imageWithAlt',
            }),
            defineField({
              name: 'rating',
              title: 'Star Rating (1 to 5)',
              type: 'number',
              initialValue: 5,
              validation: (Rule) => Rule.min(1).max(5),
            }),
          ],
          preview: {
            select: {
              title: 'authorName',
              subtitle: 'authorTitle',
              media: 'authorImage.asset',
            },
            prepare({ title, subtitle, media }) {
              return {
                title: title || 'Anonymous',
                subtitle: subtitle || 'Client Feedback',
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
      title: 'Testimonial Card Background Color',
      type: 'hexColor',
      fieldset: 'colors',
    }),
    defineField({
      name: 'cardBorderColor',
      title: 'Testimonial Card Border Color',
      type: 'hexColor',
      fieldset: 'colors',
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      testimonials: 'testimonials',
    },
    prepare({ title, testimonials }) {
      const count = Array.isArray(testimonials) ? testimonials.length : 0
      return {
        title: `Testimonials: ${title || 'Untitled Section'}`,
        subtitle: `${count} review${count === 1 ? '' : 's'}`,
      }
    },
  },
})
