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

// Client-side layout component
'use client'

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, height: '100dvh' }}>
        {children}
      </body>
    </html>
  )
} 