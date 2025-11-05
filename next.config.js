/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  async rewrites() {
    return [
      {
        source: '/idle_lumber_inc',
        destination: '/game/idle-lumber-inc/index.html',
      },
      {
        source: '/cat-coffee-shop',
        destination: '/game/cat-coffee-shop/index.html',
      },
      {
        source: '/little-farm-clicker',
        destination: '/game/little-farm-clicker/index.html',
      },
      {
        source: '/monkey-mart',
        destination: '/game/monkey-mart/index.html',
      },
      {
        source: '/milk-clicker',
        destination: '/game/milk-clicker/index.html',
      },
      {
        source: '/capitalist-bus-driver',
        destination: '/game/capitalist-bus-driver/index.html',
      },
      {
        source: '/tower-merge',
        destination: '/game/tower-merge/index.html',
      },
      {
        source: '/drift-boss',
        destination: '/game/drift-boss/index.html',
      }
    ]
  }
};

module.exports = nextConfig;


