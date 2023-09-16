import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: `http://localhost:${process.env.PORT || 4000}/grahpql`,
  cache: new InMemoryCache(),
});

export default client;
