import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Checkout from "./pages/Checkout";
import Dashboard from "./pages/Dashboard";
import Layout from "./components/Layout";
import Acknowledgement from "./pages/Acknowledgement";

function App() {
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
