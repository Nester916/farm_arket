import vegetable from "./vegetable.png";
import dairy from "./dairy.png";
import fruit from "./fruit.png";
import gardening from "./gardening.png";
import seed from "./seed.png";
import tractor from "./tractor.png";
import duck from  "./duck.png";
import leaf from "./leaf.png";
import rice from "./rice.png";
import wheelbarrow from "./wheelbarrow.png";
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
    image_Url: `url(${vegetable})`,
  },
  {
    id: 2,
    title: "Fruits",
    subTitle: "",
    image_Url: `url(${fruit})`,
  },
  {
    id: 3,
    title: "Dairy Products",
    subTitle: "",
    image_Url: `url(${dairy})`,
  },
  {
    id: 4,
    title: "Meat & Poultry",
    subTitle: "",
    image_Url: `url(${duck})`,
  },
  {
    id: 5,
    title: "Grains",
    subTitle: "",
    image_Url: `url(${rice})`,
  },
  {
    id: 6,
    title: "Organic Products",
    subTitle: "",
    image_Url: `url(${leaf})`,
  },
  {
    id: 7,
    title: "Farm Equipment",
    subTitle: "",
    image_Url:`url(${wheelbarrow})`,
  },
  {
    id: 8,
    title: "Gardening Supplies",
    subTitle: "",
    image_Url: `url(${gardening})`,
  },
  {
    id: 9,
    title: "Seeds & Fertilizers",
    subTitle: "",
    image_Url: `url(${seed})`,
  },
  {
    id: 10,
    title: "Others",
    subTitle: "",
    image_Url: `url(${tractor})`,
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
                url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Febangladesh.com%2Fproducts%2F43b196a0-f8f4-11ec-a422-5b49dcae57cf&psig=AOvVaw3nYMQSNBsBJmZ9m-OFgs_8&ust=1725581765743000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMjtjODDqogDFQAAAAAdAAAAABAK",
            },
            {
                public_id: "carrots_2",
                url: "https://www.google.com/imgres?q=1%20kg%20carrot&imgurl=https%3A%2F%2Fassets.woolworthsstatic.co.za%2FLarge-Carrots-1-kg-20008314.jpg%3FV%3D9Suf%26o%3DeyJidWNrZXQiOiJ3dy1vbmxpbmUtaW1hZ2UtcmVzaXplIiwia2V5IjoiaW1hZ2VzL2VsYXN0aWNlcmEvcHJvZHVjdHMvaGVyby8yMDE3LTA4LTAyLzIwMDA4MzE0X2hlcm8uanBnIn0%26w%3D800%26q%3D85&imgrefurl=https%3A%2F%2Fwww.woolworths.co.za%2Fprod%2F_%2FA-20008314&docid=LwfOFkKbj6EtKM&tbnid=F5zJODqqbRuIFM&vet=12ahUKEwiQiIeSw6qIAxVBTmwGHXoXDucQM3oECCQQAA..i&w=800&h=800&hcb=2&ved=2ahUKEwiQiIeSw6qIAxVBTmwGHXoXDucQM3oECCQQAA",
            },
        ],
        shop: {
            name: "Earth's Bounty",
            shop_avatar: {
                public_id: "earth_bounty",
                url: "https://www.google.com/imgres?q=earth%27s%20bounty%20shop%20logo&imgurl=https%3A%2F%2Fcdn4.volusion.store%2Fzktca-pcvug%2Fv%2Fvspfiles%2Fphotos%2Fcategories%2F189.jpg%3Fv-cache%3D1712577989&imgrefurl=https%3A%2F%2Fwww.ecotrend.ca%2Fcategory-s%2F189.htm&docid=Zl_Mpr8h5H3wpM&tbnid=GGhJXRKTGIVaIM&vet=12ahUKEwiEk4maxKqIAxXdyDgGHekwBL4QM3oECBgQAA..i&w=500&h=357&hcb=2&ved=2ahUKEwiEk4maxKqIAxXdyDgGHekwBL4QM3oECBgQAA",
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
                url: "https://www.google.com/imgres?q=banana&imgurl=https%3A%2F%2Fdraxe.com%2Fwp-content%2Fuploads%2F2015%2F01%2FBananaNutritionFB.jpg&imgrefurl=https%3A%2F%2Fdraxe.com%2Fnutrition%2Fbanana-nutrition%2F&docid=1EgCmvl732bxzM&tbnid=jFefBpsTIAmpSM&vet=12ahUKEwil276rxKqIAxUK1jgGHWuXMQ4QM3oECB0QAA..i&w=1230&h=630&hcb=2&ved=2ahUKEwil276rxKqIAxUK1jgGHWuXMQ4QM3oECB0QAA",
            },
            {
                public_id: "bananas_2",
                url: "https://www.google.com/imgres?q=banana&imgurl=https%3A%2F%2Fnutritionsource.hsph.harvard.edu%2Fwp-content%2Fuploads%2F2018%2F08%2Fbananas-1354785_1920.jpg&imgrefurl=https%3A%2F%2Fnutritionsource.hsph.harvard.edu%2Ffood-features%2Fbananas%2F&docid=-WYqzKvbPvxHjM&tbnid=aND_GXknkfh-FM&vet=12ahUKEwil276rxKqIAxUK1jgGHWuXMQ4QM3oECC4QAA..i&w=1920&h=1280&hcb=2&ved=2ahUKEwil276rxKqIAxUK1jgGHWuXMQ4QM3oECC4QAA",
            },
        ],
        shop: {
            name: "Tropical Harvest",
            shop_avatar: {
                public_id: "tropical_harvest",
                url: "https://www.google.com/imgres?q=tropical%20harvest%20shop%20logo&imgurl=http%3A%2F%2Fstatic1.squarespace.com%2Fstatic%2F5eb173009c6ea7423586cc15%2Ft%2F612a574040c6034d413b1303%2F1630164800922%2F3.png%3Fformat%3D1500w&imgrefurl=https%3A%2F%2Fwww.tropicalharvest.us.com%2Fproducts&docid=nrrbE_Xv0N5hmM&tbnid=Y-xSTRgB-wDToM&vet=12ahUKEwifmanHxKqIAxVjyzgGHSmZAFcQM3oECD4QAA..i&w=1500&h=755&hcb=2&ved=2ahUKEwifmanHxKqIAxVjyzgGHSmZAFcQM3oECD4QAA",
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
                url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FYogurt&psig=AOvVaw3FFVdRwIre-oI-sPNVF7-n&ust=1725582189272000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNjVq97EqogDFQAAAAAdAAAAABAE",
            },
            {
                public_id: "yogurt_2",
                url: "https://www.google.com/imgres?q=yougurt%20&imgurl=https%3A%2F%2Fwww.feastingathome.com%2Fwp-content%2Fuploads%2F2023%2F08%2Fhomemade-yogurt.jpg&imgrefurl=https%3A%2F%2Fwww.feastingathome.com%2Fhow-to-make-homemade-yogurt%2F&docid=ZNRjNG3LgOPryM&tbnid=0qTxUjjXKP0y3M&vet=12ahUKEwjI1cjbxKqIAxUMd2wGHWnmFnkQM3oECHgQAA..i&w=1200&h=1200&hcb=2&ved=2ahUKEwjI1cjbxKqIAxUMd2wGHWnmFnkQM3oECHgQAA",
            },
        ],
        shop: {
            name: "Pure Dairy",
            shop_avatar: {
                public_id: "pure_dairy",
                url: "https://www.google.com/imgres?q=pure%20dairy%20shop%20logo&imgurl=https%3A%2F%2Fres.cloudinary.com%2Fdo9ebd2bf%2Fimages%2Fw_1024%2Ch_412%2Cc_scale%2Ff_webp%2Cq_auto%2Fv1715302828%2FEN%2FPure-Dairy-Logo%2FPure-Dairy-Logo.png%3F_i%3DAA&imgrefurl=https%3A%2F%2Fen.edairynews.com%2Fpure-dairy-rebranding-dairy-market%2F&docid=COPr_wA2vX9fVM&tbnid=vaf5vLlqCLn0yM&vet=12ahUKEwiv8d70xKqIAxXTVmwGHVi7DoUQM3oECEYQAA..i&w=1024&h=412&hcb=2&ved=2ahUKEwiv8d70xKqIAxXTVmwGHVi7DoUQM3oECEYQAA",
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
                url: "https://www.google.com/imgres?q=beef&imgurl=https%3A%2F%2Fcdn.britannica.com%2F68%2F143268-050-917048EA%2FBeef-loin.jpg&imgrefurl=https%3A%2F%2Fwww.britannica.com%2Ftopic%2Fbeef&docid=XO76-64ouRywIM&tbnid=Io1uDuwxGEa59M&vet=12ahUKEwjth7eJxaqIAxXlVmwGHW6JHwAQM3oECBUQAA..i&w=800&h=532&hcb=2&ved=2ahUKEwjth7eJxaqIAxXlVmwGHW6JHwAQM3oECBUQAA",
            },
            {
                public_id: "beef_2",
                url: "https://www.google.com/imgres?q=beef&imgurl=https%3A%2F%2Fonestophalal.com%2Fcdn%2Fshop%2Fcollections%2Fhalal_beef_cuts_1400x.jpg%3Fv%3D1652233676&imgrefurl=https%3A%2F%2Fonestophalal.com%2Fcollections%2Fhalal-beef-cuts-of-beef&docid=d-hUSHSR7si4-M&tbnid=TU8fgmbBjMC5zM&vet=12ahUKEwjth7eJxaqIAxXlVmwGHW6JHwAQM3oECGgQAA..i&w=1080&h=1080&hcb=2&ved=2ahUKEwjth7eJxaqIAxXlVmwGHW6JHwAQM3oECGgQAA",
            },
        ],
        shop: {
            name: "Premium Meats",
            shop_avatar: {
                public_id: "premium_meats",
                url: "https://www.google.com/imgres?q=premium%20meat%20shop%20logo&imgurl=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D100063566139566&imgrefurl=https%3A%2F%2Fwww.facebook.com%2Fp%2FPremium-meat-shop-by-Maryline-100063566139566%2F&docid=kUWToPvFwt46_M&tbnid=r6FgfQFLtzN4pM&vet=12ahUKEwiXzvKoxaqIAxWrRmwGHURxBrQQM3oECE4QAA..i&w=1113&h=1113&hcb=2&ved=2ahUKEwiXzvKoxaqIAxWrRmwGHURxBrQQM3oECE4QAA",
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
                url: "https://www.google.com/imgres?q=bread&imgurl=https%3A%2F%2Fassets.bonappetit.com%2Fphotos%2F5c62e4a3e81bbf522a9579ce%2F16%3A9%2Fw_4000%2Ch_2250%2Cc_limit%2Fmilk-bread.jpg&imgrefurl=https%3A%2F%2Fwww.bonappetit.com%2Frecipe%2Fjapanese-milk-bread&docid=ywOYmW_N9r7L6M&tbnid=2D0MWetp7oXQiM&vet=12ahUKEwj1gZi4xaqIAxUQR2wGHUY3MMEQM3oECBUQAA..i&w=4000&h=2250&hcb=2&ved=2ahUKEwj1gZi4xaqIAxUQR2wGHUY3MMEQM3oECBUQAA",
            },
            {
                public_id: "bread_2",
                url: "https://www.google.com/imgres?q=bread&imgurl=https%3A%2F%2Fwww.backerhausveit.com%2Fwp-content%2Fuploads%2F2021%2F03%2F17783-1.jpg&imgrefurl=https%3A%2F%2Fwww.backerhausveit.com%2Fproduct%2Fwhite-sandwich-bread%2F&docid=2uaEjAbOTzUWkM&tbnid=qRGUGGWGjb_UMM&vet=12ahUKEwj1gZi4xaqIAxUQR2wGHUY3MMEQM3oECBYQAA..i&w=1200&h=900&hcb=2&ved=2ahUKEwj1gZi4xaqIAxUQR2wGHUY3MMEQM3oECBYQAA",
            },
        ],
        shop: {
            name: "Healthy Bakes",
            shop_avatar: {
                public_id: "healthy_bakes",
                url: "https://www.google.com/imgres?q=healthy%20bakes%20shop%20logo&imgurl=https%3A%2F%2Fimages-platform.99static.com%2FbDQT0NvVTyL51DbqnucTLgk3SLs%3D%2F500x500%2Ftop%2Fsmart%2F99designs-contests-attachments%2F22%2F22902%2Fattachment_22902056&imgrefurl=https%3A%2F%2F99designs.com%2Flogo-design%2Fcontests%2Flogo-wanted-healthy-grains-bakery-196369&docid=NVxD-KW05xI1AM&tbnid=ij1YKgwaqoJ1jM&vet=12ahUKEwjh_7TKxaqIAxXMS2cHHbOkDoMQM3oECBYQAA..i&w=500&h=500&hcb=2&ved=2ahUKEwjh_7TKxaqIAxXMS2cHHbOkDoMQM3oECBYQAA",
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
                url: "https://www.google.com/imgres?q=orange%20juice&imgurl=http%3A%2F%2Fwww.babuskitchen.au%2Fcdn%2Fshop%2Ffiles%2Forange-juice.jpg%3Fv%3D1707470401&imgrefurl=https%3A%2F%2Fwww.babuskitchen.au%2Fproducts%2Forange-juice&docid=uKBeM7-nZMo8_M&tbnid=qbHpnc9At8k5pM&vet=12ahUKEwi9y47dxaqIAxUHZWwGHVulDI0QM3oECEQQAA..i&w=800&h=800&hcb=2&ved=2ahUKEwi9y47dxaqIAxUHZWwGHVulDI0QM3oECEQQAA",
            },
            {
                public_id: "juice_2",
                url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fvinyasayogaacademy.com%2Fblog%2Fbenefits-of-drinking-orange-juice-every-morning%2F&psig=AOvVaw1_ccak0vsDIPEplGHCn8DA&ust=1725582460607000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOijz_nFqogDFQAAAAAdAAAAABAE",
            },
        ],
        shop: {
            name: "Citrus Delight",
            shop_avatar: {
                public_id: "citrus_delight",
                url: "https://www.google.com/imgres?q=citrus%20delight%20shop%20logo&imgurl=https%3A%2F%2Fwww.blunteffectsusa.com%2Fcdn%2Fshop%2Fproducts%2FCITRUS_DELIGHT_98c5142f-3038-4714-b570-48133f184545_720x.jpg%3Fv%3D1678287536&imgrefurl=https%3A%2F%2Fwww.blunteffectsusa.com%2Fproducts%2Fcitrus-delight-hand-dipped-incense&docid=V-t1OTF1-3Lp1M&tbnid=hsHbD36vQKBiwM&vet=12ahUKEwiB_tyHxqqIAxXTSmwGHT1YC0wQM3oECEwQAA..i&w=500&h=800&hcb=2&ved=2ahUKEwiB_tyHxqqIAxXTSmwGHT1YC0wQM3oECEwQAA",
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
