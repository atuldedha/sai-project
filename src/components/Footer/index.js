import React from "react";
import Logo from "../../images/logo.svg";
import MailIcon from "../../images/mailIcon.svg";
import PlayStoreLogo from "../../images/playStoreLogo.svg";
import AppStoreLogo from "../../images/appStoreLogo.svg";
import PhoneIcon from "../../images/phoneIcon.svg";

const Footer = () => {
  return (
    <div className="flex flex-col px-4 lg:px-16 xl:px-64 pb-8 lg:pb-32 bg-bgColor2">
      {/* top */}
      <div className="flex justify-between mb-4 lg:mb-20">
        {/* left */}
        <div className="flex flex-col items-center lg:items-start w-full lg:w-1/4">
          <img
            src={Logo}
            alt="logo"
            className="w-28 lg:w-32 object-contain mb-5"
          />

          <span className="font-poppins font-semibold text-sm text-blue4 block mb-2">
            About Brainjee
          </span>
          <p className="font-poppins font-normal text-sm text-gray3 text-center lg:text-start black mb-4 lg:mb-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>

        {/* middle */}
        <div className="hidden lg:flex items-start space-x-8 w-1/2 justify-center">
          {/* 1 row */}
          <div className="flex flex-col space-y-4">
            <span className="font-inter font-semibold text-sm text-blue4 block">
              Company
            </span>
            <span className="font-poppins font-normal text-xs text-blue11 block">
              Home
            </span>
            <span className="font-poppins font-normal text-xs text-blue11 block">
              About us
            </span>
            <span className="font-poppins font-normal text-xs text-blue11 block">
              Growers
            </span>
            <span className="font-poppins font-normal text-xs text-blue11 block">
              Merchant
            </span>
            <span className="font-poppins font-normal text-xs text-blue11 block">
              Contact
            </span>
          </div>

          {/* 2 row */}
          <div className="flex flex-col space-y-4">
            <span className="font-inter font-semibold text-sm text-blue4 block">
              Community
            </span>
            <span className="font-poppins font-normal text-xs text-blue11 block">
              Facebook
            </span>
            <span className="font-poppins font-normal text-xs text-blue11 block">
              Linkedin
            </span>
            <span className="font-poppins font-normal text-xs text-blue11 block">
              Instagram
            </span>
            <span className="font-poppins font-normal text-xs text-blue11 block">
              Twitter
            </span>
          </div>

          {/* 3 row */}
          <div className="flex flex-col space-y-4">
            <span className="font-inter font-semibold text-sm text-blue4 block">
              Help
            </span>
            <span className="font-poppins font-normal text-xs text-blue11 block">
              Facebook
            </span>
            <span className="font-poppins font-normal text-xs text-blue11 block">
              Linkedin
            </span>
            <span className="font-poppins font-normal text-xs text-blue11 block">
              Instagram
            </span>
          </div>
        </div>

        {/* right */}
        <div className="hidden lg:flex flex-col items-start w-1/4">
          <span className="font-inter font-semibold text-base text-blue4 block mb-2">
            Get the Brainjee App
          </span>
          <div className="flex items-center space-x-2 mb-10">
            {/* google button */}
            <div className="flex items-center px-1 bg-black rounded-md py-1">
              <img src={PlayStoreLogo} alt="playstore" className="mr-1" />
              <div className="flex flex-col">
                <span className="uppercase text-white text-[8px]">
                  Get it on
                </span>
                <span className="uppercase text-white text-[10px]">
                  Google Play
                </span>
              </div>
            </div>

            {/* apple button */}
            <div className="flex items-center px-1 bg-black rounded-md py-1">
              <img src={AppStoreLogo} alt="playstore" className="mr-1" />
              <div className="flex flex-col">
                <span className="uppercase text-white text-[8px]">
                  Download on the
                </span>
                <span className="uppercase text-white text-[10px]">
                  App Store
                </span>
              </div>
            </div>
          </div>

          <span className="font-inter font-semibold text-sm text-blue4 block mb-4">
            News letter
          </span>

          <div className="flex items-center justify-between border-b border-b-gray2 w-full">
            <input
              placeholder="Enter your email address"
              className="flex-grow bg-transparent placeholder:text-blue11 text-blue11 text-xs font-poppins font-normal border-none outline-none py-2 px-1"
            />
            <img src={MailIcon} alt="mailIcon" className="" />
          </div>
        </div>
      </div>

      {/* bottom */}
      <div className="flex flex-col space-y-8 lg:space-0 lg:flex-row justify-between items-center">
        {/* left */}
        <div className="flex space-x-2 items-center lg:w-1/4">
          <img src={MailIcon} alt="mail" className="" />
          <span className="font-inter font-medium text-blue11 opacity-60 text-xs lg:text-sm">
            contact@lift.agency
          </span>
        </div>

        {/* middle */}
        <div className="flex items-center space-x-2 lg:w-1/2 lg:px-14">
          <img src={PhoneIcon} alt="phone" className="" />
          <span className="underline underline-offset-8 font-inter font-medium text-blue11 text-xs lg:text-sm">
            (123) 456-7890
          </span>
        </div>

        {/* right */}
        <div className="flex items-center lg:w-1/4">
          <span className="font-inter font-medium text-blue11 opacity-60 text-xs lg:text-sm">
            © 2023 Web Design All rights reserved.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
