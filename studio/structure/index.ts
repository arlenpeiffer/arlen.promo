import { DocumentTextIcon } from '@sanity/icons/DocumentText'
import { type StructureBuilder, type StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Pages')
        .icon(DocumentTextIcon)
        .child(
          S.list()
            .title('Pages')
            .showIcons(false)
            .items([
              S.listItem()
                .title('Home Page')
                .child(S.document().schemaType('homePage').documentId('homePage')),
              S.listItem()
                .title('About Page')
                .child(S.document().schemaType('aboutPage').documentId('aboutPage')),
              S.listItem()
                .title('Contact Page')
                .child(S.document().schemaType('contactPage').documentId('contactPage'))
            ])
        ),
      S.documentTypeListItem('caseStudy').title('Case Studies')
    ])
