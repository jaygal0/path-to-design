import path from "path";
import fs from "fs/promises";
import matter from "gray-matter";
import Link from "next/link";

export default async function BlogIndex() {
  const dir = path.join(process.cwd(), "content", "blog");
  const files = await fs.readdir(dir);

  const posts = await Promise.all(
    files.map(async (file) => {
      const raw = await fs.readFile(path.join(dir, file), "utf8");
      const { data } = matter(raw);

      if (data.draft) return null;

      return {
        slug: file.replace(".mdx", ""),
        title: data.title,
        date: data.date,
      };
    }),
  );

  const filteredPosts = posts.filter(
    (post): post is { slug: string; title: string; date: string } =>
      post !== null,
  );

  filteredPosts.sort((a, b) => +new Date(b.date) - +new Date(a.date));

  return (
    <main className="mx-auto max-w-3xl">
      <h1>Blog</h1>
      <ul>
        {filteredPosts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
