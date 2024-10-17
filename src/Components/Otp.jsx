import { filter } from "framer-motion/client";
import React, { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Breadcrumbs from "./BreadCrumbs";

export default function Otp() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [user, setUser] = useState({ email: "johndoe@example.com" });

  useEffect(() => {
    try {
      let currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
      let mainUser;
      JSON.parse(localStorage.getItem("gabDB")).forEach((item) => {
        if (item.email == currentUser.email) {
          mainUser = item;
        }
      });
      setUser(mainUser);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="m-auto flex px-10 flex-col justify-center ">
      <Breadcrumbs />
      <h2 className="mt-5 text-center text-[25px] font-Inter md:text-[32px] text-[#1565c0] font-bold leading-9 tracking-tight">
        Email Verification
      </h2>
      <h2 className="mt-5 text-center font-normal font-Inter text-[12px] leading-2 tracking-tight text-[#000000]">
        An OTP has been sent to your email, Please enter OTP sent to{" "}
        {user.email}
      </h2>
      <div className="m-auto flex flex-col justify-center mt-10 ">
        <OtpInput
          value={otp}
          onChange={setOtp}
          inputStyle={{
            height: "50px",
            width: "40px",
            margin: "10px",
            border: "1px solid #1565c0",
            outline: "none",
          }}
          numInputs={4}
          renderInput={(props) => <input {...props} />}
        />
        <h1 className="px-3 text-[#1A73E8] font-normal text-[16px]">
          Resend OTP
        </h1>
      </div>

      <div className="md:px-10">
        <button
          type="submit"
          onClick={() => {
            if (otp == user.otp) {
              toast.success("OTP authenticated successfully!", {
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
              navigate("/SignIn");
            } else {
              toast.error("OTP authentication failed!", {
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
          }}
          className=" mt-10  flex w-full font-Roboto justify-center rounded-md bg-[#1a73e8] md:px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-smhover:rounded-lg hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out "
        >
          Sign in
        </button>
      </div>
    </div>
  );
}
