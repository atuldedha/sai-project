import React from "react";

const PaymentSuccessfulModal = ({ handleClosePopup }) => {
  return (
    <div className="fixed top-0 left-0 bottom-0 bg-black/70 z-[100] flex items-center justify-center h-screen w-screen">
      <div className="relative flex flex-col bg-white border border-gray-400 rounded-xl shadow-md max-w-xl w-full px-10 py-5">
        <button
          className="absolute top-1 right-1 text-gray-900 text-xs px-2 py-1 text-center flex self-end border border-gray-600/60 items-center justify-center rounded-full"
          onClick={handleClosePopup}
        >
          X
        </button>

        <span className="font-bold font-inter text-green-500 text-sm sm:text-base text-center">
          Your Payment has been successfully received
        </span>
      </div>
    </div>
  );
};

export default PaymentSuccessfulModal;
