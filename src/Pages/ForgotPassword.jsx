import React from "react";
import Carousel from "../Components/Carousel";
import ForgotPasswordForm from "../Components/ForgotPasswordForm";

const ForgotPassword = () => {
  return (
    <div className="container">
      <Carousel children={<ForgotPasswordForm />} />
    </div>
  );
};

export default ForgotPassword;
