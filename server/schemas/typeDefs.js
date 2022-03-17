// import the gql tagged template function
const { gql } = require('apollo-server-express');


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

  type Query {
    menu: [Menu]
  }
`;


// export the typeDefs
module.exports = typeDefs;