import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import { ApolloServer } from "apollo-server-express";
import cors from "cors";
import express from "express";
import http from "http";
import { resolvers } from "./resolvers";
import { schema } from "./schema";

const startApolloServer = async (typeDefs, resolvers) => {
  const app = express();
  app.use(cors({ origin: ["http://localhost:9000"] }));

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

startApolloServer(schema, resolvers);
