import { useState } from "react";
import { Calendar, ChevronDown, MoreVertical } from "lucide-react";
import CalendarCard from "../dashboard/CalendarCard";
import RabbitFilter from "../dashboard/RabbitFilter";
import Button from "../ui/Button";

const FilterSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="border-[#85AC31] border-t-4">
      <div className="px-3 sm:px-6 lg:px-8 py-3 flex flex-col lg:flex-row md:flex-row lg:items-center lg:justify-between md:justify-between gap-3">
        {/* LEFT FILTERS */}
        <div className="flex flex-wrap items-center justify-between gap-5">
          {/* DATE PICKER */}
          <CalendarCard />

          {/* FILTER */}
          <RabbitFilter />
        </div>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center justify-between lg:gap-8 gap-3">
          <Button />

          <div className="relative">
            {/* MENU BUTTON */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="
      text-gray-300
      hover:text-white
      cursor-pointer
      transition
      p-1
    "
              aria-label="More options"
            >
              <MoreVertical size={24} />
            </button>

            {/* DROPDOWN */}
            {menuOpen && (
              <div
                className="
        absolute
        right-0
        top-10
        w-[170px]
        bg-white
        rounded-[8px]
        shadow-md
        border
        border-gray-200
        overflow-hidden
        z-50
      "
              >
                <button
                  className="
          w-full
          text-left
          px-4
          py-3
          text-[14px]
          text-[#0F172A]
          hover:bg-gray-100
          transition
        "
                >
                  Export
                </button>

                <button
                  className="
          w-full
          text-left
          px-4
          py-3
          text-[14px]
          text-[#0F172A]
          hover:bg-gray-100
          transition
        "
                >
                  Refresh
                </button>

                <button
                  className="
          w-full
          text-left
          px-4
          py-3
          text-[14px]
          text-[#0F172A]
          hover:bg-gray-100
          transition
        "
                >
                  Settings
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
