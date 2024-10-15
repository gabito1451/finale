import React from "react";

const CenteredButton = ({ onClick, children, className = "", ...props }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-[#1a73e8] text-[16px] text-white pt-1 pb-2 px-2 hover:rounded-md  hover:bg-[#1a85ff] hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out  ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default CenteredButton;
