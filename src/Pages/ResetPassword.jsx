import React from "react";
import ResetPasswordForm from "../Components/ResetPasswordForm";
import Carousel from "../Components/Carousel";

const ResetPassword = () => {
  return (
    <div className="container">
      <Carousel children={<ResetPasswordForm />} />
    </div>
  );
};

export default ResetPassword;
