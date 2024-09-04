// navigation Data
export const navItems = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Best Selling",
    url: "/best-selling",
  },
  {
    title: "Products",
    url: "/products",
  },
  {
    title: "Events",
    url: "/events",
  },
  {
    title: "FAQ",
    url: "/faq",
  },
];

// branding data
export const brandingData = [
  {
    id: 1,
    title: "Free Delivery",
    Description: "On all orders over BDT3000",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        {/* SVG Path for Free Shipping */}
      </svg>
    ),
  },
  {
    id: 2,
    title: "Fresh Produce",
    Description: "Locally sourced and farm-fresh",
    icon: (
      <svg width="32" height="34" viewBox="0 0 32 34" fill="none">
        {/* SVG Path for Fresh Produce */}
      </svg>
    ),
  },
  {
    id: 3,
    title: "Affordable Prices",
    Description: "Direct from farm to table",
    icon: (
      <svg width="32" height="35" viewBox="0 0 32 35" fill="none">
        {/* SVG Path for Affordable Prices */}
      </svg>
    ),
  },
  {
    id: 4,
    title: "Secure Payments",
    Description: "100% protected payments",
    icon: (
      <svg width="32" height="38" viewBox="0 0 32 38" fill="none">
        {/* SVG Path for Secure Payments */}
      </svg>
    ),
  },
];

