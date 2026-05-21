"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { FiX } from "react-icons/fi";

const ClearFilters = ({ label = "Clear" }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const hasSearch = !!searchParams.get("search");
  const hasCategory = !!searchParams.get("category");
  const isActive = hasSearch || hasCategory;

  if (!isActive) return null;

  const handleClear = () => {
    router.push("/ideas");
  };

  return (
    <button
      type="button"
      onClick={handleClear}
      className="flex shrink-0 cursor-pointer items-center gap-1.5 rounded-xl border border-red-300 bg-red-50 px-3.5 py-2.5 text-sm font-medium text-red-500 transition-all duration-200 hover:border-red-400 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-300/40 dark:border-red-500/40 dark:bg-red-500/10 dark:text-red-400 dark:hover:border-red-500/60 dark:hover:bg-red-500/20"
    >
      <FiX size={14} />
      {label}
    </button>
  );
};

export default ClearFilters;
