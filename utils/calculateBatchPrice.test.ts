import { Batch, UnitOfMeasurement } from "../data";
import { DateTime } from "luxon";
import calculateBatchPrice from "./calculateBatchPrice";

describe("given a batch with no ingredients", () => {
  it("returns 0", () => {
    const batch: Batch = {
      ingredients: [],
      id: 0,
      pourDate: DateTime.now(),
    };

    expect(calculateBatchPrice(batch)).toEqual(0);
  });
});

it("returns the correct price of one ingredient", () => {
  const batch: Batch = {
    ingredients: [
      {
        name: "Test Ingredient",
        amount: 21,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
        product: {
          id: 0,
          name: "Test Product",
          priceInCents: 200,
          netWeight: 100,
          netWeightMeasurement: UnitOfMeasurement.GRAMS,
        },
      },
    ],
    id: 0,
    pourDate: DateTime.now(),
  };

  expect(calculateBatchPrice(batch)).toEqual(42);
});

it("returns the correct price of multiple ingredients", () => {
  const batch: Batch = {
    ingredients: [
      {
        name: "42 cents (2 cents per gram * 21 grams)",
        amount: 21,
        unitOfMeasurement: UnitOfMeasurement.GRAMS,
        product: {
          id: 0,
          name: "Test Product",
          priceInCents: 200,
          netWeight: 100,
          netWeightMeasurement: UnitOfMeasurement.GRAMS,
        },
      },
      {
        name: "1337 cents (2 cents per mL * 21 mL)",
        amount: 7,
        unitOfMeasurement: UnitOfMeasurement.MILLILITERS,
        product: {
          id: 0,
          name: "Test Product",
          priceInCents: 382,
          netWeight: 2,
          netWeightMeasurement: UnitOfMeasurement.MILLILITERS,
        },
      },
    ],
    id: 0,
    pourDate: DateTime.now(),
  };

  expect(calculateBatchPrice(batch)).toEqual(1379);
});
