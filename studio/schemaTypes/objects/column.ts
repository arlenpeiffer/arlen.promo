import { InlineIcon } from '@sanity/icons/Inline'
import { defineField, defineType } from 'sanity'

const columnOptions = Array.from({ length: 12 }, (_, index) => ({
  title: String(index + 1),
  value: index + 1
}))

export const column = defineType({
  name: 'column',
  title: 'Column',
  type: 'object',
  fields: [
    defineField({
      name: 'start',
      title: 'Column Start',
      type: 'number',
      options: { list: columnOptions, direction: 'horizontal' },
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'span',
      title: 'Column Span',
      type: 'number',
      options: { list: columnOptions, direction: 'horizontal' },
      validation: (rule) => rule.required()
    })
  ],
  options: { collapsible: false, columns: 2 },
  icon: InlineIcon
})
