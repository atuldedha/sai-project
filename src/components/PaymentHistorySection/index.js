import React from "react";

const PaymentHistorySection = ({ userInfo }) => {
  return (
    <div className="flex flex-col items-center w-full">
      <h3 className="text-base lg:text-lg xl:text-xl text-blue4 font-inter font-semibold mb-2">
        Recent Payment History
      </h3>

      <div className="bg-white flex flex-col shadow-shadow2 px-6 md:px-8 lg:px-10 py-3 md:py-5 lg:py-6 rounded-lg space-y-4 h-64 overflow-auto w-full"></div>
    </div>
  );
};

export default PaymentHistorySection;
