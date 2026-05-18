import { auth } from "@/lib/auth";
import { format } from "date-fns";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import {
  FiCalendar,
  FiEdit3,
  FiMessageSquare,
  FiShield,
  FiThumbsUp,
  FiZap,
} from "react-icons/fi";
import { RiLightbulbFlashFill } from "react-icons/ri";
import {
  MdOutlineExplore,
  MdOutlineInterests,
  MdOutlineTipsAndUpdates,
} from "react-icons/md";

const Profile = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    redirect("/signin");
  }

  const user = session.user;
  const memberSinceDate = session?.session?.createdAt || user?.createdAt;
  const memberSince = memberSinceDate
    ? format(new Date(memberSinceDate), "MMMM yyyy")
    : "Recently joined";

  const profileImage =
    user.image || "https://img.icons8.com/color/1200/user.jpg";

  const stats = [
    { label: "Ideas Shared", value: "0", icon: FiZap, tip: "Share your first idea" },
    { label: "Interactions", value: "0", icon: FiMessageSquare, tip: "Vote, comment & discuss" },
    { label: "Upvotes Received", value: "0", icon: FiThumbsUp, tip: "Earn recognition" },
  ];

  const featureCards = [
    {
      href: "/add-idea",
      icon: MdOutlineTipsAndUpdates,
      label: "Share an Idea",
      desc: "Post your startup concept and get feedback from the community.",
      primary: true,
    },
    {
      href: "/ideas",
      icon: MdOutlineExplore,
      label: "Discover Ideas",
      desc: "Browse and upvote innovative startup ideas from other innovators.",
      primary: false,
    },
    {
      href: "/my-ideas",
      icon: FiZap,
      label: "My Ideas",
      desc: "Review, edit, and manage all the ideas you've submitted.",
      primary: false,
    },
    {
      href: "/my-interactions",
      icon: MdOutlineInterests,
      label: "My Interactions",
      desc: "See everything you've upvoted, commented on, or bookmarked.",
      primary: false,
    },
  ];

  return (
    <section className="relative mx-auto w-full max-w-10/12 overflow-hidden py-8 md:py-10 lg:py-14">
      {/* Page-level blobs */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-[#5e41de]/8 blur-3xl dark:bg-[#5e41de]/15" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-[#a78bfa]/8 blur-3xl dark:bg-[#a78bfa]/15" />

      <div className="relative overflow-hidden rounded-3xl border border-[#5e41de]/15 bg-white shadow-2xl shadow-[#5e41de]/10 dark:border-[#5e41de]/25 dark:bg-zinc-950 dark:shadow-[#5e41de]/20">
        {/* Inner card gradient (matches signin) */}
        <div className="absolute inset-0 -z-10 bg-linear-to-br from-white via-[#5e41de]/5 to-[#a78bfa]/10 dark:from-zinc-950 dark:via-[#5e41de]/8 dark:to-[#a78bfa]/5" />
        {/* Inner blobs */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#5e41de]/8 blur-3xl dark:bg-[#5e41de]/12" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-[#a78bfa]/8 blur-3xl dark:bg-[#a78bfa]/12" />
        {/* Top accent line */}
        <div className="h-1 w-full bg-linear-to-r from-[#5e41de] via-[#a78bfa] to-[#5e41de]" />

        <div className="grid gap-6 p-5 sm:p-6 md:gap-8 md:p-8 lg:grid-cols-[268px_1fr] lg:p-10">

          {/* ── Sidebar ── */}
          <aside className="flex flex-col items-center gap-5 rounded-2xl border border-[#5e41de]/12 bg-white/70 p-5 sm:p-6 dark:border-[#5e41de]/20 dark:bg-zinc-900/60">
            {/* Avatar */}
            <div className="relative mt-1">
              <div className="h-24 w-24 overflow-hidden rounded-full ring-4 ring-[#5e41de]/35 ring-offset-2 ring-offset-white sm:h-28 sm:w-28 dark:ring-[#a78bfa]/40 dark:ring-offset-zinc-900">
                <Image
                  src={profileImage}
                  alt={`${user.name || "User"} avatar`}
                  className="h-full w-full object-cover"
                  height={500}
                  width={500}
                />
              </div>
              {/* Online dot */}
              <span className="absolute bottom-1 right-1 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400 ring-2 ring-white dark:ring-zinc-900">
                <span className="h-2 w-2 animate-pulse rounded-full bg-white" />
              </span>
            </div>

            {/* Name / email */}
            <div className="text-center">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#5e41de]/20 bg-[#5e41de]/8 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-[#5e41de] dark:border-[#5e41de]/30 dark:text-[#a78bfa]">
                <RiLightbulbFlashFill className="animate-pulse" /> Innovator
              </span>
              <h1 className="mt-2 wrap-break-word text-xl font-extrabold text-zinc-800 sm:text-2xl dark:text-zinc-100">
                {user.name || "IdeaVault Member"}
              </h1>
              <p className="mt-0.5 break-all text-sm text-zinc-400 dark:text-zinc-500">
                {user.email}
              </p>
            </div>

            {/* Divider */}
            <div className="h-px w-full bg-[#5e41de]/10 dark:bg-[#5e41de]/20" />

            {/* Meta chips */}
            <div className="w-full space-y-2">
              <div className="flex items-center gap-2.5 rounded-xl border border-[#5e41de]/10 bg-[#5e41de]/5 px-3 py-2.5 dark:border-[#5e41de]/15 dark:bg-[#5e41de]/10">
                <FiCalendar size={13} className="shrink-0 text-[#5e41de] dark:text-[#a78bfa]" />
                <span className="text-xs text-zinc-600 dark:text-zinc-300">
                  <span className="font-semibold">Joined</span> {memberSince}
                </span>
              </div>
              <div className="flex items-center gap-2.5 rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2.5 dark:border-emerald-500/20 dark:bg-emerald-500/8">
                <FiShield size={13} className="shrink-0 text-emerald-500" />
                <span className="text-xs font-medium text-emerald-700 dark:text-emerald-400">
                  Account Active
                </span>
              </div>
            </div>

            {/* Edit button */}
            <Link
              href="/update-profile"
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#5e41de]/25 bg-transparent px-4 py-2.5 text-sm font-semibold text-[#5e41de] transition-all duration-200 hover:border-[#5e41de]/50 hover:bg-[#5e41de]/8 hover:shadow-sm dark:border-[#5e41de]/30 dark:text-[#a78bfa] dark:hover:bg-[#5e41de]/15"
            >
              <FiEdit3 size={14} />
              Edit Profile
            </Link>
          </aside>

          {/* ── Main content ── */}
          <div className="space-y-6">

            {/* Header */}
            <header>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#5e41de]/25 bg-[#5e41de]/10 px-3.5 py-1.5 text-xs font-semibold text-[#5e41de] dark:border-[#5e41de]/30 dark:text-[#a78bfa]">
                <RiLightbulbFlashFill className="animate-pulse" /> IdeaVault Dashboard
              </span>
              <h2 className="mt-3 text-2xl font-extrabold leading-tight text-zinc-800 sm:text-3xl lg:text-4xl dark:text-zinc-100">
                Welcome back,{" "}
                <span className="bg-linear-to-r from-[#5e41de] to-[#a78bfa] bg-clip-text text-transparent">
                  {user.name?.split(" ")[0] || "Innovator"}
                </span>
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-500 sm:text-base dark:text-zinc-400">
                Manage your startup ideas, track interactions, and connect with
                fellow innovators on IdeaVault.
              </p>
            </header>

            {/* Stats — 3 cards */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {stats.map(({ label, value, icon: Icon, tip }) => (
                <div
                  key={label}
                  className="rounded-2xl border border-[#5e41de]/12 bg-white/80 px-4 py-4 transition-all duration-200 hover:border-[#5e41de]/30 hover:shadow-md hover:shadow-[#5e41de]/8 dark:border-[#5e41de]/20 dark:bg-zinc-900/60"
                >
                  <div className="flex items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#5e41de]/10 dark:bg-[#5e41de]/20">
                      <Icon size={15} className="text-[#5e41de] dark:text-[#a78bfa]" />
                    </span>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                      {label}
                    </p>
                  </div>
                  <p className="mt-3 text-3xl font-extrabold text-[#5e41de] dark:text-[#a78bfa]">
                    {value}
                  </p>
                  <p className="mt-1 text-[11px] text-zinc-400 dark:text-zinc-500">{tip}</p>
                </div>
              ))}
            </div>

            {/* Feature cards — 2×2 grid */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {featureCards.map(({ href, icon: Icon, label, desc, primary }) => (
                <Link
                  key={href}
                  href={href}
                  className={`group flex flex-col gap-3 rounded-2xl border p-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg sm:p-5 ${
                    primary
                      ? "border-[#5e41de]/30 bg-linear-to-br from-[#5e41de]/10 to-[#a78bfa]/10 hover:border-[#5e41de]/50 hover:shadow-[#5e41de]/15 dark:border-[#5e41de]/40 dark:from-[#5e41de]/15 dark:to-[#a78bfa]/10"
                      : "border-[#5e41de]/10 bg-white/80 hover:border-[#5e41de]/25 hover:shadow-[#5e41de]/8 dark:border-[#5e41de]/15 dark:bg-zinc-900/60"
                  }`}
                >
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-xl transition-transform duration-200 group-hover:scale-110 ${
                      primary
                        ? "bg-[#5e41de] text-white shadow-md shadow-[#5e41de]/30"
                        : "bg-[#5e41de]/10 text-[#5e41de] dark:bg-[#5e41de]/20 dark:text-[#a78bfa]"
                    }`}
                  >
                    <Icon size={18} />
                  </span>
                  <div>
                    <p
                      className={`font-bold ${
                        primary
                          ? "text-[#5e41de] dark:text-[#a78bfa]"
                          : "text-zinc-700 dark:text-zinc-200"
                      }`}
                    >
                      {label}
                    </p>
                    <p className="mt-0.5 text-xs leading-relaxed text-zinc-400 dark:text-zinc-500">
                      {desc}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
