import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import img3 from "../assets/img3.svg";
import img4 from "../assets/img4.svg";
import img5 from "../assets/img5.svg";

const Carousel = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: img3,
      text: "Connect with Trusted Professionals",
    },

    {
      image: img4,
      text: "Reliable and Verified Professionals",
    },
    {
      image: img5,
      text: "Reliable and Verified Professionals",
    },
  ];

  // Automatically change slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 2000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div>
      <Navbar />

      <div className="flex flex-col md:flex-row items-center justify-center h-[700px]">
        {/* Left side - Carousel */}
        <div className="hidden md:block md:relative  md:w-1/2 md:h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0 bg-[#0D47A14D]"
                aria-hidden="true"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-8">
                <h2 className="text-3xl md:text-4xl font-Inter font-bold mb-4">
                  {slide.text}
                </h2>
                <p className="text-lg font-bold font-sans">
                  Find Reliable Experts For All Your Home Service Needs, From
                  Repairs To Cleaning. Our Verified Professionals Are Ready To
                  Help You.
                </p>
              </div>
            </div>
          ))}

          {/* Dots for tracking slides */}
          <div className="absolute bottom-8 inset-x-0 flex justify-center space-x-2">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`block w-3 h-3 rounded-full transition-all ${
                  index === currentSlide ? "bg-blue-600" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right side - Form placeholder */}
        <div className="block w-full md:w-1/2 h-full bg-[#f3f3f3]flex items-center justify-center">
          <div>
            {/* Placeholder for form */}

            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
