import { gql } from "apollo-boost";

export const GET_USER = gql`
  query user($id: ID!) {
    user(id: $id) {
      id
      email
      name
    }
  }
`;
