export { metadata, viewport } from 'next-sanity/studio'

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="studio-container">
      {children}
    </div>
  )
} 