import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { LogoCarousel } from "@/components/ui/carousel";
import { Timeline } from "@/components/ui/timeline"
import { TestimonialCard } from "@/components/ui/testimonial-card"

export default function Home() {
  const timeline = [
    { year: "2024-present", events: [
      "Doctoral research studying how nutrients can be better retained in food during cooking at home",
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
    { src: "/logos/centreforgreengrowth.png", alt: "Centre for Green Growth", sizes: "(max-width: 768px) 33vw, 20vw" },
    { src: "/logos/graffiland.png", alt: "GraffiLand", sizes: "(max-width: 768px) 33vw, 20vw" },
    { src: "/logos/womeninengineeringGhIE.png", alt: "Women in Engineering GhIE", sizes: "(max-width: 768px) 33vw, 20vw" },
    { src: "/logos/mcfalumniknust.png", alt: "MCF Alumni KNUST", sizes: "(max-width: 768px) 33vw, 20vw" },
    { src: "/logos/greenafricayouthorganization.png", alt: "Green Africa Youth Organization", sizes: "(max-width: 768px) 33vw, 20vw" },
    { src: "/logos/thefooddiscourse.png", alt: "The Food Discourse", sizes: "(max-width: 768px) 33vw, 20vw" },
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
      {/* Hero Section with Parallax */}
      <section className="relative w-full h-[80vh] min-h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/ectsyawo.png"
            alt="Etornam Tsyawo Hero Background"
            fill
            className="object-cover object-center"
            priority
            sizes="(max-width: 1400px) 100vw, 1400px"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50" />
        </div>
        <div className="container relative h-full flex flex-col items-center justify-center gap-6 text-white">
          <h1 className="text-center text-4xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1] animate-fade-in max-w-[800px]">
            Inspire Your Audience to Action
          </h1>
          <p className="text-center text-lg sm:text-xl animate-fade-in-up">
            At Your Next Event
          </p>
          <div className="flex gap-4 animate-fade-in-up delay-300 mt-4">
            <Link href="/speaking">
              <Button size="lg" variant="default" className="hover:scale-105 transition-transform">
                Discover How
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Speaking Section with Logo Carousel */}
      <section className="container py-16">
        <div className="space-y-8 animate-fade-in-up">
          <h2 className="mb-8 text-center text-3xl font-bold">Speaking Engagements</h2>
          <div className="mb-8 text-center">
            <p className="max-w-[800px] mx-auto text-lg text-muted-foreground">
              
            </p>
          </div>
          <LogoCarousel logos={organizationLogos} />

          {/* Testimonials */}
          <div className="text-center mb-8">
            <h3 className="text-xl text-muted-foreground font-bold mb-4">
              Trusted by notable organizations to deliver impactful talks
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
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
          <div className="mt-16 max-w-3xl mx-auto">
            
              <p className="text-lg leading-relaxed text-muted-foreground">
                My speaking style is engaging and informative, offering practical insights your audience can implement almost immediately. 
              
                If your goal is to ensure your audience are able to act on what&apos;s shared at the event, then you&apos;re at the right place.
                
                Want to inspire your audience to action at your next event?
               
              </p>
            
          </div>

          <div className="text-center mt-12">
            <Link href="/speaking">
              <Button size="lg" className="hover:scale-105 transition-transform">
                Yes, I want to
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Me Section with Hover Effect */}
      <section className="container py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center animate-fade-in-up">
          <div className="relative aspect-square max-w-[600px] w-full mx-auto group">
            <Image
              src="/images/about-etornam-tsyawo.jpg"
              alt="Etornam C. Tsyawo"
              fill
              className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              quality={90}
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-muted-foreground mb-6">
              A food systems expert with a passion for bridging research and practical implementation.
              Focused on nutrient preservation in home cooking and improving food practices globally.
            </p>
            <Link href="/about">
              <Button className="hover:scale-105 transition-transform">My Story</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Research & Insights with Gradient */}
      <section className="container py-16 bg-gradient-to-b from-muted/50 to-background">
        <div className="max-w-[800px] mx-auto text-center animate-fade-in-up">
          <h2 className="text-3xl font-bold mb-4">Research & Insights</h2>
          <p className="text-muted-foreground mb-6">
            PhD Research focusing on nutrient preservation in home cooking, 
            providing valuable insights for smart kitchen manufacturers, 
            consumers, NGOs, and policymakers.
          </p>
          <Link href="/research">
            <Button className="hover:scale-105 transition-transform">
              Collaborate on Research
            </Button>
          </Link>
        </div>
      </section>

      {/* Professional Timeline with Animation */}
      <section className="container py-16">
        <h2 className="text-3xl font-bold mb-12 text-center animate-fade-in">Professional Journey</h2>
        <div className="max-w-3xl mx-auto">
          <Timeline items={timeline} />
        </div>
      </section>

      {/* FoodPulse Platform with Card Effect */}
      <section className="container py-16">
        <div className="text-center max-w-[800px] mx-auto bg-muted/50 p-8 rounded-2xl shadow-lg animate-fade-in-up">
          <h2 className="text-3xl font-bold mb-4">FoodPulse</h2>
          <p className="text-muted-foreground mb-6">
            Your hub for consumer-focused food education, bringing together 
            insights, research, and practical knowledge.
          </p>
          <Link href="https://foodpulse.co/" target="_blank" rel="noopener noreferrer">
            <Button className="hover:scale-105 transition-transform">
              Explore FoodPulse
            </Button>
          </Link>
        </div>
      </section>

      {/* Media Gallery with Hover Effects */}
      <section className="container py-16">
        <h2 className="text-3xl font-bold mb-8 text-center animate-fade-in-up">Media Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                sizes={item.sizes}
                quality={85}
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
