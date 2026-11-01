/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp'],
    remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com', pathname: '/**' }],
  },
  async redirects() {
    return [
      { source: '/:path*', has: [{ type: 'host', value: 'gamigami.net' }], destination: 'https://www.gamigami.net/:path*', permanent: true },
      { source: '/logistics', destination: '/#services', permanent: true },
      { source: '/warehouse', destination: '/#warehouse', permanent: true },
    ]
  },
}
export default nextConfig
