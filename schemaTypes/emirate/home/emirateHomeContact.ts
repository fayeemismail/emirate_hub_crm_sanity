import { defineType, defineField } from 'sanity'
import { UsersIcon } from '@sanity/icons'

export const emirateHomeContact = defineType({
  name: 'emirateHomeContact',
  title: 'Home: Contact Section',
  type: 'document',
  icon: UsersIcon,
  fields: [
    defineField({
      name: 'active',
      title: 'Section Active',
      type: 'boolean',
      initialValue: true,
      description: 'Toggle visibility of the home contact section.',
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Section Background Color',
      type: 'hexColor',
      initialValue: '#F8F6FB',
      description: 'Background color of the contact section.',
    }),
    defineField({
      name: 'titleColor',
      title: 'Section Title Color',
      type: 'hexColor',
      initialValue: '#111827',
      description: 'Color of the section title.',
    }),
    defineField({
      name: 'highlightColor',
      title: 'Highlighted Title Color',
      type: 'hexColor',
      initialValue: '#E02126',
      description: 'Color of the highlighted title keyword.',
    }),
    defineField({
      name: 'descriptionColor',
      title: 'Description Text Color',
      type: 'hexColor',
      initialValue: '#6B7280',
      description: 'Color of the supporting description paragraph.',
    }),
    defineField({
      name: 'formBackgroundColor',
      title: 'Form Container Background Color',
      type: 'hexColor',
      initialValue: '#FFFFFF',
      description: 'Background color of the contact form card.',
    }),
    defineField({
      name: 'formTitleColor',
      title: 'Form Heading Color',
      type: 'hexColor',
      initialValue: '#111827',
      description: 'Color of the form heading.',
    }),
    defineField({
      name: 'formTextColor',
      title: 'Form Subtitle Color',
      type: 'hexColor',
      initialValue: '#6B7280',
      description: 'Color of the form description subtitle.',
    }),
    defineField({
      name: 'badge',
      title: 'Section Badge',
      type: 'string',
      initialValue: "LET'S TALK BUSINESS",
    }),
    defineField({
      name: 'titlePrefix',
      title: 'Title Prefix',
      type: 'string',
      initialValue: 'Connect With Our ',
    }),
    defineField({
      name: 'highlightedTitle',
      title: 'Highlighted Title',
      type: 'string',
      initialValue: 'Experts',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
      initialValue:
        'Have questions about setting up your company in the UAE? Send us a message and our certified setup advisors will get back to you promptly.',
    }),
    defineField({
      name: 'formTitle',
      title: 'Form Heading',
      type: 'string',
      initialValue: 'Send Us a Message',
    }),
    defineField({
      name: 'formDescription',
      title: 'Form Subtitle',
      type: 'string',
      initialValue: 'Fill out the form below and our team will get in touch with you shortly.',
    }),
    defineField({
      name: 'advisorImage',
      title: 'Advisor Photo',
      type: 'image',
      options: { hotspot: true },
      description: 'Consultant advisor portrait displayed alongside the form.',
    }),
    defineField({
      name: 'advisorStatusText',
      title: 'Advisor Status Badge',
      type: 'string',
      initialValue: 'Advisors Available Online',
    }),
    defineField({
      name: 'advisorCalloutText',
      title: 'Advisor Callout Message',
      type: 'text',
      rows: 2,
      initialValue:
        'Get free 1-on-1 personalized advisory tailored to your business goals.',
    }),
    defineField({
      name: 'responseTimeText',
      title: 'Response Time Badge',
      type: 'string',
      initialValue: '24h Response',
    }),
    defineField({
      name: 'confidentialityText',
      title: 'Confidentiality Badge',
      type: 'string',
      initialValue: '100% Confidential',
    }),
  ],
  preview: {
    select: {
      title: 'highlightedTitle',
      media: 'advisorImage',
    },
    prepare({ title, media }) {
      return {
        title: 'Home: Contact Section',
        subtitle: `Connect With Our ${title || 'Experts'}`,
        media,
      }
    },
  },
})
