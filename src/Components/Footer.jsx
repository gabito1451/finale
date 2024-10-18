import React from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-[#0d47a1] text-[#000000] p-8 ">
      <div className=" bg-white rounded-md max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-5 py-10">
        {/* Logo and Social Media Section */}
        <div className="space-y-8">
          {/* Logo */}
          <div className="text-xl font-bold">
            <img src={logo} alt="Logo" className="w-16" />
          </div>

          {/* Social Media Icons */}
          <div className="space-y-2">
            <p className="font-semibold font-Roboto text-[16px]">
              Social Media
            </p>
            <div className="flex space-x-4">
              {/* Add your social media icons here */}
              <a href="#" className="text-xl">
                <FaTwitter />
              </a>
              <a href="#" className="text-xl">
                <FaInstagram />
              </a>
              <a href="#" className="text-xl">
                <FaSquareFacebook />
              </a>
            </div>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="space-y-4 text-left font-Roboto">
          <p className="font-semibold font-Roboto text-[16px]">Quick Links</p>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline font-Roboto text-[14px]">
                How It works
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline font-Roboto text-[14px]">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline font-Roboto text-[14px]">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline font-Roboto text-[14px]">
                Terms of Use
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline font-Roboto text-[14px]">
                Support
              </a>
            </li>
          </ul>
        </div>

        {/* Support Center Section */}
        <div className="space-y-4 text-center md:text-left">
          <p className="font-semibold font-Roboto text-[16px]">
            Support Center
          </p>
          <div className="space-y-2">
            {/* Support phone numbers */}
            <p className="text-[14px] font-Roboto">+123 456 7890</p>
            <p className=" text-[14px] font-Roboto">+987 654 3210</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
