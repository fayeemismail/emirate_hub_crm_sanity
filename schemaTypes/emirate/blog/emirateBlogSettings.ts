import { defineType, defineField } from 'sanity'
import { TagIcon } from '@sanity/icons'

export const emirateBlogSettings = defineType({
  name: 'emirateBlogSettings',
  title: 'Blog: Settings & Categories',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'active',
      title: 'Blog Page Active',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Blog Listing Background Color',
      type: 'hexColor',
      initialValue: '#FAF9F6',
      description: 'Background color of the blog listing page.',
    }),
    defineField({
      name: 'categories',
      title: 'Article Categories Filter List',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'blogCategory',
          title: 'Category',
          fields: [
            defineField({
              name: 'id',
              title: 'Category ID / Slug',
              type: 'string',
              description: 'e.g. all, tax-compliance, regulations, strategic-growth',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'label',
              title: 'Display Label',
              type: 'string',
              description: 'e.g. All Articles, Tax & VAT, Compliance & Regulations',
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'label',
              subtitle: 'id',
            },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Blog: Settings & Categories',
        subtitle: 'Tax & VAT, Regulations, Strategic Growth...',
      }
    },
  },
})
