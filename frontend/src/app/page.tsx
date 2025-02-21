'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { LogoCarousel } from "@/components/ui/carousel";
import { Timeline } from "@/components/ui/timeline"
import { TestimonialCard } from "@/components/ui/testimonial-card"
import { useMediaQuery } from "@/hooks/useMediaQuery";

const DesktopHero = () => (
  <section className="relative w-full min-h-[100svh] overflow-hidden">
    <div className="absolute inset-0">
      <Image
        src="/images/ectsyawo.png"
        alt="Etornam Tsyawo Hero Background"
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
        quality={90}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/60" />
    </div>
    <div className="container relative h-full min-h-[100svh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-[90%] sm:max-w-[80%] md:max-w-[800px] space-y-6 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tighter text-white animate-fade-in">
          Inspire Your Audience to Action
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-white/90 animate-fade-in-up max-w-[600px] mx-auto">
          At Your Next Event
        </p>
        <div className="flex justify-center gap-4 animate-fade-in-up delay-300 pt-6">
          <Link href="/speaking">
            <Button 
              size="lg" 
              variant="default" 
              className="text-base hover:scale-105 transition-transform px-6 py-6 h-auto"
            >
              Discover How
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </section>
);

const MobileHero = () => (
  <section className="relative w-full min-h-[100svh] overflow-hidden bg-black">
    <div className="absolute inset-0">
      <Image
        src="/images/ectsyawo-mobile.png"
        alt="Etornam Tsyawo Hero Background"
        fill
        className="object-cover object-[30%_center] opacity-80"
        priority
        sizes="(max-width: 768px) 100vw"
        quality={90}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
    </div>
    <div className="relative h-full min-h-[100svh] flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-[85%] space-y-4 text-center">
          <h1 className="text-3xl font-bold leading-tight tracking-tighter text-white animate-fade-in">
            Inspire Your Audience to Action
          </h1>
          <p className="text-base text-white/90 animate-fade-in-up">
            At Your Next Event
          </p>
          <div className="flex justify-center animate-fade-in-up delay-300 pt-6">
            <Link href="/speaking" className="w-[200px]">
              <Button 
                size="lg" 
                variant="default" 
                className="w-full text-sm hover:scale-105 transition-transform py-4 h-auto"
              >
                Discover How
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default function Home() {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  const timeline = [
    { year: "2024-present", events: [
      "Doctoral research studying consumer food practices at the domestic level",
      "Traveled the length and breadth of Ghana to study food practices of consumers at home and micro food scale level"
    ]},
    { year: "2023-present", events: "Running FoodPulse, a food education content platform educating consumers on food choices" },
    { year: "2023-2024", events: "Worked briefly as a food product developer in a food processing company" },
    { year: "2023", events: 'Pivoted L&J Foods Ltd to FoodPulse after dealing with depression from "failure" of L&J Foods' },
    { year: "2022-present", events: "Speaking on food systems topics at different events" },
    { year: "2021-2023", events: [
      "Pursued a masters in food science and technology with a focus on food safety in the pork open market in Ghana",
      "Started L&J Foods company Ltd",
      "Led a team to train rural farmers on sustainable farming practices"
    ]},
    { year: "2019", events: "Started another with a partner on campus (also failed)" },
    { year: "2018", events: "Started a small food business from my university dorm (later failed)" },
    { year: "2017", events: "Developed a process to extend the shelf life of taro leave (highly perishable leafy vegetable) from 3 days to 21 days" },
    { year: "2015", events: "Got inspired through an argument with mum and started exploring" }
  ];

  const organizationLogos = [
    { src: "/logos/centreforgreengrowth.png", alt: "Centre for Green Growth", sizes: "(max-width: 768px) 33vw, 20vw", priority: true },
    { src: "/logos/graffiland.png", alt: "GraffiLand", sizes: "(max-width: 768px) 33vw, 20vw", priority: true },
    { src: "/logos/womeninengineeringGhIE.png", alt: "Women in Engineering GhIE", sizes: "(max-width: 768px) 33vw, 20vw", priority: true },
    { src: "/logos/mcfalumniknust.png", alt: "MCF Alumni KNUST", sizes: "(max-width: 768px) 33vw, 20vw", priority: true },
    { src: "/logos/greenafricayouthorganization.png", alt: "Green Africa Youth Organization", sizes: "(max-width: 768px) 33vw, 20vw", priority: true },
    { src: "/logos/thefooddiscourse.png", alt: "The Food Discourse", sizes: "(max-width: 768px) 33vw, 20vw", priority: true },
  ];

  const mediaGallery = [
    {
      type: "image",
      src: "/gallery/farmer-training.jpg",
      alt: "Farmers training",
      title: "Farmers trained on sustainable farming practices",
      sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
    },
    {
      type: "image",
      src: "/gallery/resource-persons.jpg",
      alt: "Facilitators of farmers training",
      title: "Some facilitators of farmers training program",
      sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
    },
    {
      type: "image",
      src: "/gallery/lnjfoods-team.jpg",
      alt: "LnJ Foods team",
      title: "The LnJ Foods team",
      sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
    },
    {
      type: "image",
      src: "/gallery/pork-research.jpg",
      alt: "Lab work during pork research",
      title: "Lab work during pork research",
      sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
    },
    {
      type: "image",
      src: "/gallery/teaching.jpg",
      alt: "Teaching concepts in food science",
      title: "Teaching concepts in food science",
      sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
    },
    {
      type: "image",
      src: "/gallery/field-studies-western.jpg",
      alt: "Field studies in Western Ghana",
      title: "Field studies in Western Ghana",
      sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
    },
    {
      type: "image",
      src: "/gallery/field-studies-volta.jpg",
      alt: "Field studies in Volta Ghana",
      title: "Field studies in Volta Ghana",
      sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
    },
    {
      type: "image",
      src: "/gallery/bucket-garden.jpg",
      alt: "My thriving bucket garden",
      title: "My thriving bucket garden",
      sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
    },
    {
      type: "image",
      src: "/gallery/food-safety-labwork.jpg",
      alt: "Food safety lab work",
      title: "Food safety lab work",
      sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
    },
    {
      type: "image",
      src: "/gallery/research-poster-presentation.jpg",
      alt: "Research poster presentation",
      title: "Research poster presentation",
      sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
    },
    {
      type: "image",
      src: "/gallery/published-research.jpg",
      alt: "Published research",
      title: "Published research",
      sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
    },
    {
      type: "image",
      src: "/gallery/panel-speaking.jpg",
      alt: "Panel speaking",
      title: "Panel speaking",
      sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
    }
  ];

  return (
    <div className="flex flex-col items-center">
      {isDesktop ? <DesktopHero /> : <MobileHero />}

      {/* Speaking Section with Logo Carousel */}
      <section className="container py-8 md:py-16">
        <div className="space-y-6 md:space-y-8 animate-fade-in-up px-4 md:px-0">
          <h2 className="mb-4 md:mb-8 text-center text-2xl md:text-3xl font-bold">Speaking Engagements</h2>
          <div className="mb-4 md:mb-8 text-center">
            <p className="max-w-[800px] mx-auto text-base md:text-lg text-muted-foreground">
              
            </p>
          </div>
          <LogoCarousel logos={organizationLogos} />

          {/* Testimonials */}
          <div className="text-center mb-4 md:mb-8">
            <h3 className="text-lg md:text-xl text-muted-foreground font-bold mb-4">
              Trusted by notable organizations to deliver impactful talks
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <TestimonialCard
              quote="Etornam's collaborative spirit, professionalism and effective communication significantly contributed to the success of the event"
              author="Nana Minta Asiedu"
              role="Program Lead"
              organization="Green Africa Youth Organization"
              initials="NM"
            />
            <TestimonialCard
              quote="We were extremely impressed by Etornam's passion and problem-solving approach."
              author="Melissa Forson"
              role="Project Officer"
              organization="Center for Green Growth"
              initials="MF"
            />
          </div>

          {/* Speaking Style Card */}
          <div className="mt-8 md:mt-16 max-w-3xl mx-auto">
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-3xl" />
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/10 to-primary/20 rounded-3xl blur-2xl opacity-50" />
              
              {/* Content */}
              <div className="relative p-6 md:p-8 bg-background/80 backdrop-blur-sm rounded-3xl border border-primary/10 shadow-lg space-y-6">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg
                      className="h-6 w-6 text-primary"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                      />
                    </svg>
                  </div>
                </div>

                <div className="space-y-6 text-center">
                  <p className="text-xl md:text-2xl font-medium leading-relaxed">
                    My speaking style is engaging and informative, offering practical insights your audience can implement almost immediately.
                  </p>
                  
                  <div className="h-px w-1/4 mx-auto bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
                  
                  <p className="text-lg text-muted-foreground">
                    If your goal is to ensure your audience are able to act on what&apos;s shared at the event, then you&apos;re at the right place.
                  </p>

                  <div className="pt-4">
                    <p className="text-lg font-medium text-primary">
                      Want to inspire your audience to action at your next event?
                    </p>
                  </div>
                </div>

                <div className="flex justify-center pt-6">
                  <Link href="/speaking" className="group">
                    <Button 
                      size="lg" 
                      className="relative overflow-hidden px-8 py-6 h-auto text-base hover:scale-105 transition-all duration-300"
                    >
                      <span className="relative z-10">Yes, I want to</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/10 to-primary/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section with Hover Effect */}
      <section className="container py-8 md:py-16">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center animate-fade-in-up px-4 md:px-0">
          <div className="relative aspect-square max-w-[400px] md:max-w-[600px] w-full mx-auto group">
            <Image
              src="/images/about-etornam-tsyawo.jpg"
              alt="Etornam C. Tsyawo"
              fill
              priority
              className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              quality={90}
            />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">About Me</h2>
            <p className="text-base md:text-lg text-muted-foreground mb-6">
              A food systems expert with a passion for bridging research and practical implementation.
              Focused on nutrient preservation in home cooking and improving food practices globally.
            </p>
            <Link 
              href="http://buymeacoffee.com/etornamctsyawo/how-my-food-journey-began"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-full md:w-auto hover:scale-105 transition-transform group">
                <span>My Story</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Research & Insights with Gradient */}
      <section className="container py-8 md:py-16 bg-gradient-to-b from-muted/50 to-background">
        <div className="max-w-[800px] mx-auto text-center animate-fade-in-up px-4 md:px-0">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Research & Insights</h2>
          <p className="text-base md:text-lg text-muted-foreground mb-4 md:mb-6">
            PhD Research focusing on nutrient preservation in home cooking, 
            providing valuable insights for smart kitchen manufacturers, 
            consumers, NGOs, and policymakers.
          </p>
          <Link href="/research">
            <Button className="w-full md:w-auto hover:scale-105 transition-transform">
              Collaborate on Research
            </Button>
          </Link>
        </div>
      </section>

      {/* Professional Timeline with Animation */}
      <section className="container py-8 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center animate-fade-in px-4 md:px-0">Professional Journey</h2>
        <div className="max-w-3xl mx-auto px-4 md:px-0">
          <Timeline items={timeline} />
        </div>
      </section>

      {/* FoodPulse Platform with Card Effect */}
      <section className="container py-8 md:py-16">
        <div className="text-center max-w-[800px] mx-auto bg-muted/50 p-6 md:p-8 rounded-2xl shadow-lg animate-fade-in-up mx-4 md:mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">FoodPulse</h2>
          <p className="text-base md:text-lg text-muted-foreground mb-4 md:mb-6">
            Your hub for consumer-focused food education, bringing together 
            insights, research, and practical knowledge.
          </p>
          <Link href="https://foodpulse.co/" target="_blank" rel="noopener noreferrer">
            <Button className="w-full md:w-auto hover:scale-105 transition-transform">
              Explore FoodPulse
            </Button>
          </Link>
        </div>
      </section>

      {/* Media Gallery with Hover Effects */}
      <section className="container py-8 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center animate-fade-in-up px-4 md:px-0">Media Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 px-4 md:px-0">
          {mediaGallery.map((item, index) => (
            <div 
              key={index}
              className="group relative aspect-video rounded-lg overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1200px) 33vw, 400px"
                quality={85}
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 md:transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 text-white">
                  <h3 className="text-base md:text-lg font-semibold">{item.title}</h3>
                </div>
              </div>
              {/* Mobile-only title overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-black/60 md:hidden">
                <h3 className="text-base text-white font-semibold">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
