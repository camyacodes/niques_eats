const db = require('./connection');
const { User, Product, Category } = require('../models');




db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Main Dishes' },
    { name: 'Sides' },
    { name: 'Desserts' },
    { name: 'Main Dishes - Dinner'},
    { name: 'Sides - Dinner'},
    { name: 'Dessert - Dinner'}
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    // {
    //   name: 'Salmon Croquettes',
    //   description: 'Biscuit cheesecake jelly beans muffin dragée caramels macaroon. Cotton candy sugar plum I love carrot cake oat cake. Macaroon sugar plum cookie jelly I love I love bear claw sesame snaps.',
    //   image: 'salmon_croquette.jpg',
    //   category: categories[0]._id,
    //   price: 17,
    //   quantity: 16
    // },
    {
      name: 'Shrimp and Grits',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'shrimp-n-grits.jpg',
      category: categories[0]._id,
      price:18,
      quantity: 10
    },
      // {
      //   name: 'Chicken and Waffles',
      //   description:
      //     'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      //   image: 'chicken-waffle.jpg',
      //   category: categories[0]._id,
      //   price: 15,
      //   quantity: 45
      // },
      {
        name: 'Chocolate Brownie',
        description:
          'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        image: 'chocolate-brownie.jpg',
        category: categories[2]._id,
        price: 7,
        quantity: 10
      },
      {
        name: 'Salmon Meal',
        description:
          'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        image: 'salmon_meal.jpg',
        category: categories[3]._id,
        price:18,
        quantity: 10
      },
   
      {
        name: 'Stir fry veggies',
        description:
          'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        image: 'green-collar.jpg',
        category: categories[4]._id,
        price:5,
        quantity: 10
      },
      {
        name: 'Mac n Cheese',
        description: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        image: 'mac-n-cheese.png',
        category: categories[4]._id,
        price:4,
        quantity: 10
      },
      {
        name: 'Red Velvet Cake',
        description: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        image: 'Red-Velvet.png',
        category: categories[5]._id,
        price:4,
        quantity: 10
      },
      
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Test1',
    lastName: 'Test1',
    email: 'test1@test.com',
    password: 'test1',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Test2',
    lastName: 'Test2',
    email: 'test2@test.com',
    password: 'test2'
  });

  console.log('users seeded');

  process.exit();
});
