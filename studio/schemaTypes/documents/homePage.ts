import { DocumentTextIcon } from '@sanity/icons/DocumentText'
import { defineArrayMember, defineField, defineType } from 'sanity'

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'caseStudies',
      title: 'Case Studies',
      type: 'array',
      of: [defineArrayMember({ type: 'caseStudy' })]
    }),
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
        title: 'Home Page'
      }
    }
  }
})
