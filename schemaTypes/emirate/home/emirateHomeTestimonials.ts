import { defineType, defineField } from 'sanity'
import { CommentIcon } from '@sanity/icons'

export const emirateHomeTestimonials = defineType({
  name: 'emirateHomeTestimonials',
  title: 'Home: Testimonials Section',
  type: 'document',
  icon: CommentIcon,
  fields: [
    defineField({
      name: 'active',
      title: 'Section Active',
      type: 'boolean',
      initialValue: true,
      description: 'Toggle visibility of the testimonials section.',
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Section Background Color',
      type: 'hexColor',
      initialValue: '#000000',
      description: 'Background color of the testimonials section.',
    }),
    defineField({
      name: 'titleColor',
      title: 'Section Title Color',
      type: 'hexColor',
      initialValue: '#FFFFFF',
      description: 'Text color of the section title heading.',
    }),
    defineField({
      name: 'descriptionColor',
      title: 'Description Text Color',
      type: 'hexColor',
      initialValue: '#9CA3AF',
      description: 'Color of the supporting description paragraph.',
    }),
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      initialValue: 'What Our Customers Say',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
      initialValue:
        'Real stories from real people! See how our services have transformed their experiences.',
    }),
    defineField({
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      initialValue: 'Book Now',
    }),
    defineField({
      name: 'buttonHref',
      title: 'Button Target URL',
      type: 'string',
      initialValue: '/coming-soon',
    }),
    defineField({
      name: 'testimonials',
      title: 'Testimonial Items',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'testimonialItem',
          title: 'Testimonial Item',
          fields: [
            defineField({
              name: 'name',
              title: 'Client Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'role',
              title: 'Role',
              type: 'string',
              description: 'e.g. Founder, Co-Founder, Managing Director',
            }),
            defineField({
              name: 'company',
              title: 'Company Name',
              type: 'string',
            }),
            defineField({
              name: 'image',
              title: 'Client Photo',
              type: 'image',
              options: { hotspot: true },
            }),
            defineField({
              name: 'quote',
              title: 'Testimonial Quote',
              type: 'text',
              rows: 3,
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'rating',
              title: 'Star Rating',
              type: 'number',
              initialValue: 5,
              validation: (Rule) => Rule.min(1).max(5),
            }),
            defineField({
              name: 'leftPercent',
              title: 'Orbital Left Position (%)',
              type: 'number',
              description: 'Horizontal percentage placement across the customer constellation.',
            }),
            defineField({
              name: 'topPercent',
              title: 'Orbital Top Position (%)',
              type: 'number',
              description: 'Vertical percentage placement across the customer constellation.',
            }),
            defineField({
              name: 'sizeClass',
              title: 'Avatar Size Class Identifier',
              type: 'string',
              description: 'Custom responsive sizing token (optional).',
            }),
            defineField({
              name: 'active',
              title: 'Item Active',
              type: 'boolean',
              initialValue: true,
            }),
          ],
          preview: {
            select: {
              title: 'name',
              role: 'role',
              company: 'company',
              media: 'image',
            },
            prepare({ title, role, company, media }) {
              return {
                title: title || 'Testimonial',
                subtitle: `${role ? `${role}, ` : ''}${company || ''}`.trim(),
                media,
              }
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: 'Home: Testimonials Section',
        subtitle: title || 'What Our Customers Say',
      }
    },
  },
})
