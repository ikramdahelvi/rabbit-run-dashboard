import React from "react";

const tableData = [
  {
    rabbit: "Rabbit Row One",
    two: 47,
    three: 1,
    four: 7,
    five: 25,
    value: "$900,000",
  },

  {
    rabbit: "Rabbit Row Two",
    two: 77,
    three: 4,
    four: 9,
    five: 74,
    value: "$17,200",
  },

  {
    rabbit: "Rabbit Row Three",
    two: 28,
    three: 6,
    four: 11,
    five: 44,
    value: "$47,200",
  },

  {
    rabbit: "Rabbit Row Four",
    two: 47,
    three: 1,
    four: 7,
    five: 25,
    value: "$749,123",
  },

  {
    rabbit: "Rabbit Row One",
    two: 47,
    three: 1,
    four: 7,
    five: 25,
    value: "$900,000",
  },
];

const DataTable = () => {
  return (
    <div className="overflow-x-auto border-t border-[#E5E7EB]">
      
      <table className="w-full border-collapse whitespace-nowrap lg:whitespace-normal">
        
        {/* HEADER */}
        <thead>
          
          <tr className="h-[48px] border-b border-[#D1D5DB] bg-[#F7F7F8] text-[#4B5563]">
            
            <th className="text-left font-medium pl-4">
              Rabbit Header One
            </th>

            <th className="text-center">
              Header Two
            </th>

            <th className="text-center">
              H Three
            </th>

            <th className="text-center">
              H Four
            </th>

            <th className="text-center">
              H Five
            </th>

            <th className="text-right pr-4">
              H Value
            </th>

          </tr>

        </thead>

        {/* BODY */}
        <tbody className="text-[#3F3F46]">
          
          {tableData.map((item, index) => (
            <tr
              key={index}
              className="h-[44px] border-b border-[#E5E7EB] hover:bg-[#F8FAFC] transition"
            >
              
              <td className=" font-medium pl-4">
                {item.rabbit}
              </td>

              <td className="text-center">
                {item.two}
              </td>

              <td className="text-center">
                {item.three}
              </td>

              <td className="text-center">
                {item.four}
              </td>

              <td className="text-center">
                {item.five}
              </td>

              <td className="text-right pr-4 font-medium">
                {item.value}
              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
};

export default React.memo(DataTable);