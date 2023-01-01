import { categories_type, product } from './carta.model';
export const products_data: product[] = [
  {
    name: 'pizza normal',
    category: categories_type.Pizzas,
    ingredientes:
      'tomate, tomate, tomate, tomate, tomate, tomate, tomate, tomate, tomate, tomate, tomate, ',
    precio: {
      local: { small: 1.1, medium: 2.2, family: 3.3 },
      domicilio: { small: 1.3, medium: 2.5 },
    },
  },
  {
    name: 'pizza sin local',
    category: categories_type.Pizzas,
    ingredientes:
      'tomate, tomate, tomate, tomate, tomate, tomate, tomate, tomate, tomate, tomate, tomate, ',
    precio: {
      domicilio: { small: 1.3, medium: 2.5, family: 3.12 },
    },
  },
  {
    name: 'pizza sin domicilio',
    category: categories_type.Pizzas,
    ingredientes:
      'tomate, tomate, tomate, tomate, tomate, tomate, tomate, tomate, tomate, tomate, tomate, ',
    precio: {
      local: { small: 1.3, medium: 2.5, family: 3.12 },
    },
  },
];
