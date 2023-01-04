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
  // bocatas
  {
    name: 'Catalán',
    category: categories_type.Bocatas,
    ingredientes: 'Jamón serrano, tomate y aceite.',
    precio: {
      local: { small: 3.25 },
    },
  },
  {
    name: 'Manchego',
    category: categories_type.Bocatas,
    ingredientes: 'Anchoa, queso y pimiento.',
    precio: {
      local: { small: 3.45 },
    },
  },
  {
    name: 'Vasco',
    category: categories_type.Bocatas,
    ingredientes: 'Lomo, beicon, salsa barbacoa y tomate natural.',
    precio: {
      local: { small: 3.45 },
    },
  },
  {
    name: 'Andaluz de tortilla',
    category: categories_type.Bocatas,
    ingredientes: 'Tortilla o lomo.',
    precio: {
      local: { small: 2.9 },
    },
  },
  {
    name: 'Zamorano',
    category: categories_type.Bocatas,
    ingredientes: 'Lomo mechado, cebolla frita y salsa al whisky.',
    precio: {
      local: { small: 3.45 },
    },
  },
  {
    name: 'Castellano',
    category: categories_type.Bocatas,
    ingredientes: 'Lomo, beicon y cebolla.',
    precio: {
      local: { small: 3.45 },
    },
  },
  {
    name: 'Aragonés',
    category: categories_type.Bocatas,
    ingredientes: 'Jamón york y queso.',
    precio: {
      local: { small: 2.9 },
    },
  },
  {
    name: 'Gallego',
    category: categories_type.Bocatas,
    ingredientes: 'Atún, huevo, pimiento y mahonesa.',
    precio: {
      local: { small: 3.45 },
    },
  },
  {
    name: 'Serranito',
    category: categories_type.Bocatas,
    ingredientes: 'Lomo, jamón serrano y pimiento.',
    precio: {
      local: { small: 3.45 },
    },
  },
  {
    name: 'Tortilla de patatas',
    category: categories_type.Bocatas,
    ingredientes: 'Tortilla de patatas con beicon o pimiento morrón.',
    precio: {
      local: { small: 3.3 },
    },
  },
  {
    name: 'Levantino',
    category: categories_type.Bocatas,
    ingredientes: 'Pechuga de pollo, lechuga, tomate y mahonesa.',
    precio: {
      local: { small: 3.5 },
    },
  },
  {
    name: 'Caribeño',
    category: categories_type.Bocatas,
    ingredientes: 'Palometa ahumada, roquefort o queso fresco.',
    precio: {
      local: { small: 3.75 },
    },
  },
  {
    name: 'Asturiano',
    category: categories_type.Bocatas,
    ingredientes: 'Beicon y queso',
    precio: {
      local: { small: 3.2 },
    },
  },
  {
    name: 'Murciano',
    category: categories_type.Bocatas,
    ingredientes: 'Lechuga, tomate, huevo, mahonesa, espárrago y queso fresco.',
    precio: {
      local: { small: 3.5 },
    },
  },
  {
    name: 'Extremeño',
    category: categories_type.Bocatas,
    ingredientes: 'Beicon, escalope de pollo y queso fundido.',
    precio: {
      local: { small: 3.75 },
    },
  },
  {
    name: 'Riojano',
    category: categories_type.Bocatas,
    ingredientes: 'Lomo y queso fundido',
    precio: {
      local: { small: 3.3 },
    },
  },
  {
    name: 'Frankfurt',
    category: categories_type.Bocatas,
    ingredientes: 'Salsichas, lechuga, tomate y mahonesa.',
    precio: {
      local: { small: 3.45 },
    },
  },
  {
    name: 'Segoviano',
    category: categories_type.Bocatas,
    ingredientes: 'Lomo, jamón y salsa verde.',
    precio: {
      local: { small: 3.45 },
    },
  },
  {
    name: 'Fried burguer',
    category: categories_type.Bocatas,
    ingredientes: 'Hamburguesa frita con salsa barbacoa y cebolla',
    precio: {
      local: { small: 3.3 },
    },
  },
  {
    name: 'Marinero',
    category: categories_type.Bocatas,
    ingredientes: 'Lechuga, tomate, atún, rabanitos de mar y mahonesa.',
    precio: {
      local: { small: 3.45 },
    },
  },
  {
    name: 'Sanluqueño',
    category: categories_type.Bocatas,
    ingredientes: 'Gambas a la plancha en salsa ali-oli.',
    precio: {
      local: { small: 3.75 },
    },
  },
  // hot dogs
  {
    name: 'Perrito caliente',
    category: categories_type.Hot_dogs,
    ingredientes: 'Pan y salsicha',
    precio: {
      local: { small: 1.9 },
      domicilio: { small: 2.1 },
    },
  },
  {
    name: 'Perrito bel',
    category: categories_type.Hot_dogs,
    ingredientes: 'Queso, salsicha y beicon.',
    precio: {
      local: { small: 2.3 },
      domicilio: { small: 2.5 },
    },
  },
  {
    name: 'Perrito say',
    category: categories_type.Hot_dogs,
    ingredientes: 'Tortilla francesa y salchica.',
    precio: {
      local: { small: 2.2 },
      domicilio: { small: 2.4 },
    },
  },
  {
    name: 'Perrito completo',
    category: categories_type.Hot_dogs,
    ingredientes: 'Queso, salsicha, beicon y tortilla.',
    precio: {
      local: { small: 2.6 },
      domicilio: { small: 2.75 },
    },
  },
  {
    name: 'Especial hot dog',
    category: categories_type.Hot_dogs,
    ingredientes: 'Salsicha, aros de cebolla, tomate y tortilla.',
    precio: {
      local: { small: 2.8 },
      domicilio: { small: 3.1 },
    },
  },
];
