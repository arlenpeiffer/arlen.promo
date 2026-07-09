import { DocumentTextIcon } from '@sanity/icons/DocumentText'
import { defineField, defineType } from 'sanity'

export const aboutPage = defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo'
    })
  ],
  icon: DocumentTextIcon
})
