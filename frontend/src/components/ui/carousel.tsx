"use client"

import * as React from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import Autoplay from "embla-carousel-autoplay"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./carousel-base"

interface LogoCarouselProps {
  logos: Array<{
    src: string
    alt: string
    sizes: string
    priority?: boolean
  }>
}

export function LogoCarousel({ logos }: LogoCarouselProps) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      <div className="overflow-hidden px-4 sm:px-6 md:px-8">
        <Carousel
          opts={{
            align: "center",
            loop: true,
            skipSnaps: false,
            slidesToScroll: 1,
          }}
          plugins={[plugin.current]}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {logos.map((logo, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4">
                <Card className="p-2 md:p-3 hover:shadow-lg transition-all duration-300">
                  <div className="relative aspect-[3/2] w-full">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      fill
                      priority={logo.priority}
                      className="object-contain p-2 transition-transform duration-300 hover:scale-105"
                      sizes={logo.sizes}
                    />
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 px-2 sm:px-4 md:px-8">
            <CarouselPrevious className="absolute left-0 sm:-left-4 md:-left-8 h-8 w-8 rounded-full opacity-50 hover:opacity-100 transition-opacity" />
            <CarouselNext className="absolute right-0 sm:-right-4 md:-right-8 h-8 w-8 rounded-full opacity-50 hover:opacity-100 transition-opacity" />
          </div>
        </Carousel>
      </div>
    </div>
  )
} 