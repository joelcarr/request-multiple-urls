# Request Multiple URLs

`request-multiple-urls` allows you to request a single reponse from an array of URLs.

## Example usage

```js
const requestMultipleUrls = require("request-multiple-urls");

const urls = [
  "https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json",
  "https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-hkd.json",
  "https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-usd.json"
];

requestMultipleUrls(urls).then(urlContent => {
  // ...
});
```

## Development

### Getting started

1. `nvm use` ensure you are running the same supported node version (assuming you use [`nvm`](https://github.com/nvm-sh/nvm#node-version-manager---))
1. `npm install` install dependencies
1. `npm run dev` run the development environment
