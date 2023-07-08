import React, { useContext } from "react";
import SpecificationCard from "./SpecificationCard/SpecificationCard";
import { AppDataContext } from "../../context/appData";
import DotsImage from "../../images/dotsbg.png";
import SideBG from "../../images/sidesbg.png";

const SpecificationSection = () => {
  const {
    state: { appData },
  } = useContext(AppDataContext);
  return (
    <div
      className="relative flex flex-col items-center px-4 lg:px-16 xl:px-64 bg-bgColor bg-cover"
      style={{ backgroundImage: `url(${SideBG})` }}
    >
      {/* dotes image */}
      <img
        src={DotsImage}
        alt="side-dots"
        className="hidden md:inline absolute top-4 right-0 lg:right-10 xl:right-48"
      />

      <h2 className="font-inter font-semibold text-xl lg:text-2xl xl:text-4xl text-blue4 mb-10">
        Why choose <span className="text-blue7">Brainjee ?</span>
      </h2>

      {/* speicification cards */}
      {/* dummy data */}

      <div className="grid gap-4 grid-cols-1 md:grid-cols-3 z-10">
        {appData?.whyBrainjeeSectionData?.map((data, index) => (
          <SpecificationCard
            key={index}
            title={data.title}
            description={data.description}
            image={data.image}
          />
        ))}
      </div>
    </div>
  );
};

export default SpecificationSection;
