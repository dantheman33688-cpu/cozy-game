// @ts-check
const { siteConfig } = require('./config/site');

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  // 站点 URL（来自你的 siteConfig）
  siteUrl: siteConfig.url,
  outDir: './public',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: 'daily',
  priority: 0.9,

  // 转换逻辑：控制每个路径的优先级和更新频率
  transform: async (config, path) => {
    let priority = 0.9;
    let changefreq = 'monthly';

    if (path === '/' || path === '') {
      priority = 1.0;
      changefreq = 'daily';
    } else if (
      ['/privacy-policy', '/terms-of-service', '/about', '/contact'].includes(path)
    ) {
      priority = 0.8;
      changefreq = 'monthly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
      alternateRefs: [],
    };
  },

  // Robots.txt 设置
  robotsTxtOptions: {
    policies: [
      // 一般搜索引擎允许全部
      {
        userAgent: '*',
        allow: '/',
      },
      // 限制 AI 爬虫，仅允许访问 llms 文件
      ...[
        'GPTBot',
        'ChatGPT-User',
        'OAI-SearchBot',
        'Claude-Web',
        'Anthropic-AI',
        'ClaudeBot',
        'PerplexityBot',
        'DeepseekBot',
        'cohere-ai',
        'YouBot',
        'GoogleOther',
        'DuckAssistBot',
        'Bytespider',
      ].map((bot) => ({
        userAgent: bot,
        disallow: '/',
        allow: ['/llms.txt', '/llms-full.txt'],
      })),
    ],
    additionalSitemaps: [`${siteConfig.url}/sitemap.xml`],
  },

  // ✅ 移除 Host 行（部分 next-sitemap 版本会自动加）
  transformRobotsTxt: (robotsTxt) => {
    return robotsTxt
      .replace(/^# Host:[\s\S]*?(?=\n# Sitemap|$)/gm, '') // 删除 # Host 行
      .replace(/^Host:.*$/gm, ''); // 删除任何 Host: 开头的行
  },
};
