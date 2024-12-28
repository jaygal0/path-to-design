import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { Author } from "../../../../../components/blog/Author";

export async function generateStaticParams() {
  // Update the path to read from "data/blogs"
  const files = fs.readdirSync(path.join("blogs"));

  // Generate slugs based on the file names
  const paths = files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));

  return paths;
}

function getPost({ slug }: { slug: string }) {
  // Read the markdown file from "data/blogs" directory
  const markdownFile = fs.readFileSync(
    path.join("blogs", slug + ".mdx"),
    "utf-8",
  );

  // Use gray-matter to parse the markdown file and extract the front matter and content
  const { data: fontMatter, content } = matter(markdownFile);

  return {
    fontMatter,
    slug,
    content,
  };
}

export default async function Page({ params }: any) {
  const props = getPost(params);

  return (
    <article className="prose-lg col-span-full col-start-1 row-span-1 row-start-1 mb-8 content-end py-64 pb-36 prose-h3:text-stone-400 prose-p:font-sans md:col-span-6 md:col-start-2 lg:col-span-6 lg:col-start-4 lg:pt-56	">
      <Link
        href="/blog"
        className="text-md font-sans font-thin no-underline hover:underline"
      >
        &#60; Back
      </Link>
      <div className="mb-10">
        <h1 className="mb-3 mt-8 text-3xl font-bold lg:text-5xl">
          {props.fontMatter.title}
        </h1>
        <Author
          firstName={props.fontMatter.firstName}
          lastName={props.fontMatter.lastName}
          createdAt={props.fontMatter.posted}
          updatedAt={props.fontMatter.updated}
        />
        {/* @ts-expect-error Server Component */}
        <MDXRemote source={props.content} />
      </div>
    </article>
  );
}
