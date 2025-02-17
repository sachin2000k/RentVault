// src/data/dummyData.js
import tuxImg from "../assets/fashion/tux.jpg";
import ethnicImg from "../assets/fashion/ethnic.jpg";
import jewelryImg from "../assets/fashion/jewelry.jpg";
import luggageImg from "../assets/travel/luggage.jpeg";
import trekkingImg from "../assets/travel/trekking.jpeg";
import electronicsImg from "../assets/electronics/cannon.jpg"
import smartwatchImg from "../assets/electronics/smartwatch.webp"
import laptopImg from "../assets/electronics/laptop.jpg"
import ipadImg from "../assets/electronics/ipad.jpg"
import vrImg from "../assets/electronics/vr_headset.jpg"
import handbagImg from "../assets/accessories/handbag.jpeg"
import sunglassesImg from "../assets/accessories/sunglasses.jpg"
import penImg from "../assets/accessories/pen.png"

const dummyItems = [
    // FASHION
    {
      id: 1,
      name: "Designer Tuxedo",
      category: "Fashion",
      actualPrice: 500,
      rentalPricePerDay: 50,
      image: tuxImg,
      description: "A sleek black tuxedo, perfect for formal events."
    },
    {
      id: 2,
      name: "Traditional Ethnic Wear",
      category: "Fashion",
      actualPrice: 400,
      rentalPricePerDay: 40,
      image: ethnicImg,
      description: "Elegant attire suitable for weddings and festivals."
    },
    {
      id: 3,
      name: "Diamond Jewelry Set",
      category: "Fashion",
      actualPrice: 2000,
      rentalPricePerDay: 200,
      image:jewelryImg,
      description: "Sparkling diamond necklace and matching earrings."
    },
  
    // TRAVEL
    {
      id: 4,
      name: "Samsonite Luggage",
      category: "Travel Equipment",
      actualPrice: 300,
      rentalPricePerDay: 30,
      image: luggageImg,
      description: "Durable suitcase with ample storage space."
    },
    {
      id: 5,
      name: "Trekking Gear Set",
      category: "Travel Equipment",
      actualPrice: 250,
      rentalPricePerDay: 25,
      image: trekkingImg,
      description: "Includes backpack, hiking pole, and safety gear."
    },
    {
      id: 6,
      name: "Canon DSLR Camera",
      category: "Electronics & Gadgets",
      actualPrice: 1200,
      rentalPricePerDay: 120,
      image: electronicsImg,
      description: "Professional-grade DSLR for high-quality photography."
    },
  
    // ELECTRONICS
    {
      id: 7,
      name: "Smartwatch Series X",
      category: "Electronics & Gadgets",
      actualPrice: 400,
      rentalPricePerDay: 40,
      image: smartwatchImg,
      description: "Feature-packed smartwatch with health tracking."
    },
    {
      id: 8,
      name: "High-End Laptop",
      category: "Electronics & Gadgets",
      actualPrice: 1500,
      rentalPricePerDay: 150,
      image: laptopImg,
      description: "Powerful laptop suitable for gaming or heavy workloads."
    },
    {
      id: 9,
      name: "iPad Pro",
      category: "Electronics & Gadgets",
      actualPrice: 800,
      rentalPricePerDay: 80,
      image: ipadImg,
      description: "Latest iPad Pro with Apple Pencil compatibility."
    },
    {
      id: 10,
      name: "VR Headset",
      category: "Electronics & Gadgets",
      actualPrice: 600,
      rentalPricePerDay: 60,
      image: vrImg,
      description: "Immersive virtual reality experience."
    },
  
    // ACCESSORIES
    {
      id: 11,
      name: "Luxury Handbag",
      category: "Accessories",
      actualPrice: 500,
      rentalPricePerDay: 50,
      image: handbagImg,
      description: "Stylish handbag with premium leather finish."
    },
    {
      id: 12,
      name: "Designer Sunglasses",
      category: "Accessories",
      actualPrice: 200,
      rentalPricePerDay: 20,
      image: sunglassesImg ,
      description: "UV-protection sunglasses with a chic design."
    },
    {
      id: 13,
      name: "Luxury Fountain Pen",
      category: "Accessories",
      actualPrice: 150,
      rentalPricePerDay: 15,
      image: penImg,
      description: "Smooth-writing fountain pen for special occasions."
    }
  ];
  
  export default dummyItems;
  