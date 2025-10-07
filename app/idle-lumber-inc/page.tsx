import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Header } from "@/components/layout/Header";
import { GameSection } from "@/components/game-section/GameSection";
import { OtherGames } from "@/components/other-games/OtherGames";
import IdleLumberIncContent from "@/components/content/IdleLumberIncContent";
import { Footer } from "@/components/layout/Footer";
import { getOtherGames } from "@/app/games/game-data";
import { generateGameSchema } from "@/app/schema";
import { articleContent } from './content';

export const metadata: Metadata = {
  title: `Idle Lumber Inc Ultimate Tycoon Strategy Guide | ${siteConfig.domain}`,
  description: "Maximize your earnings and efficiency in Idle Lumber Inc with this comprehensive strategy guide. Learn the fastest path to tycoon status!",
  alternates: { canonical: 'https://www.cozygame.net/idle-lumber-inc' },
  openGraph: {
    title: "Idle Lumber Inc Ultimate Tycoon Strategy Guide",
    description: "Maximize your earnings and efficiency in Idle Lumber Inc with this comprehensive strategy guide. Learn the fastest path to tycoon status!",
    url: 'https://www.cozygame.net/idle-lumber-inc',
    siteName: 'Duck Duck Click',
    images: [{ url: '/assets/idle-lumber-inc/Idle-lumber-Inc.png', width: 1200, height: 630, alt: 'Idle Lumber Inc Strategy Guide' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Idle Lumber Inc Ultimate Tycoon Strategy Guide",
    description: "Maximize your earnings and efficiency in Idle Lumber Inc with this comprehensive strategy guide.",
    images: ['/assets/idle-lumber-inc/Idle-lumber-Inc.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// 使用更精确的类型定义
type GameConfig = {
  metadata: {
    title: string;
    description: string;
    url: string;
  };
  content: {
    header: {
      title: string;
      search: {
        placeholder: string;
        ariaLabel: string;
        buttonAriaLabel: string;
      };
      navigation: {
        links: Array<{
          text: string;
          href: string;
        }>;
      };
    };
    footer: {
      about: { 
        title: string; 
        description: string; 
      };
      quickLinks: { title: string; links: Array<{ text: string; href: string }> };
      games: { title: string; links: Array<{ text: string; href: string }> };
      social: { title: string; links: Array<{ text: string; href: string }> };
      legal: { title: string; links: Array<{ text: string; href: string }> };
      copyright: { text: string; subText: string };
    };
    rating: {
      title: string;
      votes: string;
      initialRating: number;
      initialVotes: number;
    };
    gameSection: {
      title: string;
      game: {
        url: string;
        title: string;
        externalUrl: string;
      };
    };
    otherGames: {
      title: string;
      cardLabels: { playButton: string };
    };
    features: { title: string; items: any[] };
    howToPlay: { title: string; description: string; image: string; imageAlt: string };
    whatIs: { title: string; description: string; logo: { src: string; alt: string } };
    faq: { title: string; items: any[] };
  };
};

const gameConfig: GameConfig = {
  metadata: {
    title: "Idle Lumber Inc Ultimate Tycoon Strategy Guide",
    description: "Maximize your earnings and efficiency in Idle Lumber Inc with this comprehensive strategy guide.",
    url: "/idle-lumber-inc"
  },
  content: {
    header: {
      title: "Idle Lumber Inc.",
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
          { text: "FAQ", href: "#faq" }
        ]
      },
    },
    footer: {
      about: { 
        title: "About", 
        description: `Play Idle Lumber Inc - a free physics-based idle game where you build and manage your lumber empire right in your browser. No downloads required.` 
      },
      quickLinks: { 
        title: "Quick Links", 
        links: [
          { text: "Linktr", href: "https://linktr.ee/KnitOut" },
        ] 
      },
      games: { 
        title: "Popular Games", 
        links: [
          { text: "Thorn And Balloons", href: "/" },
        { text: "Idle Lumber Inc", href: "/idle-lumber-inc" },
        { text: "Cat Coffee Shop", href: "/cat-coffee-shop" },
        { text: "Little Farm Clicker", href: "/little-farm-clicker" },
        { text: "Monkey Mart", href: "/monkey-mart" },
        ] 
      },
      social: { 
        title: "Follow Us", 
        links: [
          { text: "Twitter", href: "https://twitter.com" }
        ] 
      },
      legal: { 
        title: "Legal", 
        links: [
          { text: "About Us", href: "/about" },
        { text: "Contact Us", href: "/contact" },
        { text: "Privacy Policy", href: "/privacy-policy" },
        { text: "Terms of Service", href: "/terms-of-service" }
        ] 
      },
      copyright: { 
        text: "© 2025 Cozy Games. All rights reserved.", 
        subText: "All games are the property of their respective owners." 
      },
    },
    rating: {
      title: "Rate Idle Lumber Inc!",
      votes: "votes",
      initialRating: 0,
      initialVotes: 0,
    },
    gameSection: {
      title: "Idle Lumber Inc.",
      game: {
        url: "https://g.igroutka.ru/games/17/qPGZvCNuiysorzHD/idle_lumber_inc1/",
        title: "Idle Lumber Inc.",
        externalUrl: "/idle-lumber-inc/index.html",
      },
    },
    otherGames: {
      title: "Other Games",
      cardLabels: { playButton: "Play Now" },
    },
    features: { title: "Features", items: [] },
    howToPlay: { title: "How to Play", description: "", image: "", imageAlt: "" },
    whatIs: { title: "What is Idle Lumber Inc?", description: "", logo: { src: "", alt: "" } },
    faq: { title: "FAQ", items: [] },
  },
};

export default function IdleLumberIncPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <GameSection content={gameConfig.content} />
      </div>
      
      <div className="container mx-auto px-4 pb-8">
        <OtherGames games={getOtherGames()} onGameSelect={() => {}} />
      </div>

      <div className="max-w-6xl mx-auto px-4 pb-8">
        <IdleLumberIncContent content={articleContent} />
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