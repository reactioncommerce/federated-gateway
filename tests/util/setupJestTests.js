/* eslint-disable no-undef */

require("../../src/checkNodeVersion.cjs");

process.on("unhandledRejection", (err) => {
  throw err;
});
