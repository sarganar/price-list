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
    name: "Medallon de Pollo con Jamon crema de queso",
    categories: "GRAL",
    brand: "Artico",
    tags: ["rebozado"],
    product: [
      {
        presentation: "x6Kg",
        price: "2316",
        hasStock: true,
        discount: 0,
        contagramId: null,
        featured: false,
      },
    ],
  },

// PAPAS

  {
    name: "Papa Coolmind 10mm",
    categories: "PAP",
    brand: "Simplot",
    tags: ["frita"],
    product: [
      {
        presentation: "Bolsa x2Kg",
        price: "298",
        hasStock: true,
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
        featured: true,
      },
    ],
  },
  {
    name: "Papa Corte Fino",
    categories: "PAP",
    brand: "McCain",
    tags: ["frita"],
    product: [
      {
        presentation: "Bolsa x2.25Kg",
        price: "430",
        hasStock: true,
        discount: 0,
        contagramId: null,
        featured: false,
      },
      {
        presentation: "Caja x18Kg Oferta",
        price: "3266",
        hasStock: true,
        discount: 0,
        contagramId: null,
        featured: false,
      },
    ],
  },
  {
    name: "Papa Crinkle Corte Ondulado",
    categories: "PAP",
    brand: "McCain",
    tags: ["frita"],
    product: [
      {
        presentation: "Bolsa x2.5Kg",
        price: "502",
        hasStock: true,
        discount: 0,
        contagramId: null,
        featured: false,
      },
      {
        presentation: "Caja x12.5Kg Oferta",
        price: "2383",
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
  //  POLLOS Y CARNES
  {
    name: "Pollo Fresco",
    categories: "CRN",
    brand: "Pollo",
    tags: [""],
    product: [
      {
        presentation: "Nro 7 / 8 / 9/ 10 x20Kg",
        price: "2968",
        hasStock: true,
        discount: 0,
        contagramId: null,
        featured: false,
      },
    ],
  },
  {
    name: "Pata Muslo Noelma",
    categories: "CRN",
    brand: "Pollo",
    tags: ["pollo", "fresca"],
    product: [
      {
        presentation: "s/cadera x20Kg",
        price: "3216",
        hasStock: true,
        discount: 0,
        contagramId: null,
        featured: false,
      },
    ],
  },
  {
    name: "Pechuga sin hueso Optimo",
    categories: "CRN",
    brand: "Pollo",
    tags: ["pollo", "fresco"],
    product: [
      {
        presentation: "x10Kg",
        price: "3198",
        hasStock: true,
        discount: 0,
        contagramId: null,
        featured: false,
      },
    ],
  },
  {
    name: "Arrollado de Pollo JyQ",
    categories: "CRN",
    brand: "Arrollado",
    tags: ["fresco"],
    product: [
      {
        presentation: "envasado al vacío x1Kg",
        price: "403",
        hasStock: true,
        discount: 0,
        contagramId: null,
        featured: false,
      },
    ],
  },

  {
    name: "Arrollado de Pollo Roquefort",
    categories: "CRN",
    brand: "Arrollado",
    tags: ["fresco"],
    product: [
      {
        presentation: "envasado al vacío x1Kg",
        price: "403",
        hasStock: true,
        discount: 0,
        contagramId: null,
        featured: false,
      },
    ],
  },
  {
    name: "Roulette de Pollo JyQ",
    categories: "CRN",
    brand: "Arrollado",
    tags: ["fresco"],
    product: [
      {
        presentation: "envasado al vacío x1Kg",
        price: "405",
        hasStock: true,
        discount: 0,
        contagramId: null,
        featured: false,
      },
    ],
  },
{
    name: "Roulette de Pollo con Paceta",
    categories: "CRN",
    brand: "Arrollado",
    tags: ["fresco"],
    product: [
      {
        presentation: "envasado al vacío x1Kg",
        price: "405",
        hasStock: true,
        discount: 0,
        contagramId: null,
        featured: false,
      },
    ],
  },

  // FRIAR
  {
    name: "Med de Carne Finitas Granel",
    categories: "CRN",
    brand: "Friar",
    tags: [""],
    product: [
      {
        presentation: "36x2x57 grs",
        price: "1385",
        hasStock: true,
        discount: 0,
        contagramId: null,
        featured: true,
      },
    ],
  },
  {
    name: "Med de Carne Grandes Granel",
    categories: "CRN",
    brand: "Friar",
    tags: [""],
    product: [
      {
        presentation: "30x2x80 grs",
        price: "1680",
        hasStock: true,
        discount: 0,
        contagramId: null,
        featured: false,
      },
    ],
  },
  {
    name: "Hamburg de Carne Grandes Granel",
    categories: "CRN",
    brand: "Friar",
    tags: [""],
    product: [
      {
        presentation: "30x2x83,5 grs 100% Carne",
        price: "2720",
        hasStock: true,
        discount: 0,
        contagramId: null,
        featured: false,
      },
    ],
  },
  {
    name: "Hamburg de Carne Finitas Granel",
    categories: "CRN",
    brand: "Friar",
    tags: [""],
    product: [
      {
        presentation: "36x2x57 grs 100% Carne",
        price: "2440",
        hasStock: true,
        discount: 0,
        contagramId: null,
        featured: false,
      },
    ],
  },
  {
    name: "Med de Carne Gigantes Granel",
    categories: "CRN",
    brand: "Friar",
    tags: [""],
    product: [
      {
        presentation: "20x2x110 grs",
        price: "1630",
        hasStock: true,
        discount: 0,
        contagramId: null,
        featured: false,
      },
    ],
  },
  {
    name: "Hamburg de Carne Gigantes Granel",
    categories: "CRN",
    brand: "Friar",
    tags: [""],
    product: [
      {
        presentation: "20x2x110 grs 100% Carne",
        price: "2535",
        hasStock: true,
        discount: 0,
        contagramId: null,
        featured: false,
      },
    ],
  },
  // BELTRAN
  {
    name: "Hamburguesa 83.5grs",
    categories: "CRN",
    brand: "Beltran",
    tags: ["carne"],
    product: [
      {
        presentation: "Caja 20x4x83.5 grs",
        price: "2180",
        hasStock: true,
        discount: 0,
        contagramId: null,
        featured: true,
      },
    ],
  },
  {
    name: "Hamburguesa 60grs",
    categories: "CRN",
    brand: "Beltran",
    tags: ["carne"],
    product: [
      {
        presentation: "Caja 30x2x60 grs - 3.6 Kg",
        price: "1120",
        hasStock: true,
        discount: 0,
        contagramId: null,
        featured: false,
      },
    ],
  },
  {
    name: "Hamburguesa Gourmet",
    categories: "CRN",
    brand: "Beltran",
    tags: ["carne"],
    product: [
      {
        presentation: "Caja x4x120grs 100% Carne",
        price: "248",
        hasStock: true,
        discount: 0,
        contagramId: null,
        featured: false,
      },
    ],
  },
  {
    name: "Hamburguesa Gastronómica",
    categories: "CRN",
    brand: "Beltran",
    tags: ["carne"],
    product: [
      {
        presentation: "Caja x40x120grs Tipo Casera",
        price: "1270",
        hasStock: true,
        discount: 0,
        contagramId: null,
        featured: false,
      },
    ],
  },
  {
    name: "Hamburguesa La Coruña",
    categories: "CRN",
    brand: "Beltran",
    tags: ["carne"],
    product: [
      {
        presentation: "Caja 36x2x50grs",
        price: "828",
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
