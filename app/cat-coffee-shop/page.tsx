'use client'; // Mark this component as a client-side component

import React from 'react';
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Header } from "@/components/layout/Header";
import { GameSection } from "@/components/game-section/GameSection";
import { OtherGames } from "@/components/other-games/OtherGames";
import CatCoffeeShopContent from "@/components/content/CatCoffeeShopContent"; // Updated import
import { Footer } from "@/components/layout/Footer";
import { getOtherGames } from "@/app/games/game-data";
import { generateGameSchema } from "@/app/schema";
import { guideContent } from './content';
import Image from 'next/image'; // Importing Image component from next/image


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
    title: "Cat Coffee Shop Ultimate Idle Management Guide",
    description: "Maximize your earnings and efficiency in Cat Coffee Shop with this comprehensive strategy guide.",
    url: "/cat-coffee-shop"
  },
  content: {
    header: {
      title: "Cat Coffee Shop",
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
        description: "Play Cat Coffee Shop - a delightful idle game where you run your own cat café and manage a team of cute assistants!"
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
      title: "Rate Cat Coffee Shop!",
      votes: "votes",
      initialRating: 0,
      initialVotes: 0,
    },
    gameSection: {
      title: "Cat Coffee Shop",
      game: {
        url: "https://tombofthemask.com/games/cat-coffee-shop/",
        title: "Cat Coffee Shop",
        externalUrl: "/cat-coffee-shop/index.html",
      },
    },
    otherGames: {
      title: "Other Games",
      cardLabels: { playButton: "Play Now" },
    },
    features: { title: "Features", items: [] },
    howToPlay: { title: "How to Play", description: "", image: "", imageAlt: "" },
    whatIs: { title: "What is Cat Coffee Shop?", description: "", logo: { src: "", alt: "" } },
    faq: { title: "FAQ", items: [] },
  },
};

export default function CatCoffeeShopPage() {
  const openGameInNewWindow = () => {
    // Open game in a new window
    window.open('https://gamecomets.com/games/cat-coffee-shop/', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Header />

      {/* Play Now Button placed at the top */}
      <div className="text-center my-8">
        <button
          onClick={openGameInNewWindow}
          className="bg-gradient-to-r from-yellow-500 to-pink-600 text-white py-3 px-6 rounded-full text-lg font-bold hover:opacity-90 transition duration-300"
        >
          Play Cat Coffee Shop Now!
        </button>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Image showing the game preview and centered */}
        <div className="text-center mb-8">
          <a href="https://gamecomets.com/games/cat-coffee-shop/" target="_blank">
            <Image
              src="/assets/cat-coffee-shop/cat-coffee-shop-cozygame-cover.webp" // Replace with actual image path
              alt="Cat Coffee Shop Preview"
              className="rounded-lg shadow-md mx-auto"
              width={800} // Define width for optimization
              height={450} // Define height for optimization
            />
          </a>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-8">
        <OtherGames games={getOtherGames()} onGameSelect={() => {}} />
      </div>

      <div className="max-w-6xl mx-auto px-4 pb-8">
        <CatCoffeeShopContent content={guideContent} />
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