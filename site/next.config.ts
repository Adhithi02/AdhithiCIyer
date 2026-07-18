import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Netlify supports standard Next.js features, so we can use SSR/Server Components */
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
