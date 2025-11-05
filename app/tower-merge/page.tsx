import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Header } from "@/components/layout/Header";
import { GameSection } from "@/components/game-section/GameSection";
import { OtherGames } from "@/components/other-games/OtherGames";
import TowerMergeContent from "@/components/content/TowerMergeContent";
import { Footer } from "@/components/layout/Footer";
import { getOtherGames } from "@/app/games/game-data";
import { generateGameSchema } from "@/app/schema";
import { articleContent } from "./content";

export const metadata: Metadata = {
  title: `Merge, Strategize, Defend: Tower Merge Ultimate Resource Management Guide`,
  description:
    "Unleash your strategic mastery in Tower Merge! Master the Merge → Upgrade → Defend loop, pace your Wood, Stone, and Gold resources, and build the perfect defense network to withstand epic Dragon assaults. Comprehensive guide inside!",
  alternates: { canonical: "https://www.cozygame.net/tower-merge" },
  openGraph: {
    title: "Tower Merge Strategy Guide: Master Resource Merging and Defense Pacing",
    description:
      "Master the unique merging mechanics, optimize Wood and Gold resource production, and learn perfect skill timing to defeat every Dragon boss in Tower Merge. Ultimate strategy guide for veterans!",
    url: "https://www.cozygame.net/tower-merge",
    siteName: "Cozy Game", // Assuming this is correct from your original
    images: [
      {
        url: "/assets/tower-merge/tower-merge-logo.webp",
        width: 1200,
        height: 630,
        alt: "Tower Merge Strategy Guide: Merge, Upgrade, Defend",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tower Merge Strategy: Resource Pacing and Dragon Boss Tactics Guide",
    description:
      "Every merge matters! Learn the optimal resource pacing (Wood, Stone, Gold) for the Early, Mid, and Late Game to conquer the next-gen tower defense challenge, Tower Merge.",
    images: ["/assets/tower-merge/tower-merge-logo.webp"],
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
    title: "Tower Merge: Ultimate Strategy Guide for Next-Gen Tower Defense",
    description:
      "Master Tower Merge's unique merging mechanics and tower defense strategies. Build impenetrable defenses and survive epic dragon assaults.",
    url: "/tower-merge",
  },
  content: {
    header: {
      title: "Tower Merge",
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
        description: `Play Tower Merge - a revolutionary tower defense game that combines strategic merging puzzles with intense combat. Merge resources, build legendary towers, and withstand epic dragon assaults right in your browser. No downloads required.`,
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
          { text: "Tower Merge", href: "/tower-merge" },
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
      title: "Rate Tower Merge!",
      votes: "votes",
      initialRating: 0,
      initialVotes: 0,
    },
    gameSection: {
      title: "Tower Merge",
      game: {
        url: "/game/tower-merge/index.html",
        title: "Tower Merge",
        externalUrl:
          "https://gamesforboys.net/wp-content/uploads/2025/game/tower-merge.html",
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
      title: "What is Tower Merge?",
      description: "",
      logo: { src: "", alt: "" },
    },
    faq: { title: "FAQ", items: [] as any[] },
  },
};

export default function TowerMergePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <GameSection content={gameConfig.content} />
      </div>

      <div className="max-w-6xl mx-auto px-4 pb-8">
        <TowerMergeContent content={articleContent} />
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