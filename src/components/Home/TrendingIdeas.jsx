import IdeaCard from "@/components/IdeaCard/IdeaCard";
import { GetTrendingIdeasAction } from "@/lib/Action/CrudAction";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { RiLightbulbFlashLine } from "react-icons/ri";

const TrendingIdeas = async () => {
  const allTrending = await GetTrendingIdeasAction();
  const trendingIdeas = Array.isArray(allTrending)
    ? allTrending.slice(0, 6)
    : [];

  return (
    <section className="relative overflow-hidden bg-linear-to-b from-white via-[#5e41de]/3 to-[#a78bfa]/6 py-16 dark:from-zinc-950 dark:via-[#5e41de]/6 dark:to-[#a78bfa]/3 md:py-24">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-[#5e41de]/6 blur-3xl dark:bg-[#5e41de]/12" />
        <div className="absolute -right-32 bottom-1/4 h-72 w-72 rounded-full bg-[#a78bfa]/6 blur-3xl dark:bg-[#a78bfa]/12" />
        <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-linear-to-r from-transparent via-[#5e41de]/25 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-11/12">
        {/* ── Section header ── */}
        <div className="mb-12 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#5e41de]/25 bg-[#5e41de]/8 px-4 py-1.5 text-xs font-semibold text-[#5e41de] dark:border-[#5e41de]/30 dark:bg-[#5e41de]/12 dark:text-[#a78bfa]">
            <RiLightbulbFlashLine className="animate-pulse" size={13} />
            Trending Now
          </span>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-zinc-800 sm:text-4xl lg:text-5xl dark:text-zinc-100">
            Top{" "}
            <span className="bg-linear-to-r from-[#5e41de] to-[#a78bfa] bg-clip-text text-transparent">
              Startup Ideas
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
            Hand-picked ideas gaining the most traction in the IdeaVault
            community right now.
          </p>

          {/* Decorative divider */}
          <div className="mx-auto mt-6 flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-linear-to-r from-transparent to-[#5e41de]/40" />
            <div className="h-1.5 w-1.5 rounded-full bg-[#5e41de]/50" />
            <div className="h-px w-24 bg-[#5e41de]/30" />
            <div className="h-2 w-2 rounded-full bg-[#5e41de]" />
            <div className="h-px w-24 bg-[#5e41de]/30" />
            <div className="h-1.5 w-1.5 rounded-full bg-[#5e41de]/50" />
            <div className="h-px w-16 bg-linear-to-l from-transparent to-[#5e41de]/40" />
          </div>
        </div>

        {/* ── Cards grid ── */}
        {trendingIdeas.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {trendingIdeas.map((idea) => (
              <IdeaCard key={idea._id} idea={idea} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center gap-3 py-16 text-zinc-400 dark:text-zinc-600">
            <RiLightbulbFlashLine size={40} className="opacity-40" />
            <p className="text-sm">
              No trending ideas yet. Be the first to share!
            </p>
          </div>
        )}

        {/* ── View all CTA ── */}
        <div className="mt-12 text-center">
          <Link
            href="/ideas"
            className="inline-flex items-center gap-2 rounded-full border border-[#5e41de]/30 bg-white px-6 py-3 text-sm font-semibold text-[#5e41de] shadow-sm transition-all duration-200 hover:border-[#5e41de] hover:bg-[#5e41de] hover:text-white hover:shadow-md hover:shadow-[#5e41de]/25 dark:border-[#5e41de]/40 dark:bg-zinc-900 dark:text-[#a78bfa] dark:hover:bg-[#5e41de] dark:hover:text-white"
          >
            Browse All Ideas
            <FiArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TrendingIdeas;
