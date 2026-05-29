import logo from "../../assets/logo.png";

import Navbar from "./Navbar";
import FilterSection from "./FilterSection";

const Header = () => {
  return (
    <header className="bg-[#121B2C]">
      {/* DESKTOP HEADER */}
      <div className="hidden lg:grid grid-cols-3 items-center h-[111px] px-6 lg:px-8">
        {/* LEFT : LOGO */}
        <div className="flex items-center">
          <div className="flex items-center gap-4">
            <img
              src={logo}
              alt="Rabbit Run"
              className="h-10 w-auto object-contain"
            />
          </div>
        </div>

        {/* CENTER : MENU */}
        <div className="flex justify-center">
          <Navbar />
        </div>

        {/* RIGHT : ICONS */}
        <div className="flex justify-end">
          <Navbar iconsOnly />
        </div>
      </div>

      {/* MOBILE HEADER */}
      <div className="lg:hidden">
        {/* LOGO ROW */}
        <div className="h-[74px] px-4 flex items-center justify-center border-b border-[#1E293B]">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Rabbit Run"
              className="h-8 w-auto object-contain"
            />
          </div>
        </div>

        {/* MENU + ICONS ROW */}
        <div className="h-[58px] px-4 flex items-center justify-between">
          <Navbar mobile />
        </div>
      </div>

      {/* FILTER SECTION */}
      <FilterSection />
    </header>
  );
};

export default Header;
