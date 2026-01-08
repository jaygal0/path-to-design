import { compileMDX } from "@/lib/mdx";
import { notFound } from "next/navigation";
import path from "path";
import fs from "fs/promises";
import matter from "gray-matter";
import { Callout } from "@/components/blog/mdx";

type Frontmatter = {
  title: string;
  description?: string;
  date: string;
  draft?: boolean;
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
    <article className="prose prose-invert">
      <h1>{frontmatter.title}</h1>
      {frontmatter.description && <p>{frontmatter.description}</p>}
      {Content.default({
        components: {
          Callout,
        },
      })}
    </article>
  );
}
