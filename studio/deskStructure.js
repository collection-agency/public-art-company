import S from '@sanity/desk-tool/structure-builder'
import {
  MdDashboard,
  MdSettings
} from 'react-icons/md'

// We filter document types defined in structure to prevent
// them from being listed twice
const hiddenDocTypes = listItem =>
  ![
    'config',
    'landing',
    'project',
  ].includes(listItem.getId())

export default () =>
  S.list()
    .title('Site')
    .items([
      S.listItem()
        .title('Landing')
        .icon(MdDashboard)
        .child(
          S.document()
            .id('landing')
            .schemaType('landing')
            .documentId('landing')
            .title('Landing')
        ),

      S.listItem()
        .title('Projects')
        .icon(MdDashboard)
        .schemaType('project')
        .child(S.documentTypeList('project').title('Projects')),

      S.listItem()
        .title('Site Config')
        .icon(MdSettings)
        .child(
          S.document()
            .id('config')
            .schemaType('config')
            .documentId('config')
            .title('Site Config')
        ),

      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ])
