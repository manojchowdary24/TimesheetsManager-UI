import gql from "graphql-tag";

export default {
  typeDefs: gql`
    extend type Query {
      isAuthenicated: Boolean!
    }
  `,
  defaults: {
    isAuthenicated: false,
  },
  resolvers: {},
};
