import {
  FiEye,
  FiGlobe,
  FiLock,
  FiShield,
  FiStar,
  FiUsers,
  FiZap,
} from "react-icons/fi";
import { RiLightbulbFlashLine } from "react-icons/ri";

const FEATURES = [
  {
    icon: FiZap,
    title: "Instant Publishing",
    description:
      "Post your idea in under 2 minutes. No lengthy forms — just the essentials that matter to investors and co-founders.",
    accent: "bg-amber-500/10 text-amber-600 dark:bg-amber-500/15 dark:text-amber-400",
    border: "hover:border-amber-300 dark:hover:border-amber-600/50",
  },
  {
    icon: FiUsers,
    title: "Community Validation",
    description:
      "Real entrepreneurs review your concept. Upvotes and comments tell you if you're onto something before you spend a dime.",
    accent: "bg-[#5e41de]/10 text-[#5e41de] dark:bg-[#5e41de]/15 dark:text-[#a78bfa]",
    border: "hover:border-[#5e41de]/40 dark:hover:border-[#5e41de]/50",
  },
  {
    icon: FiGlobe,
    title: "Global Audience",
    description:
      "IdeaVault connects you with innovators, builders, and investors from across the world — all in one place.",
    accent: "bg-sky-500/10 text-sky-600 dark:bg-sky-500/15 dark:text-sky-400",
    border: "hover:border-sky-300 dark:hover:border-sky-600/50",
  },
  {
    icon: FiStar,
    title: "Trending Visibility",
    description:
      "Great ideas get promoted automatically. The more engagement your idea earns, the more exposure it receives.",
    accent: "bg-rose-500/10 text-rose-600 dark:bg-rose-500/15 dark:text-rose-400",
    border: "hover:border-rose-300 dark:hover:border-rose-600/50",
  },
  {
    icon: FiShield,
    title: "Idea Protection",
    description:
      "Your submission is timestamped and attributed to you. Build a verifiable track record of your innovation journey.",
    accent: "bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-400",
    border: "hover:border-emerald-300 dark:hover:border-emerald-600/50",
  },
  {
    icon: FiEye,
    title: "Rich Insights",
    description:
      "See who viewed your idea, how many upvoted it, and what the community is saying — all from your dashboard.",
    accent: "bg-violet-500/10 text-violet-600 dark:bg-violet-500/15 dark:text-violet-400",
    border: "hover:border-violet-300 dark:hover:border-violet-600/50",
  },
  {
    icon: FiLock,
    title: "Privacy Controls",
    description:
      "Keep your idea draft until you're ready. Publish only when the concept is polished and the timing is right.",
    accent: "bg-orange-500/10 text-orange-600 dark:bg-orange-500/15 dark:text-orange-400",
    border: "hover:border-orange-300 dark:hover:border-orange-600/50",
  },
  {
    icon: RiLightbulbFlashLine,
    title: "Iterative Updates",
    description:
      "Ideas evolve. Update your concept anytime as you learn from feedback and the market changes around you.",
    accent: "bg-teal-500/10 text-teal-600 dark:bg-teal-500/15 dark:text-teal-400",
    border: "hover:border-teal-300 dark:hover:border-teal-600/50",
  },
];

const WhyIdeaVault = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-[#5e41de]/4 via-white to-[#a78bfa]/4 py-16 dark:from-[#5e41de]/8 dark:via-zinc-950 dark:to-[#a78bfa]/6 md:py-24">
      {/* blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-24 top-12 h-64 w-64 rounded-full bg-[#5e41de]/8 blur-3xl dark:bg-[#5e41de]/14" />
        <div className="absolute -left-24 bottom-12 h-64 w-64 rounded-full bg-[#a78bfa]/8 blur-3xl dark:bg-[#a78bfa]/12" />
      </div>

      <div className="relative mx-auto max-w-11/12">
        {/* Header */}
        <div className="mb-14 flex flex-col items-center gap-4 text-center lg:flex-row lg:items-end lg:justify-between lg:text-left">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#5e41de]/25 bg-[#5e41de]/8 px-4 py-1.5 text-xs font-semibold text-[#5e41de] dark:border-[#5e41de]/30 dark:bg-[#5e41de]/12 dark:text-[#a78bfa]">
              ✦ Platform Benefits
            </span>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-zinc-800 sm:text-4xl lg:text-5xl dark:text-zinc-100">
              Why{" "}
              <span className="bg-linear-to-r from-[#5e41de] to-[#a78bfa] bg-clip-text text-transparent">
                IdeaVault?
              </span>
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
              Everything a first-time founder or seasoned entrepreneur needs to
              validate and grow an idea — in one focused platform.
            </p>
          </div>

          {/* Stat pills */}
          <div className="flex gap-3">
            {[
              { value: "10K+", label: "Ideas Shared" },
              { value: "50K+", label: "Community Members" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-[#5e41de]/15 bg-white px-5 py-3 text-center shadow-sm dark:border-[#5e41de]/20 dark:bg-zinc-900"
              >
                <div className="text-2xl font-black text-[#5e41de] dark:text-[#a78bfa]">
                  {stat.value}
                </div>
                <div className="text-[10px] font-semibold uppercase tracking-wide text-zinc-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`group flex flex-col gap-3 rounded-2xl border border-zinc-200/70 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 ${feature.border}`}
              >
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-xl ${feature.accent}`}
                >
                  <Icon size={18} />
                </div>
                <h3 className="text-[14px] font-bold text-zinc-800 dark:text-zinc-100">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyIdeaVault;
