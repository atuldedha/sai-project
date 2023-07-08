import React, { useContext, useState } from "react";
import ShuttleImage from "../../images/shuttle.png";
import MenuIcon from "../../images/menuIcon.svg";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/user";
import { AppDataContext } from "../../context/appData";

const Header = () => {
  const navigate = useNavigate();
  // app data context
  const {
    state: { appData },
  } = useContext(AppDataContext);

  // user data context
  const {
    state: { userInfo },
  } = useContext(UserContext);

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleNavigation = () => {
    if (Object.keys(userInfo).length) {
      navigate("/dashboard");
    } else navigate("/login");
  };

  return (
    <div className="flex items-center px-4 lg:px-16 xl:px-64 py-3 justify-between bg-white">
      {/* logo */}

      <div
        className="flex items-center space-x-2 cursor-pointer"
        onClick={() => navigate("/")}
      >
        {Object.keys(appData).length ? (
          <img
            src={appData?.logoUrl}
            alt="logo"
            className="w-44 h-14 lg:h-16 object-contain"
          />
        ) : (
          <span>Loading...</span>
        )}
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
                className="text-sm font-semibold font-inter text-white cursor-pointer whitespace-nowrap truncate max-w-xs"
                onClick={handleNavigation}
              >
                {Object.keys(userInfo)?.length
                  ? userInfo?.firstName + " " + (userInfo?.lastName || "")
                  : "Log in"}
              </span>
            </div>
            {appData?.headerNavValues?.map((nav, index) => (
              <span
                key={index}
                className="text-sm font-inter text-white font-medium cursor-pointer"
              >
                {nav?.text}
              </span>
            ))}
          </div>
        </>
      )}
      {/* middle nav tabs */}
      <div className="hidden lg:flex items-center justify-center space-x-6 flex-grow">
        {appData?.headerNavValues?.map((nav, index) => (
          <span
            key={index}
            className="text-sm font-inter text-blue1 font-medium cursor-pointer whitespace-nowrap truncate max-w-xs"
          >
            {nav?.text}
          </span>
        ))}
      </div>

      {/* join button */}
      <div className="hidden lg:flex items-center space-x-4">
        <span
          className="text-sm font-semibold font-inter text-blue2 cursor-pointer whitespace-nowrap truncate max-w-[70px]"
          onClick={handleNavigation}
        >
          {Object.keys(userInfo)?.length
            ? userInfo?.firstName + " " + (userInfo?.lastName || "")
            : "Log in"}
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
