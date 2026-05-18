"use client";
import { toast } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { FiLogIn, FiLogOut, FiUser } from "react-icons/fi";

const UserNavProfile = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  // const { data: userData, isPending } = authClient.useSession();
  const isPending = Boolean(false);
  const isSignedIn = Boolean(true);

  const manageSignOut = () => {
    toast.success("Signed out successfully, See you again!");
    authClient.signOut();
  };

  return (
    <>
      {isPending ? (
        <div className="h-9 w-9 rounded-full border-2 border-[#5e41de]/30 border-t-[#5e41de] animate-spin" />
      ) : !isSignedIn ? (
        <Link
          href="/signin"
          className="flex items-center gap-2 rounded-lg bg-[#5e41de] px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#4930b8] active:bg-[#3b2592] shadow-sm shadow-[#5e41de]/25 hover:shadow-md hover:shadow-[#5e41de]/20"
        >
          <FiLogIn size={16} />
          Login
        </Link>
      ) : (
        <div className="relative">
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="relative h-10 w-10 cursor-pointer overflow-hidden rounded-full border-2 border-[#5e41de]/30 ring-2 ring-[#5e41de]/40 shadow-md shadow-[#5e41de]/15 transition-all duration-200 hover:scale-105 hover:ring-[#5e41de]/60 focus:outline-none"
            aria-label="User menu"
          >
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
          </button>

          <div
            className={`absolute right-0 top-12 mt-1 w-60 origin-top rounded-2xl border border-[#5e41de]/20 dark:border-[#5e41de]/30 bg-white dark:bg-zinc-900 p-2 shadow-xl shadow-[#5e41de]/15 dark:shadow-[#5e41de]/25 ring-1 ring-[#5e41de]/10 transition-all duration-200 ${
              menuOpen
                ? "scale-100 opacity-100 pointer-events-auto"
                : "scale-95 opacity-0 pointer-events-none"
            }`}
          >
            <div className="mb-2 flex flex-col items-center gap-1.5 rounded-xl bg-linear-to-br from-[#5e41de]/10 via-[#5e41de]/5 to-[#a78bfa]/10 dark:from-[#5e41de]/20 dark:to-[#a78bfa]/15 px-3 py-4">
              <FaUserAlt
                className="text-[#5e41de] dark:text-[#a78bfa]"
                size={20}
              />
              <p className="truncate text-sm font-bold text-[#5e41de] dark:text-[#a78bfa] text-center">
                {userData?.user?.name}
              </p>
              <p className="truncate text-xs text-zinc-400 dark:text-zinc-500 text-center">
                {userData?.user?.email}
              </p>
            </div>
            <ul className="flex flex-col gap-1.5 p-1">
              <li>
                <Link
                  href="/profile"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2 rounded-xl border border-[#5e41de]/20 dark:border-[#5e41de]/30 bg-transparent dark:bg-zinc-800/50 px-3 py-2 text-sm font-semibold text-[#5e41de] dark:text-[#a78bfa] transition-all duration-200 hover:border-[#5e41de]/50 hover:bg-[#5e41de]/5 dark:hover:bg-[#5e41de]/15"
                >
                  <FiUser size={15} />
                  Profile Management
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    manageSignOut();
                    setMenuOpen(false);
                  }}
                  href="/signin"
                  className="flex items-center gap-2 rounded-xl bg-[#5e41de] px-3 py-2 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#4930b8] active:bg-[#3b2592]"
                >
                  <FiLogOut size={15} />
                  Sign Out
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default UserNavProfile;
