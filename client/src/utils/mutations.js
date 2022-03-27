import { gql } from "@apollo/client";

export const LOGIN = gql`
	mutation login($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			token
			user {
				_id
				username
			}
		}
	}
`;

export const ADD_ORDER = gql`
	mutation addOrder(
		$address: String!
		$address2: String!
		$email: String!
		$firstName: String!
		$flCity: String!
		$flState: String!
		$lastName: String!
		$phone: String!
		$zipCode: String!
		$products: [ID]
	) {
		addOrder(
			address: $address
			address2: $address2
			email: $email
			firstName: $firstName
			flCity: $flCity
			flState: $flState
			lastName: $lastName
			phone: $phone
			zipCode: $zipCode
			products: $products
		) {
			_id
			address
			address2
			email
			firstName
			flCity
			flState
			lastName
			phone
			zipCode
			purchaseDate
			products {
				_id
				name
				description
				image
				price
				category {
					_id
					name
				}
			}
		}
	}
`;

export const ADD_USER = gql`
	mutation addUser($username: String!, $email: String!, $password: String!) {
		addUser(username: $username, email: $email, password: $password) {
			token
			user {
				_id
				username
			}
		}
	}
`;

export const ADD_ITEM = gql`
	mutation addItem(
		$name: String!
		$price: Int
		$image: String!
		$description: String!
		$deliverDate: String!
	) {
		addItem(
			name: $name
			price: $price
			image: $image
			description: $description
		) {
			_id
			name
			description
			price
		}
	}
`;
