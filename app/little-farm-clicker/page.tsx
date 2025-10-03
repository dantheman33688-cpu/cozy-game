// app/little-farm-clicker/page.tsx
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Header } from "@/components/layout/Header";
import { GameSection } from "@/components/game-section/GameSection";
import { OtherGames } from "@/components/other-games/OtherGames";
import { Footer } from "@/components/layout/Footer";
import { getOtherGames } from "@/app/games/game-data";
import { generateGameSchema } from "@/app/schema";
import { LittleFarmClickerContent } from "@/components/content/LittleFarmClickerContent";
import { littleFarmClickerContent } from './content';

export const metadata: Metadata = {
  title: `Little Farm Clicker Ultimate Guide: Best Upgrades & Strategies`,
  description: "Master Little Farm Clicker with our comprehensive strategy guide. Learn the best upgrade paths, money-making tips, and how to automate your farm!",
  alternates: { canonical: 'https://www.cozygame.net/little-farm-clicker' },
  openGraph: {
    title: "Little Farm Clicker Ultimate Strategy Guide",
    description: "Maximize your farm's efficiency with this comprehensive Little Farm Clicker strategy guide. Learn the best upgrade paths and automation tips!",
    url: 'https://www.cozygame.net/little-farm-clicker',
    siteName: 'Cozy Game',
    images: [{ url: '/assets/little-farm-clicker/little-farm-clicker-logo.png', width: 1200, height: 630, alt: 'Little Farm Clicker Strategy Guide' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Little Farm Clicker Ultimate Strategy Guide",
    description: "Become a farming tycoon with our Little Farm Clicker strategy guide. Learn the best upgrades and automation techniques!",
    images: ['/assets/little-farm-clicker/little-farm-clicker-logo.png'],
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
    title: "Little Farm Clicker Ultimate Strategy Guide",
    description: "Master farming automation and maximize profits in Little Farm Clicker with our comprehensive guide.",
    url: "/little-farm-clicker"
  },
  content: {
    header: {
      title: "Little Farm Clicker",
      search: {
        placeholder: "Find your next favorite game...",
        ariaLabel: "Search games",
        buttonAriaLabel: "Search",
      },
      navigation: {
        links: [
          { text: "Start Farming", href: "#game-section" },
          { text: "Popular Games", href: "#other-games" },
          { text: "Game Guide", href: "#game-guide" },
          { text: "Upgrade Tips", href: "#upgrade-tips" },
          { text: "FAQ", href: "#faq" }
        ]
      },
    },
    footer: {
      about: { 
        title: "About Little Farm Clicker", 
        description: `Play Little Farm Clicker - a relaxing farming simulation game where you build and manage your farm. Grow crops, raise animals, and automate your farm for maximum profits!` 
      },
      quickLinks: { 
        title: "Quick Links", 
        links: [
          { text: "Home", href: "/" },
          { text: "All Games", href: "/games" },
          { text: "About Us", href: "/about" },
          { text: "Contact", href: "/contact" }
        ] 
      },
      games: { 
        title: "Similar Games", 
        links: [
          { text: "Idle Lumber Inc", href: "/idle-lumber-inc" },
          { text: "Farmville", href: "/farmville" },
          { text: "Hay Day", href: "/hay-day" }
        ] 
      },
      social: { 
        title: "Follow Us", 
        links: [
          { text: "Facebook", href: "https://facebook.com" },
          { text: "Twitter", href: "https://twitter.com" },
          { text: "Instagram", href: "https://instagram.com" }
        ] 
      },
      legal: { 
        title: "Legal", 
        links: [
          { text: "Privacy Policy", href: "/privacy" },
          { text: "Terms of Service", href: "/terms" },
          { text: "Cookie Policy", href: "/cookies" }
        ] 
      },
      copyright: { 
        text: "© 2025 Cozy Games. All rights reserved.", 
        subText: "All games are the property of their respective owners." 
      },
    },
    rating: {
      title: "Rate Little Farm Clicker!",
      votes: "votes",
      initialRating: 4.8,
      initialVotes: 124,
    },
    gameSection: {
      title: "Little Farm Clicker",
      game: {
        url: "https://www.miniplay.com/embed/little-farm-clicker",
        title: "Little Farm Clicker",
        externalUrl: "/little-farm-clicker/index.html",
      },
    },
    otherGames: {
      title: "Other Farming Games",
      cardLabels: { playButton: "Play Now" },
    },
    features: { 
      title: "Key Features", 
      items: [
        { title: "Crop Variety", description: "Grow wheat, corn, pumpkins and more" },
        { title: "Animal Husbandry", description: "Raise chickens, cows, and other farm animals" },
        { title: "Automation", description: "Upgrade to automate harvesting and collection" },
        { title: "Progression", description: "Unlock new crops and animals as you progress" }
      ] 
    },
    howToPlay: { 
      title: "How to Play", 
      description: "Start by planting basic crops like wheat. Harvest them to earn coins, then use those coins to buy more plots, upgrade your farm, and unlock animals. As you progress, you can automate processes to earn money even when you're not playing.",
      image: "/assets/little-farm-clicker/how-to-play.png",
      imageAlt: "Little Farm Clicker gameplay screenshot" 
    },
    whatIs: { 
      title: "What is Little Farm Clicker?", 
      description: "Little Farm Clicker is a relaxing farming simulation game where players build and manage their own farm. Plant crops, raise animals, and upgrade your farm to maximize profits. The game features idle mechanics that allow your farm to generate income even when you're not actively playing.",
      logo: { src: "/assets/little-farm-clicker/logo.png", alt: "Little Farm Clicker Logo" } 
    },
    faq: { 
      title: "Frequently Asked Questions", 
      items: [
        {
          question: "How do I earn money faster?",
          answer: "Focus on wheat as your primary crop in the early game. It grows quickly and provides steady income. Also, invest in chickens early for passive egg production."
        },
        {
          question: "What should I upgrade first?",
          answer: "Prioritize automation upgrades to reduce manual clicking. Then focus on growth speed to increase your crop yield."
        },
        {
          question: "Is there an end to the game?",
          answer: "Little Farm Clicker is designed as an endless game. There's no final goal - just continuous progression and farm optimization."
        }
      ] 
    },
  },
};

export default function LittleFarmClickerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-emerald-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <GameSection content={gameConfig.content} />
      </div>
      
      <div className="container mx-auto px-4 pb-8">
        <OtherGames games={getOtherGames()} onGameSelect={() => {}} />
      </div>


      <div className="max-w-6xl mx-auto px-4 pb-8">
        <LittleFarmClickerContent />
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