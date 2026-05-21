"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { FiLayers } from "react-icons/fi";

const CategoryData = [
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

const FilterCategory = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentCategory = searchParams.get("category") || "";

  const manageFilter = (e) => {
    const category = e.target.value;
    const params = new URLSearchParams(searchParams.toString());
    if (category) {
      params.set("category", category);
    } else {
      params.delete("category");
    }
    router.push(`/ideas?${params.toString()}`);
  };

  return (
    <div className="relative flex items-center">
      <FiLayers
        size={13}
        className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#5e41de] dark:text-[#a78bfa]"
      />
      <select
        value={currentCategory}
        onChange={manageFilter}
        className="w-full appearance-none rounded-xl border border-[#5e41de]/20 bg-white/90 py-2.5 pl-8 pr-8 text-sm text-zinc-700 outline-none transition-all duration-200 focus:border-[#5e41de]/50 focus:ring-2 focus:ring-[#5e41de]/15 lg:w-auto dark:border-[#5e41de]/25 dark:bg-zinc-800/70 dark:text-zinc-200 cursor-pointer"
      >
        <option value="">All Categories</option>
        {CategoryData.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <svg
        className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-400 dark:text-zinc-500"
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
      >
        <path
          d="M2 4l4 4 4-4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default FilterCategory;
