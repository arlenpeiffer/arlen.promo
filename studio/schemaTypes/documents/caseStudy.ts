import { CaseIcon } from '@sanity/icons/Case'
import { defineArrayMember, defineField, defineType } from 'sanity'

export const caseStudy = defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name' },
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'text',
      rows: 2
    }),
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'media'
    }),
    defineField({
      name: 'roles',
      title: 'Roles',
      type: 'string'
    }),
    defineField({
      name: 'tools',
      title: 'Tools',
      type: 'string'
    }),
    defineField({
      name: 'timeline',
      title: 'Timeline',
      type: 'string'
    }),
    defineField({
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [defineArrayMember({ type: 'link' })]
    }),
    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [defineArrayMember({ type: 'section' })]
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo'
    })
  ],
  icon: CaseIcon,
  preview: {
    select: { image: 'hero.image', name: 'name', tagline: 'tagline' },
    prepare({ image, name, tagline }) {
      return {
        title: name,
        subtitle: tagline,
        media: image
      }
    }
  }
})
