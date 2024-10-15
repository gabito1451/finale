import React from "react";
import Otp from "../Components/Otp";
import Carousel from "../Components/Carousel";

const OTP = () => {
  return (
    <div className="container">
      <Carousel children={<Otp />} />
    </div>
  );
};

export default OTP;
