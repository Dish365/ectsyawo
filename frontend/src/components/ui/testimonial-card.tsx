"use client"

import * as React from "react"
import { Card } from "@/components/ui/card"
import { QuoteIcon } from "lucide-react"

interface TestimonialProps {
  quote: string
  author: string
  role: string
  organization: string
  initials: string
}

export function TestimonialCard({ quote, author, role, organization, initials }: TestimonialProps) {
  return (
    <Card className="p-6 h-full flex flex-col">
      <div className="flex-1">
        <div className="mb-4">
          <QuoteIcon className="h-8 w-8 text-muted-foreground/50" />
        </div>
        <blockquote className="text-lg text-muted-foreground mb-4">
          &ldquo;{quote}&rdquo;
        </blockquote>
      </div>
      <div className="flex items-center gap-4 pt-4 border-t">
        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium">
          {initials}
        </div>
        <div>
          <div className="font-semibold">{author}</div>
          <div className="text-sm text-muted-foreground">
            {role}, {organization}
          </div>
        </div>
      </div>
    </Card>
  )
} 