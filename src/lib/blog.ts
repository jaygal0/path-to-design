import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

export type BlogPost = {
  slug: string;
  title: string;
  description?: string;
  date: string;
  author: string;
  authorUrl: string;
  profileImage?: string;
};

export async function getPublishedBlogPosts(limit?: number) {
  const dir = path.join(process.cwd(), "content", "blog");
  const files = await fs.readdir(dir);

  const posts: Array<BlogPost | null> = await Promise.all(
    files
      .filter((file) => file.endsWith(".mdx"))
      .map(async (file) => {
        const raw = await fs.readFile(path.join(dir, file), "utf8");
        const { data } = matter(raw);

        if (data.draft) return null;

        return {
          slug: file.replace(".mdx", ""),
          title: data.title,
          description: data.description,
          date: data.date,
          author: data.author,
          authorUrl: data.authorUrl,
          profileImage: data.profileImage,
        };
      }),
  );

  const publishedPosts = posts.filter(
    (post): post is BlogPost => post !== null,
  );

  publishedPosts.sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateB - dateA;
  });

  return typeof limit === "number" ? publishedPosts.slice(0, limit) : publishedPosts;
}
