import React from "react";
import Avatar from "../../images/avatar1.svg";

const ProfileSection = ({ userInfo, searchesLeft }) => {
  return (
    <div className="w-full bg-white flex flex-col shadow-shadow2 px-4 md:px-6 lg:px-10 py-3 md:py-5 lg:py-6 rounded-lg space-y-4 h-full lg:h-[75%]">
      <div className="flex items-center justify-center">
        <img
          src={Avatar}
          alt="profile"
          className="h-24 object-contain rounded-full"
        />
      </div>
      <div className="flex items-center justify-between  space-x-4">
        <span className="text-sm font-inter font-medium text-blue6">
          First Name
        </span>
        <span className="text-sm font-semibold font-inter text-blue6">
          {userInfo?.firstName || "None"}
        </span>
      </div>
      <div className="flex items-center justify-between  space-x-4">
        <span className="text-sm font-inter font-medium text-blue6">
          Last Name
        </span>
        <span className="text-sm font-semibold font-inter text-blue6">
          {userInfo?.lastName || "None"}
        </span>
      </div>
      <div className="flex items-center justify-between  space-x-4">
        <span className="text-sm font-inter font-medium text-blue6">
          Email Address
        </span>
        <span className="text-sm font-semibold font-inter text-blue6">
          {userInfo?.email}
        </span>
      </div>

      <div className="flex items-center justify-between  space-x-4">
        <span className="text-sm font-inter font-medium text-blue6">
          Trial Searches Remaining
        </span>
        <span className="text-sm font-semibold font-inter text-blue6">
          {searchesLeft !== null && searchesLeft}
        </span>
      </div>
    </div>
  );
};

export default ProfileSection;
