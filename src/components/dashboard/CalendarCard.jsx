import { useState } from "react";

import dayjs from "dayjs";

import { CalendarDays } from "lucide-react";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

const CalendarCard = () => {
  const [open, setOpen] = useState(false);

  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="relative">
      {/* BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="
        h-[50px]
        w-full
        lg:px-6
        px-4
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
        cursor-pointer
      "
      >
        {/* LEFT CONTENT */}
        <div className="flex items-center gap-[14px]">
          {/* ICON */}
          <div className="flex items-center justify-center">
            <CalendarDays
              size={28}
              strokeWidth={1.7}
              className="text-[#7A8497]"
            />
          </div>

          {/* TEXT CONTENT */}
          <div className="flex flex-col items-start justify-center leading-none">
            {/* FLOATING LABEL */}
            <span
              className={`
          text-[#D7DCE5]
          transition-all
          duration-200
          ease-in-out
          font-medium
          ${
            selectedDate
              ? "text-[10px] uppercase tracking-[1px]"
              : "text-[15px]"
          }
        `}
            >
              Datepicker
            </span>

            {/* DATE */}
            <span
              className={`
          text-white
          font-medium
          overflow-hidden
          transition-all
          duration-200
          ease-in-out
          ${
            selectedDate
              ? "max-h-5 opacity-100 text-[13px] mt-[6px]"
              : "max-h-0 opacity-0"
          }
        `}
            >
              {selectedDate && selectedDate.format("DD-MMM-YYYY")}
            </span>
          </div>
        </div>
      </button>

      {/* CALENDAR */}
      {open && (
        <div className="absolute top-14 left-0 z-50 bg-white rounded-md shadow-md overflow-hidden">
          {/* HEADER */}
          <div className="px-5 pt-5">
            <p className="text-[15px] font-semibold tracking-wide uppercase text-[#285B6C] mb-2 ">
              Select Date
            </p>

            <h2 className="text-[30px] font-semibold text-[#285B6C]">
              {selectedDate
                ? selectedDate.format("ddd, MMM D")
                : "Select a date"}
            </h2>
          </div>

          {/* CALENDAR */}
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar
              value={selectedDate}
              onChange={(newValue) => {
                setSelectedDate(newValue);
                setOpen(false);
              }}
              sx={{
                width: {
                  xs: "100%",
                  sm: "360px",
                  md: "400px",
                },
                backgroundColor: "#FFFFFF",

                "&.MuiDateCalendar-root": {
                  maxHeight: "303px !important",
                  height: "303px !important",
                },

                "& .MuiPickersCalendarHeader-root": {
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  marginTop: "4px",
                  marginBottom: "8px",
                  minHeight: "40px",
                  justifyContent: "space-between",
                  marginBottom: "4px",
                },

                "& .MuiPickersCalendarHeader-label": {
                  fontSize: "16px",
                  fontWeight: 500,
                  color: "#4B5563",
                  textTransform: "uppercase",
                  letterSpacing: "0.4px",
                },

                "& .MuiPickersArrowSwitcher-button": {
                  color: "#6B7280",
                  padding: "4px",
                },

                "& .MuiDayCalendar-header": {
                  display: "flex",
                  justifyContent: "space-between",
                  paddingLeft: "18px",
                  paddingRight: "18px",
                },

                "& .MuiDayCalendar-weekContainer": {
                  display: "flex",
                  justifyContent: "space-between",
                  paddingLeft: "8px",
                  paddingRight: "8px",
                },

                "& .MuiDayCalendar-weekDayLabel": {
                  width: "36px",
                  height: "28px",
                  fontSize: "13px",
                  color: "#6B7280",
                  fontWeight: 700,
                },

                "& .MuiDayCalendar-monthContainer": {
                  paddingLeft: "10px",
                  paddingRight: "10px",
                },

                "& .Mui-selected": {
                  backgroundColor: "#285B6C !important",
                  color: "#FFFFFF !important",
                  fontWeight: 600,
                },

                "& .Mui-selected:hover": {
                  backgroundColor: "#234B5B !important",
                },

                "& .MuiPickersDay-root:hover": {
                  backgroundColor: "#E5E7EB",
                },
              }}
            />
          </LocalizationProvider>

          {/* FOOTER */}
          <div className="px-6 pb-5 pt-1">
            <div
              className="
                h-[30px]
                rounded-[3px]
                bg-[#F3EEDB]
                flex
                items-center
                px-3
                text-[12px]
                text-[#5B4B2A]
                font-medium
              "
            >
              Memorial Day
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarCard;
