import React from "react";

const Mcard = ({ className, children }) => {
  return (
    <div
      className={`w-full  bg-white  hover:drop-shadow rounded px-3 py-4 ${className}`}
    >
      {children}
    </div>
  );
};

export default Mcard;
