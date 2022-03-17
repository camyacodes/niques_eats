// import the gql tagged template function
const { gql } = require("apollo-server-express");

// create our typeDefs
const typeDefs = gql`
	type Menu {
		_id: ID
		name: String
		price: Int
		meal_time: String
		category: String
		description: String
		image: String
		quantity: Int
	}

	type User {
		_id: ID
		username: String
		email: String
		password: String
	}

	type Query {
		menu: [Menu]
		user: [User]
	}
`;

// export the typeDefs
module.exports = typeDefs;
