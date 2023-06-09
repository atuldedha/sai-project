import React from "react";

// course card compoennt
const CourseCard = ({ courseImage, courseName, noOfCourses }) => {
  return (
    <div className="bg-white px-4 py-4 rounded-lg flex items-center space-x-4">
      <img
        src={courseImage}
        alt="courseImg"
        className="w-24 h-24 lg:w-32 lg:h-32 object-contain"
      />
      <div className="flex flex-col space-y-2">
        <span className="font-inter font-semibold text-sm md:text-base text-blue6">
          {courseName}
        </span>
        <span className="font-montserrat font-medium text-xs md:text-sm text-blue5">
          {noOfCourses}
        </span>
      </div>
    </div>
  );
};

export default CourseCard;
