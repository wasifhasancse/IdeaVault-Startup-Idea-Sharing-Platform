import DeleteButton from "@/components/Button/DeleteButton";
import { GetMyIdeas } from "@/lib/Action/CrudAction";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import {
  FiCalendar,
  FiDollarSign,
  FiEdit3,
  FiEye,
  FiLayers,
  FiMessageSquare,
  FiPlus,
  FiSearch,
  FiTag,
  FiThumbsUp,
  FiZap,
} from "react-icons/fi";
import { RiLightbulbFlashFill, RiLightbulbFlashLine } from "react-icons/ri";

const CATEGORY_PILL = {
  Tech: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
  Health:
    "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
  AI: "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300",
  Education:
    "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300",
  Finance:
    "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
  Environment:
    "bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300",
  Social: "bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-300",
  Entertainment:
    "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
  Retail: "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300",
  Other: "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400",
};

const CATEGORY_BAR = {
  Tech: "from-blue-500 to-indigo-600",
  Health: "from-green-500 to-emerald-600",
  AI: "from-violet-500 to-purple-700",
  Education: "from-yellow-400 to-amber-500",
  Finance: "from-emerald-500 to-teal-600",
  Environment: "from-teal-500 to-cyan-600",
  Social: "from-pink-500 to-rose-500",
  Entertainment: "from-orange-400 to-red-500",
  Retail: "from-rose-400 to-pink-600",
  Other: "from-[#5e41de] to-[#a78bfa]",
};

