import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const ProgressChart = ({ percentage, color, title }) => {
  const data = [
    { name: "Completed", value: percentage },
    { name: "Remaining", value: 100 - percentage },
  ];

  const COLORS = [color, "#f0f0f0"]; // Dynamic color for progress and grey for remaining

  return (
    <div
      style={{
        position: "relative",
        display: "inline-block",
        paddingBottom: "10px",
      }}
    >
      {/* Pie Chart */}
      <PieChart width={100} height={100}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={30}
          outerRadius={40}
          startAngle={90}
          endAngle={-270}
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>

      {/* Percentage text in the center */}
      <div
        style={{
          position: "absolute",
          top: "35%",
          left: "45%",
          transform: "translate(-50%, -50%)",
          fontSize: "14px",
          fontWeight: "bold",
        }}
      >
        {`${percentage}%`}
      </div>
      <h1 className="text-center font-normal text-[14px]">{title}</h1>
    </div>
  );
};

export default ProgressChart;
