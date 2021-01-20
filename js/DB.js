const products = [
  {    
    name: "Aros de Calamar",
    categories: "MAR",
    brand: "NO-BRAND",
    tags: ["rebozados", "mar", "mariscos"],
    product: [
      {
        presentation: "xKg",
        price: "730",
        hasStock: true,
        discount: 20,
        contagramId: null,
        featured: false,
      },
    ],
  },
  {
    name: "Camarón Pelado",
    categories: "MAR",
    brand: "NO-BRAND",
    tags: ["mar", "mariscos"],
    product: [
      {
        presentation: "xKg",
        price: "988",
        hasStock: true,
        discount: 0,
        contagramId: null,
        featured: false,
      },
    ],
  },
  {
    name: "Cayo de Vieira",
    categories: "MAR",
    brand: "NO-BRAND",
    tags: ["mar", "mariscos"],
    product: [
      {
        presentation: "xKg",
        price: "1105",
        hasStock: true,
        discount: 0,
        contagramId: null,
        featured: false,
      },
    ],
  },
  {
    name: "Palito de mar (Kanikama)",
    categories: "MAR",
    tags: ["mar", "mariscos"],
    brand: "NO-BRAND",
    product: [
      {
        presentation: "xKg",
        price: "788",
        hasStock: true,
        discount: 0,
        contagramId: null,
        featured: false,
      },
    ],
  },
  {
    name: "Cornalito congelados",
    categories: "MAR",
    brand: "NO-BRAND",
    tags: ["mar", "mariscos"],
    product: [
      {
        presentation: "xKg",
        price: "313",
        hasStock: true,
        discount: 0,
        contagramId: null,
        featured: false,
      },
    ],
  },
  {
    name: "Rabas rebozadas",
    categories: "MAR",
    brand: "NO-BRAND",
    tags: ["mar", "mariscos"],
    product: [
      {
        presentation: "x4Kg",
        price: "3750",
        hasStock: true,
        discount: 0,
        contagramId: null,
        featured: false,
      },
    ],
  },
  {
    name: "Filet de Abadejo",
    categories: "MAR",
    brand: "NO-BRAND",
    tags: ["mar", "mariscos"],
    product: [
      {
        presentation: "IQF xKg",
        price: "420",
        hasStock: true,
        discount: 0,
        contagramId: null,
        featured: false,
      },
    ],
  },
  {
    name: "Bastones de Pollo Capresse",
    categories: "GRAL",
    brand: "Solimeno",
    tags: ["rebozado"],
    product: [
      {
        presentation: "IQF-CV x7Kg",
        price: "1810",
        hasStock: true,
        discount: 0,
        contagramId: null,
        featured: false,
      },
    ],
  },
  {
    name: "Barritas Muzzarela Finas Hierbas",
    categories: "GRAL",
    brand: "Artico",
    tags: ["rebozado"],
    product: [
      {
        presentation: "IQF-CV x7Kg",
        price: "1810",
        hasStock: true,
        discount: 0,
        contagramId: null,
        featured: false,
      },
    ],
  },
  {
    name: "Croqueta de papa JyQ",
    categories: "GRAL",
    brand: "Artico",
    tags: ["rebozado"],
    product: [
      {
        presentation: "x6Kg",
        price: "1894",
        hasStock: true,
        discount: 0,
        contagramId: null,
        featured: false,
      },
    ],
  },
  {
    name: "Medallon de Pollo con Espinaca",
    categories: "GRAL",
    brand: "Artico",
    tags: ["rebozado"],
    product: [
      {
        presentation: "x6Kg",
        price: "2286",
        hasStock: true,
        discount: 0,
        contagramId: null,
        featured: false,
      },
    ],
  },
    {
    name: "Papa Coolmind 10mm",
    categories: "PAP",
    brand: "Simplot",
    tags: ["frita"],
    product: [
      {
        presentation: "Bolsa x2Kg",
        price: "269",
        hasStock: false,
        discount: 0,
        contagramId: null,
        featured: false,
      },
      {
        presentation: "Caja x14Kg 15%OFF",
        price: "1772",
        hasStock: true,
        discount: 0,
        contagramId: null,
        featured: false,
      },
    ],
  },
  {
    name: "Filet de Merluza",
    categories: "MAR",
    brand: "NO-BRAND",
    tags: ["pescado"],
    product: [
      {
        presentation: "IQF-CV x7Kg",
        price: "1810",
        hasStock: true,
        discount: 0,
        contagramId: null,
        featured: true,
      },
      {
        presentation: "IQF-CV x10Kg",
        price: "2520",
        hasStock: true,
        discount: 0,
        contagramId: null,
        featured: false,
      },
    ],
  },
];

export default products;

const categories = {
  ALL: { description: "Categorías", criteria: "all", baseID: 0 },
  DES: { description: "DESTACADOS", criteria: "featured", baseID: 0 },
  CRN: { description: "CARNES Y POLLOS", criteria: "categories", baseID: 100 },
  GRAL: {
    description: "CATALOGO GENERAL",
    criteria: "categories",
    baseID: 200,
  },
  PAP: { description: "PAPAS CONGELADAS", criteria: "categories", baseID: 300 },
  MAR: {
    description: "PESCADOS Y MARISCOS",
    criteria: "categories",
    baseID: 400,
  },
  VER: { description: "VERDURAS", criteria: "categories", baseID: 500 },
  SS: { description: "SIN STOCK", criteria: "hasStock" },
};

export { categories };
