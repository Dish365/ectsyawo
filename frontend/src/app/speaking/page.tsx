"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { sendContactEmail } from "../actions";
import { useFormStatus } from "react-dom";
import { useActionState } from "react";
import Image from "next/image";
import { LogoCarousel } from "@/components/ui/carousel";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

const speakingServices = [
  {
    title: "Guest Speaking",
    description: "Thought-provoking keynotes that inspire action and drive change in food systems",
    icon: (
      <svg
        className="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
        />
      </svg>
    ),
    audience: "Conferences, Corporate Events, Industry Summits"
  },
  {
    title: "Workshops & Seminars",
    description: "Interactive sessions that foster learning through hands-on experience and collaboration",
    icon: (
      <svg
        className="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
    audience: "Teams, Organizations, Professional Groups"
  },
  {
    title: "Corporate Training",
    description: "Customized programs that align with your organization's goals and development needs",
    icon: (
      <svg
        className="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    audience: "Businesses, Corporations, Startups"
  },
  {
    title: "Academic Lectures",
    description: "Research-based presentations that bridge theory and practice in food science",
    icon: (
      <svg
        className="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
    audience: "Universities, Research Institutions, Academic Conferences"
  },
  {
    title: "Panel Speaking",
    description: "Expert contributions to discussions that shape the future of food systems",
    icon: (
      <svg
        className="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    audience: "Forums, Industry Panels, Policy Discussions"
  }
];

const testimonials = [
  {
    quote: "Etornam was instrumental in achieving the HD4HL objectives. Her profound knowledge of the subject matter was evident  in the comprehensive insights she shared. She's able to navigate nuanced discussions and align diverse perspectives towards a common goal. Her collaborative spirit, professionalism and effective communication significantly contributed to the success of the event. I wholeheartedly endorse Etornam as a distinguished speaker for any future engagements.",
    author: "Nana Minta Asiedu",
    role: "Program Lead",
    organization: "Green Africa Youth Organization",
    initials: "NM"
  },
  {
    quote: "We invited Etornam as an expert speaker to ot on Addressing Barriers to Achieving Food Security. She shared invaluable insights from her experience. She brough a unique blend of technical expertise and collaborative leadership. Her holistic perspective considers opportunities across the food value chain. Etornam is well-positioned to support new ventures in addressing critical needs around affordability, availability and marketing of nutritious food. We were extremely impressed by her passion and problem-solving approach. ",
    author: "Melissa Forson",
    role: "Project Officer",
    organization: "Center for Green Growth",
    initials: "MF"
  },
  {
    quote: "I left with Etornam's parting words that resonate deeply. Her explanation on the fragmentation of food systems was truly eye-opening.",
    author: "Oluwaseun Ekunda",
    role: "Audience",
    organization: "Healthier Diets 4 Healthy Lives Event",
    initials: "EO"
  }
];

interface FormState {
  success?: boolean;
  error?: string;
  development?: boolean;
}

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="group rounded-lg border border-primary/10 bg-background/80 backdrop-blur-sm hover:border-primary/20 transition-colors">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="flex w-full items-center justify-between p-4 md:p-6"
      >
        <h3 className="text-lg font-semibold text-left">{question}</h3>
        <svg
          className={`h-5 w-5 text-primary transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`grid transition-all duration-200 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          <div className="px-4 md:px-6 pb-4 md:pb-6">
            <p className="text-muted-foreground">
              {answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

function SubmitButton() {
  const { pending } = useFormStatus();
  
  return (
    <Button type="submit" size="lg" disabled={pending}>
      {pending ? "Sending..." : "Send Message"}
    </Button>
  );
}

export default function SpeakingPage() {
  const [state, formAction] = useActionState(async (_prevState: FormState | null, formData: FormData) => {
    const result = await sendContactEmail(formData);
    return result;
  }, null);

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="relative container flex flex-col gap-6 py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[size:40px_40px] [mask-image:radial-gradient(white,transparent_85%)]" />
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
          <div className="absolute h-[40rem] w-[40rem] bg-sage-900/30 blur-[100px] rounded-full" />
        </div>
        <div className="relative flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          <div className="flex flex-col items-center md:items-start space-y-6 flex-1">
            <h1 className="text-center md:text-left text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Speaking
            </h1>
            <p className="max-w-[42rem] text-center md:text-left text-lg text-muted-foreground sm:text-xl">
              Inspire your audience to action at your next event with practical insights and relatable stories
            </p>
            <div className="flex justify-center md:justify-start w-full">
             <Link href="/speaking#speaking" className="w-[200px]">
              <Button size="lg" className="mt-2">
                Contact Me
              </Button>
            </Link>
            </div>
          </div>
          <div className="flex-1 w-full md:w-auto">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-muted">
              <Image
                src="/images/speaking.jpg"
                alt="Etornam speaking at an event"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                quality={90}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured In Section */}
      <section className="container py-16">
        <div className="space-y-8 animate-fade-in-up">
          <h2 className="mb-8 text-center text-3xl font-bold">Featured In</h2>
          <div className="mb-8 text-center">
            <p className="max-w-[800px] mx-auto text-lg text-muted-foreground">
              
            </p>
          </div>
          <LogoCarousel logos={[
            { src: "/logos/centreforgreengrowth.png", alt: "Centre for Green Growth", sizes: "(max-width: 768px) 33vw, 20vw" },
            { src: "/logos/graffiland.png", alt: "GraffiLand", sizes: "(max-width: 768px) 33vw, 20vw" },
            { src: "/logos/womeninengineeringGhIE.png", alt: "Women in Engineering GhIE", sizes: "(max-width: 768px) 33vw, 20vw" },
            { src: "/logos/mcfalumniknust.png", alt: "MCF Alumni KNUST", sizes: "(max-width: 768px) 33vw, 20vw" },
            { src: "/logos/greenafricayouthorganization.png", alt: "Green Africa Youth Organization", sizes: "(max-width: 768px) 33vw, 20vw" },
            { src: "/logos/thefooddiscourse.png", alt: "The Food Discourse", sizes: "(max-width: 768px) 33vw, 20vw" },
          ]} />
        </div>
      </section>

      {/* Why Work With Me Section */}
      <section className="container py-16 bg-muted/50">
        <div className="space-y-8">
          <h2 className="text-center text-3xl font-bold">Why Work With Me</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col items-center text-center space-y-4 p-6">
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
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Practical and Well-Reasoned Ideas</h3>
              <p className="text-muted-foreground">
                Research-backed insights combined with real-world experience to provide actionable solutions for your audience.
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-4 p-6">
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
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Immediately Applicable Insights</h3>
              <p className="text-muted-foreground">
                Practical takeaways that your audience can implement right away for tangible results.
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-4 p-6">
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Highly Engaging Delivery</h3>
              <p className="text-muted-foreground">
                Interactive and dynamic presentations that keep your audience engaged and motivated throughout.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Speaking Services Grid */}
      <section id="services" className="container py-12 md:py-24">
        <div className="space-y-8">
          <h2 className="text-center text-3xl font-bold">Speaking Services</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {speakingServices.map((service) => (
              <Card 
                key={service.title}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="mb-4 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-muted-foreground">
                    <span className="font-medium text-primary">Ideal for: </span>
                    {service.audience}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Speaking Themes Section */}
      <section className="container py-12 md:py-24 bg-gradient-to-b from-background to-muted/50">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Speaking Themes</h2>
            <p className="text-muted-foreground max-w-[800px] mx-auto">
              Expert insights on critical food system topics that matter to your audience
            </p>
          </div>
          
          <div className="grid gap-8 mt-12">
            {/* Food Systems Transformation */}
            <div className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 p-8">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-primary/10 blur-2xl transform group-hover:scale-150 transition-transform duration-500" />
              <div className="relative flex flex-col md:flex-row md:items-center gap-6">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <svg
                    className="h-8 w-8 text-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-2">Food Systems Transformation</h3>
                  <p className="text-muted-foreground">
                    Systemic approaches to creating equitable and sustainable food systems
                  </p>
                </div>
              </div>
            </div>

            {/* Evidence-Based Food Choices */}
            <div className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 p-8">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-primary/10 blur-2xl transform group-hover:scale-150 transition-transform duration-500" />
              <div className="relative flex flex-col md:flex-row md:items-center gap-6">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <svg
                    className="h-8 w-8 text-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-2">Evidence-Based Food Choices</h3>
                  <p className="text-muted-foreground">
                    Data, observation and reason driven strategies for food decision-making in personal and professional settings
                  </p>
                </div>
              </div>
            </div>

            {/* Consumer Food Empowerment */}
            <div className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 p-8">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-primary/10 blur-2xl transform group-hover:scale-150 transition-transform duration-500" />
              <div className="relative flex flex-col md:flex-row md:items-center gap-6">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <svg
                    className="h-8 w-8 text-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-2">Consumer Food Empowerment</h3>
                  <p className="text-muted-foreground">
                    Practical skills for navigating modern food environments
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps in Working Together Section */}
      <section className="container py-12 md:py-24">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Steps in Working Together</h2>
            <p className="text-muted-foreground max-w-[800px] mx-auto">
              A clear and structured process to ensure successful collaboration
            </p>
          </div>

          <div className="relative mt-16">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-primary/20 -translate-x-1/2" />

            {/* Timeline Steps */}
            <div className="space-y-12">
              {/* Step 1 */}
              <div className="relative flex flex-col md:flex-row items-center md:justify-between group">
                <div className="flex items-center gap-4 md:w-[calc(50%-2rem)] md:justify-end order-2 md:order-1">
                  <div className="flex-1 md:flex-none">
                    <h3 className="text-xl font-semibold mb-2">Initial Contact</h3>
                    <p className="text-muted-foreground">Share your event details and requirements</p>
                  </div>
                </div>
                <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-background border-2 border-primary rounded-full -translate-x-1/2 flex items-center justify-center order-1 md:order-2">
                  <span className="text-sm font-bold">1</span>
                </div>
                <div className="md:w-[calc(50%-2rem)] order-3" />
              </div>

              {/* Step 2 */}
              <div className="relative flex flex-col md:flex-row items-center md:justify-between group">
                <div className="md:w-[calc(50%-2rem)] order-2 md:order-1" />
                <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-background border-2 border-primary rounded-full -translate-x-1/2 flex items-center justify-center order-1 md:order-2">
                  <span className="text-sm font-bold">2</span>
                </div>
                <div className="flex items-center gap-4 md:w-[calc(50%-2rem)] order-3">
                  <div className="flex-1 md:flex-none">
                    <h3 className="text-xl font-semibold mb-2">45min Discovery Meeting</h3>
                    <p className="text-muted-foreground">Discuss goals, audience, and desired outcomes</p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex flex-col md:flex-row items-center md:justify-between group">
                <div className="flex items-center gap-4 md:w-[calc(50%-2rem)] md:justify-end order-2 md:order-1">
                  <div className="flex-1 md:flex-none">
                    <h3 className="text-xl font-semibold mb-2">Agreement & Deposit</h3>
                    <p className="text-muted-foreground">Finalize terms and secure the date with 65% deposit</p>
                  </div>
                </div>
                <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-background border-2 border-primary rounded-full -translate-x-1/2 flex items-center justify-center order-1 md:order-2">
                  <span className="text-sm font-bold">3</span>
                </div>
                <div className="md:w-[calc(50%-2rem)] order-3" />
              </div>

              {/* Step 4 */}
              <div className="relative flex flex-col md:flex-row items-center md:justify-between group">
                <div className="md:w-[calc(50%-2rem)] order-2 md:order-1" />
                <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-background border-2 border-primary rounded-full -translate-x-1/2 flex items-center justify-center order-1 md:order-2">
                  <span className="text-sm font-bold">4</span>
                </div>
                <div className="flex items-center gap-4 md:w-[calc(50%-2rem)] order-3">
                  <div className="flex-1 md:flex-none">
                    <h3 className="text-xl font-semibold mb-2">Preparation & Delivery</h3>
                    <p className="text-muted-foreground">Tailored content development and impactful presentation</p>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="relative flex flex-col md:flex-row items-center md:justify-between group">
                <div className="flex items-center gap-4 md:w-[calc(50%-2rem)] md:justify-end order-2 md:order-1">
                  <div className="flex-1 md:flex-none">
                    <h3 className="text-xl font-semibold mb-2">Goal Assessment & Final Payment</h3>
                    <p className="text-muted-foreground">Review success metrics and complete remaining payment</p>
                  </div>
                </div>
                <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-background border-2 border-primary rounded-full -translate-x-1/2 flex items-center justify-center order-1 md:order-2">
                  <span className="text-sm font-bold">5</span>
                </div>
                <div className="md:w-[calc(50%-2rem)] order-3" />
              </div>

              {/* Step 6 */}
              <div className="relative flex flex-col md:flex-row items-center md:justify-between group">
                <div className="md:w-[calc(50%-2rem)] order-2 md:order-1" />
                <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-background border-2 border-primary rounded-full -translate-x-1/2 flex items-center justify-center order-1 md:order-2">
                  <span className="text-sm font-bold">6</span>
                </div>
                <div className="flex items-center gap-4 md:w-[calc(50%-2rem)] order-3">
                  <div className="flex-1 md:flex-none">
                    <h3 className="text-xl font-semibold mb-2">Ongoing Relationship</h3>
                    <p className="text-muted-foreground">Continue collaboration for future speaking engagements</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section className="container py-12 md:py-24">
        <div className="max-w-[58rem] mx-auto">
          <div className="text-center space-y-4 mb-8">
            <h2 className="text-3xl font-bold">Pricing</h2>
            <p className="text-muted-foreground">Transparent pricing for impactful speaking engagements</p>
          </div>
          
          <div className="relative">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-3xl" />
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/10 to-primary/20 rounded-3xl blur-2xl opacity-50" />
            
            {/* Content */}
            <div className="relative p-8 md:p-12 bg-background/80 backdrop-blur-sm rounded-3xl border border-primary/10 shadow-lg">
              <div className="flex flex-col items-center space-y-6">
                <div className="text-center space-y-4">
                  <p className="text-4xl font-bold">
                    Starts at <span className="text-primary">$1,500</span>
                    <span className="text-primary align-super text-sm ml-1">*</span>
                  </p>
                  <div className="flex items-center justify-center gap-4 text-muted-foreground">
                    <span className="inline-flex items-center text-sm">
                      <svg
                        className="h-4 w-4 mr-1 text-primary"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Customized content
                    </span>
                    <span className="inline-flex items-center text-sm">
                      <svg
                        className="h-4 w-4 mr-1 text-primary"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Flexible duration
                    </span>
                  </div>
                </div>

                <div className="w-full max-w-xs pt-6 border-t border-primary/10">
                  <p className="text-center text-sm text-muted-foreground">
                    <span className="text-primary">*</span>
                    Subsidized rates available for academic lectures
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container py-12 md:py-24">
        <div className="max-w-[58rem] mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Common questions about working together</p>
          </div>

          <div className="grid gap-4">
            <FAQItem 
              question="Can I cancel if I'm no longer interested?"
              answer="When you make payment, I immediately begin preparing to ensure we achieve your goals. You can cancel at most a day after making payment."
            />
            <FAQItem 
              question="How do you adapt your content for different audiences?"
              answer="I understand the particular audience, learn about their characteristics and values. If possible, I engage with at least one of them in my preparation stage. It gives me ideas about the kinds of stories and experiences that align with them. I've engaged with audiences from kingdergarten to retirement so there's no need to worry."
            />
            <FAQItem 
              question="What is your speaking style and approach?"
              answer="My approach is using language that resonates with audience, and being highly engaging and informative. I like to use practical typical experiences the audience find themselves in and share stories from my experience that'll likely resonate with them. In all events I delivered, this produced results and maintained audience engagement for a good time, even online events."
            />
            <FAQItem 
              question="Do you offer virtual speaking options?"
              answer="Yes, I do both virtual and in-person events"
            />
            <FAQItem 
              question="What technical requirements do you need for your presentations?"
              answer="I work with what you have once it enables me deliver smoothly."
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="container py-12 md:py-24">
        <div className="mx-auto max-w-[85rem]">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold">What People Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from event organizers and attendees about their experience
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.author}
                className="group relative"
                style={{ 
                  animationDelay: `${index * 150}ms`,
                  animation: 'fade-in-up 1s ease-out forwards'
                }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 via-primary/50 to-primary/10 rounded-2xl blur opacity-20 group-hover:opacity-75 transition duration-500" />
                <Card className="relative h-full bg-card/50 backdrop-blur-sm border-primary/10 group-hover:border-primary/30 transition-colors duration-500">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-500">
                        <svg
                          className="h-4 w-4 text-primary"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                        </svg>
                      </div>
                    </div>
                    <blockquote className="text-base md:text-lg leading-relaxed text-muted-foreground mb-6">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>
                    <div className="flex items-center justify-center">
                      <p className="text-muted-foreground">
                        Get in touch and let&apos;s discuss your needs and goals now
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="booking" className="container py-12 md:py-24">
        <div className="max-w-[58rem] mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold">Get in Touch</h2>
            <p className="text-muted-foreground">Let&apos;s discuss your speaking engagement needs</p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-3xl" />
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/10 to-primary/20 rounded-3xl blur-2xl opacity-50" />
            
            <div className="relative p-8 md:p-12 bg-background/80 backdrop-blur-sm rounded-3xl border border-primary/10 shadow-lg">
              <form action={formAction} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                    <Input id="name" name="name" required placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <Input id="email" name="email" type="email" required placeholder="Your email" />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="organization" className="text-sm font-medium">Organization</label>
                    <Input id="organization" name="organization" required placeholder="Your organization" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="eventType" className="text-sm font-medium">Event Type</label>
                    <Input id="eventType" name="eventType" required placeholder="Type of event" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    required 
                    placeholder="Tell us about your event and requirements"
                    className="min-h-[150px]"
                  />
                </div>

                <div className="flex flex-col space-y-4">
                  <SubmitButton />
                  {state?.success && (
                    <p className="text-sm text-green-600">
                      {state.development 
                        ? "Message received (development mode)" 
                        : "Thank you for your message. We'll be in touch soon!"}
                    </p>
                  )}
                  {state?.error && (
                    <p className="text-sm text-red-600">
                      {state.error}
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}