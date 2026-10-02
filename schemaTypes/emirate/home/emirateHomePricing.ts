import { defineType, defineField } from 'sanity'
import { BillIcon } from '@sanity/icons'

export const emirateHomePricing = defineType({
  name: 'emirateHomePricing',
  title: 'Home: Pricing Packages',
  type: 'document',
  icon: BillIcon,
  fields: [
    defineField({
      name: 'active',
      title: 'Section Active',
      type: 'boolean',
      initialValue: true,
      description: 'Toggle visibility of the pricing packages section.',
    }),

    // Section Colors
    defineField({
      name: 'backgroundColor',
      title: 'Section Background Color',
      type: 'hexColor',
      initialValue: '#FFFFFF',
      description: 'Background color of the pricing packages section.',
    }),
    defineField({
      name: 'titleColor',
      title: 'Section Title Color',
      type: 'hexColor',
      initialValue: '#111827',
      description: 'Text color of the section title heading.',
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

    // Highlighted / Featured Card Colors
    defineField({
      name: 'highlightedCardColor',
      title: 'Highlighted Card Background Color',
      type: 'hexColor',
      initialValue: '#E02126',
      description: 'Background color for the featured / most popular pricing card (defaults to brand primary red #E02126).',
    }),
    defineField({
      name: 'highlightedCardTextColor',
      title: 'Highlighted Card Text Color',
      type: 'hexColor',
      initialValue: '#FFFFFF',
      description: 'Text and price color for the featured / most popular pricing card.',
    }),

    // Content fields
    defineField({
      name: 'badge',
      title: 'Section Badge',
      type: 'string',
      initialValue: 'PRICING PACKAGES',
    }),
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      initialValue: 'Transparent Pricing for',
    }),
    defineField({
      name: 'highlightedTitle',
      title: 'Highlighted Title',
      type: 'string',
      initialValue: 'Your Success',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      initialValue:
        'Choose the ideal license package designed to fast-track your business setup in Dubai and across the UAE with zero hidden costs.',
    }),
    defineField({
      name: 'cards',
      title: 'Pricing Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'pricingCard',
          title: 'Pricing Card',
          fields: [
            defineField({
              name: 'badge',
              title: 'Card Badge',
              type: 'string',
              description: 'e.g. FAST SETUP, MOST POPULAR, BEST VALUE',
            }),
            defineField({
              name: 'isPopular',
              title: 'Highlighted / Most Popular Card',
              type: 'boolean',
              initialValue: false,
            }),

            // Card Color Overrides
            defineField({
              name: 'cardBackgroundColor',
              title: 'Card Background Color (Override)',
              type: 'hexColor',
              description: 'Custom background color for this specific card (e.g. #000000 or #FFFFFF).',
            }),
            defineField({
              name: 'cardTitleColor',
              title: 'Card Title Color (Override)',
              type: 'hexColor',
              description: 'Text color of the card package title.',
            }),
            defineField({
              name: 'cardTextColor',
              title: 'Card Body Text Color (Override)',
              type: 'hexColor',
              description: 'Color of features, tagline, and labels on this card.',
            }),
            defineField({
              name: 'featuresTextColor',
              title: 'Features List Text Color (Override)',
              type: 'hexColor',
              description: 'Custom color for checklist items on this card.',
            }),
            defineField({
              name: 'priceColor',
              title: 'Card Price Color (Override)',
              type: 'hexColor',
              description: 'Color of the currency and price amount.',
            }),
            defineField({
              name: 'buttonBackgroundColor',
              title: 'Button Background Color (Override)',
              type: 'hexColor',
              description: 'Custom button background color (e.g. #FFFFFF or #111827).',
            }),
            defineField({
              name: 'buttonTextColor',
              title: 'Button Text Color (Override)',
              type: 'hexColor',
              description: 'Custom button text color (e.g. #111827 or #FFFFFF).',
            }),
            defineField({
              name: 'buttonBorderColor',
              title: 'Button Border Color (Override)',
              type: 'hexColor',
              description: 'Custom button border color (e.g. #111827 or #FFFFFF).',
            }),

            defineField({
              name: 'icon',
              title: 'Card Icon Name',
              type: 'string',
              description: 'Icon identifier (e.g. briefcase, building, badge-check)',
              initialValue: 'briefcase',
            }),
            defineField({
              name: 'title',
              title: 'Package Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'tagline',
              title: 'Tagline',
              type: 'string',
            }),
            defineField({
              name: 'startingAt',
              title: 'Starting At Label',
              type: 'string',
              initialValue: 'Starting at',
            }),
            defineField({
              name: 'currency',
              title: 'Currency',
              type: 'string',
              initialValue: 'AED',
            }),
            defineField({
              name: 'price',
              title: 'Price Amount',
              type: 'string',
              description: 'e.g. 3,999, 15,000',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'featuresHeading',
              title: 'Features Heading',
              type: 'string',
              initialValue: "What's Included:",
            }),
            defineField({
              name: 'features',
              title: 'Included Features',
              type: 'array',
              of: [{ type: 'string' }],
            }),
            defineField({
              name: 'buttonText',
              title: 'Button Text',
              type: 'string',
              initialValue: 'ENQUIRE NOW',
            }),
            defineField({
              name: 'buttonHref',
              title: 'Button Target URL',
              type: 'string',
              initialValue: '/#contact-us',
            }),
            defineField({
              name: 'serviceSlug',
              title: 'Service Slug (for Contact Form)',
              type: 'string',
              description: 'The slug of the corresponding service (e.g. business-incorporation). Sent to the backend when this plan is enquired.',
            }),
          ],
          preview: {
            select: {
              title: 'title',
              price: 'price',
              badge: 'badge',
            },
            prepare({ title, price, badge }) {
              return {
                title: title || 'Pricing Card',
                subtitle: `${price ? `AED ${price}` : ''} ${badge ? `[${badge}]` : ''}`.trim(),
              }
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'highlightedTitle',
      subtitle: 'title',
    },
    prepare({ title, subtitle }) {
      return {
        title: 'Home: Pricing Packages',
        subtitle: `${subtitle || ''} ${title || ''}`.trim(),
      }
    },
  },
})
