import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

export default async function Page({ posts }: any) {
  const blogDir = path.join("blogs");

  // Read the files from the `data/blogs` directory
  const files = fs.readdirSync(blogDir);

  const blogs = files.map((filename) => {
    // Read each markdown file content
    const fileContent = fs.readFileSync(path.join(blogDir, filename), "utf-8");

    // Extract front matter and slug from the filename and content
    const { data: frontMatter } = matter(fileContent);
    return {
      meta: frontMatter,
      slug: filename.replace(".mdx", ""), // Create slug from the filename
    };
  });

  return (
    <article className="col-span-full col-start-1 row-span-full row-start-1 flex min-h-min flex-col gap-10 pb-72 md:col-span-6 md:col-start-2 lg:col-start-4 lg:col-end-10">
      {blogs
        .map((blog: any, index: any) => {
          console.log(blog);

          return (
            <Link href={`/blog/${blog.slug}`} key={index}>
              <div>{blog.meta.title}</div>
            </Link>
          );
        })
        .sort((a: any, b: any) => {
          return a.props.posted < b.props.posted ? 1 : -1;
        })}
    </article>
  );
}
