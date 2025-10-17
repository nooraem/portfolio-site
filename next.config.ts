import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://placehold.co/600x400?text=Hello+World')],
  },
};

export default nextConfig;
