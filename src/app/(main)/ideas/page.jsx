import IdeaCard from "@/components/IdeaCard/IdeaCard";
import SearchingMethod from "@/components/Operations/SearchingMethod";
import { GetIdeasAction } from "@/lib/Action/CrudAction";
import { FiCalendar, FiFilter, FiLayers, FiSearch } from "react-icons/fi";
import { RiLightbulbFlashLine } from "react-icons/ri";

const CATEGORIES = [
  "All",
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
];
const Ideas = async ({ searchParams }) => {
  const searchQuery = await searchParams
  const ideas = await GetIdeasAction(searchQuery?.search || "");

  return (
    <section className="relative min-h-[calc(100vh-64px)] overflow-hidden bg-linear-to-br from-white via-[#5e41de]/4 to-[#a78bfa]/8 py-10 dark:from-zinc-950 dark:via-[#5e41de]/8 dark:to-[#a78bfa]/4 md:py-14">
      {/* Background blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-[#5e41de]/8 blur-3xl dark:bg-[#5e41de]/15" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-[#a78bfa]/8 blur-3xl dark:bg-[#a78bfa]/15" />
      </div>

      <div className="relative mx-auto max-w-11/12">
        {/* Page header */}
        <div className="mb-8 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#5e41de]/25 bg-[#5e41de]/8 px-3.5 py-1.5 text-xs font-semibold text-[#5e41de] dark:border-[#5e41de]/30 dark:text-[#a78bfa]">
            <RiLightbulbFlashLine className="animate-pulse" />
            Community Ideas
          </span>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-zinc-800 sm:text-4xl dark:text-zinc-100">
            Explore{" "}
            <span className="bg-linear-to-r from-[#5e41de] to-[#a78bfa] bg-clip-text text-transparent">
              Startup Ideas
            </span>
          </h1>
          <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
            Browse ideas shared by the community. Find your next big opportunity
            or spark of inspiration.
          </p>
        </div>

        {/* ── Filter bar ── */}
        <div className="mb-8 rounded-2xl border border-[#5e41de]/12 bg-white/80 p-4 shadow-sm shadow-[#5e41de]/6 backdrop-blur-sm dark:border-[#5e41de]/20 dark:bg-zinc-900/70 sm:p-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
            {/* Search */}
            <SearchingMethod/>

            {/* Category filter */}
            <div className="flex items-center gap-2">
              <FiLayers size={13} className="shrink-0 text-[#5e41de]" />
              <select
                // onChange={(e) => setCategory(e.target.value)}
                className="rounded-xl border border-[#5e41de]/18 bg-white py-2.5 pl-3 pr-8 text-sm text-zinc-700 outline-none transition-all duration-200 focus:border-[#5e41de]/50 focus:ring-2 focus:ring-[#5e41de]/12 dark:border-[#5e41de]/25 dark:bg-zinc-800/60 dark:text-zinc-200"
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat === "All" ? "All Categories" : cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Date from */}
            <div className="flex items-center gap-2">
              <FiCalendar size={13} className="shrink-0 text-[#5e41de]" />
              <input
                type="date"
                title="From date"
                className="rounded-xl border border-[#5e41de]/18 bg-white py-2.5 pl-3 pr-3 text-sm text-zinc-700 outline-none transition-all duration-200 focus:border-[#5e41de]/50 focus:ring-2 focus:ring-[#5e41de]/12 dark:border-[#5e41de]/25 dark:bg-zinc-800/60 dark:text-zinc-200"
              />
              <span className="text-xs text-zinc-400">to</span>
              <input
                type="date"
                title="To date"
                className="rounded-xl border border-[#5e41de]/18 bg-white py-2.5 pl-3 pr-3 text-sm text-zinc-700 outline-none transition-all duration-200 focus:border-[#5e41de]/50 focus:ring-2 focus:ring-[#5e41de]/12 dark:border-[#5e41de]/25 dark:bg-zinc-800/60 dark:text-zinc-200"
              />
            </div>

          </div>

          {/* Results count */}
          <div className="mt-3 flex items-center gap-2 border-t border-[#5e41de]/8 pt-3 dark:border-[#5e41de]/12">
            <FiFilter size={11} className="text-zinc-400" />
            <span className="text-xs text-zinc-400 dark:text-zinc-500">
              Showing{" "}
              <span className="font-semibold text-[#5e41de] dark:text-[#a78bfa]">
                {/* {filtered.length} */}
              </span>{" "}
              of{" "}
              <span className="font-semibold text-zinc-600 dark:text-zinc-300">
                {ideas.length}
              </span>{" "}
              ideas
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ideas.map((idea) => (
            <IdeaCard key={idea._id} idea={idea} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ideas;
