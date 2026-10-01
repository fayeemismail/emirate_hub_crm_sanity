import { UsersIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export const teamGridBlock = defineType({
  name: 'teamGridBlock',
  title: 'Team Members Grid Block',
  type: 'object',
  icon: UsersIcon,
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
      description: 'Optional small tag line (e.g. "LEADERSHIP & ADVISORS").',
    }),
    defineField({
      name: 'heading',
      title: 'Section Headline',
      type: 'string',
      fieldset: 'content',
      initialValue: 'Meet Our Leadership & Consulting Team',
    }),
    defineField({
      name: 'description',
      title: 'Section Description',
      type: 'text',
      rows: 2,
      fieldset: 'content',
    }),
    defineField({
      name: 'members',
      title: 'Team Members',
      type: 'array',
      fieldset: 'content',
      validation: (Rule) => Rule.required().min(1).error('At least one member is required.'),
      of: [
        defineArrayMember({
          type: 'object',
          name: 'teamMember',
          title: 'Team Member',
          fields: [
            defineField({
              name: 'name',
              title: 'Full Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'role',
              title: 'Position / Role',
              type: 'string',
              description: 'e.g. "Managing Partner", "Principal Consultant", "Lead Architect"',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'bio',
              title: 'Short Bio',
              type: 'text',
              rows: 2,
            }),
            defineField({
              name: 'photo',
              title: 'Profile Photo',
              type: 'imageWithAlt',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'socialLinks',
              title: 'Social & Contact Links',
              type: 'array',
              of: [
                defineArrayMember({
                  type: 'object',
                  name: 'teamSocial',
                  fields: [
                    defineField({
                      name: 'platform',
                      title: 'Platform Name',
                      type: 'string',
                      description: 'e.g. "LinkedIn", "Twitter", "Email"',
                    }),
                    defineField({
                      name: 'url',
                      title: 'Profile URL / Link',
                      type: 'string',
                      validation: (Rule) => Rule.required(),
                    }),
                  ],
                }),
              ],
            }),
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'role',
              media: 'photo.asset',
            },
            prepare({ title, subtitle, media }) {
              return {
                title: title || 'Unnamed Member',
                subtitle: subtitle || 'Team Member',
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
      title: 'Member Card Background Color',
      type: 'hexColor',
      fieldset: 'colors',
    }),
    defineField({
      name: 'cardBorderColor',
      title: 'Member Card Border Color',
      type: 'hexColor',
      fieldset: 'colors',
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      members: 'members',
    },
    prepare({ title, members }) {
      const count = Array.isArray(members) ? members.length : 0
      return {
        title: `Team: ${title || 'Untitled Section'}`,
        subtitle: `${count} member${count === 1 ? '' : 's'}`,
      }
    },
  },
})
