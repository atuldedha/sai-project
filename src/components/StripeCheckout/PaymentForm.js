import React, { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { getURLs } from "../../urlConfig";
import PaymentSuccessfulModal from "../../modal/PaymentSuccessfulModal";
import { useNavigate } from "react-router-dom";

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

const PaymentForm = ({ amount }) => {
  // navigate state
  const navigate = useNavigate();
  // show payment success modal state
  const [showModal, setShowModal] = useState(false);
  // error state
  const [error, setError] = useState("");

  // stripe state
  const stripe = useStripe();
  // elements state(card elem state provided by stripe)
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!stripe && !elements) {
      return;
    }

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
          showModal(true);
        } else {
          showModal(false);
        }
      } catch (error) {
        if (
          error?.response?.status === 400 ||
          error?.response?.status === 401 ||
          error?.response?.status === 500
        )
          setError(error?.response?.data?.message);
        console.log(error);
        showModal(false);
      }
    } else {
      setError(error?.message);
      console.log(error);
    }
  };

  const handleClosePopup = () => {
    navigate("/", { replace: true });
    setShowModal(false);
  };

  return (
    <div className="flex flex-col items-center">
      <form onSubmit={handleSubmit} className="w-full rounded-lg">
        <CardElement
          className="border border-blue8 py-4 px-2 rounded-lg"
          options={CardOptions}
        />
        {error?.length > 0 && (
          <span className="font-inter font-medium text-red-500 text-xs sm:text-sm">
            {error}
          </span>
        )}
        <button
          className="w-full px-6 py-2 mt-10 text-white text-base bg-blue5 rounded-lg"
          type="submit"
          onClick={handleSubmit}
        >
          Pay
        </button>
      </form>

      {showModal && (
        <PaymentSuccessfulModal handleClosePopup={handleClosePopup} />
      )}
    </div>
  );
};

export default PaymentForm;
