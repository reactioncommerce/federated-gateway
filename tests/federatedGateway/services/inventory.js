import { createRequire } from "module";

const require = createRequire(import.meta.url);
const { gql } = require("apollo-server");

const typeDefs = gql`
  extend type Product @key(fields: "upc") {
    upc: String! @external
    weight: Int @external
    price: Int @external
    inStock: Boolean
    shippingEstimate: Int @requires(fields: "price weight")
  }
`;

let inventory = [
  { upc: "1", inStock: true },
  { upc: "2", inStock: false },
  { upc: "3", inStock: true }
];

const resolvers = {
  Product: {
    __resolveReference(object) {
      return {
        ...object,
        ...inventory.find(product => product.upc === object.upc)
      };
    },
    shippingEstimate: object => {
      if (object.price > 1000) return 0;
      return object.weight * 0.5;
    }
  }
};

export default {
  typeDefs,
  resolvers
};
