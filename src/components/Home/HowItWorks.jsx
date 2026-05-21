import { FiEdit3, FiMessageSquare, FiSend, FiTrendingUp } from "react-icons/fi";

const STEPS = [
  {
    number: "01",
    icon: FiEdit3,
    title: "Share Your Idea",
    description:
      "Fill out a simple form with your startup concept — title, category, budget, and the problem you're solving.",
    color: "from-[#5e41de] to-[#7c5ce0]",
    glow: "shadow-[#5e41de]/25",
    ring: "ring-[#5e41de]/20",
  },
  {
    number: "02",
    icon: FiMessageSquare,
    title: "Collect Feedback",
    description:
      "The community votes, comments, and engages with your idea — giving you real-world validation instantly.",
    color: "from-[#7c5ce0] to-[#a78bfa]",
    glow: "shadow-[#7c5ce0]/25",
    ring: "ring-[#7c5ce0]/20",
  },
  {
    number: "03",
    icon: FiTrendingUp,
    title: "Gain Traction",
    description:
      "Top-voted ideas surface on the trending page, attracting co-founders, investors, and early adopters.",
    color: "from-[#a78bfa] to-[#c4b5fd]",
    glow: "shadow-[#a78bfa]/25",
    ring: "ring-[#a78bfa]/20",
  },
  {
    number: "04",
    icon: FiSend,
    title: "Launch & Grow",
    description:
      "Turn community momentum into a real product. Update your idea as it evolves and build in public.",
    color: "from-[#c4b5fd] to-[#5e41de]",
    glow: "shadow-[#c4b5fd]/20",
    ring: "ring-[#c4b5fd]/20",
  },
];

const HowItWorks = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 dark:bg-zinc-950 md:py-24">
      {/* top border line */}
      <div className="absolute left-0 right-0 top-0 h-px bg-linear-to-r from-transparent via-[#5e41de]/30 to-transparent" />

      {/* bg grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-50 dark:opacity-100"
        style={{
          backgroundImage:
            "linear-gradient(to right,#5e41de08 1px,transparent 1px),linear-gradient(to bottom,#5e41de08 1px,transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto max-w-11/12">
        {/* Header */}
        <div className="mb-14 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#5e41de]/25 bg-[#5e41de]/8 px-4 py-1.5 text-xs font-semibold text-[#5e41de] dark:border-[#5e41de]/30 dark:bg-[#5e41de]/12 dark:text-[#a78bfa]">
            ✦ Simple Process
          </span>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-zinc-800 sm:text-4xl lg:text-5xl dark:text-zinc-100">
            How{" "}
            <span className="bg-linear-to-r from-[#5e41de] to-[#a78bfa] bg-clip-text text-transparent">
              It Works
            </span>
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
            From napkin sketch to community-validated concept in four easy
            steps.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative flex flex-col">
                {/* connector line (desktop) */}
                {idx < STEPS.length - 1 && (
                  <div className="absolute left-full top-10 hidden w-full -translate-x-1/2 lg:block">
                    <div className="h-px w-full bg-linear-to-r from-[#5e41de]/30 to-[#a78bfa]/30" />
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 border-4 border-transparent border-l-[#a78bfa]/50" />
                  </div>
                )}

                <div
                  className={`flex flex-col gap-4 rounded-2xl border bg-white p-6 shadow-lg ring-1 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-zinc-900 ${step.glow} ${step.ring} border-zinc-100 dark:border-zinc-800`}
                >
                  {/* Step number + icon row */}
                  <div className="flex items-center justify-between">
                    <span className="text-4xl font-black tracking-tighter text-zinc-100 dark:text-zinc-800">
                      {step.number}
                    </span>
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br ${step.color} shadow-md ${step.glow}`}
                    >
                      <Icon size={20} className="text-white" />
                    </div>
                  </div>

                  <h3 className="text-[15px] font-bold text-zinc-800 dark:text-zinc-100">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
