import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Projeto',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (rule) => rule.required(),
      options: {
        source: 'name'
      }
    }),
    defineField({
      name: 'gallery',
      title: 'Galeria',
      type: 'object',
      fields: [
        {
          name: 'images',
          type: 'array',
          title: 'Images',
          validation: rule => rule.required().min(1).max(3),
          of: [
            {
              name: 'image',
              type: 'image',
              title: 'Image',
              options: {
                hotspot: true,
              },
              fields: [
                {
                  name: 'alt',
                  type: 'string',
                  title: 'Alternative text',
                },
              ],
            },
          ],
          options: {
            layout: 'grid',
          },
        }
      ]
    }),
    defineField({
      name: 'location',
      title: 'Localização',
      type: 'string',
    })
  ]
})