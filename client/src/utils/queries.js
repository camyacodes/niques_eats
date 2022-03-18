import { gql } from '@apollo/client';



export const QUERY_USERS = gql`
query Users {
  users {
     _id
    username
    email
  }
}
`;

export const QUERY_USER = gql`
query user ($username: String!){
  user(username: $username) {
        _id
        username
        email
  }
  }
`;


// export const QUERY_ME = gql`
//   {
//     me {
//       _id
//       username
//       email
//     }
//   }
// `;