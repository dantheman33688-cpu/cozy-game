Understood\! Here is the final, completely revised **Cozy Games** `README` document, fully translated into English. It preserves the excellent technical structure of your original document while establishing the strong **Cozy Games** brand identity (relaxation, management, no-download) that we've worked to build.

-----

# Cozy Games - Casual Online Gaming Platform

🎮 **Official Website**: [Cozy Games Official Website](https://www.cozygame.net)

📖 **Chinese Version**: [README\_CN.md](https://www.google.com/search?q=./README_CN.md)

This is the official project for the **Cozy Games** casual online gaming platform, built with Next.js. The website is dedicated to providing multiple **free, no-download, low-stress** browser games and is deeply optimized for search engines (SEO) and AI crawlers.

## Project Overview

The **Cozy Games** platform curates **healing simulation, time-management, and idle games** that run directly in the browser, offering users an instant relaxation experience. This project serves as the official website, providing an extensible framework capable of supporting various types of casual browser games.

### Supported Cozy Game List (Example Content)

1.  **[My Perfect Hotel](https://www.google.com/search?q=https://www.cozygame.net/my-perfect-hotel)** - Homepage Feature, hotel management and time-management simulator.
2.  **[Idle Lumber Inc.](https://www.google.com/search?q=https://www.cozygame.net/idle-lumber-inc)** - Idle tycoon game, focusing on resource management and automation.
3.  **[Duck Duck Clicker](https://www.google.com/search?q=https://www.cozygame.net/duck-duck-clicker)** - Simple clicker and incremental game.
4.  **[Travelers Rest](https://www.google.com/search?q=https://www.cozygame.net/travelers-rest)** - Farm and inn simulation (High search potential).
5.  **[Slime Rancher 2](https://www.google.com/search?q=https://www.cozygame.net/slime-rancher-2)** - Exploration and collection cozy game (High search potential).
6.  **[Planet Clicker](https://www.google.com/search?q=https://www.cozygame.net/planet-clicker)** - Idle placement and planet upgrade game.
7.  **[Casual Puzzle Game (Placeholder)](https://www.google.com/search?q=https://www.cozygame.net/puzzle-game-x)** - Satisfies platform breadth requirement.

### Core Features (Refocused on Cozy Games Value)

  - **Multi-Game Embedding & Display** - Supports embedding and showcasing various HTML5 casual games.
  - **Unified Game Page Templates** - Every game features a complete **cozy-themed introduction, low-pressure gameplay guide, and in-depth FAQ strategy**.
  - **Deep SEO Guide Support** - Dedicated, in-depth guide pages for core games like **My Perfect Hotel** to capture high-value long-tail traffic.
  - **Search Engine Optimization (SEO)** - Complete meta tags and structured data, **emphasizing "Cozy Games" and "Free Online"** keywords.
  - **AI Crawler Specific Optimization** - Dedicated `llms.txt` file providing structured information about our casual games.
  - **Responsive Design** - Full support for various devices and screen sizes, ensuring users can relax and play on mobile and tablet.
  - **Game Recommendation System** - Recommends similar **low-stress simulation games** on every game page.

## Technical Stack

  - **Framework**: Next.js 13.5.1 (App Router)
  - **Language**: TypeScript 5.2.2
  - **Styling**: Tailwind CSS 3.3.3
  - **UI Components**: Radix UI (Full accessibility component library)
  - **Deployment**: Vercel
  - **SEO**: next-sitemap 4.2.3
  - **Forms**: React Hook Form + Zod
  - **Icons**: Lucide React

## Project Structure

```
/
├── app/                    # Next.js Application Directory (App Router)
│   ├── my-perfect-hotel/   # My Perfect Hotel Game Page
│   ├── idle-lumber-inc/    # Idle Lumber Inc. Game Page
│   ├── games/              # Game List and Data Configuration
│   ├── about/              # About Page
│   ├── contact/            # Contact Page
│   ├── privacy-policy/     # Privacy Policy Page
│   ├── terms-of-service/   # Terms of Service Page
│   ├── layout.tsx          # Global Layout
│   ├── page.tsx            # Homepage (Featuring My Perfect Hotel)
│   ├── schema.ts           # Structured Data Configuration
│   └── globals.css         # Global Styles
├── components/             # React Component Library
│   ├── game-section/       # Game Display Components
│   ├── layout/             # Layout Components (Header, Footer)
│   ├── templates/          # Page Templates (GamePageTemplate)
│   ├── home/               # Homepage Components
│   ├── features/           # Game Features Components
│   ├── what-is/            # Game Introduction Components
│   ├── how-to-play/        # Gameplay Instructions Components
│   ├── faq/                # FAQ Component
│   ├── other-games/        # Other Game Recommendation Components
│   ├── rating/             # Rating Component
│   └── ui/                 # Base UI Components (Radix UI-based)
├── config/                 # Configuration Files
│   ├── site.ts/js          # Site Base Configuration
│   ├── content.ts          # Game Content Configuration
│   ├── layout.ts           # Layout Configuration
│   └── theme.ts            # Theme Configuration
├── hooks/                  # Custom React Hooks
├── lib/                    # Utility Functions Library
├── public/                 # Static Assets
│   ├── assets/             # Images and Other Resources
│   │   ├── my-perfect-hotel/ # My Perfect Hotel Assets
│   │   ├── idle-lumber-inc/  # Idle Lumber Inc. Assets
│   │   └── img/            # Site General Images
│   ├── game/               # Game Files Directory
│   │   ├── my-perfect-hotel/ # My Perfect Hotel Game Files
│   │   ├── idle-lumber-inc/  # Idle Lumber Inc. Game Files
│   │   └── ...             # Other Game Files
│   ├── llms.txt            # AI Crawler Content Summary
│   ├── llms-full.txt       # AI Crawler Full Content
│   ├── robots.txt          # Search Engine Crawler Rules
│   └── sitemap.xml         # Site Map
├── next.config.js          # Next.js Configuration (Including Game Route Rewrites)
├── next-sitemap.config.js  # Sitemap and robots.txt Configuration
├── tailwind.config.ts      # Tailwind CSS Configuration
├── tsconfig.json           # TypeScript Configuration
└── components.json         # shadcn/ui Component Configuration
```

## Development Guide

### Environment Requirements

  - Node.js 16.x or higher
  - npm or yarn

### Environment Variable Configuration

Create a `.env.local` file in the project root:

```bash
# Google Analytics Configuration
# Please replace with your own Google Analytics ID
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Other optional configurations
# NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### Installation

```bash
npm install
# or
yarn install
```

### Local Development

```bash
npm run dev
# or
yarn dev
```

Visit http://localhost:3000 to view the website.

### Build Project

```bash
npm run build
# or
yarn build
```

### Generate Sitemap

```bash
npm run sitemap
# or
yarn sitemap
```

## Game Embedding Guide

The site embeds games via iframe, with a corresponding embed route for each game:

  - `/my-perfect-hotel.embed` → `/game/my-perfect-hotel/index.html`
  - `/idle-lumber-inc.embed` → `/game/idle-lumber-inc/index.html`
  - `/duck-duck-clicker.embed` → `/game/duck-duck-clicker/index.html`
  - ... (Embed routes for other games)

## Adding a New Game Guide

To add a new game, follow these steps:

1.  **Add Game Files**: Place game files into the `public/game/[game-name]/` directory.
2.  **Create Game Page**: Create the page directory and files in `app/[game-name]/`.
3.  **Configure Game Data**: Add game information to `app/games/game-data.ts`.
4.  **Add Game Content**: Create the game's `content.ts` configuration file (for guides, features, etc.).
5.  **Configure Route Rewrites**: Add the embed route to `next.config.js`.
6.  **Add Game Assets**: Place relevant images in `public/assets/[game-name]/`.

## Related Links and Resources

### Official Pages

  - 🏠 **Homepage**: [Cozy Games Official Website](https://www.cozygame.net)
  - 📞 **Contact Us**: [Contact Us](https://www.google.com/search?q=https://www.cozygame.net/contact)
  - ℹ️ **About Us**: [About Us](https://www.google.com/search?q=https://www.cozygame.net/about)
  - 🔒 **Privacy Policy**: [Privacy Policy](https://www.google.com/search?q=https://www.cozygame.net/privacy-policy)
  - 📋 **Terms of Service**: [Terms of Service](https://www.google.com/search?q=https://www.cozygame.net/terms-of-service)

### External Links (Footer Quick Links)

*(Note: These should be replaced with relevant Cozy Game-focused external links)*

  - **Cozy Game Substack**: [Cozy Game Blog](https://www.google.com/search?q=https://substack.com/%40your-cozy-blog)
  - **Patreon Support**: [Patreon Support Page](https://www.google.com/search?q=https://www.patreon.com/your-cozy-games)

## AI Crawler Optimization

This project features special optimization for AI crawlers, **aimed at promoting low-stress, casual game content**:

1.  **Dedicated Content Files**: Provides `llms.txt` and `llms-full.txt` files containing structured **casual game information**.
2.  **robots.txt Configuration**: Directs AI crawlers to the dedicated files, limiting access to other parts of the site.

## License

© 2025 **Cozy Games**. All rights reserved. **All games on the platform are free to play and require no download.**