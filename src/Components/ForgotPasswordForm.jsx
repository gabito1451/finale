import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

// Create validation schema using Yup
const schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
});

const ForgotPasswordForm = () => {
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
    let db = JSON.parse(localStorage.getItem("gabDB"));
    db.forEach((item) => {
      if (item.email == data.email) {
        sessionStorage.setItem(
          "troubledUser",
          JSON.stringify({ email: data.email, otp: item.otp })
        );
        alert(item.otp);
        toast.success("Email found.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          onClose: () => navigate("/ResentOTP"),
        });
      } else {
        toast.error("Email not found. Sign up!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    });
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 pb-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-5 text-center text-[32px] text-[#1565c0] font-bold leading-9 tracking-tight">
            Forgot Password
          </h2>
          <h2 className="mt-5 text-center font-normal text-[12px] leading-2 tracking-tight text-[#000000]">
            An OTP will be sent to the provided email address to initiate
            password change
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
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
              <button
                type="submit"
                className="mt-10 flex w-full justify-center rounded-md bg-[#1a73e8] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-smhover:rounded-lg hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out "
              >
                Proceed
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgotPasswordForm;
