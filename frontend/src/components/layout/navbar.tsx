"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <NavigationMenuLink asChild>
      <a
        ref={ref}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className
        )}
        {...props}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </a>
    </NavigationMenuLink>
  );
});
ListItem.displayName = "ListItem";

const MobileNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link 
    href={href} 
    className="block py-2 text-lg hover:text-primary transition-colors"
  >
    {children}
  </Link>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/logo.png"
            alt="Logo"
            width={150}
            height={40}
            className="object-contain w-auto h-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Speaking</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                  <li>
                    <ListItem href="/speaking" title="Speaking Services">
                      Keynotes, workshops, and training on food systems
                    </ListItem>
                  </li>
                  <li>
                    <ListItem href="/speaking#services" title="Service Types">
                      Browse different types of speaking engagements
                    </ListItem>
                  </li>
                  <li>
                    <ListItem href="/speaking#testimonials" title="Testimonials">
                      What others say about the speaking experience
                    </ListItem>
                  </li>
                  <li>
                    <ListItem href="/speaking#booking" title="Book Now">
                      Get in touch to discuss your event needs
                    </ListItem>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Research</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                  <li>
                    <ListItem href="/research" title="Research Areas">
                      Current research focus and projects
                    </ListItem>
                  </li>
                  <li>
                    <ListItem href="/research#timeline" title="Research Journey">
                      Academic and research milestones
                    </ListItem>
                  </li>
                  <li>
                    <ListItem href="/research#collaboration" title="Collaboration">
                      Partnership opportunities in research
                    </ListItem>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Insights</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                  <li>
                    <ListItem href="/insights" title="Latest Insights">
                      Recent articles and analysis
                    </ListItem>
                  </li>
                  <li>
                    <ListItem href="/insights#featured" title="Featured Content">
                      Highlighted perspectives on food systems
                    </ListItem>
                  </li>
                  <li>
                    <ListItem href="/insights#categories" title="Browse by Topic">
                      Explore insights by category
                    </ListItem>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/speaking#booking" legacyBehavior passHref>
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-primary text-primary-foreground hover:bg-white hover:text-primary")}>
                  Book for Speaking
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetTitle>Menu</SheetTitle>
              <nav className="flex flex-col gap-4 mt-6">
                <MobileNavLink href="/speaking">Speaking</MobileNavLink>
                <MobileNavLink href="/research">Research</MobileNavLink>
                <MobileNavLink href="/insights">Insights</MobileNavLink>
                <div className="pt-4">
                  <Link 
                    href="/speaking#booking"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                  >
                    Book for Speaking
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;