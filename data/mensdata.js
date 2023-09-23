const mensshoeProducts = [
  {
    id: 1,
    image: [
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/bfc7efea-4b02-48f8-a00a-0318baf12316/sabrina-1-ionic-ep-basketball-shoes-ZK1Xwv.png",
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/17ed15c1-353f-4051-bed6-69d350499a78/sabrina-1-spark-ep-basketball-shoes-ZK1Xwv.png",
    ],
    product_name: " Sabrina 1 'Ionic' EP ",
    product_details: "Basketball Shoes",
    price: 10795.0,
    sizes: ["US 7", "US 8", "US 9", "US 10", "US 11"],
  },
  {
    id: 2,
    image: [
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/de63e1ff-c1ab-40e9-aaaf-1ccd5d0cac07/air-jordan-1-low-se-craft-shoes-q1ktlR.png",
    ],
    product_name: "Air Jordan 1 Low SE Craft",
    product_details: "Men's Shoes",
    price: 9777.0,
    sizes: ["US 7", "US 8", "US 9", "US 10", "US 11"],
  },

  {
    id: 3,
    image: [
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9782d869-ecb8-4be8-9f7c-4cae2a56769a/air-max-ap-shoes-3Rdq04.png",
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d2b92a59-447d-49ed-b2a9-2562ebdb9ed5/air-max-ap-shoes-3Rdq04.png",
    ],
    product_name: "Nike Air Max AP",
    product_details: "Men's Shoes",
    price: 8295.0,
    sizes: ["US 11", "US 12", "US 13", "US 1", "US 2"],
  },

  {
    id: 4,
    image: [
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ed45ceac-1a49-450c-a71d-3ffedbb376d0/infinityrn-4-road-running-shoes-mLRjcz.png",
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fb5ad585-ec9c-4ab6-ab6f-b0b6b50235a4/infinityrn-4-road-running-shoes-mLRjcz.png",
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/71a3d324-05c0-4b8d-9d78-0bd937520798/infinityrn-4-road-running-shoes-mLRjcz.png",
    ],
    product_name: "Nike InfinityRN 4",
    product_details: "Men's Road Running Shoes",
    price: 14995.0,
    sizes: ["US 7", "US 8", "US 9", "US 10", "US 11"],
  },
  {
    id: 5,
    image: [
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/f9da8586-6b8b-48c6-b820-cfc5e010474a/jordan-max-aura-4-shoes-cKMcXJ.png",
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/f9da8586-6b8b-48c6-b820-cfc5e010474a/jordan-max-aura-4-shoes-cKMcXJ.png",
    ],
    product_name: "Jordan Max Aura 4",
    product_details: "Men's Shoes",
    price: 10727.0,
    sizes: ["US 11", "US 12", "US 13", "US 1", "US 2"],
  },
  {
    id: 6,
    image: [
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fad35cf8-33b9-48d7-9fa8-e801d742daf6/air-max-systm-shoes-hLmQ85.png",
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/51fd150a-29bc-4385-b0b3-dd29f6487d60/air-max-systm-shoes-hLmQ85.png",
    ],
    product_name: "Nike Air Max SYSTM",
    product_details: "Men's Shoes",
    price: 8595.0,
    sizes: ["US 6", "US 7", "US 8", "US 9", "US 10"],
  },

  {
    id: 7,
    image: [
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/60e98509-bbe4-4edf-a1cc-77567773fcef/dunk-low-retro-shoes-LX3n9P.png",
    ],
    product_name: "Nike Dunk Low Retro Premium",
    product_details: "Men's Shoes",
    price: 9207.0,
    sizes: ["US 6", "US 7", "US 8", "US 9", "US 10"],
  },

  {
    id: 8,
    image: [
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b1d3cf2e-0dca-4f6d-97ff-21006c346e8e/air-jordan-1-retro-high-og-shoes-Pz6fZ9.png",
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/5927b4c8-6f28-4334-a174-20edb76c3c29/air-jordan-1-retro-high-og-shoes-Pz6fZ9.png",
    ],
    product_name: "Air Jordan 1 Retro High OG",
    product_details: "Men's Shoes",
    price: 16147.0,
    sizes: ["US 5", "US 6", "US 7", "US 8", "US 9"],
  },
  {
    id: 9,
    image: [
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3727d0f9-a6d1-4ee9-993c-9aac2fd0b65b/air-force-1-high-07-lv8-shoes-RTQ6x1.png",
    ],
    product_name: "Nike Air Force 1 High '07 LV8",
    product_details: "Men's Shoes",
    price: 7377.0,
    sizes: ["US 5", "US 6", "US 7", "US 8", "US 9"],
  },
  {
    id: 10,
    image: [
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/133d8e36-a9d2-4171-8fd3-6eabf13c483b/infinityrn-4-se-road-running-shoes-STv3Zz.png",
    ],
    product_name: "Nike InfinityRN 4 SE",
    product_details: "Men's Road Running Shoes ",
    price: 14995.0,
    sizes: ["US 7", "US 8", "US 9", "US 10", "US 11"],
  },
];

localStorage.setItem("nikemensdata", JSON.stringify(mensshoeProducts));
