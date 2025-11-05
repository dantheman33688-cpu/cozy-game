export interface Game {
  id: string;
  title: string;
  description: string;
  image: string;
  url: string;
}

export const games: Record<string, Game> = {
  "thorn-and-balloons": {
    "id": "thorn-and-balloons",
    "title": "Thorn And Balloons: Precision Physics Puzzle | Unblocked Bounce Pop",
    "description": "Master Thorn And Balloons free online! Calculate launch power and angle to execute wall bounces and one-shot clearances in this addictive physics puzzle.",
    "image": "/assets/thorn-and-balloons/thorn-and-balloons-logo.webp", 
    "url": "/",
  } ,
  "idle-lumber-inc": {
    id: "idle-lumber-inc",
    title: "Idle Lumber Inc.",
    description: "Build your lumber empire! Play Idle Lumber Inc. free online, managing resources, hiring staff, and upgrading machinery in this relaxing tycoon simulator.",
    image: "/assets/idle-lumber-inc/Idle-lumber-Inc.png",
    url: "/idle-lumber-inc",
  },
  "cat-coffee-shop": {
  id: "cat-coffee-shop",
  title: "Cat Coffee Shop",
  description: "Run your own cozy café with cute cats! Manage drinks, hire assistants, and expand your cat café in this relaxing idle management game.",
  image: "/assets/cat-coffee-shop/cat-cofee-shop-cozygame-logo.webp",
  url: "/cat-coffee-shop"
  },
  "monkey-mart": {
  id: "monkey-mart",
  title: "Monkey Mar",
  description: "Play the addictive Monkey Mart game! This is the unblocked version of the exciting idle farming and management simulator. Plant, harvest, staff your shelves, and serve animal customers in your very own supermarket managed by a busy monkey entrepreneur.",
  image: "/assets/monkey-mart/monkey-mart-logo.jpeg",
  url: "/monkey-mart"
  },
  "milk-clicker": {
  "id": "milk-clicker",
  "title": "Milk Clicker",
  "description": "Master Milk Clicker's One-Price Shop (OPS) and Prestige system. Learn the optimal upgrade order to boost your MPS/MPC and find the top 5 high-return assets.",
  "image": "/assets/milk-clicker/milk-clicker-logo.jpeg",
  "url": "/milk-clicker"
},
  "capitalist-bus-driver": {
    "id": "capitalist-bus-driver",
    "title": "Capitalist Bus Driver Unblocked",
    "description": "Bus Driver to Tycoon: In-depth guide to balancing driving and management. Learn optimal Bus Route Strategies for maximum passenger fares, and how to efficiently unlock and manage your Seaside Resort Tycoon facilities for profit maximization.",
    "image": "/assets/capitalist-bus-driver/capitalist-bus-driver-logo.webp",
    "url": "/capitalist-bus-driver"
  },
  "tower-merge": {
    "id": "tower-merge",
    "title": "Tower Merge: Strategy Meets Defense",    
    "description": "Merge, Strategize, Defend: This next-generation Tower Defense game fuses the satisfaction of merging puzzles with live tactical defense. Constantly manage resource production (Wood, Stone, Gold), upgrade your towers under pressure, and withstand epic Dragon assaults where every merge choice matters.",
    "image": "/assets/tower-merge/tower-merge-logo.webp",
    "url": "/tower-merge"
  },
  "drift-boss": {
    "id": "drift-boss",
    "title": "Drift Boss: One-Tap Challenge for Ultimate Drifting Mastery",    
    "description": "Drift Boss is the ultimate One-Tap precision game. Master timing on endless corners, collect coins for powerful upgrades, and compete in Weekly Challenges to top the Global Leaderboards.",
    "image": "/assets/drift-boss/drift-boss-logo.webp",
    "url": "/drift-boss"
  }
};

// 获取其他游戏列表
export function getOtherGames(): Game[] {
  return Object.values(games);
}



