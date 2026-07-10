import { InlineIcon } from '@sanity/icons/Inline'
import { defineField, defineType } from 'sanity'

import { ColumnSelect } from '@/components/column/ColumnSelect'
import { validateCombination } from '@/components/column/helpers'

export const column = defineType({
  name: 'column',
  title: 'Column',
  type: 'object',
  fields: [
    defineField({
      name: 'start',
      title: 'Column Start',
      type: 'number',
      components: { input: ColumnSelect },
      validation: (rule) =>
        rule.required().custom((start, context) => {
          const parent = context.parent as { span?: number }
          return validateCombination(start, parent?.span)
        })
    }),
    defineField({
      name: 'span',
      title: 'Column Span',
      type: 'number',
      components: { input: ColumnSelect },
      validation: (rule) =>
        rule.required().custom((span, context) => {
          const parent = context.parent as { start?: number }
          return validateCombination(parent?.start, span)
        })
    })
  ],
  options: { collapsible: false, columns: 2 },
  icon: InlineIcon
})
