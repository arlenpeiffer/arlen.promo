import { BlockContentIcon } from '@sanity/icons/BlockContent'
import { defineArrayMember, defineField, defineType } from 'sanity'

export const copyBlock = defineType({
  name: 'copyBlock',
  title: 'Copy Block',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string'
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: [],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' }
            ],
            annotations: [{ type: 'link' }]
          }
        })
      ]
    })
  ],
  options: { collapsible: false },
  icon: BlockContentIcon
})
