"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ navItems, onClick }) => {
  const pathname = usePathname();
  const isActive = navItems.href === pathname;
  const Icon = navItems.icon;

  if (navItems.isPrimary) {
    return (
      <li>
        <Link
          href={navItems.href}
          onClick={onClick}
          className="flex items-center gap-2 rounded-lg bg-[#5e41de] px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#4930b8] active:bg-[#3b2592] shadow-sm shadow-[#5e41de40]"
        >
          {Icon && <Icon size={15} />}
          {navItems.label}
        </Link>
      </li>
    );
  }

  return (
    <li>
      <Link
        href={navItems.href}
        onClick={onClick}
        className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
          isActive
            ? "bg-[#5e41de] text-white shadow-sm shadow-[#5e41de40]"
            : "text-[#5e41de] dark:text-[#a78bfa] hover:bg-[#5e41de]/10 dark:hover:bg-[#5e41de]/20 hover:text-[#4930b8] dark:hover:text-[#c4b5fd] active:bg-[#5e41de] active:text-white"
        }`}
      >
        {Icon && <Icon size={15} />}
        {navItems.label}
      </Link>
    </li>
  );
};

export default NavLink;
