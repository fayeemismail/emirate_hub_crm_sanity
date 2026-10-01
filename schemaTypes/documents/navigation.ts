import { MenuIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export const navigation = defineType({
  name: 'navigation',
  title: 'Header & Sidebar Navigation',
  type: 'document',
  icon: MenuIcon,
  fields: [
    defineField({
      name: 'brandName',
      title: 'Brand Title / Logo Text',
      type: 'string',
      initialValue: 'EMIRATE HUB',
    }),
    defineField({
      name: 'brandSubtitle',
      title: 'Brand Subtitle / Tagline',
      type: 'string',
      initialValue: 'Business Consultancy',
    }),
    defineField({
      name: 'brandIcon',
      title: 'Lucide Icon Key',
      type: 'string',
      initialValue: 'Briefcase',
      description: 'e.g. "Briefcase", "LayoutDashboard", "Inbox"',
    }),
    defineField({
      name: 'logo',
      title: 'Brand Logo Graphic',
      type: 'imageWithAlt',
    }),
    defineField({
      name: 'portalSectionLabel',
      title: 'Nav Section Eyebrow Label',
      type: 'string',
      initialValue: 'Consultancy Portal',
    }),
    defineField({
      name: 'items',
      title: 'Navigation Menu Links / Tabs',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'navItem',
          title: 'Menu Item',
          fields: [
            defineField({
              name: 'id',
              title: 'Tab / Route Identifier',
              type: 'string',
              description: 'e.g. "dashboard", "requests"',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'label',
              title: 'Nav Label',
              type: 'string',
              initialValue: 'Dashboard',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'icon',
              title: 'Lucide Icon Name',
              type: 'string',
              description: 'e.g. "LayoutDashboard", "Inbox", "Layers", "Settings"',
              initialValue: 'LayoutDashboard',
            }),
            defineField({
              name: 'link',
              title: 'Target Link / URL (Optional for tab buttons)',
              type: 'link',
            }),
            defineField({
              name: 'badgeCountKey',
              title: 'Dynamic Badge Key (Optional)',
              type: 'string',
              description: 'e.g. "pendingCount" to show live unread counter on badge',
            }),
          ],
          preview: {
            select: {
              title: 'label',
              subtitle: 'id',
            },
            prepare({ title, subtitle }) {
              return {
                title: title || 'Untitled Item',
                subtitle: `ID: ${subtitle || 'none'}`,
              }
            },
          },
        }),
      ],
      initialValue: [
        {
          _type: 'navItem',
          id: 'dashboard',
          label: 'Dashboard',
          icon: 'LayoutDashboard',
        },
        {
          _type: 'navItem',
          id: 'requests',
          label: 'Service Inquiries',
          icon: 'Inbox',
          badgeCountKey: 'pendingCount',
        },
      ],
    }),
    defineField({
      name: 'actionButtons',
      title: 'Header Action CTA Buttons',
      type: 'array',
      of: [defineArrayMember({ type: 'cta' })],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Header & Sidebar Navigation',
        subtitle: 'Sidebar tabs, brand headers & action buttons',
      }
    },
  },
})
