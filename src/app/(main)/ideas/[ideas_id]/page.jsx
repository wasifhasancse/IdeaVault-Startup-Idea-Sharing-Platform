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
import CommentsSection from "./CommentsSection";

/* ── static seed data ───────────────────────────────────── */
const IDEA = {
  title: "AI-Powered Learning Platform for Rural Students",
  category: "Education",
  shortDescription:
    "A smart adaptive learning app that delivers personalised curriculum to students in low-connectivity rural areas using offline-first AI models.",
  detailedDescription:
    "Our platform leverages on-device machine learning to deliver personalised, curriculum-aligned lessons without requiring constant internet access. Students can download content bundles during brief connectivity windows and continue learning offline. The AI tracks progress, adapts difficulty, and surfaces weak spots for targeted practice. Teachers receive weekly dashboards showing class performance, engagement rates, and recommended interventions. Content is available in multiple regional languages and follows national curriculum standards.",
  problemStatement:
    "Over 300 million school-age children in rural and remote regions lack consistent access to quality educational content. Poor connectivity, under-resourced schools, and one-size-fits-all curricula leave students significantly behind their urban peers. Existing EdTech solutions require stable internet and modern devices, making them impractical in these contexts.",
  proposedSolution:
    "Build an offline-first Progressive Web App with compressed AI models that run entirely on-device. Partner with regional NGOs to distribute low-cost Android tablets pre-loaded with the app. Use solar-powered community charging stations for device upkeep. Revenue comes from government EdTech grants, CSR partnerships, and a freemium model for schools that can afford a modest subscription.",
  budget: "$120K",
  date: "April 12, 2026",
  tags: ["EdTech", "AI", "Offline-First", "Rural", "Adaptive Learning", "PWA"],
  audience: [
    "Rural K-12 Students",
    "Government School Teachers",
    "Education NGOs",
    "Ministry of Education",
  ],
  author: {
    name: "Priya Nair",
    email: "priya.nair@edventure.org",
    initials: "PN",
  },
};

