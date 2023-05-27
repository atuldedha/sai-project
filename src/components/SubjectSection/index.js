import React, { useRef } from "react";
import SubjectCard from "./SubjectCard/SubjectCard";
import subjectData from "./staticData";
import ChevronLeft from "../../images/chevronLeftBlack.svg";
import ChevronRight from "../../images/chevronRightBlack.svg";

const SubjectSection = ({ subjectTitle }) => {
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
    <div className="flex flex-col items-center px-64 relative">
      <h1 className="font-bold font-inter text-lg text-blue4 mb-4">
        {subjectTitle}
      </h1>

      {/* subject suggested courses card */}
      {/* dummy data */}
      <div
        className="w-full h-full grid grid-cols-5 gap-4 overflow-scroll transition-all duration-100 ease-in-out translate-x-7"
        ref={cardsContainerRef}
      >
        {subjectData?.map((data) => (
          <SubjectCard
            key={data.key}
            courseImage={data.image}
            courseDetail={data.courseDetail}
            coursePrice={data.coursePrice}
            noOfCourses={data.noOfCourses}
            courseDuration={data.courseDuration}
          />
        ))}
      </div>

      {/* slider buttons */}

      <div
        className="absolute left-56 top-1/3 h-20 w-20 rounded-full flex items-center justify-center bg-white"
        onClick={handleScrolllLeft}
      >
        <img src={ChevronLeft} alt="left" className="" />
      </div>

      <div
        className="absolute right-56 top-1/3 h-20 w-20 rounded-full flex items-center justify-center bg-white"
        onClick={handleScrollRight}
      >
        <img src={ChevronRight} alt="left" className="" />
      </div>
    </div>
  );
};

export default SubjectSection;
