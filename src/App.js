import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Checkout from "./pages/Checkout";
import Dashboard from "./pages/Dashboard";
import Layout from "./components/Layout";
import Acknowledgement from "./pages/Acknowledgement";
import { useContext, useEffect, useRef } from "react";
import { UserContext } from "./context/user";
import axios from "axios";
import { getURLs } from "./urlConfig";
import { Helmet } from "react-helmet-async";

function App() {
  // update user state
  const {
    state: { userInfo },
    updateUser,
  } = useContext(UserContext);

  const effectRan = useRef(false);

  // check if user has previously logged in or not
  useEffect(() => {
    // if previously logged in then auto login using refresh endpoint
    const isPersist = JSON.parse(localStorage.getItem("persist"));
    if (!Object.keys(userInfo).length && isPersist && !effectRan?.current) {
      axios
        .get(getURLs("refresh-user"), { withCredentials: true })
        .then((res) => {
          if (res?.data) {
            const { foundUser } = res.data.user;
            updateUser({ ...foundUser, authToken: res.data.user.authToken });
          }
        });

      return () => {
        effectRan.current = true;
      };
    }
  }, []);
  return (
    <>
      {/* seo */}
      <Helmet>
        <title>BrainJEE</title>
        <meta
          name="description"
          content="An innovative online learning
            platform offering wide range of courses. Designed to make learning impactful."
        />
        <link rel="icon" href="/logo512.png" />
        <link rel="canonical" href="https://www.vaisage.com/" />
        {/* Twitter meta tags below */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:image" content="" />
        <meta
          name="twitter:title"
          content="Brainjee - An innovative online learning
          platform offering wide range of courses."
        />
        <meta
          name="twitter:description"
          content="An innovative online learning
          platform offering wide range of courses. Designed to make learning impactful."
        />

        {/* Facebook meta tags below */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vaisage.com/" />
        <meta
          property="og:title"
          content="Brainjee - An innovative online learning
          platform offering wide range of courses."
        />
        <meta
          property="og:description"
          content="An innovative online learning
          platform offering wide range of courses. Designed to make learning impactful."
        />
        <meta property="og:image" content="" />
      </Helmet>

      <Routes>
        <Route path="/" element={<Layout />}>
          {/* "/" will go to home page */}
          <Route index element={<Home />} />

          {/* login page route */}
          <Route path="login" element={<Login />} />

          {/* signup page route */}
          <Route path="signup" element={<Signup />} />

          {/* payment page route */}
          <Route path="checkout" element={<Checkout />} />

          {/* dashboard page route */}
          <Route path="dashboard" element={<Dashboard />} />

          {/* acknowledgement page route */}
          <Route path="acknowledge" element={<Acknowledgement />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
