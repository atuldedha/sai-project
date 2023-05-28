import React from "react";
import Chevron from "../../images/chevronDownWhite.svg";
import Search from "../../images/search.svg";
import Mic from "../../images/mic.svg";

const Hero = () => {
  return (
    <div className="h-full bg-blue-700 py-10 px-4 lg:px-16 xl:px-64">
      {/* display bar */}
      <div className="w-full h-[250px] lg:h-[400px] xl:h-[600px] mx-auto overflow-y-scroll py-3 px-3 bg-white rounded-[20px] mb-4">
        {/* display search data */}
      </div>

      {/* search bar */}
      <div className="w-full relative mx-auto rounded-xl py-3 px-4 space-x-2">
        {/* blur backgrund */}
        <div
          className="absolute top-0 bottom-0 left-0 right-0 bg-white opacity-50 z-[0] rounded-lg"
          style={{ background: "" }}
        />
        {/* search bar */}
        <div className="z-10 relative flex flex-col-reverse lg:flex-row lg:items-center justify-between lg:space-x-4 px-1 py-1 lg:px-2 lg:py-3 lg:bg-white rounded-lg">
          {/* button */}
          <button
            className="flex items-center py-3 px-4 font-raleway font-bold text-sm lg:text-base text-white rounded-lg w-max mt-2 lg:mt-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(79, 172, 254, 0.6) 0%, rgba(0, 242, 254, 0.6) 100%), #2898FF",
            }}
          >
            Categories
            <img
              src={Chevron}
              alt="down"
              className="ml-4 w-[8px] h-[18px] object-contain"
            />
          </button>

          <div className="flex items-center flex-grow bg-white py-2 px-4 rounded-lg lg:py-0 lg:px-0">
            {/* input */}
            <input
              type="text"
              placeholder="Ask me anything"
              className="flex-grow border-none outline-none text-sm lg:text-base placeholder:text-xs font-inter font-normal text-black bg-transparent"
            />

            {/* icons */}
            <div className="flex items-center space-x-3 h-full">
              <img
                src={Search}
                alt="search"
                className="w-5 h-5 lg:w-8 lg:h-8 object-contain cursor-pointer"
              />

              <div className="border-l-[1px] border-l-blue3 w-2 h-full" />

              <img
                src={Mic}
                alt="mic"
                className="w-5 h-5 lg:w-8 lg:h-8 object-contain cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
