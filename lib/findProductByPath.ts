import { allProducts, Product } from "@shsfwork/.content-collections/generated";

export default function findProductByPath(path: string): Product {
  const product = allProducts.find((product) => product._meta.path === path);
  if (!product) {
    throw new Error(`Product with path "${path}" not found.`);
  }

  return product;
}
