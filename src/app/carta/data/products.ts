import { categories_type, product } from '../../models/carta.model';
/**
 * productos
 */
const products: product[] = [
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
      domicilio: { small: 4.6, medium: 8.25 },
    },
  },
  {
    name: 'Tijuana',
    category: categories_type.Chapatas,
    ingredientes: 'Chapata base, jamón serrano y atún.',
    precio: {
      local: { small: 4.7, medium: 7.7 },
      domicilio: { small: 5.3, medium: 9.4 },
    },
  },
  {
    name: 'Mexinaca',
    category: categories_type.Chapatas,
    ingredientes: 'Chapata base, beicon, atún y champiñón.',
    precio: {
      local: { small: 5.55, medium: 8.8 },
      domicilio: { small: 6.1, medium: 10.4 },
    },
  },
  {
    name: 'Ranchera',
    category: categories_type.Chapatas,
    ingredientes: 'Chapata base, champiñón y york.',
    precio: {
      local: { small: 4.7, medium: 7.7 },
      domicilio: { small: 5.3, medium: 9.4 },
    },
  },
  {
    name: 'Maya',
    category: categories_type.Chapatas,
    ingredientes: 'Chapata base, mezcla mágica de quesos.',
    precio: {
      local: { small: 5.55, medium: 8.8 },
      domicilio: { small: 6.1, medium: 10.4 },
    },
  },
  {
    name: 'Mariachi',
    category: categories_type.Chapatas,
    ingredientes: 'Chapata base, salmón, gambas y champiñón.',
    precio: {
      local: { small: 5.55, medium: 8.8 },
      domicilio: { small: 6.1, medium: 10.4 },
    },
  },
  // hamburguesas
  {
    name: 'Carolina',
    category: categories_type.Hamburguesas,
    ingredientes: 'Carne, lechuga y tomate.',
    precio: {
      local: { small: 1.9 },
      domicilio: { small: 2.1 },
    },
  },
  {
    name: 'Montana',
    category: categories_type.Hamburguesas,
    ingredientes: '2 carnes, lechuga, tomate, huevo, queso y beicon.',
    precio: {
      local: { small: 3.3 },
      domicilio: { small: 3.6 },
    },
  },
  {
    name: 'Tejana',
    category: categories_type.Hamburguesas,
    ingredientes: 'Carne, lechuga, tomate, cebolla, beicon y salsa barbacoa.',
    precio: {
      local: { small: 2.5 },
      domicilio: { small: 2.75 },
    },
  },
  {
    name: 'Florida',
    category: categories_type.Hamburguesas,
    ingredientes: 'Carne, queso, lechuga y tomate.',
    precio: {
      local: { small: 2.1 },
      domicilio: { small: 2.3 },
    },
  },
  {
    name: 'California',
    category: categories_type.Hamburguesas,
    ingredientes: 'Carne, lechuga, tomate, cebolla y maíz.',
    precio: {
      local: { small: 2.1 },
      domicilio: { small: 2.55 },
    },
  },
  {
    name: 'De buey',
    category: categories_type.Hamburguesas,
    ingredientes: 'Queso cheddar, beicon y cebolla.',
    precio: {
      local: { small: 5.5 },
      domicilio: { small: 6.6 },
    },
  },
  {
    name: 'Indiana',
    category: categories_type.Hamburguesas,
    ingredientes: 'Carne, lechuga, tomate y huevo.',
    precio: {
      local: { small: 2.4 },
      domicilio: { small: 2.6 },
    },
  },
  {
    name: 'Nevada',
    category: categories_type.Hamburguesas,
    ingredientes: 'Pollo, lechuga y mahonesa.',
    precio: {
      local: { small: 2.9 },
      domicilio: { small: 3.2 },
    },
  },
  {
    name: 'Crunchy',
    category: categories_type.Hamburguesas,
    ingredientes:
      'Carne de pollo rebozado crujiento, lechuga, tomate, mayonesa y barbacoa.',
    precio: {
      local: { small: 1.95 },
      domicilio: { small: 3.3 },
    },
  },
  {
    name: 'Arizona',
    category: categories_type.Hamburguesas,
    ingredientes: 'Carne, lechuga, tomate, queso, beicon y huevo.',
    precio: {
      local: { small: 2.9 },
      domicilio: { small: 3.1 },
    },
  },
  // paninis
  {
    name: 'Atlántico',
    category: categories_type.Paninis,
    ingredientes: 'Panini base y jamón york.',
    precio: {
      local: { small: 2.3 },
      domicilio: { small: 2.6 },
    },
  },
  {
    name: 'Índico',
    category: categories_type.Paninis,
    ingredientes: 'Panini base, jamón serrano, champiñón y beicon.',
    precio: {
      local: { small: 3.25 },
      domicilio: { small: 3.8 },
    },
  },
  {
    name: 'Cantábrico',
    category: categories_type.Paninis,
    ingredientes: 'Panini base, gambas, anchoas y champiñón.',
    precio: {
      local: { small: 3.25 },
      domicilio: { small: 3.8 },
    },
  },
  {
    name: 'Pacífico',
    category: categories_type.Paninis,
    ingredientes: 'Panini base, alcachofa, champiñón y york.',
    precio: {
      local: { small: 3.25 },
      domicilio: { small: 3.8 },
    },
  },
  {
    name: 'Báltico',
    category: categories_type.Paninis,
    ingredientes: 'Panini base, salami, salchichas y york.',
    precio: {
      local: { small: 3.25 },
      domicilio: { small: 3.8 },
    },
  },
  {
    name: 'Maya',
    category: categories_type.Paninis,
    ingredientes: 'Panini base y mágica mezcla de quesos.',
    precio: {
      local: { small: 3.25 },
      domicilio: { small: 3.8 },
    },
  },
  {
    name: 'Mediterráneo',
    category: categories_type.Paninis,
    ingredientes: 'Panini base, atún y champiñón.',
    precio: {
      local: { small: 3.25 },
      domicilio: { small: 3.8 },
    },
  },
  // bocatas
  {
    name: 'Catalán',
    category: categories_type.Bocatas,
    ingredientes: 'Jamón serrano, tomate y aceite.',
    precio: {
      local: { small: 2.9 },
      domicilio: { small: 3.1 },
    },
  },
  {
    name: 'Manchego',
    category: categories_type.Bocatas,
    ingredientes: 'Anchoa, queso y pimiento.',
    precio: {
      local: { small: 3.45 },
      domicilio: { small: 3.75 },
    },
  },
  {
    name: 'Vasco',
    category: categories_type.Bocatas,
    ingredientes: 'Lomo, beicon, salsa barbacoa y tomate natural.',
    precio: {
      local: { small: 3.45 },
      domicilio: { small: 3.8 },
    },
  },
  {
    name: 'Andaluz',
    category: categories_type.Bocatas,
    ingredientes: 'Tortilla o lomo.',
    precio: {
      local: { small: 2.9 },
      domicilio: { small: 3.1 },
    },
  },
  {
    name: 'Zamorano',
    category: categories_type.Bocatas,
    ingredientes: 'Lomo mechado, cebolla frita y salsa al whisky.',
    precio: {
      local: { small: 3.45 },
      domicilio: { small: 3.75 },
    },
  },
  {
    name: 'Castellano',
    category: categories_type.Bocatas,
    ingredientes: 'Lomo, beicon y cebolla.',
    precio: {
      local: { small: 3.45 },
      domicilio: { small: 3.8 },
    },
  },
  {
    name: 'Aragonés',
    category: categories_type.Bocatas,
    ingredientes: 'Jamón york y queso.',
    precio: {
      local: { small: 2.9 },
      domicilio: { small: 3.1 },
    },
  },
  {
    name: 'Gallego',
    category: categories_type.Bocatas,
    ingredientes: 'Atún, huevo, pimiento y mahonesa.',
    precio: {
      local: { small: 3.45 },
      domicilio: { small: 3.75 },
    },
  },
  {
    name: 'Serranito',
    category: categories_type.Bocatas,
    ingredientes: 'Lomo, jamón serrano y pimiento.',
    precio: {
      local: { small: 3.45 },
      domicilio: { small: 3.8 },
    },
  },
  {
    name: 'Tortilla de patatas',
    category: categories_type.Bocatas,
    ingredientes: 'Tortilla de patatas con beicon o pimiento morrón.',
    precio: {
      local: { small: 3.3 },
      domicilio: { small: 3.45 },
    },
  },
  {
    name: 'Levantino',
    category: categories_type.Bocatas,
    ingredientes: 'Pechuga de pollo, lechuga, tomate y mahonesa.',
    precio: {
      local: { small: 3.5 },
      domicilio: { small: 3.8 },
    },
  },
  {
    name: 'Caribeño',
    category: categories_type.Bocatas,
    ingredientes: 'Palometa ahumada, roquefort o queso fresco.',
    precio: {
      local: { small: 3.75 },
      domicilio: { small: 4 },
    },
  },
  {
    name: 'Asturiano',
    category: categories_type.Bocatas,
    ingredientes: 'Beicon y queso',
    precio: {
      local: { small: 3.2 },
      domicilio: { small: 3.3 },
    },
  },
  {
    name: 'Murciano',
    category: categories_type.Bocatas,
    ingredientes: 'Lechuga, tomate, huevo, mahonesa, espárrago y queso fresco.',
    precio: {
      local: { small: 3.5 },
      domicilio: { small: 3.8 },
    },
  },
  {
    name: 'Extremeño',
    category: categories_type.Bocatas,
    ingredientes: 'Beicon, escalope de pollo y queso fundido.',
    precio: {
      local: { small: 3.75 },
      domicilio: { small: 4 },
    },
  },
  {
    name: 'Riojano',
    category: categories_type.Bocatas,
    ingredientes: 'Lomo y queso fundido',
    precio: {
      local: { small: 3.3 },
      domicilio: { small: 3.45 },
    },
  },
  {
    name: 'Frankfurt',
    category: categories_type.Bocatas,
    ingredientes: 'Salsichas, lechuga, tomate y mahonesa.',
    precio: {
      local: { small: 3.45 },
      domicilio: { small: 3.8 },
    },
  },
  {
    name: 'Segoviano',
    category: categories_type.Bocatas,
    ingredientes: 'Lomo, jamón y salsa verde.',
    precio: {
      local: { small: 3.45 },
      domicilio: { small: 3.75 },
    },
  },
  {
    name: 'Fried burguer',
    category: categories_type.Bocatas,
    ingredientes: 'Hamburguesa frita con salsa barbacoa y cebolla',
    precio: {
      local: { small: 3.3 },
      domicilio: { small: 3.45 },
    },
  },
  {
    name: 'Marinero',
    category: categories_type.Bocatas,
    ingredientes: 'Lechuga, tomate, atún, rabanitos de mar y mahonesa.',
    precio: {
      local: { small: 3.45 },
      domicilio: { small: 3.8 },
    },
  },
  {
    name: 'Sanluqueño',
    category: categories_type.Bocatas,
    ingredientes: 'Gambas a la plancha en salsa ali-oli.',
    precio: {
      local: { small: 3.75 },
      domicilio: { small: 4 },
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
  {
    name: 'Perrito picantón',
    category: categories_type.Hot_dogs,
    ingredientes: 'Salsicha, aros de cebolla y salsa brava.',
    precio: {
      local: { small: 2.3 },
      domicilio: { small: 2.6 },
    },
  },
  {
    name: 'Perrito sabroson',
    category: categories_type.Hot_dogs,
    ingredientes: 'Salsicha, beicon, cebolla y salsa barbacoa.',
    precio: {
      local: { small: 2.5 },
      domicilio: { small: 2.75 },
    },
  },
  // sandwiches
  {
    name: 'Inglés',
    category: categories_type.Sandwiches,
    ingredientes: 'Jamón york y queso.',
    precio: {
      local: { small: 1.9 },
      domicilio: { small: 2.15 },
    },
  },
  {
    name: 'Irlandés',
    category: categories_type.Sandwiches,
    ingredientes: 'Lechuga, tomate, espárrago, huevo y mahonesa.',
    precio: {
      local: { small: 2.2 },
      domicilio: { small: 2.85 },
    },
  },
  {
    name: 'Croque',
    category: categories_type.Sandwiches,
    ingredientes: 'Jamón york, bechamel y emmental.',
    precio: {
      local: { small: 3.2 },
      domicilio: { small: 3.35 },
    },
  },
  {
    name: 'Holandés',
    category: categories_type.Sandwiches,
    ingredientes: 'Jamón york, queso, huevo y beicon.',
    precio: {
      local: { small: 2.45 },
      domicilio: { small: 2.75 },
    },
  },
  {
    name: 'Español',
    category: categories_type.Sandwiches,
    ingredientes: 'Jamón serrano y tortilla.',
    precio: {
      local: { small: 2.4 },
      domicilio: { small: 2.65 },
    },
  },
  {
    name: 'Francés',
    category: categories_type.Sandwiches,
    ingredientes: 'Jamón york, queso y tortilla.',
    precio: {
      local: { small: 2.45 },
      domicilio: { small: 2.75 },
    },
  },
  {
    name: 'Italiano',
    category: categories_type.Sandwiches,
    ingredientes: 'Lechuga, tomate, queso fresco y emmental.',
    precio: {
      local: { small: 2.95 },
      domicilio: { small: 3.1 },
    },
  },
  {
    name: 'Noruego',
    category: categories_type.Sandwiches,
    ingredientes: 'Atún, pimiento morrón y huevo duro.',
    precio: {
      local: { small: 2.95 },
      domicilio: { small: 3.1 },
    },
  },
  {
    name: 'Alemán',
    category: categories_type.Sandwiches,
    ingredientes: 'Lechuga, tomate, atún, rabanitos de mar y salsa rosa.',
    precio: {
      local: { small: 2.95 },
      domicilio: { small: 3.1 },
    },
  },
  {
    name: 'Especial belsay',
    category: categories_type.Sandwiches,
    ingredientes:
      'Lechuga, tomate, atún, mahonesa, york, queso, beicon y huevo (dos pisos).',
    precio: {
      local: { small: 3.8 },
      domicilio: { small: 4.1 },
    },
  },
  {
    name: 'Portugués',
    category: categories_type.Sandwiches,
    ingredientes: 'Tomate, beicon y tiras de escalope de pollo.',
    precio: {
      local: { small: 3.2 },
      domicilio: { small: 3.4 },
    },
  },
  {
    name: 'Belga',
    category: categories_type.Sandwiches,
    ingredientes: 'Palometa ahumada y salsa roquefort.',
    precio: {
      local: { small: 3.25 },
      domicilio: { small: 3.4 },
    },
  },
  {
    name: 'Sueco',
    category: categories_type.Sandwiches,
    ingredientes: 'Lechuga, tomate, gambas a la plancha y salsa rosa.',
    precio: {
      local: { small: 3.15 },
      domicilio: { small: 3.3 },
    },
  },
  {
    name: 'Polaco',
    category: categories_type.Sandwiches,
    ingredientes: 'Lomo a la plancha y salsa roquefort.',
    precio: {
      local: { small: 3.1 },
      domicilio: { small: 3.25 },
    },
  },
  {
    name: 'Húngaro',
    category: categories_type.Sandwiches,
    ingredientes: 'Queso fresco, anchoas y pimiento morrón.',
    precio: {
      local: { small: 3.05 },
      domicilio: { small: 3.2 },
    },
  },
  {
    name: 'Austríaco',
    category: categories_type.Sandwiches,
    ingredientes:
      'Lechuga, tomate, atún, huevo duro, aros de cebolla fresca y un legero toque de aceite de oliva',
    precio: {
      local: { small: 2.7 },
      domicilio: { small: 2.9 },
    },
  },
  // patatas
  {
    name: 'Golden',
    category: categories_type.Patatas,
    ingredientes: 'Patatas Golden',
    precio: {
      local: { small: 2.2 },
      domicilio: { small: 2.3 },
    },
  },
  {
    name: 'Normales',
    category: categories_type.Patatas,
    ingredientes: 'Patatas normales.',
    precio: {
      local: { small: 1.3, medium: 1.5 },
      domicilio: { small: 1.5, medium: 1.8 },
    },
  },
  {
    name: 'Con queso',
    category: categories_type.Patatas,
    ingredientes: 'Patatas normales con queso.',
    precio: {
      local: { small: 2.75 },
    },
  },
  {
    name: 'Con queso, beicon y ternera',
    category: categories_type.Patatas,
    ingredientes: 'Patatas normales con queso, beicon y ternera.',
    precio: {
      local: { small: 3.6 },
    },
  },
  // nachos
  {
    name: 'Con queso',
    category: categories_type.Nachos,
    ingredientes: 'Nachos con queso.',
    precio: {
      local: { small: 2.75 },
    },
  },
  {
    name: 'Con queso, ternera y beicon',
    category: categories_type.Nachos,
    ingredientes: 'Nachos con queso.',
    precio: {
      local: { small: 3.85 },
    },
  },
  {
    name: 'Con queso cheddar y gouda',
    category: categories_type.Nachos,
    ingredientes: 'Nachos con queso cheddar y gouda.',
    precio: {
      local: { small: 4.1 },
    },
  },
  // pollos
  {
    name: 'Nuggets 6 Unidades',
    category: categories_type.Pollos,
    ingredientes: 'Nuggets con salsa barbacoa',
    precio: {
      local: { small: 2.95 },
    },
  },
  {
    name: 'Alitas 6 Unidades',
    category: categories_type.Pollos,
    ingredientes: 'Alitas con salsa barbacoa o brava.',
    precio: {
      local: { small: 3.6 },
    },
  },
  // postres
  {
    name: 'Helados',
    category: categories_type.Postres,
    ingredientes: 'CONSULTAR',
    precio: {
      local: { small: 1 },
      domicilio: { small: 1 },
    },
  },
  {
    name: 'Pasteleria',
    category: categories_type.Postres,
    ingredientes: 'CONSULTAR',
    precio: {
      local: { small: 1 },
      domicilio: { small: 1 },
    },
  },
  // ensaladas
  {
    name: 'De la huerta',
    category: categories_type.Ensaladas,
    ingredientes: 'Lechuga, tomate y cebolla.',
    precio: {
      local: { small: 2.65 },
      domicilio: { small: 2.9 },
    },
  },
  {
    name: 'Mixta',
    category: categories_type.Ensaladas,
    ingredientes:
      'Lechuga, tomate, cebolla, huevo, atún, aceitunas y espárragos.',
    precio: {
      local: { small: 3.5 },
      domicilio: { small: 3.8 },
    },
  },
  {
    name: 'Parisina',
    category: categories_type.Ensaladas,
    ingredientes:
      'Lechuga, tomate, pollo, york, queso, zanahoria, huevo y salsa rosa o roquefort.',
    precio: {
      local: { small: 3.65 },
      domicilio: { small: 4.05 },
    },
  },
  {
    name: 'Niçoise',
    category: categories_type.Ensaladas,
    ingredientes:
      'Lechuga, tomate, atún, york, queso, espárrago, palmitos y salsa rosa o roquefort.',
    precio: {
      local: { small: 3.65 },
      domicilio: { small: 4.05 },
    },
  },
  {
    name: 'Del mar',
    category: categories_type.Ensaladas,
    ingredientes: 'Lechuga, gambas, rabanitos de mar y salsa rosa.',
    precio: {
      local: { small: 3.65 },
      domicilio: { small: 4.05 },
    },
  },
  {
    name: 'Tropical',
    category: categories_type.Ensaladas,
    ingredientes:
      'Lechuga, tomate, gambas, brotes de soja, mazorquitas, piña, delicias de mar y salsa rosa.',
    precio: {
      local: { small: 3.65 },
      domicilio: { small: 4.06 },
    },
  },
  {
    name: 'De pimientos',
    category: categories_type.Ensaladas,
    ingredientes:
      'Pimientos rojos, rabanitos de mar, cebollita, mejillones, gambas y aceitunas verdes.',
    precio: {
      local: { small: 3.95 },
      domicilio: { small: 4.1 },
    },
  },
  {
    name: 'Italiana',
    category: categories_type.Ensaladas,
    ingredientes: 'Pasta, jamón cocido, tomate, aceitunas, tortilla y queso.',
    precio: {
      local: { small: 3.95 },
      domicilio: { small: 4.1 },
    },
  },
  {
    name: 'Burguesa',
    category: categories_type.Ensaladas,
    ingredientes:
      'Lechuga, piña, queso fresco, jamón york y un suave toque de mahonesa.',
    precio: {
      local: { small: 3.95 },
      domicilio: { small: 4.1 },
    },
  },

  {
    name: 'Cesar',
    category: categories_type.Ensaladas,
    ingredientes: 'Lechuga, york, pollo y picatostes con salsa cesar.',
    precio: {
      local: { small: 3.95 },
      domicilio: { small: 4.1 },
    },
  },
  // refrescos
  {
    name: 'Lata cocacola',
    category: categories_type.Bebidas,
    ingredientes: 'Lata refresco',
    precio: {
      local: { small: 1.3 },
      domicilio: { small: 1.45 },
    },
  },
  {
    name: 'Lata fanta',
    category: categories_type.Bebidas,
    ingredientes: 'Lata refresco',
    precio: {
      local: { small: 1.3 },
      domicilio: { small: 1.45 },
    },
  },
  {
    name: 'Zumo, Batidos',
    category: categories_type.Bebidas,
    ingredientes: 'Zumo, Batidos',
    precio: {
      local: { small: 1.3 },
      domicilio: { small: 1.4 },
    },
  },
  {
    name: 'Agua mineral',
    category: categories_type.Bebidas,
    ingredientes: 'Agua mineral',
    precio: {
      local: { small: 1 },
      domicilio: { small: 1.1 },
    },
  },
  {
    name: 'Cerveza',
    category: categories_type.Bebidas,
    ingredientes: 'Cerveza',
    precio: {
      local: { small: 1.3 },
      domicilio: { small: 1.45 },
    },
  },
  {
    name: 'Tinto verano',
    category: categories_type.Bebidas,
    ingredientes: 'Tinto verano.',
    precio: {
      local: { small: 1.2 },
      domicilio: { small: 1.3 },
    },
  },
];

function compare(a: product, b: product) {
  if (a.category < b.category) {
    return -1;
  }
  if (a.category > b.category) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
}

export const products_data = products.sort(compare);
