import React, { useState } from "react";
import Logo from "../images/logo.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { getLoginUrls } from "../urlConfig";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleLoginNavigation = () => {
    navigate("/login", { replace: true });
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (confirmPassword !== formData.password) {
      return alert("Passwords don't match");
    }

    axios
      .post(getLoginUrls("signupUrl"), {
        ...formData,
      })
      .then((res) => {
        if (res?.data?.authToken) {
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
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
      {/* <div className="mx-auto"> */}
      <div className="flex flex-col items-start px-4 xl:px-16 h-full w-full xl:basis-1/2 max-w-xl xl:max-w-3xl">
        <img src={Logo} alt="logo" className="h-5 lg:h-8 object-contain" />
        <div className="flex items-center justify-between w-full mt-4">
          <span className="font-inter font-semibold text-blue4 text-sm md:text-base xl:text-lg">
            Sign up
          </span>
          <span
            className="font-inter font-normal text-blue4 text-xs md:text-sm cursor-pointer"
            onClick={handleLoginNavigation}
          >
            Click here to <span className="text-blue5">Log in</span>
          </span>
        </div>

        {/*  username input */}
        <div className="flex items-center space-x-2 bg-white w-full px-2 mt-2">
          <span className="font-inter font-normal text-blue4 text-sm md:text-base basis-1/4">
            Username
          </span>
          <input
            className="flex-grow rounded-lg outline-none border border-gray-400 px-2 py-2 text-sm lg:text-base placeholder:text-xs font-inter font-normal text-black bg-transparent"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </div>

        {/* email input */}
        <div className="flex items-center space-x-2 bg-white w-full px-2 mt-2">
          <span className="font-inter font-normal text-blue4 text-sm md:text-base basis-1/4">
            Email
          </span>
          <input
            className="flex-grow rounded-lg outline-none border border-gray-400 px-2 py-2 text-sm lg:text-base placeholder:text-xs font-inter font-normal text-black bg-transparent"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>

        {/* first name */}
        <div className="flex items-center space-x-2 bg-white w-full px-2 mt-2">
          <span className="font-inter font-normal text-blue4 text-sm md:text-base basis-1/4">
            First Name
          </span>
          <input
            className="flex-grow rounded-lg outline-none border border-gray-400 px-2 py-2 text-sm lg:text-base placeholder:text-xs font-inter font-normal text-black bg-transparent"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </div>

        {/* last name */}
        <div className="flex items-center space-x-2 bg-white w-full px-2 mt-2">
          <span className="font-inter font-normal text-blue4 text-sm md:text-base basis-1/4">
            Last Name
          </span>
          <input
            className="flex-grow rounded-lg outline-none border border-gray-400 px-2 py-2 text-sm lg:text-base placeholder:text-xs font-inter font-normal text-black bg-transparent"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </div>

        {/* password */}
        <div className="flex items-center space-x-2 bg-white w-full px-2 mt-2">
          <span className="font-inter font-normal text-blue4 text-sm md:text-base basis-1/4">
            Password
          </span>
          <input
            className="flex-grow rounded-lg outline-none border border-gray-400 px-2 py-2 text-sm lg:text-base placeholder:text-xs font-inter font-normal text-black bg-transparent"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>

        {/* confirm password */}
        <div className="flex items-center space-x-2 bg-white w-full px-2 mt-2">
          <span className="font-inter font-normal text-blue4 text-sm md:text-base basis-1/4">
            Confirm Password
          </span>
          <input
            className="flex-grow rounded-lg outline-none border border-gray-400 px-2 py-2 text-sm lg:text-base placeholder:text-xs font-inter font-normal text-black bg-transparent"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <div className="w-full flex items-center justify-center">
          <button
            className="w-full px-2 py-2 mt-4 max-w-xl bg-blue5 text-white text-sm md:text-base xl:text-lg hover:bg-blue10 rounded-lg"
            onClick={handleSubmit}
          >
            Register
          </button>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Signup;
