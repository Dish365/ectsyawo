"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"

interface TimelineItemProps {
  year: string
  events: string | string[]
}

export function Timeline({ items }: { items: TimelineItemProps[] }) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-16 top-0 bottom-0 w-[1px] bg-border" />

      <div className="space-y-12">
        {items.map((item, index) => (
          <div
            key={index}
            className="relative pl-28 group"
            style={{
              animationDelay: `${index * 200}ms`,
            }}
          >
            {/* Dot on the timeline */}
            <div className="absolute left-[60px] top-4 h-3 w-3 rounded-full border border-border bg-background ring-[3px] ring-background" />
            
            {/* Year label */}
            <div className="absolute left-0 w-14 text-sm font-medium text-foreground mt-4">
              {item.year}
            </div>

            {/* Content */}
            <Card className="p-4 transition-all duration-200 hover:shadow-md">
              <div className="space-y-1">
                {Array.isArray(item.events) ? (
                  <ul className="list-none space-y-2">
                    {item.events.map((event, eventIndex) => (
                      <li 
                        key={eventIndex}
                        className="relative pl-4 before:absolute before:left-0 before:top-[0.6em] before:h-1 before:w-1 before:rounded-full before:bg-border"
                      >
                        {event}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>{item.events}</p>
                )}
              </div>
            </Card>

            {/* Connecting line to next item */}
            {index < items.length - 1 && (
              <div className="absolute left-16 top-4 w-[1px] bg-border h-[calc(100%+3rem)]" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
} 