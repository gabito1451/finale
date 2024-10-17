import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// Create validation schema using Yup
const schema = yup.object().shape({
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const ResetPasswordForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    let currentUser = JSON.parse(sessionStorage.getItem("troubledUser"));
    let db = JSON.parse(localStorage.getItem("gabDB"));
    let stagingData;
    let newDB;
    db.forEach((item) => {
      if (item.email == currentUser.email) {
        stagingData = item;
      }
    });
    newDB = db.filter((item) => item.email !== currentUser.email);
    localStorage.setItem(
      "gabDB",
      JSON.stringify([...newDB, { ...stagingData, ...data }])
    );
    toast.success("Password changed successfully!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      onClose: () => navigate("/SignIn"),
    });
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 pb-12 lg:px-8 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center font-Inter text-[25px] md:text-[32px] text-[#1565c0] font-bold leading-9 tracking-tight">
            Reset Password
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-bold font-Inter leading-6 text-gray-900"
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
                className="block text-sm font-bold font-Inter leading-6 text-gray-900"
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
                className="mt-10 flex w-full font-Roboto justify-center rounded-md bg-[#1a73e8] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:rounded-lg hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out "
              >
                ResetPassword
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ResetPasswordForm;
