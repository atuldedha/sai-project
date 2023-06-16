import React from "react";
import StripeLogo from "../../images/stripe.svg";
import PaypalLogo from "../../images/paypal.svg";
import StripeContainer from "../StripeCheckout";
import PaypalCheckout from "../PaypalCheckout";

const SelectPaymentOption = ({
  selectedPaymentMethod,
  subscriptionAmount,
  handleChckboxClick,
}) => {
  return (
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
            amount={subscriptionAmount}
            selectedPaymentMethod={selectedPaymentMethod}
            handleChckboxClick={handleChckboxClick}
          />
        </div>
      )}

      {/* paypal */}
      {selectedPaymentMethod === "paypal" && (
        <div className="w-full mt-4">
          <PaypalCheckout
            amount={subscriptionAmount}
            selectedPaymentMethod={selectedPaymentMethod}
            handleChckboxClick={handleChckboxClick}
          />
        </div>
      )}
    </div>
  );
};

export default SelectPaymentOption;
