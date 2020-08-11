const { ApolloServer } = require("apollo-server");
const glue = require("schemaglue");
const mongoose = require("mongoose");

const startServer = async () => {
  const { schema, resolver } = glue("graphql", {
    ignore: "**/model.js",
  });

  const server = new ApolloServer({
    typeDefs: schema,
    resolvers: resolver,
  });

  await mongoose.connect(
    "mongodb+srv://danil:1234567654321@cluster0.54boj.azure.mongodb.net/ruvod?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }
  );

  server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
  });
};

startServer();
