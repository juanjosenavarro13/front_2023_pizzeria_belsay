import { categories_type, product } from './carta.model';
/**
 * productos
 */
export const products_data: product[] = [
  // pizzas
  {
    name: 'Milanesa',
    category: categories_type.Pizzas,
    ingredientes: 'Tomate, orégano, mozzarella y york.',
    precio: {
      local: { small: 5.5, medium: 7.6, family: 9.2 },
      domicilio: { small: 6.3, medium: 8.3, family: 10.2 },
    },
  },
  {
    name: 'Americana',
    category: categories_type.Pizzas,
    ingredientes: 'Salsa barbacoa, ternera, beicon y cebolla.',
    precio: {
      local: { small: 7.5, medium: 10.2, family: 12.5 },
      domicilio: { small: 8.25, medium: 11.2, family: 13.7 },
    },
  },
  {
    name: 'Hawaiana',
    category: categories_type.Pizzas,
    ingredientes: 'Tomate, orégano, extra de mozzarella, piña y jamón.',
    precio: {
      local: { small: 7.5, medium: 10.2, family: 12.5 },
      domicilio: { small: 8.25, medium: 11.2, family: 13.7 },
    },
  },
  {
    name: 'Veneciana',
    category: categories_type.Pizzas,
    ingredientes: 'Tomate, orégano mozzarella, salami, salchichas y york.',
    precio: {
      local: { small: 7.5, medium: 10.2, family: 12.5 },
      domicilio: { small: 8.25, medium: 11.2, family: 13.7 },
    },
  },
  {
    name: 'Toscana',
    category: categories_type.Pizzas,
    ingredientes: 'Jamón, Atún y gambas.',
    precio: {
      local: { small: 7.5, medium: 10.2, family: 12.5 },
      domicilio: { small: 8.25, medium: 11.2, family: 13.7 },
    },
  },
];
