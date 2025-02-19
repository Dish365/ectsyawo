"use client";

import * as React from "react";
import { useFormStatus } from "react-dom";
import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { sendContactEmail } from "../actions";

const researchAreas = [
  {
    title: "Food Systems Transformation",
    description: "Investigating systemic approaches to creating sustainable and equitable food systems.",
    keyTopics: [
      "Sustainable Agriculture",
      "Food Security",
      "Supply Chain Innovation",
      "Policy Implementation"
    ]
  },
  {
    title: "Agricultural Innovation",
    description: "Exploring technological and methodological advances in agricultural practices.",
    keyTopics: [
      "Smart Farming",
      "Sustainable Practices",
      "Resource Optimization",
      "Climate Resilience"
    ]
  },
  {
    title: "Policy Impact Analysis",
    description: "Evaluating the effectiveness of food policy interventions and their outcomes.",
    keyTopics: [
      "Policy Evaluation",
      "Stakeholder Analysis",
      "Implementation Strategies",
      "Impact Assessment"
    ]
  }
];

const timeline = [
  {
    year: "2024",
    title: "Doctoral Research",
    description: "Leading research on sustainable food systems transformation",
    institution: "University of Agriculture",
    ongoing: true
  },
  {
    year: "2023",
    title: "Published Research",
    description: "Impact of Policy Interventions on Food Security",
    publication: "Journal of Food Systems"
  },
  {
    year: "2022",
    title: "Research Fellowship",
    description: "Agricultural Innovation and Sustainability",
    institution: "Global Food Institute"
  },
  {
    year: "2021",
    title: "Master's Thesis",
    description: "Sustainable Agriculture in Developing Economies",
    institution: "University of Agriculture"
  }
];

const collaborationAreas = [
  {
    area: "Academic Research",
    description: "Joint research projects on food systems and agricultural innovation",
    opportunities: [
      "Cross-institutional studies",
      "PhD supervision",
      "Research paper collaboration"
    ]
  },
  {
    area: "Industry Projects",
    description: "Partnerships with organizations implementing sustainable practices",
    opportunities: [
      "Field studies",
      "Implementation research",
      "Impact assessment"
    ]
  },
  {
    area: "Policy Research",
    description: "Collaboration on food policy analysis and recommendations",
    opportunities: [
      "Policy evaluation",
      "Stakeholder engagement",
      "Evidence-based recommendations"
    ]
  }
];

interface FormState {
  success?: boolean;
  error?: string;
  development?: boolean;
}

function SubmitButton() {
  const { pending } = useFormStatus();
  
  return (
    <Button type="submit" size="lg" disabled={pending}>
      {pending ? "Sending..." : "Submit Inquiry"}
    </Button>
  );
}

export default function ResearchPage() {
  const [state, formAction] = useActionState(async (prevState: FormState | null, formData: FormData) => {
    formData.set('eventType', 'Research Collaboration');
    const result = await sendContactEmail(formData);
    return result;
  }, null);

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="container flex flex-col items-center gap-6 py-24 md:py-32">
        <h1 className="text-center text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Research & Impact
        </h1>
        <p className="max-w-[42rem] text-center text-lg text-muted-foreground sm:text-xl">
          Advancing knowledge in food systems transformation through rigorous research and collaboration
        </p>
      </section>

      {/* Current Research Areas */}
      <section id="areas" className="container py-12 md:py-24">
        <h2 className="text-3xl font-bold text-center mb-12">Research Focus</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {researchAreas.map((area) => (
            <Card key={area.title} className="flex flex-col">
              <CardHeader>
                <CardTitle>{area.title}</CardTitle>
                <CardDescription>{area.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="font-medium mb-2">Key Topics:</h4>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  {area.keyTopics.map((topic) => (
                    <li key={topic}>{topic}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Research Timeline */}
      <section id="timeline" className="container py-12 md:py-24 bg-sage-50">
        <h2 className="text-3xl font-bold text-center mb-12">Research Journey</h2>
        <div className="max-w-3xl mx-auto">
          {timeline.map((item) => (
            <div key={item.year} className="relative pl-8 pb-12 last:pb-0">
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />
              {/* Timeline dot */}
              <div className={`absolute left-[-4px] top-0 w-2 h-2 rounded-full ${item.ongoing ? 'bg-primary animate-pulse' : 'bg-muted-foreground'}`} />
              
              <div className="space-y-2">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium text-muted-foreground">
                    {item.year}
                  </span>
                  <h3 className="font-semibold">{item.title}</h3>
                </div>
                <p className="text-muted-foreground">{item.description}</p>
                <p className="text-sm text-muted-foreground">
                  {item.institution || item.publication}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Collaboration Section */}
      <section id="collaboration" className="container py-12 md:py-24">
        <div className="max-w-[58rem] mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Research Collaboration</h2>
          <p className="text-lg text-muted-foreground mb-12">
            Interested in collaborating on research projects? Explore our areas of collaboration and get in touch.
          </p>
          
          <div className="grid gap-8 md:grid-cols-3 text-left">
            {collaborationAreas.map((collab) => (
              <Card key={collab.area} className="flex flex-col">
                <CardHeader>
                  <CardTitle>{collab.area}</CardTitle>
                  <CardDescription>{collab.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    {collab.opportunities.map((opp) => (
                      <li key={opp}>{opp}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 max-w-[42rem] mx-auto">
            {state?.success && (
              <div className="p-4 rounded-lg bg-green-50 text-green-900 mb-6">
                <p className="text-center font-medium">
                  {state.development 
                    ? "Form submitted successfully (Development Mode - Email not sent)"
                    : "Thank you for your inquiry! We'll get back to you soon."}
                </p>
              </div>
            )}
            {state?.error && (
              <div className="p-4 rounded-lg bg-red-50 text-red-900 mb-6">
                <p className="text-center font-medium">
                  {state.error}. Please try again or contact us directly.
                </p>
              </div>
            )}

            <form action={formAction} className="space-y-8 text-left">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" placeholder="Your name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="Your email" required />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="organization">Organization</Label>
                  <Input id="organization" name="organization" placeholder="Your organization" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Research Interest</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Describe your research interests, potential collaboration areas, and any specific project ideas."
                  required
                />
              </div>
              <div className="flex justify-center">
                <SubmitButton />
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
} 