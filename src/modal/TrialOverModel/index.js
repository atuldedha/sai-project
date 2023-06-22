import React from "react";
import { useNavigate } from "react-router-dom";

// free searches over modal
const TrialOverModel = ({ handleClosePopup }) => {
  // navigate state for navigation
  const navigate = useNavigate();

  //   go to checkout page handler func.
  const goToCheckout = () => {
    navigate("/checkout");
    handleClosePopup();
  };

  return (
    <div className="fixed top-0 left-0 bottom-0 bg-black/70 z-[100] flex items-center justify-center h-screen w-screen">
      <div className="relative flex flex-col bg-white border border-gray-400 rounded-xl shadow-md max-w-xl w-full px-10 py-5">
        {/* close popup button */}
        <button
          className="absolute top-1 right-1 text-gray-900 text-xs px-2 py-1 text-center flex self-end border border-gray-600/60 items-center justify-center rounded-full"
          onClick={handleClosePopup}
        >
          X
        </button>

        {/* desc. */}
        <span className="text-sm md:text-base font-inter font-normal text-black1">
          Your free searches has been exhausted, Please subscribe to our yearly
          plan to search for more queries.
          {/* link */}
          <span
            className="text-blue5 font-inter font-medium text-sm md:text-base cursor-pointer"
            onClick={goToCheckout}
          >
            Click here to go to checkout page
          </span>
        </span>
      </div>
    </div>
  );
};

export default TrialOverModel;
