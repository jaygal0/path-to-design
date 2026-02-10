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
    <article className="prose prose-invert w-3/4 text-xl">
      <h1 className="-mb-14">{frontmatter.title}</h1>
      {frontmatter.description && (
        <h2 className="font-light text-muted-foreground">
          {frontmatter.description}
        </h2>
      )}
      <div className="flex items-center gap-4 text-base text-muted-foreground">
        <time dateTime={frontmatter.date}>
          {dayjs(frontmatter.date).format("D MMMM YYYY")}
        </time>

        <span>·</span>

        <Link
          href={`/designers/${frontmatter.authorUrl}`}
          className="flex items-center gap-3 text-foreground hover:underline"
        >
          <Image
            src={frontmatter.profileImage || ""}
            alt={frontmatter.author}
            width={32}
            height={32}
            className="rounded-full"
            unoptimized
          />
          <span>{frontmatter.author}</span>
        </Link>
      </div>
      {Content.default({
        components: {
          App,
          Callout,
        },
      })}
    </article>
  );
}
