/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

const nextConfig = {
  reactStrictMode: true,
  output: process.env.NEXT_PUBLIC_STATIC_EXPORT === '1' ? 'export' : undefined,
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com'],
  },
  basePath,
  assetPrefix: basePath || undefined,
  // Ensure proper routing
  trailingSlash: false,
  // Disable static optimization for dynamic routes
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
}

module.exports = nextConfig