// categories data
export const categoriesData = [
  {
    id: 1,
    title: "Vegetables",
    subTitle: "",
    image_Url: "https://example.com/images/vegetables.jpg",
  },
  {
    id: 2,
    title: "Fruits",
    subTitle: "",
    image_Url: "https://example.com/images/fruits.jpg",
  },
  {
    id: 3,
    title: "Dairy Products",
    subTitle: "",
    image_Url: "https://example.com/images/dairy.jpg",
  },
  {
    id: 4,
    title: "Meat & Poultry",
    subTitle: "",
    image_Url: "https://example.com/images/meat.jpg",
  },
  {
    id: 5,
    title: "Grains",
    subTitle: "",
    image_Url: "https://example.com/images/grains.jpg",
  },
  {
    id: 6,
    title: "Organic Products",
    subTitle: "",
    image_Url: "https://example.com/images/organic.jpg",
  },
  {
    id: 7,
    title: "Farm Equipment",
    subTitle: "",
    image_Url: "https://example.com/images/farm-equipment.jpg",
  },
  {
    id: 8,
    title: "Gardening Supplies",
    subTitle: "",
    image_Url: "https://example.com/images/gardening.jpg",
  },
  {
    id: 9,
    title: "Seeds & Fertilizers",
    subTitle: "",
    image_Url: "https://example.com/images/seeds.jpg",
  },
  {
    id: 10,
    title: "Others",
    subTitle: "",
    image_Url: "https://example.com/images/others.jpg",
  },
];
  
  // product Data
  export const productData = [
    {
        id: 5,
        category: "Vegetables",
        name: "Organic Carrots - 1kg",
        description:
            "Crunchy and sweet organic carrots, grown without synthetic pesticides. Perfect for snacking, salads, or cooking.",
        image_Url: [
            {
                public_id: "carrots_1",
                url: "https://example.com/images/carrots.jpg",
            },
            {
                public_id: "carrots_2",
                url: "https://example.com/images/carrots-2.jpg",
            },
        ],
        shop: {
            name: "Earth's Bounty",
            shop_avatar: {
                public_id: "earth_bounty",
                url: "https://example.com/images/earth-bounty.jpg",
            },
            ratings: 4.6,
        },
        price: 2.99,
        discount_price: 2.49,
        rating: 4.5,
        total_sell: 100,
        stock: 60,
    },
    {
        id: 6,
        category: "Fruits",
        name: "Bananas - 1kg",
        description:
            "Fresh and ripe bananas, sourced from sustainable farms. Ideal for snacks, smoothies, or baking.",
        image_Url: [
            {
                public_id: "bananas_1",
                url: "https://example.com/images/bananas.jpg",
            },
            {
                public_id: "bananas_2",
                url: "https://example.com/images/bananas-2.jpg",
            },
        ],
        shop: {
            name: "Tropical Harvest",
            shop_avatar: {
                public_id: "tropical_harvest",
                url: "https://example.com/images/tropical-harvest.jpg",
            },
            ratings: 4.7,
        },
        price: 1.99,
        discount_price: 1.79,
        rating: 4.8,
        total_sell: 220,
        stock: 80,
    },
    {
        id: 7,
        category: "Dairy Products",
        name: "Greek Yogurt - 500g",
        description:
            "Thick and creamy Greek yogurt, made from fresh milk. A perfect source of protein and probiotics.",
        image_Url: [
            {
                public_id: "yogurt_1",
                url: "https://example.com/images/yogurt.jpg",
            },
            {
                public_id: "yogurt_2",
                url: "https://example.com/images/yogurt-2.jpg",
            },
        ],
        shop: {
            name: "Pure Dairy",
            shop_avatar: {
                public_id: "pure_dairy",
                url: "https://example.com/images/pure-dairy.jpg",
            },
            ratings: 4.9,
        },
        price: 3.49,
        discount_price: 2.99,
        rating: 4.8,
        total_sell: 180,
        stock: 45,
    },
    {
        id: 8,
        category: "Meat & Poultry",
        name: "Grass-fed Beef - 1kg",
        description:
            "High-quality grass-fed beef, known for its rich flavor and superior nutritional profile. Perfect for grilling or roasting.",
        image_Url: [
            {
                public_id: "beef_1",
                url: "https://example.com/images/beef.jpg",
            },
            {
                public_id: "beef_2",
                url: "https://example.com/images/beef-2.jpg",
            },
        ],
        shop: {
            name: "Premium Meats",
            shop_avatar: {
                public_id: "premium_meats",
                url: "https://example.com/images/premium-meats.jpg",
            },
            ratings: 4.9,
        },
        price: 12.99,
        discount_price: 11.99,
        rating: 4.8,
        total_sell: 140,
        stock: 35,
    },
    {
        id: 9,
        category: "Bakery",
        name: "Whole Wheat Bread - 500g",
        description:
            "Freshly baked whole wheat bread, made with organic flour. A nutritious and delicious choice for any meal.",
        image_Url: [
            {
                public_id: "bread_1",
                url: "https://example.com/images/bread.jpg",
            },
            {
                public_id: "bread_2",
                url: "https://example.com/images/bread-2.jpg",
            },
        ],
        shop: {
            name: "Healthy Bakes",
            shop_avatar: {
                public_id: "healthy_bakes",
                url: "https://example.com/images/healthy-bakes.jpg",
            },
            ratings: 4.7,
        },
        price: 2.99,
        discount_price: 2.59,
        rating: 4.6,
        total_sell: 160,
        stock: 50,
    },
    {
        id: 10,
        category: "Beverages",
        name: "Fresh Orange Juice - 1L",
        description:
            "Refreshing and naturally sweet orange juice, made from freshly squeezed oranges. No added sugar or preservatives.",
        image_Url: [
            {
                public_id: "juice_1",
                url: "https://example.com/images/juice.jpg",
            },
            {
                public_id: "juice_2",
                url: "https://example.com/images/juice-2.jpg",
            },
        ],
        shop: {
            name: "Citrus Delight",
            shop_avatar: {
                public_id: "citrus_delight",
                url: "https://example.com/images/citrus-delight.jpg",
            },
            ratings: 4.8,
        },
        price: 3.99,
        discount_price: 3.49,
        rating: 4.7,
        total_sell: 190,
        stock: 55,
    },
];

  
export const footerProductLinks = [
  {
    name: "About Us",
    link: "/about"
  },
  {
    name: "Careers",
    link: "/careers"
  },
  {
    name: "Store Locations",
    link: "/locations"
  },
  {
    name: "Our Blog",
    link: "/blog"
  },
  {
    name: "Customer Reviews",
    link: "/reviews"
  },
];

export const footerCompanyLinks = [
  {
    name: "Vegetables",
    link: "/category/vegetables"
  },
  {
    name: "Fruits",
    link: "/category/fruits"
  },
  {
    name: "Dairy Products",
    link: "/category/dairy-products"
  },
  {
    name: "Meat & Poultry",
    link: "/category/meat-poultry"
  },
  {
    name: "Organic Farming",
    link: "/category/organic-farming"
  },
];

export const footerSupportLinks = [
  {
    name: "FAQ",
    link: "/faq"
  },
  {
    name: "Customer Reviews",
    link: "/reviews"
  },
  {
    name: "Contact Us",
    link: "/contact"
  },
  {
    name: "Delivery Information",
    link: "/delivery"
  },
  {
    name: "Live Chat",
    link: "/chat"
  },
];
