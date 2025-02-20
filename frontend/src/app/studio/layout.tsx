'use client'

import { metadata as studioMetadata } from 'next-sanity/studio'

export const metadata = {
  ...studioMetadata,
  title: 'Sanity Studio',
  description: 'Content management system powered by Sanity.io',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

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