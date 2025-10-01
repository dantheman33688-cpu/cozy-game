export interface Game {
  id: string;
  title: string;
  description: string;
  image: string;
  url: string;
}

export const games: Record<string, Game> = {
  "my-perfect-hotel": {
    id: "my-perfect-hotel",
    title: "My Perfect Hotel",
    description: "Play My Perfect Hotel free online! Run your dream hotel, manage staff, upgrade rooms, and collect tips in this relaxing time-management simulator game.",
    image: "/assets/my-perfect-hotel/my-perfect-hotel.png",
    url: "/",
  },
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
  }
};

// 获取其他游戏列表
export function getOtherGames(): Game[] {
  return Object.values(games);
}



