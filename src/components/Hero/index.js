import React from "react";
import Chevron from "../../images/chevronDownWhite.svg";
import Search from "../../images/search.svg";
import Mic from "../../images/mic.svg";

const Hero = () => {
  return (
    <div className="h-full bg-blue-700 py-10 px-64">
      {/* display bar */}
      <div className="w-full xl:h-[600px] mx-auto overflow-y-scroll py-3 px-3 bg-white rounded-[20px] mb-4">
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
        <div className="z-10 relative flex items-center justify-between space-x-4 px-2 py-3 bg-white rounded-lg">
          {/* button */}
          <button
            className="flex items-center space-x-2 py-3 px-2 font-raleway font-bold text-sm text-white rounded-lg"
            style={{
              background:
                "linear-gradient(90deg, rgba(79, 172, 254, 0.6) 0%, rgba(0, 242, 254, 0.6) 100%), #2898FF",
            }}
          >
            Categories
            <img
              src={Chevron}
              alt="down"
              className="ml-2 w-[8px] h-[18px] object-contain"
            />
          </button>

          {/* input */}
          <input
            type="text"
            placeholder="Ask me anything"
            className="flex-grow border-none outline-none text-base placeholder:text-xs font-inter font-normal text-black bg-transparent"
          />

          {/* icons */}
          <div className="flex items-center space-x-3 h-full">
            <img
              src={Search}
              alt="search"
              className="w-[35px] h-[35px] object-contain cursor-pointer"
            />

            <div className="border-l-[1px] border-l-blue3 w-2 h-full" />

            <img
              src={Mic}
              alt="mic"
              className="w-[35px] h-[35px] object-contain cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
