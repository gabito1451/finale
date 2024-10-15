import React from "react";
import SignInForm from "../Components/SignInForm";
import Carousel from "../Components/Carousel";
const SignIn = () => {
  return (
    <div className="container">
      <Carousel children={<SignInForm />} />
    </div>
  );
};

export default SignIn;
