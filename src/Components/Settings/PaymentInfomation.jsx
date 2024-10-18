import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Yup validation schema
const schema = yup.object().shape({
  accountName: yup.string().required("Account name is required"),
  accountNumber: yup
    .string()
    .matches(/^[0-9]+$/, "Account number must be digits only")
    .length(10, "Account number must be exactly 10 digits")
    .required("Account number is required"),
  bankName: yup.string().required("Bank name is required"),
});

const PaymentInformation = () => {
  // Initialize form with validation schema
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
    console.log("Payment Information:", data);
  };

  return (
    <div className="w-full overflow-y-auto md:h-calc-navbar lg:h-calc-navbar hide-scrollbar">
      <form
        className="max-w-[600px] px-5  md:m-0  m-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-[18px] font-sans font-bold text-[#1565c0] my-5">
          Payment Information
        </h2>
        <h2 className="text-[14px] font-sans font-normal text-[#1565c0] mb-5">
          Bank Details
        </h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          {/* Account Name */}
          <div className="col-span-full">
            <label
              htmlFor="account-name"
              className="block text-sm font-normal font-sans  leading-6 text-[#b6b2b0]"
            >
              Account Name
            </label>
            <div className="mt-2">
              <input
                id="account-name"
                placeholder="Feyi"
                type="text"
                className="outline-none font-sans pl-3 border border-solid border-[#1565c0] block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                {...register("accountName")}
              />
              {errors.accountName && (
                <p className="text-red-500 font-sans text-sm">
                  {errors.accountName.message}
                </p>
              )}
            </div>
          </div>

          {/* Account Number */}
          <div className="col-span-full">
            <label
              htmlFor="account-number"
              className="block text-sm font-sans font-normal leading-6 text-[#b6b2b0]"
            >
              Account Number
            </label>
            <div className="mt-2">
              <input
                id="account-number"
                placeholder="3004577234"
                type="text"
                className="outline-none font-sans pl-3 border border-solid border-[#1565c0] block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                {...register("accountNumber")}
              />
              {errors.accountNumber && (
                <p className="text-red-500 font-sans text-sm">
                  {errors.accountNumber.message}
                </p>
              )}
            </div>
          </div>

          {/* Bank Name */}
          <div className="col-span-full">
            <label
              htmlFor="bank-name"
              className="block text-sm font-sans font-normal  leading-6 text-[#b6b2b0]"
            >
              Bank Name
            </label>
            <div className="mt-2">
              <input
                id="bank-name"
                placeholder="GT Bank"
                type="text"
                className="outline-none pl-3 font-sans border border-solid border-[#1565c0] block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                {...register("bankName")}
              />
              {errors.bankName && (
                <p className="text-red-500 font-sans text-sm">
                  {errors.bankName.message}
                </p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="rounded-md bg-[#1565c0] font-sans px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#1565c0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default PaymentInformation;
