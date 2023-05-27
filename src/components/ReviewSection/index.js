import React from "react";
import ReviewCard from "./ReviewCard/ReviewCard";
import reviewData from "./staticData";

const ReviewSection = () => {
  return (
    <div className="flex flex-col px-64 items-center">
      <span className="font-manrope font-bold text-base text-blue7 mb-4 block">
        Clients say
      </span>

      <h1 className="font-inter font-semibold text-4xl text-center text-blue4 mb-10">
        Clophi is your Azure Resource Center with hundreds of readily{" "}
        <span className="text-blue7">deployable Azure Resources</span>
      </h1>

      {/* review cards */}
      {/* dummy data */}
      <div className="w-full h-full flex items-center gap-4 overflow-scroll transition-all duration-100 ease-in-out py-10">
        {reviewData?.map((data) => (
          <ReviewCard
            key={data.id}
            message={data.reviewerMessage}
            rating={data.reviewerRating}
            name={data.reviewerName}
            image={data.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
