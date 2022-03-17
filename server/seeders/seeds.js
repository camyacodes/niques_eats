const { faker } = require("@faker-js/faker");

const db = require("../config/connection");
const { Menu } = require("../models");
const { User } = require("../models");

db.once("open", async () => {
	console.log(Menu);


	await Menu.deleteMany();

	// create user data
	const menuData = [];

	for (let i = 0; i < 20; i += 1) {
		const name = faker.commerce.product();
		const price = faker.commerce.price();
		const meal_time = "brunch";
		const category = "main";
		const description = faker.lorem.sentence();
		const image = faker.image.imageUrl();
		const quantity = 0;

		menuData.push({
			name,
			price,
			meal_time,
			category,
			description,
			image,
			quantity,
		});
	}

	const createdMenu = await Menu.collection.insertMany(menuData);

	console.log("menu created!");

	console.log(User);


	await User.deleteMany();

	// create userdata
	const userData = [];

	for (let i = 0; i < 20; i += 1) {
		const username = faker.internet.userName();
		const email = faker.internet.email(username);
		const password = faker.internet.password();

		userData.push({ username, email, password });
	}

	const createdUsers = await User.collection.insertMany(userData);

	console.log("users seeded");

	process.exit(0);
});
