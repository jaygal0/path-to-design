import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {}, // 👈 This silences the error and opts into Turbopack

  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.pinimg.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "gdr5kmlmoz47c9q7.public.blob.vercel-storage.com",
        pathname: "/**",
      },
    ],
    minimumCacheTTL: 7776000,
    formats: ["image/webp"],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    deviceSizes: [640, 768, 1024, 1280],
    qualities: [70, 75],
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
