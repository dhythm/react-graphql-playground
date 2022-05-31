import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import { ApolloServer, gql } from "apollo-server-express";
import express from "express";
import http from "http";

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book!]!
  }
`;

const books = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
];

const resolvers = {
  Query: {
    books: () => books,
  },
};

const startApolloServer = async (typeDefs, resolvers) => {
  const app = express();

  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();

  server.applyMiddleware({ app });

  const PORT = 4000;
  httpServer.listen(PORT, () =>
    console.log(`🚀  Server ready at http://localhost:${PORT}/graphql`)
  );
};

startApolloServer(typeDefs, resolvers);
