import React, { useContext, useRef } from "react";
import SubjectCard from "./SubjectCard/SubjectCard";
import ChevronLeft from "../../images/chevronLeftBlack.svg";
import ChevronRight from "../../images/chevronRightBlack.svg";
import { AppDataContext } from "../../context/appData";

const SubjectSection = ({ subjectTitle }) => {
  // app info context
  const {
    state: { appData },
  } = useContext(AppDataContext);

  const cardsContainerRef = useRef();
  const handleScrolllLeft = () => {
    cardsContainerRef.current.scrollLeft -=
      cardsContainerRef.current?.offsetLeft;
  };

  const handleScrollRight = () => {
    cardsContainerRef.current.scrollLeft +=
      cardsContainerRef.current?.offsetLeft;
  };

  return (
    <div className="flex flex-col items-center px-4 lg:px-16 xl:px-64 relative">
      {/* sub title can be passed through props */}
      <h2 className="font-bold font-inter text-xl lg:text-2xl xl:text-4xl text-blue4 mb-4">
        {subjectTitle}
      </h2>

      {/* subject suggested courses card */}
      {/* dummy data */}
      <div
        className="w-full h-full grid grid-cols-5 gap-4 overflow-x-scroll transition-all duration-100 ease-in-out translate-x-2 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-blue-300/80 scrollbar-none"
        ref={cardsContainerRef}
      >
        {appData?.subjectSectionData?.map((data, index) => (
          <SubjectCard
            key={index}
            courseImage={data?.courseImage}
            courseDetail={data.courseName}
            coursePrice={data.courseType}
            noOfCourses={data.noOfCourses}
            courseDuration={data.courseDuration}
          />
        ))}
      </div>

      {/* slider buttons */}

      <div
        className="absolute left-10 -bottom-24 xl:left-56 xl:top-1/3 w-14 h-14 lg:h-20 lg:w-20 rounded-full flex items-center justify-center bg-white shadow-shadow3"
        onClick={handleScrolllLeft}
      >
        <img src={ChevronLeft} alt="left" className="" />
      </div>

      <div
        className="absolute right-6 -bottom-24 xl:right-56 xl:top-1/3 w-14 h-14 lg:h-20 lg:w-20 rounded-full flex items-center justify-center bg-white shadow-shadow3"
        onClick={handleScrollRight}
      >
        <img src={ChevronRight} alt="left" className="" />
      </div>
    </div>
  );
};

export default SubjectSection;
