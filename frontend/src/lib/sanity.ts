import { createClient } from '@sanity/client';
import { Post } from './types';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-02-20',
  useCdn: process.env.NODE_ENV === 'production',
});

export async function getLatestPosts(limit = 5): Promise<Post[]> {
  return client.fetch(`
    *[_type == "post"] | order(publishedAt desc)[0...${limit}] {
      _id,
      title,
      "slug": slug.current,
      "excerpt": pt::text(body),
      "category": categories[0]->title,
      "author": author->name,
      "imageUrl": mainImage.asset->url,
      publishedAt
    }
  `);
}

export async function getFeaturedPost(): Promise<Post | null> {
  return client.fetch(`
    *[_type == "post"][0] {
      _id,
      title,
      "slug": slug.current,
      "excerpt": pt::text(body),
      "category": categories[0]->title,
      "author": author->name,
      "imageUrl": mainImage.asset->url,
      publishedAt
    }
  `);
}

export async function getPostsByCategory(category: string): Promise<Post[]> {
  return client.fetch(`
    *[_type == "post" && categories[0]->title == $category] | order(publishedAt desc) {
      _id,
      title,
      "slug": slug.current,
      "excerpt": pt::text(body),
      "category": categories[0]->title,
      "author": author->name,
      "imageUrl": mainImage.asset->url,
      publishedAt
    }
  `, { category });
}

export async function getPost(slug: string): Promise<Post | null> {
  const post = await client.fetch(`
    *[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      "slug": slug.current,
      "category": categories[0]->title,
      "author": author->name,
      body[] {
        ...,
        _type == "image" => {
          ...,
          "url": asset->url,
          "alt": alt
        }
      },
      "imageUrl": mainImage.asset->url,
      publishedAt
    }
  `, { slug });
  
  console.log('Sanity response:', JSON.stringify(post, null, 2));
  return post;
} 