# ectsyawo.com Development Guide

## Technology Stack

### Core Architecture
- **Framework**: Next.js 15.1 (App Router)
- **UI Library**: React 19 + Server Components
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS v3.4 + CSS Modules

### Critical Dependencies
```json
{
"dependencies": {
"next": "15.1.0",
"react": "19.0.0",
"react-dom": "19.0.0",
"typescript": "^5.4.0",
"tailwindcss": "^3.4.0",
"shadcn-ui": "^1.0.0",
"@sanity/client": "^6.12.0",
"next-sitemap": "^4.2.0",
"next-themes": "^0.3.0"
},
"overrides": {
"react-is": "^19.0.0-rc-69d4b800-20241021"
}
}
```

## Implementation Strategy

### React 19 Compatibility
1. Install with legacy peer dependencies:
```bash
npm install --legacy-peer-deps
```

2. Use React Server Components for static content:

### UI Components System
1. Configure shadcn/ui with:
```bash
npx shadcn@latest init --force
```
2. Example card component:
```tsx
// components/ui/card.tsx
import { cn } from "@/lib/utils"
import { cva } from "class-variance-authority"

const cardVariants = cva(
  "rounded-lg border bg-card text-card-foreground shadow-sm",
  {
    variants: {
      variant: {
        default: "border-sage-200",
        elevated: "border-transparent shadow-lg"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
)

export const Card = ({ className, variant, ...props }) => (
  <div className={cn(cardVariants({ variant, className }))} {...props} />
)
```

### Performance Optimization
1. Dynamic imports for heavy sections:
```tsx
// app/speaking/page.tsx
import dynamic from 'next/dynamic'

const VideoTestimonials = dynamic(
  () => import('@/components/video-testimonials'),
  { 
    loading: () => <Skeleton className="h-[400px] w-full" />,
    ssr: false
  }
)
```

### Content Management
1. Sanity.io content model example:
```javascript
// schemas/post.js
export default {
  name: 'post',
  title: 'Insight Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'readingTime',
      title: 'Reading Time (minutes)',
      type: 'number'
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{type: 'block'}]
    }
  ]
}
```

## Deployment Pipeline

### Vercel Configuration
```json
// vercel.json
{
  "build": {
    "env": {
      "NEXT_PUBLIC_SANITY_PROJECT_ID": "@sanity_project_id",
      "NEXT_PUBLIC_GA_ID": "@google_analytics_id"
    }
  },
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "SAMEORIGIN"
        }
      ]
    }
  ]
}
```

## Maintenance Practices

1. **Performance Monitoring**:
```bash
npx next build --profile
```
2. **Component Testing**:
```tsx
// components/__tests__/Card.test.tsx
test('renders elevated variant', () => {
  render(<Card variant="elevated" />)
  expect(screen.getByRole('article')).toHaveClass('shadow-lg')
})
```

## Key Implementation Patterns

| Feature          | Implementation Strategy                |
|------------------|----------------------------------------|
| SEO Optimization | Next.js Metadata API + Schema.org      |
| Analytics        | Vercel Web Analytics + Custom Events  |
| Security         | CSP Headers + Sanitize-html            |
| Responsive Design| Tailwind Breakpoints + CSS Grid        |
```

This guide provides a complete development framework aligned with the website documentation requirements. Would you like me to elaborate on any specific section?



