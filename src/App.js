import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import StripeContainer from "./components/StripeCheckout";

function App() {
  return (
    <Routes>
      <Route path="/">
        {/* "/" will go to home page */}
        <Route index element={<Home />} />

        {/* login page route */}
        <Route path="login" element={<Login />} />

        {/* signup page route */}
        <Route path="signup" element={<Signup />} />

        {/* payment page route */}
        <Route path="checkout" element={<StripeContainer />} />
      </Route>
    </Routes>
  );
}

export default App;
