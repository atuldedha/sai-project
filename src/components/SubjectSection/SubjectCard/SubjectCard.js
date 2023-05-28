import React from "react";
import DoubleCheck from "../../../images/doubleCheckBlue.svg";

// custom subject card component
const SubjectCard = ({
  courseImage,
  coursePrice,
  courseDetail,
  noOfCourses,
  courseDuration,
}) => {
  return (
    <div className="flex flex-col p-4 bg-white w-64 lg:w-[300px] shadow-shadow1 rounded-lg mb-6">
      {/* course Image */}
      <img
        src={courseImage}
        alt="courseImg"
        className="w-full h-52 lg:h-64 object-cover rounded-xl mb-4"
      />
      {/* course price text */}
      <span className="font-montserrat font-medium text-xs text-blue5 uppercase block mb-1">
        {coursePrice}
      </span>
      {/* course details text */}
      <p className="font-montserrat font-semibold text-sm lg:text-base text-blue6 mb-4">
        {courseDetail}
      </p>

      <div className="w-full border-b border-b-blue3 border-dashed mb-4 opacity-20" />

      {/* course time details */}
      <div className="flex items-center space-x-2 lg:space-x-4 mb-6">
        <div className="flex items-center justify-center rounded-full bg-grayBg w-11 h-11">
          <img src={DoubleCheck} alt="check" className="" />
        </div>

        <span className="text-black1 font-montserrat font-medium text-xs lg:text-sm">
          {noOfCourses} Courses
        </span>

        <div className="h-3 border-l border-l-blue3" />

        <span className="text-blue5 font-montserrat font-medium text-xs lg:text-sm">
          {courseDuration}
        </span>
      </div>

      {/* button */}
      <button className="border w-max px-4 py-3 border-blue5 rounded-[90px] font-montserrat font-medium text-blue6 text-sm lg:text-base">
        Learning Path
      </button>
    </div>
  );
};

export default SubjectCard;
