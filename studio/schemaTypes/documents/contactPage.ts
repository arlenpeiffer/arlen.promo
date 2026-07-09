import { DocumentTextIcon } from '@sanity/icons/DocumentText'
import { defineField, defineType } from 'sanity'

export const contactPage = defineType({
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  fields: [
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo'
    })
  ],
  icon: DocumentTextIcon,
  preview: {
    prepare() {
      return {
        title: 'Contact Page'
      }
    }
  }
})
