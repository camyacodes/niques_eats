import { gql } from '@apollo/client';

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
  mutation addOrder($products: [ID]!) {
    addOrder(products: $products) {
      purchaseDate
      deliverDate
      products {
        _id
        name
        description
        price
        quantity
        category {
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
  $name:String!
  $price: Int
  $image: String!
  $description: String!
  $deliverDate: String!
){
  addItem(
    name:$name
    price:$price
    image:$image
    description:$description
  ){
      _id
      name
      description
      price       
  }
}
`;
