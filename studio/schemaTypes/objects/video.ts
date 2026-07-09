import { VideoIcon } from '@sanity/icons/Video'
import { defineField, defineType } from 'sanity'

export const video = defineType({
  name: 'video',
  title: 'Video',
  type: 'object',
  fields: [
    defineField({
      name: 'source',
      title: 'Source',
      type: 'mux.video',
      options: { collapsible: false },
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string'
    })
  ],
  options: { collapsible: false },
  icon: VideoIcon
})
