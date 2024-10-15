import React from "react";
import uploadIcon from "../../assets/uploadIcon.svg";

const ServiceDetails = () => {
  return (
    <div className="w-full overflow-y-auto md:h-calc-navbar lg:h-calc-navbar hide-scrollbar">
      <form className="max-w-[600px] px-5 w-full md:m-0  m-auto">
        <h2 className="text-[18px] font-bold text-[#1565c0] my-5">
          Service Details
        </h2>
        <div className="col-span-full">
          <label
            htmlFor="about"
            className="mt-10 block text-[16px] font-normal leading-6 text-gray-900"
          >
            Service description
          </label>
          <div className="mt-2">
            <textarea
              id="about"
              name="about"
              rows={3}
              placeholder="write a detailed description about the service offered"
              className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
              defaultValue={""}
            />
          </div>
        </div>
        <div className="col-span-full">
          <label
            htmlFor="cover-photo"
            className="mt-5 block text-[16px] font-normal leading-6 text-gray-900"
          >
            Cover photo
          </label>
          <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
            <div className="text-center">
              <div>
                <img
                  src={uploadIcon}
                  alt=""
                  className="mx-auto h-12 w-12 bg-[#f4f4f4] rounded-full px-2 text-gray-300"
                />
              </div>
              <div className="mt-4 flex text-sm leading-6 text-gray-600">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                >
                  <span className="text-[#eab323] text-[16px] font-normal">
                    Upload a file
                  </span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="hidden"
                  />
                </label>
                <p className="pl-1 text-[#1565c0] text-[16px] font-normal">
                  or drag and drop
                </p>
              </div>
              <p className="text-[16px] leading-5 text-[#afb0b1]">
                PNG, JPG, GIF up to 10MB
              </p>
            </div>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              htmlFor="categories"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Categories
            </label>
            <div className="mt-2">
              <input
                id="Categories"
                name="Categories"
                type="text"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="last-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Pricing Structure
            </label>
            <div className="mt-2">
              <input
                id="pricing-structure"
                name="pricing-structure"
                type="text"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="mt-10 rounded-md bg-[#1565c0] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#1565c0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default ServiceDetails;
