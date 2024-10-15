import React from "react";

const HeaderButton = ({ onClick, children, className = "", ...props }) => {
  return (
    <button
      onClick={onClick}
      className={` hover:bg-[#1a85ff] hover:rounded-[6px] hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out  bg-[#1a73e8] text-[12px] md:text-[16px] text-white pt-1 pb-2 pl-2 pr-6 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default HeaderButton;
