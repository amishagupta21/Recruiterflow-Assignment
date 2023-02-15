import womenBags from "../assests/images/womenbags.jpg";
import womenTshirt from "../assests/images/tshirt.jpg";
import womenCosmetic from "../assests/images/cosmetic.jpg";
import womenJeans from "../assests/images/womenjeans.jpg";
import { generateId } from "./helper";

export const defaultProducts = [
    {
      id: generateId(),
      img: womenJeans,
      name: "Women Jeans: Body Fit",
      description: "Buy Jeans for Women online at best prices."
    },
    {
      id: generateId(),
      img: womenBags,
      name: "Women Bags - Leather",
      description: " Buy designer handbags, leather handbags for women."
    },
    {
      id: generateId(),
      img: womenTshirt,
      name: "Women Tshirt - Cotton",
      description: " Buy T-shirts online for women in India."
    },
    {
      id: generateId(),
      img: womenCosmetic,
      name: "Women Cosmetics",
      description: " Buy cosmetics & beauty products online"
    }
  
  ];