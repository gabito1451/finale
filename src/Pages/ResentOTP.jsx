import React from "react";
import Carousel from "../Components/Carousel";
import ResentOtp from "../Components/ResentOtp";

const ResentOTP = () => {
  return (
    <div className="container">
      <Carousel children={<ResentOtp />} />
    </div>
  );
};

export default ResentOTP;
