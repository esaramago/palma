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
      validation: (Rule) => Rule.required(),
      options: {
        source: 'name'
      }
    }),
    defineField({
      name: 'image',
      title: 'Imagem',
      type: 'image'
    }),
    defineField({
      name: 'location',
      title: 'Localização',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Descrição',
      type: 'string',
    }),
  ]
})