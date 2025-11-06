import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Header } from "@/components/layout/Header";
import { GameSection } from "@/components/game-section/GameSection";
import { OtherGames } from "@/components/other-games/OtherGames";
import RagdollHitStickmanContent from "@/components/content/RagdollHitStickmanContent";
import { Footer } from "@/components/layout/Footer";
import { getOtherGames } from "@/app/games/game-data";
import { generateGameSchema } from "@/app/schema";
import { articleContent } from "./content";

export const metadata: Metadata = {
  // --- Standard SEO Metadata ---
  title: `Ragdoll Stickman Showdown: Ultimate Physics Fighting Guide`,
  description:
    "Master the chaos of ragdoll physics combat in Ragdoll Stickman Showdown! Learn precise timing, clever positioning, and momentum control for hilarious stickman battles. Complete strategy guide inside!",
  alternates: { canonical: "https://www.cozygame.net/ragdoll-stickman-showdown" },
  
  // --- Open Graph (Facebook/Social Sharing) ---
  openGraph: {
    title: "Ragdoll Stickman Showdown Strategy Guide: Master Physics-Based Fighting and Hilarious Combat",
    description:
      "Dominate chaotic stickman battles with precise timing and momentum control! Learn ragdoll physics, terrain manipulation, and multiplayer strategies in Ragdoll Stickman Showdown.",
    url: "https://www.cozygame.net/ragdoll-stickman-showdown",
    siteName: "Duck Duck Click",
    images: [
      {
        url: "/assets/ragdoll-hit-stickman/ragdoll-hit-stickman-logo.webp", // Assuming image path remains the same for now
        width: 1200,
        height: 630,
        alt: "Ragdoll Stickman Showdown Strategy Guide: Physics Fighting Fun",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  
  // --- Twitter Card (X/Social Sharing) ---
  twitter: {
    card: "summary_large_image",
    title: "Ragdoll Stickman Showdown: Ultimate Physics Combat and Hilarious Fighting Guide",
    description:
      "Master ragdoll physics and strategic positioning in Ragdoll Stickman Showdown. Learn to control chaos and dominate stickman battles with precision timing!",
    images: ["/assets/ragdoll-hit-stickman/ragdoll-hit-stickman-logo.webp"],
  },
  
  // --- Robots Instructions ---
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
    title: "Ragdoll Hit Stickman: Ultimate Physics Fighting and Hilarious Combat Guide",
    description:
      "Master ragdoll physics combat in Ragdoll Hit Stickman! Learn timing, positioning, and momentum control for chaotic stickman battles.",
    url: "/ragdoll-hit-stickman",
  },
  content: {
    header: {
      title: "Ragdoll Hit Stickman",
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
        description: `Play Ragdoll Hit Stickman - a hilarious physics-based fighting game that combines chaotic stickman battles with precise ragdoll physics. Master timing, positioning, and momentum control in single-player campaigns, survival modes, and competitive multiplayer. No downloads required - play directly in your browser!`,
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
          { text: "Ragdoll Hit Stickman", href: "/ragdoll-hit-stickman" },
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
      title: "Rate Ragdoll Hit Stickman!",
      votes: "votes",
      initialRating: 0,
      initialVotes: 0,
    },
    gameSection: {
      title: "Ragdoll Hit Stickman",
      game: {
        url: "/game/ragdoll-hit-stickman/index.html",
        title: "Ragdoll Hit Stickman",
        externalUrl: "https://www.gameflare.com/embed/ragdoll-hit-stickman/",
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
      title: "What is Ragdoll Hit Stickman?",
      description: "",
      logo: { src: "", alt: "" },
    },
    faq: { title: "FAQ", items: [] as any[] },
  },
};

export default function RagdollHitStickmanPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <GameSection content={gameConfig.content} />
      </div>

      <div className="max-w-6xl mx-auto px-4 pb-8">
        <RagdollHitStickmanContent content={articleContent} />
      </div>

      {/* 插入 YouTube 视频 */}
      <div className="video-wrapper my-8 text-center">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/a1xDq-ETqXE?si=dHf2T8ZEBjMOYceO"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          loading="lazy"
          className="mx-auto rounded-lg shadow-md"
        ></iframe>
        <p className="text-sm text-gray-500 mt-2">
          <strong>The Ultimate Ragdoll Stickman Showdown Strategy</strong>: Physics-Powered Combat Tips and Tricks!
        </p>
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