"use client";
import { authClient } from "@/lib/auth-client";
import { toast } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FiLogIn, FiLogOut, FiUser } from "react-icons/fi";
import PrimaryButton from "../Button/PrimaryButton";

const UserNavProfile = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const { data: userData, isPending } = authClient.useSession();
  const isSignedIn = Boolean(userData?.user);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  const manageSignOut = () => {
    toast.success("Signed out successfully, See you again!");
    authClient.signOut();
  };

  return (
    <>
      {isPending ? (
        <div className="h-9 w-9 rounded-full border-2 border-[#5e41de]/30 border-t-[#5e41de] animate-spin" />
      ) : !isSignedIn ? (
        <PrimaryButton href={"/signin"} label={"Sign In"} icon={FiLogIn} />
      ) : (
        <div className="relative" ref={menuRef}>
          {/* Avatar trigger */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="User menu"
            aria-expanded={menuOpen}
            className="group relative h-10 w-10 cursor-pointer overflow-hidden rounded-full border-2 border-[#5e41de]/35 shadow-md shadow-[#5e41de]/20 transition-all duration-200 hover:border-[#5e41de]/65 hover:shadow-lg hover:shadow-[#5e41de]/30 focus:outline-none"
          >
            <Image
              src={
                userData?.user?.image ||
                "https://img.icons8.com/color/1200/user.jpg"
              }
              alt="User avatar"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              height={200}
              width={200}
            />
            <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-white bg-emerald-400 dark:border-zinc-950" />
          </button>

          {/* Dropdown */}
          <div
            className={`absolute right-0 top-12 mt-1 w-64 origin-top-right rounded-2xl border border-[#5e41de]/20 dark:border-[#5e41de]/30 bg-white dark:bg-zinc-900 shadow-2xl shadow-[#5e41de]/15 dark:shadow-[#5e41de]/25 ring-1 ring-[#5e41de]/10 transition-all duration-200 overflow-hidden ${
              menuOpen
                ? "scale-100 opacity-100 pointer-events-auto"
                : "scale-95 opacity-0 pointer-events-none"
            }`}
          >
            {/* User header */}
            <div className="flex items-center gap-3 bg-linear-to-br from-[#5e41de]/10 via-[#5e41de]/5 to-[#a78bfa]/10 dark:from-[#5e41de]/20 dark:to-[#a78bfa]/15 px-4 py-4">
              <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 border-[#5e41de]/40">
                <Image
                  src={
                    userData?.user?.image ||
                    "https://img.icons8.com/color/1200/user.jpg"
                  }
                  alt="User avatar"
                  className="h-full w-full object-cover"
                  height={200}
                  width={200}
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-bold text-zinc-900 dark:text-zinc-50">
                  {userData?.user?.name}
                </p>
                <p className="truncate text-xs text-zinc-500 dark:text-zinc-400">
                  {userData?.user?.email}
                </p>
                <span className="mt-1 inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-500">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Active
                </span>
              </div>
            </div>

            {/* Menu items */}
            <ul className="flex flex-col gap-1 p-2">
              <li>
                <Link
                  href="/profile"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-semibold text-zinc-700 dark:text-zinc-300 transition-all duration-150 hover:bg-[#5e41de]/10 hover:text-[#5e41de] dark:hover:bg-[#5e41de]/15 dark:hover:text-[#a78bfa]"
                >
                  <FiUser
                    size={15}
                    className="text-[#5e41de] dark:text-[#a78bfa] shrink-0"
                  />
                  Profile Management
                </Link>
              </li>
              <li>
                <button
                  onClick={() => {
                    manageSignOut();
                    setMenuOpen(false);
                  }}
                  className="flex w-full items-center gap-2.5 rounded-xl border border-[#5e41de]/20 bg-[#5e41de]/8 px-3 py-2.5 text-sm font-semibold text-[#5e41de] dark:border-[#5e41de]/30 dark:bg-[#5e41de]/12 dark:text-[#a78bfa] transition-all duration-150 hover:border-[#5e41de] hover:bg-[#5e41de] hover:text-white dark:hover:bg-[#5e41de] dark:hover:text-white"
                >
                  <FiLogOut size={15} className="shrink-0" />
                  Sign Out
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default UserNavProfile;
