import {
  Menu,
  X,
  Phone,
  Bell,
  Wrench,
  CircleUserRound,
} from "lucide-react";

import { useState } from "react";

const Navbar = ({
  mobile = false,
  iconsOnly = false,
}) => {
  const [open, setOpen] = useState(false);

  /* DESKTOP ICONS */
  if (iconsOnly) {
    return (
      <div className="flex items-center gap-5 text-[#BEBEBE]">
        
        <button className="hover:text-lime-300 transition" aria-label="Settings">
          <Wrench size={26} strokeWidth={1.8} />
        </button>

        <button className="hover:text-lime-300 transition" aria-label="Notifications">
          <Bell size={26} strokeWidth={1.8} />
        </button>

        <button className="hover:text-lime-300 transition" aria-label="Profile">
          <CircleUserRound size={26} strokeWidth={1.8} />
        </button>

      </div>
    );
  }

  /* MOBILE NAVBAR */
  if (mobile) {
    return (
      <>
        {/* LEFT */}
        <button
          onClick={() => setOpen(!open)}
          className="text-white"
        >
          {open ? (
            <X size={22} />
          ) : (
            <Menu size={22} />
          )}
        </button>

        {/* RIGHT */}
        <div className="flex items-center gap-5 text-white">
          
          <Phone size={16} strokeWidth={1.8} />

          <Bell size={16} strokeWidth={1.8} />

          <CircleUserRound size={18} strokeWidth={1.8} />

        </div>

        {/* MOBILE DROPDOWN */}
        <div
  className={`
    absolute
    top-[132px]
    left-0
    w-full
    bg-[#071327]
    border-t
    border-[#1E293B]
    overflow-hidden
    transition-all
    duration-300
    ease-in-out
    z-50
    ${
      open
        ? "max-h-60 opacity-100 py-5"
        : "max-h-0 opacity-0 py-0"
    }
  `}
>
  
  <div className="px-6 flex flex-col gap-5">
    
    <a
      href="#"
      className="text-[11px] uppercase tracking-[2px] text-white/80 hover:text-lime-400 transition"
    >
      Dashboard
    </a>

    <a
      href="#"
      className="text-[11px] uppercase tracking-[2px] text-white/80 hover:text-lime-400 transition"
    >
      Summary
    </a>

    <a
      href="#"
      className="text-[11px] uppercase tracking-[2px] text-white/80 hover:text-lime-400 transition"
    >
      Support
    </a>

  </div>

</div>
      </>
    );
  }

  /* DESKTOP MENU */
  return (
    <nav className="flex items-center gap-10 lg:gap-14" aria-label="Main navigation">
      
      <a
        href="#"
        className="text-[18px] uppercase tracking-[2px] text-[#EBEBEB] hover:text-lime-400 transition"
      >
        Dashboard
      </a>

      <a
        href="#"
        className="text-[18px] uppercase tracking-[2px] text-[#EBEBEB] hover:text-lime-400 transition"
      >
        Summary
      </a>

      <a
        href="#"
        className="text-[18px] uppercase tracking-[2px] text-[#EBEBEB] hover:text-lime-400 transition"
      >
        Support
      </a>

    </nav>
  );
};

export default Navbar;