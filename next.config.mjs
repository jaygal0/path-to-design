import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.google.com",
        pathname: "/**", // Allow all paths under this hostname
      },
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
        pathname: "/**", // Allow all paths under this hostname
      },
    ],
  },
};

const withMDX = createMDX();

export default withMDX(nextConfig);
