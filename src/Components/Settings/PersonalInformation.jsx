import React from "react";
import { useState } from "react";
import avatar1 from "../../assets/avatar1.svg";

const PersonalInformation = () => {
  const [image, setImage] = useState(avatar1); // Initial image or the default image

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
  return (
    <div className="w-full overflow-y-auto  lg:h-calc-navbar hide-scrollbar ">
      <form className="max-w-[600px] px-5 flex flex-col  md:m-0  m-auto  ">
        <h2 className="text-[18px] font-bold text-[#1565c0] mt-5">
          Personal Infomation
        </h2>
        <div className="flex justify-center py-10">
          <div className="relative inline-block ">
            {/* Image Preview */}
            <div className="w-[150px] h-[150px] flex justify-center items-center m-auto rounded-full border-4 border-blue-500 overflow-hidden ">
              <img
                src={image}
                alt="Profile"
                className="object-cover w-full h-full"
              />
            </div>

            {/* Upload/Edit Icon */}
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

            {/* Hidden File Input */}
            <input
              id="file-input"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden "
            />
          </div>
        </div>

        <div className=" grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              htmlFor="first-name"
              className="block text-sm font-normal  leading-6 text-[#b6b2b0]"
            >
              First name
            </label>
            <div className="mt-2">
              <input
                id="first-name"
                name="first-name"
                type="text"
                placeholder="Gabriel"
                autoComplete="given-name"
                className="block w-full rounded-md outline-none pl-3 border border-solid border-[#1565c0] py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="last-name"
              className="block text-sm font-normal  leading-6 text-[#b6b2b0]"
            >
              Last name
            </label>
            <div className="mt-2">
              <input
                id="last-name"
                name="last-name"
                type="text"
                placeholder="Obiagazie"
                autoComplete="family-name"
                className="block w-full rounded-md outline-none pl-3 border border-solid border-[#1565c0] py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="col-span-full">
            <label
              htmlFor="email-address"
              className="block text-sm font-normal  leading-6 text-[#b6b2b0]"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email-address"
                name="email-address"
                placeholder="obiagaziegabriel@gmail.com"
                type="text"
                autoComplete="email-address"
                className="outline-none pl-3 border border-solid border-[#1565c0] block w-full rounded-md  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="col-span-full">
            <label
              htmlFor="contact-number"
              className="block text-sm font-normal leading-6 text-[#b6b2b0]"
            >
              Contact Number
            </label>
            <div className="mt-2">
              <input
                id="contact-number"
                name="contact-number"
                placeholder="00794768822"
                type="text"
                autoComplete="contact-number"
                className="outline-none pl-3 border border-solid border-[#1565c0] block w-full rounded-md  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="col-span-full">
            <label
              htmlFor="street-address"
              className="block text-sm font-normal  leading-6 text-[#b6b2b0]"
            >
              Street address
            </label>
            <div className="mt-2">
              <input
                id="street-address"
                placeholder="john street"
                name="street-address"
                type="text"
                autoComplete="street-address"
                className="outline-none pl-3 border border-solid border-[#1565c0] block w-full rounded-md  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="city"
              className="block text-sm font-normal  leading-6 text-[#b6b2b0]"
            >
              City
            </label>
            <div className="mt-2">
              <input
                id="city"
                name="city"
                placeholder="kaduna"
                type="text"
                autoComplete="given-name"
                className=" outline-none pl-3 border border-solid border-[#1565c0] block w-full rounded-md  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="State"
              className="block text-sm font-normal  leading-6 text-[#b6b2b0]"
            >
              State
            </label>
            <div className="mt-2">
              <input
                id="state"
                name="state"
                placeholder="kaduna"
                type="text"
                autoComplete=""
                className="outline-none pl-3 border border-solid border-[#1565c0] block w-full rounded-md  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <button
            type="submit"
            className="flex justify-end  rounded-md bg-[#1565c0] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#1565c0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonalInformation;
