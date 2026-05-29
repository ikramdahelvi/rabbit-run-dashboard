import { useState } from "react";

import Checkbox from "@mui/material/Checkbox";

import {
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const rabbitGroups = [
  {
    group: "Rabbit USA",
    items: [
      "Rabbit Run USA One",
      "Rabbit Run USA Two",
    ],
  },

  {
    group: "Rabbit South",
    items: [
      "Rabbit One South One",
      "Rabbit One South Two",
      "Rabbit One South Three",
    ],
  },

  {
    group: "Others",
    items: [
      "CM DPG",
      "Nikko America",
      "Manubank",
      "Leasing Finance",
    ],
  },
];

const RabbitFilter = () => {
  const allItems = rabbitGroups.flatMap(
    (group) => group.items
  );

  const [open, setOpen] = useState(false);

  const [selectedItems, setSelectedItems] =
    useState([]);

  /* CHECK SINGLE */
  const handleCheck = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(
        selectedItems.filter(
          (selected) => selected !== item
        )
      );
    } else {
      setSelectedItems([
        ...selectedItems,
        item,
      ]);
    }
  };

  /* ALL CHECKED */
  const allSelected =
    selectedItems.length === allItems.length;

  /* HANDLE ALL */
  const handleAll = () => {
    if (allSelected) {
      setSelectedItems([]);
    } else {
      setSelectedItems(allItems);
    }
  };

  return (
    <div className="relative">
      
      {/* BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="
          h-[50px]
          lg:min-w-[190px]
          w-full
          px-6
          rounded-full
          border
          border-[#44526A]
          bg-[#0D1A2F]
          flex
          items-center
          justify-between
          transition-all
          duration-200
          hover:border-[#5B6B86]
        "
      >
        
        {/* LEFT CONTENT */}
        <div className="flex flex-col items-start justify-center leading-none">
          
          {/* FLOAT LABEL */}
          <span
            className={`
              text-[#D7DCE5]
              transition-all
              duration-200
              ease-in-out
              font-medium
              ${
                selectedItems.length
                  ? "text-[10px] tracking-[1px]"
                  : "text-[15px]"
              }
            `}
          >
            Rabbit Filter
          </span>

          {/* VALUE */}
          <span
            className={`
              text-white
              font-medium
              overflow-hidden
              transition-all
              duration-200
              ease-in-out
              ${
                selectedItems.length
                  ? "max-h-5 opacity-100 text-[13px] mt-[6px]"
                  : "max-h-0 opacity-0"
              }
            `}
          >
            {allSelected
              ? "All Rabbits"
              : `${selectedItems.length} Selected`}
          </span>

        </div>

        {/* ARROW */}
        <div
          className={`
            transition-transform
            duration-300
            ${open ? "rotate-180" : ""}
          `}
        >
          <ChevronDown
            size={22}
            strokeWidth={1.8}
            className="text-[#7A8497]"
          />
        </div>

      </button>

      {/* DROPDOWN */}
      <div
        className={`
          absolute
          top-[60px]
          right-0
          z-50
          w-[290px]
          bg-white
          rounded-lg
          border
          border-[#D7DCE5]
          shadow-sm
          overflow-hidden
          transition-all
          duration-300
          ease-in-out
          ${
            open
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-2"
          }
        `}
      >
        
        <div className="p-4">
          
          {/* ALL RABBITS */}
          <div className="flex items-center gap-2">
            
            <Checkbox
              checked={allSelected}
              onChange={handleAll}
              size="small"
              sx={{
                color: "#28596A",

                "&.Mui-checked": {
                  color: "#28596A",
                },
              }}
            />

            <span className="text-[14px] font-medium text-[#1F2937]">
              Rabbit USA
            </span>

          </div>

          {/* ITEMS */}
          {rabbitGroups.map((group, index) => (
            <div key={group.group}>
              
              {/* GROUP ITEMS */}
              <div className="mt-1">
                
                {group.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2"
                  >
                    
                    <Checkbox
                      checked={selectedItems.includes(
                        item
                      )}
                      onChange={() =>
                        handleCheck(item)
                      }
                      size="small"
                      sx={{
                        color: "#28596A",

                        "&.Mui-checked": {
                          color: "#28596A",
                        },
                      }}
                    />

                    <span className="text-[14px] text-[#374151]">
                      {item}
                    </span>

                  </div>
                ))}
              </div>

              {/* DIVIDER */}
              {index !==
                rabbitGroups.length - 1 && (
                <div className="my-3 border-t border-[#D1D5DB]" />
              )}
            </div>
          ))}
        </div>

      </div>

    </div>
  );
};

export default RabbitFilter;