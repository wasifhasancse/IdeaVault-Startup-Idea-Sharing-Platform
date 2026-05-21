import { GetIdeasAction, GetMyIdeas } from "@/lib/Action/CrudAction";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import {
  FiCalendar,
  FiMessageSquare,
  FiThumbsUp,
  FiUser,
  FiZap,
} from "react-icons/fi";
import { MdOutlineInterests } from "react-icons/md";
import { RiLightbulbFlashFill, RiLightbulbFlashLine } from "react-icons/ri";

export const metadata = {
  title: "My Interactions",
  description:
    "View your votes, comments, and other interactions on IdeaVault.",
};

/* ── Static seed data ── */
const UPVOTED = [
  {
    id: "u1",
    ideaId: "101",
    title: "NeuralMentor — Adaptive AI Tutoring for K-12",
    shortDescription:
      "An AI tutoring platform that adapts in real-time to each student's learning pace, strengths, and weaknesses to dramatically boost academic outcomes.",
    category: "Education",
    imageUrl:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&auto=format&fit=crop",
    author: "Priya Sharma",
    upvotedAt: "May 17, 2026",
    totalUpvotes: 142,
  },
  {
    id: "u2",
    ideaId: "102",
    title: "GreenGrid — P2P Renewable Energy Trading",
    shortDescription:
      "A peer-to-peer marketplace enabling households with solar panels to sell surplus energy directly to neighbours at fair market rates.",
    category: "Environment",
    imageUrl:
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600&auto=format&fit=crop",
    author: "Marcus Wei",
    upvotedAt: "May 14, 2026",
    totalUpvotes: 87,
  },
  {
    id: "u3",
    ideaId: "103",
    title: "MedBot — AI-Powered Pre-Diagnosis Assistant",
    shortDescription:
      "A conversational AI that gathers symptoms, medical history, and vitals to produce a pre-diagnosis report before the patient meets the doctor.",
    category: "Health",
    imageUrl:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&auto=format&fit=crop",
    author: "Dr. Aisha Nwosu",
    upvotedAt: "May 10, 2026",
    totalUpvotes: 209,
  },
];

const COMMENTED = [
  {
    id: "c1",
    ideaId: "201",
    title: "SkillSwap — Peer-to-Peer Skill Exchange",
    shortDescription:
      "A barter-style platform where professionals trade skills without money changing hands — coding for design, language tutoring for accounting.",
    category: "Social",
    imageUrl:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&auto=format&fit=crop",
    author: "Jordan Blake",
    commentText:
      "This is a brilliant concept! I'd love to see how reputation scores are maintained when the value exchange is subjective.",
    commentedAt: "May 16, 2026",
    totalComments: 34,
  },
  {
    id: "c2",
    ideaId: "202",
    title: "FarmLedger — Blockchain Crop Insurance",
    shortDescription:
      "Smart-contract micro-insurance that auto-triggers payouts when verified weather events affect yields, removing slow manual claims.",
    category: "Finance",
    imageUrl:
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&auto=format&fit=crop",
    author: "Elena Vasquez",
    commentText:
      "What oracle solution are you planning to use for weather data verification? Reliability here is absolutely critical.",
    commentedAt: "May 8, 2026",
    totalComments: 19,
  },
  {
    id: "c3",
    ideaId: "203",
    title: "LocalLoop — Hyper-Local Event Discovery",
    shortDescription:
      "A location-aware app that surfaces micro-events — pop-ups, garage sales, neighbourhood meetups — within walking distance of the user.",
    category: "Social",
    imageUrl:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&auto=format&fit=crop",
    author: "Sam Torres",
    commentText:
      "Great idea but privacy concerns need addressing upfront — granular location exposure can be a deal-breaker for many users.",
    commentedAt: "Apr 30, 2026",
    totalComments: 11,
  },
];

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

