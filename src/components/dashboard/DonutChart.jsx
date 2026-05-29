import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Legend A", value: 35, color: "#B89B67" },
  { name: "Legend B", value: 25, color: "#DABD74" },
  { name: "Legend C", value: 12, color: "#7E9C93" },
  { name: "Legend D", value: 10, color: "#2E86A7" },
  { name: "Legend E", value: 8, color: "#D7D3CF" },
  { name: "Legend F", value: 6, color: "#8E8A86" },
  { name: "Legend G", value: 5, color: "#6F4C8B" },
  { name: "Legend H", value: 3, color: "#C5B37C" },
  { name: "Legend I", value: 2, color: "#82A8D5" },
  { name: "Legend J", value: 2, color: "#334E7D" },
];

const DonutChart = () => {
  return (
    <div className="lg:flex items-center justify-around gap-6">
      {/* CHART */}
      <div className="w-full lg:w-[260px] h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              innerRadius={58}
              outerRadius={92}
              dataKey="value"
              stroke="none"
              startAngle={90}
              endAngle={-270}
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* LEGENDS */}
      <div className="flex flex-wrap lg:flex-col gap-2 mt-4 lg:mt-0">
        {data.map((item) => (
          <div key={item.name} className="flex items-center gap-2">
            <div
              className="w-[10px] h-[10px] rounded-full"
              style={{
                backgroundColor: item.color,
              }}
            />

            <span className="text-[13px] text-[#3F3F46]">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(DonutChart);
