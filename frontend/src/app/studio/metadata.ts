import { metadata as studioMetadata } from 'next-sanity/studio'

// Server-side metadata configuration
export const metadata = {
  ...studioMetadata,
  title: 'Sanity Studio',
  description: 'Content management system powered by Sanity.io',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
} 