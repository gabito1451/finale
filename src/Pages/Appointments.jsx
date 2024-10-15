import React from "react";
import DatePicker from "react-datepicker";
import { TimePicker } from "antd";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

const Appointments = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div>
      <h1 className="text-[20px] font-bold my-7 px-5 md:px-8 ">Appointments</h1>
      {/* Calendar and time for appointment section */}
      <div className="flex ">
        <div className="flex bg-white flex-col gap-2 rounded-md px-2 md:px:5 py-3 mx-8 md:mx-9">
          {/* Custom style for TimePicker */}
          <TimePicker.RangePicker />

          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className="red-border"
            inline
          />
        </div>
        <div className="hidden md:flex md:bg-white md:h-screen md:flex-1 md:mr-8"></div>
      </div>
    </div>
  );
};

export default Appointments;
