"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { FiSearch, FiX } from "react-icons/fi";

const SearchingMethod = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const urlSearch = searchParams.get("search") || "";
  const [searchQuery, setSearchQuery] = useState(urlSearch);
  const [prevUrlSearch, setPrevUrlSearch] = useState(urlSearch);

  // Sync input when URL param changes externally (e.g. ClearFilters)
  if (prevUrlSearch !== urlSearch) {
    setPrevUrlSearch(urlSearch);
    setSearchQuery(urlSearch);
  }

  const clearSearch = () => {
    setSearchQuery("");
    const params = new URLSearchParams(searchParams.toString());
    params.delete("search");
    router.push(`/ideas?${params.toString()}`);
  };

  const manageSearch = () => {
    const params = new URLSearchParams(searchParams.toString());
    if (searchQuery) {
      params.set("search", searchQuery);
    } else {
      params.delete("search");
    }
    router.push(`/ideas?${params.toString()}`);
  };

  return (
    <div className="flex min-w-0 flex-1 items-center">
      {/* Input wrapper — × is positioned relative to this */}
      <div className="relative flex-1">
        <FiSearch
          size={15}
          className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400 dark:text-zinc-500"
        />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && manageSearch()}
          placeholder="Search ideas by title, description, or category…"
          className="w-full rounded-xl rounded-r-none border border-r-0 border-[#5e41de]/20 bg-white/90 py-2.5 pl-9 pr-9 text-sm text-zinc-700 placeholder-zinc-400 outline-none transition-all duration-200 focus:border-[#5e41de]/50 focus:ring-2 focus:ring-[#5e41de]/15 dark:border-[#5e41de]/25 dark:bg-zinc-800/70 dark:text-zinc-200 dark:placeholder-zinc-500 dark:focus:border-[#5e41de]/50"
        />
        {searchQuery && (
          <button
            type="button"
            onClick={clearSearch}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-full p-0.5 text-zinc-400 transition hover:text-zinc-600 dark:hover:text-zinc-300"
          >
            <FiX size={13} />
          </button>
        )}
      </div>
      <button
        type="button"
        onClick={manageSearch}
        className="flex shrink-0 items-center gap-1.5 rounded-xl rounded-l-none border border-[#5e41de] bg-[#5e41de] px-4 py-2.5 text-sm font-semibold text-white shadow-sm shadow-[#5e41de]/30 transition-all duration-200 hover:bg-[#4930b8] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#5e41de]/40 cursor-pointer"
      >
        <FiSearch size={14} />
        Search
      </button>
    </div>
  );
};

export default SearchingMethod;
