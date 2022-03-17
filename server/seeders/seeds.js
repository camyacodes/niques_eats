const { faker } = require("@faker-js/faker");

const db = require("../config/connection");
const { Menu } = require("../models");

db.once("open", async () => {
	await Menu.deleteMany({});

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

	console.log("all done!");
	process.exit(0);
});
