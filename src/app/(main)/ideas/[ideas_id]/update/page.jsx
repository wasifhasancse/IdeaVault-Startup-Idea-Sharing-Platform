import UpdateForm from "@/components/Operations/UpdateForm";
import { GetIdeasById } from "@/lib/Action/CrudAction";
import { auth } from "@/lib/auth";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { headers } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FiArrowLeft, FiZap } from "react-icons/fi";

const UpdateIdeas = async ({ params }) => {
  const { ideas_id } = await params;
  const session = await auth.api.getSession({ headers: await headers() });
  const ideasDetails = await GetIdeasById(ideas_id);
  const { userInfo } = ideasDetails;
  if (session?.user?.email !== userInfo.email) {
    return redirect("/protected");
  }

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

        {/* Back button — visible on all screens */}
        <div className="mb-6">
          <Link
            href="/my-ideas"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-[#5e41de]/25 bg-[#5e41de]/10 px-4 py-2 text-sm font-semibold text-[#5e41de] transition hover:bg-[#5e41de]/20 dark:border-[#5e41de]/30 dark:text-[#a78bfa] dark:hover:bg-[#5e41de]/20"
          >
            <FiArrowLeft size={15} />
            Back to My Ideas
          </Link>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-[1fr_1.6fr] lg:gap-12">
          {/* ── Left panel — desktop only ── */}
          <div className="hidden flex-col gap-5 lg:flex lg:sticky lg:top-20">
            {/* Lottie */}
            <div className="mx-auto w-full max-w-xs lg:mx-0 lg:max-w-lg">
              <DotLottieReact
                src="https://lottie.host/69f8d24e-6619-4df3-90bf-9e7013cbb84f/ZtsR51S0wX.lottie"
                loop
                autoplay
              />
            </div>

            {/* Heading */}
            <div>
              <h1 className="text-3xl font-extrabold leading-tight text-zinc-800 xl:text-4xl dark:text-zinc-100">
                Refine &amp;{" "}
                <span className="bg-linear-to-r from-[#5e41de] to-[#a78bfa] bg-clip-text text-transparent">
                  Improve Your Idea
                </span>
              </h1>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                Update your idea with fresh details, sharper descriptions, and
                better visuals to attract more attention from the community.
              </p>
            </div>

            {/* Tips card */}
            <div className="rounded-2xl border border-[#5e41de]/15 bg-[#5e41de]/5 p-4 dark:border-[#5e41de]/25 dark:bg-[#5e41de]/10">
              <p className="mb-2.5 text-[10px] font-bold uppercase tracking-widest text-[#5e41de] dark:text-[#a78bfa]">
                Tips for a great update
              </p>
              <ul className="space-y-2 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                {[
                  "Review feedback you received and address the key concerns",
                  "Refresh your cover image to keep the idea visually appealing",
                  "Update tags if your idea has evolved in scope or category",
                  "Revise your budget estimate if costs have changed",
                  "Clarify your target audience to attract better co-founders",
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
          <div className="rounded-3xl border border-white/70 bg-white/70 p-6 shadow-xl shadow-[#5e41de]/8 backdrop-blur-sm dark:border-white/5 dark:bg-zinc-900/60 sm:p-8">
            {/* Card header */}
            <div className="mb-6 flex items-center gap-3 border-b border-[#5e41de]/10 pb-5 dark:border-[#5e41de]/15">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#5e41de]/10 dark:bg-[#5e41de]/20">
                <FiZap
                  size={18}
                  className="text-[#5e41de] dark:text-[#a78bfa]"
                />
              </span>
              <div>
                <h2 className="font-bold text-zinc-800 dark:text-zinc-100">
                  Idea Details
                </h2>
                <p className="text-xs text-zinc-400 dark:text-zinc-500">
                  Fill in the details below to submit your idea
                </p>
              </div>
            </div>

            <UpdateForm ideasDetails={ideasDetails} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpdateIdeas;
