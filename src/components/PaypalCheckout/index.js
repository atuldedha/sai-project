import React, { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import axios from "axios";
import { getURLs } from "../../urlConfig";

const PaypalCheckout = () => {
  const initialOptions = {
    "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID,
    currency: "USD",
    intent: "capture",
  };

  const [orderId, setOrderId] = useState();

  const createOrder = async (data) => {
    return axios
      .post(`${getURLs("paypal-checkout")}/create-order`, {
        product: [{ description: "testing", price: 10 }],
      })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setOrderId(data?.orderID);
        return data?.orderID;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onApprove = async (data) => {
    // Order is captured on the server and the response is returned to the browser
    return axios
      .post(`${getURLs("paypal-checkout")}/capture-paypal-order`, {
        orderID: data?.orderID,
      })
      .then((res) => {
        res.json();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <PayPalScriptProvider options={initialOptions}>
      <div className="flex flex-col items-center">
        <PayPalButtons
          className="max-w-2xl w-full"
          createOrder={(data, actions) => createOrder(data, actions)}
          onApprove={onApprove}
        />
      </div>
    </PayPalScriptProvider>
  );
};

export default PaypalCheckout;
