import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Yup validation schema
const schema = yup.object().shape({
  professionTitle: yup.string().required("Profession title is required"),
  yearsOfExperience: yup
    .number()
    .typeError("Years of experience must be a number")
    .min(0, "Years of experience cannot be negative")
    .required("Years of experience is required"),
  businessName: yup.string().nullable(),
  specialtyAndSkill: yup.string().required("Specialty & skills are required"),
  certificationAndLicenses: yup.string().nullable(),
  serviceArea: yup.string().required("Service area is required"),
  availability: yup.string().required("Availability is required"),
});

const Profession = () => {
  // Initialized form with validation schema
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // Handle form submission
  const onSubmit = (data) => {
    e.preventDefault();
    console.log("Professional Information:", data);
  };

  return (
    <div className="w-full overflow-y-auto md:h-calc-navbar lg:h-calc-navbar hide-scrollbar">
      <form
        className="w-full max-w-[600px] px-5 md:m-0 m-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-[18px] font-bold text-[#1565c0] my-5">
          Professional Information
        </h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          {/* Profession Title */}
          <div className="sm:col-span-3">
            <label
              htmlFor="profession-title"
              className="block text-sm font-normal leading-6 text-[#b6b2b0]"
            >
              Profession Title
            </label>
            <div className="mt-2">
              <input
                id="profession-title"
                placeholder="Engineer"
                type="text"
                className="block w-full rounded-md outline-none pl-3 border border-solid border-[#1565c0] py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                {...register("professionTitle")}
              />
              {errors.professionTitle && (
                <p className="text-red-500 text-sm">
                  {errors.professionTitle.message}
                </p>
              )}
            </div>
          </div>

          {/* Years of Experience */}
          <div className="sm:col-span-3">
            <label
              htmlFor="years-of-experience"
              className="block text-sm font-normal leading-6 text-[#b6b2b0]"
            >
              Years of Experience
            </label>
            <div className="mt-2">
              <input
                id="years-of-experience"
                placeholder="5"
                type="text"
                className="block w-full rounded-md outline-none pl-3 border border-solid border-[#1565c0] py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                {...register("yearsOfExperience")}
              />
              {errors.yearsOfExperience && (
                <p className="text-red-500 text-sm">
                  {errors.yearsOfExperience.message}
                </p>
              )}
            </div>
          </div>

          {/* Business Name */}
          <div className="col-span-full">
            <label
              htmlFor="business-name"
              className="block text-sm font-normal leading-6 text-[#b6b2b0]"
            >
              Business Name (if applicable)
            </label>
            <div className="mt-2">
              <input
                id="business-name"
                placeholder="Your Business"
                type="text"
                className="outline-none pl-3 border border-solid border-[#1565c0] block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                {...register("businessName")}
              />
            </div>
          </div>

          {/* Specialty & Skills */}
          <div className="col-span-full">
            <label
              htmlFor="specialty-and-skill"
              className="block text-sm font-normal leading-6 text-[#b6b2b0]"
            >
              Specialty & Skills
            </label>
            <div className="mt-2">
              <input
                id="specialty-and-skill"
                placeholder="Software Development, Data Analysis"
                type="text"
                className="outline-none pl-3 border border-solid border-[#1565c0] block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                {...register("specialtyAndSkill")}
              />
              {errors.specialtyAndSkill && (
                <p className="text-red-500 text-sm">
                  {errors.specialtyAndSkill.message}
                </p>
              )}
            </div>
          </div>

          {/* Certification & Licences */}
          <div className="col-span-full">
            <label
              htmlFor="certification-and-licences"
              className="block text-sm font-normal leading-6 text-[#b6b2b0]"
            >
              Certification & Licences
            </label>
            <div className="mt-2">
              <input
                id="certification-and-licences"
                placeholder="PMP, AWS Certified"
                type="text"
                className="outline-none pl-3 border border-solid border-[#1565c0] block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                {...register("certificationAndLicenses")}
              />
            </div>
          </div>

          {/* Service Area */}
          <div className="sm:col-span-3">
            <label
              htmlFor="service-area"
              className="block text-sm font-normal leading-6 text-[#b6b2b0]"
            >
              Service Area
            </label>
            <div className="mt-2">
              <input
                id="service-area"
                placeholder="Lagos"
                type="text"
                className="outline-none pl-3 border border-solid border-[#1565c0] block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                {...register("serviceArea")}
              />
              {errors.serviceArea && (
                <p className="text-red-500 text-sm">
                  {errors.serviceArea.message}
                </p>
              )}
            </div>
          </div>

          {/* Availability */}
          <div className="sm:col-span-3">
            <label
              htmlFor="availability"
              className="block text-sm font-normal leading-6 text-[#b6b2b0]"
            >
              Availability
            </label>
            <div className="mt-2">
              <input
                id="availability"
                placeholder="Full-time"
                type="text"
                className="outline-none pl-3 border border-solid border-[#1565c0] block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                {...register("availability")}
              />
              {errors.availability && (
                <p className="text-red-500 text-sm">
                  {errors.availability.message}
                </p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="rounded-md bg-[#1565c0] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#1565c0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profession;
