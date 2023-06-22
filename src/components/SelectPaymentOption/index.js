import React, { useState } from "react";
import StripeLogo from "../../images/stripe.svg";
import StripeContainer from "../StripeCheckout";
import PaypalCheckout from "../PaypalCheckout";

const SelectPaymentOption = ({ subscriptionAmount }) => {
  const [openStripe, setOpenStripe] = useState(false);
  return (
    <div className="max-w-xl w-full flex flex-col items-start space-y-4 px-2 py-8 h-64">
      <div className="flex flex-col space-y-2 w-full max-w-xl h-96">
        <PaypalCheckout amount={subscriptionAmount} />

        <button
          className="w-full flex items-center justify-center font-medium font-poppins bg-white text-stripeColor border border-stripeColor py-3 px-4 rounded hover:bg-gray-100 hover:transition-all ease-in-out"
          onClick={() => setOpenStripe(true)}
        >
          <img
            src={StripeLogo}
            alt="PayPal Logo"
            className="w-12 object-contain"
          />
        </button>
      </div>

      {openStripe && (
        <div className="w-full mt-4">
          <StripeContainer amount={subscriptionAmount} />
        </div>
      )}
    </div>
  );
};

export default SelectPaymentOption;
