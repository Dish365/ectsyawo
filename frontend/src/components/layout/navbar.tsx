import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

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

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/logo.png"
            alt="Logo"
            width={150}
            height={60}
            className="object-contain"
          />
        </Link>

        <NavigationMenu>
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
      </div>
    </header>
  );
};

export default Navbar;