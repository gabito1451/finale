import React, { useState } from "react";
import ActivityCard from "./ActivityCard";
import { mockData } from "../Data/MockData";

const Orders = ({ className }) => {
  const [activeTab, setActiveTab] = useState("All");

  // Filter data based on active tab
  const filteredData =
    activeTab === "All"
      ? mockData // Show all data when "All" is selected
      : mockData.filter((item) => item.status === activeTab);
  return (
    <div className={`w-full flex-1 pb-20 `}>
      <h1 className="font-semibold text-[16px] py-3 ">Orders</h1>
      <div
        style={{ height: "calc(100vh - 180px)" }}
        className="py-3 rounded-md hide-scrollbar overflow-y-auto bg-white"
      >
        <div className="mb-2 md:w-full">
          {/* Tabs */}
          <div className="w-full overflow-x-auto px-2 hide-scrollbar ">
            <div className="flex flex-wrap px-2 justify-center rounded-md w-full py-1 bg-[#edebea] shadow-md">
              {["All", "Ongoing", "Pending", "Completed", "Canceled"].map(
                (tab) => (
                  <button
                    key={tab}
                    className={`flex-1 m-1 px-2 py-2 rounded transition-colors duration-200 ${
                      activeTab === tab ? "bg-white" : "bg-[#edebea]"
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Card List */}
          <div className={`mt-3 hide-scrollbar overflow-y-auto  ${className}`}>
            {filteredData.length > 0 ? (
              filteredData.map((item) => (
                <ActivityCard
                  key={item.id}
                  data={item}
                  className="my-4 shadow-md"
                />
              ))
            ) : (
              <p>No data found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
