import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "./PaymentForm";

const PUBLIC_STRIPE_KEY =
  "pk_test_51LvlDNSGgTbYKyarKg4sZyn5HEmrNKY8mGTBLRrwRaWK0PplnBXkgGMFrxGxzBv1Yn6eYujxomV18EGlGEsZwBdA00RuXqi3we";
const stripePromise = loadStripe(PUBLIC_STRIPE_KEY);

const StripeContainer = ({ amount }) => {
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm amount={amount} />
    </Elements>
  );
};

export default StripeContainer;
