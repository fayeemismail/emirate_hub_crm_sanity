import { defineType, defineField } from 'sanity'
import { PinIcon } from '@sanity/icons'

export const emirateAboutLocation = defineType({
  name: 'emirateAboutLocation',
  title: 'About: Office Location',
  type: 'document',
  icon: PinIcon,
  fields: [
    defineField({
      name: 'active',
      title: 'Section Active',
      type: 'boolean',
      initialValue: true,
      description: 'Toggle visibility of the location section.',
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Section Background Color',
      type: 'hexColor',
      initialValue: '#000000',
      description: 'Background color of the location section.',
    }),
    defineField({
      name: 'titleColor',
      title: 'Section Title Color',
      type: 'hexColor',
      initialValue: '#FFFFFF',
      description: 'Color of the location section title heading.',
    }),
    defineField({
      name: 'highlightColor',
      title: 'Highlighted Title Color',
      type: 'hexColor',
      initialValue: '#E02126',
      description: 'Color of the highlighted district keyword ("Business Bay").',
    }),
    defineField({
      name: 'descriptionColor',
      title: 'Description Text Color',
      type: 'hexColor',
      initialValue: '#9CA3AF',
      description: 'Color of the location description paragraph.',
    }),
    defineField({
      name: 'cardBackgroundColor',
      title: 'Info Cards Background Color',
      type: 'hexColor',
      initialValue: '#18181B',
      description: 'Background color of the address, transit, and schedule cards.',
    }),
    defineField({
      name: 'cardTitleColor',
      title: 'Info Cards Title Color',
      type: 'hexColor',
      initialValue: '#FFFFFF',
      description: 'Color of the info card headings.',
    }),
    defineField({
      name: 'cardTextColor',
      title: 'Info Cards Text Color',
      type: 'hexColor',
      initialValue: '#9CA3AF',
      description: 'Color of the info card descriptions and hours.',
    }),
    defineField({
      name: 'badge',
      title: 'Section Badge',
      type: 'string',
      initialValue: 'VISIT OUR HEADQUARTERS',
    }),
    defineField({
      name: 'header',
      title: 'Section Header',
      type: 'object',
      fields: [
        defineField({
          name: 'titlePrefix',
          title: 'Title Prefix',
          type: 'string',
          initialValue: 'Our Location in ',
        }),
        defineField({
          name: 'highlight',
          title: 'Highlighted Title',
          type: 'string',
          initialValue: 'Business Bay',
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 3,
          initialValue:
            "Conveniently situated in the iconic Iris Bay Tower, right in the heart of Dubai's central business district. Visit us for in-person advisory, license processing, and corporate consultation.",
        }),
      ],
    }),
    defineField({
      name: 'googleMapsUrl',
      title: 'External Google Maps URL',
      type: 'url',
      initialValue:
        'https://www.google.com/maps/search/?api=1&query=Iris+Bay+Tower+Business+Bay+Dubai',
    }),
    defineField({
      name: 'mapEmbedUrl',
      title: 'Google Maps Embed Template URL',
      type: 'string',
      initialValue:
        'https://maps.google.com/maps?q=Iris+Bay+Tower,+Business+Bay,+Dubai&t=&z={zoom}&ie=UTF8&iwloc=&output=embed',
    }),
    defineField({
      name: 'defaultZoom',
      title: 'Default Zoom Level',
      type: 'number',
      initialValue: 16,
    }),
    defineField({
      name: 'minZoom',
      title: 'Minimum Zoom Level',
      type: 'number',
      initialValue: 12,
    }),
    defineField({
      name: 'maxZoom',
      title: 'Maximum Zoom Level',
      type: 'number',
      initialValue: 19,
    }),
    defineField({
      name: 'buttonText',
      title: 'Open In Maps Button Text',
      type: 'string',
      initialValue: 'Open in Google Maps',
    }),
    defineField({
      name: 'cards',
      title: 'Information Cards',
      type: 'object',
      fields: [
        defineField({
          name: 'headOffice',
          title: 'Head Office Address Card',
          type: 'object',
          fields: [
            defineField({
              name: 'badge',
              title: 'Card Badge',
              type: 'string',
              initialValue: 'HEAD OFFICE ADDRESS',
            }),
            defineField({
              name: 'unit',
              title: 'Unit / Floor',
              type: 'string',
              initialValue: '2204, 22nd Floor',
            }),
            defineField({
              name: 'building',
              title: 'Building Name',
              type: 'string',
              initialValue: 'Iris Bay Tower',
            }),
            defineField({
              name: 'location',
              title: 'City & Country',
              type: 'string',
              initialValue: 'Business Bay, Dubai, United Arab Emirates',
            }),
          ],
        }),
        defineField({
          name: 'accessibility',
          title: 'Accessibility & Transit Card',
          type: 'object',
          fields: [
            defineField({
              name: 'badge',
              title: 'Card Badge',
              type: 'string',
              initialValue: 'ACCESSIBILITY & TRANSIT',
            }),
            defineField({
              name: 'title',
              title: 'Headline',
              type: 'string',
              initialValue: '3 mins from Business Bay Metro Station',
            }),
            defineField({
              name: 'description',
              title: 'Details',
              type: 'text',
              rows: 2,
              initialValue:
                "Direct access from Sheikh Zayed Road (E11) and Al Sa'ada Street. Dedicated visitor parking available.",
            }),
          ],
        }),
        defineField({
          name: 'workingHours',
          title: 'Working Hours Card',
          type: 'object',
          fields: [
            defineField({
              name: 'badge',
              title: 'Card Badge',
              type: 'string',
              initialValue: 'WORKING HOURS',
            }),
            defineField({
              name: 'schedule',
              title: 'Weekly Schedule Items',
              type: 'array',
              of: [
                {
                  type: 'object',
                  name: 'scheduleItem',
                  title: 'Schedule Item',
                  fields: [
                    defineField({
                      name: 'days',
                      title: 'Days Range',
                      type: 'string',
                      description: 'e.g. Mon – Fri:, Saturday:',
                    }),
                    defineField({
                      name: 'hours',
                      title: 'Working Hours',
                      type: 'string',
                      description: 'e.g. 9:00 AM – 6:00 PM or Closed',
                    }),
                    defineField({
                      name: 'isClosed',
                      title: 'Mark as Closed',
                      type: 'boolean',
                      initialValue: false,
                    }),
                  ],
                  preview: {
                    select: {
                      days: 'days',
                      hours: 'hours',
                    },
                    prepare({ days, hours }) {
                      return {
                        title: `${days || ''} ${hours || ''}`.trim(),
                      }
                    },
                  },
                },
              ],
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'header.highlight',
      subtitle: 'badge',
    },
    prepare({ title, subtitle }) {
      return {
        title: 'About: Office Location',
        subtitle: `${subtitle || 'Headquarters'} — ${title || 'Business Bay'}`,
      }
    },
  },
})
