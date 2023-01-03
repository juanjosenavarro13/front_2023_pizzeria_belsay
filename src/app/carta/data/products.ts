import { categories_type, product } from '../../models/carta.model';
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
  {
    name: 'De la ria',
    category: categories_type.Pizzas,
    ingredientes: 'Mejillones, atún y gambas.',
    precio: {
      local: { small: 7.5, medium: 10.2, family: 12.5 },
      domicilio: { small: 8.25, medium: 11.2, family: 13.7 },
    },
  },
  {
    name: 'Napolitana',
    category: categories_type.Pizzas,
    ingredientes:
      'Tomate, orégano, mozzarella, jamón serrano, champiñón y beicon.',
    precio: {
      local: { small: 7.5, medium: 10.2, family: 12.5 },
      domicilio: { small: 8.25, medium: 11.2, family: 13.7 },
    },
  },
  {
    name: 'Romana',
    category: categories_type.Pizzas,
    ingredientes:
      'Tomate, orégano, mozzarella, aceitunas, alcachofa, champiñon y york.',
    precio: {
      local: { small: 8.5, medium: 11.2, family: 14.6 },
      domicilio: { small: 9.3, medium: 12.6, family: 15.2 },
    },
  },
  {
    name: 'Kebab',
    category: categories_type.Pizzas,
    ingredientes: 'Carne de pollo de kebab y salsa blanca.',
    precio: {
      local: { small: 8.5, medium: 11.2, family: 14.6 },
      domicilio: { small: 9.3, medium: 12.6, family: 15.2 },
    },
  },
  {
    name: 'Parmesana',
    category: categories_type.Pizzas,
    ingredientes: 'Tomate, orégano, mozzarella, mezcla mágica de quesos.',
    precio: {
      local: { small: 7.5, medium: 10.2, family: 12.5 },
      domicilio: { small: 8.25, medium: 11.2, family: 13.7 },
    },
  },
  {
    name: 'Parmesana',
    category: categories_type.Pizzas,
    ingredientes: 'Tomate, orégano, mozzarella, mezcla mágica de quesos.',
    precio: {
      local: { small: 7.5, medium: 10.2, family: 12.5 },
      domicilio: { small: 8.25, medium: 11.2, family: 13.7 },
    },
  },
  {
    name: 'Especialidad',
    category: categories_type.Pizzas,
    ingredientes: 'Tomate natural, roquefort, anchoa y ternera.',
    precio: {
      local: { small: 8.5, medium: 11.5, family: 14.6 },
      domicilio: { small: 9.3, medium: 12.6, family: 15.2 },
    },
  },
  {
    name: 'Piamonte',
    category: categories_type.Pizzas,
    ingredientes: 'Salsicha, beicon y salsa gaucha.',
    precio: {
      local: { small: 7.5, medium: 10.2, family: 13.7 },
      domicilio: { small: 8.25, medium: 11.2, family: 13.7 },
    },
  },
  {
    name: 'Genovesa',
    category: categories_type.Pizzas,
    ingredientes: 'Tomate, orégano, mozzarella, gamba, anchoa y champiñón.',
    precio: {
      local: { small: 7.5, medium: 10.2, family: 12.5 },
      domicilio: { small: 8.25, medium: 11.2, family: 13.7 },
    },
  },
  {
    name: 'Varonesa',
    category: categories_type.Pizzas,
    ingredientes: 'Champiñones, york, peperoni y extra de mozarella.',
    precio: {
      local: { small: 8.5, medium: 11.5, family: 14.6 },
      domicilio: { small: 9.3, medium: 12.6, family: 15.2 },
    },
  },
  {
    name: 'Córcegana',
    category: categories_type.Pizzas,
    ingredientes: 'Beicon, pollo y extra de queso.',
    precio: {
      local: { small: 7.5, medium: 10.2, family: 12.5 },
      domicilio: { small: 8.25, medium: 11.2, family: 13.7 },
    },
  },
  {
    name: 'Siciliana',
    category: categories_type.Pizzas,
    ingredientes: 'Tomate, orégano, mozzarella, champiñon, atún y york.',
    precio: {
      local: { small: 7.5, medium: 10.2, family: 12.5 },
      domicilio: { small: 8.25, medium: 11.2, family: 13.7 },
    },
  },
  {
    name: 'Alessandrina',
    category: categories_type.Pizzas,
    ingredientes: 'Peperoni, pimiento verde, cebolla y beicon.',
    precio: {
      local: { small: 8.5, medium: 11.5, family: 14.6 },
      domicilio: { small: 9.3, medium: 12.6, family: 15.2 },
    },
  },
  {
    name: 'Rosario',
    category: categories_type.Pizzas,
    ingredientes: 'Beicon, pollo, gambas y cebolla.',
    precio: {
      local: { small: 8.5, medium: 11.5, family: 14.6 },
      domicilio: { small: 9.3, medium: 12.6, family: 15.2 },
    },
  },
  // chapatas
  {
    name: 'Charra',
    category: categories_type.Chapatas,
    ingredientes: 'Chapata base y york.',
    precio: {
      local: { small: 3.9, medium: 6.5 },
    },
  },
  {
    name: 'Tijuana',
    category: categories_type.Chapatas,
    ingredientes: 'Chapata base, jamón serrano y atún.',
    precio: {
      local: { small: 4.7, medium: 7.7 },
    },
  },
  {
    name: 'Mexinaca',
    category: categories_type.Chapatas,
    ingredientes: 'Chapata base, beicon, atún y champiñón.',
    precio: {
      local: { small: 5.55, medium: 8.8 },
    },
  },
  {
    name: 'Ranchera',
    category: categories_type.Chapatas,
    ingredientes: 'Chapata base, champiñón y york.',
    precio: {
      local: { small: 4.7, medium: 7.7 },
    },
  },
  {
    name: 'Maya',
    category: categories_type.Chapatas,
    ingredientes: 'Chapata base, mezcla mágica de quesos.',
    precio: {
      local: { small: 5.55, medium: 8.8 },
    },
  },
  {
    name: 'Mariachi',
    category: categories_type.Chapatas,
    ingredientes: 'Chapata base, salmón, gambas y champiñón.',
    precio: {
      local: { small: 5.55, medium: 8.8 },
    },
  },
  // hamburguesas
  {
    name: 'Carolina',
    category: categories_type.Hamburguesas,
    ingredientes: 'Carne, lechuga y tomate.',
    precio: {
      local: { small: 1.9 },
    },
  },
  {
    name: 'Montana',
    category: categories_type.Hamburguesas,
    ingredientes: '2 carnes, lechuga, tomate, huevo, queso y beicon.',
    precio: {
      local: { small: 3.3 },
    },
  },
  {
    name: 'Tejana',
    category: categories_type.Hamburguesas,
    ingredientes: 'Carne, lechuga, tomate, cebolla, beicon y salsa barbacoa.',
    precio: {
      local: { small: 2.5 },
    },
  },
  {
    name: 'Florida',
    category: categories_type.Hamburguesas,
    ingredientes: 'Carne, queso, lechuga y tomate.',
    precio: {
      local: { small: 2.1 },
    },
  },
  {
    name: 'California',
    category: categories_type.Hamburguesas,
    ingredientes: 'Carne, lechuga, tomate, cebolla y maíz.',
    precio: {
      local: { small: 2.1 },
    },
  },
  {
    name: 'De buey',
    category: categories_type.Hamburguesas,
    ingredientes: 'Queso cheddar, beicon y cebolla.',
    precio: {
      local: { small: 5.5 },
    },
  },
  {
    name: 'Indiana',
    category: categories_type.Hamburguesas,
    ingredientes: 'Carne, lechuga, tomate y huevo.',
    precio: {
      local: { small: 2.4 },
    },
  },
  {
    name: 'Nevada',
    category: categories_type.Hamburguesas,
    ingredientes: 'Pollo, lechuga y mahonesa.',
    precio: {
      local: { small: 2.9 },
    },
  },
  {
    name: 'Crunchy',
    category: categories_type.Hamburguesas,
    ingredientes:
      'Carne de pollo rebozado crujiento, lechuga, tomate, mayonesa y barbacoa.',
    precio: {
      local: { small: 1.95 },
    },
  },
  {
    name: 'Arizona',
    category: categories_type.Hamburguesas,
    ingredientes: 'Carne, lechuga, tomate, queso, beicon y huevo.',
    precio: {
      local: { small: 2.9 },
    },
  },
  // paninis
  {
    name: 'Atlántico',
    category: categories_type.Paninis,
    ingredientes: 'Panini base y jamón york.',
    precio: {
      local: { small: 2.3 },
    },
  },
  {
    name: 'Índico',
    category: categories_type.Paninis,
    ingredientes: 'Panini base, jamón serrano, champiñón y beicon.',
    precio: {
      local: { small: 3.25 },
    },
  },
  {
    name: 'Cantábrico',
    category: categories_type.Paninis,
    ingredientes: 'Panini base, gambas, anchoas y champiñón.',
    precio: {
      local: { small: 3.25 },
    },
  },
  {
    name: 'Pacífico',
    category: categories_type.Paninis,
    ingredientes: 'Panini base, alcachofa, champiñón y york.',
    precio: {
      local: { small: 3.25 },
    },
  },
  {
    name: 'Báltico',
    category: categories_type.Paninis,
    ingredientes: 'Panini base, salami, salchichas y york.',
    precio: {
      local: { small: 3.25 },
    },
  },
  {
    name: 'Maya',
    category: categories_type.Paninis,
    ingredientes: 'Panini base y mágica mezcla de quesos.',
    precio: {
      local: { small: 3.25 },
    },
  },
  {
    name: 'Mediterráneo',
    category: categories_type.Paninis,
    ingredientes: 'Panini base, atún y champiñón.',
    precio: {
      local: { small: 3.25 },
    },
  },
];
