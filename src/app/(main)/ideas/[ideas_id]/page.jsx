import { GetIdeasById } from "@/lib/Action/GetData";
import Image from "next/image";
import Link from "next/link";
import {
  FiAlertCircle,
  FiArrowLeft,
  FiCalendar,
  FiDollarSign,
  FiLayers,
  FiTag,
  FiTarget,
  FiUser,
  FiUsers,
  FiZap,
} from "react-icons/fi";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { TbCategoryFilled } from "react-icons/tb";
import CommentsSection from "./CommentsSection";

const IdeasDetailsPage = async ({ params }) => {
  const { ideas_id } = await params;
  const ideasDetails = await GetIdeasById(ideas_id);
  console.log(ideasDetails);
  const {
    _id,
    title,
    imageUrl,
    category,
    shortDescription,
    detailedDescription,
    problemStatement,
    proposedSolution,
    estimatedBudget,
    createTime,
    tags,
    targetAudience,
    userInfo,
  } = ideasDetails;
  return (
    <div className="relative min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      {/* ── Fixed viewport background (dark only) ── */}
      <div className="pointer-events-none fixed inset-0 -z-10 hidden dark:block">
        {/* Deep gradient base */}
        <div className="absolute inset-0 bg-linear-to-br from-zinc-950 via-[#1a1035] to-zinc-950" />
        {/* Ambient glow blobs */}
        <div className="absolute -right-40 -top-40 h-150 w-150 rounded-full bg-[#5e41de]/15 blur-[140px]" />
        <div className="absolute -bottom-40 -left-40 h-150 w-150 rounded-full bg-[#a78bfa]/12 blur-[140px]" />
        <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5e41de]/8 blur-[100px]" />
      </div>
      {/* ── HERO ── */}
      <div className="relative h-72 w-full overflow-hidden md:h-95">
        {/* Gradient bg / image */}
        <div className="relative h-full w-full bg-linear-to-135deg from-yellow-500 via-amber-500 to-orange-500">
          {imageUrl && (
            <Image src={imageUrl} alt={title} fill className="object-cover" />
          )}
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border border-white/10" />
          <div className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full border border-white/10" />
        </div>
        {/* Scrim */}
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-black/10" />

        {/* Back button */}
        <div className="absolute left-0 right-0 top-0 mx-auto max-w-11/12 pt-5">
          <Link
            href="/ideas"
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
          >
            <FiArrowLeft size={13} />
            Back to Ideas
          </Link>
        </div>

        {/* Hero text */}
        <div className="absolute bottom-0 left-0 right-0 mx-auto max-w-11/12 pb-8">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-yellow-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-yellow-700 backdrop-blur-sm">
              <FiLayers size={10} />
              {category}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[10px] font-semibold text-white/90 backdrop-blur-sm">
              <FiCalendar size={10} />
              {createTime}
            </span>
          </div>
          <h1 className="text-2xl font-extrabold leading-tight text-white [text-shadow:0_2px_16px_rgba(0,0,0,0.5)] sm:text-3xl lg:text-4xl">
            {title}
          </h1>
          <p className="mt-2.5 max-w-2xl text-sm leading-relaxed text-white/70">
            {shortDescription}
          </p>
        </div>
      </div>

      {/* ── META ROW ── */}
      <div className="relative border-b border-zinc-200/70 bg-white dark:border-white/5 dark:bg-zinc-900/70 dark:backdrop-blur-sm">
        <div className="mx-auto max-w-11/12">
          <div className="flex flex-wrap items-stretch gap-px bg-zinc-100 shadow-xl dark:border-white/5 dark:bg-zinc-900/60 dark:shadow-[#5e41de]/15">
            <div className="flex flex-1 items-center gap-3 bg-white px-5 py-4 transition-colors hover:bg-zinc-50 dark:bg-zinc-900 dark:hover:bg-zinc-800/70">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#5e41de]/8 dark:bg-[#5e41de]/20">
                <TbCategoryFilled
                  size={13}
                  className="text-[#5e41de] dark:text-[#a78bfa]"
                />
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                  CATEGORY
                </p>
                <p className="text-[13px] font-bold text-zinc-800 dark:text-zinc-100">
                  {category}
                </p>
              </div>
            </div>
            <div className="flex flex-1 items-center gap-3 bg-white px-5 py-4 transition-colors hover:bg-zinc-50 dark:bg-zinc-900 dark:hover:bg-zinc-800/70">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#5e41de]/8 dark:bg-[#5e41de]/20">
                <FiCalendar
                  size={13}
                  className="text-[#5e41de] dark:text-[#a78bfa]"
                />
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                  POSTED
                </p>
                <p className="text-[13px] font-bold text-zinc-800 dark:text-zinc-100">
                  {createTime}
                </p>
              </div>
            </div>
            <div className="flex flex-1 items-center gap-3 bg-white px-5 py-4 transition-colors hover:bg-zinc-50 dark:bg-zinc-900 dark:hover:bg-zinc-800/70">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#5e41de]/8 dark:bg-[#5e41de]/20">
                <FiDollarSign
                  size={13}
                  className="text-[#5e41de] dark:text-[#a78bfa]"
                />
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                  BUDGET
                </p>
                <p className="text-[13px] font-bold text-zinc-800 dark:text-zinc-100">
                  {estimatedBudget}
                </p>
              </div>
            </div>
            <div className="flex flex-1 items-center gap-3 bg-white px-5 py-4 transition-colors hover:bg-zinc-50 dark:bg-zinc-900 dark:hover:bg-zinc-800/70">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#5e41de]/8 dark:bg-[#5e41de]/20">
                <FiUsers
                  size={13}
                  className="text-[#5e41de] dark:text-[#a78bfa]"
                />
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                  AUDIENCE
                </p>
                <p className="text-[13px] font-bold text-zinc-800 dark:text-zinc-100">
                  {targetAudience.length} groups
                </p>
              </div>
            </div>
            <div className="flex flex-1 items-center gap-3 bg-white px-5 py-4 transition-colors hover:bg-zinc-50 dark:bg-zinc-900 dark:hover:bg-zinc-800/70">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#5e41de]/8 dark:bg-[#5e41de]/20">
                <FiTag
                  size={13}
                  className="text-[#5e41de] dark:text-[#a78bfa]"
                />
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                  TAGS
                </p>
                <p className="text-[13px] font-bold text-zinc-800 dark:text-zinc-100">
                  {tags.length} tags
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── BODY ── */}
      <div className="relative mx-auto max-w-11/12 py-8 md:py-12">
        <div className="grid gap-7 lg:grid-cols-[1fr_290px]">
          {/* ── LEFT: content ── */}
          <div className="flex flex-col gap-5">
            {/* About */}
            <div className="rounded-2xl border border-zinc-100 border-l-4 border-l-[#5e41de] bg-white p-6 shadow-xl dark:border-white/5 dark:border-l-[#5e41de] dark:bg-zinc-900/60 dark:shadow-lg dark:shadow-[#5e41de]/10 dark:backdrop-blur-sm">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#5e41de]/8 dark:bg-[#5e41de]/15">
                  <RiLightbulbFlashLine
                    size={16}
                    className="text-[#5e41de] dark:text-[#a78bfa]"
                  />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                    Overview
                  </p>
                  <h2 className="text-[15px] font-bold text-zinc-800 dark:text-zinc-100">
                    About this Idea
                  </h2>
                </div>
              </div>
              <div className="mb-4 h-px w-full bg-zinc-100 dark:bg-[#5e41de]/15" />
              <p className="text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                {detailedDescription}
              </p>
            </div>

            {/* The Problem */}
            <div className="rounded-2xl border border-zinc-100 border-l-4 border-l-rose-500 bg-white p-6 shadow-xl dark:border-white/5 dark:border-l-rose-500 dark:bg-zinc-900/60 dark:shadow-lg dark:shadow-rose-500/8 dark:backdrop-blur-sm">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-rose-50 dark:bg-rose-900/20">
                  <FiAlertCircle
                    size={16}
                    className="text-rose-500 dark:text-rose-400"
                  />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                    Challenge
                  </p>
                  <h2 className="text-[15px] font-bold text-zinc-800 dark:text-zinc-100">
                    The Problem
                  </h2>
                </div>
              </div>
              <div className="mb-4 h-px w-full bg-zinc-100 dark:bg-rose-500/15" />
              <p className="text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                {problemStatement}
              </p>
            </div>

            {/* Proposed Solution */}
            <div className="rounded-2xl border border-zinc-100 border-l-4 border-l-emerald-500 bg-white p-6 shadow-xl dark:border-white/5 dark:border-l-emerald-500 dark:bg-zinc-900/60 dark:shadow-lg dark:shadow-emerald-500/8 dark:backdrop-blur-sm">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-50 dark:bg-emerald-900/20">
                  <FiZap
                    size={16}
                    className="text-emerald-600 dark:text-emerald-400"
                  />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                    Solution
                  </p>
                  <h2 className="text-[15px] font-bold text-zinc-800 dark:text-zinc-100">
                    Proposed Solution
                  </h2>
                </div>
              </div>
              <div className="mb-4 h-px w-full bg-zinc-100 dark:bg-emerald-500/15" />
              <p className="text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                {proposedSolution}
              </p>
            </div>
          </div>

          {/* ── RIGHT: sidebar ── */}
          <aside className="flex flex-col gap-4 lg:sticky lg:top-20 lg:self-start">
            {/* Author */}
            <div className="rounded-2xl border border-zinc-200/80 bg-white p-4 shadow-xl dark:border-white/5 dark:bg-zinc-900/60 dark:shadow-lg dark:shadow-[#5e41de]/10 dark:backdrop-blur-sm">
              <div className="mb-3 flex items-center gap-3">
                <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-xl">
                  {userInfo?.image ? (
                    <Image
                      src={userInfo.image}
                      alt={userInfo?.name || "Author"}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <span className="flex h-full w-full items-center justify-center bg-linear-to-br from-yellow-500 to-amber-600 text-sm font-bold text-white">
                      {userInfo?.name?.charAt(0)?.toUpperCase() ?? "?"}
                    </span>
                  )}
                </div>

                <div>
                  <p className="text-sm font-bold text-zinc-800 dark:text-zinc-100">
                    {userInfo?.name}
                  </p>
                  <p className="text-[10px] font-semibold text-[#5e41de] dark:text-[#a78bfa]">
                    Idea Creator
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2 rounded-lg bg-zinc-100/70 px-3 py-2 dark:border dark:border-[#5e41de]/12 dark:bg-[#5e41de]/8">
                  <FiUser
                    size={11}
                    className="shrink-0 text-zinc-400 dark:text-zinc-500"
                  />
                  <p className="truncate text-xs text-zinc-500 dark:text-zinc-400">
                    {userInfo?.email}
                  </p>
                </div>
                <div className="flex items-center gap-2 rounded-lg bg-zinc-100/70 px-3 py-2 dark:border dark:border-[#5e41de]/12 dark:bg-[#5e41de]/8">
                  <FiCalendar
                    size={11}
                    className="shrink-0 text-[#5e41de] dark:text-[#a78bfa]"
                  />
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    Posted {createTime}
                  </p>
                </div>
              </div>
            </div>

            {/* Budget */}
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:shadow-lg dark:shadow-emerald-500/10 dark:backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 dark:bg-emerald-900/40">
                  <FiDollarSign
                    size={17}
                    className="text-emerald-600 dark:text-emerald-400"
                  />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-500/70 dark:text-emerald-400/60">
                    Est. Budget
                  </p>
                  <p className="text-2xl font-extrabold text-emerald-700 dark:text-emerald-300">
                    {estimatedBudget}
                  </p>
                </div>
              </div>
              <p className="mt-3 text-[11px] text-emerald-600/60 dark:text-emerald-500/50">
                Required to launch this idea
              </p>
            </div>

            {/* Tags */}
            <div className="rounded-2xl border border-zinc-200/80 bg-white p-4 shadow-xl dark:border-white/5 dark:bg-zinc-900/60 dark:shadow-lg dark:shadow-[#5e41de]/10 dark:backdrop-blur-sm">
              <div className="mb-3 flex items-center gap-2">
                <FiTag
                  size={12}
                  className="text-[#5e41de] dark:text-[#a78bfa]"
                />
                <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                  Tags
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 rounded-lg border border-[#5e41de]/15 bg-[#5e41de]/6 px-2.5 py-1 text-xs font-semibold text-[#5e41de] dark:border-[#5e41de]/25 dark:bg-[#5e41de]/15 dark:text-[#a78bfa]"
                  >
                    <FiTag size={9} />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Target Audience */}
            <div className="rounded-2xl border border-zinc-200/80 bg-white p-4 shadow-xl dark:border-white/5 dark:bg-zinc-900/60 dark:shadow-lg dark:shadow-[#5e41de]/10 dark:backdrop-blur-sm">
              <div className="mb-3 flex items-center gap-2">
                <FiUsers
                  size={12}
                  className="text-[#5e41de] dark:text-[#a78bfa]"
                />
                <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                  Target Audience
                </p>
              </div>
              <div className="flex flex-col gap-1.5">
                {targetAudience.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-lg bg-zinc-100/60 px-3 py-2 dark:border dark:border-[#5e41de]/10 dark:bg-[#5e41de]/8"
                  >
                    <FiTarget
                      size={10}
                      className="shrink-0 text-[#5e41de] dark:text-[#a78bfa]"
                    />
                    <span className="text-xs font-medium text-zinc-600 dark:text-zinc-400">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>

        {/* ── Divider ── */}
        <div className="my-10 h-px w-full bg-linear-to-r from-transparent via-zinc-200 to-transparent dark:via-[#5e41de]/30" />

        {/* ── Comments ── */}
        <CommentsSection />
      </div>
    </div>
  );
};
export default IdeasDetailsPage;
