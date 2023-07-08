import React, { useContext } from "react";
import ReviewCard from "./ReviewCard/ReviewCard";
import reviewData from "./staticData";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./reviewSection.css";
import { AppDataContext } from "../../context/appData";
import SideBG from "../../images/sidesbg.png";

const ReviewSection = () => {
  // appinfo context
  const {
    state: { appData },
  } = useContext(AppDataContext);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1300 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1300, min: 900 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 900, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div
      className="flex flex-col px-4 lg:px-16 xl:px-64 items-center bg-cover"
      style={{ backgroundImage: `url(${SideBG})` }}
    >
      <span className="font-manrope font-bold text-sm sm:text-base text-blue7 mb-4 block">
        Clients say
      </span>

      <h4 className="font-inter font-semibold text-xl lg:text-2xl xl:text-4xl text-center text-blue4 mb-10">
        {/* Clophi is your Azure Resource Center with hundreds of readily{" "}
        <span className="text-blue7">deployable Azure Resources</span> */}
        {appData?.reviewSectionData?.heading}
      </h4>

      {/* review cards */}
      {/* dummy data */}
      {Object.keys(appData).length && (
        <div className="w-full h-full">
          <Carousel
            showDots={true}
            swipeable={true}
            responsive={responsive}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {appData?.reviewSectionData?.data?.map((data, index) => (
              <ReviewCard
                key={index}
                message={data.reviewerMessage}
                rating={data.reviewerRating}
                name={data.reviewerName}
                image={reviewData[index]?.image}
              />
            ))}
          </Carousel>
        </div>
      )}
    </div>
  );
};

export default ReviewSection;
