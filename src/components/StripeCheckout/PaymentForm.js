import React, { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { getURLs } from "../../urlConfig";

// stripe styles
const iframeStyles = {
  base: {
    color: "#181818",
    fontSize: "18px",
    height: "50px",
    margin: "10px 0",
    border: "block",
    padding: "10px",
    iconColor: "#181818",
    "::placeholder": {
      color: "#636363",
      fontWeight: "100",
    },
  },
  invalid: {
    iconColor: "#C70000",
    color: "#C70000",
  },
  complete: {
    iconColor: "#FD2626",
  },
};

const CardOptions = {
  iconStyle: "solid",
  style: iframeStyles,
  hidePostalCode: true,
  placeholder: "Card Details",
};

const PaymentForm = () => {
  const [success, setSuccess] = useState(false);
  const amount = 10;

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post(getURLs("stripe-checkout"), {
          amount: amount * 100,
          id,
        });

        if (response.data?.success) {
          setSuccess(true);
        } else {
          setSuccess(false);
        }
        console.log(response);
      } catch (error) {
        console.log(error?.message);
        setSuccess(false);
      }
    } else {
      console.log(error?.message);
    }
  };

  return (
    <div className="flex flex-col items-center">
      {!success ? (
        <form
          onSubmit={handleSubmit}
          className="w-full px-4 py-5 rounded-lg max-w-2xl"
        >
          <CardElement
            className="border border-blue8 py-4 px-2 rounded-lg"
            options={CardOptions}
          />

          <button
            className="w-full px-10 py-4 mt-10 text-white text-base bg-blue5 rounded-lg"
            type="submit"
            onClick={handleSubmit}
          >
            Pay
          </button>
        </form>
      ) : (
        <h1 className="text-black text-2xl font-bold font-inter">
          Payment Successful
        </h1>
      )}
    </div>
  );
};

export default PaymentForm;
