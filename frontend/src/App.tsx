import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { FC } from "react";
import { Books } from "./components";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

const App: FC = () => {
  return (
    <ApolloProvider client={client}>
      <div>Hello, world</div>
      <Books />
    </ApolloProvider>
  );
};

export default App;
