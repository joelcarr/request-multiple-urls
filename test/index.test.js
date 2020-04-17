const requestMultipleUrls = require("../src/index");

test("returns a success message", () => {
  expect(requestMultipleUrls()).toBe("Hello world");
});

describe("When supplied with an array", () => {
  it.todo("returns a promise");
  it.todo("does not return an error");
});

describe("When NOT supplied with an array", () => {
  it.todo("returns with an error message asking for an array");
});

describe("When a URL in the array fails to return JSON", () => {
  it.todo("returns a message to say URL failed");
});
