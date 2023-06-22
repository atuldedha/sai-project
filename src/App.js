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
  );
}

export default App;
