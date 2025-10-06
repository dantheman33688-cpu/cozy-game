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
        { text: "Features", href: "#core-gameplay" },
        { text: "What Is", href: "#physics" },
        { text: "How to Play", href: "#strategies" },
        { text: "FAQ", href: "#player-feedback" },
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
        { text: "Thorn And Balloons", href: "/" },
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
    title: "Thorn And Balloons",
    votes: "votes",
    initialRating: 4.8,
    initialVotes: 146
  },
  gameSection: {
    title: "Thorn And Balloons",
    game: {
      url: 'https://thornandballoons.com/game/index.html',
      title: "Thorn And Balloons",
      externalUrl: '/game/thorn-and-balloons/index.html'
    }
  },
  otherGames: {
    title: "Hot Games",
    cardLabels: {
      playButton: "Play Now",
    }
  },
    "howToPlay": {
    "title": "Core Gameplay Mechanics & High-Score Secrets",
    "description": "Mastering Launch Power and Angle Precision\nThe foundation of success in Thorn Ball lies in understanding and controlling the launch mechanics. Every shot begins with the pull-back mechanic, which determines your launch power. The further you pull back, the stronger the launch — but precision is everything.\n\nTo adjust the launch angle, use a diagonal slide motion on your screen. Combining the right angle with the perfect amount of power ensures your thorn ball travels efficiently, reaching even the most scattered balloons.\n\nPlayers aiming for consistent high scores must develop muscle memory for both controls. Experiment in early levels to understand how small variations affect your trajectory — this practice pays off when tackling advanced puzzles later on.\n\nThe Physics of Wall Bounces and Chain Reactions\nThorn Ball’s physics system rewards players who think beyond direct hits. Each wall bounce changes your trajectory, allowing you to reach hidden or protected balloons.\n\nAdvanced players use calculated rebounds to create chain reactions, where one shot pops multiple clusters. Observe how your ball’s speed decreases slightly with each bounce, and plan to use walls to deflect toward dense groups of balloons.\n\nFor pro-level play, anticipate your second and third bounces before launching. When mastered, these techniques lead to satisfying, high-efficiency clears — essential for leaderboard domination.\n\nMaximizing Scores: Time Bonus vs. Shots Taken\nYour final score depends on three main factors:\n\n- Shots Taken – The fewer shots, the better.\n- Time Remaining – Faster level completions grant large time bonuses.\n- Accuracy & Chain Pops – Multi-balloon hits reward combo points.\n\nTo achieve record-breaking scores, prioritize precision and speed equally. A methodical yet quick approach yields both time bonuses and minimal shot penalties. Top players practice levels repeatedly to memorize ideal launch setups, turning seconds into huge point gains.\n\nAdvanced Level Strategies & Walkthrough Tips\nUnlocking One-Shot Clearances on Hard Levels\nAmong the community’s most celebrated feats is the one-shot clearance — completing a level with a single, perfectly calculated launch.\n\nThis strategy requires patience and experimentation. Start by identifying balloon clusters and obstacle gaps, then test launch power in small increments to map the best trajectory. Recording your attempts or referencing community walkthroughs can save time.\n\nOnce found, the one-shot clearance not only brings massive satisfaction but also the highest possible level rating — a must for leaderboard chasers.\n\n**Quick Thinking**: Optimal Trajectories for Scattered Balloons\nHarder stages often scatter balloons across complex patterns, demanding fast, adaptive thinking. You have only 30 seconds to act — so efficiency is key.\n\nFocus first on trajectory visualization: before launching, trace an imaginary line through the densest clusters or toward bounce-friendly walls.\n\nUse environmental assists, such as walls or moving platforms, to execute trick shots. By aiming slightly off-center, you can initiate long ricochets that clean up multiple targets at once.\n\nThe best players train themselves to analyze patterns instantly, turning a stressful countdown into a display of calm precision.",
    "image": "/assets/thorn-and-balloons/thorn-and-balloons-gameplay.webp",
    "imageAlt": "Thorn Ball Gameplay Guide - Launch, Physics, and Scoring Strategy"
  },
  "whatIs": {
    "title": "Everything about Thorn Ball - Precision Physics Puzzle Mastery",
    "description": "Thorn Ball is a skill-driven physics puzzle game where precision, timing, and trajectory control define success. Players launch a thorn-covered ball to pop balloons scattered across challenging levels. The game’s core lies in balancing launch power and angle, using the environment to trigger chain reactions, and clearing all balloons before the 30-second timer runs out.\n\nEach shot is a blend of physics, geometry, and intuition. The more efficiently you use each launch, the higher your score — combining speed, accuracy, and creativity. Thorn Ball rewards consistent practice, where mastering rebound physics and power control transforms casual players into leaderboard champions.\n\nWhether you’re a perfectionist chasing one-shot clears or a newcomer learning the basics of bounce physics, Thorn Ball offers endless replayability and rewarding progression. It’s free to play online and built for those who love turning simple mechanics into complex mastery.",
    "logo": {
      "src": "/assets/thorn-and-balloons/thorn-and-balloons-logo.webp",
      "alt": "Thorn Ball - Free Online Physics Puzzle Game Logo"
    }
  },
  "faq": {
    "title": "Frequently Asked Questions - Thorn Ball Online Game",
    "items": [
      {
        "value": "time-pressure",
        "question": "How can I handle the 30-second time limit effectively?",
        "answer": "The 30-second timer adds intensity and challenge. Use the first few seconds to analyze the level — locate balloon clusters, visualize your trajectory, then execute quickly and confidently. Practice mindfulness and controlled breathing to remain calm under pressure. Over time, this countdown becomes a motivator, sharpening focus and reaction speed."
      },
      {
        "value": "control-issues",
        "question": "Why does my aim feel inconsistent or unresponsive?",
        "answer": "Since Thorn Ball relies on micro-level precision, even minor control issues can affect your accuracy. Try adjusting your device’s sensitivity, maintaining consistent finger placement, or using a stylus for better precision. Some users report minor bugs like input lag or misalignment — developers are actively optimizing these aspects."
      },
      {
        "value": "difficulty-balance",
        "question": "Why do some levels suddenly become harder?",
        "answer": "Difficulty spikes are intentional to test your mastery of bounce physics and reaction under time pressure. Avoid relying on in-app purchases for hints or extra time — instead, practice trajectory prediction and refine your launch timing. Patience and observation are the best tools for overcoming tough stages."
      },
      {
        "value": "iap-and-ads",
        "question": "Are in-app purchases or ads necessary for success?",
        "answer": "Thorn Ball is designed as a fair, skill-based game. While optional purchases like extra time or hints exist, real progress depends on your skill, not spending. Ads may appear between levels, but you can disable them through the ad-free version for a smoother experience."
      },
      {
        "value": "community-tips",
        "question": "Where can I find walkthroughs or advanced strategies?",
        "answer": "The Thorn Ball community is active on YouTube, Reddit, and Discord, where players share walkthroughs, trick shots, and optimal trajectory setups. Watching expert players can help you understand rebound dynamics and advanced scoring patterns — learning from them accelerates your own mastery."
      }
    ]
  },
  "features": {
    "title": "Key Features of Thorn Ball - Precision Physics Puzzle Challenge",
    "items": [
      {
        "title": "Masterful Launch Control System",
        "description": "Every shot in Thorn Ball is determined by your pull-back power and launch angle. The physics engine rewards those who balance strength and precision, creating satisfying arcs and chain reactions."
      },
      {
        "title": "Advanced Bounce Physics & Chain Reactions",
        "description": "Plan multi-bounce trajectories that hit hidden or protected balloons. Each rebound slightly reduces speed, requiring players to anticipate two or three bounces ahead for maximum efficiency."
      },
      {
        "title": "Competitive Scoring System",
        "description": "Final scores are calculated from shots taken, time remaining, and combo accuracy. The best players achieve top ranks by combining fast execution with strategic foresight."
      },
      {
        "title": "Intense 30-Second Challenge",
        "description": "Every level races against a 30-second clock, pushing you to think and act fast. The timer transforms tension into excitement — every second counts toward a perfect score."
      },
      {
        "title": "Community-Driven Walkthroughs & Trick Shots",
        "description": "Join a passionate community sharing walkthroughs, trick shots, and one-shot clears. Learn advanced rebound tactics or showcase your own techniques to inspire others."
      },
      {
        "title": "Skill-Based Progression Without Paywalls",
        "description": "Thorn Ball champions fair gameplay — your improvement, not payment, determines success. Practice, precision, and creativity are the only paths to true mastery."
      }
    ]
  }
} as const;


