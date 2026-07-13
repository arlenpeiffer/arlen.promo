import { LinkIcon } from '@sanity/icons/Link'
import { defineField, defineType } from 'sanity'

export const link = defineType({
  name: 'link',
  title: 'Link',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: (rule) => rule.uri({ scheme: ['http', 'https', 'mailto', 'tel'] }).required()
    })
  ],
  icon: LinkIcon,
  preview: {
    select: { label: 'label', url: 'url' },
    prepare({ label, url }) {
      return {
        title: label,
        subtitle: url
      }
    }
  }
})
