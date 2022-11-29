/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/public',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
