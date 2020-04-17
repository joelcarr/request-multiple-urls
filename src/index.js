const axios = require("axios");

function requestMultipleUrls(urls) {
  if (!Array.isArray(urls)) {
    throw new Error("Please supply an array of URLs");
  }

  const promises = urls.map(async url => axios.get(url));

  return Promise.all(promises);
}

module.exports = requestMultipleUrls;
