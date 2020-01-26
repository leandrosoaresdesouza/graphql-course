const { ApolloServer, gql } = require("apollo-server");
const { importSchema } = require("graphql-import");
const resolvers = require("./resolvers");

const schamaPath = "./schema/index.graphql";
const server = new ApolloServer({
  typeDefs: importSchema(schamaPath),
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`Executando em ${url}`);
});
