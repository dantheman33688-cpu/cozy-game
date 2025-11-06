import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Header } from "@/components/layout/Header";
import { GameSection } from "@/components/game-section/GameSection";
import { OtherGames } from "@/components/other-games/OtherGames";
import RocketFortressContent from "@/components/content/RocketFortressContent";
import { Footer } from "@/components/layout/Footer";
import { getOtherGames } from "@/app/games/game-data";
import { generateGameSchema } from "@/app/schema";
import { articleContent } from "./content";

export const metadata: Metadata = {
  title: `Rocket Fortress: Ultimate Demon-Slaying Clicker Strategy Guide`,
  description:
    "Crush the Infernal Gate! Master holy rocket volleys and high-speed clicking rhythm. Learn optimal resource allocation, upgrade synergy, and fortress evolutions in this complete Rocket Fortress strategy guide.",
  alternates: { canonical: "https://www.cozygame.net/rocket-fortress" },
  openGraph: {
    title: "Rocket Fortress Strategy Guide: Master Holy Rocket Tactics and Demon-Slaying",
    description:
      "Launch holy rockets against demon hordes! Learn strategic clicking, upgrade paths, and fortress building in Rocket Fortress. Ultimate demon-slaying guide!",
    url: "https://www.cozygame.net/rocket-fortress",
    siteName: "Duck Duck Click",
    images: [
      {
        url: "/assets/rocket-fortress/rocket-fortress-logo.webp",
        width: 1200,
        height: 630,
        alt: "Rocket Fortress Strategy Guide: Holy Rockets vs Demons",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rocket Fortress: Ultimate Holy Rocket and Demon-Slaying Guide",
    description:
      "Master strategic clicking and upgrade optimization in Rocket Fortress. Learn to build unstoppable fortresses against demon hordes!",
    images: ["/assets/rocket-fortress/rocket-fortress-logo.webp"],
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
    title: "Rocket Fortress: Ultimate Demon-Slaying Clicker Strategy Guide",
    description:
      "Master holy rocket tactics and fortress building in Rocket Fortress. Learn strategic clicking, upgrade optimization, and demon-slaying strategies.",
    url: "/rocket-fortress",
  },
  content: {
    header: {
      title: "Rocket Fortress",
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
        description: `Play Rocket Fortress - an intense strategic clicker game that combines holy rocket warfare with demon-slaying action. Build your fortress, upgrade your rockets, and defend against infernal hordes. No downloads required - play directly in your browser!`,
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
          { text: "Rocket Fortress", href: "/rocket-fortress" },
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
      title: "Rate Rocket Fortress!",
      votes: "votes",
      initialRating: 0,
      initialVotes: 0,
    },
    gameSection: {
      title: "Rocket Fortress",
      game: {
        url: "/game/rocket-fortress/index.html",
        title: "Rocket Fortress",
        externalUrl: "https://escaperoad2.io/rocket-fortress.embed",
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
      title: "What is Rocket Fortress?",
      description: "",
      logo: { src: "", alt: "" },
    },
    faq: { title: "FAQ", items: [] as any[] },
  },
};

export default function RocketFortressPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <GameSection content={gameConfig.content} />
      </div>

      <div className="max-w-6xl mx-auto px-4 pb-8">
        <RocketFortressContent content={articleContent} />
      </div>
      
      {/* 🎬 教学视频嵌入区域 */}
      <div className="video-wrapper my-8 text-center">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/rzR5EKXGAUw?si=HMumxMtdGV4htBI3"
          title="The ULTIMATE Rocket Fortress Upgrade Guide: Max Damage and Auto-Fire Strategy!"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          loading="lazy"
          className="mx-auto rounded-lg shadow-md"
        ></iframe>
        <p className="text-sm text-gray-500 mt-2">
          The <strong>ULTIMATE Rocket Fortress Upgrade Guide</strong>: Max Damage and Auto-Fire Strategy!
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