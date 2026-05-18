"use client";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import NavLink from "./NavLink";

const Hamburger = ({ navLinks }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative md:hidden">
      <button
        className="rounded-lg p-1.5 text-[#5e41de] dark:text-[#a78bfa] hover:bg-[#5e41de]/10 dark:hover:bg-[#5e41de]/20 active:bg-[#5e41de] active:text-white transition-all duration-200 flex items-center justify-center"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <HiX size={22} /> : <HiMenu size={22} />}
      </button>

      <div
        className={`absolute left-0 top-11 mt-1 w-56 rounded-xl border border-[#5e41de]/20 dark:border-[#5e41de]/30 bg-white dark:bg-zinc-900 shadow-xl shadow-[#5e41de]/10 dark:shadow-[#5e41de]/20 ring-1 ring-[#5e41de]/10 transition-all duration-200 origin-top ${
          menuOpen
            ? "scale-y-100 opacity-100 pointer-events-auto"
            : "scale-y-0 opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col gap-1.5 p-2">
          {navLinks.map((navItems, index) => (
            <NavLink
              key={index}
              navItems={navItems}
              onClick={() => setMenuOpen(false)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Hamburger;
