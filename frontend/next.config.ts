import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  experimental: {
    authInterrupts: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '/images/**',
      },
    ],
  },
  rewrites: async () => {
    return [
      {
        source: '/studio/:path*',
        destination: '/studio/[[...tool]]/page',
      },
    ]
  },
  headers: async () => [
    {
      source: "/(.*)",
      headers: [
        {
          key: "X-Frame-Options",
          value: "SAMEORIGIN"
        },
        {
          key: "X-Content-Type-Options",
          value: "nosniff"
        },
        {
          key: "X-XSS-Protection",
          value: "1; mode=block"
        }
      ]
    }
  ]
};

export default nextConfig;
