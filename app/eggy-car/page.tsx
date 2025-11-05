import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Header } from "@/components/layout/Header";
import { GameSection } from "@/components/game-section/GameSection";
import { OtherGames } from "@/components/other-games/OtherGames";
import EggyCarContent from "@/components/content/EggyCarContent";
import { Footer } from "@/components/layout/Footer";
import { getOtherGames } from "@/app/games/game-data";
import { generateGameSchema } from "@/app/schema";
import { articleContent } from "./content";

export const metadata: Metadata = {
  title: `Eggy Car: Physics Driving Challenge - Master Balance, Beat Time, Save the Egg | ${siteConfig.domain}`,
  description:
    "Master precision balance in Eggy Car! Learn physics-based driving techniques, protect your fragile egg, and achieve record distances. Complete strategy guide inside!",
  alternates: { canonical: "https://www.cozygame.net/eggy-car" },
  openGraph: {
    title: "Eggy Car Strategy Guide: Master Physics-Based Balance and Precision Driving",
    description:
      "Protect your fragile egg in Eggy Car! Learn advanced balance techniques, perfect your timing, and master the art of smooth acceleration and braking.",
    url: "https://www.cozygame.net/eggy-car",
    siteName: "Cozy Game",
    images: [
      {
        url: "/assets/eggy-car/eggy-car-logo.webp",
        width: 1200,
        height: 630,
        alt: "Eggy Car Strategy Guide: Balance, Precision, Survival",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eggy Car: Ultimate Physics Driving and Balance Mastery Guide",
    description:
      "Keep your egg intact! Master Eggy Car's physics-based challenges with smooth acceleration, precise braking, and strategic terrain navigation techniques.",
    images: ["/assets/eggy-car/eggy-car-logo.webp"],
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
    title: "Eggy Car: Physics Driving Challenge - Master Balance, Beat Time, Save the Egg",
    description:
      "Master the art of precision balance in Eggy Car. Protect your fragile egg with smooth acceleration, perfect timing, and strategic terrain navigation.",
    url: "/eggy-car",
  },
  content: {
    header: {
      title: "Eggy Car",
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
        description: `Play Eggy Car - a physics-based balancing game that challenges your precision and timing. Protect a fragile egg while navigating challenging terrain with smooth acceleration and braking. No downloads required - play directly in your browser!`,
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
          { text: "Eggy Car", href: "/eggy-car" },
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
      title: "Rate Eggy Car!",
      votes: "votes",
      initialRating: 0,
      initialVotes: 0,
    },
    gameSection: {
      title: "Eggy Car",
      game: {
        url: "/game/eggy-car/index.html",
        title: "Eggy Car",
        externalUrl: "https://poki.com/en/g/eggy-car",
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
      title: "What is Eggy Car?",
      description: "",
      logo: { src: "", alt: "" },
    },
    faq: { title: "FAQ", items: [] as any[] },
  },
};

export default function EggyCarPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <GameSection content={gameConfig.content} />
      </div>

      <div className="max-w-6xl mx-auto px-4 pb-8">
        <EggyCarContent content={articleContent} />
      </div>

      {/* 🎮 平台下载区域 */}
      <div className="flex justify-center mt-6 mb-10 gap-4">
        <a
          href="https://play.google.com/store/apps/details?id=com.playducky.eggycar"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-green-600 text-white rounded-xl px-5 py-2 hover:bg-green-700 transition-colors"
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
            <div className="text-sm font-semibold -mt-0.5">Google Play</div>
          </div>
        </a>

        <a
          href="https://apps.apple.com/us/app/eggy-car/id1234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-black text-white rounded-xl px-5 py-2 hover:bg-gray-800 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mr-2"
          >
            <path d="M16.365 1.43a4.418 4.418 0 0 1-1.062 3.366 4.12 4.12 0 0 1-3.168 1.542 4.453 4.453 0 0 1 1.07-3.386A4.611 4.611 0 0 1 16.365 1.43ZM20.367 17.26a8.837 8.837 0 0 1-.831 1.523 8.328 8.328 0 0 1-1.058 1.301c-.685.683-1.419.976-2.198.99-.559 0-1.178-.16-1.848-.478-.67-.317-1.289-.475-1.855-.475-.598 0-1.24.158-1.927.475-.689.318-1.257.49-1.7.518-.751.03-1.505-.268-2.261-.896a9.37 9.37 0 0 1-1.14-1.296 9.342 9.342 0 0 1-1.02-1.559c-.894-1.62-1.341-3.192-1.341-4.72 0-1.39.3-2.597.903-3.62a5.87 5.87 0 0 1 2.021-2.03 5.349 5.349 0 0 1 2.734-.783c.538 0 1.243.183 2.11.548.864.365 1.419.55 1.663.55.184 0 .799-.205 1.847-.615 1.006-.385 1.853-.544 2.536-.474 1.875.15 3.286.886 4.22 2.207-1.676 1.03-2.509 2.469-2.496 4.313.013 1.438.534 2.635 1.564 3.594.466.438.982.782 1.547 1.034-.124.356-.263.698-.415 1.025Z" />
          </svg>
          <div className="text-left leading-tight">
            <div className="text-xs font-light">Download on the</div>
            <div className="text-sm font-semibold -mt-0.5">App Store</div>
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