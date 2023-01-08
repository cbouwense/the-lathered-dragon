import { DateTime } from "luxon";

export type Item = {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
  quantity?: number;
  leftInStock: number;
  backInStock?: {
    date: DateTime;
    quantity: number;
  };
};

enum UnitOfMeasurement {
  OUNCES,
  FLUID_OUNCES,
  MILLILITERS,
  GRAMS,
}

type Product = {
  id: number;
  name: string;
  description?: string;
  netWeight: number;
  netWeightMeasurement: UnitOfMeasurement;
  priceInCents: number;
};

type Ingredient = {
  name: string;
  amount: number;
  unitOfMeasurement: UnitOfMeasurement;
  product?: Product;
};

type Batch = {
  id: number;
  pourDate: DateTime;
  cureDate?: DateTime;
  name?: string;
  ingredients: Ingredient[];
};

// type Query = {
//   products: [Product!]!;
//   product(id: ID!): Product;
//   ingredients: [Ingredient!]!;
//   ingredient(id: ID!): Ingredient;
//   batches: [Batch!]!;
//   batch(id: ID!): Batch;
// };

export const products: Product[] = [
  {
    id: 1,
    name: "redners olive oil",
    netWeight: 1445.8,
    netWeightMeasurement: UnitOfMeasurement.GRAMS,
    priceInCents: 1499,
  },
  {
    id: 2,
    name: "bargain market coconut oil",
    description: "tropical life organic extra virgin coconut oil",
    netWeight: 1530.9,
    netWeightMeasurement: UnitOfMeasurement.GRAMS,
    priceInCents: 1799,
  },
  {
    id: 3,
    name: "bargain market avocado oil",
    netWeight: 720.1,
    netWeightMeasurement: UnitOfMeasurement.GRAMS,
    priceInCents: 1099,
  },
  {
    id: 4,
    name: "amazon castor oil",
    description: "home health organic castor oil",
    netWeight: 453.6,
    netWeightMeasurement: UnitOfMeasurement.GRAMS,
    priceInCents: 599,
  },
  {
    id: 5,
    name: "redners distilled water",
    netWeight: 3785,
    netWeightMeasurement: UnitOfMeasurement.GRAMS,
    priceInCents: 108,
  },
  {
    id: 6,
    name: "devil lye",
    netWeight: 1814,
    netWeightMeasurement: UnitOfMeasurement.GRAMS,
    priceInCents: 2841,
  },
  {
    id: 7,
    name: "amazon shea butter",
    description: "raw african sea butter",
    netWeight: 907,
    netWeightMeasurement: UnitOfMeasurement.GRAMS,
    priceInCents: 1395,
  },
  {
    id: 8,
    name: "amazon cocoa butter",
    description: "sheanefit raw natural chunk cocoa butter",
    netWeight: 456,
    netWeightMeasurement: UnitOfMeasurement.GRAMS,
    priceInCents: 1399,
  },
  {
    id: 9,
    name: "amazon sodium lactate",
    netWeight: 946,
    netWeightMeasurement: UnitOfMeasurement.GRAMS,
    priceInCents: 1690,
  },
  {
    id: 10,
    name: "birthday sodium hydroxide",
    netWeight: 997.9,
    netWeightMeasurement: UnitOfMeasurement.GRAMS,
    priceInCents: 1994,
  },
  {
    id: 11,
    name: "birthday essential oils",
    netWeight: 100,
    netWeightMeasurement: UnitOfMeasurement.MILLILITERS,
    priceInCents: 1799,
  },
  {
    id: 12,
    name: "candlescience fragrance oils",
    netWeight: 141.7,
    netWeightMeasurement: UnitOfMeasurement.MILLILITERS,
    priceInCents: 2730,
  },
  {
    id: 13,
    name: "fake shea butter",
    netWeight: 907,
    netWeightMeasurement: UnitOfMeasurement.GRAMS,
    priceInCents: 1999,
  },
  {
    id: 14,
    name: "fake cocoa butter",
    netWeight: 907,
    netWeightMeasurement: UnitOfMeasurement.GRAMS,
    priceInCents: 1999,
  },
  {
    id: 15,
    name: "brambleberry fragrance oils",
    netWeight: 666,
    netWeightMeasurement: UnitOfMeasurement.MILLILITERS,
    priceInCents: 6690,
  },
  {
    id: 16,
    name: "amazon cocoa butter wafers",
    netWeight: 170.1,
    netWeightMeasurement: UnitOfMeasurement.GRAMS,
    priceInCents: 1885,
  },
];