const MyIdeas = async () => {
  const { session } = await auth.api.getSession({ headers: await headers() });
  const myIdeas = await GetMyIdeas(session?.userId);
  return (
    <section className="relative min-h-screen overflow-hidden bg-linear-to-br from-white via-[#5e41de]/5 to-[#a78bfa]/10 py-10 dark:from-zinc-950 dark:via-[#5e41de]/10 dark:to-[#a78bfa]/5 md:py-14 lg:py-16">
      {/* Background blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[#5e41de]/10 blur-3xl dark:bg-[#5e41de]/20" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#a78bfa]/10 blur-3xl dark:bg-[#a78bfa]/20" />
        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5e41de]/5 blur-2xl dark:bg-[#5e41de]/10" />
      </div>

      <div className="relative mx-auto max-w-11/12">
        {/* Top accent line */}
        <div className="mb-8 h-px w-full bg-linear-to-r from-transparent via-[#5e41de]/50 to-transparent" />

        {/* ── Page header ── */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#5e41de]/25 bg-[#5e41de]/8 px-3.5 py-1.5 text-xs font-semibold text-[#5e41de] dark:border-[#5e41de]/30 dark:text-[#a78bfa]">
              <RiLightbulbFlashFill className="animate-pulse" />
              Your Idea Lab
            </span>
            <h1 className="mt-3 text-3xl font-extrabold leading-tight text-zinc-800 sm:text-4xl dark:text-zinc-100">
              My{" "}
              <span className="bg-linear-to-r from-[#5e41de] to-[#a78bfa] bg-clip-text text-transparent">
                Ideas
              </span>
            </h1>
            <p className="mt-1.5 max-w-lg text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
              Manage, edit, and track the performance of all the startup ideas
              you&apos;ve shared with the community.
            </p>
          </div>

          {/* Add new idea CTA */}
          <Link
            href="/add-idea"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-linear-to-r from-[#5e41de] to-[#7c5ce7] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#5e41de]/30 transition-all duration-200 hover:shadow-xl hover:shadow-[#5e41de]/40 hover:brightness-110"
          >
            <FiPlus size={15} />
            New Idea
          </Link>
        </div>

        {/* ── Stats row ── */}
        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="flex items-center gap-4 rounded-2xl border border-white/70 bg-white/70 px-5 py-4  backdrop-blur-sm shadow-xl shadow-[#5e41de]/8 dark:border-white/5 dark:bg-zinc-900/60 dark:shadow-[#5e41de]/15">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#5e41de]/10 dark:bg-[#5e41de]/20">
              <FiZap size={18} className="text-[#5e41de] dark:text-[#a78bfa]" />
            </span>
            <div>
              <p className="text-2xl font-extrabold leading-none text-[#5e41de] dark:text-[#a78bfa]">
                {myIdeas?.length ?? 0}
              </p>
              <p className="mt-0.5 text-[12px] font-semibold text-zinc-700 dark:text-zinc-300">
                Total Ideas
              </p>
              <p className="text-[10px] text-zinc-400 dark:text-zinc-500">
                Ideas you&apos;ve submitted
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 rounded-2xl border border-white/70 bg-white/70 px-5 py-4  backdrop-blur-sm shadow-xl shadow-[#5e41de]/8 dark:border-white/5 dark:bg-zinc-900/60 dark:shadow-[#5e41de]/15">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#5e41de]/10 dark:bg-[#5e41de]/20">
              <FiThumbsUp
                size={18}
                className="text-[#5e41de] dark:text-[#a78bfa]"
              />
            </span>
            <div>
              <p className="text-2xl font-extrabold leading-none text-[#5e41de] dark:text-[#a78bfa]">
                {/* {idea?.upvotes ?? 0} */}
              </p>
              <p className="mt-0.5 text-[12px] font-semibold text-zinc-700 dark:text-zinc-300">
                Total Upvotes
              </p>
              <p className="text-[10px] text-zinc-400 dark:text-zinc-500">
                Community recognition
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 rounded-2xl border border-white/70 bg-white/70 px-5 py-4 backdrop-blur-sm  shadow-xl shadow-[#5e41de]/8 dark:border-white/5 dark:bg-zinc-900/60 dark:shadow-[#5e41de]/15">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#5e41de]/10 dark:bg-[#5e41de]/20">
              <FiMessageSquare
                size={18}
                className="text-[#5e41de] dark:text-[#a78bfa]"
              />
            </span>
            <div>
              <p className="text-2xl font-extrabold leading-none text-[#5e41de] dark:text-[#a78bfa]">
                {/* {idea?.comments ?? 0} */}
              </p>
              <p className="mt-0.5 text-[12px] font-semibold text-zinc-700 dark:text-zinc-300">
                Comments
              </p>
              <p className="text-[10px] text-zinc-400 dark:text-zinc-500">
                Comments on your ideas
              </p>
            </div>
          </div>
        </div>

        {/* ── Filter bar ── */}
        <div className="mb-7 rounded-2xl border border-[#5e41de]/12 bg-white/80 p-4 shadow-sm shadow-[#5e41de]/6 backdrop-blur-sm dark:border-[#5e41de]/20 dark:bg-zinc-900/70 sm:p-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            {/* Search */}
            <div className="relative min-w-0 flex-1">
              <FiSearch
                size={15}
                className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400"
              />
              <input
                type="text"
                placeholder="Search your ideas…"
                className="w-full rounded-xl border border-[#5e41de]/18 bg-white py-2.5 pl-9 pr-4 text-sm text-zinc-700 placeholder-zinc-400 outline-none transition-all duration-200 focus:border-[#5e41de]/50 focus:ring-2 focus:ring-[#5e41de]/12 dark:border-[#5e41de]/25 dark:bg-zinc-800/60 dark:text-zinc-200 dark:placeholder-zinc-500 dark:focus:border-[#5e41de]/50"
              />
            </div>

            {/* Category */}
            <div className="flex items-center gap-2">
              <FiLayers size={13} className="shrink-0 text-[#5e41de]" />
              <select className="rounded-xl border border-[#5e41de]/18 bg-white py-2.5 pl-3 pr-8 text-sm text-zinc-700 outline-none transition-all duration-200 focus:border-[#5e41de]/50 focus:ring-2 focus:ring-[#5e41de]/12 dark:border-[#5e41de]/25 dark:bg-zinc-800/60 dark:text-zinc-200">
                <option value="">All Categories</option>
                {[
                  "Tech",
                  "Health",
                  "AI",
                  "Education",
                  "Finance",
                  "Environment",
                  "Social",
                  "Entertainment",
                  "Retail",
                  "Other",
                ].map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            {/* Status */}
            <div className="flex items-center gap-2">
              <FiZap size={13} className="shrink-0 text-[#5e41de]" />
              <select className="rounded-xl border border-[#5e41de]/18 bg-white py-2.5 pl-3 pr-8 text-sm text-zinc-700 outline-none transition-all duration-200 focus:border-[#5e41de]/50 focus:ring-2 focus:ring-[#5e41de]/12 dark:border-[#5e41de]/25 dark:bg-zinc-800/60 dark:text-zinc-200">
                <option value="">All Status</option>
                <option value="published">Published</option>
                <option value="draft">Draft</option>
              </select>
            </div>

            {/* Sort */}
            <div className="flex items-center gap-2">
              <FiCalendar size={13} className="shrink-0 text-[#5e41de]" />
              <select className="rounded-xl border border-[#5e41de]/18 bg-white py-2.5 pl-3 pr-8 text-sm text-zinc-700 outline-none transition-all duration-200 focus:border-[#5e41de]/50 focus:ring-2 focus:ring-[#5e41de]/12 dark:border-[#5e41de]/25 dark:bg-zinc-800/60 dark:text-zinc-200">
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="upvotes">Most Upvotes</option>
              </select>
            </div>
          </div>

          {/* Result count */}
          <p className="mt-3 text-[11px] font-medium text-zinc-400 dark:text-zinc-500">
            Showing{" "}
            <span className="font-bold text-[#5e41de] dark:text-[#a78bfa]">
              {myIdeas?.length}
            </span>{" "}
            {myIdeas?.length === 1 ? "idea" : "ideas"}
          </p>
        </div>

        {/* ── Idea cards grid ── */}
        {myIdeas?.length === 0 ? (
          /* Empty state */
          <div className="flex flex-col items-center justify-center gap-5 rounded-3xl border border-dashed border-[#5e41de]/30 bg-white/60 py-20 text-center dark:border-[#5e41de]/20 dark:bg-zinc-900/40">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#5e41de]/10 dark:bg-[#5e41de]/20">
              <RiLightbulbFlashLine
                size={36}
                className="text-[#5e41de]/50 dark:text-[#a78bfa]/50"
              />
            </div>
            <div>
              <h3 className="text-lg font-bold text-zinc-700 dark:text-zinc-300">
                No ideas yet
              </h3>
              <p className="mt-1 text-sm text-zinc-400 dark:text-zinc-500">
                You haven&apos;t shared any ideas yet. Start by posting your
                first concept!
              </p>
            </div>
            <Link
              href="/add-idea"
              className="inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-[#5e41de] to-[#7c5ce7] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#5e41de]/30 transition hover:brightness-110"
            >
              <FiPlus size={14} />
              Share Your First Idea
            </Link>
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {myIdeas?.map((idea) => {
                console.log(idea);
              const pillCls =
                CATEGORY_PILL[idea.category] ?? CATEGORY_PILL.Other;
              const barCls = CATEGORY_BAR[idea.category] ?? CATEGORY_BAR.Other;
              return (
                <article
                  key={idea._id}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#5e41de]/35 hover:shadow-xl hover:shadow-[#5e41de]/10 dark:border-zinc-700/60 dark:bg-zinc-900 dark:hover:border-[#5e41de]/45"
                >
                  {/* Hover accent bar */}
                  <div className="h-0.5 w-full bg-linear-to-r from-[#5e41de]/0 via-[#5e41de] to-[#a78bfa]/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Cover image */}
                  <div
                    className={`relative h-44 w-full shrink-0 overflow-hidden bg-linear-to-br ${barCls}`}
                  >
                    {idea?.imageUrl && (
                      <Image
                        src={idea?.imageUrl}
                        alt={idea?.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    )}
                    {/* Scrim */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />

                    {/* Category pill */}
                    <span
                      className={`absolute left-3 top-3 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm ${pillCls}`}
                    >
                      {idea?.category}
                    </span>

                    {/* Status badge */}
                    <span
                      className={`absolute right-3 top-3 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm ${
                        idea?.status === "published"
                          ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300"
                          : "bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300"
                      }`}
                    >
                      {idea?.status}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="flex flex-1 flex-col gap-3 px-5 pb-4 pt-4">
                    {/* Title */}
                    <h3 className="line-clamp-2 text-[15px] font-bold leading-snug text-zinc-800 transition-colors duration-200 group-hover:text-[#5e41de] dark:text-zinc-100 dark:group-hover:text-[#a78bfa]">
                      {idea?.title}
                    </h3>

                    {/* Description */}
                    <p className="line-clamp-2 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                      {idea?.shortDescription}
                    </p>

                    {/* Tags */}
                    {idea?.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {idea?.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center gap-1 rounded-lg border border-[#5e41de]/15 bg-[#5e41de]/6 px-2 py-0.5 text-[10px] font-semibold text-[#5e41de] dark:border-[#5e41de]/25 dark:bg-[#5e41de]/15 dark:text-[#a78bfa]"
                          >
                            <FiTag size={8} />
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Meta row */}
                    <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-1.5 border-t border-zinc-100 pt-3 text-[11px] text-zinc-400 dark:border-zinc-800 dark:text-zinc-500">
                      <span className="flex items-center gap-1">
                        <FiCalendar size={10} />
                        {idea?.createTime}
                      </span>
                      <span className="flex items-center gap-1">
                        <FiThumbsUp size={10} />
                        {idea?.likes} likes
                      </span>
                      <span className="flex items-center gap-1">
                        <FiMessageSquare size={10} />
                        {idea?.comments?.length} comments
                      </span>
                      <span className="ml-auto flex items-center gap-1 font-bold text-emerald-600 dark:text-emerald-400">
                        <FiDollarSign size={10} />
                        {idea?.estimatedBudget}
                      </span>
                    </div>

                    {/* Action buttons */}
                    <div className="mt-1 flex items-center gap-2">
                      <Link
                        href={`/ideas/${idea._id}`}
                        className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-[#5e41de]/25 py-2 text-xs font-semibold text-[#5e41de] transition-all duration-200 hover:border-[#5e41de]/50 hover:bg-[#5e41de]/8 dark:border-[#5e41de]/35 dark:text-[#a78bfa] dark:hover:bg-[#5e41de]/15"
                      >
                        <FiEye size={12} />
                        View
                      </Link>
                      <Link
                        href={`/ideas/${idea._id}/update`}
                        className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-zinc-200 py-2 text-xs font-semibold text-zinc-600 transition-all duration-200 hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
                      >
                        <FiEdit3 size={12} />
                        Edit
                      </Link>
                      <DeleteButton idea={idea} />

                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {/* Bottom accent line */}
        <div className="mt-12 h-px w-full bg-linear-to-r from-transparent via-[#5e41de]/50 to-transparent" />
      </div>
    </section>
  );
};

export default MyIdeas;
