const test = require("node:test");
const assert = require("node:assert/strict");
const server = require("./index");

test("HTTP server is created", () => {
  assert.equal(typeof server.listen, "function");
});