/* ── page ───────────────────────────────────────────────── */
export default function IdeasDetailsPage() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      {/* ── HERO ── */}
      <div className="relative h-72 w-full overflow-hidden md:h-[380px]">
        {/* Gradient bg */}
        <div className="relative h-full w-full bg-linear-to-135deg from-yellow-500 via-amber-500 to-orange-500">
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "radial-gradient(circle, white 1.5px, transparent 1.5px)",
              backgroundSize: "28px 28px",
            }}
          />
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border border-white/10" />
          <div className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full border border-white/10" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-[2rem] border border-white/20 bg-white/15 backdrop-blur-sm">
              <RiLightbulbFlashLine size={44} className="text-white/80" />
            </div>
          </div>
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
              {IDEA.category}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[10px] font-semibold text-white/90 backdrop-blur-sm">
              <FiCalendar size={10} />
              {IDEA.date}
            </span>
          </div>
          <h1 className="text-2xl font-extrabold leading-tight text-white [text-shadow:0_2px_16px_rgba(0,0,0,0.5)] sm:text-3xl lg:text-4xl">
            {IDEA.title}
          </h1>
          <p className="mt-2.5 max-w-2xl text-sm leading-relaxed text-white/70">
            {IDEA.shortDescription}
          </p>
        </div>
      </div>

      {/* ── META ROW ── */}
      <div className="border-b border-zinc-200/70 bg-white dark:border-zinc-700/50 dark:bg-zinc-900">
        <div className="mx-auto max-w-11/12">
          <div className="flex flex-wrap items-stretch gap-px bg-zinc-100 dark:bg-zinc-800/50">
            {[
              { icon: FiLayers, label: "Category", value: IDEA.category },
              { icon: FiCalendar, label: "Posted", value: IDEA.date },
              { icon: FiDollarSign, label: "Budget", value: IDEA.budget },
              {
                icon: FiUsers,
                label: "Audience",
                value: `${IDEA.audience.length} groups`,
              },
              { icon: FiTag, label: "Tags", value: `${IDEA.tags.length} tags` },
            ].map(({ icon: Icon, label, value }, i, arr) => (
              <div
                key={label}
                className="flex flex-1 items-center gap-3 bg-white px-5 py-4 transition-colors hover:bg-zinc-50 dark:bg-zinc-900 dark:hover:bg-zinc-800/70"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#5e41de]/8 dark:bg-[#5e41de]/20">
                  <Icon
                    size={13}
                    className="text-[#5e41de] dark:text-[#a78bfa]"
                  />
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                    {label}
                  </p>
                  <p className="text-[13px] font-bold text-zinc-800 dark:text-zinc-100">
                    {value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── BODY ── */}
      <div className="mx-auto max-w-11/12 py-8 md:py-12">
        <div className="grid gap-7 lg:grid-cols-[1fr_290px]">
          {/* ── LEFT: content ── */}
          <div className="flex flex-col gap-5">
            {/* About */}
            <div className="rounded-2xl border border-zinc-100 border-l-4 border-l-[#5e41de] bg-white p-6 shadow-sm dark:border-zinc-800 dark:border-l-[#5e41de] dark:bg-zinc-900 dark:shadow-zinc-900/40">
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
              <div className="mb-4 h-px w-full bg-zinc-100 dark:bg-zinc-800" />
              <p className="text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                {IDEA.detailedDescription}
              </p>
            </div>

            {/* The Problem */}
            <div className="rounded-2xl border border-zinc-100 border-l-4 border-l-rose-500 bg-white p-6 shadow-sm dark:border-zinc-800 dark:border-l-rose-500 dark:bg-zinc-900 dark:shadow-zinc-900/40">
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
              <div className="mb-4 h-px w-full bg-zinc-100 dark:bg-zinc-800" />
              <p className="text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                {IDEA.problemStatement}
              </p>
            </div>

            {/* Proposed Solution */}
            <div className="rounded-2xl border border-zinc-100 border-l-4 border-l-emerald-500 bg-white p-6 shadow-sm dark:border-zinc-800 dark:border-l-emerald-500 dark:bg-zinc-900 dark:shadow-zinc-900/40">
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
              <div className="mb-4 h-px w-full bg-zinc-100 dark:bg-zinc-800" />
              <p className="text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                {IDEA.proposedSolution}
              </p>
            </div>
          </div>

          {/* ── RIGHT: sidebar ── */}
          <aside className="flex flex-col gap-4 lg:sticky lg:top-20 lg:self-start">
            {/* Author */}
            <div className="rounded-2xl border border-zinc-200/80 bg-white p-4 shadow-sm dark:border-zinc-700/60 dark:bg-zinc-900 dark:shadow-zinc-900/40">
              <div className="mb-3 flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-yellow-500 to-amber-600 text-sm font-bold text-white">
                  {IDEA.author.initials}
                </span>
                <div>
                  <p className="text-sm font-bold text-zinc-800 dark:text-zinc-100">
                    {IDEA.author.name}
                  </p>
                  <p className="text-[10px] font-semibold text-[#5e41de] dark:text-[#a78bfa]">
                    Idea Creator
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2 rounded-lg bg-zinc-100/70 px-3 py-2 dark:bg-zinc-800/80">
                  <FiUser
                    size={11}
                    className="shrink-0 text-zinc-400 dark:text-zinc-500"
                  />
                  <p className="truncate text-xs text-zinc-500 dark:text-zinc-400">
                    {IDEA.author.email}
                  </p>
                </div>
                <div className="flex items-center gap-2 rounded-lg bg-zinc-100/70 px-3 py-2 dark:bg-zinc-800/80">
                  <FiCalendar
                    size={11}
                    className="shrink-0 text-[#5e41de] dark:text-[#a78bfa]"
                  />
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    Posted {IDEA.date}
                  </p>
                </div>
              </div>
            </div>

            {/* Budget */}
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 dark:border-emerald-700/30 dark:bg-emerald-950/30">
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
                    {IDEA.budget}
                  </p>
                </div>
              </div>
              <p className="mt-3 text-[11px] text-emerald-600/60 dark:text-emerald-500/50">
                Required to launch this idea
              </p>
            </div>

            {/* Tags */}
            <div className="rounded-2xl border border-zinc-200/80 bg-white p-4 shadow-sm dark:border-zinc-700/60 dark:bg-zinc-900 dark:shadow-zinc-900/40">
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
                {IDEA.tags.map((tag) => (
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
            <div className="rounded-2xl border border-zinc-200/80 bg-white p-4 shadow-sm dark:border-zinc-700/60 dark:bg-zinc-900 dark:shadow-zinc-900/40">
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
                {IDEA.audience.map((a) => (
                  <div
                    key={a}
                    className="flex items-center gap-2 rounded-lg bg-zinc-100/60 px-3 py-2 dark:bg-zinc-800/70"
                  >
                    <FiTarget
                      size={10}
                      className="shrink-0 text-[#5e41de] dark:text-[#a78bfa]"
                    />
                    <span className="text-xs font-medium text-zinc-600 dark:text-zinc-400">
                      {a}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>

        {/* ── Divider ── */}
        <div className="my-10 h-px w-full bg-linear-to-r from-transparent via-zinc-200 to-transparent dark:via-zinc-700/60" />

        {/* ── Comments ── */}
        <CommentsSection />
      </div>
    </div>
  );
}
