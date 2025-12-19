
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
      "https://img.freepik.com/free-photo/green-armchair-lamp-modern-interior_23-2152020453.jpg",
  },
  {
    id: 2,
    category: "Table",
    title: "Geo Coffee Table",
    price: 1500,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAeOiLKlkExZjfQrPWoTRWAYkVIlp85OQe_HSaAZRoZUg01xjNJO2VDaJJca87D2LS-wwJ2AnYE5ULQdkF6pvFjqMi4zSrmzzGbh_Iu0xcdBZwtl3Rur8cCjLgpWZeiDRBAPRe9UZBOF0UF66epWhnYP38eyG9Sxiz6Yl4tg7PXRpkmAw15PJiLnaWU0GLEjytNwsU5yHX_OMXskmlDXPZkJfpHUSp0XceOTLG8qyzGSfc9x06Yl4ihhxPybXicuyh4afsmckGTcKYm",
  },
  {
    id: 3,
    category: "chair",
    title: "House Chair",
    price: 2999,
    badge: "New",
    badgeColor: "bg-[#C9A24D]",
    image:
      "https://img.freepik.com/premium-photo/house-chair-premium-photo_124907-753.jpg",
  },
  {
    id: 4,
    category: "Chair",
    title: "Vintage Armchair",
    price: 699,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCQeK87grqrAwS83KAO2qs2cW3b6Tgs7yhFJqh5sPTCn6ClMJATBamBSY9xKobzs1nzq9nGqPy_3-MfbwKl-pEOXURWxee0LKSkN2KdWjqUCyNrGBFmfBm4IggQsNQQH1YAg92BzkxBw-7YHTIdmsW8V7vuJcVCZAcZffisUKgdofoScwlxLvwTcVjdFeFWdW7zWn68Vl3bgiscp3Y8ZIgJPyTsDK3PXk6A7JS1kissxIFebtJL6vum-rRnptEpyipF66yG4nO-eIQF",
  },
  {
    id: 5,
    category: "Red Armchair",
    title: "Crimson Lounge Chair",
    price: 1200,
    image:"https://img.freepik.com/premium-photo/red-armchair-modern-setting-with-coffee-table_755913-9899.jpg",
  },
  {
    id: 6,
    category: "Yellow Armchair",
    title: "Scandinavian Yellow Sofa",
    price: 2000,
    image:"https://img.freepik.com/premium-photo/modern-interior-design-yellow-armchair-sofa-living-room-with-mock-up-poster-frame_143683-8405.jpg",
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