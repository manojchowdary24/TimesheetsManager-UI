import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { RestLink } from "apollo-link-rest";
import clientState from "./resolvers";

const { typeDefs, defaults: localState, resolvers } = clientState;

const setLocalState = () => {
  client.cache.writeData({ data: localState });
};

const restLink = new RestLink({ uri: "http://localhost:8080" });

const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache(),
  typeDefs,
  resolvers,
});

client.onResetStore(async () => {
  setLocalState();
});

setLocalState();

export default client;
