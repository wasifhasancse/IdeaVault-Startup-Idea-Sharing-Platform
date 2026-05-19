import IdeaCard from "@/components/IdeaCard/IdeaCard";
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
const Ideas = async () => {
  const ideas = await GetIdeasAction();

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
            <div className="relative min-w-0 flex-1">
              <FiSearch
                size={15}
                className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400"
              />
              <input
                type="text"
                // onChange={(e) => setSearch(e.target.value)}
                placeholder="Search ideas by title, description, or category…"
                className="w-full rounded-xl border border-[#5e41de]/18 bg-white py-2.5 pl-9 pr-4 text-sm text-zinc-700 placeholder-zinc-400 outline-none transition-all duration-200 focus:border-[#5e41de]/50 focus:ring-2 focus:ring-[#5e41de]/12 dark:border-[#5e41de]/25 dark:bg-zinc-800/60 dark:text-zinc-200 dark:placeholder-zinc-500 dark:focus:border-[#5e41de]/50"
              />
            </div>

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
                // onChange={(e) => setDateFrom(e.target.value)}
                title="From date"
                className="rounded-xl border border-[#5e41de]/18 bg-white py-2.5 pl-3 pr-3 text-sm text-zinc-700 outline-none transition-all duration-200 focus:border-[#5e41de]/50 focus:ring-2 focus:ring-[#5e41de]/12 dark:border-[#5e41de]/25 dark:bg-zinc-800/60 dark:text-zinc-200"
              />
              <span className="text-xs text-zinc-400">to</span>
              <input
                type="date"
                // onChange={(e) => setDateTo(e.target.value)}
                // min={dateFrom}
                title="To date"
                className="rounded-xl border border-[#5e41de]/18 bg-white py-2.5 pl-3 pr-3 text-sm text-zinc-700 outline-none transition-all duration-200 focus:border-[#5e41de]/50 focus:ring-2 focus:ring-[#5e41de]/12 dark:border-[#5e41de]/25 dark:bg-zinc-800/60 dark:text-zinc-200"
              />
            </div>

            {/* Clear filters
            {hasFilters && (
              <button
                onClick={clearFilters}
                className="flex shrink-0 items-center gap-1.5 rounded-xl border border-red-200 bg-red-50 px-3 py-2.5 text-xs font-semibold text-red-500 transition-all duration-200 hover:bg-red-100 dark:border-red-900/40 dark:bg-red-900/15 dark:text-red-400 dark:hover:bg-red-900/25"
              >
                <FiX size={12} />
                Clear
              </button>
            )} */}
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

        {/* {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-[#5e41de]/20 bg-[#5e41de]/3 py-20 text-center dark:border-[#5e41de]/25 dark:bg-[#5e41de]/5">
            <RiLightbulbFlashLine
              size={48}
              className="text-[#5e41de]/30 dark:text-[#a78bfa]/30"
            />
            <div>
              <p className="font-semibold text-zinc-600 dark:text-zinc-400">
                No ideas found
              </p>
              <p className="mt-1 text-sm text-zinc-400 dark:text-zinc-500">
                Try adjusting your search or filters.
              </p>
            </div>
            {hasFilters && (
              <button
                onClick={clearFilters}
                className="rounded-xl border border-[#5e41de]/25 px-4 py-2 text-sm font-semibold text-[#5e41de] transition-all hover:bg-[#5e41de]/8 dark:border-[#5e41de]/35 dark:text-[#a78bfa]"
              >
                Clear filters
              </button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((idea) => (
              <IdeaCard key={idea._id} idea={idea} />
            ))}
          </div>
        )} */}
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
