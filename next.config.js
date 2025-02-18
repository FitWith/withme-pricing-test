/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'], // Enable modern image formats
    domains: ['images.unsplash.com'],
  },
}

module.exports = nextConfig
