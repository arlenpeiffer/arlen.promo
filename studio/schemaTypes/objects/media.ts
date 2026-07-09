import { ImagesIcon } from '@sanity/icons/Images'
import { defineField, defineType } from 'sanity'

export const media = defineType({
  name: 'media',
  title: 'Media',
  type: 'object',
  fields: [
    defineField({
      name: 'variant',
      title: 'Variant',
      type: 'string',
      options: {
        list: [
          { title: 'Image', value: 'image' },
          { title: 'Video', value: 'video' }
        ],
        layout: 'radio',
        direction: 'horizontal'
      },
      initialValue: 'image',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      hidden: ({ parent }) => parent?.variant !== 'image',
      validation: (rule, context) => (context?.hidden ? rule.skip() : rule.required())
    }),
    defineField({
      name: 'video',
      title: 'Video',
      type: 'video',
      hidden: ({ parent }) => parent?.variant !== 'video',
      validation: (rule, context) => (context?.hidden ? rule.skip() : rule.required())
    })
  ],
  options: { collapsible: false },
  icon: ImagesIcon
})
