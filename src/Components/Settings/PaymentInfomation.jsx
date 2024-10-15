import React from "react";

const PaymentInfomation = () => {
  return (
    <div className="w-full overflow-y-auto md:h-calc-navbar lg:h-calc-navbar hide-scrollbar">
      <form className="max-w-[600px] px-5  md:m-0  m-auto">
        <h2 className="text-[18px] font-bold text-[#1565c0] my-5">
          Payment Information
        </h2>
        <h2 className="text-[14px] font-normal text-[#1565c0] mb-5">
          Bank Details
        </h2>

        <div className=" grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="col-span-full">
            <label
              htmlFor="account-name"
              className="block text-sm font-normal  leading-6 text-[#b6b2b0]"
            >
              Account Name
            </label>
            <div className="mt-2">
              <input
                id="account-name"
                placeholder="Feyi"
                name="account-name"
                type="text"
                autoComplete="account-name"
                className="outline-none pl-3 border border-solid border-[#1565c0] block w-full rounded-md  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="col-span-full">
            <label
              htmlFor="account-number"
              className="block text-sm font-normal leading-6 text-[#b6b2b0]"
            >
              Account Number
            </label>
            <div className="mt-2">
              <input
                id="account-number"
                name="account-number"
                type="text"
                placeholder="3004577234"
                autoComplete="account-number"
                className="outline-none pl-3 border border-solid border-[#1565c0] block w-full rounded-md  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="col-span-full">
            <label
              htmlFor="bank-name"
              className="block text-sm font-normal  leading-6 text-[#b6b2b0]"
            >
              Bank Name
            </label>
            <div className="mt-2">
              <input
                id="bank-name"
                name="bank-name"
                type="text"
                autoComplete="bank-name"
                placeholder="GT Bank"
                className="outline-none pl-3 border border-solid border-[#1565c0] block w-full rounded-md  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
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

export default PaymentInfomation;
