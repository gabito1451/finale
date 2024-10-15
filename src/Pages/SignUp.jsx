import React from "react";
import Carousel from "../Components/Carousel";
import Forms from "../Components/Forms";

const SignUp = () => {
  return (
    <div className="container">
      <Carousel children={<Forms />} />
    </div>
  );
};

export default SignUp;
