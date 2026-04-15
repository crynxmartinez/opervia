/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    emotion: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
    ],
  },
  swcMinify: true,
}

export default nextConfig
