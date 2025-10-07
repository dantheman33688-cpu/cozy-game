// @ts-check
const { siteConfig } = require('./config/site');

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: siteConfig.url || 'https://www.cozygame.net',
  generateRobotsTxt: false,
  outDir: './public',
  changefreq: 'daily',
  priority: 0.9,
  generateIndexSitemap: false,
  sitemapSize: 5000,

  // ✅ 兼容 Next.js App Router 的路径收集
  additionalPaths: async (config) => {
    return [
      { loc: '/', changefreq: 'daily', priority: 1.0, lastmod: new Date().toISOString() },
      { loc: '/about', changefreq: 'monthly', priority: 0.8 },
      { loc: '/contact', changefreq: 'monthly', priority: 0.8 },
      { loc: '/privacy-policy', changefreq: 'monthly', priority: 0.8 },
      { loc: '/terms-of-service', changefreq: 'monthly', priority: 0.8 },
      // 👉 可以加你网站的游戏页，比如：
      { loc: '/monkey-mart', changefreq: 'monthly', priority: 0.9 },
      { loc: '/idle-lumber-inc', changefreq: 'monthly', priority: 0.9 },
      { loc: '/little-farm-clicker', changefreq: 'monthly', priority: 0.9 },
      { loc: '/cat-coffee-shop', changefreq: 'monthly', priority: 0.9 },
      { loc: '/milk-clicker', changefreq: 'monthly', priority: 0.9 },
    ];
  },
}; 
