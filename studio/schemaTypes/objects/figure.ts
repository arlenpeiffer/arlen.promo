import { PresentationIcon } from '@sanity/icons/Presentation'
import { defineField, defineType } from 'sanity'

export const figure = defineType({
  name: 'figure',
  title: 'Figure',
  type: 'object',
  fields: [
    defineField({
      name: 'media',
      title: 'Media',
      type: 'media',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'text',
      rows: 2
    })
  ],
  options: { collapsible: false },
  icon: PresentationIcon
})
