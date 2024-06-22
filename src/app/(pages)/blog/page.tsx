import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

export default function Home() {
  const blogDir = "blogs";

  const files = fs.readdirSync(path.join(blogDir));

  const blogs = files.map((filename) => {
    const fileContent = fs.readFileSync(path.join(blogDir, filename), "utf-8");

    const { data: frontMatter } = matter(fileContent);
    return {
      meta: frontMatter,
      slug: filename.replace(".mdx", ""),
    };
  });
  return (
    <>
      <h2 className="mb-20 mt-40 text-5xl font-bold">Blog</h2>
      <div className="py-2">
        {blogs.map((blog) => (
          <Link href={"/blog/" + blog.slug} passHref key={blog.slug}>
            <div className="flex justify-between gap-2 py-2 align-middle">
              <div>
                <h3 className="font-blod text-lg">{blog.meta.title}</h3>
                <div>
                  <p className="text-gray-400">{blog.meta.description}</p>
                </div>
                <div className="my-auto text-gray-400">
                  <p>{blog.meta.date}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
