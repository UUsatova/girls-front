/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com'],
  },
  basePath: process.env.NODE_ENV === 'production' ? '/OF' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/OF' : '',
}

module.exports = nextConfig

