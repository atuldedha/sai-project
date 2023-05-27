import React from "react";
import SpecificationCard from "./SpecificationCard/SpecificationCard";
import specifications from "./staticData";

const SpecificationSection = () => {
  return (
    <div className="flex flex-col items-center px-64">
      <h1 className="font-inter font-semibold text-4xl text-blue4 mb-10">
        Why choose <span className="text-blue7">Brainjee ?</span>
      </h1>

      {/* speicification cards */}
      {/* dummy data */}

      <div className="grid gap-4 grid-cols-3">
        {specifications?.map((data) => (
          <SpecificationCard
            key={data.id}
            title={data.heading}
            description={data.description}
            image={data.image}
          />
        ))}
      </div>
    </div>
  );
};

export default SpecificationSection;
