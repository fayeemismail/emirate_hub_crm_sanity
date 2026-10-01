import { DashboardIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export const dashboardConfig = defineType({
  name: 'dashboardConfig',
  title: 'Dashboard & Portal Settings',
  type: 'document',
  icon: DashboardIcon,
  fieldsets: [
    {
      name: 'headers',
      title: '1. Page Titles & Subtitles',
      options: { collapsible: true, collapsed: false },
    },
    {
      name: 'banner',
      title: '2. Portal Notice Banner',
      options: { collapsible: true, collapsed: false },
    },
    {
      name: 'kpiCards',
      title: '3. Overview KPI Metric Cards',
      options: { collapsible: true, collapsed: false },
    },
    {
      name: 'chartColors',
      title: '4. Analytics & Service Chart Series Colors',
      options: { collapsible: true, collapsed: false },
    },
    {
      name: 'inquiriesUI',
      title: '5. Inquiries & Kanban View Copy',
      options: { collapsible: true, collapsed: true },
    },
    {
      name: 'modals',
      title: '6. Modal Dialogs & Feedback Copy',
      options: { collapsible: true, collapsed: true },
    },
  ],
  fields: [
    // --- 1. HEADERS & SUBTITLES ---
    defineField({
      name: 'dashboardTabTitle',
      title: 'Dashboard View Title',
      type: 'string',
      fieldset: 'headers',
      initialValue: 'Emirate Hub Executive Dashboard',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'dashboardTabSubtitle',
      title: 'Dashboard View Subtitle',
      type: 'string',
      fieldset: 'headers',
      initialValue: 'Overview of business consultancy inquiries & message metrics',
    }),
    defineField({
      name: 'inquiriesTabTitle',
      title: 'Inquiries View Title',
      type: 'string',
      fieldset: 'headers',
      initialValue: 'Client Service Inquiries',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'inquiriesTabSubtitle',
      title: 'Inquiries View Subtitle',
      type: 'string',
      fieldset: 'headers',
      initialValue: 'User messages submitted from company website with Jira drag and drop',
    }),

    // --- 2. PORTAL NOTICE BANNER ---
    defineField({
      name: 'bannerTitle',
      title: 'Banner Headline',
      type: 'string',
      fieldset: 'banner',
      initialValue: 'Emirate Hub Consultancy Website Portal',
    }),
    defineField({
      name: 'bannerDescription',
      title: 'Banner Description',
      type: 'text',
      rows: 2,
      fieldset: 'banner',
      initialValue:
        'Incoming business inquiry messages are routed directly to this management panel in real time.',
    }),
    defineField({
      name: 'bannerButtonText',
      title: 'Banner Action Button Text',
      type: 'string',
      fieldset: 'banner',
      initialValue: 'Simulate Website Form',
    }),
    defineField({
      name: 'bannerBgStart',
      title: 'Banner Gradient Start Color',
      type: 'hexColor',
      fieldset: 'banner',
      initialValue: '#0D2E59',
    }),
    defineField({
      name: 'bannerBgEnd',
      title: 'Banner Gradient End Color',
      type: 'hexColor',
      fieldset: 'banner',
      initialValue: '#092244',
    }),
    defineField({
      name: 'bannerBorderColor',
      title: 'Banner Border Color',
      type: 'hexColor',
      fieldset: 'banner',
      initialValue: '#93C5FD4D',
    }),

    // --- 3. OVERVIEW KPI METRIC CARDS ---
    defineField({
      name: 'metricCards',
      title: 'Custom KPI Metric Cards',
      type: 'array',
      fieldset: 'kpiCards',
      description: 'Define the 4 top metrics displayed on the dashboard.',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'kpiCardItem',
          title: 'KPI Card Definition',
          fields: [
            defineField({
              name: 'metricKey',
              title: 'Metric Data Key',
              type: 'string',
              description: 'e.g. "total", "pending", "inProgress", "resolved"',
              options: {
                list: [
                  { title: 'Total Inquiries (total)', value: 'total' },
                  { title: 'Pending Review (pending)', value: 'pending' },
                  { title: 'In Progress / Active (inProgress)', value: 'inProgress' },
                  { title: 'Resolved / Won (resolved)', value: 'resolved' },
                ],
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'label',
              title: 'Card Display Label',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'icon',
              title: 'Lucide Icon Key',
              type: 'string',
              description: 'e.g. "Mail", "Clock", "Activity", "CheckCircle2"',
              initialValue: 'Mail',
            }),
            defineField({
              name: 'subtext',
              title: 'Helper Subtext / Metric Description',
              type: 'string',
            }),
            defineField({
              name: 'badgeText',
              title: 'Default Badge Tag (if dynamic not available)',
              type: 'string',
            }),
            defineField({
              name: 'iconColor',
              title: 'Icon Color (HEX)',
              type: 'hexColor',
            }),
            defineField({
              name: 'iconBgColor',
              title: 'Icon Container Background Color (HEX)',
              type: 'hexColor',
            }),
            defineField({
              name: 'badgeColor',
              title: 'Badge Text Color (HEX)',
              type: 'hexColor',
            }),
            defineField({
              name: 'badgeBgColor',
              title: 'Badge Background Color (HEX)',
              type: 'hexColor',
            }),
          ],
          preview: {
            select: {
              title: 'label',
              subtitle: 'metricKey',
            },
            prepare({ title, subtitle }) {
              return {
                title: title || 'Untitled Card',
                subtitle: `Key: ${subtitle || 'unassigned'}`,
              }
            },
          },
        }),
      ],
      initialValue: [
        {
          _type: 'kpiCardItem',
          metricKey: 'total',
          label: 'Total Inquiries',
          icon: 'Mail',
          subtext: 'Cumulative client website submissions',
          badgeText: 'Active',
          iconColor: '#38BDF8',
          iconBgColor: '#38BDF826',
          badgeColor: '#7DD3FC',
          badgeBgColor: '#38BDF826',
        },
        {
          _type: 'kpiCardItem',
          metricKey: 'pending',
          label: 'Pending Review',
          icon: 'Clock',
          subtext: 'Awaiting initial advisory triage',
          badgeText: 'Action Required',
          iconColor: '#FBBF24',
          iconBgColor: '#F59E0B26',
          badgeColor: '#FCD34D',
          badgeBgColor: '#F59E0B26',
        },
        {
          _type: 'kpiCardItem',
          metricKey: 'inProgress',
          label: 'In Progress',
          icon: 'Activity',
          subtext: 'Active consulting discussions & proposals',
          badgeText: 'In Discussion',
          iconColor: '#60A5FA',
          iconBgColor: '#3B82F626',
          badgeColor: '#93C5FD',
          badgeBgColor: '#3B82F626',
        },
        {
          _type: 'kpiCardItem',
          metricKey: 'resolved',
          label: 'Resolved / Won',
          icon: 'CheckCircle2',
          subtext: 'Completed engagements & onboarded deals',
          badgeText: 'Success',
          iconColor: '#34D399',
          iconBgColor: '#10B98126',
          badgeColor: '#6EE7B7',
          badgeBgColor: '#10B98126',
        },
      ],
    }),

    // --- 4. ANALYTICS & SERVICE CHART SERIES COLORS ---
    defineField({
      name: 'chartPrimaryColor',
      title: 'Main Volume Trend Line / Bar Color',
      type: 'hexColor',
      fieldset: 'chartColors',
      initialValue: '#38BDF8',
    }),
    defineField({
      name: 'chartSecondaryColor',
      title: 'Secondary Trend Comparison Color',
      type: 'hexColor',
      fieldset: 'chartColors',
      initialValue: '#3B82F6',
    }),
    defineField({
      name: 'serviceSeriesColors',
      title: 'Service Category Breakdown Colors',
      type: 'array',
      fieldset: 'chartColors',
      description: 'Custom bar/donut slice colors mapped to services in HEX.',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'serviceColorMapping',
          title: 'Service Color Mapping',
          fields: [
            defineField({
              name: 'serviceName',
              title: 'Service Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'color',
              title: 'Bar / Slice Color (HEX)',
              type: 'hexColor',
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'serviceName',
            },
          },
        }),
      ],
      initialValue: [
        {
          _type: 'serviceColorMapping',
          serviceName: 'Web Development',
          color: '#38BDF8',
        },
        {
          _type: 'serviceColorMapping',
          serviceName: 'AI & Automation',
          color: '#818CF8',
        },
        {
          _type: 'serviceColorMapping',
          serviceName: 'Cloud Infrastructure',
          color: '#22D3EE',
        },
        {
          _type: 'serviceColorMapping',
          serviceName: 'Enterprise Consulting',
          color: '#FBBF24',
        },
        {
          _type: 'serviceColorMapping',
          serviceName: 'UI/UX Redesign',
          color: '#34D399',
        },
        {
          _type: 'serviceColorMapping',
          serviceName: 'Mobile App Development',
          color: '#FB7185',
        },
      ],
    }),

    // --- 5. INQUIRIES & KANBAN VIEW COPY ---
    defineField({
      name: 'inquiriesSearchPlaceholder',
      title: 'Search Bar Placeholder',
      type: 'string',
      fieldset: 'inquiriesUI',
      initialValue: 'Search inquiries...',
    }),
    defineField({
      name: 'inquiriesEmptyTitle',
      title: 'Zero Requests Headline',
      type: 'string',
      fieldset: 'inquiriesUI',
      initialValue: 'No Service Requests Yet',
    }),
    defineField({
      name: 'inquiriesEmptyDescription',
      title: 'Zero Requests Description',
      type: 'text',
      rows: 2,
      fieldset: 'inquiriesUI',
      initialValue:
        'There are currently no customer inquiries. When visitors submit the inquiry form on the website, incoming requests will appear here in real time.',
    }),
    defineField({
      name: 'inquiriesNoMatchTitle',
      title: 'Filter No Matches Headline',
      type: 'string',
      fieldset: 'inquiriesUI',
      initialValue: 'No Matching Inquiries Found',
    }),
    defineField({
      name: 'inquiriesNoMatchDescription',
      title: 'Filter No Matches Description',
      type: 'string',
      fieldset: 'inquiriesUI',
      initialValue:
        'No inquiries match your current filters. Try resetting your search or category filter.',
    }),
    defineField({
      name: 'inquiriesClearFilterButton',
      title: 'Clear Filters Button Text',
      type: 'string',
      fieldset: 'inquiriesUI',
      initialValue: 'Clear Filters',
    }),

    // --- 7. MODAL DIALOGS & FEEDBACK COPY ---
    defineField({
      name: 'simulatorEyebrow',
      title: 'Simulator Header Eyebrow Tag',
      type: 'string',
      fieldset: 'modals',
      initialValue: 'Emirate Hub Website Form Simulator',
    }),
    defineField({
      name: 'simulatorTitle',
      title: 'Simulator Modal Headline',
      type: 'string',
      fieldset: 'modals',
      initialValue: 'Submit Customer Service Request',
    }),
    defineField({
      name: 'simulatorNotice',
      title: 'Simulator Banner Notice Text',
      type: 'string',
      fieldset: 'modals',
      initialValue: 'Simulates visitor filling out the contact form on website.',
    }),
    defineField({
      name: 'simulatorSuccessTitle',
      title: 'Simulator Success Response Title',
      type: 'string',
      fieldset: 'modals',
      initialValue: 'Request Submitted Successfully!',
    }),
    defineField({
      name: 'simulatorSuccessMessage',
      title: 'Simulator Success Response Description',
      type: 'text',
      rows: 2,
      fieldset: 'modals',
      initialValue:
        'Your inquiry has been routed to Emirate Hub Admin Portal. The dashboard graph and Jira-style Kanban board have been updated in real time.',
    }),
    defineField({
      name: 'modalReplyButton',
      title: 'Direct Email Reply Button Label',
      type: 'string',
      fieldset: 'modals',
      initialValue: 'Send Reply Email',
    }),
    defineField({
      name: 'modalDeleteButton',
      title: 'Delete Inquiry Button Label',
      type: 'string',
      fieldset: 'modals',
      initialValue: 'Delete Inquiry',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Dashboard & Portal Settings',
        subtitle: 'Headers, banner notice, KPI metric cards, and chart series colors in HEX',
      }
    },
  },
})
