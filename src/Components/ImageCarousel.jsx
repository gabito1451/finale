import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Optional for smooth animation
import img3 from "../assets/img3.svg";
import img4 from "../assets/img4.svg";
import img5 from "../assets/img5.svg";

const ImageCarousel = () => {
  const images = [img3, img4, img5];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [images.length]);

  return (
    <div className="relative w-full h-[300px] md:h-[500px] overflow-hidden">
      {/* Image display */}
      {images.map((image, index) => (
        <motion.div
          key={index}
          className={`absolute top-0 left-0 w-full h-full bg-no-repeat bg-center bg-cover`}
          style={{
            backgroundImage: `url(${image})`,
            opacity: currentIndex === index ? 1 : 0,
            maskImage: "radial-gradient(circle, white 60%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(circle, white 60%, transparent 100%)",
          }}
          animate={{ opacity: currentIndex === index ? 1 : 0 }}
          initial={{ opacity: 5 }}
          transition={{ duration: 0.8 }}
        />
      ))}
    </div>
  );
};

export default ImageCarousel;
