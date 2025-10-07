// app/monkey-mart/page.tsx
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Header } from "@/components/layout/Header";
import { GameSection } from "@/components/game-section/GameSection";
import { OtherGames } from "@/components/other-games/OtherGames";
import { Footer } from "@/components/layout/Footer";
import { getOtherGames } from "@/app/games/game-data";
import { generateGameSchema } from "@/app/schema";
import MonkeyMartContentComponent from "@/components/content/MonkeyMartContent";

export const metadata: Metadata = {
  title: "Monkey Mart Guide: Tips, Strategies, and Efficient Store Management",
  description: "Master Monkey Mart with expert strategies, optimize your store layout, manage staff effectively, and overcome common pain points for maximum profits.",
  alternates: { canonical: 'https://www.cozygame.net/monkey-mart' },
  openGraph: {
    title: "Monkey Mart Ultimate Strategy Guide",
    description: "Maximize your store's efficiency with this comprehensive Monkey Mart strategy guide. Learn the best layout and management tips!",
    url: 'https://www.cozygame.net/monkey-mart',
    siteName: 'Cozy Game',
    images: [{ url: '/assets/monkey-mart/monkey-mart-logo.png', width: 1200, height: 630, alt: 'Monkey Mart Strategy Guide' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Monkey Mart Ultimate Strategy Guide",
    description: "Become a store management expert with our Monkey Mart strategy guide. Learn the best layout and staff management techniques!",
    images: ['/assets/monkey-mart/monkey-mart-logo.png'],
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
    title: "Monkey Mart Ultimate Strategy Guide",
    description: "Master store management and maximize profits in Monkey Mart with our comprehensive guide.",
    url: "/monkey-mart"
  },
  content: {
    header: {
      title: "Monkey Mart",
      search: {
        placeholder: "Find your next favorite game...",
        ariaLabel: "Search games",
        buttonAriaLabel: "Search",
      },
      navigation: {
        links: [
          { text: "Play Game", href: "#game-section" },
          { text: "Popular Games", href: "#other-games" },
          { text: "Game Guide", href: "#game-guide" },
          { text: "Management Tips", href: "#management-tips" },
          { text: "FAQ", href: "#faq" }
        ]
      },
    },
    footer: {
      about: { 
        title: "About Monkey Mart", 
        description: `Play Monkey Mart - a fun store management simulation where you run your own monkey supermarket. Stock shelves, manage staff, and serve customers to maximize profits!` 
      },
      quickLinks: { 
        title: "Quick Links", 
        links: [
          { text: "Linktr", href: "https://linktr.ee/KnitOut" },
        ] 
      },
      games: { 
        title: "Similar Games", 
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
          { text: "Twitter", href: "https://twitter.com"}
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
      title: "Rate Monkey Mart!",
      votes: "votes",
      initialRating: 4.7,
      initialVotes: 98,
    },
    gameSection: {
      title: "Milk Clicker",
      game: {
        url: "https://cookie-clicker2.com/milk-clicker.embed",
        title: "Monkey Mart",
        externalUrl: "/milk-clicker/index.html",
      },
    },
    otherGames: {
      title: "Other Management Games",
      cardLabels: { playButton: "Play Now" },
    },
    features: { 
      title: "Key Features", 
      items: [
        { title: "Store Management", description: "Stock shelves, manage inventory, and serve customers" },
        { title: "Staff Management", description: "Hire and train staff to automate store operations" },
        { title: "Product Variety", description: "Sell bananas, corn, milk and other products" },
        { title: "Progression", description: "Upgrade your store and unlock new products as you progress" }
      ] 
    },
    howToPlay: { 
      title: "How to Play", 
      description: "Start by stocking basic products like bananas and corn. Serve customers to earn coins, then use those coins to hire staff, upgrade your store, and unlock new products. As you progress, you can automate processes to earn money even when you're not playing.",
      image: "/assets/monkey-mart/how-to-play.png",
      imageAlt: "Monkey Mart gameplay screenshot" 
    },
    whatIs: { 
      title: "What is Monkey Mart?", 
      description: "Monkey Mart is a fun store management simulation game where players run their own monkey supermarket. Stock shelves, manage staff, and serve customers to maximize profits. The game features automation mechanics that allow your store to generate income even when you're not actively playing.",
      logo: { src: "/assets/monkey-mart/logo.png", alt: "Monkey Mart Logo" } 
    },
    faq: { 
      title: "Frequently Asked Questions", 
      items: [
        {
          question: "How do I earn money faster?",
          answer: "Focus on keeping high-demand items well-stocked. Bananas and corn are good starting products. Also, hire staff early to automate stocking and checkout processes."
        },
        {
          question: "What should I upgrade first?",
          answer: "Prioritize storage upgrades to prevent inventory overflow. Then focus on staff training to increase efficiency and customer satisfaction."
        },
        {
          question: "How do I handle customer queues?",
          answer: "Hire more cashiers to reduce wait times. Also, ensure your shelves are well-stocked to prevent customers from waiting for restocking."
        }
      ] 
    },
  },
};

export default function MonkeyMartPage() {
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
        <MonkeyMartContentComponent />
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