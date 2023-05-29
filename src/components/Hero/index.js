import React, { useState } from "react";
import Chevron from "../../images/chevronDownWhite.svg";
import Search from "../../images/search.svg";
import Mic from "../../images/mic.svg";
import axios from "axios";

const Hero = () => {
  const categories = ["Math", "Science", "Social", "English"];
  const [showCategories, setShowCategories] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Math");
  const [loading, setLoading] = useState(false);
  const [searchButtonClicked, setSearchButtonClicked] = useState(false);
  const [searchError, setSearchError] = useState(null);
  const [answerGenerated, setAnswerGenereated] = useState(false);
  const [searchContent, setSearchContent] = useState("");
  const [formattedSearchContent, setFormattedSearchContent] = useState([]);

  const search = (e) => {
    e.preventDefault();
    setLoading(true);
    setSearchButtonClicked(true);
    axios
      .post(
        `http://54.81.171.95:5000/query`,
        {
          index_name: selectedCategory,
          query: searchQuery,
        },
        {
          headers: {
            Accept: "text/html",
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((res) => {
        return res?.data;
      })
      .then((html) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        const resultContent = doc.querySelector(".result-content");
        if (resultContent) {
          const content = resultContent.textContent;

          setFormattedSearchContent(
            content.charAt(content.length - 1) === "."
              ? content.slice(0, content.length - 1).split(".")
              : content.split(".")
          );
          setSearchContent(content);
        }
        setAnswerGenereated(true);
        setLoading(false);
        setSearchError(null);
      })
      .catch((err) => {
        setAnswerGenereated(false);
        setSearchError(err);
        setLoading(false);
      });
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
    setSearchButtonClicked(false);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSearchButtonClicked(false);
  };

  return (
    <div className="h-full bg-blue-700 py-10 px-4 lg:px-16 xl:px-64">
      {/* display bar */}
      <div className="w-full h-[250px] lg:h-[400px] xl:h-[600px] mx-auto overflow-y-scroll py-3 px-3 bg-white rounded-[20px] mb-4">
        {/* display search data */}
        <h4 className="font-inter font-semibold text-base xl:text-lg text-blue4">
          Your Query : {searchQuery}
        </h4>
        {searchButtonClicked ? (
          loading ? (
            <span className="text-blue7 font-inter font-normal text-sm xl:text-base">
              Please wait loading your query...
            </span>
          ) : !searchError ? (
            <div className="flex flex-col items-start">
              <span className="font-inter font-semibold text-base xl:text-lg text-blue7 mt-2">
                {answerGenerated && "Generated Answer"}
              </span>
              <ul className="list-disc pl-4 mt-2">
                {formattedSearchContent?.map((data, index) => (
                  <li
                    key={index}
                    className="font-medium font-inter text-sm xl:text-base text-blue4"
                  >
                    {data}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <span className="font-inter font-semibold text-red-600 text-base">
              {searchError?.message}
            </span>
          )
        ) : (
          ""
        )}
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
          <div
            className="relative flex items-center justify-between py-3 px-4 font-raleway font-bold text-sm lg:text-base text-white rounded-lg w-32 mt-2 lg:mt-0 cursor-pointer"
            style={{
              background:
                "linear-gradient(90deg, rgba(79, 172, 254, 0.6) 0%, rgba(0, 242, 254, 0.6) 100%), #2898FF",
            }}
            onClick={() => setShowCategories((prev) => !prev)}
          >
            <span>{selectedCategory}</span>
            <img
              src={Chevron}
              alt="down"
              className="ml-4 w-3 h-4 object-contain"
            />
            {showCategories && (
              <div className="absolute top-11 bg-blue7 left-0 right-0 flex flex-col items-center md:items-start rounded-lg">
                {categories.map((category, i) => (
                  <div
                    key={i}
                    className="px-2 pt-2 md:px-3 hover:bg-blue-500 w-full text-center md:text-start hover:rounded-lg"
                    onClick={() => handleCategoryChange(category)}
                  >
                    <span className="text-white font-inter font-normal text-sm md:text-base block mb-2">
                      {category}
                    </span>
                    {i !== categories.length - 1 && (
                      <div className="border-b border-b-slate-100 w-full" />
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          <form
            onSubmit={search}
            className="flex items-center flex-grow bg-white py-2 px-4 rounded-lg lg:py-0 lg:px-0 space-x-2"
          >
            {/* input */}
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleInputChange(e)}
              placeholder="Ask me anything"
              className="flex-grow border-none outline-none text-sm lg:text-base placeholder:text-xs font-inter font-normal text-black bg-transparent"
            />

            {/* icons */}
            <div className="flex items-center space-x-2 h-full">
              <img
                src={Search}
                alt="search"
                className="w-5 h-5 lg:w-8 lg:h-8 object-contain cursor-pointer"
                onClick={search}
              />

              <div className="border-l-[1px] border-l-blue3 h-4" />

              <img
                src={Mic}
                alt="mic"
                className="w-5 h-5 lg:w-8 lg:h-8 object-contain cursor-pointer"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
