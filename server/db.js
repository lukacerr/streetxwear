export default {
  categories: [
    {
      name: 'Remeras',
      image: 'https://i.imgur.com/cCQnakx.jpg',
      subcategories: [
        { name: 'Manga larga', image: 'https://i.imgur.com/cCQnakx.jpg' },
        { name: 'Manga corta', image: 'https://i.imgur.com/cCQnakx.jpg' },
        { name: 'Musculosa', image: 'https://i.imgur.com/cCQnakx.jpg' },
        { name: 'Oversized', image: 'https://i.imgur.com/cCQnakx.jpg' },
      ],
    },
    {
      name: 'Buzos',
      image: 'https://i.imgur.com/WsvBk2b.jpg',
      subcategories: [
        { name: 'Anorak', image: 'https://i.imgur.com/WsvBk2b.jpg' },
        { name: 'Hoodie', image: 'https://i.imgur.com/cCQnakx.jpg' },
        { name: 'Sin capucha', image: 'https://i.imgur.com/cCQnakx.jpg' },
      ],
    },
    {
      name: 'Camperas',
      image: 'https://i.imgur.com/cCQnakx.jpg',
      subcategories: [],
    },
    {
      name: 'Pantalones',
      image: 'https://i.imgur.com/cCQnakx.jpg',
      subcategories: [
        { name: 'Jeans', image: 'https://i.imgur.com/cCQnakx.jpg' },
        { name: 'Cargo', image: 'https://i.imgur.com/cCQnakx.jpg' },
        { name: 'Shorts', image: 'https://i.imgur.com/cCQnakx.jpg' },
      ],
    },
    {
      name: 'Calzados',
      image: 'https://i.imgur.com/cCQnakx.jpg',
      subcategories: [],
    },
    {
      name: 'Accesorios',
      image: 'https://i.imgur.com/cCQnakx.jpg',
      subcategories: [
        { name: 'Tapabocas', image: 'https://i.imgur.com/cCQnakx.jpg' },
        { name: 'Gorras', image: 'https://i.imgur.com/cCQnakx.jpg' },
        { name: 'Joyería', image: 'https://i.imgur.com/cCQnakx.jpg' },
      ],
    },
  ],
  products: [
    {
      category: 2,
      categoryName: 'Buzos',
      subcategory: [0],
      name: 'Buzo BCLUB anorak rompeviento black unisex',
      description:
        'Esta es la descripción del buzo product ID 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae sapien at est molestie tincidunt a efficitur metus. Morbi quis nunc pretium lorem venenatis lacinia id vitae ipsum. Fusce dolor nunc, volutpat at ullamcorper vel, elementum eget velit. Suspendisse gravida mauris et lacinia varius. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam at purus ac tortor tincidunt venenatis in a ex. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
      image: 'https://i.imgur.com/WsvBk2b.jpg',
      price: 6500,
      stock: 4,
    },
    {
      category: 1,
      categoryName: 'Remeras',
      subcategory: [1, 3],
      name: 'Remera BCLUB oversize cargo manga corta unisex',
      description:
        'Esta es la descripción de la remera product ID 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae sapien at est molestie tincidunt a efficitur metus. Morbi quis nunc pretium lorem venenatis lacinia id vitae ipsum. Fusce dolor nunc, volutpat at ullamcorper vel, elementum eget velit. Suspendisse gravida mauris et lacinia varius. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam at purus ac tortor tincidunt venenatis in a ex. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
      image: 'https://i.imgur.com/cCQnakx.jpg',
      price: 2500,
      stock: 12,
    },
    {
      category: 1,
      categoryName: 'Remeras',
      subcategory: [0, 3],
      name: 'Remera Vomer Clothing oversize manga larga across',
      description:
        'Esta es la descripción de la remera product ID 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae sapien at est molestie tincidunt a efficitur metus. Morbi quis nunc pretium lorem venenatis lacinia id vitae ipsum. Fusce dolor nunc, volutpat at ullamcorper vel, elementum eget velit. Suspendisse gravida mauris et lacinia varius. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam at purus ac tortor tincidunt venenatis in a ex. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
      image: 'https://i.imgur.com/TVaM4BR.jpg',
      price: 1950,
      stock: 3,
    },
  ],
};
