const devQueryUrl = `http://54.81.171.95:5010/query`;
const prodQueryUrl = `https://api.brainjee.com/query`;

let currentUrl;

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  // dev code
  currentUrl = devQueryUrl;
} else {
  // production code
  currentUrl = prodQueryUrl;
}

export { currentUrl };
