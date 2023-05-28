import React from "react";
import EmptyStart from "../../../images/star.svg";
import quotationMark from "../../../images/quotation_marks.svg";

// review card component
const ReviewCard = ({ message, name, rating, image }) => {
  return (
    <div className="flex flex-col relative bg-white shadow-shadow4 rounded-ratingCardRounded px-4 py-5 ml-2 lg:ml-4">
      {/* quotation mark image */}
      <img
        src={quotationMark}
        alt="marks"
        className="absolute -top-5 right-5"
      />
      <div className="px-10 py-5">
        {/* reveiw message */}
        <p className="text-blue-8 text-sm font-normal font-montserrat mb-14">
          {message}
        </p>

        <div className="flex flex-col items-start">
          {/* ratings */}
          <div className="flex items-center space-x-4 mb-4">
            {Array.from(Array(5)).map((_, i) => (
              <img key={i} src={EmptyStart} alt="star" />
            ))}
          </div>

          <span className="text-gray1 text-normal font-normal font-montserrat">
            {name}
          </span>
        </div>

        {/* profile image */}

        <img
          src={image}
          alt="profile"
          className="absolute right-5 -bottom-9 w-20 h-20 rounded-full"
        />
      </div>
    </div>
  );
};

export default ReviewCard;
