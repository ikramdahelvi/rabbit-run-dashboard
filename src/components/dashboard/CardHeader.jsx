import { useState } from "react";

import {
  Maximize2,
  MoreVertical,
} from "lucide-react";

const CardHeader = ({
  title = "Rabbit Card One",
}) => {
  const [open, setOpen] =
    useState(false);

  return (
    <div className="relative mb-4 flex items-center justify-between">
      
      {/* TITLE */}
      <h3 className="text-[18px] font-medium text-[#28586C] pl-4">
        {title}
      </h3>

      {/* ACTIONS */}
      <div className="flex items-center gap-3">
        
        {/* EXPAND */}
        <button className="text-[#486C94] hover:text-[#0F172A] transition cursor-pointer">
          <Maximize2
            size={24}
            strokeWidth={2}
          />
        </button>

        {/* MENU */}
        <div className="relative">
          
          <button
            onClick={() =>
              setOpen(!open)
            }
            className="text-[#486C94] hover:text-[#0F172A] transition cursor-pointer align-top"
          >
            <MoreVertical
              size={26}
              strokeWidth={2}
            />
          </button>

          {/* DROPDOWN */}
          <div
            className={`
              absolute
              right-0
              top-9
              w-[180px]
              bg-white
              border
              border-[#E2E8F0]
              rounded-[8px]
              shadow-lg
              overflow-hidden
              z-50
              transition-all
              duration-200
              origin-top-right
              ${
                open
                  ? "opacity-100 visible scale-100"
                  : "opacity-0 invisible scale-95"
              }
            `}
          >
            
            {/* OPTION */}
            <button
              className="
                w-full
                px-4
                py-3
                text-left
                text-[14px]
                text-[#334155]
                hover:bg-[#F8FAFC]
                transition
              "
            >
              View Details
            </button>

            {/* OPTION */}
            <button
              className="
                w-full
                px-4
                py-3
                text-left
                text-[14px]
                text-[#334155]
                hover:bg-[#F8FAFC]
                transition
              "
            >
              Export Data
            </button>

            {/* OPTION */}
            <button
              className="
                w-full
                px-4
                py-3
                text-left
                text-[14px]
                text-[#DC2626]
                hover:bg-[#FEF2F2]
                transition
              "
            >
              Remove Card
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default CardHeader;