import { CubeIcon } from '@sanity/icons/Cube'
import { capitalCase } from 'change-case'
import { defineField, defineType } from 'sanity'

// TODO: decide on spacing options and how they should map to frontend
const spacingOptions = [{ title: 'None', value: 'none' }]

export const section = defineType({
  name: 'section',
  title: 'Section',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string'
    }),
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
              { title: 'Grid', value: 'grid' },
              { title: 'Figure', value: 'figure' }
            ],
            layout: 'radio',
            direction: 'horizontal'
          },
          initialValue: 'grid',
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
          name: 'grid',
          title: 'Grid',
          type: 'grid',
          hidden: ({ parent }) => parent?.variant !== 'grid',
          validation: (rule, context) => (context?.hidden ? rule.skip() : rule.required())
        })
      ],
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'spacing',
      title: 'Spacing',
      type: 'object',
      fields: [
        defineField({
          name: 'above',
          title: 'Above',
          type: 'string',
          options: { list: spacingOptions }
        }),
        defineField({
          name: 'below',
          title: 'Below',
          type: 'string',
          options: { list: spacingOptions }
        })
      ],
      options: { columns: 2 },
      initialValue: { above: 'none', below: 'none' }
    })
  ],
  icon: CubeIcon,
  preview: {
    select: { name: 'name', variant: 'content.variant' },
    prepare({ name, variant }) {
      return {
        title: name,
        subtitle: variant && capitalCase(variant)
      }
    }
  }
})
