import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import Breadcrumbs from "./BreadCrumbs";

// Create validation schema using Yup
const schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const Forms = () => {
  const navigate = useNavigate();
  // Initialize React Hook Form with Yup resolver
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    // Check if gabDB doesn't exist or is null/undefined
    if (
      localStorage.getItem("gabDB") == undefined ||
      localStorage.getItem("gabDB") == null
    ) {
      // Initialize gabDB with the first data entry wrapped in an array
      localStorage.setItem("gabDB", JSON.stringify([{ ...data }]));
    } else {
      // Retrieve existing data from localStorage
      let res = JSON.parse(localStorage.getItem("gabDB"));

      // Add new data object to the existing array
      localStorage.setItem("gabDB", JSON.stringify([...res, { ...data }]));
    }

    // Store the current user data in sessionStorage
    sessionStorage.setItem(
      "currentUser",
      JSON.stringify({
        email: data.email,
        password: data.password,
      })
    );

    // Reset form fields and navigate to the Profile page
    reset();
    navigate("/Profile");
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 pb-12 lg:px-8 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Breadcrumbs className="" />
          <h2 className="mt-5 text-center font-Inter text-[25px] md:text-[32px] text-[#1565c0] font-bold leading-9 tracking-tight">
            Create your Account
          </h2>
          <h2 className="mt-5 text-center font-Inter font-normal text-[12px] leading-2 tracking-tight text-[#000000]">
            Sign up quickly and easily, Provide your email, Create a secure
            <br /> password and Complete your profile to get started.
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-2 font-Inter"
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold  leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  autoComplete="email"
                  {...register("email")}
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                />
              </div>
              {/* Error message for email */}
              {errors.email && (
                <p className="text-red-500 text-[12px]">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Create a secure password"
                  autoComplete="current-password"
                  {...register("password")}
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                />
              </div>
              {/* Error message for password */}
              {errors.password && (
                <p className="text-red-500 text-[12px]">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Confirm Password
              </label>
              <div className="mt-2">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  autoComplete="current-password"
                  {...register("confirmPassword")}
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                />
              </div>
              {/* Error message for confirm password */}
              {errors.confirmPassword && (
                <p className="text-red-500 text-[12px]">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            <div>
              <button
                type="submit"
                className="mt-10 flex w-full font-[Roboto] justify-center rounded-md bg-[#1a73e8] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:rounded-lg hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out "
              >
                Continue
              </button>
            </div>
          </form>

          <p className="mt-20 text-center text-sm text-gray-500">
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

export default Forms;
