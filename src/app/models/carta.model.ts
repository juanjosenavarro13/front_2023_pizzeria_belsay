export type category = {
  name: categories_type;
  img: string;
};

export type product = {
  name: string;
  category: categories_type;
  ingredientes: string;
  precio: {
    local?: precios;
    domicilio?: precios;
  };
};

type precios = {
  small?: number;
  medium?: number;
  family?: number;
};

export enum categories_type {
  Pizzas = 'pizzas',
  Chapatas = 'chapatas',
  Hamburguesas = 'hamburguesas',
  Paninis = 'paninis',
  Bocatas = 'bocatas',
  Hot_dogs = 'hot dogs',
  Sandwiches = 'sandwiches',
  Patatas = 'patatas',
  Nachos = 'nachos',
  Pollos = 'pollos',
  Ensaladas = 'ensaladas',
  Bebidas = 'bebidas',
}
