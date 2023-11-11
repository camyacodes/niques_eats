require('dotenv').config();
const db = require("./connection");
const { User, Product, Category, Order } = require("../models");
const { faker } = require("@faker-js/faker");

db.once("open", async () => {

	await User.deleteMany();

	// create user data
	const userData = [];

	for (let i = 0; i < 10; i += 1) {
		const username = faker.internet.userName();
		const email = faker.internet.email(username);
		const password = faker.internet.password();

		userData.push({ username, email, password });
	}

	const createdUsers = await User.collection.insertMany(userData);

	console.log("users seeded");

	await Category.deleteMany();

	const categories = await Category.insertMany([
		{ name: "Main Dishes" },
		{ name: "Sides" },
		{ name: "Drinks" },
		{ name: "Main Dishes - Dinner" },
		{ name: "Sides - Dinner" },
		{ name: "Dessert - Dinner" },
		{ name: "Drinks - Dinner" },
	]);

	console.log("categories seeded");



	await Product.deleteMany();

	const products = await Product.insertMany([
		// BRUNCH MAIN DISHES
		{
			name: "Salmon Croquettes",
			description:
				"Crispy bites with savory salmon twist - Brunch",
			image: "salmon_croquette.jpg",
			category: categories[0]._id,
			price: 17,
			quantity: 16,
		},
		{
			name: "Shrimp and Grits",
			description:
				"Southern delight with creamy grits - Brunch",
			image: "shrimp-n-grits.jpg",
			category: categories[0]._id,
			price: 18,
			quantity: 10,
		},
		{
			name: "Chicken and Waffles",
			description:
				"Candy toffee caramels I love wafer icing. Pastry cake chocolate cake muffin cake carrot cake chocolate chocolate bar. Dragée danish lemon drops lemon drops I love candy - Brunch",
			image: "chicken-waffle.jpg",
			category: categories[0]._id,
			price: 15,
			quantity: 45,
		},
		{
			name: "Strawberry Cheesecake Stuffed French Toast",
			description:
				"Bear claw danish candy soufflé apple pie. Pastry marzipan I love gummies ice cream carrot cake topping. Chupa chups gummi bears jelly chocolate bar jelly muffin croissant sugar plum marshmallow - Brunch",
			image: "Strawberry-Cheesecake-Stuffed-French-Toast.jpg",
			category: categories[0]._id,
			price: 13,
			quantity: 45,
		},
		{
			name: "Steak and Eggs",
			description:
				"Tart I love dessert I love candy canes soufflé. Oat cake jelly-o muffin powder I love toffee. Bonbon chocolate sweet roll sweet roll tart - Brunch",
			image: "steak-n-egg.jpg",
			category: categories[0]._id,
			price: 18,
			quantity: 45,
		},
		{
			name: "Breakfast Platter",
			description: "Ingredients: sausage, bacon, eggs, biscuit, cheese grits - Brunch",
			image: "breakfast-platter.jpg",
			category: categories[0]._id,
			price: 15,
			quantity: 10,
		},
		{
			name: "Pancakes",
			description:
				"Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos - Brunch",
			image: "pancakes.jpg",
			category: categories[0]._id,
			price: 12,
			quantity: 10,
		},

		// BRUNCH SIDES
		{
			name: "Home Fries",
			description:
				"I love marzipan bear claw powder tootsie roll gummi bears croissant icing candy. Chupa chups lollipop liquorice pudding tootsie roll marshmallow cupcake. Caramels sugar plum croissant bonbon pastry - Brunch",
			image: "home-fries.jpg",
			category: categories[1]._id,
			price: 6,
			quantity: 10,
		},
		{
			name: "Fresh Fruit Cup",
			description:
				"Halvah pie tart sugar plum lemon drops powder tiramisu donut. Danish I love chocolate pudding halvah I love. Gummies pudding wafer apple pie caramels sugar plum cotton candy. Wafer cheesecake jelly-o cheesecake fruitcake chupa chups powder - Brunch",
			image: "fruit-cup.jpg",
			category: categories[1]._id,
			price: 4,
			quantity: 10,
		},
		{
			name: "Bacon",
			description: "Bacon fried to crispy perfection - Brunch",
			image: "bacon.jpg",
			category: categories[1]._id,
			price: 4,
			quantity: 10,
		},
		{
			name: "Biscuit",
			description:
				"icing lemon drops jelly. Halvah sweet bonbon sugar plum sesame snaps shortbread. Tootsie roll candy sweet brownie jelly ice cream toffee. Wafer caramels danish oat cake tart pie - Brunch",
			image: "Biscuits.jpg",
			category: categories[1]._id,
			price: 3,
			quantity: 10,
		},
		{
			name: "Parfait",
			description:
				"Dessert jelly beans fruitcake pie jelly beans biscuit bonbon. Cookie I love halvah icing cotton candy. Cake pie marzipan pie sweet roll. Sugar plum toffee pie soufflé jelly beans - Brunch",
			image: "parfaits.jpg",
			category: categories[1]._id,
			price: 4,
			quantity: 10,
		},
		{
			name: "Sausage",
			description: "Turkey sausage grill to perfection - Brunch",
			image: "sausage.jpg",
			category: categories[1]._id,
			price: 4,
			quantity: 10,
		},

		// BRUNCH DRINKS
		{
			name: "Apple Juice",
			description: "Apple Juice - Brunch",
			image: "apple-juice.jpg",
			category: categories[2]._id,
			price: 3,
			quantity: 10,
		},
		{
			name: "Orange Juice",
			description: "Orange Juice - Brunch",
			image: "orange-juice.png",
			category: categories[2]._id,
			price: 3,
			quantity: 10,
		},
		{
			name: "Lemonade",
			description: "Lemonade - Brunch",
			image: "lemonade.jpg",
			category: categories[2]._id,
			price: 3,
			quantity: 10,
		},
		{
			name: "Ice Tea",
			description: "Ice Tea - Brunch",
			image: "ice-tea.jpg",
			category: categories[2]._id,
			price: 3,
			quantity: 10,
		},
		{
			name: "Water Bottle",
			description: "Fuji Water Bottle - Brunch",
			image: "water.jpg",
			category: categories[2]._id,
			price: 3,
			quantity: 10,
		},

		// DINNER MAIN DISHES
		{
			name: "Gumbo",
			description:
				"Topping biscuit tiramisu cookie sesame snaps chocolate bar ice cream donut sugar plum. Wafer jelly beans marshmallow dragée muffin caramels. Topping pudding ice cream croissant I love gummi bears soufflé bear claw - Dinner",
			image: "gumbo.jpg",
			category: categories[3]._id,
			price: 21,
			quantity: 10,
		},
		{
			name: "Crab Stuffed Salmon",
			description:
				"Jelly beans dessert cake chocolate bar pudding jelly beans bonbon pudding. Sugar plum caramels pastry toffee carrot cake marzipan. Biscuit I love chocolate cake chocolate dragée - Dinner",
			image: "crab-stuffed-salmon.jpg",
			category: categories[3]._id,
			price: 25,
			quantity: 10,
		},
		{
			name: "Tuscan Shrimp Alfredo",
			description:
				"Icing biscuit lemon drops candy canes cupcake powder macaroon sweet cupcake. Sugar plum I love I love powder sweet roll sugar plum marzipan. Cake chupa chups lemon drops soufflé apple pie sugar plum toffee chocolate cake gummi bears - Dinner",
			image: "tuscan-shrimp-alfredo.jpg",
			category: categories[3]._id,
			price: 27,
			quantity: 10,
		},
		{
			name: "Rib-eye Steak",
			description:
				"Topping jelly beans biscuit pastry macaroon cheesecake lemon drops. Cotton candy tiramisu cotton candy sweet cotton candy. Cheesecake I love candy icing jelly-o dragée. Candy canes bear claw jelly cookie croissant wafer donut - Dinner",
			image: "rib-eye-steak.jpg",
			category: categories[3]._id,
			price: 27,
			quantity: 10,
		},
		{
			name: "Loaded Baked Potatoes",
			description:
				"Toffee sugar plum sweet roll sesame snaps fruitcake sesame snaps wafer jelly-o. Apple pie jelly-o jelly bear claw lemon drops bear claw. Donut caramels I love jujubes chupa chups fruitcake. Toffee oat cake chocolate bar I love jelly-o chocolate cake wafer I love cotton candy - Dinner",
			image: "loaded-baked-potato.jpg",
			category: categories[3]._id,
			price: 18,
			quantity: 10,
		},
		{
			name: "Pulled Pork Sandwich",
			description:
				"I love halvah caramels lemon drops tart I love bonbon soufflé gingerbread. Candy oat cake chocolate tiramisu I love. Cake jelly-o gummies jelly oat cake gummi bears I love tootsie roll topping. Ice cream tart gummies soufflé I love cheesecake danish oat cake - Dinner",
			image: "pulled-pork-sandwich.jpg",
			category: categories[3]._id,
			price: 23,
			quantity: 10,
		},
		{
			name: "Chicken Bacon Ranch Flatbread",
			description:
				"Liquorice fruitcake bear claw croissant cupcake cake dessert dessert. Soufflé I love chocolate sweet roll sesame snaps cheesecake tart. Macaroon I love icing brownie donut. Cookie lemon drops candy canes jelly wafer fruitcake tootsie roll brownie candy canes - Dinner",
			image: "chicken-bacon-ranch-flatbread.jpg",
			category: categories[3]._id,
			price: 24,
			quantity: 10,
		},

		// DINNER SIDES
		{
			name: "Mac n Cheese",
			description:
				"Jelly icing cookie tootsie roll danish. Icing croissant sesame snaps cookie oat cake bear claw halvah. Muffin pie I love pudding pudding. Jujubes candy bonbon marshmallow powder lemon drops bonbon - Dinner",
			image: "mac-n-cheese.png",
			category: categories[4]._id,
			price: 5,
			quantity: 15,
		},
		{
			name: "Grilled Brocolli",
			description:
				"Jelly icing cookie tootsie roll danish. Icing croissant sesame snaps cookie oat cake bear claw halvah. Muffin pie I love pudding pudding. Jujubes candy bonbon marshmallow powder lemon drops bonbon - Dinner",
			image: "brocolli.jpg",
			category: categories[4]._id,
			price: 7,
			quantity: 15,
		},
		{
			name: "Mashed Potatoes",
			description:
				"Apple pie sugar plum gummies I love I love. Toffee fruitcake cookie I love shortbread. Wafer candy cotton candy I love icing chocolate bar shortbread - Dinner",
			image: "mashed-potatoes.jpg",
			category: categories[4]._id,
			price: 5,
			quantity: 15,
		},
		{
			name: "Ceasar Sald",
			description:
				"Danish chocolate bar carrot cake carrot cake wafer. Sesame snaps sweet roll I love brownie carrot cake tootsie roll. I love cupcake soufflé dragée lemon drops - Dinner",
			image: "ceasar-salad.jpg",
			category: categories[4]._id,
			price: 6,
			quantity: 15,
		},
		{
			name: "Brussel Sprouts",
			description:
				"Apple pie I love sweet jelly beans I love I love jujubes. Brownie cotton candy liquorice liquorice pastry. Ice cream gingerbread pudding I love croissant jelly cake carrot cake - Dinner",
			image: "brussel-sprouts.jpg",
			category: categories[4]._id,
			price: 8,
			quantity: 15,
		},

		// DINNER DESSERTS
		{
			name: "Red Velvet Cake",
			description:
				"Sesame snaps cupcake jelly beans pastry ice cream bonbon chocolate gingerbread tootsie roll. Wafer marshmallow bonbon wafer liquorice I love marzipan sugar plum. Pudding jujubes dragée gummi bears oat cake lollipop pie liquorice - Dinner",
			image: "Red-Velvet.png",
			category: categories[5]._id,
			price: 8,
			quantity: 15,
		},
		{
			name: "Chocolate Brownie",
			description:
				"Carrot cake biscuit gummi bears bear claw chupa chups tart dessert sugar plum chupa chups. Jelly beans jelly muffin candy canes I love lemon drops donut macaroon gummies. Gummi bears muffin apple pie powder croissant fruitcake I love - Dinner",
			image: "chocolate-brownie.jpg",
			category: categories[5]._id,
			price: 8,
			quantity: 15,
		},
		{
			name: "Beignets",
			description:
				"Carrot cake jelly beans chocolate bar sweet roll I love cookie sweet I love. Dragée soufflé gummies jelly beans gummi bears I love cake macaroon. Halvah biscuit sweet roll I love sweet roll gingerbread cotton candy cheesecake dessert - Dinner",
			image: "beignets.jpg",
			category: categories[5]._id,
			price: 6,
			quantity: 15,
		},
		{
			name: "Cheesecake bites",
			description:
				"Lemon drops cotton candy I love I love donut marshmallow. Cotton candy dragée fruitcake lemon drops I love topping. Soufflé candy canes tiramisu apple pie bear claw toffee - Dinner",
			image: "strawberry-cheese-cake-bites.jpg",
			category: categories[5]._id,
			price: 8,
			quantity: 15,
		},
		{
			name: "Nutella Crossaint Bread Pudding",
			description:
				"Tootsie roll jujubes I love cotton candy toffee sweet roll cheesecake sugar plum candy. Candy I love I love cake I love halvah cheesecake jujubes. Sweet pie lemon drops cake gummies chocolate cake pie I love candy canes. Danish danish powder pie apple pie - Dinner",
			image: "nutella-crossaint-bread-pudding.jpg",
			category: categories[5]._id,
			price: 6,
			quantity: 15,
		},

		// DINNER DRINKS
		{
			name: "Ice Tea",
			description: "Ice Tea - Dinner",
			image: "ice-tea.jpg",
			category: categories[6]._id,
			price: 3,
			quantity: 10,
		},
		{
			name: "Water Bottle",
			description: "Fuji Water Bottle - Dinner",
			image: "water.jpg",
			category: categories[6]._id,
			price: 3,
			quantity: 10,
		},
		{
			name: "Arnold Palmer",
			description:
				"Gingerbread soufflé sesame snaps cheesecake fruitcake brownie. Fruitcake I love topping pudding halvah I love chupa chups marshmallow icing. Jelly ice cream biscuit I love I love - Dinner",
			image: "arnold-palmer-drink.jpg",
			category: categories[6]._id,
			price: 8,
			quantity: 10,
		},
		{
			name: "Strawberry Limeade",
			description:
				"Bonbon icing lemon drops powder marzipan. Chocolate bar I love biscuit bear claw bonbon chocolate bar. Sweet roll dragée chupa chups chocolate bar wafer brownie oat cake cookie pie. I love cotton candy muffin dragée marzipan dessert topping sesame snaps - Dinner",
			image: "strawberry-limemade.jpg",
			category: categories[6]._id,
			price: 5,
			quantity: 10,
		},
		{
			name: "Shirley Temple",
			description:
				"Sweet chocolate cake powder biscuit cotton candy pudding. Cheesecake powder marshmallow chocolate bar gingerbread jelly-o. Marzipan bear claw jelly beans jujubes sugar plum sesame snaps donut gingerbread - Dinner",
			image: "shirley-temple.jpg",
			category: categories[6]._id,
			price: 8,
			quantity: 10,
		},
	]);

  console.log("products seeded");
  
  await Order.deleteMany();

  const orders = await Order.insertMany([
	{
		address: "123 jefferson lane",
		address2: "Apt 2",
		email: "test@test.com",
		firstName: "Test",
		city: "Orlando",
		state: "Florida",
		lastName: "testlast",
		phone: "5555555555",
		zipCode: "32697",
		products: [
			"623fd7623abaf3b6fb149b40",
			"623fd7623abaf3b6fb149b41",
			"623fd7623abaf3b6fb149b43"
		  ],
		total: "33"
	},
]);

	console.log("orders seeded");



	process.exit();
});