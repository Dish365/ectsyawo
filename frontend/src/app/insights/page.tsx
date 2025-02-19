import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getLatestPosts } from "@/lib/sanity";
import Link from "next/link";
import Image from "next/image";

export default async function InsightsPage() {
  const posts = await getLatestPosts(6);

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="container flex flex-col items-center gap-6 py-24 md:py-32">
        <h1 className="text-center text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Insights & Perspectives
        </h1>
        <p className="max-w-[42rem] text-center text-lg text-muted-foreground sm:text-xl">
          Expert analysis and thought leadership on food systems transformation
        </p>
      </section>

      {/* Content Categories */}
      <section id="categories" className="container py-6">
        <div className="flex gap-4 overflow-x-auto pb-4">
          {["All", "Food", "Food Systems", "Industry", "Research"].map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              className="whitespace-nowrap"
            >
              {category}
            </Button>
          ))}
        </div>
      </section>

      {/* Content Grid */}
      <section id="posts" className="container py-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Card key={post._id} className="flex flex-col">
              {post.imageUrl && (
                <div className="aspect-video relative">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
              )}
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  {post.category && <span>{post.category}</span>}
                  {post.author && (
                    <>
                      <span>•</span>
                      <span>By {post.author}</span>
                    </>
                  )}
                </div>
                <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                {post.excerpt && (
                  <CardDescription className="line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                )}
              </CardHeader>
              <CardContent className="mt-auto">
                <Link href={`/insights/${post.slug}`}>
                  <Button variant="outline" className="w-full">Read More</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
} 