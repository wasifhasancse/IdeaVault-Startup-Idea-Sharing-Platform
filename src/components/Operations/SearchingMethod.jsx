"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";

const SearchingMethod = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter()
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
    <div className="relative flex min-w-0 flex-1 items-center">
      <FiSearch
        size={15}
        className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400"
      />
      <input
        type="search"
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search ideas by title, description, or category…"
        className="w-full rounded-xl rounded-r-none border border-r-0 border-[#5e41de]/18 bg-white py-2.5 pl-9 pr-4 text-sm text-zinc-700 placeholder-zinc-400 outline-none transition-all duration-200 focus:border-[#5e41de]/50 focus:ring-2 focus:ring-[#5e41de]/12 dark:border-[#5e41de]/25 dark:bg-zinc-800/60 dark:text-zinc-200 dark:placeholder-zinc-500 dark:focus:border-[#5e41de]/50"
      />
      <button
        type="submit"
        onClick={manageSearch}
        className="flex shrink-0 items-center gap-1.5 rounded-xl rounded-l-none border px-4 py-2.5 text-sm font-semibold transition-all duration-200 hover:bg-[#5e41de]/30 hover:border-[#5e41de]/50 focus:outline-none focus:ring-2 focus:ring-[#5e41de]/40 border-[#5e41de]/15 bg-[#5e41de]/6 text-[#5e41de] dark:border-[#5e41de]/25 dark:bg-[#5e41de]/15 dark:text-[#a78bfa] cursor-pointer"
      >
        <FiSearch size={14} />
        Search
      </button>
    </div>
  );
};

export default SearchingMethod;