const MyInteractions = async () => {
  const session = await auth.api.getSession({ headers: await headers() });
  const myIdeas = await GetMyIdeas(session?.userId);
  const allExistingIdeas = await GetIdeasAction();
  const myCommentedIdeas = allExistingIdeas.filter((idea) =>
    idea.comments?.some(
      (comment) => comment.userInfo?.email === session?.user?.email,
    ),
  );
  const myUpvotedIdeas = [];
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
        <div className="mb-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#5e41de]/25 bg-[#5e41de]/8 px-3.5 py-1.5 text-xs font-semibold text-[#5e41de] dark:border-[#5e41de]/30 dark:text-[#a78bfa]">
            <MdOutlineInterests className="text-sm" />
            Activity Feed
          </span>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight text-zinc-800 sm:text-4xl dark:text-zinc-100">
            My{" "}
            <span className="bg-linear-to-r from-[#5e41de] to-[#a78bfa] bg-clip-text text-transparent">
              Interactions
            </span>
          </h1>
          <p className="mt-1.5 max-w-lg text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
            Track every idea you&apos;ve upvoted and every conversation
            you&apos;ve joined across the IdeaVault community.
          </p>
        </div>

        {/* ── Stats row ── */}
        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="flex items-center gap-4 rounded-2xl border border-white/70 bg-white/70 px-5 py-4 shadow-sm shadow-[#5e41de]/6 backdrop-blur-sm dark:border-white/5 dark:bg-zinc-900/60 dark:shadow-[#5e41de]/10">
            <span
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#5e41de]/10 dark:bg-[#5e41de]/20`}
            >
              <FiThumbsUp
                size={18}
                className=" text-[#5e41de] dark:text-[#a78bfa]"
              />
            </span>
            <div>
              <p
                className={`text-2xl font-extrabold leading-none text-[#5e41de] dark:text-[#a78bfa]`}
              >
                {myUpvotedIdeas.length}
              </p>
              <p className="mt-0.5 text-[12px] font-semibold text-zinc-700 dark:text-zinc-300">
                Upvotes Given
              </p>
              <p className="text-[10px] text-zinc-400 dark:text-zinc-500">
                Ideas you&apos;ve supported
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-white/70 bg-white/70 px-5 py-4 shadow-sm shadow-[#5e41de]/6 backdrop-blur-sm dark:border-white/5 dark:bg-zinc-900/60 dark:shadow-[#5e41de]/10">
            <span
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#5e41de]/10 dark:bg-[#5e41de]/20`}
            >
              <FiMessageSquare
                size={18}
                className="text-[#5e41de] dark:text-[#a78bfa]"
              />
            </span>
            <div>
              <p
                className={`text-2xl font-extrabold leading-none text-[#5e41de] dark:text-[#a78bfa]`}
              >
                {myCommentedIdeas.length}
              </p>
              <p className="mt-0.5 text-[12px] font-semibold text-zinc-700 dark:text-zinc-300">
                Comments Made
              </p>
              <p className="text-[10px] text-zinc-400 dark:text-zinc-500">
                Discussions you&apos;ve joined
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-white/70 bg-white/70 px-5 py-4 shadow-sm shadow-[#5e41de]/6 backdrop-blur-sm dark:border-white/5 dark:bg-zinc-900/60 dark:shadow-[#5e41de]/10">
            <span
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#5e41de]/10 dark:bg-[#5e41de]/20`}
            >
              <FiZap size={18} className="text-[#5e41de] dark:text-[#a78bfa]" />
            </span>
            <div>
              <p
                className={`text-2xl font-extrabold leading-none text-[#5e41de] dark:text-[#a78bfa]`}
              >
                {myUpvotedIdeas.length + myCommentedIdeas.length}
              </p>
              <p className="mt-0.5 text-[12px] font-semibold text-zinc-700 dark:text-zinc-300">
                Total Interactions
              </p>
              <p className="text-[10px] text-zinc-400 dark:text-zinc-500">
                Your community activity
              </p>
            </div>
          </div>
        </div>

        {/* ── Upvoted section ── */}
        {myUpvotedIdeas.length === 0 ? (
          <div className="flex flex-col items-center justify-center gap-5 rounded-3xl border border-dashed border-[#5e41de]/30 bg-white/60 py-20 text-center dark:border-[#5e41de]/20 dark:bg-zinc-900/40">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#5e41de]/10 dark:bg-[#5e41de]/20">
              <RiLightbulbFlashLine
                size={36}
                className="text-[#5e41de]/50 dark:text-[#a78bfa]/50"
              />
            </div>
            <div>
              <h3 className="text-lg font-bold text-zinc-700 dark:text-zinc-300">
                No interactions yet
              </h3>
              <p className="mt-1 text-sm text-zinc-400 dark:text-zinc-500">
                Start exploring ideas and engage with the community!
              </p>
            </div>
            <Link
              href="/ideas"
              className="inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-[#5e41de] to-[#7c5ce7] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#5e41de]/30 transition hover:brightness-110"
            >
              <RiLightbulbFlashFill size={14} />
              Explore Ideas
            </Link>
          </div>
        ) : (
          <div className="mb-10">
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#5e41de]/10 dark:bg-[#5e41de]/20">
                <FiThumbsUp
                  size={13}
                  className="text-[#5e41de] dark:text-[#a78bfa]"
                />
              </span>
              <h2 className="text-base font-bold text-zinc-800 dark:text-zinc-100">
                Ideas You&apos;ve Upvoted
              </h2>
              <span className="rounded-full border border-[#5e41de]/20 bg-[#5e41de]/8 px-2.5 py-0.5 text-[11px] font-bold text-[#5e41de] dark:text-[#a78bfa]">
                {UPVOTED.length}
              </span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {UPVOTED.map((item) => {
                const pillCls =
                  CATEGORY_PILL[item.category] ?? CATEGORY_PILL.Other;
                return (
                  <article
                    key={item.id}
                    className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#5e41de]/35 hover:shadow-xl hover:shadow-[#5e41de]/10 dark:border-zinc-700/60 dark:bg-zinc-900 dark:hover:border-[#5e41de]/45"
                  >
                    <div className="h-0.5 w-full bg-linear-to-r from-[#5e41de]/0 via-[#5e41de] to-[#a78bfa]/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    <div className="relative h-36 w-full shrink-0 overflow-hidden">
                      <Image
                        src={item.imageUrl}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />
                      <span
                        className={`absolute left-3 top-3 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm ${pillCls}`}
                      >
                        {item.category}
                      </span>
                      {/* Upvote badge */}
                      <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-[#5e41de] px-2.5 py-1 text-[10px] font-bold text-white shadow-md">
                        <FiThumbsUp size={9} />
                        Upvoted
                      </span>
                    </div>

                    <div className="flex flex-1 flex-col gap-2.5 px-4 pb-4 pt-3.5">
                      <h3 className="line-clamp-2 text-[14px] font-bold leading-snug text-zinc-800 transition-colors group-hover:text-[#5e41de] dark:text-zinc-100 dark:group-hover:text-[#a78bfa]">
                        {item.title}
                      </h3>
                      <p className="line-clamp-2 text-[13px] leading-relaxed text-zinc-500 dark:text-zinc-400">
                        {item.shortDescription}
                      </p>

                      <div className="mt-auto flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-zinc-100 pt-3 text-[11px] text-zinc-400 dark:border-zinc-800 dark:text-zinc-500">
                        <span className="flex items-center gap-1">
                          <FiUser size={10} />
                          {item.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <FiThumbsUp size={10} />
                          {item.totalUpvotes} upvotes
                        </span>
                        <span className="ml-auto flex items-center gap-1">
                          <FiCalendar size={10} />
                          {item.upvotedAt}
                        </span>
                      </div>

                      <Link
                        href={`/ideas/${item.ideaId}`}
                        className="flex items-center justify-center gap-1.5 rounded-xl border border-[#5e41de]/25 py-2 text-xs font-semibold text-[#5e41de] transition-all duration-200 hover:border-[#5e41de]/50 hover:bg-[#5e41de]/8 dark:border-[#5e41de]/35 dark:text-[#a78bfa] dark:hover:bg-[#5e41de]/15"
                      >
                        <RiLightbulbFlashLine size={13} />
                        View Idea
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        )}

        {/* Commented section */}
        {myCommentedIdeas.length === 0 ? (
          <div className="flex flex-col items-center justify-center gap-5 rounded-3xl border border-dashed border-[#5e41de]/30 bg-white/60 py-20 text-center dark:border-[#5e41de]/20 dark:bg-zinc-900/40">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#5e41de]/10 dark:bg-[#5e41de]/20">
              <RiLightbulbFlashLine
                size={36}
                className="text-[#5e41de]/50 dark:text-[#a78bfa]/50"
              />
            </div>
            <div>
              <h3 className="text-lg font-bold text-zinc-700 dark:text-zinc-300">
                No interactions yet
              </h3>
              <p className="mt-1 text-sm text-zinc-400 dark:text-zinc-500">
                Start exploring ideas and engage with the community!
              </p>
            </div>
            <Link
              href="/ideas"
              className="inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-[#5e41de] to-[#7c5ce7] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#5e41de]/30 transition hover:brightness-110"
            >
              <RiLightbulbFlashFill size={14} />
              Explore Ideas
            </Link>
          </div>
        ) : (
          <div className="mb-10">
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#5e41de]/10 dark:bg-[#5e41de]/20">
                <FiMessageSquare
                  size={13}
                  className="text-[#5e41de] dark:text-[#a78bfa]"
                />
              </span>
              <h2 className="text-base font-bold text-zinc-800 dark:text-zinc-100">
                Ideas You&apos;ve Commented On
              </h2>
              <span className="rounded-full border border-[#5e41de]/20 bg-[#5e41de]/8 px-2.5 py-0.5 text-[11px] font-bold text-[#5e41de] dark:text-[#a78bfa]">
                {myCommentedIdeas.length}
              </span>
            </div>

            <div className="flex flex-col gap-4">
              {myCommentedIdeas.map((item, index) => {
                const myComment = item.comments.find(
                  (comment) => comment.userInfo?.email === session?.user?.email,
                );

                const pillCls =
                  CATEGORY_PILL[item.category] ?? CATEGORY_PILL.Other;
                return (
                  <article
                    key={index}
                    className="group overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#5e41de]/35 hover:shadow-xl hover:shadow-[#5e41de]/10 dark:border-zinc-700/60 dark:bg-zinc-900 dark:hover:border-[#5e41de]/45 sm:flex"
                  >
                    {/* Hover top bar */}
                    <div className="h-0.5 w-full bg-linear-to-r from-[#5e41de]/0 via-[#5e41de] to-[#a78bfa]/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:hidden" />

                    {/* Cover — left side on sm+ */}
                    <div className="relative h-36 w-full shrink-0 overflow-hidden sm:h-auto sm:w-44 lg:w-52">
                      <Image
                        src={item.imageUrl}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent sm:bg-linear-to-r" />
                      <span
                        className={`absolute left-3 top-3 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm ${pillCls}`}
                      >
                        {item.category}
                      </span>
                    </div>

                    {/* Body */}
                    <div className="flex flex-1 flex-col gap-2.5 px-4 pb-4 pt-3.5 sm:pt-4 sm:pl-5">
                      {/* Left hover bar for horizontal layout */}
                      <div className="hidden h-full w-0.5 bg-linear-to-b from-[#5e41de]/0 via-[#5e41de] to-[#a78bfa]/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:absolute sm:left-44 sm:top-0 sm:block lg:sm:left-52" />

                      <h3 className="line-clamp-1 text-[14px] font-bold leading-snug text-zinc-800 transition-colors group-hover:text-[#5e41de] dark:text-zinc-100 dark:group-hover:text-[#a78bfa]">
                        {item.title}
                      </h3>
                      <p className="line-clamp-2 text-[13px] leading-relaxed text-zinc-500 dark:text-zinc-400">
                        {item.shortDescription}
                      </p>

                      {/* Comment bubble */}
                      <div className="relative rounded-xl border border-[#5e41de]/15 bg-[#5e41de]/5 px-3.5 py-2.5 dark:border-[#5e41de]/20 dark:bg-[#5e41de]/8">
                        <span className="mb-1 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[#5e41de] dark:text-[#a78bfa]">
                          <FiMessageSquare size={9} />
                          Your Comment
                        </span>
                        <p className="line-clamp-2 text-[12px] italic leading-relaxed text-zinc-600 dark:text-zinc-300">
                          &ldquo;{myComment?.comment}&rdquo;
                        </p>
                      </div>

                      {/* Meta + CTA */}
                      <div className="mt-auto flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-zinc-100 pt-3 dark:border-zinc-800">
                        <span className="flex items-center gap-1 text-[11px] text-zinc-400 dark:text-zinc-500">
                          <FiUser size={10} />
                          Posted By: {item?.userInfo?.name}
                        </span>

                        <span className="flex items-center gap-1 text-[11px] text-zinc-400 dark:text-zinc-500">
                          <FiCalendar size={10} />
                          {item.createTime}
                        </span>
                        <span className="flex items-center gap-1 text-[11px] text-zinc-400 dark:text-zinc-500">
                          <FiMessageSquare size={10} />
                          {item.comments.length} comments
                        </span>
                        <Link
                          href={`/ideas/${item._id}`}
                          className="ml-auto flex items-center gap-1.5 rounded-xl border border-[#5e41de]/25 px-3 py-1.5 text-[11px] font-semibold text-[#5e41de] transition-all duration-200 hover:border-[#5e41de]/50 hover:bg-[#5e41de]/8 dark:border-[#5e41de]/35 dark:text-[#a78bfa] dark:hover:bg-[#5e41de]/15"
                        >
                          <RiLightbulbFlashLine size={11} />
                          View Idea
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        )}

        {/* Bottom accent line */}
        <div className="mt-4 h-px w-full bg-linear-to-r from-transparent via-[#5e41de]/50 to-transparent" />
      </div>
    </section>
  );
};

export default MyInteractions;