const nullProduct: Product = {
  id: 0,
  name: "",
  netWeight: 0,
  netWeightMeasurement: UnitOfMeasurement.GRAMS,
  priceInCents: 0,
};

const getProductByName = (name: string) =>
  products.find((product) => product.name === name) ?? nullProduct;

export const batches: Batch[] = [
  {
    id: 1,
    pourDate: DateTime.fromISO("2022-07-14"),
    cureDate: DateTime.fromISO("2022-08-04"),
    name: "Lemon poppyseed and mocha",
    ingredients: [
      {
        name: "olive oil",
        product: getProductByName("redners olive oil"),
        amount: 175,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
      {
        name: "coconut oil",
        product: getProductByName("bargain market coconut oil"),
        amount: 150,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
      {
        name: "avocado oil",
        product: getProductByName("bargain market avocado oil"),
        amount: 50,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
      {
        name: "castor oil",
        product: getProductByName("amazon castor oil"),
        amount: 25,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
      {
        name: "distilled water",
        product: getProductByName("redners distilled water"),
        amount: 168,
        unitOfMeasurement: UnitOfMeasurement.MILLILITERS,
      },
      {
        name: "lye",
        product: getProductByName("devil lye"),
        amount: 76,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
      {
        name: "fragrance oil",
        product: getProductByName("birthday essential oils"),
        amount: 10,
        unitOfMeasurement: UnitOfMeasurement.MILLILITERS,
      },
    ],
  },
  {
    id: 2,
    pourDate: DateTime.fromISO("2022-07-30"),
    cureDate: DateTime.fromISO("2022-09-10"),
    name: "Candlescience medley",
    ingredients: [
      {
        name: "olive oil",
        product: getProductByName("redners olive oil"),
        amount: 500,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
      {
        name: "coconut oil",
        product: getProductByName("bargain market coconut oil"),
        amount: 100,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
      {
        name: "fragrance oil",
        product: getProductByName("candlescience fragrance oils"),
        amount: 30,
        unitOfMeasurement: UnitOfMeasurement.MILLILITERS,
      },
      {
        name: "distilled water",
        product: getProductByName("redners distilled water"),
        amount: 200,
        unitOfMeasurement: UnitOfMeasurement.MILLILITERS,
      },
      {
        name: "lye",
        product: getProductByName("birthday sodium hydroxide"),
        amount: 80,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
    ],
  },
  {
    id: 3,
    pourDate: DateTime.fromISO("2022-07-31"),
    cureDate: DateTime.fromISO("2022-09-11"),
    name: "Essential oil medley",
    ingredients: [
      {
        name: "olive oil",
        product: getProductByName("redners olive oil"),
        amount: 500,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
      {
        name: "coconut oil",
        product: getProductByName("bargain market coconut oil"),
        amount: 100,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
      {
        name: "fragrance oil",
        product: getProductByName("birthday essential oils"),
        amount: 30,
        unitOfMeasurement: UnitOfMeasurement.MILLILITERS,
      },
      {
        name: "distilled water",
        product: getProductByName("redners distilled water"),
        amount: 200,
        unitOfMeasurement: UnitOfMeasurement.MILLILITERS,
      },
      {
        name: "lye",
        product: getProductByName("birthday sodium hydroxide"),
        amount: 80,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
    ],
  },
  {
    id: 4,
    pourDate: DateTime.fromISO("2022-08-14"),
    cureDate: DateTime.fromISO("2022-09-25"),
    name: "Pumpkin spice swirl",
    ingredients: [
      {
        name: "olive oil",
        product: getProductByName("redners olive oil"),
        amount: 228,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
      {
        name: "coconut oil",
        product: getProductByName("bargain market coconut oil"),
        amount: 168,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
      {
        name: "castor oil",
        product: getProductByName("amazon castor oil"),
        amount: 42,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
      {
        name: "shea butter",
        product: getProductByName("fake shea butter"),
        amount: 90,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
      {
        name: "cocoa butter",
        product: getProductByName("fake cocoa butter"),
        amount: 72,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
      {
        name: "fragrance oil",
        product: getProductByName("candlescience fragrance oils"),
        amount: 18,
        unitOfMeasurement: UnitOfMeasurement.MILLILITERS,
      },
      {
        name: "distilled water",
        product: getProductByName("redners distilled water"),
        amount: 125,
        unitOfMeasurement: UnitOfMeasurement.MILLILITERS,
      },
      {
        name: "lye",
        product: getProductByName("birthday sodium hydroxide"),
        amount: 90,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
    ],
  },
  {
    id: 5,
    pourDate: DateTime.fromISO("2022-09-25"),
    cureDate: DateTime.fromISO("2022-11-04"),
    name: "Pumpkin spice swirl, apples & maple bourbon",
    ingredients: [
      {
        name: "olive oil",
        product: getProductByName("redners olive oil"),
        amount: 500,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
      {
        name: "coconut oil",
        product: getProductByName("bargain market coconut oil"),
        amount: 100,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
      {
        name: "fragrance oil",
        product: getProductByName("candlescience fragrance oils"),
        amount: 30,
        unitOfMeasurement: UnitOfMeasurement.MILLILITERS,
      },
      {
        name: "distilled water",
        product: getProductByName("redners distilled water"),
        amount: 200,
        unitOfMeasurement: UnitOfMeasurement.MILLILITERS,
      },
      {
        name: "lye",
        product: getProductByName("birthday sodium hydroxide"),
        amount: 80,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
    ],
  },
  {
    id: 6,
    pourDate: DateTime.fromISO("2022-09-29"),
    cureDate: DateTime.fromISO("2022-11-08"),
    name: "Lemon poppyseed 2",
    ingredients: [
      {
        name: "olive oil",
        product: getProductByName("redners olive oil"),
        amount: 500,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
      {
        name: "coconut oil",
        product: getProductByName("bargain market coconut oil"),
        amount: 100,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
      {
        name: "fragrance oil",
        product: getProductByName("candlescience fragrance oils"),
        amount: 30,
        unitOfMeasurement: UnitOfMeasurement.MILLILITERS,
      },
      {
        name: "distilled water",
        product: getProductByName("redners distilled water"),
        amount: 200,
        unitOfMeasurement: UnitOfMeasurement.MILLILITERS,
      },
      {
        name: "lye",
        product: getProductByName("birthday sodium hydroxide"),
        amount: 80,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
    ],
  },
  {
    id: 7,
    pourDate: DateTime.fromISO("2022-10-01"),
    cureDate: DateTime.fromISO("2022-11-09"),
    name: "Fallen leaves and apple",
    ingredients: [
      {
        name: "olive oil",
        product: getProductByName("redners olive oil"),
        amount: 400,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
      {
        name: "coconut oil",
        product: getProductByName("bargain market coconut oil"),
        amount: 100,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
      {
        name: "avocado oil",
        product: getProductByName("bargain market avocado oil"),
        amount: 75,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
      {
        name: "castor oil",
        product: getProductByName("amazon castor oil"),
        amount: 25,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
      {
        name: "fragrance oil",
        product: getProductByName("candlescience fragrance oils"),
        amount: 30,
        unitOfMeasurement: UnitOfMeasurement.MILLILITERS,
      },
      {
        name: "distilled water",
        product: getProductByName("redners distilled water"),
        amount: 200,
        unitOfMeasurement: UnitOfMeasurement.MILLILITERS,
      },
      {
        name: "lye",
        product: getProductByName("birthday sodium hydroxide"),
        amount: 80,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
    ],
  },
  {
    id: 8,
    pourDate: DateTime.fromISO("2022-10-02"),
    cureDate: DateTime.fromISO("2022-11-10"),
    name: "Pumpkin spice 3",
    ingredients: [
      {
        name: "olive oil",
        product: getProductByName("redners olive oil"),
        amount: 400,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
      {
        name: "coconut oil",
        product: getProductByName("bargain market coconut oil"),
        amount: 100,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
      {
        name: "avocado oil",
        product: getProductByName("bargain market avocado oil"),
        amount: 75,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
      {
        name: "castor oil",
        product: getProductByName("amazon castor oil"),
        amount: 25,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
      {
        name: "fragrance oil",
        product: getProductByName("candlescience fragrance oils"),
        amount: 30,
        unitOfMeasurement: UnitOfMeasurement.MILLILITERS,
      },
      {
        name: "distilled water",
        product: getProductByName("redners distilled water"),
        amount: 200,
        unitOfMeasurement: UnitOfMeasurement.MILLILITERS,
      },
      {
        name: "lye",
        product: getProductByName("birthday sodium hydroxide"),
        amount: 80,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
    ],
  },
  {
    id: 9,
    pourDate: DateTime.fromISO("2022-10-06"),
    cureDate: DateTime.fromISO("2022-11-14"),
    name: "Black coral & moss, black cardamom & cream, oakmoss & amber",
    ingredients: [
      {
        name: "olive oil",
        product: getProductByName("redners olive oil"),
        amount: 515,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
      {
        name: "coconut oil",
        product: getProductByName("bargain market coconut oil"),
        amount: 100,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
      {
        name: "fragrance oil",
        product: getProductByName("candlescience fragrance oils"),
        amount: 30,
        unitOfMeasurement: UnitOfMeasurement.MILLILITERS,
      },
      {
        name: "distilled water",
        product: getProductByName("redners distilled water"),
        amount: 200,
        unitOfMeasurement: UnitOfMeasurement.MILLILITERS,
      },
      {
        name: "lye",
        product: getProductByName("birthday sodium hydroxide"),
        amount: 80,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
    ],
  },
  {
    id: 10,
    pourDate: DateTime.fromISO("2022-10-08"),
    cureDate: DateTime.fromISO("2022-11-16"),
    name: "Pumpkin spice 4",
    ingredients: [
      {
        name: "olive oil",
        product: getProductByName("redners olive oil"),
        amount: 375,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
      {
        name: "coconut oil",
        product: getProductByName("bargain market coconut oil"),
        amount: 100,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
      {
        name: "castor oil",
        product: getProductByName("amazon castor oil"),
        amount: 75,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
      {
        name: "fragrance oil",
        product: getProductByName("candlescience fragrance oils"),
        amount: 30,
        unitOfMeasurement: UnitOfMeasurement.MILLILITERS,
      },
      {
        name: "distilled water",
        product: getProductByName("redners distilled water"),
        amount: 200,
        unitOfMeasurement: UnitOfMeasurement.MILLILITERS,
      },
      {
        name: "lye",
        product: getProductByName("birthday sodium hydroxide"),
        amount: 80,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
    ],
  },
  {
    id: 11,
    pourDate: DateTime.fromISO("2022-10-08"),
    cureDate: DateTime.fromISO("2022-11-16"),
    name: "Black coral & moss, black cardamom & cream, oakmoss & amber",
    ingredients: [
      {
        name: "olive oil",
        product: getProductByName("redners olive oil"),
        amount: 375,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
      {
        name: "coconut oil",
        product: getProductByName("bargain market coconut oil"),
        amount: 300,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
      {
        name: "castor oil",
        product: getProductByName("amazon castor oil"),
        amount: 75,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
      {
        name: "fragrance oil",
        product: getProductByName("candlescience fragrance oils"),
        amount: 30,
        unitOfMeasurement: UnitOfMeasurement.MILLILITERS,
      },
      {
        name: "distilled water",
        product: getProductByName("redners distilled water"),
        amount: 250,
        unitOfMeasurement: UnitOfMeasurement.MILLILITERS,
      },
      {
        name: "lye",
        product: getProductByName("birthday sodium hydroxide"),
        amount: 110,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
    ],
  },
  {
    id: 12,
    pourDate: DateTime.fromISO("2022-10-10"),
    cureDate: DateTime.fromISO("2022-11-18"),
    name: "Cypress & bayberry, ginger & spice, clove",
    ingredients: [
      {
        name: "olive oil",
        product: getProductByName("redners olive oil"),
        amount: 375,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
      {
        name: "coconut oil",
        product: getProductByName("bargain market coconut oil"),
        amount: 150,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
      {
        name: "castor oil",
        product: getProductByName("amazon castor oil"),
        amount: 25,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
      {
        name: "cocoa butter",
        product: getProductByName("amazon cocoa butter"),
        amount: 100,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
      {
        name: "shea butter",
        product: getProductByName("amazon shea butter"),
        amount: 100,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
      {
        name: "fragrance oil",
        product: getProductByName("candlescience fragrance oils"),
        amount: 33,
        unitOfMeasurement: UnitOfMeasurement.MILLILITERS,
      },
      {
        name: "distilled water",
        product: getProductByName("redners distilled water"),
        amount: 250,
        unitOfMeasurement: UnitOfMeasurement.MILLILITERS,
      },
      {
        name: "lye",
        product: getProductByName("devil lye"),
        amount: 100,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
    ],
  },
  {
    id: 13,
    pourDate: DateTime.fromISO("2022-10-23"),
    cureDate: DateTime.fromISO("2022-12-04"),
    name: "Coffee",
    ingredients: [
      {
        name: "olive oil",
        product: getProductByName("redners olive oil"),
        amount: 375,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
      {
        name: "coconut oil",
        product: getProductByName("bargain market coconut oil"),
        amount: 150,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
      {
        name: "castor oil",
        product: getProductByName("amazon castor oil"),
        amount: 50,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
      {
        name: "avocado oil",
        product: getProductByName("bargain market avocado oil"),
        amount: 25,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
      {
        name: "cocoa butter",
        product: getProductByName("amazon cocoa butter"),
        amount: 50,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
      {
        name: "shea butter",
        product: getProductByName("amazon shea butter"),
        amount: 100,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
      {
        name: "fragrance oil",
        product: getProductByName("brambleberry fragrance oils"),
        amount: 35,
        unitOfMeasurement: UnitOfMeasurement.MILLILITERS,
      },
      {
        name: "distilled water",
        product: getProductByName("redners distilled water"),
        amount: 250,
        unitOfMeasurement: UnitOfMeasurement.MILLILITERS,
      },
      {
        name: "lye",
        product: getProductByName("devil lye"),
        amount: 100,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
    ],
  },
  {
    id: 14,
    pourDate: DateTime.fromISO("2022-10-25"),
    cureDate: DateTime.fromISO("2022-12-06"),
    name: "Lavender",
    ingredients: [
      {
        name: "olive oil",
        product: getProductByName("redners olive oil"),
        amount: 375,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
      {
        name: "coconut oil",
        product: getProductByName("bargain market coconut oil"),
        amount: 200,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
      {
        name: "castor oil",
        product: getProductByName("amazon castor oil"),
        amount: 50,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
      {
        name: "avocado oil",
        product: getProductByName("bargain market avocado oil"),
        amount: 25,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
      {
        name: "cocoa butter",
        product: getProductByName("amazon cocoa butter"),
        amount: 50,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
      {
        name: "shea butter",
        product: getProductByName("amazon shea butter"),
        amount: 100,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
      {
        name: "fragrance oil",
        product: getProductByName("brambleberry fragrance oils"),
        amount: 35,
        unitOfMeasurement: UnitOfMeasurement.MILLILITERS,
      },
      {
        name: "distilled water",
        product: getProductByName("redners distilled water"),
        amount: 250,
        unitOfMeasurement: UnitOfMeasurement.MILLILITERS,
      },
      {
        name: "lye",
        product: getProductByName("devil lye"),
        amount: 100,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
    ],
  },
  {
    id: 15,
    pourDate: DateTime.fromISO("2022-11-11"),
    cureDate: DateTime.fromISO("2022-12-22"),
    name: "Spruce",
    ingredients: [
      {
        name: "olive oil",
        product: getProductByName("redners olive oil"),
        amount: 375,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
      {
        name: "coconut oil",
        product: getProductByName("bargain market coconut oil"),
        amount: 200,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
      {
        name: "castor oil",
        product: getProductByName("amazon castor oil"),
        amount: 50,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
      {
        name: "avocado oil",
        product: getProductByName("bargain market avocado oil"),
        amount: 25,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
      {
        name: "cocoa butter",
        product: getProductByName("amazon cocoa butter"),
        amount: 50,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
      {
        name: "shea butter",
        product: getProductByName("amazon shea butter"),
        amount: 100,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
      {
        name: "fragrance oil",
        product: getProductByName("brambleberry fragrance oils"),
        amount: 35,
        unitOfMeasurement: UnitOfMeasurement.MILLILITERS,
      },
      {
        name: "distilled water",
        product: getProductByName("redners distilled water"),
        amount: 250,
        unitOfMeasurement: UnitOfMeasurement.MILLILITERS,
      },
      {
        name: "lye",
        product: getProductByName("devil lye"),
        amount: 100,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
      {
        name: "sodium lactate",
        product: getProductByName("amazon sodium lactate"),
        amount: 2.5,
        unitOfMeasurement: UnitOfMeasurement.MILLILITERS,
      },
    ],
  },
  {
    id: 16,
    pourDate: DateTime.fromISO("2022-11-13"),
    cureDate: DateTime.fromISO("2022-12-24"),
    name: "Vanilla",
    ingredients: [
      {
        name: "olive oil",
        product: getProductByName("redners olive oil"),
        amount: 375,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
      {
        name: "coconut oil",
        product: getProductByName("bargain market coconut oil"),
        amount: 150,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
      {
        name: "castor oil",
        product: getProductByName("amazon castor oil"),
        amount: 25,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
      {
        name: "cocoa butter",
        product: getProductByName("amazon cocoa butter"),
        amount: 100,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
      {
        name: "shea butter",
        product: getProductByName("amazon shea butter"),
        amount: 100,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
      {
        name: "fragrance oil",
        product: getProductByName("brambleberry fragrance oils"),
        amount: 35,
        unitOfMeasurement: UnitOfMeasurement.MILLILITERS,
      },
      {
        name: "distilled water",
        product: getProductByName("redners distilled water"),
        amount: 250,
        unitOfMeasurement: UnitOfMeasurement.MILLILITERS,
      },
      {
        name: "lye",
        product: getProductByName("devil lye"),
        amount: 100,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
      {
        name: "sodium lactate",
        product: getProductByName("amazon sodium lactate"),
        amount: 7.39,
        unitOfMeasurement: UnitOfMeasurement.MILLILITERS,
      },
    ],
  },
  {
    id: 17,
    pourDate: DateTime.fromISO("2022-12-27"),
    cureDate: DateTime.fromISO("2023-01-17"),
    name: "Lemon poppyseed 3",
    ingredients: [
      {
        name: "olive oil",
        product: getProductByName("redners olive oil"),
        amount: 350,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
      {
        name: "coconut oil",
        product: getProductByName("bargain market coconut oil"),
        amount: 200,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
      {
        name: "castor oil",
        product: getProductByName("amazon castor oil"),
        amount: 50,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
      {
        name: "avocado oil",
        product: getProductByName("bargain market avocado oil"),
        amount: 25,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
      {
        name: "cocoa butter",
        product: getProductByName("amazon cocoa butter"),
        amount: 50,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
      {
        name: "shea butter",
        product: getProductByName("amazon shea butter"),
        amount: 75,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
      {
        name: "fragrance oil",
        product: getProductByName("brambleberry fragrance oils"),
        amount: 35,
        unitOfMeasurement: UnitOfMeasurement.MILLILITERS,
      },
      {
        name: "distilled water",
        product: getProductByName("redners distilled water"),
        amount: 250,
        unitOfMeasurement: UnitOfMeasurement.MILLILITERS,
      },
      {
        name: "lye",
        product: getProductByName("devil lye"),
        amount: 100,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
      {
        name: "sodium lactate",
        product: getProductByName("amazon sodium lactate"),
        amount: 7.39,
        unitOfMeasurement: UnitOfMeasurement.MILLILITERS,
      },
    ],
  },
  {
    id: 18,
    pourDate: DateTime.fromISO("2022-12-29"),
    cureDate: DateTime.fromISO("2023-01-19"),
    name: "Lavender",
    ingredients: [
      {
        name: "olive oil",
        product: getProductByName("redners olive oil"),
        amount: 350,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
      {
        name: "coconut oil",
        product: getProductByName("bargain market coconut oil"),
        amount: 200,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
      {
        name: "castor oil",
        product: getProductByName("amazon castor oil"),
        amount: 25,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
      {
        name: "avocado oil",
        product: getProductByName("bargain market avocado oil"),
        amount: 50,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
      {
        name: "cocoa butter",
        product: getProductByName("amazon cocoa butter"),
        amount: 50,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
      {
        name: "shea butter",
        product: getProductByName("amazon shea butter"),
        amount: 75,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
      {
        name: "fragrance oil",
        product: getProductByName("brambleberry fragrance oils"),
        amount: 35,
        unitOfMeasurement: UnitOfMeasurement.MILLILITERS,
      },
      {
        name: "distilled water",
        product: getProductByName("redners distilled water"),
        amount: 250,
        unitOfMeasurement: UnitOfMeasurement.MILLILITERS,
      },
      {
        name: "lye",
        product: getProductByName("devil lye"),
        amount: 100,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
      {
        name: "sodium lactate",
        product: getProductByName("amazon sodium lactate"),
        amount: 7.39,
        unitOfMeasurement: UnitOfMeasurement.MILLILITERS,
      },
    ],
  },
  {
    id: 19,
    pourDate: DateTime.fromISO("2022-12-30"),
    cureDate: DateTime.fromISO("2023-01-20"),
    name: "Eucalyptus",
    ingredients: [
      {
        name: "olive oil",
        product: getProductByName("redners olive oil"),
        amount: 350,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
      {
        name: "coconut oil",
        product: getProductByName("bargain market coconut oil"),
        amount: 200,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
      {
        name: "castor oil",
        product: getProductByName("amazon castor oil"),
        amount: 25,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
      {
        name: "avocado oil",
        product: getProductByName("bargain market avocado oil"),
        amount: 50,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
      {
        name: "cocoa butter",
        product: getProductByName("amazon cocoa butter"),
        amount: 50,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
      {
        name: "shea butter",
        product: getProductByName("amazon shea butter"),
        amount: 75,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
      {
        name: "fragrance oil",
        product: getProductByName("brambleberry fragrance oils"),
        amount: 35,
        unitOfMeasurement: UnitOfMeasurement.MILLILITERS,
      },
      {
        name: "distilled water",
        product: getProductByName("redners distilled water"),
        amount: 250,
        unitOfMeasurement: UnitOfMeasurement.MILLILITERS,
      },
      {
        name: "lye",
        product: getProductByName("devil lye"),
        amount: 100,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
      {
        name: "sodium lactate",
        product: getProductByName("amazon sodium lactate"),
        amount: 7.39,
        unitOfMeasurement: UnitOfMeasurement.MILLILITERS,
      },
    ],
  },
  {
    id: 20,
    pourDate: DateTime.fromISO("2023-01-06"),
    cureDate: DateTime.fromISO("2023-02-14"),
    name: "Spruce & eucalyptus",
    ingredients: [
      {
        name: "olive oil",
        product: getProductByName("redners olive oil"),
        amount: 377,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
      {
        name: "coconut oil",
        product: getProductByName("bargain market coconut oil"),
        amount: 200,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
      {
        name: "castor oil",
        product: getProductByName("amazon castor oil"),
        amount: 25,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
      {
        name: "cocoa butter",
        product: getProductByName("amazon cocoa butter wafers"),
        amount: 50,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
      {
        name: "shea butter",
        product: getProductByName("amazon shea butter"),
        amount: 75,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
      {
        name: "fragrance oil",
        product: getProductByName("brambleberry fragrance oils"),
        amount: 35,
        unitOfMeasurement: UnitOfMeasurement.MILLILITERS,
      },
      {
        name: "distilled water",
        product: getProductByName("redners distilled water"),
        amount: 250,
        unitOfMeasurement: UnitOfMeasurement.MILLILITERS,
      },
      {
        name: "lye",
        product: getProductByName("devil lye"),
        amount: 100,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
      },
      {
        name: "sodium lactate",
        product: getProductByName("amazon sodium lactate"),
        amount: 7.39,
        unitOfMeasurement: UnitOfMeasurement.MILLILITERS,
      },
    ],
  },
];

export const items: Item[] = [
  {
    id: 6,
    name: "Vanilla",
    image:
      "https://as1.ftcdn.net/v2/jpg/00/84/18/64/1000_F_84186401_fglD8eOBC8xShCT20U0Y8lRtzc7v6ZLc.jpg",
    price: 5,
    description: "Mild scent of warm vanilla sugar.",
    leftInStock: 5,
    quantity: 1,
  },
  {
    id: 4,
    name: "Lemon Poppyseed",
    image:
      "https://as1.ftcdn.net/v2/jpg/00/84/18/64/1000_F_84186401_fglD8eOBC8xShCT20U0Y8lRtzc7v6ZLc.jpg",
    price: 5,
    description:
      "A fresh splash of citrus and some real poppyseeds for exfoliation.",
    leftInStock: 0,
    quantity: 1,
    backInStock: {
      date: DateTime.local(2023, 1, 17),
      quantity: 10,
    },
  },
  {
    id: 2,
    name: "Lavender",
    image:
      "https://as1.ftcdn.net/v2/jpg/00/84/18/64/1000_F_84186401_fglD8eOBC8xShCT20U0Y8lRtzc7v6ZLc.jpg",
    price: 5,
    description:
      "A calming scent that is perfect for unwinding after a long day. This scent relaxes the mind and body.",
    leftInStock: 0,
    quantity: 1,
    backInStock: {
      date: DateTime.local(2023, 1, 19),
      quantity: 10,
    },
  },
  {
    id: 7,
    name: "Eucalyptus",
    image:
      "https://as1.ftcdn.net/v2/jpg/00/84/18/64/1000_F_84186401_fglD8eOBC8xShCT20U0Y8lRtzc7v6ZLc.jpg",
    price: 5,
    description: "A fresh, clean scent that is perfect for the shower.",
    leftInStock: 0,
    quantity: 1,
    backInStock: {
      date: DateTime.local(2023, 1, 20),
      quantity: 10,
    },
  },
  {
    id: 3,
    name: "Spruce",
    image:
      "https://as1.ftcdn.net/v2/jpg/00/84/18/64/1000_F_84186401_fglD8eOBC8xShCT20U0Y8lRtzc7v6ZLc.jpg",
    price: 5,
    description:
      "Spruce up your shower with this fresh, woodsy scent. This scent is perfect for the outdoorsy type or the holidays.",
    leftInStock: 0,
    quantity: 1,
    backInStock: {
      date: DateTime.local(2023, 2, 14),
      quantity: 10,
    },
  },
  {
    id: 1,
    name: "Coffee",
    image:
      "https://as1.ftcdn.net/v2/jpg/00/84/18/64/1000_F_84186401_fglD8eOBC8xShCT20U0Y8lRtzc7v6ZLc.jpg",
    price: 5,
    description:
      "Rich, dark, and with a hint of vanilla. This scented bar is made with real, fresh brewed coffee.",
    leftInStock: 0,
    quantity: 1,
  },
  {
    id: 5,
    name: "Sandalwood",
    image:
      "https://as1.ftcdn.net/v2/jpg/00/84/18/64/1000_F_84186401_fglD8eOBC8xShCT20U0Y8lRtzc7v6ZLc.jpg",
    price: 5,
    description: "Mild and homey.",
    leftInStock: 0,
    quantity: 1,
  },
];
