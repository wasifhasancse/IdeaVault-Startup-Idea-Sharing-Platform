import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { RiLightbulbFlashFill } from "react-icons/ri";
import AddIdeaForm from "./AddIdeaForm";

const AddIdea = () => {
  return (
    <section className="relative min-h-[calc(100vh-64px)] overflow-hidden bg-linear-to-br from-white via-[#5e41de]/5 to-[#a78bfa]/10 py-10 dark:from-zinc-950 dark:via-[#5e41de]/10 dark:to-[#a78bfa]/5 md:py-14 lg:py-16">
      {/* Background blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[#5e41de]/10 blur-3xl dark:bg-[#5e41de]/20" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#a78bfa]/10 blur-3xl dark:bg-[#a78bfa]/20" />
        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5e41de]/5 blur-2xl dark:bg-[#5e41de]/10" />
      </div>

      <div className="relative mx-auto max-w-11/12">
        {/* Top accent line */}
        <div className="mb-8 h-px w-full bg-linear-to-r from-transparent via-[#5e41de]/50 to-transparent" />

        <div className="grid items-start gap-8 lg:grid-cols-[1fr_1.6fr] lg:gap-12">
          {/* ── Left panel ── */}
          <div className="flex flex-col gap-6 lg:sticky lg:top-20">
            {/* Badge */}
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[#5e41de]/25 bg-[#5e41de]/10 px-3.5 py-1.5 text-xs font-semibold text-[#5e41de] dark:border-[#5e41de]/30 dark:text-[#a78bfa]">
              <RiLightbulbFlashFill className="animate-pulse" /> Share Your Idea
            </span>

            {/* Lottie */}
            <div className="mx-auto w-full max-w-xs md:max-w-md lg:mx-0 lg:max-w-lg">
              <DotLottieReact
                src="https://lottie.host/8401d7bb-a069-41ce-833c-5fb41a6a51c9/J99zf06PTS.lottie"
                loop
                autoplay
              />
            </div>

            {/* Heading */}
            <div>
              <h1 className="text-3xl font-extrabold leading-tight text-zinc-800 sm:text-4xl dark:text-zinc-100">
                Launch Your{" "}
                <span className="bg-linear-to-r from-[#5e41de] to-[#a78bfa] bg-clip-text text-transparent">
                  Next Big Idea
                </span>
              </h1>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                Turn your vision into reality. Submit your startup concept, get
                community feedback, and connect with co-founders and investors
                who believe in your idea.
              </p>
            </div>

            {/* Tips card */}
            <div className="rounded-2xl border border-[#5e41de]/15 bg-[#5e41de]/5 p-4 dark:border-[#5e41de]/25 dark:bg-[#5e41de]/10">
              <p className="mb-2.5 text-[10px] font-bold uppercase tracking-widest text-[#5e41de] dark:text-[#a78bfa]">
                Tips for a great submission
              </p>
              <ul className="space-y-2 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                {[
                  "Be specific — a clear problem statement gets more traction",
                  "Use a high-quality image URL to make your idea stand out",
                  "Select all relevant tags to improve discoverability",
                  "Estimate your budget realistically to attract the right investors",
                  "Describe your target audience in as much detail as possible",
                ].map((tip) => (
                  <li key={tip} className="flex items-start gap-2">
                    <span className="mt-0.5 shrink-0 text-[#5e41de] dark:text-[#a78bfa]">
                      •
                    </span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── Right: Form card ── */}
          <AddIdeaForm />
        </div>
      </div>
    </section>
  );
};

export default AddIdea;
