/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  async rewrites() {
    return [
      {
        source: '/thorn-and-balloons',
        destination: '/game/thorn-and-balloons/index.html',
      },
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
      }
      ,
      {
        source: '/milk-clicker',
        destination: '/game/milk-clicker/index.html',
      }
    ]
  }
};

module.exports = nextConfig;


