import { DateTime } from "luxon";

export type Item = {
  id: number;
  name: string;
  image?: string;
  price: number;
  description: string;
  quantity?: number;
  leftInStock: number;
  backInStock?: {
    date: DateTime;
    quantity: number;
  };
};

export enum UnitOfMeasurement {
  OUNCES,
  FLUID_OUNCES,
  MILLILITERS,
  GRAMS,
  TEASPOONS,
}

export type Product = {
  id: number;
  name: string;
  description?: string;
  netWeight: number;
  netWeightMeasurement: UnitOfMeasurement;
  priceInCents: number;
};

export type Ingredient = {
  name: string;
  amount: number;
  unitOfMeasurement: UnitOfMeasurement;
  product?: Product;
};

export type Batch = {
  id: number;
  pourDate: DateTime;
  cureDate?: DateTime;
  name?: string;
  ingredients: Ingredient[];
};

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

export const getProductByName = (name: string) =>
  products.find((product) => product.name === name) ?? nullProduct;

export const batches: Batch[] = [
  {
    id: 1,
    pourDate: DateTime.fromISO("2022-07-14"),
    cureDate: DateTime.fromISO("2022-08-04"),
    name: "lemon-poppyseed-and-mocha",
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
    name: "candlescience-medley",
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
    name: "essential-oil-medley",
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
    name: "pumpkin-spice-swirl",
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
    name: "pumpkin-spiceswirl-and-apples-with-maple bourbon",
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
    name: "lemon-poppyseed-2",
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
    name: "fallen-leaves-and-apple",
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
    name: "pumpkin-spice-3",
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
    name: "black-coral-and-moss-plus-black-cardamom-cream plus-oakmoss-and-amber",
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
    name: "pumpkin-spice-4",
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
    name: "Black-coral-and-moss-plus-black-cardamom-and-cream-plus-oakmoss-and-amber",
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
    name: "cypress-and-bayberry-plus-ginger-and-spice-plus-clove",
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
    name: "coffee",
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
        amount: 7,
        unitOfMeasurement: UnitOfMeasurement.TEASPOONS,
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
    name: "lavender",
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
        amount: 7,
        unitOfMeasurement: UnitOfMeasurement.TEASPOONS,
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
    name: "spruce",
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
        amount: 7,
        unitOfMeasurement: UnitOfMeasurement.TEASPOONS,
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
    name: "vanilla",
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
        amount: 7,
        unitOfMeasurement: UnitOfMeasurement.TEASPOONS,
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
    name: "lemon-poppyseed-3",
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
        amount: 7,
        unitOfMeasurement: UnitOfMeasurement.TEASPOONS,
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
    name: "lavender-2",
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
        amount: 7,
        unitOfMeasurement: UnitOfMeasurement.TEASPOONS,
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
    name: "eucalyptus",
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
        amount: 7,
        unitOfMeasurement: UnitOfMeasurement.TEASPOONS,
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
    name: "spruce-and-eucalyptus",
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
        amount: 7,
        unitOfMeasurement: UnitOfMeasurement.TEASPOONS,
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
    id: 21,
    pourDate: DateTime.fromISO("2023-02-05"),
    cureDate: DateTime.fromISO("2023-03-19"),
    name: "vanilla-latte",
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
        amount: 7,
        unitOfMeasurement: UnitOfMeasurement.TEASPOONS,
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
        amount: 1,
        unitOfMeasurement: UnitOfMeasurement.TEASPOONS,
      },
    ],
  },
  {
    id: 22,
    pourDate: DateTime.fromISO("2023-02-23"),
    cureDate: DateTime.fromISO("2023-04-08"),
    name: "coffee",
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
        name: "avocado oil",
        product: getProductByName("bargain market avocado oil"),
        amount: 25,
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
        amount: 7,
        unitOfMeasurement: UnitOfMeasurement.TEASPOONS,
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
        amount: 1,
        unitOfMeasurement: UnitOfMeasurement.TEASPOONS,
      },
    ],
  },
];

export const items: Item[] = [
  {
    id: 4,
    name: "Lemon Poppyseed",
    image: "lemon_poppyseed.jpeg",
    price: 5,
    description:
      "Playful and fruity, mixed with real poppyseeds. Rachel's personal favorite for hand washing!",
    leftInStock: 8,
    quantity: 1,
  },
  {
    id: 2,
    name: "Lavender",
    image: "lavender.jpeg",
    price: 5,
    description:
      "Serene and unmistakable, Rachel and I love Lavender bars for our kitchen hand washing.",
    leftInStock: 8,
    quantity: 1,
  },
  {
    id: 7,
    name: "Eucalyptus",
    image: "eucalyptus.jpeg",
    price: 5,
    description:
      "Bold and invigorating. Christian's favorite bar for showering.",
    leftInStock: 8,
    quantity: 1,
  },
  {
    id: 6,
    name: "Hint of Vanilla",
    image: "hint_of_vanilla.jpeg",
    price: 5,
    description: "Mildly scented, with notes of warm vanilla sugar.",
    leftInStock: 4,
    quantity: 1,
  },
  {
    id: 3,
    name: "Spruce",
    image: "spruce.jpeg",
    price: 5,
    description:
      "Masculine and refreshing, with notes of eucalyptus. You feel cleaner just smelling this bar.",
    leftInStock: 9,
    quantity: 1,
    backInStock: {
      date: DateTime.local(2023, 2, 14),
      quantity: 10,
    },
  },
  {
    id: 8,
    name: "Vanilla Latte",
    price: 7,
    description:
      "Richly infused with freshly brewed coffee. Blended with finely ground coffee beans for exfoliation.",
    leftInStock: 0,
    quantity: 1,
    backInStock: {
      date: DateTime.local(2023, 3, 19),
      quantity: 10,
    },
  },
  {
    id: 9,
    name: "Coffee",
    price: 5,
    description:
      "Richly infused with freshly brewed coffee. Smooth color and feel.",
    leftInStock: 0,
    quantity: 1,
    backInStock: {
      date: DateTime.local(2023, 4, 8),
      quantity: 10,
    },
  },
  {
    id: 5,
    name: "Sandalwood",
    price: 5,
    description: "Mild and homey, with hints of ginger.",
    leftInStock: 0,
    quantity: 1,
  },
];
