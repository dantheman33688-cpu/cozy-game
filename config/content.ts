import { siteConfig } from "./site";

export const content = {
  header: {
    title: siteConfig.name,
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
      ]
    }
  },
  footer: {
    about: {
      title: "About",
      description: `Play ${siteConfig.name} - a free physics-based battle game right in your browser. No downloads required.`,
    },
    quickLinks: {
      title: "Quick Links",
      links: [
        { text: "Linktr", href: "https://linktr.ee/KnitOut" },
      ]
    },
    games: {  // 添加 games section
      title: "Games",
      links: [
        { text: "My Perfect Hotel", href: "/" },
        { text: "Idle Lumber Inc", href: "/idle-lumber-inc" },
        { text: "Cat Coffee Shop", href: "/cat-coffee-shop" },
        { text: "Little Farm Clicker", href: "/little-farm-clicker" },
        { text: "Monkey Mart", href: "/monkey-mart" },
      ]
    },
    social: {
      title: "Share",
      links: [
        {
          icon: "Twitter",
          href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(siteConfig.name)}&url=${encodeURIComponent(siteConfig.url)}&hashtags=${siteConfig.social.twitter},Games`
        }
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
      text: "© {year} Cozy Games. All rights reserved.",
      subText: "All games on this platform are free to play and do not require downloads."
    }
  },
  rating: {
    title: "Rate My Perfect Hotel",
    votes: "votes",
    initialRating: 4.8,
    initialVotes: 146
  },
  gameSection: {
    title: "My Perfect Hotel",
    game: {
      url: 'https://gamesfreez.github.io/my-perfect-hotel/',
      title: "My Perfect Hotel",
      externalUrl: '/game/my-perfect-hotel/index.html'
    }
  },
  otherGames: {
    title: "Hot Games",
    cardLabels: {
      playButton: "Play Now",
    }
  },
    howToPlay: {
      title: "How to Play My Perfect Hotel Online Free - Management Strategy & Controls",
      description: "Playing My Perfect Hotel online free is straightforward: Use mouse clicks on desktop or touch controls on mobile devices to manage hotel operations. Master the core gameplay loop of guest check-ins, revenue collection, room maintenance, and strategic expansion to maximize profits.\n\n" +
        "Success in this hotel simulation game depends on efficient time and resource management. Prioritize upgrading receptionists first to accelerate cash flow, then hire cleaners to maintain room hygiene and customer satisfaction. Complete daily tasks consistently and utilize reward ads to quickly accumulate starting funds and resources for faster progression.\n\n" +
        "Win more profits by focusing on long-term room upgrades, which directly increase rental prices and guest tips. Study your hotel layout to optimize room placement and amenity positioning for better operational efficiency. Keep practicing this free online management game, and you'll soon master the art of hotel profitability!",
      image: "/assets/my-perfect-hotel/my-perfect-hotel.png",
      imageAlt: "My Perfect Hotel Game Guide - Play Free Online, Controls, Strategy, and Management Tutorial"
    },
    whatIs: {
      title: "Everything about My Perfect Hotel - Play This Free Simulation Game Online",
      description: "My Perfect Hotel is a strategic simulation game developed by SayGames where players manage and upgrade their hotel to maximize profits, ensure customer satisfaction, and enhance employee efficiency. You can play this free online game on Poki across multiple platforms including desktop, mobile, and tablet devices.\n\n" +
        "Master the art of hotel management through three core pillars: time management to prioritize guest needs and staff tasks, resource management to wisely invest in upgrades and hiring, and strategic planning to optimize hotel layout and expansion. The game features a realistic business simulation where every task contributes to your revenue stream.\n\n" +
        "While the game's economic management may challenge newcomers, mastering the upgrade system and employee efficiency delivers a deeply satisfying experience. Play this free online simulation game directly in your browser - no downloads needed, just pure hotel management action that keeps you engaged for hours.",
      logo: {
        src: "/assets/my-perfect-hotel/my-perfect-hotel-logo.webp",
        alt: "My Perfect Hotel - Free Online Simulation Game Logo"
      }
    },
    faq: {
      title: "Frequently Asked Questions - My Perfect Hotel Online Game",
      items: [
        {
          value: "where-to-play-free",
          question: "Where can I play My Perfect Hotel for free online?",
          answer: "My Perfect Hotel is available to play for free on Poki and other online gaming platforms. The game supports multiple platforms including desktop computers, mobile devices, and tablets, allowing you to play this simulation game anytime, anywhere without downloads."
        },
        {
          value: "game-controls-mobile-desktop",
          question: "What controls are supported when I play My Perfect Hotel?",
          answer: "On desktop versions, you can use your mouse to interact with guests and rooms. Mobile and tablet versions support touch controls, allowing you to drag and click with your finger. Some versions also support keyboard arrows or WASD keys for navigation around the hotel."
        },
        {
          value: "developer-info",
          question: "Who developed the My Perfect Hotel game?",
          answer: "My Perfect Hotel was developed by SayGames, a prominent game development company known for creating engaging mobile and online games. The game is available through various platforms including Poki, where you can play this free hotel management simulation."
        },
        {
          value: "upgrade-priority",
          question: "What should I upgrade first in My Perfect Hotel?",
          answer: "The optimal upgrade path starts with receptionists to speed up check-ins and improve cash flow. Next, hire cleaners to maintain room hygiene and boost customer satisfaction. Finally, focus on room upgrades for long-term income growth. This strategy ensures maximum profit generation when you play this free online game."
        },
        {
          value: "employee-roles",
          question: "What are the main employee roles and their impacts?",
          answer: "Receptionists handle guest check-ins and payments - their efficiency directly impacts cash flow. Cleaners maintain room hygiene - crucial for guest satisfaction and tips. Servers deliver food and services - they increase additional revenue through tips. Upgrade each employee type to improve their work speed and effectiveness in this free simulation game."
        },
        {
          value: "daily-tasks-importance",
          question: "How important are daily tasks in My Perfect Hotel?",
          answer: "Daily tasks are essential for maintaining hotel profitability. Each completed task contributes to your revenue stream. The manager's daily checklist includes customer flow management, revenue generation, maintenance activities, and expansion planning. Consistent completion of these tasks is key to success when you play this free online management game."
        },
        {
          value: "profit-maximization",
          question: "What's the best strategy to maximize profits?",
          answer: "Focus on the three management skills: time management to prioritize tasks, resource management to invest wisely in upgrades, and strategic planning to optimize hotel layout. Use reward ads to accelerate starting funds, and always balance short-term cash flow improvements with long-term room upgrades for sustained profit growth."
        }
      ]
    },
    features: {
      title: "Key Features of My Perfect Hotel - Play Free Online Simulation Game",
      items: [
        {
          title: "Strategic Hotel Management Core",
          description: "My Perfect Hotel introduces a comprehensive management system where every task generates revenue. Master the daily checklist including guest check-ins, payment collection, room maintenance, and strategic expansion. The game's economic simulation provides authentic business challenges that require careful planning and execution for success when you play this free online game."
        },
        {
          title: "Three Pillars Management System",
          description: "Experience unique skill-based gameplay through three essential management pillars: time management to efficiently handle guest needs and staff tasks, resource management to make smart investment decisions, and strategic planning to optimize hotel layout and expansion. This triple-focus system creates depth and replayability in this free simulation game."
        },
        {
          title: "Progressive Upgrade Path",
          description: "My Perfect Hotel features a carefully balanced upgrade system that rewards strategic thinking. Follow the optimal path from receptionist upgrades to cleaner hiring and room improvements. Each upgrade directly impacts your hotel's profitability and customer satisfaction, creating a satisfying progression system that keeps you engaged when you play this free online game."
        },
        {
          title: "Employee Efficiency Optimization",
          description: "Manage diverse staff roles including receptionists, cleaners, and servers, each with specific impacts on hotel operations. Improve employee efficiency through upgrades and training investments. The game's workforce management system adds realistic business challenges that differentiate this simulation from simpler hotel games available online for free."
        }
      ]
    }
} as const;


