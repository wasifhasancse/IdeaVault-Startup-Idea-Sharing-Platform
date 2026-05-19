"use client";
import Image from "next/image";
import { FaDollarSign, FaUserCheck } from "react-icons/fa";
import { FcIdea } from "react-icons/fc";
import {
  FiTag
} from "react-icons/fi";
import PrimaryButton from "../Button/PrimaryButton";

const CATEGORY_STYLES = {
  Tech: {
    pill: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
    bar: "from-blue-500 to-indigo-600",
  },
  Health: {
    pill: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
    bar: "from-green-500 to-emerald-600",
  },
  AI: {
    pill: "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300",
    bar: "from-violet-500 to-purple-700",
  },
  Education: {
    pill: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300",
    bar: "from-yellow-400 to-amber-500",
  },
  Finance: {
    pill: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
    bar: "from-emerald-500 to-teal-600",
  },
  Environment: {
    pill: "bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300",
    bar: "from-teal-500 to-cyan-600",
  },
  Social: {
    pill: "bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-300",
    bar: "from-pink-500 to-rose-500",
  },
  Entertainment: {
    pill: "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
    bar: "from-orange-400 to-red-500",
  },
  Retail: {
    pill: "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300",
    bar: "from-rose-400 to-pink-600",
  },
  Other: {
    pill: "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400",
    bar: "from-[#5e41de] to-[#a78bfa]",
  },
};

const IdeaCard = ({ idea }) => {
  console.log(idea);

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#5e41de]/35 hover:shadow-xl hover:shadow-[#5e41de]/10 dark:border-zinc-700/60 dark:bg-zinc-900 dark:hover:border-[#5e41de]/45">
      {/* ── top accent bar (appears on hover) ── */}
      <div className="h-0.5 w-full bg-linear-to-r from-[#5e41de]/0 via-[#5e41de] to-[#a78bfa]/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* ── Cover ── */}
      <div className="relative h-44 w-full shrink-0 overflow-hidden">
        <Image
          src={idea?.imageUrl}
          alt={idea?.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          height={300}
          width={400}
        />

        {/* scrim */}
        <div className="absolute inset-0 bg-linear-to-t from-black/25 via-transparent to-transparent" />

        {/* category badge */}
        <span
          className={`absolute left-3 top-3 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm ${CATEGORY_STYLES[idea?.category]?.pill || CATEGORY_STYLES["Other"].pill}`}
        >
          {idea?.category || "Other"}
        </span>
      </div>

      {/* ── Body ── */}
      <div className="flex flex-1 flex-col gap-3 px-5 pt-4 pb-3">
        {/* 1 · Title */}
        <h3 className="line-clamp-2 text-[15px] font-bold leading-snug text-zinc-800 transition-colors duration-200 group-hover:text-[#5e41de] dark:text-zinc-100 dark:group-hover:text-[#a78bfa]">
          {idea?.title || "Untitled Idea"}
        </h3>

        {/* 2 · Short description */}
        <p className="line-clamp-2 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
          {idea?.shortDescription ||
            idea?.detailedDescription ||
            "No description provided."}
        </p>

        {/* 3 · Tags */}
        {idea?.tags?.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {idea.tags.map((tag) => (
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

        {/* 4 · Meta — date · audience · budget */}
        <div className="mt-auto flex flex-wrap items-center gap-x-3 gap-y-1.5 border-t border-zinc-100 pt-3 dark:border-zinc-800">
          <span className="flex items-center gap-1 text-[11px] text-zinc-400 dark:text-zinc-500">
            <FaUserCheck size={11} />
            Create By: {idea?.userInfo?.name || "Unknown Creator"}
          </span>
          <span className="ml-auto flex items-center gap-1 text-lg font-bold text-emerald-600 dark:text-emerald-400">
            <FaDollarSign size={11} />
            {idea.estimatedBudget || "Budget not specified"}
          </span>
        </div>
      </div>

      {/* ── View Details CTA ── */}
      <div className="px-5 pb-4 flex justify-stretch">
        <PrimaryButton
          href={`/ideas/${idea?._id}`}
          label="View Details"
          icon={FcIdea}
        />
      </div>
    </article>
  );
};

export default IdeaCard;
