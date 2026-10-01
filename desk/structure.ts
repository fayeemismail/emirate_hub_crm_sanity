import {
  CogIcon,
  ControlsIcon,
  MenuIcon,
  ComponentIcon,
  DocumentIcon,
  EditIcon,
  TagIcon,
  DropIcon,
  DashboardIcon,
  SplitVerticalIcon,
} from '@sanity/icons'
import { StructureResolver } from 'sanity/structure'

// Define document types that should act as singletons
const singletonTypes = new Set([
  'siteSettings',
  'navigation',
  'footer',
  'themeSettings',
  'dashboardConfig',
])

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Website & CRM Studio')
    .items([
      // Singletons Section
      S.listItem()
        .title('Global Site Settings')
        .icon(ControlsIcon)
        .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
      S.listItem()
        .title('Theme & Color Palette')
        .icon(DropIcon)
        .child(S.document().schemaType('themeSettings').documentId('themeSettings')),
      S.listItem()
        .title('Dashboard & Portal Settings')
        .icon(DashboardIcon)
        .child(S.document().schemaType('dashboardConfig').documentId('dashboardConfig')),
      S.listItem()
        .title('Header & Sidebar Navigation')
        .icon(MenuIcon)
        .child(S.document().schemaType('navigation').documentId('navigation')),
      S.listItem()
        .title('Footer Configuration')
        .icon(ComponentIcon)
        .child(S.document().schemaType('footer').documentId('footer')),

      S.divider(),

      // Collections Section
      S.listItem()
        .title('Services Collection')
        .icon(CogIcon)
        .child(S.documentTypeList('service').title('All Services')),
      S.listItem()
        .title('CRM Pipeline Stages')
        .icon(TagIcon)
        .child(S.documentTypeList('leadStatus').title('All Pipeline Stages')),
      S.listItem()
        .title('Inquiry Priorities')
        .icon(SplitVerticalIcon)
        .child(S.documentTypeList('leadPriority').title('All Priority Levels')),
      S.listItem()
        .title('Pages')
        .icon(DocumentIcon)
        .child(S.documentTypeList('page').title('All Pages')),
      S.listItem()
        .title('Blog Posts')
        .icon(EditIcon)
        .child(S.documentTypeList('post').title('All Blog Posts')),

      // Filter out singletons from generic list
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !singletonTypes.has(listItem.getId() || '') &&
          !['page', 'service', 'post', 'leadStatus', 'leadPriority'].includes(
            listItem.getId() || ''
          )
      ),
    ])
