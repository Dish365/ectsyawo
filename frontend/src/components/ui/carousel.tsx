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
  }>
}

export function LogoCarousel({ logos }: LogoCarouselProps) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <div className="relative w-full max-w-5xl mx-auto px-12">
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
        <CarouselContent className="-ml-2 md:-ml-3">
          {logos.map((logo, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-3 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <Card className="p-2 hover:shadow-lg transition-all duration-300">
                <div className="relative aspect-[3/2] w-full">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain p-2 transition-transform duration-300 hover:scale-105"
                    sizes={logo.sizes}
                  />
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0">
          <CarouselPrevious className="absolute left-0 h-8 w-8 rounded-full opacity-50 hover:opacity-100 transition-opacity" />
          <CarouselNext className="absolute right-0 h-8 w-8 rounded-full opacity-50 hover:opacity-100 transition-opacity" />
        </div>
      </Carousel>
    </div>
  )
} 