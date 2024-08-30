import { sanityClient } from 'sanity:client'
import type { Slug } from '@sanity/types'
import groq from 'groq'

interface CustomImageAssetRef {
  _ref: string
}
interface CustomImageAsset {
  asset: CustomImageAssetRef
}
export interface Project {
	title: string
  slug: Slug
  location?: string
	description?: string
	image?: CustomImageAsset
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
