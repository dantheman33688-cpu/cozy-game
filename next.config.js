/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  async rewrites() {
    return [
      {
        source: '/my-perfect-hotel',
        destination: '/game/my-perfect-hotel/index.html',
      },
      {
        source: '/idle_lumber_inc',
        destination: '/game/idle-lumber-inc/index.html',
      },
      {
        source: '/cat-coffee-shop',
        destination: '/game/cat-coffee-shop/index.html',
      },
    ]
  }
};

module.exports = nextConfig;


