# DB-User
Простое CRUD-приложение, которое состоит из GraphQL сервера и клиентского приложения.

Серверные библиотеки 
- apollo-server
- graphql
- mongoose
- graphql-type-email
- schemaglue

Клиентские библиотеки
- react
- react-dom
- material-ui
- apollo-boost
- react-apollo
- graphql
- material-table

Сервер поддерживает схему:

```graphql
type Query {
  user(id: ID!): User!
  users(skip: Int = 0, limit: Int = 10): [User]
}

type Mutation {
  createUser(input: CreateUserInput!): User!
  updateUser(id: ID!, input: UpdateUserInput!): User!
  deleteUser(id: ID!): User!
}

type User {
  id: ID!
  email: Email!
  name: String!
}

input CreateUserInput {
  email: Email!
  name: String!
}

input UpdateUserInput {
  email: Email
  name: String
}
```

Данные пользователей сохраняются в MongoDB, в качестве адаптера используется mongoose.



