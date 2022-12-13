/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    minimumCacheTTL: 600,
  }
}

module.exports = nextConfig
