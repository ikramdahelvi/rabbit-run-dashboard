import {
  Calendar,
  ChevronDown,
  MoreVertical,
} from "lucide-react";
import CalendarCard from "../dashboard/CalendarCard";
import RabbitFilter from "../dashboard/RabbitFilter";
import Button from "../ui/Button";

const FilterSection = () => {
  return (
    <div className="border-[#85AC31] border-t-4">
      
      <div className="px-4 sm:px-6 lg:px-8 py-3 flex flex-col lg:flex-row md:flex-row lg:items-center lg:justify-between md:justify-between gap-3 lg:h-[68px]">
        
        {/* LEFT FILTERS */}
        <div className="flex flex-wrap items-center gap-3">

          {/* DATE PICKER */}
          <CalendarCard/>

          {/* FILTER */}
          <RabbitFilter/>

        </div>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center justify-between gap-3">
          
          <Button/>

          <button className="text-gray-300 hover:text-white transition" aria-label="More options">
            <MoreVertical size={24} />
          </button>

        </div>

      </div>
    </div>
  );
};

export default FilterSection;