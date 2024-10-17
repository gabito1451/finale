import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Breadcrumb = ({ className }) => {
  const location = useLocation(); // Get current URL path
  const navigate = useNavigate();

  // Function to determine the active step based on the current path
  const getActiveStep = () => {
    if (location.pathname === "/SignUp") {
      return 1;
    } else if (location.pathname === "/Profile") {
      return 2;
    } else if (location.pathname === "/OTP") {
      return 3;
    }
    return 1; // Default step if no match
  };

  const activeStep = getActiveStep();

  // Handle step click for navigation
  const handleStepClick = (step) => {
    if (step === 1) {
      navigate("/SignUp");
    } else if (step === 2) {
      navigate("/Profile");
    } else if (step === 3) {
      navigate("/OTP");
    }
  };

  return (
    <div
      className={`flex items-center justify-center py-10 mt-3 font-Roboto space-x-2 ${className}`}
    >
      {/* Sign Up Step */}
      <Link
        to="/SignUp"
        className={`cursor-pointer text-nowrap text-[10px] md:text-[16px] ${
          activeStep === 1 ? "text-[#1a73e8]" : "text-gray-500"
        }`}
        onClick={() => handleStepClick(1)}
      >
        1. Sign up
      </Link>
      <span>{">"}</span>

      {/* Profile Details Step */}
      <Link
        to="/Profile"
        className={`cursor-pointer text-nowrap text-[10px] md:text-[16px] ${
          activeStep === 2 ? "text-[#1a73e8]" : "text-gray-500"
        }`}
        onClick={() => handleStepClick(2)}
      >
        2. Profile Details
      </Link>
      <span>{">"}</span>

      {/* Verification Step */}
      <Link
        to="/OTP"
        className={`cursor-pointer text-nowrap text-[10px]  md:text-[16px] ${
          activeStep === 3 ? "text-[#1a73e8]" : "text-gray-500"
        }`}
        onClick={() => handleStepClick(3)}
      >
        3. Verification
      </Link>
    </div>
  );
};

export default Breadcrumb;
