const devQueryUrl = `http://54.81.171.95:5010/query`;
const prodQueryUrl = `https://api.vaisage.com/query`;

const server =
  !process.env.NODE_ENV || process.env.NODE_ENV === "development"
    ? `http://localhost:8080`
    : "https://server-gilt-mu.vercel.app";

let currentUrl;

const URLs = {
  appInfo: `${server}/api/appData/appInfo`,
  loginUrl: `${server}/api/auth/login`,
  signupUrl: `${server}/api/auth/signup`,
  checkout: `${server}/api/checkout`,
  "stripe-checkout": `${server}/api/checkout/stripe-checkout`,
  "paypal-checkout": `${server}/api/checkout/paypal-checkout`,
  getUserDetails: `${server}/api/auth/getuser`,
  "search-history": `${server}/api/search/get-search-history`,
  "add-search": `${server}/api/search/add-search`,
  "refresh-user": `${server}/api/auth/refresh`,
  "subscription-amount": `${server}/api/checkout/get-subscription-amount`,
  "searches-left": `${server}/api/free/get-free-searches`,
  "set-searches": `${server}/api/free/set-free-searches`,
};

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  // dev code
  currentUrl = devQueryUrl;
} else {
  // production code
  currentUrl = prodQueryUrl;
}

export const getURLs = (urlName) => URLs[urlName];

export { currentUrl };
