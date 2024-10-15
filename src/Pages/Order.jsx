import React from "react";
import Orders from "../Components/Orders";

const Order = () => {
  return (
    <div style={{ height: "calc(100% - 84px)" }} className="hide-scrollbar">
      <div className="px-4 md:px-8 md:pl-8 pt-2">
        <Orders className="h-[80%] hide-scrollbar" />
      </div>
    </div>
  );
};

export default Order;
