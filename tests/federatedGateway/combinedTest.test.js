import { createRequire } from "module";
import inventoryService from "./services/inventory.js";
import productsService from "./services/products.js";

const require = createRequire(import.meta.url);
const { executeGraphql } = require("federation-testing-tool");
const { gql } = require("apollo-server");

// const { typeDefs } = require("./schema");
// const { resolvers } = require("./resolvers");

// const { typeDefs: typeDefsProducts } = require("../products/schema");

const services = [
  { inventory: inventoryService },
  {
    products: productsService
  }
];

describe("Based on the data from the external service", () => {
  const query = gql`
    {
      topProducts {
        name
        inStock
        shippingEstimate
      }
    }
  `;

  it("should calculate the shipping estimate", async () => {
    const mocks = {
      Product: () => ({
        upc: "1",
        name: "Table",
        weight: 10,
        price: 10,
        elo: "",
        __typename: "Product"
      })
    };

    const result = await executeGraphql({ query, mocks, services });
    expect(result.data.topProducts[0]).toEqual({
      name: "Table",
      inStock: true,
      shippingEstimate: 5
    });
  });
  it("should set the shippingEstimate at 0 for an expensive item", async () => {
    const mocks = {
      Product: () => ({
        upc: "1",
        name: "Table",
        weight: 10,
        price: 14000,
        elo: "",
        __typename: "Product"
      })
    };

    const result = await executeGraphql({ query, mocks, services });
    expect(result.data.topProducts[0]).toEqual({
      name: "Table",
      inStock: true,
      shippingEstimate: 0
    });
  });
});
