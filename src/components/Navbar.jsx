import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../style";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
const Navbar = () => {
  const [active, setActive] = useState("");
  return (
    <nav
      className={`${styles.paddingX} w-full flex item-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to={"/"}
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="logo"
            // style={{ height: 70, width: 70, borderRadius: 35 }}
            className="w-12 h-12 object-contain"
          />
          <p className="text-white font-bold cursor-pointer">
            <span className="sm:block hidden ">Mustafa Hakimji</span>
          </p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
