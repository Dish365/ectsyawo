import { Card } from "@/components/ui/card";

interface VideoTestimonial {
  id: string;
  title: string;
  speaker: string;
  role: string;
  organization: string;
  videoUrl: string;
  thumbnail: string;
}

const testimonials: VideoTestimonial[] = [
  {
    id: "1",
    title: "Impact on Food Systems",
    speaker: "Dr. Sarah Chen",
    role: "Director of Sustainability",
    organization: "Global Food Initiative",
    videoUrl: "/videos/testimonial-1.mp4",
    thumbnail: "/images/testimonial-1-thumb.jpg"
  },
  // Add more testimonials here
];

export default function VideoTestimonials() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {testimonials.map((testimonial) => (
        <Card key={testimonial.id} className="overflow-hidden">
          <div className="aspect-video bg-muted">
            {/* Video player implementation */}
            <div className="relative w-full h-full">
              <img
                src={testimonial.thumbnail}
                alt={`${testimonial.speaker} testimonial thumbnail`}
                className="object-cover w-full h-full"
              />
              <button 
                className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors"
                aria-label="Play video"
                title="Play video testimonial"
              >
                <svg
                  className="w-12 h-12 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="p-4">
            <h3 className="font-semibold">{testimonial.title}</h3>
            <p className="text-sm text-muted-foreground mt-1">
              {testimonial.speaker}
            </p>
            <p className="text-xs text-muted-foreground">
              {testimonial.role}, {testimonial.organization}
            </p>
          </div>
        </Card>
      ))}
    </div>
  );
} 