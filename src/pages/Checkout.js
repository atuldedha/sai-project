import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { getURLs } from "../urlConfig";
import { UserContext } from "../context/user";
import SelectPaymentOption from "../components/SelectPaymentOption";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Checkout = () => {
  // user state
  const {
    state: { userInfo },
    updateUser,
  } = useContext(UserContext);

  // navigate state
  const navigate = useNavigate();

  // selected payment method state
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  // subscription amount state
  const [subscriptionAmount, setSubscriptionAmount] = useState();

  // loading state
  const [loading, setLoading] = useState(true);

  // subscription api error state
  const [amountError, setAmountError] = useState("");

  const handleChckboxClick = (e) => {
    if (e.target.name === "paypal" && e.target.checked) {
      setSelectedPaymentMethod("paypal");
    } else if (e.target.name === "stripe" && e.target.checked) {
      setSelectedPaymentMethod("stripe");
    } else if (!e.target.checked) {
      setSelectedPaymentMethod("");
    }
  };

  // check if user has previously logged in or not
  useEffect(() => {
    // if previously logged in then auto login using refresh endpoint
    const isPersist = JSON.parse(localStorage.getItem("persist"));

    if (!isPersist && !Object.keys(userInfo).length) {
      return navigate("/login");
    }

    if (!Object.keys(userInfo).length && isPersist) {
      setLoading(true);
      axios
        .get(getURLs("refresh-user"), { withCredentials: true })
        .then((res) => {
          if (res?.data) {
            const { foundUser } = res.data.user;
            updateUser({ ...foundUser, authToken: res.data.user.authToken });
            // getting the amount
            axios
              .get(getURLs("subscription-amount"), {
                headers: {
                  "auth-token": res.data.user.authToken,
                },
                withCredentials: true,
              })
              .then((res) => {
                setLoading(false);
                setSubscriptionAmount(res?.data?.amount);
              })
              .catch((err) => {
                if (
                  err?.response?.status === 400 ||
                  err?.response?.status === 401 ||
                  err?.response?.status === 500
                )
                  setAmountError(err?.response?.data?.message);
                console.log(err);
                setLoading(false);
              });
          }
        })
        .catch((err) => {
          navigate("/login");
        });
    }

    if (Object.keys(userInfo).length > 0 && !subscriptionAmount) {
      setLoading(true);
      axios
        .get(getURLs("subscription-amount"), {
          headers: {
            "auth-token": userInfo?.authToken,
          },
          withCredentials: true,
        })
        .then((res) => {
          setSubscriptionAmount(res?.data?.amount);
          setLoading(false);
        })
        .catch((err) => {
          if (
            err?.response?.status === 400 ||
            err?.response?.status === 401 ||
            err?.response?.status === 500
          )
            setAmountError(err?.response?.data?.message);
          setLoading(false);
          console.log(err);
        });
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>BrainJEE - Checkout</title>
      </Helmet>

      <div className="flex flex-col items-center space-y-4 lg:space-y-0 space-x-0 lg:space-x-4 px-4 lg:px-16 xl:px-64 py-6 lg:py-24">
        {/* left */}
        <div className="w-full max-w-xl flex flex-col space-y-4  border border-gray-100/2 shadow-md px-4 py-5">
          <h2 className="text-lg md:text-xl xl:text-2xl font-inter font-bold">
            Order Details
          </h2>

          <div className="flex items-center justify-between">
            <span className="font-inter font-medium text-sm md:text-base">
              Amount
            </span>
            <span className="font-inter font-semibold text-base md:text-lg">
              {loading
                ? "loading..."
                : amountError
                ? "Cannot fetch subscription amount"
                : `$ ${subscriptionAmount}`}
            </span>
          </div>
        </div>

        {/* right */}
        <SelectPaymentOption
          selectedPaymentMethod={selectedPaymentMethod}
          handleChckboxClick={handleChckboxClick}
          subscriptionAmount={subscriptionAmount}
        />
      </div>
    </>
  );
};

export default Checkout;
