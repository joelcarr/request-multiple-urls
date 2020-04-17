const axios = require("axios");
const requestMultipleUrls = require("../src/index");

jest.mock("axios");

describe.each([
  [["http://example.com/api/1"]],
  [
    [
      "http://example.com/api/1",
      "http://example.com/api/2",
      "http://example.com/api/3"
    ]
  ]
])("When supplied with an array", arrayOfUrls => {
  let request;

  beforeEach(() => {
    const response = { data: "Some data" };
    axios.get.mockResolvedValue(response);
    request = requestMultipleUrls(arrayOfUrls);
  });

  afterEach(() => {
    request = undefined;
    axios.get.mockClear();
  });

  it("axios.get to have been called with each URL", () => {
    arrayOfUrls.map(url => expect(axios.get).toHaveBeenCalledWith(url));
  });

  it("should resolve with the same number of responses as URLs provided", () => {
    request.then(data => expect(data.length).toEqual(arrayOfUrls.length));
  });
});

describe("When NOT supplied with an array", () => {
  it("returns with an error message asking for an array", () => {
    expect(() => requestMultipleUrls("Not an array")).toThrow(
      "Please supply an array of URLs"
    );
  });
});
