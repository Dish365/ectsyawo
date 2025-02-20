'use client'

/**
 * This route is responsible for the built-in authoring environment using Sanity Studio.
 * All routes under your studio path is handled by this file using Next.js' catch-all routes:
 * https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes
 *
 * You can learn more about the next-sanity package here:
 * https://github.com/sanity-io/next-sanity
 */

// Export metadata at the top level (server-side)
export { metadata, viewport } from 'next-sanity/studio'

// Mark the rest as client-side
'use client'

import { NextStudio } from 'next-sanity/studio'
import config from '../../../../sanity.config'

// Ensures the Studio route is statically generated
export const dynamic = 'force-static'
export const runtime = 'edge'

export default function StudioPage() {
  return <NextStudio config={config} />
}
