/** @type {import('next').NextConfig} */
const {withContentlayer} = require('next-contentlayer')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
      },
    ],
  }
}

module.exports = withContentlayer(nextConfig)
