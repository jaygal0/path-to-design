import path from "path";
import fs from "fs/promises";
import matter from "gray-matter";
import Link from "next/link";

type Post = {
  slug: string;
  title: string;
  description?: string;
  date: string;
  author: string;
  authorUrl: string;
  profileImage?: string;
};

export default async function BlogIndex() {
  const dir = path.join(process.cwd(), "content", "blog");
  const files = await fs.readdir(dir);

  const posts: (Post | null)[] = await Promise.all(
    files.map(async (file) => {
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

  const filteredPosts: Post[] = posts.filter(
    (post): post is Post => post !== null,
  );

  filteredPosts.sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateB - dateA; // newest first
  });

  return (
    <main className="mx-auto max-w-3xl">
      <h1 className="mb-8 text-3xl font-bold">Blog</h1>
      <ul>
        {filteredPosts.map((post) => (
          <li key={post.slug} className="mb-16">
            <article>
              <h2 className="text-2xl font-semibold">
                <Link href={`/blog/${post.slug}`} className="hover:underline">
                  {post.title}
                </Link>
              </h2>

              {post.description && (
                <p className="mb-3 text-muted-foreground">{post.description}</p>
              )}

              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "2-digit",
                  })}
                </time>

                <span>·</span>

                <Link
                  href={`/designers/${post.authorUrl}`}
                  className="flex items-center gap-2 hover:underline"
                >
                  {post.profileImage && (
                    <img
                      src={post.profileImage}
                      alt={`${post.author} profile image`}
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                  )}
                  <span>{post.author}</span>
                </Link>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </main>
  );
}
