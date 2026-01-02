
import banner1 from "./images/banner(1).avif"
import banner2 from "./images/banner(2).avif"
import banner3 from "./images/banner(3).avif"
import { MdOutlineShoppingBag } from "react-icons/md";
import { LuHeart } from "react-icons/lu";
import { FiEye } from "react-icons/fi";

export const productActions = [
  { id: "cart", icon: MdOutlineShoppingBag },
  { id: "wishlist", icon: LuHeart },
  { id: "view", icon: FiEye },
];

export const products = [
  {
    id: 1,
    category: "Chair",
    title: "Green Armchair",
    price: 799,
    oldPrice: 999,
    badge: "-20%",
    badgeColor: "bg-[#D32F2F]",
    image:
      "https://img.freepik.com/premium-photo/green-upholstered-chair-with-green-back-white-trim_748076-7629.jpg",
    description:
      "A stylish green armchair with soft upholstery, perfect for relaxing and adding a fresh touch to your living space.",
  },
  {
    id: 2,
    category: "Table",
    title: "Geo Coffee Table",
    price: 1500,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAeOiLKlkExZjfQrPWoTRWAYkVIlp85OQe_HSaAZRoZUg01xjNJO2VDaJJca87D2LS-wwJ2AnYE5ULQdkF6pvFjqMi4zSrmzzGbh_Iu0xcdBZwtl3Rur8cCjLgpWZeiDRBAPRe9UZBOF0UF66epWhnYP38eyG9Sxiz6Yl4tg7PXRpkmAw15PJiLnaWU0GLEjytNwsU5yHX_OMXskmlDXPZkJfpHUSp0XceOTLG8qyzGSfc9x06Yl4ihhxPybXicuyh4afsmckGTcKYm",
    description:
      "A modern geometric coffee table designed to complement contemporary interiors with elegance and durability.",
  },
  {
    id: 3,
    category: "Chair",
    title: "House Chair",
    price: 2999,
    badge: "New",
    badgeColor: "bg-[#C9A24D]",
    image:
      "https://img.freepik.com/premium-photo/blue-armchair-living-room_129696-703.jpg",
    description:
      "A comfortable blue house chair with a cozy design, ideal for reading corners or living rooms.",
  },
  {
    id: 4,
    category: "Chair",
    title: "Vintage Armchair",
    price: 699,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCQeK87grqrAwS83KAO2qs2cW3b6Tgs7yhFJqh5sPTCn6ClMJATBamBSY9xKobzs1nzq9nGqPy_3-MfbwKl-pEOXURWxee0LKSkN2KdWjqUCyNrGBFmfBm4IggQsNQQH1YAg92BzkxBw-7YHTIdmsW8V7vuJcVCZAcZffisUKgdofoScwlxLvwTcVjdFeFWdW7zWn68Vl3bgiscp3Y8ZIgJPyTsDK3PXk6A7JS1kissxIFebtJL6vum-rRnptEpyipF66yG4nO-eIQF",
    description:
      "A classic vintage armchair with timeless charm, blending comfort and traditional design.",
  },
  {
    id: 5,
    category: "Red Armchair",
    title: "Crimson Lounge Chair",
    price: 1200,
    image:
      "https://img.freepik.com/premium-photo/red-armchair-modern-setting-with-coffee-table_755913-9899.jpg",
    description:
      "A bold crimson lounge chair that adds warmth and personality to any modern interior.",
  },
  {
    id: 6,
    category: "Yellow Armchair",
    title: "Scandinavian Yellow Sofa",
    price: 2000,
    image:
      "https://img.freepik.com/premium-photo/modern-interior-design-yellow-armchair-sofa-living-room-with-mock-up-poster-frame_143683-8405.jpg",
    description:
      "A Scandinavian-style yellow sofa offering comfort, simplicity, and a bright pop of color.",
  },
];



export const card = [
  {
    image: banner1
  },
  {
    image: banner2
  },
  {
    image: banner3
  }
]


export const orderItems = [
  {
    id: 1,
    name: "Mid-Century Sofa",
    variant: "Velvet Green / Gold Legs",
    price: 1200,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
  },
  {
    id: 2,
    name: "Oak Coffee Table",
    variant: "Natural Finish",
    price: 350,
    image: "https://images.unsplash.com/photo-1616627451515-cbc80e5ece35",
  },
  {
    id: 3,
    name: "Modern Arm Chair",
    variant: "Beige Fabric",
    price: 420,
    image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed",
  },
];
