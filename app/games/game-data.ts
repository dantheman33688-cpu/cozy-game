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
    "description": "Master Thorn And Balloons free online! Calculate **launch power and angle** to execute **wall bounces** and **one-shot clearances** in this addictive physics puzzle.",
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
}
};

// 获取其他游戏列表
export function getOtherGames(): Game[] {
  return Object.values(games);
}



