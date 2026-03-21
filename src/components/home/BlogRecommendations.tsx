import Link from "next/link";
import { getPublishedBlogPosts } from "@/lib/blog";

export async function BlogRecommendations() {
  const posts = await getPublishedBlogPosts(3);

  if (posts.length === 0) return null;

  return (
    <section className="space-y-8">
      <div className="spacy-y-3 mx-auto text-center md:w-1/2">
        <h2 className="mb-2 text-3xl font-semibold text-foreground md:text-5xl">
          Addtional resources to help you on your design journey
        </h2>
        <p className="text-lg font-light text-muted-foreground md:text-xl">
          Explore in-depth articles about design careers, day-to-day work, and
          the tools real designers use.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col justify-between rounded-2xl border p-6 transition-all hover:border-white"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold leading-tight text-foreground">
                {post.title}
              </h3>
              {post.description && (
                <p className="line-clamp-4 text-base text-muted-foreground">
                  {post.description}
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
