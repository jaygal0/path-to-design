import { compileMDX } from "@/lib/mdx";
import { notFound } from "next/navigation";
import path from "path";
import fs from "fs/promises";
import matter from "gray-matter";
import { Callout } from "@/components/blog/mdx";
import { App } from "@/components/blog/App";
import dayjs from "dayjs";
import Link from "next/link";
import Image from "next/image";
import { NewsletterSidebar } from "@/components/global/NewsletterSidebar";

type Frontmatter = {
  title: string;
  description?: string;
  date: string;
  draft?: boolean;
  author: string;
  authorUrl: string;
  profileImage: string;
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;

  const filePath = path.join(process.cwd(), "content", "blog", `${slug}.mdx`);
  const raw = await fs.readFile(filePath, "utf8");
  const { data } = matter(raw);

  if (data.draft && process.env.NODE_ENV === "production") {
    return {};
  }

  return {
    title: data.title,
    description: data.description,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: data.title,
      description: data.description,
      type: "article",
      url: `/blog/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.description,
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;

  const filePath = path.join(process.cwd(), "content", "blog", `${slug}.mdx`);

  let raw: string;

  try {
    raw = await fs.readFile(filePath, "utf8");
  } catch {
    notFound();
  }

  const { content, data } = matter(raw);
  const frontmatter = data as Frontmatter;

  if (frontmatter.draft && process.env.NODE_ENV === "production") {
    notFound();
  }

  const Content = await compileMDX(content);

  return (
    <article className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div className="col-span-2 text-xl">
        <header className="prose prose-invert">
          <h1 className="md:text-5xl">{frontmatter.title}</h1>

          {frontmatter.description && (
            <p className="text-2xl text-muted-foreground">
              {frontmatter.description}
            </p>
          )}

          <div className="flex items-center gap-4 text-base text-muted-foreground">
            <time dateTime={frontmatter.date} itemProp="datePublished">
              {dayjs(frontmatter.date).format("D MMMM YYYY")}
            </time>

            <span>·</span>

            <Link
              href={`/designers/${frontmatter.authorUrl}`}
              rel="author"
              className="flex items-center gap-3 text-foreground hover:underline"
            >
              <Image
                src={frontmatter.profileImage || ""}
                alt={`${frontmatter.author} profile image`}
                width={32}
                height={32}
                className="rounded-full"
                unoptimized
              />
              <span itemProp="author">{frontmatter.author}</span>
            </Link>
          </div>
        </header>

        <section className="prose prose-invert mt-8 text-xl">
          {Content.default({
            components: {
              App,
              Callout,
            },
          })}
        </section>
      </div>

      <aside className="hidden lg:block">
        <div className="sticky top-32 flex flex-col gap-8">
          <NewsletterSidebar />
        </div>
      </aside>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: frontmatter.title,
            description: frontmatter.description,
            datePublished: frontmatter.date,
            author: {
              "@type": "Person",
              name: frontmatter.author,
              url: `${process.env.NEXT_PUBLIC_SITE_URL}/designers/${frontmatter.authorUrl}`,
            },
          }),
        }}
      />
    </article>
  );
}
