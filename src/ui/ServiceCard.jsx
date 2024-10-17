import React from "react";

const ServiceCard = ({ icon, title }) => {
  return (
    <div
      className="bg-white p-6 shadow-md rounded-lg flex flex-col items-center justify-center hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out 
              ${className}`} "
    >
      <div className="bg-blue-100 p-4 rounded-full mb-4">{icon}</div>
      <h3 className="text-[#1a73e8] font-Roboto text-lg font-bold">{title}</h3>
    </div>
  );
};

export default ServiceCard;
