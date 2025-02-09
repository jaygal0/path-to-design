import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { Avatar } from "../../../../components/Avatar";
import dayjs from "dayjs";
import { Heading } from "../../../../components/global/Heading";

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
    <div className="col-span-full col-start-1 row-span-full row-start-1 flex min-h-screen flex-col justify-start py-64 md:col-span-6 md:col-start-2 xl:col-span-6 xl:col-start-4 xl:pt-72">
      <Heading
        heading="Learn"
        desc="A hub of inspiration, guidance, and resources for aspiring designers.
        Whether you're just starting or looking to refine your craft,
        you'll find articles here tailored to your journey."
      />
      {blogs
        .map((blog: any, index: any) => {
          return (
            <Link
              href={`/learn/${blog.slug}`}
              key={index}
              className="flex flex-col gap-2 rounded-2xl border p-4 py-2"
            >
              <h2 className="mb-0 text-xl lg:text-3xl">{blog.meta.title}</h2>
              <h3 className="font-sans text-sm font-thin lg:text-lg">
                {blog.meta.subtitle}
              </h3>
              <div className="relative flex">
                <div className="flex w-full flex-col gap-2 py-3">
                  <div className="flex items-center gap-3">
                    <Avatar
                      firstName={blog.meta.firstName}
                      lastName={blog.meta.lastName}
                      size="sm"
                    />
                    <div className="text-lg font-semibold">
                      {blog.meta.firstName} {blog.meta.lastName}
                    </div>
                  </div>
                  <div className="flex justify-start font-sans font-light text-gray-500 md:w-1/3">
                    {blog.meta.updated === blog.meta.posted
                      ? "Posted at "
                      : "Updated at "}
                    {dayjs(blog.meta.updated).format("D MMM, YYYY")}
                  </div>
                </div>
              </div>
            </Link>
          );
        })
        .sort((a: any, b: any) => {
          return a.props.posted < b.props.posted ? 1 : -1;
        })}
    </div>
  );
}
