import React, { useEffect, useState } from "react";
import StripeContainer from "../components/StripeCheckout";
import PaypalCheckout from "../components/PaypalCheckout";
import axios from "axios";
import { getURLs } from "../urlConfig";
import StripeLogo from "../images/stripe.svg";
import PaypalLogo from "../images/paypal.svg";

const Checkout = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const [subscriptionAmount, setSubscriptionAmount] = useState();

  const handleChckboxClick = (e) => {
    if (e.target.name === "paypal" && e.target.checked) {
      setSelectedPaymentMethod("paypal");
    } else if (e.target.name === "stripe" && e.target.checked) {
      setSelectedPaymentMethod("stripe");
    } else if (!e.target.checked) {
      setSelectedPaymentMethod("");
    }
  };
  console.log(selectedPaymentMethod);
  useEffect(() => {
    axios
      .get(getURLs("subscription-amount"), { withCredentials: true })
      .then((res) => {
        setSubscriptionAmount(res?.data?.amount);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="flex flex-col items-center space-y-4 lg:space-y-0 space-x-0 lg:space-x-4 px-4 lg:px-16 xl:px-64 py-6">
      {/* left */}
      <div className="w-full max-w-xl flex flex-col space-y-4  border border-gray-100/2 shadow-md px-4 py-5">
        <h1 className="text-lg md:text-xl xl:text-2xl font-inter font-bold">
          Order Details
        </h1>

        <div className="flex items-center justify-between">
          <span className="font-inter font-medium text-sm md:text-base">
            Amount
          </span>
          <span className="font-inter font-semibold text-base md:text-lg">
            ${subscriptionAmount}
          </span>
        </div>
      </div>

      {/* right */}
      <div className="max-w-xl w-full flex flex-col items-start space-y-4 px-2 py-8 lg:h-72">
        <div className="flex items-center justify-between  w-full">
          {/* stripe selection */}

          <div className="flex items-center justify-center space-x-4">
            <input
              type="checkbox"
              checked={selectedPaymentMethod === "stripe"}
              name="stripe"
              onChange={(e) => handleChckboxClick(e)}
            />
            <img
              src={StripeLogo}
              alt="PayPal Logo"
              className="w-12 object-contain"
            />
          </div>
          {/* stripe */}
          {/* <!-- PayPal Logo --> */}
          <div className="flex items-center justify-center space-x-4">
            {/* <!-- PayPal Logo --> */}
            <input
              type="checkbox"
              checked={selectedPaymentMethod === "paypal"}
              name="paypal"
              onChange={(e) => handleChckboxClick(e)}
            />
            <img
              src={PaypalLogo}
              alt="PayPal Logo"
              className="w-20 object-contain"
            />
            {/* <!-- PayPal Logo --> */}
          </div>
          {/* <!-- PayPal Logo --> */}
        </div>

        {selectedPaymentMethod === "stripe" && (
          <div className="w-full mt-4">
            <StripeContainer
              selectedPaymentMethod={selectedPaymentMethod}
              handleChckboxClick={handleChckboxClick}
            />
          </div>
        )}

        {/* paypal */}
        {selectedPaymentMethod === "paypal" && (
          <div className="w-full mt-4">
            <PaypalCheckout
              selectedPaymentMethod={selectedPaymentMethod}
              handleChckboxClick={handleChckboxClick}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
