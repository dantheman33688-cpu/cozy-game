import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Header } from "@/components/layout/Header";
import { GameSection } from "@/components/game-section/GameSection";
import { OtherGames } from "@/components/other-games/OtherGames";
import SofloWheelieLifeContent from "@/components/content/SofloWheelieLifeContent";
import { Footer } from "@/components/layout/Footer";
import { getOtherGames } from "@/app/games/game-data";
import { generateGameSchema } from "@/app/schema";
import { articleContent } from "./content";

export const metadata: Metadata = {
  title: `Soflo Wheelie Life: Ultimate Balance and Stunt Mastery Guide | Duck Duck Click`,
  description:
    "Master precision wheelie control in Soflo Wheelie Life! Learn physics-based balancing techniques, perfect your timing, and dominate urban streets. Complete strategy guide inside!",
  alternates: { canonical: "https://www.cozygame.net/soflo-wheelie-life" },
  openGraph: {
    title: "Soflo Wheelie Life Strategy Guide: Master Urban Stunt Balance and Precision Control",
    description:
      "Conquer the art of wheelie mastery in Soflo Wheelie Life! Learn advanced balance techniques, throttle control, and urban stunt strategies for record-breaking runs.",
    url: "https://www.cozygame.net/soflo-wheelie-life",
    siteName: "Duck Duck Click",
    images: [
      {
        url: "/assets/soflo-wheelie-life/soflo-wheelie-life-logo.webp",
        width: 1200,
        height: 630,
        alt: "Soflo Wheelie Life Strategy Guide: Balance, Precision, Stunt Mastery",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Soflo Wheelie Life: Ultimate Urban Stunt and Balance Mastery Guide",
    description:
      "Master wheelie physics and urban balance! Learn throttle control, precision timing, and advanced stunt techniques in Soflo Wheelie Life.",
    images: ["/assets/soflo-wheelie-life/soflo-wheelie-life-logo.webp"],
  },
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
    title: "Soflo Wheelie Life: Ultimate Balance and Stunt Mastery Guide",
    description:
      "Master urban motorcycle stunts in Soflo Wheelie Life! Learn precision balance techniques, throttle control, and advanced wheelie strategies for record-breaking runs.",
    url: "/soflo-wheelie-life",
  },
  content: {
    header: {
      title: "Soflo Wheelie Life",
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
        description: `Play Soflo Wheelie Life - an intense physics-based urban motorcycle stunt game that challenges your precision and timing. Master wheelie balance, perfect your throttle control, and conquer neon-lit city streets. No downloads required - play directly in your browser!`,
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
          { text: "Soflo Wheelie Life", href: "/soflo-wheelie-life" },
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
      title: "Rate Soflo Wheelie Life!",
      votes: "votes",
      initialRating: 0,
      initialVotes: 0,
    },
    gameSection: {
      title: "Soflo Wheelie Life",
      game: {
        url: "/game/soflo-wheelie-life/index.html",
        title: "Soflo Wheelie Life",
        externalUrl: "https://papas-games.io/soflo-wheelie-life.embed",
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
      title: "What is Soflo Wheelie Life?",
      description: "",
      logo: { src: "", alt: "" },
    },
    faq: { title: "FAQ", items: [] as any[] },
  },
};

export default function SofloWheelieLifePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <GameSection content={gameConfig.content} />
      </div>

      <div className="max-w-6xl mx-auto px-4 pb-8">
        <SofloWheelieLifeContent content={articleContent} />
      </div>

      {/* 🎬 教学视频嵌入区域 */}
      <div className="video-wrapper my-8 text-center">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/wMDuS_6vSTs?si=d1YadvNqFM7oSSC0"
          title="Soflo Wheelie Life – Expert Stunt Mastery Demonstration"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          loading="lazy"
          className="mx-auto rounded-lg shadow-md"
        ></iframe>
        <p className="text-sm text-gray-500 mt-2">
          Watch how elite riders maintain perfect balance and precision through extended wheelies in <strong>Soflo Wheelie Life</strong>.
        </p>
      </div>

      {/* 🎮 平台下载区域 */}
      <div className="flex justify-center mt-6 mb-10 gap-4">
        <a
          href="https://scratch.mit.edu/studios/50920048"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-xl px-5 py-2 hover:from-red-700 hover:to-orange-600 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mr-2"
          >
            <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z"/>
          </svg>
          <div className="text-left leading-tight">
            <div className="text-xs font-light">GET IT ON</div>
            <div className="text-sm font-semibold -mt-0.5">Scratch</div>
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