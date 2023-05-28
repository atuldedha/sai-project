import React from "react";
import courseData from "./staticData";
import CourseCard from "./CourseCard/CourseCard";

const CoursesSection = () => {
  return (
    <div className="flex flex-col px-4 lg:px-16 xl:px-64 items-center">
      <h1 className="text-xl lg:text-2xl xl:text-4xl text-blue4 font-inter font-semibold mb-10">
        Courses
      </h1>

      {/* course cards */}
      {/* dummy data */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {courseData.map((data) => (
          <CourseCard
            key={data.id}
            courseImage={data.image}
            courseName={data.courseName}
            noOfCourses={data.noOfCourses}
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
