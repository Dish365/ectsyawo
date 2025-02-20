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