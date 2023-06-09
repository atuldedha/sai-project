import React from "react";

// specification card component
const SpecificationCard = ({ title, description, image }) => {
  return (
    <div className="flex flex-col items-center lg:items-start py-4 px-5 bg-white rounded-xl shadow-shadow2">
      {/* spec image */}
      <div className="py-2 px-1 lg:py-4 lg:px-3 bg-blue10 rounded-xl flex items-center justify-center mb-5">
        <img src={image} alt="spec" className="" />
      </div>

      {/* spec title */}
      <span className="font-inter font-semibold text-sm md:text-base text-blue9 mb-2">
        {title}
      </span>

      {/* description */}
      <p className="font-inter font-normal text-xs sm:text-sm text-gray2">
        {description}
      </p>
    </div>
  );
};

export default SpecificationCard;
