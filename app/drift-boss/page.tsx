import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Header } from "@/components/layout/Header";
import { GameSection } from "@/components/game-section/GameSection";
import { OtherGames } from "@/components/other-games/OtherGames";
import DriftbossContent from "@/components/content/DriftbossContent";
import { Footer } from "@/components/layout/Footer";
import { getOtherGames } from "@/app/games/game-data";
import { generateGameSchema } from "@/app/schema";
import { articleContent } from "./content";

export const metadata = {
  // --- SEO Title and Description (Primary Search Results) ---
  title: `Drift Boss: Ultimate One-Tap Precision Drifting Guide`,
  description:
    "Master the ultimate one-tap challenge in Drift Boss! Learn the Tap → Drift → Collect → Upgrade loop, perfect your timing, and dominate the Global Leaderboards. Complete strategy guide inside!", // Optimized for search snippet length
  
  // --- Canonical URL ---
  alternates: { canonical: "https://www.cozygame.net/drift-boss" },
  
  // --- OpenGraph (Social Sharing - Facebook, LinkedIn, etc.) ---
  openGraph: {
    title: "Drift Boss Strategy Guide: Master One-Tap Precision Drifting",
    description:
      "Master the art of one-tap drifting, optimize coin collection strategies, and learn advanced timing techniques to conquer every corner in Drift Boss. Ultimate racing guide!",
    url: "https://www.cozygame.net/drift-boss",
    siteName: "Cozy Game",
    images: [
      {
        url: "/assets/drift-boss/drift-boss-logo.webp",
        width: 1200,
        height: 630,
        alt: "Drift Boss Strategy Guide: Precision Timing Drifting",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  
  // --- Twitter Card (Social Sharing - X/Twitter) ---
  twitter: {
    card: "summary_large_image",
    title: "Drift Boss: One-Tap Precision and Timing Mastery Guide",
    description:
      "Every tap matters! Learn the perfect timing for all vehicles to maximize drift combos and coin collection in the addictive racing challenge, Drift Boss.",
    images: ["/assets/drift-boss/drift-boss-logo.webp"],
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
    title: "Drift Like a Boss: Ultimate One-Tap Drift Challenge Guide",
    description:
      "Master precision timing in Drift Like a Boss! Learn the one-tap control and dominate global leaderboards.",
    url: "/drift-like-a-boss",
  },
  content: {
    header: {
      title: "Drift Like a Boss",
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
        description: `Play Drift Like a Boss - a precision timing racing game that combines one-tap controls with adrenaline-pumping drifting action. Master perfect timing, collect coins, and dominate leaderboards right in your browser. No downloads required.`,
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
          { text: "Drift Like a Boss", href: "/drift-like-a-boss" },
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
      title: "Rate Drift Like a Boss!",
      votes: "votes",
      initialRating: 0,
      initialVotes: 0,
    },
    gameSection: {
      title: "Drift Like a Boss",
      game: {
        url: "/game/drift-boss/index.html",
        title: "Drift Like a Boss",
        externalUrl:
          "https://driftboss.io/drift-boss.embed",
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
      title: "What is Drift Like a Boss?",
      description: "",
      logo: { src: "", alt: "" },
    },
    faq: { title: "FAQ", items: [] as any[] },
  },
};

export default function DriftLikeABossPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <GameSection content={gameConfig.content} />
      </div>

      <div className="max-w-6xl mx-auto px-4 pb-8">
        <DriftbossContent content={articleContent} />
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