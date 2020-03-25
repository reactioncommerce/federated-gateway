/* eslint-disable no-undef */

require("../../src/check-node-version.cjs");

process.on("unhandledRejection", (err) => {
  throw err;
});
