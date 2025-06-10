import { type Card } from "../components/ProductsGridComponent";

export const products: Card[] = [
  {
    id: 1,
    content: (
      <>
        <h2 className="text-white text-xl font-semibold">YUMMMZO</h2>
        <p className="text-white text-sm">Food Delivery App – Taste the Yumm!</p>
      </>
    ),
    className: "h-[300px] col-span-1",
    thumbnail: "/images/image.png", // Add image in public folder
  },
  {
    id: 2,
    content: (
      <>
        <h2 className="text-white text-xl font-semibold">Tokar</h2>
        <p className="text-white text-sm">Multiplayer Ludo Game with Realtime Play</p>
      </>
    ),
    className: "h-[300px] col-span-1",
    thumbnail: "/images/image.png",
  },
  {
    id: 3,
    content: (
      <>
        <h2 className="text-white text-xl font-semibold">LeetLab</h2>
        <p className="text-white text-sm">Practice & Track LeetCode Problems Smartly</p>
      </>
    ),
    className: "h-[300px] col-span-1",
    thumbnail: "/images/image.png",
  },
  {
    id: 4,
    content: (
      <>
        <h2 className="text-white text-xl font-semibold">Portfolio</h2>
        <p className="text-white text-sm">My Personal Dev Portfolio – Built in React</p>
      </>
    ),
    className: "h-[300px] col-span-1",
    thumbnail: "/images/image.png",
  },
];