import React from "react";

const CourseCard = ({ courseImage, courseName, noOfCourses }) => {
  return (
    <div className="bg-white px-4 py-4 rounded-lg flex items-center space-x-4">
      <img
        src={courseImage}
        alt="courseImg"
        className="w-32 h-32 object-contain"
      />
      <div className="flex flex-col space-y-2">
        <span className="font-inter font-semibold text-base text-blue6">
          {courseName}
        </span>
        <span className="font-montserrat font-medium text-sm text-blue5">
          {noOfCourses}
        </span>
      </div>
    </div>
  );
};

export default CourseCard;
