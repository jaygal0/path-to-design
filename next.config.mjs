import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
        pathname: "/**", // Allow all paths under this hostname
      },
      {
        protocol: "https",
        hostname: "i.pinimg.com",
        pathname: "/**", // Allow all paths under this hostname
      },
      {
        protocol: "https",
        hostname: "gdr5kmlmoz47c9q7.public.blob.vercel-storage.com",
        pathname: "/**", // Allow all paths under this hostname
      },
    ],
    minimumCacheTTL: 7776000,
    formats: ["image/webp"],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    deviceSizes: [640, 768, 1024, 1280],
  },
  async redirects() {
    return [
      {
        source: "/browse/:slug",
        destination: "/designers/:slug",
        permanent: true,
      },
    ];
  },
};

const withMDX = createMDX();

export default withMDX(nextConfig);
