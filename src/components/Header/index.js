import React, { useState } from "react";
import Logo from "../../images/logo.svg";
import ShuttleImage from "../../images/shuttle.png";
import MenuIcon from "../../images/menuIcon.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleNavigation = () => {
    navigate("/login");
  };
  return (
    <div className="flex items-center px-4 lg:px-16 xl:px-64 py-6 justify-between bg-white">
      {/* logo */}

      <div className="flex items-center space-x-2">
        <img src={Logo} alt="logo" className="h-7 lg:h-12 object-contain" />
        {/* <h1 className="font-inter font-medium tracking-wide text-xl text-black uppercase">
          Brainjee
        </h1> */}
      </div>

      {/* mobile menu icon */}
      <div
        className="p-4 flex items-center justify-center lg:hidden rounded-lg"
        style={{
          background:
            "linear-gradient(90deg, rgba(79, 172, 254, 0.6) 0%, rgba(0, 242, 254, 0.6) 100%), #2898FF",
        }}
        onClick={toggleMenu}
      >
        <img src={MenuIcon} alt="menu" className="" />
      </div>

      {/* mobile menu */}
      {menuOpen && (
        <>
          <div
            className="p-4 absolute right-5 top-5 z-20 flex items-end justify-center lg:hidden rounded-lg"
            style={{
              background:
                "linear-gradient(90deg, rgba(79, 172, 254, 0.6) 0%, rgba(0, 242, 254, 0.6) 100%), #2898FF",
            }}
            onClick={toggleMenu}
          >
            <img src={MenuIcon} alt="menu" className="" />
          </div>
          <div
            className={`p-4 absolute top-0 left-0 right-0 z-10  bg-blue12 flex flex-col items-center justify-center lg:hidden rounded-bl-lg rounded-br-lg w-full space-y-6`}
          >
            <div className="flex flex-col items-center space-y-6">
              <button
                className="flex items-center py-3 px-8 rounded-[90px] font-raleway text-sm text-white font-bold cursor-pointer"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(79, 172, 254, 0.6) 0%, rgba(0, 242, 254, 0.6) 100%), #2898FF",
                }}
              >
                <img src={ShuttleImage} alt="shuttle" className="mr-2" />
                Get Started
              </button>
              <span
                className="text-sm font-semibold font-inter text-white cursor-pointer"
                onClick={handleNavigation}
              >
                Log in
              </span>
            </div>
            <span className="text-sm font-inter text-white font-medium cursor-pointer">
              Key
            </span>
            <span className="text-sm font-inter text-white font-medium cursor-pointer">
              Documentation
            </span>
            <span className="text-sm font-inter text-white font-medium cursor-pointer">
              Features
            </span>
            <span className="text-sm font-inter text-white font-medium cursor-pointer">
              Pricing
            </span>
            <span className="text-sm font-inter text-white font-medium cursor-pointer">
              Contact us
            </span>
          </div>
        </>
      )}
      {/* middle nav tabs */}
      <div className="hidden lg:flex items-center space-x-6">
        <span className="text-sm font-inter text-blue1 font-medium cursor-pointer">
          Key
        </span>
        <span className="text-sm font-inter text-blue1 font-medium cursor-pointer">
          Documentation
        </span>
        <span className="text-sm font-inter text-blue1 font-medium cursor-pointer">
          Features
        </span>
        <span className="text-sm font-inter text-blue1 font-medium cursor-pointer">
          Pricing
        </span>
        <span className="text-sm font-inter text-blue1 font-medium cursor-pointer">
          Contact us
        </span>
      </div>

      {/* join button */}
      <div className="hidden lg:flex items-center space-x-4">
        <span
          className="text-sm font-semibold font-inter text-blue2 cursor-pointer"
          onClick={handleNavigation}
        >
          Log in
        </span>
        <button
          className="flex items-center py-3 px-8 rounded-[90px] font-raleway text-sm text-white font-bold cursor-pointer"
          style={{
            background:
              "linear-gradient(90deg, rgba(79, 172, 254, 0.6) 0%, rgba(0, 242, 254, 0.6) 100%), #2898FF",
          }}
        >
          <img src={ShuttleImage} alt="shuttle" className="mr-2" />
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Header;
