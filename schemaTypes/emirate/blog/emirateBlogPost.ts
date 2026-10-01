import { defineType, defineField } from 'sanity'
import { DocumentTextIcon } from '@sanity/icons'

export const emirateBlogPost = defineType({
  name: 'emirateBlogPost',
  title: 'Emirate Hub: Blog Post',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Article Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug / URL Identifier',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'active',
      title: 'Article Published / Active',
      type: 'boolean',
      initialValue: true,
      description: 'Toggle visibility of this article on the website.',
    }),
    defineField({
      name: 'featured',
      title: 'Featured Article',
      type: 'boolean',
      initialValue: false,
      description: 'Highlight as a top story or hero card.',
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Article Page Background Color',
      type: 'hexColor',
      initialValue: '#FAF9F6',
      description: 'Background color of the article detail page.',
    }),
    defineField({
      name: 'titleColor',
      title: 'Article Title Color',
      type: 'hexColor',
      initialValue: '#111827',
      description: 'Color of the main article title heading.',
    }),
    defineField({
      name: 'textColor',
      title: 'Body Text Color',
      type: 'hexColor',
      initialValue: '#374151',
      description: 'Color of the article paragraphs and section body text.',
    }),
    defineField({
      name: 'quoteColor',
      title: 'Summary Quote Color',
      type: 'hexColor',
      initialValue: '#1F2937',
      description: 'Color of the featured pull quote text.',
    }),
    defineField({
      name: 'excerpt',
      title: 'Summary Excerpt',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category Slug',
      type: 'string',
      description: 'e.g. tax-compliance, regulations, strategic-growth, corporate-advisory',
      options: {
        list: [
          { title: 'Tax & VAT', value: 'tax-compliance' },
          { title: 'Compliance & Regulations', value: 'regulations' },
          { title: 'Strategic Growth', value: 'strategic-growth' },
          { title: 'Corporate Advisory', value: 'corporate-advisory' },
        ],
      },
    }),
    defineField({
      name: 'date',
      title: 'Publication Date Display',
      type: 'string',
      initialValue: 'March 2026',
      description: 'e.g. March 2026 or February 2026',
    }),
    defineField({
      name: 'readTime',
      title: 'Read Time',
      type: 'string',
      initialValue: '5 min read',
      description: 'e.g. 5 min read',
    }),
    defineField({
      name: 'image',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author Details',
      type: 'object',
      fields: [
        defineField({
          name: 'name',
          title: 'Author Name',
          type: 'string',
          initialValue: 'Tariq Al-Mansoor',
        }),
        defineField({
          name: 'role',
          title: 'Author Role',
          type: 'string',
          initialValue: 'Senior Tax & Compliance Advisor',
        }),
        defineField({
          name: 'avatar',
          title: 'Author Avatar',
          type: 'image',
          options: { hotspot: true },
        }),
      ],
    }),
    defineField({
      name: 'tags',
      title: 'Topic Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'summaryQuote',
      title: 'Featured Summary Quote / Pull Quote',
      type: 'text',
      rows: 2,
      description: 'Prominent quote displayed at top of the article.',
    }),
    defineField({
      name: 'keyTakeaways',
      title: 'Executive Advisory Takeaways',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Bullet points highlighting core strategic takeaways.',
    }),
    defineField({
      name: 'sections',
      title: 'Article Body Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'blogSection',
          title: 'Article Section',
          fields: [
            defineField({
              name: 'heading',
              title: 'Section Heading',
              type: 'string',
            }),
            defineField({
              name: 'paragraphs',
              title: 'Paragraphs',
              type: 'array',
              of: [{ type: 'text', rows: 3 }],
            }),
          ],
          preview: {
            select: {
              title: 'heading',
              firstPara: 'paragraphs.0',
            },
            prepare({ title, firstPara }) {
              return {
                title: title || 'Body Section',
                subtitle: firstPara ? `${firstPara.slice(0, 60)}...` : '',
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
      subtitle: 'category',
      media: 'image',
    },
  },
})
