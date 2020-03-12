import { createRequire } from "module";
import inventoryService from "./services/inventory.js";

const require = createRequire(import.meta.url);
const { executeGraphql } = require("federation-testing-tool");
const { gql } = require("apollo-server");

describe("Based on the data from the external service", () => {
  const query = gql`
    {
      _getProduct {
        inStock
        shippingEstimate
      }
    }
  `;

  it("should set the shippingEstimate at 0 for an expensive item and retrieve inStock", async () => {
    const mocks = {
      Product: () => ({
        upc: "1",
        weight: 10,
        price: 14000,
      })
    };

    const result = await executeGraphql({ query, mocks, service: inventoryService });

    expect(result.data._getProduct.shippingEstimate).toEqual(0);
    expect(result.data._getProduct).toEqual({
      inStock: true,
      shippingEstimate: 0
    });
  });

  it("should calculate the shipping estimate for cheap item", async () => {
    const mocks = {
      Product: () => ({
        upc: "1",
        weight: 10,
        price: 10,
      })
    };

    const result = await executeGraphql({ query, mocks, service: inventoryService });
    expect(result.data._getProduct.shippingEstimate).toEqual(5);
  });
});
