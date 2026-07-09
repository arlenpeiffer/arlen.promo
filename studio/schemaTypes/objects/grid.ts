import { ThLargeIcon } from '@sanity/icons/ThLarge'
import { defineArrayMember, defineField, defineType } from 'sanity'

export const grid = defineType({
  name: 'grid',
  title: 'Grid',
  type: 'object',
  fields: [
    defineField({
      name: 'cells',
      title: 'Cells',
      type: 'array',
      of: [defineArrayMember({ type: 'cell' })],
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
  icon: ThLargeIcon
})
