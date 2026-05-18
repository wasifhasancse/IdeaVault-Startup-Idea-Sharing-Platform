"use client";
import Link from "next/link";
import {
  FiBookOpen,
  FiEdit2,
  FiHome,
  FiMessageSquare,
  FiZap,
} from "react-icons/fi";
import DarkModeSwitch from "./DarkModeSwitch";
import Hamburger from "./Hamburger";
import LogoWithAnimation from "./LogoWithAnimation";
import NavLink from "./NavLink";
import UserNavProfile from "./UserNavProfile";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const { data: userData } = authClient.useSession();
  // const isLoggedIn = Boolean(userData?.session);
  const isLoggedIn = Boolean(true);

  const publicLinks = [
    { href: "/", label: "Home", icon: FiHome },
    { href: "/ideas", label: "Ideas", icon: FiZap },
  ];

  const privateLinks = [
    { href: "/add-idea", label: "Add Idea", icon: FiEdit2, isPrimary: true },
    { href: "/my-ideas", label: "My Ideas", icon: FiBookOpen },
    {
      href: "/my-interactions",
      label: "My Interactions",
      icon: FiMessageSquare,
    },
  ];

  const navLinks = isLoggedIn ? [...publicLinks, ...privateLinks] : publicLinks;

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[#5e41de]/15 dark:border-[#5e41de]/25 bg-white/85 dark:bg-zinc-950/85 backdrop-blur-md">
      <div className="mx-auto h-16 max-w-11/12 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Hamburger navLinks={navLinks} />
          <Link href="/" className="flex items-center">
            <LogoWithAnimation />
          </Link>
        </div>

        <ul className="hidden items-center gap-2 md:flex">
          {navLinks.map((navItems, index) => (
            <NavLink key={index} navItems={navItems} />
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <DarkModeSwitch />
          <UserNavProfile />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
