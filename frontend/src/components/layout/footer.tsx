import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail, Coffee } from "lucide-react";

// LinkedIn icon component using Simple Icons SVG path
function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="w-full border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container py-10">
        <div className="flex flex-col items-center gap-8">
          {/* Speaker booking CTA */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Event?</h3>
            <Button asChild size="lg">
              <Link href="/speaking#booking">Book Me as a Speaker</Link>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-6">
            <Link 
              href="https://www.linkedin.com/in/etornam-c-tsyawo/" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              <LinkedInIcon className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link 
              href="https://foodpulse.kit.com/0bacd8cebd" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              <Mail className="h-6 w-6" />
              <span className="sr-only">Newsletter</span>
            </Link>
            <Link 
              href="https://buymeacoffee.com/etornamctsyawo" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              <Coffee className="h-6 w-6" />
              <span className="sr-only">Buy Me a Coffee</span>
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Etornam Tsyawo. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
} 