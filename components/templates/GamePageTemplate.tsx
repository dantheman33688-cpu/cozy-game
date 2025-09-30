// components/templates/GamePageTemplate.tsx
'use client';

import { Header } from "@/components/layout/Header";
import { GameSection } from "@/components/game-section/GameSection";
import { Features } from "@/components/features/Features";
import { WhatIs } from "@/components/what-is/WhatIs";
import { HowToPlay } from "@/components/how-to-play/HowToPlay";
import { FAQ } from "@/components/faq/FAQ";
import { OtherGames } from "@/components/other-games/OtherGames";
import { Footer } from "@/components/layout/Footer";
import { getOtherGames } from "@/app/games/game-data";
import { Article } from "@/components/article/Article";
import { generateGameSchema } from "@/app/schema";

interface GamePageTemplateProps {
  gameConfig: {
    metadata: {
      title: string;
      description: string;
      url: string;
    };
    content: any;
  };
}

export function GamePageTemplate({ gameConfig }: GamePageTemplateProps) {
  // 判断是否使用新的Article结构
  const useNewArticleStructure = hasStructuredArticleContent(gameConfig.content);
  
  // 添加调试信息
  console.log('是否使用新结构:', useNewArticleStructure);
  console.log('内容结构:', gameConfig.content.article);
  
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* 页面标题 */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 lg:mb-12">
          {gameConfig.content.gameSection?.title || gameConfig.metadata.title}
        </h2>
        
        {/* 游戏展示区域 */}
        <GameSection content={gameConfig.content} />
        
        {/* 其他游戏推荐 */}
        <OtherGames
          games={getOtherGames()}
          onGameSelect={() => {}}
        />
        
        {/* 条件渲染：新结构或旧结构 */}
        {useNewArticleStructure ? (
          // 新结构：使用Article组件
          <Article content={getStructuredContent(gameConfig.content)} />
          // 新结构：使用Article组件
        ) : (
          // 旧结构：使用分散的组件
          <>
            <Features content={gameConfig.content} />
            <WhatIs content={gameConfig.content} />
            <HowToPlay content={gameConfig.content} />
            <FAQ content={gameConfig.content} />
          </>
        )}
      </main>

      <Footer />

      {/* Schema标记 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateGameSchema({
              title: gameConfig.metadata.title,
              description: gameConfig.metadata.description,
              url: gameConfig.metadata.url
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "HowTo",
            "name": gameConfig.content.howToPlay?.title || "Game Guide",
            "url": `https://www.duckduckclick.com${gameConfig.metadata.url}`,
            "inLanguage": "en",
            "image": {
              "@type": "ImageObject",
              "url": gameConfig.content.howToPlay?.image || "/default-game-image.jpg"
            },
            "step": [{
              "@type": "HowToStep",
              "position": "1",
              "name": gameConfig.content.howToPlay?.title || "Game Guide",
              "text": gameConfig.content.howToPlay?.description || "Learn how to play this game",
              "image": gameConfig.content.howToPlay?.image || "/default-game-image.jpg"
            }]
          }),
        }}
      />
    </div>
  );
}

// 辅助函数：检查是否使用新的结构化内容
function hasStructuredArticleContent(content: any): boolean {
  return (
    content.article?.structuredContent !== undefined &&
    content.article.structuredContent.introduction !== undefined &&
    content.article.structuredContent.endings !== undefined
  );
}

// 辅助函数：获取文章标题
function getArticleTitle(gameConfig: GamePageTemplateProps['gameConfig']): string {
  return gameConfig.content.article?.title || gameConfig.metadata.title;
}

// 辅助函数：获取文章描述
function getArticleDescription(gameConfig: GamePageTemplateProps['gameConfig']): string {
  return gameConfig.content.article?.description || gameConfig.metadata.description;
}

// 辅助函数：获取结构化内容
function getStructuredContent(content: any) {
  // 如果已经有结构化内容，直接返回
  if (content.article?.structuredContent) {
    return content.article.structuredContent;
  }
  
  // 如果没有结构化内容，尝试从旧数据转换
  return transformLegacyContent(content);
}

// 辅助函数：将旧数据转换为新结构
function transformLegacyContent(content: any) {
  // 从旧的数据结构中提取信息，构建新的结构化内容
  return {
    introduction: content.whatIs?.description || content.article?.content?.match(/<h2>Introduction:([\s\S]*?)<\/h2>/)?.[1] || "Game introduction",
    
    endings: extractEndingsFromContent(content),
    
    features: transformFeatures(content.features),
    
    faqs: transformFAQs(content.faq),
    
    conclusion: content.article?.content?.match(/<h2>Conclusion:([\s\S]*?)<\/h2>/)?.[1] || "Game conclusion"
  };
}

// 从内容中提取结局信息
function extractEndingsFromContent(content: any) {
  // 这里可以根据实际内容结构进行解析
  // 这是一个示例实现，您需要根据实际数据结构调整
  const endings: any[] = [];
  
  // 尝试从article.content中提取
  if (content.article?.content) {
    const goodEndingMatch = content.article.content.match(/<h3>🥇 Good Ending[\s\S]*?<h3>/);
    const badEndingMatch = content.article.content.match(/<h3>💀 Bad Ending[\s\S]*?<h3>/);
    const normalEndingMatch = content.article.content.match(/<h3>⚖️ Normal Ending[\s\S]*?<h3>/);
    
    if (goodEndingMatch) {
      endings.push({
        title: "Good Ending (Moral Path)",
        icon: "🥇",
        requirements: ["Total income must reach $25,000", "No cruel upgrades"],
        tip: "The Good Ending is the hardest to unlock, requiring patience and ethical upgrades.",
        type: "good" as const
      });
    }
    
    if (badEndingMatch) {
      endings.push({
        title: "Bad Ending (Brutal Path)",
        icon: "💀",
        requirements: ["Purchase all cruel weapons", "Use the gun to kill Harvey"],
        tip: "The Bad Ending provides quick profits but comes at the cost of humanity.",
        type: "bad" as const
      });
    }
    
    if (normalEndingMatch) {
      endings.push({
        title: "Normal Ending (Balanced Path)",
        icon: "⚖️",
        requirements: ["Purchase scissors but not knives", "Cause non-lethal moderate harm"],
        tip: "The Normal Ending offers a middle ground between good and bad.",
        type: "normal" as const
      });
    }
  }
  
  // 如果没有提取到，提供默认值
  if (endings.length === 0) {
    endings.push(
      {
        title: "Good Ending",
        icon: "🥇",
        requirements: ["Complete the game with moral choices"],
        tip: "Achieve the good ending by making ethical decisions.",
        type: "good" as const
      },
      {
        title: "Bad Ending", 
        icon: "💀",
        requirements: ["Make cruel choices throughout the game"],
        tip: "The bad ending results from selfish decisions.",
        type: "bad" as const
      }
    );
  }
  
  return endings;
}

// 转换特性数据
function transformFeatures(features: any) {
  if (!features?.items) return [];
  
  return features.items.map((item: any) => ({
    title: item.title,
    cost: "Varies", // 可以从描述中提取或使用默认值
    roi: "High", // 可以根据内容判断
    description: item.description,
    type: item.title.toLowerCase().includes('best') ? "high" as const : "low" as const
  }));
}

// 转换FAQ数据
function transformFAQs(faq: any) {
  if (!faq?.items) return [];
  
  return faq.items.map((item: any) => ({
    question: item.question,
    answer: item.answer
  }));
}