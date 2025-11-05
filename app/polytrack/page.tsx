import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Header } from "@/components/layout/Header";
import { GameSection } from "@/components/game-section/GameSection";
import { OtherGames } from "@/components/other-games/OtherGames";
import PolytrackContent from "@/components/content/PolytrackContent";
import { Footer } from "@/components/layout/Footer";
import { getOtherGames } from "@/app/games/game-data";
import { generateGameSchema } from "@/app/schema";
import { articleContent } from "./content";

export const metadata = {
  // --- SEO Title and Description (Primary Search Results) ---
  // 目标: 优化搜索量高、难度低的关键词 "unblocked"。
  title: `Polytrack unblocked: Low-Poly Track Designer and Racing Guide`,
  description:
    "Master the ultimate racing freedom in Polytrack unblocked! Learn to build custom tracks, perfect your racing lines, and compete against global ghost data. Complete strategy guide inside!",
  
  // --- Canonical URL ---
  alternates: { canonical: "https://www.cozygame.net/polytrack" },
  
  // --- OpenGraph (Social Sharing - Facebook, LinkedIn, etc.) ---
  openGraph: {
    title: "Polytrack unblocked Strategy Guide: Master Track Design and Precision Racing",
    description:
      "Design, build, and master custom racing tracks in Polytrack. Learn advanced track design techniques, ghost racing strategies, and time-trial optimization.",
    url: "https://www.cozygame.net/polytrack",
    siteName: "Duck Duck Click",
    images: [
      {
        url: "/assets/polytrack/polytrack-logo.webp",
        width: 1200,
        height: 630,
        alt: "Polytrack Strategy Guide: Design, Build, Race",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  
  // --- Twitter Card (Social Sharing - X/Twitter) ---
  twitter: {
    card: "summary_large_image",
    title: "Polytrack unblocked: Ultimate Track Design and Racing Mastery Guide",
    description:
      "Create custom circuits and master precision racing in Polytrack. Learn ghost racing, track design, and advanced driving techniques for competitive time-trials.",
    images: ["/assets/polytrack/polytrack-logo.webp"],
  },
  
  // --- Robots (Standard Best Practices) ---
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};



type GameConfig = {
  readonly metadata: {
    readonly title: string;
    readonly description: string;
    readonly url: string;
  };
  readonly content: {
    readonly header: {
      readonly title: string;
      readonly search: {
        readonly placeholder: "Find your next favorite game...";
        readonly ariaLabel: "Search games";
        readonly buttonAriaLabel: "Search";
      };
      readonly navigation: {
        readonly links: ReadonlyArray<{
          readonly text: string;
          readonly href: string;
        }>;
      };
    };
    readonly footer: {
      readonly about: {
        readonly title: string;
        readonly description: string;
      };
      readonly quickLinks: {
        readonly title: string;
        readonly links: ReadonlyArray<{ readonly text: string; readonly href: string }>;
      };
      readonly games: {
        readonly title: string;
        readonly links: ReadonlyArray<{ readonly text: string; readonly href: string }>;
      };
      readonly social: {
        readonly title: string;
        readonly links: ReadonlyArray<{ readonly text: string; readonly href: string }>;
      };
      readonly legal: {
        readonly title: string;
        readonly links: ReadonlyArray<{ readonly text: string; readonly href: string }>;
      };
      readonly copyright: { readonly text: string; readonly subText: string };
    };
    readonly rating: {
      readonly title: string;
      readonly votes: string;
      readonly initialRating: number;
      readonly initialVotes: number;
    };
    readonly gameSection: {
      readonly title: string;
      readonly game: {
        readonly url: string;
        readonly title: string;
        readonly externalUrl: string;
      };
    };
    readonly otherGames: {
      readonly title: string;
      readonly cardLabels: { readonly playButton: string };
    };
    readonly features: { readonly title: string; readonly items: any[] };
    readonly howToPlay: {
      readonly title: string;
      readonly description: string;
      readonly image: string;
      readonly imageAlt: string;
    };
    readonly whatIs: {
      readonly title: string;
      readonly description: string;
      readonly logo: { readonly src: string; readonly alt: string };
    };
    readonly faq: { readonly title: string; readonly items: any[] };
  };
};

const gameConfig: GameConfig = {
  metadata: {
    title: "Polytrack: Ultimate Low-Poly Track Designer and Racing Guide",
    description:
      "Master the art of track design and precision racing in Polytrack. Build custom circuits, perfect your racing lines, and compete against global ghost data.",
    url: "/polytrack",
  },
  content: {
    header: {
      title: "Polytrack",
      search: {
        placeholder: "Find your next favorite game...",
        ariaLabel: "Search games",
        buttonAriaLabel: "Search",
      },
      navigation: {
        links: [
          { text: "Start Play", href: "#game-section" },
          { text: "Hot Games", href: "#other-games" },
          { text: "Features", href: "#features" },
          { text: "What Is", href: "#what-is" },
          { text: "How to Play", href: "#how-to-play" },
          { text: "FAQ", href: "#faq" },
        ] as const,
      },
    },
    footer: {
      about: {
        title: "About",
        description: `Play Polytrack - a revolutionary low-poly racing game that combines creative track design with precision time-trial competition. Design custom circuits, master ghost racing, and compete for milliseconds right in your browser. No downloads required.`,
      },
      quickLinks: {
        title: "Quick Links",
        links: [{ text: "Linktr", href: "https://linktr.ee/KnitOut" }],
      },
      games: {
        title: "Popular Games",
        links: [
          { text: "Thorn And Balloons", href: "/" },
          { text: "Idle Lumber Inc", href: "/idle-lumber-inc" },
          { text: "Polytrack", href: "/polytrack" },
          { text: "Cat Coffee Shop", href: "/cat-coffee-shop" },
          { text: "Little Farm Clicker", href: "/little-farm-clicker" },
          { text: "Monkey Mart", href: "/monkey-mart" },
        ],
      },
      social: {
        title: "Follow Us",
        links: [{ text: "Twitter", href: "https://twitter.com" }],
      },
      legal: {
        title: "Legal",
        links: [
          { text: "About Us", href: "/about" },
          { text: "Contact Us", href: "/contact" },
          { text: "Privacy Policy", href: "/privacy-policy" },
          { text: "Terms of Service", href: "/terms-of-service" },
        ],
      },
      copyright: {
        text: "© 2025 Cozy Games. All rights reserved.",
        subText: "All games are the property of their respective owners.",
      },
    },
    rating: {
      title: "Rate Polytrack!",
      votes: "votes",
      initialRating: 0,
      initialVotes: 0,
    },
    gameSection: {
      title: "Polytrack",
      game: {
        url: "/game/polytrack/index.html",
        title: "Polytrack",
        externalUrl: "https://www.kodub.com/apps/polytrack",
      },
    },
    otherGames: {
      title: "Other Games",
      cardLabels: { playButton: "Play Now" },
    },
    features: { title: "Features", items: [] as any[] },
    howToPlay: {
      title: "How to Play",
      description: "",
      image: "",
      imageAlt: "",
    },
    whatIs: {
      title: "What is Polytrack?",
      description: "",
      logo: { src: "", alt: "" },
    },
    faq: { title: "FAQ", items: [] as any[] },
  },
};

export default function PolytrackPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <GameSection content={gameConfig.content} />
      </div>

      <div className="max-w-6xl mx-auto px-4 pb-8">
        <PolytrackContent content={articleContent} />
      </div>

      {/* 🎮 社区链接区域 */}
      <div className="flex justify-center mt-6 mb-10 gap-4">
        <a
          href="https://steamcommunity.com/app/polytrack"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-gray-800 text-white rounded-xl px-5 py-2 hover:bg-gray-900 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mr-2"
          >
            <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-1.035.84-1.875 1.875-1.875 1.032 0 1.87.84 1.87 1.874v1.953l1.445 2.109c.04-.001.08-.004.121-.004 1.285 0 2.43.83 2.83 2.066l3.257 1.358C21.767 19.06 17.1 24 11.979 24c-6.627 0-12-5.373-12-12s5.373-12 12-12z"/>
          </svg>
          <div className="text-left leading-tight">
            <div className="text-xs font-light">VIEW ON</div>
            <div className="text-sm font-semibold -mt-0.5">Steam</div>
          </div>
        </a>
      </div>

      <div className="container mx-auto px-4 pb-8">
        <OtherGames games={getOtherGames()} onGameSelect={() => {}} />
      </div>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateGameSchema({
              title: gameConfig.metadata.title,
              description: gameConfig.metadata.description,
              url: gameConfig.metadata.url,
            })
          ),
        }}
      />
    </div>
  );
}