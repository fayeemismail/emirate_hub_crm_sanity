import { ComponentIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export const footer = defineType({
  name: 'footer',
  title: 'Footer Configuration',
  type: 'document',
  icon: ComponentIcon,
  fieldsets: [
    {
      name: 'content',
      title: '1. Footer Content & Copyright',
      options: { collapsible: true, collapsed: false },
    },
    {
      name: 'colors',
      title: '2. Footer Colors',
      options: { collapsible: true, collapsed: false },
    },
  ],
  fields: [
    defineField({
      name: 'portalFooterText',
      title: 'Admin Portal Footer Text',
      type: 'string',
      fieldset: 'content',
      initialValue: 'Emirate Hub Business Consultancy Admin Portal • Executive Office Blue Theme',
    }),
    defineField({
      name: 'tagline',
      title: 'Footer Company Blurb',
      type: 'text',
      rows: 2,
      fieldset: 'content',
    }),
    defineField({
      name: 'columns',
      title: 'Footer Link Columns',
      type: 'array',
      fieldset: 'content',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'footerColumn',
          fields: [
            defineField({
              name: 'columnTitle',
              title: 'Column Heading',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'links',
              title: 'Column Links',
              type: 'array',
              of: [
                defineArrayMember({
                  type: 'object',
                  name: 'footerLink',
                  fields: [
                    defineField({
                      name: 'label',
                      type: 'string',
                      title: 'Label',
                      validation: (Rule) => Rule.required(),
                    }),
                    defineField({
                      name: 'link',
                      type: 'link',
                      title: 'Target Link',
                      validation: (Rule) => Rule.required(),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'copyright',
      title: 'Copyright Notice',
      type: 'string',
      fieldset: 'content',
      initialValue: '© 2026 Emirate Hub Business Consultancy. All rights reserved.',
    }),
    defineField({
      name: 'legalLinks',
      title: 'Footer Legal Links (Privacy, Terms, Cookies)',
      type: 'array',
      fieldset: 'content',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'legalLink',
          fields: [
            defineField({
              name: 'label',
              type: 'string',
              title: 'Label',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'link',
              type: 'link',
              title: 'Target Link',
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
      ],
    }),

    // --- FOOTER COLORS ---
    defineField({
      name: 'footerBgColor',
      title: 'Footer Background Color',
      type: 'hexColor',
      fieldset: 'colors',
      initialValue: '#061426',
    }),
    defineField({
      name: 'footerTextColor',
      title: 'Footer Text Color',
      type: 'hexColor',
      fieldset: 'colors',
      initialValue: '#BAE6FDB3',
    }),
    defineField({
      name: 'footerBorderColor',
      title: 'Footer Border Color',
      type: 'hexColor',
      fieldset: 'colors',
      initialValue: '#93C5FD33',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Footer Configuration',
        subtitle: 'Footer columns, copyright, and custom colors',
      }
    },
  },
})
