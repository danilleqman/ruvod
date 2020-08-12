import { gql } from "apollo-boost";

export const GET_USERS = gql`
  query users {
    users {
      id
      email
      name
    }
  }
`;
