import React from "react";
import StripeContainer from "../components/StripeCheckout";
import PaypalCheckout from "../components/PaypalCheckout";

const Checkout = () => {
  return (
    <div className="flex flex-col w-full">
      <StripeContainer />

      <PaypalCheckout />
    </div>
  );
};

export default Checkout;
