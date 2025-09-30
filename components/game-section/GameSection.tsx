'use client';

import { useState, useRef } from 'react';
import { content as defaultContent } from "@/config/content";
import { theme } from "@/config/theme";
import { layout } from "@/config/layout";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

// 1. 定义 DeepPartial 类型
type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

// 2. 定义内容形状类型 - 使用更宽松的类型定义
type ContentShape = {
  gameSection: {
    title?: string;
    game?: {
      url?: string;
      title?: string;
      externalUrl?: string;
    };
  };
  // 其他可能用到的属性
  header?: any;
  footer?: any;
  rating?: any;
  otherGames?: any;
  features?: any;
  howToPlay?: any;
  whatIs?: any;
  faq?: any;
};

interface GameSectionProps {
  content?: DeepPartial<ContentShape>;
}

// 3. 创建深合并函数
function deepMerge<T>(base: T, patch?: DeepPartial<T>): T {
  if (!patch) return base;
  
  const result: any = Array.isArray(base) ? [...base] : { ...base };

  for (const key in patch) {
    if (!Object.prototype.hasOwnProperty.call(patch, key)) continue;
    
    const patchValue = (patch as any)[key];
    const baseValue = (base as any)[key];
    
    if (patchValue === undefined) {
      continue;
    }
    
    if (patchValue === null) {
      result[key] = null;
    } else if (Array.isArray(patchValue)) {
      result[key] = patchValue;
    } else if (typeof patchValue === 'object') {
      result[key] = deepMerge(baseValue || {}, patchValue);
    } else {
      result[key] = patchValue;
    }
  }
  
  return result;
}

export function GameSection({ content }: GameSectionProps) {
  // 4. 使用深合并函数合并默认内容和传入内容
  const mergedContent = deepMerge(defaultContent, content);
  
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleFullscreen = async () => {
    if (!document.fullscreenElement) {
      await containerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      await document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  // 5. 安全访问属性
  const gameSectionTitle = mergedContent.gameSection?.title || "Game";
  const gameUrl = mergedContent.gameSection?.game?.url || "";
  const gameTitle = mergedContent.gameSection?.game?.title || "Game";

  return (
    <section
      id="game-section"
      className={cn(
        theme.gameSection.layout.section,
        theme.layout.section.scrollMargin
      )}
    >
      {layout.gameSection.isVisible.title && (
        <h2 className={cn(
          theme.gameSection.typography.title,
          theme.gameSection.spacing.title
        )}>
          {gameSectionTitle}
        </h2>
      )}

      {/* 游戏容器 */}
      <div
        ref={containerRef}
        className={cn(
          "w-full max-w-4xl mx-auto overflow-hidden shadow-xl relative",
          theme.gameSection.colors.container,
          "mb-0 rounded-none"
        )}
      >
        <iframe
          src={gameUrl}
          className="w-full h-full aspect-video border-0"
          allow="fullscreen"
          title={gameTitle}
        />
      </div>

      {/* 按钮行 */}
      <div className="flex justify-end items-center w-full max-w-4xl mx-auto mb-16 bg-gray-700/70 dark:bg-gray-800/70 text-white rounded-none p-2 shadow-md">
        <Button
          onClick={toggleFullscreen}
          size="icon"
          variant="ghost"
          className="hover:bg-white/20 text-white rounded-full p-1.5 transition-colors"
          aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M9 9L4 4m0 0l5 0M4 4l0 5" />
            <path d="M15 9l5-5m0 0h-5m5 0v5" />
            <path d="M9 15l-5 5m0 0h5m-5 0v-5" />
            <path d="M15 15l5 5m0 0v-5m0 5h-5" />
          </svg>
        </Button>
      </div>
    </section>
  );
}