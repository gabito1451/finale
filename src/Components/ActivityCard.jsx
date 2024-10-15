import React from "react";

const ActivityCard = ({ data, className }) => {
  return (
    <div className={`border-b-2 border-dotted p-3  flex gap-4 ${className}`}>
      <img
        src={data.image}
        alt={data.title}
        className="w-16 h-16 rounded object-cover"
      />
      <div className="flex-grow">
        <div className="flex justify-between">
          <span className="font-semibold text-[16px]">#{data.id}</span>
          <span className="hidden md:flex md:font-semibold md:text-[16px]">
            #{data.id}
          </span>
        </div>
        <p>{data.title}</p>
        <div className="flex justify-between">
          <span className="font-semibold text-[16px]">{data.category}</span>
        </div>
      </div>
      <div className="flex justify-between flex-col">
        <span
          className={`${
            data.status === "Pending"
              ? "text-red-500"
              : data.status === "Ongoing"
              ? "text-yellow-500"
              : data.status === "Completed"
              ? "text-green-500"
              : "text-gray-500"
          } font-bold`}
        >
          {data.status}
        </span>
        <span>{data.date}</span>
      </div>
    </div>
  );
};

export default ActivityCard;
