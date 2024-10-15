import React from "react";
// import Tab from "../Components/Tab";

const Profession = () => {
  return (
    <div className="w-full overflow-y-auto md:h-calc-navbar lg:h-calc-navbar hide-scrollbar">
      <form className=" w-full max-w-[600px] px-5 md:m-0  m-auto">
        <h2 className="  text-[18px] font-bold text-[#1565c0] my-5 ">
          Professional Information
        </h2>

        <div className=" grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              htmlFor="profession-title"
              className="block text-sm font-normal  leading-6 text-[#b6b2b0]"
            >
              Profession Title
            </label>
            <div className="mt-2">
              <input
                id="profession-title"
                name="profession-title"
                type="text"
                autoComplete="given-title"
                className="block w-full rounded-md outline-none pl-3 border border-solid border-[#1565c0] py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="years-of-experience"
              className="block text-sm font-normal  leading-6 text-[#b6b2b0]"
            >
              Years of Experoence
            </label>
            <div className="mt-2">
              <input
                id="years-of-experience"
                name="years-of-experience"
                type="text"
                className="block w-full rounded-md outline-none pl-3 border border-solid border-[#1565c0] py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="col-span-full">
            <label
              htmlFor="business-name"
              className="block text-sm font-normal  leading-6 text-[#b6b2b0]"
            >
              Business Name (if applicable)
            </label>
            <div className="mt-2">
              <input
                id="business-name"
                name="business-name"
                type="text"
                autoComplete="business-name"
                className="outline-none pl-3 border border-solid border-[#1565c0] block w-full rounded-md  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="col-span-full">
            <label
              htmlFor="specialty and skill"
              className="block text-sm font-normal leading-6 text-[#b6b2b0]"
            >
              Specialty & Skills
            </label>
            <div className="mt-2">
              <input
                id="specialty-and-skill"
                name="specialty-and-skill"
                type="text"
                autoComplete="specialty-and-skill"
                className="outline-none pl-3 border border-solid border-[#1565c0] block w-full rounded-md  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="col-span-full">
            <label
              htmlFor="certification-and-licences"
              className="block text-sm font-normal  leading-6 text-[#b6b2b0]"
            >
              Certification & Licences
            </label>
            <div className="mt-2">
              <input
                id="certification-and-licences"
                name="certification-and-licences"
                type="text"
                autoComplete="certification-and-licences"
                className="outline-none pl-3 border border-solid border-[#1565c0] block w-full rounded-md  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="service-area"
              className="block text-sm font-normal  leading-6 text-[#b6b2b0]"
            >
              Service Area
            </label>
            <div className="mt-2">
              <input
                id="service-area"
                name="service-area"
                type="text"
                autoComplete="service-area"
                className=" outline-none pl-3 border border-solid border-[#1565c0] block w-full rounded-md  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="availability"
              className="block text-sm font-normal  leading-6 text-[#b6b2b0]"
            >
              Availability
            </label>
            <div className="mt-2">
              <input
                id="availability"
                name="availability"
                type="text"
                autoComplete=""
                className="outline-none pl-3 border border-solid border-[#1565c0] block w-full rounded-md  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <button
            type="submit"
            className=" rounded-md bg-[#1565c0] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#1565c0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profession;
