import logo from "./logo.png";
import remove_icon from "./remove_icon.svg";
import cart_icon from "./cart_icon.svg";
import potato_image_1 from "./potato_image_1.png";
import potato_image_2 from "./potato_image_2.png";
import potato_image_3 from "./potato_image_3.png";
import potato_image_4 from "./potato_image_4.png";
import tomato_image from "./tomato_image.png";
import carrot_image from "./carrot_image.png";
import apple_image from "./apple_image.png";
import spinach_image_1 from "./spinach_image_1.png";
import onion_image_1 from "./onion_image_1.png";
import upload_area from "./upload_area.png";

export const assets = {
  logo,
  remove_icon,
  cart_icon,
  upload_area
};

export const products = [
  
  {
    _id: "gd46g23h",
    name: "Potato 500g",
    category: "Vegetables",
    price: 25,
    offerPrice: 20,
    image: [potato_image_1, potato_image_2, potato_image_3, potato_image_4],
    description: [
      "Fresh and organic",
      "Rich in carbohydrates",
      "Ideal for curries and fries",
    ],
    inStock: true,
  },
  {
    _id: "gd47g34h",
    name: "Tomato 1 kg",
    category: "Vegetables",
    price: 40,
    offerPrice: 35,
    image: [tomato_image],
    description: [
      "Juicy and ripe",
      "Rich in Vitamin C",
      "Perfect for salads and sauces",
      "Farm fresh quality",
    ],
    inStock: true,
  },
  {
    _id: "gd48g45h",
    name: "Carrot 500g",
    category: "Vegetables",
    price: 30,
    offerPrice: 28,
    image: [carrot_image],
    description: [
      "Sweet and crunchy",
      "Good for eyesight",
      "Ideal for juices and salads",
    ],
    inStock: true,
  },
  {
    _id: "gd49g56h",
    name: "Spinach 500g",
    category: "Vegetables",
    price: 18,
    offerPrice: 15,
    image: [spinach_image_1],
    description: [
      "Rich in iron",
      "High in vitamins",
      "Perfect for soups and salads",
    ],
    inStock: true,
  },
  {
    _id: "gd50g67h",
    name: "Onion 500g",
    category: "Vegetables",
    price: 22,
    offerPrice: 19,
    image: [onion_image_1],
    description: [
      "Fresh and pungent",
      "Perfect for cooking",
      "A kitchen staple",
    ],
    inStock: true,
  },

  {
    _id: "ek51j12k",
    name: "Apple 1 kg",
    category: "Fruits",
    price: 120,
    offerPrice: 110,
    image: [apple_image],
    description: [
      "Crisp and juicy",
      "Rich in fiber",
      "Boosts immunity",
      "Perfect for snacking and desserts",
      "Organic and farm fresh",
    ],
    inStock: true,
  },
  
  
];
