import { getPost } from "@/lib/sanity";
import { notFound } from "next/navigation";
import { PortableText, PortableTextReactComponents } from "@portabletext/react";
import Image from "next/image";

const components: Partial<PortableTextReactComponents> = {
  block: {
    h1: ({children}) => <h1 className="text-3xl font-bold mt-8 mb-4">{children}</h1>,
    h2: ({children}) => <h2 className="text-2xl font-bold mt-8 mb-4">{children}</h2>,
    h3: ({children}) => <h3 className="text-xl font-bold mt-6 mb-3">{children}</h3>,
    normal: ({children}) => <p className="mb-4 leading-relaxed">{children}</p>,
  },
  marks: {
    link: ({value, children}) => {
      const target = (value?.href || '').startsWith('http') ? '_blank' : undefined
      return (
        <a 
          href={value?.href}
          target={target}
          rel={target === '_blank' ? 'noopener noreferrer' : undefined}
          className="text-primary hover:underline"
        >
          {children}
        </a>
      )
    },
  },
  types: {
    image: ({value}) => {
      return (
        <div className="my-8">
          <Image
            src={value.url}
            alt={value.alt || ''}
            width={800}
            height={450}
            className="rounded-lg w-full"
          />
          {value.alt && (
            <p className="mt-2 text-sm text-muted-foreground text-center">
              {value.alt}
            </p>
          )}
        </div>
      )
    },
  },
};

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container max-w-3xl py-24">
      <header className="mb-12">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          {post.category && <span>{post.category}</span>}
          {post.author && (
            <>
              <span>•</span>
              <span>By {post.author}</span>
            </>
          )}
          <span>•</span>
          <time dateTime={post.publishedAt}>
            {new Date(post.publishedAt).toLocaleDateString()}
          </time>
        </div>
        <h1 className="text-4xl font-bold tracking-tight mb-6">{post.title}</h1>
      </header>

      {post.imageUrl && (
        <div className="mb-12 relative aspect-video">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className="rounded-lg object-cover"
          />
        </div>
      )}

      <div className="prose prose-lg max-w-none">
        {post.body && (
          <PortableText 
            value={post.body}
            components={components}
          />
        )}
      </div>
    </article>
  );
}