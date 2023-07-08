import React, { useContext } from "react";
import CourseCard from "./CourseCard/CourseCard";
import SideBG from "../../images/sidesbg.png";
import { AppDataContext } from "../../context/appData";

const CoursesSection = () => {
  const {
    state: { appData },
  } = useContext(AppDataContext);
  return (
    <div
      className="flex flex-col px-4 lg:px-16 xl:px-64 items-center bg-cover relative"
      style={{ backgroundImage: `url(${SideBG})` }}
    >
      <h2 className="text-xl lg:text-2xl xl:text-4xl text-blue4 font-inter font-semibold mb-10">
        Courses
      </h2>

      {/* course cards */}
      {/* dummy data */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {appData?.courseSectionData?.map((data, index) => (
          <CourseCard
            key={index}
            courseImage={data.image}
            courseName={data.title}
            noOfCourses={data.number}
          />
        ))}
      </div>

      {/* button */}
      <button
        className="rounded-[90px] border-none text-white text-sm md:text-base font-raleway font-bold w-max px-10 py-3"
        style={{
          background:
            "linear-gradient(90deg, rgba(79, 172, 254, 0.6) 0%, rgba(0, 242, 254, 0.6) 100%), #2898FF",
        }}
      >
        See more
      </button>
    </div>
  );
};

export default CoursesSection;
