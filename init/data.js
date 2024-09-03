const sampleAgriculturalListings = [
  {
    title: "Fresh Mangoes",
    description:
      "Enjoy the sweet and juicy taste of ripe mangoes, perfect for summer.",
    image:
      "https://images.unsplash.com/photo-1588931929796-8f0ea6da0faa?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 250, // price per kg in BDT
    location: "Dhaka",
    category: "Fruit",
  },
  {
    title: "Lychee Fruit",
    description: "Fresh and aromatic lychees with a sweet and floral flavor.",
    image:
      "https://images.unsplash.com/photo-1642063412059-faa1c79531ce?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 700, // price per kg in BDT
    location: "Chattogram",
    category: "Fruit",
  },
  {
    title: "Organic Rice",
    description:
      "Premium quality organic rice, grown without pesticides and chemicals.",
    image:
      "https://plus.unsplash.com/premium_photo-1705338026411-00639520a438?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 70, // price per 5 kg in BDT
    location: "Rajshahi",
    category: "Grain",
  },
  {
    title: "Sugarcane",
    description: "Sweet and juicy sugarcane, ideal for fresh juice or cooking.",
    image:
      "https://images.unsplash.com/photo-1606707761700-86b58f251a01?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 10, // price per bundle in BDT
    location: "Khulna",
    category: "Crop",
  },
  {
    title: "Tomatoes",
    description: "Sweet and tangy  tomatoes, perfect for salads and cooking.",
    image:
      "https://plus.unsplash.com/premium_photo-1661827989152-6306a475e618?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 80, // price per kg in BDT
    location: "Sylhet",
    category: "Vegetable",
  },

  {
    title: "Fresh Herbs",
    description:
      "A variety of fresh herbs including basil, mint, and cilantro.",
    image:
      "https://images.unsplash.com/photo-1632232812783-c774e55bbbe9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 50, // price per bunch in BDT
    location: "Mymensingh",
    category: "Herbs",
  },
  {
    title: "Red Onions",
    description: "Fresh and pungent red onions, great for cooking and salads.",
    image:
      "https://images.unsplash.com/photo-1642582037312-9b9639be89e6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 120, // price per kg in BDT
    location: "Rangpur",
    category: "Vegetable",
  },
  {
    title: "Potatoes",
    description: "High-quality potatoes suitable for various dishes.",
    image:
      "https://images.unsplash.com/photo-1635774855536-9728f2610245?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 40, // price per kg in BDT
    location: "Dinajpur",
    category: "Vegetable",
  },
  {
    title: "Chili",
    description: "Spicy and fresh green chilies to add heat to your dishes.",
    image:
      "https://plus.unsplash.com/premium_photo-1675864033264-cb9db758422d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 20, // price per kg in BDT
    location: "Jashore",
    category: "Vegetable",
  },
  {
    title: "Cucumbers",
    description: "Fresh cucumbers perfect for salads and snacks.",
    image:
      "https://images.unsplash.com/photo-1676043966926-c575c1ef320a?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 70, // price per kg in BDT
    location: "Bogra",
    category: "Vegetable",
  },

  {
    title: "Watermelon",
    description: "Refreshingly sweet watermelon, perfect for hot days.",
    image:
      "https://plus.unsplash.com/premium_photo-1674382739371-57254fd9a9e4?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 200, // price per piece in BDT
    location: "Comilla",
    category: "Fruit",
  },

  {
    title: "Pumpkins",
    description: "Sweet and versatile pumpkins, great for soups and pies.",
    image:
      "https://images.unsplash.com/photo-1459260216545-994dda21d51a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 80, // price per piece in BDT
    location: "Naogaon",
    category: "Vegetable",
  },
  {
    title: "Garlic",
    description:
      "Fresh garlic cloves with a pungent flavor, essential for cooking.",
    image:
      "https://plus.unsplash.com/premium_photo-1666877049261-ea88f75e7be2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 230, // price per kg in BDT
    location: "Feni",
    category: "Herbs",
  },
];

module.exports = { data: sampleAgriculturalListings };
