import React, { useState } from "react";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import axios from "axios";
import { getURLs } from "../../urlConfig";
import { useNavigate } from "react-router-dom";
import PaymentSuccessfulModal from "../../modal/PaymentSuccessfulModal";

const Buttons = ({ setShowModal, amount }) => {
  // error state
  const [error, setError] = useState("");
  // paypal button loading state hook provided by @paypal/react-paypal-js
  const [{ isPending, isRejected }] = usePayPalScriptReducer();

  // custom handler func. to create order on paypal
  const createOrder = async (data) => {
    try {
      return axios
        .post(`${getURLs("paypal-checkout")}/create-order`, {
          product: [{ description: "testing", price: amount }],
        })
        .then((res) => {
          return res?.data?.order?.id;
        })
        .catch((err) => {
          if (
            err?.response?.status === 400 ||
            err?.response?.status === 401 ||
            err?.response?.status === 500
          )
            setError(err?.response?.data?.message);
          console.log(err);
        });
    } catch (error) {
      console.log(error);
      setError(error?.message);
    }
  };

  // custom handler func. to check whether the payment is successful or not
  const onApprove = async (data) => {
    // Order is captured on the server and the response is returned to the browser
    return axios
      .post(`${getURLs("paypal-checkout")}/capture-paypal-order`, {
        orderID: data?.orderID,
      })
      .then((res) => {
        // res.json();
        if (res.status === 200) {
          setShowModal(true);
        }
      })
      .catch((err) => {
        if (
          err?.response?.status === 400 ||
          err?.response?.status === 401 ||
          err?.response?.status === 500
        )
          setError(err?.response?.data?.message);
        console.log(err);
      });
  };
  return (
    <div className="flex flex-col items-center">
      {error?.length > 0 && (
        <span className="font-inter font-medium text-xs sm:text-sm text-red-400 block mb-2">
          {error}
        </span>
      )}
      {isPending ? (
        <span className="text-center w-full text-black font-medium font-inter">
          Please wait, Paypal loading...
        </span>
      ) : isRejected ? (
        <span className="font-inter font-medium text-xs sm:text-sm text-red-400 block mb-2">
          Failed to load Paypal checkout
        </span>
      ) : (
        <PayPalButtons
          className="max-w-2xl w-full"
          createOrder={(data, actions) => createOrder(data, actions)}
          onApprove={onApprove}
        />
      )}
    </div>
  );
};

const PaypalCheckout = ({ amount }) => {
  // navigate state
  const navigate = useNavigate();
  // initial options for paypal
  const initialOptions = {
    "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID,
    currency: "USD",
    intent: "capture",
  };

  // payment sucessful modal state
  const [showModal, setShowModal] = useState(false);

  const handleClosePopup = () => {
    navigate("/", { replace: true });
    setShowModal(false);
  };

  return (
    <>
      <PayPalScriptProvider options={initialOptions}>
        {/* custom modal as paypal button state hook can only be used inside PaypalScriptProvider */}
        <Buttons setShowModal={setShowModal} amount={amount} />
      </PayPalScriptProvider>

      {showModal && (
        <PaymentSuccessfulModal handleClosePopup={handleClosePopup} />
      )}
    </>
  );
};

export default PaypalCheckout;
