import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";

// Create validation schema using Yup
const schema = yup.object().shape({
  fullname: yup.string().required("Full name is required"),
  phoneNumber: yup
    .string()
    .required("Phone number is required")
    .matches(/^[0-9]+$/, "Phone number is not valid")
    .min(10, "Phone number should be at least 10 digits"),
  country: yup.string().required("Please select a country"),
});

function generateOTP() {
  return Math.floor(1000 + Math.random() * 9000);
}

const ProfileDetailForm = () => {
  const navigate = useNavigate();
  // Initialize React Hook Form with Yup resolver
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    let currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
    console.log(currentUser);
    let db = JSON.parse(localStorage.getItem("gabDB"));

    let stagingData;
    let newDB;
    db.forEach((item) => {
      if (item.email == currentUser.email) {
        stagingData = item;
      }
    });
    newDB = db.filter((item) => item.email !== currentUser.email);
    let otp = generateOTP();
    alert(`Here's your OTP: ${otp}`);
    localStorage.setItem(
      "gabDB",
      JSON.stringify([...newDB, { ...stagingData, ...data, otp: otp }])
    );
    navigate("/OTP");
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 pb-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-5 text-center text-[32px] text-[#1565c0] font-bold leading-9 tracking-tight">
            Profile Details
          </h2>
          <h2 className="mt-5 text-center font-normal text-[12px] leading-2 tracking-tight text-[#000000]">
            Sign up quickly and easily, Provide your email, Create a secure
            password and Complete your profile to get started.
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
            {/* Fullname Input */}
            <div>
              <label
                htmlFor="fullname"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Fullname
              </label>
              <div className="mt-2">
                <input
                  id="fullname"
                  name="fullname"
                  type="text"
                  placeholder="Enter your Fullname"
                  autoComplete="fullname"
                  {...register("fullname")}
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                />
                {/* Error message for fullname */}
                {errors.fullname && (
                  <p className="text-red-500 text-[12px]">
                    {errors.fullname.message}
                  </p>
                )}
              </div>
            </div>

            {/* Phone Number Input */}
            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Phone Number
              </label>
              <div className="mt-2">
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="text"
                  placeholder="Enter Your Phone Number"
                  autoComplete="phone-number"
                  {...register("phoneNumber")}
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                />
                {/* Error message for phone number */}
                {errors.phoneNumber && (
                  <p className="text-red-500 text-[12px]">
                    {errors.phoneNumber.message}
                  </p>
                )}
              </div>
            </div>

            {/* Country Select */}
            <div>
              <label
                htmlFor="country"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Country
              </label>
              <div className="mt-2">
                <select
                  id="country"
                  name="country"
                  {...register("country")}
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                >
                  <option value="">Select your country</option>
                  <option value="United States">United States</option>
                  <option value="Canada">Canada</option>
                  <option value="Mexico">Mexico</option>
                </select>
                {/* Error message for country */}
                {errors.country && (
                  <p className="text-red-500 text-[12px]">
                    {errors.country.message}
                  </p>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="mt-10 flex w-full justify-center rounded-md bg-[#1a73e8] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm   hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out"
              >
                Continue
              </button>
            </div>
          </form>

          <p className="mt-5 text-center text-sm text-gray-500">
            Already have an account?
            <Link
              to="/SignIn"
              className="font-semibold leading-6 text-[#1a73e8] hover:text-indigo-500"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default ProfileDetailForm;
