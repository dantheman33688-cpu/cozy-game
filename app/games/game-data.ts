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
};

// 获取其他游戏列表
export function getOtherGames(): Game[] {
  return Object.values(games);
}



