import gql from "graphql-tag";

export default {
  typeDefs: gql`
    extend type Query {
      isAuthenicated: Boolean!
      showToast: Boolean!
      toastMessage: String!
      isError: Boolean!
    }
  `,
  defaults: {
    isAuthenicated: false,
    showToast: false,
    toastMessage: "",
    isError: false
  },
  resolvers: {}
};
