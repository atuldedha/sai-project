import React, { useState } from "react";
import Logo from "../images/logo.png";
import { useNavigate } from "react-router-dom";
import { KeyIcon, UserIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import { getLoginUrls } from "../urlConfig";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const handleSignupNavigation = () => {
    navigate("/signup", { replace: true });
  };

  const handleInputChange = (name, e) => {
    setFormData({ ...formData, [name]: e.target.value });
  };

  const handleFormSubmit = () => {
    console.log(getLoginUrls("login"));
    axios
      .post(getLoginUrls("loginUrl"), {
        email: formData.email,
        password: formData.password,
      })
      .then((res) => {
        if (res?.data?.authToken) {
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex flex-col space-y-20 xl:space-y-0 xl:flex-row items-center">
      {/* image */}
      <div className="xl:basis-1/2 w-screen xl:w-full h-[20vh] xl:h-screen">
        <img
          src="https://brainjee.wisdmlabs.net/wp-content/uploads/2023/01/pexels-max-fischer-5211446-1.jpg"
          alt="loginImg"
          className="w-full h-full object-cover"
        />
      </div>

      {/* login form */}
      <div className="flex flex-col items-start px-4 xl:px-16 h-full w-full xl:basis-1/2 max-w-xl xl:max-w-3xl">
        <img src={Logo} alt="logo" className="h-5 lg:h-8 object-contain" />
        <div className="flex items-center justify-between w-full mt-4">
          <span className="font-inter font-semibold text-blue4 text-sm md:text-base xl:text-lg">
            Sign in
          </span>
          <span
            className="font-inter font-normal text-blue4 text-xs md:text-sm cursor-pointer"
            onClick={handleSignupNavigation}
          >
            Create an account
          </span>
        </div>

        {/*  email input */}
        <div className="flex items-center space-x-2 bg-white border border-gray-200 rounded-lg w-full px-2 mt-2">
          <UserIcon className="h-4 w-4" />
          <input
            className="flex-grow outline-none border-none px-2 py-2 text-sm lg:text-base placeholder:text-xs font-inter font-normal text-black bg-transparent"
            placeholder="Email Address"
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e)}
          />
        </div>

        {/* password input */}
        <div className="flex items-center space-x-2 bg-white border border-gray-200 rounded-lg w-full px-2 mt-2">
          <KeyIcon className="h-4 w-4" />
          <input
            className="flex-grow outline-none border-none px-2 py-2 text-sm lg:text-base placeholder:text-xs font-inter font-normal text-black bg-transparent"
            placeholder="Password"
            type="password"
            value={formData.password}
            onChange={(e) => handleInputChange("password", e)}
          />
        </div>

        <div className="w-full flex items-center justify-center">
          <button
            className="w-full px-2 py-2 mt-4 max-w-xl bg-blue5 text-white text-sm md:text-base xl:text-lg hover:bg-blue10 rounded-lg"
            onClick={handleFormSubmit}
          >
            Log in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
