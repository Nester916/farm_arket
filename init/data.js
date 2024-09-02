const sampleAgriculturalListings = [
  {
    title: "Fresh Mangoes",
    description:
      "Enjoy the sweet and juicy taste of ripe mangoes, perfect for summer.",
    image: "https://pixabay.com/photos/mango-fruit-market-food-8283268/",
    price: 1000, // price per kg in BDT
    location: "Dhaka",
    category: "Fruit",
  },
  {
    title: "Lychee Fruit",
    description: "Fresh and aromatic lychees with a sweet and floral flavor.",
    image:
      "https://images.unsplash.com/photo-1598995374347-09c6e91e0029?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bHljaGVlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 1200, // price per kg in BDT
    location: "Chattogram",
    category: "Fruit",
  },
  {
    title: "Organic Rice",
    description:
      "Premium quality organic rice, grown without pesticides and chemicals.",
    image:
      "https://images.unsplash.com/photo-1592891361675-09e8f9e9fa6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmljZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1500, // price per 5 kg in BDT
    location: "Rajshahi",
    category: "Grain",
  },
  {
    title: "Sugarcane",
    description: "Sweet and juicy sugarcane, ideal for fresh juice or cooking.",
    image:
      "https://images.unsplash.com/photo-1568482404-e6a5595c5874?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VnYXJjYW5lfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 2000, // price per bundle in BDT
    location: "Khulna",
    category: "Crop",
  },
  {
    title: "Cherry Tomatoes",
    description:
      "Sweet and tangy cherry tomatoes, perfect for salads and cooking.",
    image:
      "https://images.unsplash.com/photo-1555592750-6e5f8d8dcb02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlcnJ5JTIwdG9tYXRvZXMlMjBzZWFzb25hbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 600, // price per kg in BDT
    location: "Sylhet",
    category: "Vegetable",
  },
  {
    title: "Organic Avocados",
    description:
      "Creamy and rich organic avocados, ideal for salads and spreads.",
    image:
      "https://images.unsplash.com/photo-1558028216-f330d059d45e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXZvY2FkbyUyMHNoYWRlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1500, // price per kg in BDT
    location: "Barishal",
    category: "Fruit",
  },
  {
    title: "Fresh Herbs",
    description:
      "A variety of fresh herbs including basil, mint, and cilantro.",
    image:
      "https://images.unsplash.com/photo-1554232381-e0bdb04127d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVyYnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 300, // price per bunch in BDT
    location: "Mymensingh",
    category: "Herbs",
  },
  {
    title: "Red Onions",
    description: "Fresh and pungent red onions, great for cooking and salads.",
    image:
      "https://images.unsplash.com/photo-1567435590-5045b78b066e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVkJTIwb25pb25zfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 500, // price per kg in BDT
    location: "Rangpur",
    category: "Vegetable",
  },
  {
    title: "Potatoes",
    description: "High-quality potatoes suitable for various dishes.",
    image:
      "https://images.unsplash.com/photo-1598517266014-2e0f88c86545?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG90YXRvZXN8ZW58MHx8MHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 400, // price per kg in BDT
    location: "Dinajpur",
    category: "Vegetable",
  },
  {
    title: "Green Chili",
    description: "Spicy and fresh green chilies to add heat to your dishes.",
    image:
      "https://images.unsplash.com/photo-1546459196-e8d9f709d8cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JlZW4lMjBjaGlsaWVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 350, // price per kg in BDT
    location: "Jashore",
    category: "Vegetable",
  },
  {
    title: "Cucumbers",
    description: "Fresh cucumbers perfect for salads and snacks.",
    image:
      "https://images.unsplash.com/photo-1590992538937-0edaf6e0db5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3VjdW1iZXJzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 450, // price per kg in BDT
    location: "Bogra",
    category: "Vegetable",
  },
  {
    title: "Carrots",
    description: "Sweet and crunchy carrots, ideal for cooking and snacking.",
    image:
      "https://images.unsplash.com/photo-1568807568-51d1c9b282ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyb3RzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 550, // price per kg in BDT
    location: "Moulvibazar",
    category: "Vegetable",
  },
  {
    title: "Watermelon",
    description: "Refreshingly sweet watermelon, perfect for hot days.",
    image:
      "https://images.unsplash.com/photo-1601832602904-0f4a05f0e742?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0ZXJtb25zb2xlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 700, // price per piece in BDT
    location: "Comilla",
    category: "Fruit",
  },
  {
    title: "Pineapples",
    description:
      "Juicy and tangy pineapples, great for eating fresh or making juice.",
    image:
      "https://images.unsplash.com/photo-1565294727-813c5c74026f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGluZWFwbGUlMjBzZWFzb25hbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 800, // price per piece in BDT
    location: "Rajbari",
    category: "Fruit",
  },
  {
    title: "Papayas",
    description:
      "Ripe and sweet papayas, rich in vitamins and perfect for smoothies.",
    image:
      "https://images.unsplash.com/photo-1598941748975-3f8b43edb69d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFwYXllc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 600, // price per piece in BDT
    location: "Patuakhali",
    category: "Fruit",
  },
  {
    title: "Brinjal",
    description: "Fresh and tender brinjal, suitable for a variety of dishes.",
    image:
      "https://images.unsplash.com/photo-1555679024-74c6d168a9b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnJpbmdlYWx8ZW58MHx8MHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 500, // price per kg in BDT
    location: "Tangail",
    category: "Vegetable",
  },
  {
    title: "Pumpkins",
    description: "Sweet and versatile pumpkins, great for soups and pies.",
    image:
      "https://images.unsplash.com/photo-1598457427892-5658c450e43d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHVtcGtpbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 600, // price per piece in BDT
    location: "Naogaon",
    category: "Vegetable",
  },
  {
    title: "Garlic",
    description:
      "Fresh garlic cloves with a pungent flavor, essential for cooking.",
    image:
      "https://images.unsplash.com/photo-1572351815571-5ec7d6b0c335?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FybGljfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 350, // price per kg in BDT
    location: "Feni",
    category: "Herbs",
  },
  {
    title: "Onions",
    description:
      "Fresh onions with a strong flavor, ideal for a variety of recipes.",
    image:
      "https://images.unsplash.com/photo-1605914777761-4a90d2c0532f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b25pb25zfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 450, // price per kg in BDT
    location: "Jamalpur",
    category: "Vegetable",
  },
];

module.exports = { data: sampleAgriculturalListings };
