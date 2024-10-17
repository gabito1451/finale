import React from "react";
import ServiceCard from "../ui/ServiceCard";
import { FaBolt, FaPaintRoller, FaCouch, FaWrench } from "react-icons/fa"; // Example icons

const ServicesGrid = () => {
  const services = [
    { icon: <FaBolt color="#1565c0" size={24} />, title: "Electrical Service" },
    { icon: <FaPaintRoller color="#1565c0" size={24} />, title: "Painting" },
    { icon: <FaCouch color="#1565c0" size={24} />, title: "Furniture Repair" },
    { icon: <FaWrench color="#1565c0" size={24} />, title: "Plumbing" },
  ];

  return (
    <div className="bg-gray-100 font-Roboto py-10 px-10">
      <div
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 "
      >
        {services.map((service, index) => (
          <ServiceCard key={index} icon={service.icon} title={service.title} />
        ))}
      </div>
    </div>
  );
};

export default ServicesGrid;
