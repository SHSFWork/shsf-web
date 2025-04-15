import { type Product, allProducts } from "content-collections";
import { compareDesc } from "date-fns";

export const createPrevAndNext = (product: Product) => {
  const products = allProducts.sort((a, b) =>
    compareDesc(new Date(a.createdAt), new Date(b.createdAt))
  );
  const index = products.findIndex((p) => p === product);
  const next = index > 0 ? products[index - 1] : null;
  const prev = index + 1 < products.length ? products[index + 1] : null;
  return {
    next,
    prev,
  };
};
