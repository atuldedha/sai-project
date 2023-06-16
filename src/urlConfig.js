const devQueryUrl = `http://54.81.171.95:5010/query`;
const prodQueryUrl = `https://api.brainjee.com/query`;

const server =
  !process.env.NODE_ENV || process.env.NODE_ENV === "development"
    ? `http://localhost:8080`
    : "https://server-gilt-mu.vercel.app";

let currentUrl;

const URLs = {
  loginUrl: `${server}/api/auth/login`,
  signupUrl: `${server}/api/auth/signup`,
  checkout: `${server}/api/checkout`,
  "stripe-checkout": `${server}/api/checkout/stripe-checkout`,
  "paypal-checkout": `${server}/api/checkout/paypal-checkout`,
  getUserDetails: `${server}/api/auth/getuser`,
  "search-history": `${server}/api/search/get-search-history`,
  "add-search": `${server}/api/search/add-search`,
  "refresh-user": `${server}/api/auth/refresh`,
  "subscription-amount": `${server}/api/checkout/getSubscriptionAmount`,
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
