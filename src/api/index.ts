import { sanityClient } from 'sanity:client'
import type { Slug } from '@sanity/types'
import groq from 'groq'

interface CustomImageAssetRef {
  _ref: string
}
export interface CustomImageAsset {
  asset: CustomImageAssetRef
  alt?: string
}
interface Gallery {
  images: CustomImageAsset[]
}
export interface Project {
	title: string
  slug: Slug
  location?: string
	description?: string
	gallery?: Gallery
}

export async function getProjects(): Promise<Project[]> {
  return await sanityClient.fetch(
    groq`*[_type == 'project']`
  )
}

export async function getProject(slug: Slug): Promise<Project> {
  return await sanityClient.fetch(
    groq`*[_type == 'project' && slug.current == $slug][0]`,
    {
      slug,
    }
  )
}
