const devQueryUrl = `http://54.81.171.95:5010/query`;
const prodQueryUrl = `https://api.brainjee.com/query`;

const loginServer =
  !process.env.NODE_ENV || process.env.NODE_ENV === "development"
    ? `http://localhost:8080`
    : "";

let currentUrl;

const login = {
  loginUrl: `${loginServer}/api/auth/login`,
  signupUrl: `${loginServer}/api/auth/signup`,
};

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  // dev code
  currentUrl = devQueryUrl;
} else {
  // production code
  currentUrl = prodQueryUrl;
}

export const getLoginUrls = (urlName) => login[urlName];

export { currentUrl };
