import { Batch, Ingredient, Product } from "data";

const isProduct = (p: Product | undefined): p is Product => {
  return p !== undefined;
};

const calculateBatchPrice = (batch: Batch): number => {
  const ingredients = batch.ingredients;
  const products = ingredients
    .map((i: Ingredient) => i.product)
    .filter(isProduct);

  const pricesPerWeight = products.map(
    (p: Product) => p.priceInCents / p.netWeight
  );

  const pricePerProduct = pricesPerWeight.map(
    (p: number, i: number) => p * ingredients[i].amount
  );

  return pricePerProduct.reduce((a: number, b: number) => a + b, 0);
};

export default calculateBatchPrice;
