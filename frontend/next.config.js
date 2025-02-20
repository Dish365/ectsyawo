/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static exports for the Studio
  output: 'standalone',
  
  // Ensure that the Studio route is statically generated
  experimental: {
    missingSuspenseWithCSRError: false,
  },

  // Add any necessary rewrites or redirects here
  rewrites: async () => {
    return [
      {
        source: '/studio/:path*',
        destination: '/studio/[[...tool]]/page',
      },
    ]
  },
}

module.exports = nextConfig 