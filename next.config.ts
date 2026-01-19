import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for Netlify hosting
  output: "export",

  // Image optimization
  images: {
    unoptimized: true,
  },

  // Strict mode for development
  reactStrictMode: true,
};

export default nextConfig;
