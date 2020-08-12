import { gql } from "apollo-boost";

export const GET_USERS = gql`
  query users($skip: Int = 0, $limit: Int = 10) {
    users(skip: $skip, limit: $limit) {
      id
      email
      name
    }
  }
`;
