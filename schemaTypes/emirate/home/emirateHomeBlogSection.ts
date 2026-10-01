import { defineType, defineField } from 'sanity'
import { DocumentTextIcon } from '@sanity/icons'

export const emirateHomeBlogSection = defineType({
  name: 'emirateHomeBlogSection',
  title: 'Home: Blogs & News Section',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'active',
      title: 'Section Active',
      type: 'boolean',
      initialValue: true,
      description: 'Toggle visibility of the home blog section.',
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Section Background Color',
      type: 'hexColor',
      initialValue: '#FFFFFF',
      description: 'Background color of the blog section (defaults to #FFFFFF).',
    }),
    defineField({
      name: 'titleColor',
      title: 'Section Title Color',
      type: 'hexColor',
      initialValue: '#E02126',
      description: 'Text color of the section title heading (defaults to #E02126).',
    }),
    defineField({
      name: 'subtitleColor',
      title: 'Subtitle Text Color',
      type: 'hexColor',
      initialValue: '#4B5563',
      description: 'Color of the section subtitle.',
    }),
    defineField({
      name: 'cardTitleColor',
      title: 'Card Title Color Override',
      type: 'hexColor',
      initialValue: '#111827',
      description: 'Text color of article titles on blog cards (defaults to #111827).',
    }),
    defineField({
      name: 'cardTextColor',
      title: 'Card Excerpt Text Color Override',
      type: 'hexColor',
      initialValue: '#6B7280',
      description: 'Text color of article excerpts on blog cards (defaults to #6B7280).',
    }),
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      initialValue: 'Blogs & News',
    }),
    defineField({
      name: 'titleHref',
      title: 'Title Target URL',
      type: 'string',
      initialValue: '/blog',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      initialValue: 'Keep up with the latest news',
    }),
    defineField({
      name: 'viewAllText',
      title: 'View All Text',
      type: 'string',
      initialValue: 'VIEW ALL',
    }),
    defineField({
      name: 'viewAllHref',
      title: 'View All Target URL',
      type: 'string',
      initialValue: '/blog',
    }),
    defineField({
      name: 'featuredBlogs',
      title: 'Featured Articles Reference',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'emirateBlogPost' }] }],
      description:
        'Select specific blog posts to highlight on the homepage. If empty, the latest published posts are displayed.',
    }),
    defineField({
      name: 'blogs',
      title: 'Custom Featured Cards (Fallback / Direct entry)',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'homeBlogItem',
          title: 'Blog Card',
          fields: [
            defineField({
              name: 'id',
              title: 'Article ID / Slug',
              type: 'string',
            }),
            defineField({
              name: 'title',
              title: 'Article Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'excerpt',
              title: 'Excerpt',
              type: 'text',
              rows: 2,
            }),
            defineField({
              name: 'image',
              title: 'Featured Image',
              type: 'image',
              options: { hotspot: true },
            }),
            defineField({
              name: 'active',
              title: 'Card Active',
              type: 'boolean',
              initialValue: true,
            }),
            defineField({
              name: 'cardTitleColor',
              title: 'Card Title Color (Override)',
              type: 'hexColor',
              description: 'Custom title color for this specific card.',
            }),
            defineField({
              name: 'cardTextColor',
              title: 'Card Text Color (Override)',
              type: 'hexColor',
              description: 'Custom excerpt text color for this specific card.',
            }),
          ],
          preview: {
            select: {
              title: 'title',
              media: 'image',
            },
            prepare({ title, media }) {
              return {
                title: title || 'Blog Card',
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
      subtitle: 'subtitle',
    },
    prepare({ title, subtitle }) {
      return {
        title: 'Home: Blogs & News Section',
        subtitle: `${title || 'Blogs & News'} — ${subtitle || ''}`.trim(),
      }
    },
  },
})
