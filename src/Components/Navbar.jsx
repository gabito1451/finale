import React from "react";
import LoginButton from "../ui/LoginButton";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const Navbar = () => {
  // Function to handle smooth scroll
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#ffffff] ">
      <nav className=" container flex justify-between items-center px-[40px] shadow-md ">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <div className="hidden md:flex md:gap-10">
          <p
            className="text-[16px] text-[#121212] cursor-pointer hover:text-[#1a73ea] hover:translate-y-[-2px] transition-all duration-300 ease-in-out"
            onClick={() => handleScroll("image-section")} // Scroll to 'How it works' section
          >
            How it works
          </p>
          <p
            className="text-[16px] text-[#121212] cursor-pointer hover:text-[#1a73ea] hover:translate-y-[-2px] transition-all duration-300 ease-in-out"
            onClick={() => handleScroll("popular-services")} // Scroll to 'Services' section
          >
            Services
          </p>
          <p
            className="text-[16px] cursor-pointer text-[#121212] hover:text-[#1a73ea] hover:translate-y-[-2px] transition-all duration-300 ease-in-out"
            onClick={() => handleScroll("contact")} // You can define this section similarly
          >
            Contact us
          </p>
        </div>
        <Link to="/SignUp">
          <LoginButton>Login/Sign-Up</LoginButton>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
