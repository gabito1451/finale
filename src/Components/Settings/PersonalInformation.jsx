import React, { useState } from "react";
import avatar1 from "../../assets/avatar1.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  contactNumber: yup
    .string()
    .matches(/^[0-9]+$/, "Contact number must contain only digits")
    .min(10, "Contact number must be at least 10 digits")
    .required("Contact number is required"),
  streetAddress: yup.string().required("Street address is required"),
  city: yup.string().required("City is required"),
  state: yup.string().required("State is required"),
});

const PersonalInformation = () => {
  const [image, setImage] = useState(avatar1);

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // React Hook Form setup
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Form data:", data);
  };

  return (
    <div className="w-full overflow-y-auto lg:h-calc-navbar hide-scrollbar">
      <form
        className="max-w-[600px] px-5 flex flex-col md:m-0 m-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-[18px] font-bold text-[#1565c0] mt-5">
          Personal Information
        </h2>
        <div className="flex justify-center py-10">
          <div className="relative inline-block">
            <div className="w-[150px] h-[150px] flex justify-center items-center m-auto rounded-full border-4 border-blue-500 overflow-hidden">
              <img
                src={image}
                alt="Profile"
                className="object-cover w-full h-full"
              />
            </div>
            <label
              htmlFor="file-input"
              className="absolute bottom-2 right-2 bg-blue-500 text-white p-2 rounded-full cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15.232 5.232l3.536 3.536M9 13h3l7.732-7.732a2 2 0 00-2.828-2.828L9 10.172V13z"
                />
              </svg>
            </label>
            <input
              id="file-input"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label className="block text-sm font-normal leading-6 text-[#b6b2b0]">
              First name
            </label>
            <div className="mt-2">
              <input
                type="text"
                placeholder="Gabriel"
                className="block w-full rounded-md outline-none pl-3 border border-solid border-[#1565c0] py-1.5 text-gray-900 shadow-sm"
                {...register("firstName")}
              />
              {errors.firstName && (
                <p className="text-red-500">{errors.firstName.message}</p>
              )}
            </div>
          </div>

          <div className="sm:col-span-3">
            <label className="block text-sm font-normal leading-6 text-[#b6b2b0]">
              Last name
            </label>
            <div className="mt-2">
              <input
                type="text"
                placeholder="Obiagazie"
                className="block w-full rounded-md outline-none pl-3 border border-solid border-[#1565c0] py-1.5 text-gray-900 shadow-sm"
                {...register("lastName")}
              />
              {errors.lastName && (
                <p className="text-red-500">{errors.lastName.message}</p>
              )}
            </div>
          </div>

          <div className="col-span-full">
            <label className="block text-sm font-normal leading-6 text-[#b6b2b0]">
              Email address
            </label>
            <div className="mt-2">
              <input
                type="email"
                placeholder="obiagaziegabriel@gmail.com"
                className="block w-full rounded-md outline-none pl-3 border border-solid border-[#1565c0] py-1.5 text-gray-900 shadow-sm"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>
          </div>

          <div className="col-span-full">
            <label className="block text-sm font-normal leading-6 text-[#b6b2b0]">
              Contact Number
            </label>
            <div className="mt-2">
              <input
                type="text"
                placeholder="00794768822"
                className="block w-full rounded-md outline-none pl-3 border border-solid border-[#1565c0] py-1.5 text-gray-900 shadow-sm"
                {...register("contactNumber")}
              />
              {errors.contactNumber && (
                <p className="text-red-500">{errors.contactNumber.message}</p>
              )}
            </div>
          </div>

          <div className="col-span-full">
            <label className="block text-sm font-normal leading-6 text-[#b6b2b0]">
              Street address
            </label>
            <div className="mt-2">
              <input
                type="text"
                placeholder="john street"
                className="block w-full rounded-md outline-none pl-3 border border-solid border-[#1565c0] py-1.5 text-gray-900 shadow-sm"
                {...register("streetAddress")}
              />
              {errors.streetAddress && (
                <p className="text-red-500">{errors.streetAddress.message}</p>
              )}
            </div>
          </div>

          <div className="sm:col-span-3">
            <label className="block text-sm font-normal leading-6 text-[#b6b2b0]">
              City
            </label>
            <div className="mt-2">
              <input
                type="text"
                placeholder="kaduna"
                className="block w-full rounded-md outline-none pl-3 border border-solid border-[#1565c0] py-1.5 text-gray-900 shadow-sm"
                {...register("city")}
              />
              {errors.city && (
                <p className="text-red-500">{errors.city.message}</p>
              )}
            </div>
          </div>

          <div className="sm:col-span-3">
            <label className="block text-sm font-normal leading-6 text-[#b6b2b0]">
              State
            </label>
            <div className="mt-2">
              <input
                type="text"
                placeholder="kaduna"
                className="block w-full rounded-md outline-none pl-3 border border-solid border-[#1565c0] py-1.5 text-gray-900 shadow-sm"
                {...register("state")}
              />
              {errors.state && (
                <p className="text-red-500">{errors.state.message}</p>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="rounded-md bg-[#1565c0] px-3 py-2 text-sm font-semibold text-white shadow-sm"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonalInformation;
