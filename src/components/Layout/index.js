import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const router = useLocation();
  const showHeaderAndFooter =
    router.pathname !== "/signup" && router.pathname !== "/login";
  return (
    <>
      {showHeaderAndFooter && <Header />}
      <Outlet />
      {showHeaderAndFooter && <Footer />}
    </>
  );
};

export default Layout;
