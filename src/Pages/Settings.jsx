import React, { useState } from "react";
import {
  FaUser,
  FaBriefcase,
  FaClipboardList,
  FaCreditCard,
  FaShieldAlt,
} from "react-icons/fa";
import Profession from "../Components/Settings/Profession";
import PersonalInformation from "../Components/Settings/PersonalInformation";
import ServiceDetails from "../Components/Settings/ServiceDetails";
import PaymentInfomation from "../Components/Settings/PaymentInfomation";
import Security from "../Components/Settings/Security";

const Settings = () => {
  const [activeItem, setActiveItem] = useState("Personal Information");

  const menuItems = [
    { name: "Personal Information", icon: <FaUser /> },
    { name: "Professional Information", icon: <FaBriefcase /> },
    { name: "Service Details", icon: <FaClipboardList /> },
    { name: "Payment Information", icon: <FaCreditCard /> },
    { name: "Security/Privacy", icon: <FaShieldAlt /> },
    // { name: "Notification Settings", icon: <FaBell /> },
  ];

  // Function to render the appropriate component based on activeItem
  const renderComponent = () => {
    switch (activeItem) {
      case "Personal Information":
        return <PersonalInformation />;
      case "Professional Information":
        return <Profession />;
      case "Service Details":
        return <ServiceDetails />;
      case "Payment Information":
        return <PaymentInfomation />;
      case "Security/Privacy":
        return <Security />;
      default:
        return <PersonalInformation />;
    }
  };

  return (
    <div className="mt-2 px-6 flex flex-col md:flex-row gap-8 h-screen bg-white">
      {/* Menu Sidebar */}
      <div className="pt-10  border-r  w-full h-60 md:w-[350px] md:h-screen  overflow-y-auto hide-scrollbar">
        <ul className="grid grid-cols-3 grid-rows-2 gap-2 md:grid-cols-1 md:flex-col hide-scrollbar">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className={`flex items-center py-2 pr-2 cursor-pointer md:whitespace-nowrap ${
                activeItem === item.name
                  ? "text-[#1565c0] text-[16px] font-medium"
                  : "text-gray-400"
              }`}
              onClick={() => setActiveItem(item.name)}
            >
              {/* Hide the icon on small screens */}
              <span
                className={`text-[16px] sm:inline-block hidden ${
                  activeItem === item.name ? "text-[#1565c0]" : "text-gray-400"
                }`}
              >
                {item.icon}
              </span>
              <span className="ml-2 font-sans">{item.name}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Render the appropriate component */}
      <div className="w-full h-screen overflow-y-auto hide-scrollbar pb-36">
        {renderComponent()}
      </div>
    </div>
  );
};

export default Settings;
