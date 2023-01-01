export type cestaProductModel = {
  name: string;
  tam: string;
  price: number;
};

export type cesta = {
  products: cestaProductModel[];
  local: boolean | null;
} | null;
