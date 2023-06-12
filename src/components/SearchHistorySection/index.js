import axios from "axios";
import React, { useEffect, useState } from "react";
import { getURLs } from "../../urlConfig";

const SearchHistorySection = ({ userInfo }) => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const searchHistoryReq = axios.create({
      headers: {
        "auth-token": userInfo?.authToken,
      },
    });

    searchHistoryReq
      .get(getURLs("search-history"), {
        userid: userInfo?._id,
      })
      .then((res) => {
        setHistory(res?.data?.userInfo?.searchItem);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userInfo?.authToken, userInfo?._id]);
  return (
    <div className="flex flex-col items-center w-full">
      <h3 className="text-base lg:text-lg xl:text-xl text-blue4 font-inter font-semibold mb-2">
        Recent Search
      </h3>

      <div className="bg-white flex flex-col shadow-shadow2 px-6 md:px-8 lg:px-10 py-3 md:py-5 lg:py-6 rounded-lg space-y-4 h-64 overflow-auto w-full">
        {history?.length > 0 ? (
          history?.map((data) => (
            <span className="list-item text-blue2 text-sm md:text-base xl:text-lg  font-inter font-medium">
              {data}
            </span>
          ))
        ) : (
          <span className="text-blue4 text-sm md:text-base xl:text-lg  font-inter font-medium flex items-center justify-center h-full">
            No Search history found
          </span>
        )}
      </div>
    </div>
  );
};

export default SearchHistorySection;
