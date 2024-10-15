import React from "react";

const Card = ({ number, title, url, className }) => {
  return (
    <div
      className={`rounded-md w-full px-5 pt-5 pb-3 flex h-[132px] shadow-md justify-between items-start ${className}`}
    >
      <div className="flex flex-col">
        <h2 className="font-bold text-[30px] text-[#172B4D] sfprodisplay">
          {number}
        </h2>

        <p className="text-[#000000] text-[16px] font-normal">{title}</p>
      </div>

      <img src={url} alt={title} width={60} height={60} />
    </div>
  );
};

export default Card;
