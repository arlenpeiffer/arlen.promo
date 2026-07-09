import { toPlainText } from '@portabletext/toolkit'
import { SquareIcon } from '@sanity/icons/Square'
import { capitalCase } from 'change-case'
import { defineField, defineType } from 'sanity'

export const cell = defineType({
  name: 'cell',
  title: 'Cell',
  type: 'object',
  fields: [
    defineField({
      name: 'content',
      title: 'Content',
      type: 'object',
      fields: [
        defineField({
          name: 'variant',
          title: 'Variant',
          type: 'string',
          options: {
            list: [
              { title: 'Figure', value: 'figure' },
              { title: 'Copy Block', value: 'copyBlock' }
            ],
            layout: 'radio',
            direction: 'horizontal'
          },
          initialValue: 'figure',
          validation: (rule) => rule.required()
        }),
        defineField({
          name: 'figure',
          title: 'Figure',
          type: 'figure',
          hidden: ({ parent }) => parent?.variant !== 'figure',
          validation: (rule, context) => (context?.hidden ? rule.skip() : rule.required())
        }),
        defineField({
          name: 'copyBlock',
          title: 'Copy Block',
          type: 'copyBlock',
          hidden: ({ parent }) => parent?.variant !== 'copyBlock',
          validation: (rule, context) => (context?.hidden ? rule.skip() : rule.required())
        })
      ],
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'placement',
      title: 'Placement',
      type: 'object',
      fields: [
        defineField({
          name: 'base',
          title: 'Base',
          type: 'column',
          initialValue: { start: 1, span: 12 },
          validation: (rule) => rule.required()
        }),
        defineField({
          name: 'medium',
          title: 'Medium',
          type: 'column'
        }),
        defineField({
          name: 'large',
          title: 'Large',
          type: 'column'
        })
      ]
    })
  ],
  icon: SquareIcon,
  preview: {
    select: {
      body: 'content.copyBlock.body',
      caption: 'content.figure.caption',
      heading: 'content.copyBlock.heading',
      variant: 'content.variant'
    },
    prepare({ body, caption, heading, variant }) {
      return {
        title: heading || (body && toPlainText(body)) || caption,
        subtitle: variant && capitalCase(variant)
      }
    }
  }
})
