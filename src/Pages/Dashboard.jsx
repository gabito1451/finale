import React from "react";
import Card from "../Components/Card";
import ProgressChart from "../Components/ProgressChart";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import { useState, useEffect } from "react";
import Orders from "../Components/Orders";
import ord from "../assets/ord.svg";
import income from "../assets/income.svg";
import pending from "../assets/pending.svg";
import complete from "../assets/complete.svg";

const Dashboard = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [name, setName] = useState("Guest");

  useEffect(() => {
    const storedDb = sessionStorage.getItem("currentUser");
    if (storedDb) {
      const db = JSON.parse(storedDb);
      console.log(db);
      console.log(db.email);
      setName(db.email || "Guest");
    }
  }, []);
  return (
    <div className="px-8 h-[100vh] w-full overflow-y-auto">
      <h1 className="text-[16px]  font-Roboto  py-4">
        Hello <span className="font-semiboldtext-[18px]">{name}</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pb-2">
        <Card
          number={"95"}
          title={"Total Order"}
          className="bg-[#e3f2fd] hover:rounded-lg hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out  "
          url={ord}
        />
        <Card
          number={"50%"}
          title={"Total Income"}
          className="bg-[#FFCDD2] hover:rounded-lg hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out "
          url={income}
        />
        <Card
          number={"0"}
          title={"Pending Order"}
          className="bg-[#FFF1C9] hover:rounded-lg hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out "
          url={pending}
        />
        <Card
          number={"70"}
          title={"Complete Order"}
          className="bg-[#E8F5E9] hover:rounded-lg hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out "
          url={complete}
        />
      </div>
      {/* chart section */}

      <div className="flex flex-col lg:flex-row font-sans justify-center gap-5 ">
        <div className="flex rounded-md  items-center flex-col  bg-[#ffffff] w-full flex-1">
          <h1 className="font-semibold  text-[16px] py-3 w-full bg-[#f3f3f3]">
            Order Statistics{" "}
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 md::grid-cols-4 lg:grid-cols-4 gap-5 md:gap-5 lg:gap:7 py-4">
            <ProgressChart
              percentage={70}
              color="#388e3c"
              title="Completed Orders"
            />{" "}
            {/* Green */}
            <ProgressChart
              percentage={50}
              color="#d32f2f"
              title="Total Earnings"
            />{" "}
            {/* Red */}
            <ProgressChart
              percentage={90}
              color="#1565c0"
              title="Rating Overview"
            />{" "}
            {/* Blue */}
            <ProgressChart
              percentage={30}
              color="#ea8e04"
              title="Applications"
            />{" "}
          </div>

          <h1 className="font-semibold  text-[16px] py-3 w-full bg-[#f3f3f3]">
            Appointments
          </h1>
          {/* date picker */}
          <div className="w-[220px] sm:w-full flex items-center justify-center  pt-4 pb-4 md:pb-4">
            {/* <DatePicker
              closeOnScroll={true}
              selected={startDate}
              inline
              onChange={(date) => setStartDate(date)}
              style={{ fontSize: "3rem", width: "100%", padding: "1rem" }}
            /> */}
            <Calendar
              className="w-full mb-20 md:0"
              onChange={(date) => setStartDate(date)}
              value={startDate}
            />
          </div>
        </div>

        <Orders />
      </div>
    </div>
  );
};

export default Dashboard;
