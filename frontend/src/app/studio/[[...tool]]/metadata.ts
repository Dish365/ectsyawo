export { metadata, viewport } from 'next-sanity/studio'

// Ensures the Studio route is statically generated
export const dynamic = 'force-static'
export const runtime = 'edge' 