import { useState } from "react";

import {
  ChevronDown,
} from "lucide-react";

const actions = [
  "Export Report",
  "Download CSV",
  "View Analytics",
  "Generate Summary",
];

const ActionDropdown = () => {
  const [open, setOpen] = useState(false);

  const [selectedAction, setSelectedAction] =
    useState("Actions");

  const handleSelect = (action) => {
    setSelectedAction(action);
    setOpen(false);
  };

  return (
    <div className="relative flex-1 md:flex-none lg:flex-none">
      
      {/* BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="
          h-[44px]
          lg:min-w-[142px]
          min-w-full
          px-5
          rounded-full
          bg-gradient-to-r
          from-[#2563EB]
          to-[#3B82F6]
          flex
          items-center
          justify-between
          gap-5
          shadow-md
          transition-all
          duration-200
          hover:brightness-110
        "
      >
        
        {/* LABEL */}
        <span className="text-white text-[13px] font-medium">
          {selectedAction}
        </span>

        {/* ARROW */}
        <div
          className={`
            transition-transform
            duration-300
            ease-in-out
            ${open ? "rotate-180" : ""}
          `}
        >
          <ChevronDown
            size={18}
            strokeWidth={2}
            className="text-white"
          />
        </div>

      </button>

      {/* DROPDOWN */}
      <div
        className={`
          absolute
          top-[54px]
          right-0
          z-50
          w-[220px]
          bg-white
          rounded-xl
          border
          border-[#DCE3EA]
          shadow-2xl
          overflow-hidden
          transition-all
          duration-300
          ease-in-out
          origin-top-right
          ${
            open
              ? "opacity-100 visible scale-100"
              : "opacity-0 invisible scale-95"
          }
        `}
      >
        
        {/* ITEMS */}
        <div className="py-2">
          
          {actions.map((action) => (
            <button
              key={action}
              onClick={() =>
                handleSelect(action)
              }
              className="
                w-full
                px-4
                py-3
                text-left
                text-[14px]
                text-[#334155]
                hover:bg-[#F1F5F9]
                transition-colors
              "
            >
              {action}
            </button>
          ))}

        </div>

      </div>

    </div>
  );
};

export default ActionDropdown;