import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Link from "next/link";
import { FiArrowLeft, FiMail, FiSend } from "react-icons/fi";
import { RiLightbulbFlashFill } from "react-icons/ri";

const ForgetPassword = () => {
  return (
    <section className="mx-auto w-full max-w-10/12 py-8 md:py-12 lg:py-14">
      <div className="relative overflow-hidden rounded-3xl border border-[#5e41de]/20 bg-white/90 shadow-2xl shadow-[#5e41de]/15 dark:border-[#5e41de]/25 dark:bg-zinc-950/90 dark:shadow-[#5e41de]/20">
        <div className="absolute inset-0 -z-10 bg-linear-to-br from-white via-[#5e41de]/5 to-[#a78bfa]/10 dark:from-zinc-950 dark:via-[#5e41de]/10 dark:to-[#a78bfa]/5" />
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#5e41de]/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#a78bfa]/10 blur-3xl" />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr]">
          {/* ── Left Panel ── */}
          <div className="relative border-b border-[#5e41de]/15 p-6 md:p-8 lg:border-b-0 lg:border-r lg:border-[#5e41de]/15 lg:p-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#5e41de]/25 bg-[#5e41de]/10 px-4 py-1.5 text-xs font-semibold text-[#5e41de] dark:border-[#5e41de]/30 dark:text-[#a78bfa]">
              <RiLightbulbFlashFill className="animate-pulse" /> IdeaVault
            </span>

            <h1 className="mt-4 text-3xl font-extrabold leading-tight text-zinc-900 dark:text-zinc-50 md:text-4xl lg:text-5xl">
              Forgot your{" "}
              <span className="text-[#5e41de] dark:text-[#a78bfa]">
                password?
              </span>
            </h1>

            <p className="mt-3 max-w-sm text-sm leading-relaxed text-zinc-500 dark:text-zinc-400 md:text-base">
              No worries — it happens to the best of us. Enter your email and
              we&apos;ll send you a link to reset your password.
            </p>

            <div className="my-6 flex justify-center lg:my-8">
              <DotLottieReact
                src="https://lottie.host/44f2bb75-6a1e-49f0-8fea-318abfabfcf0/3Wmx52w3OG.lottie"
                loop
                autoplay
                style={{ width: "210px", height: "210px" }}
              />
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#5e41de]/20 bg-[#5e41de]/5 px-4 py-3 shadow-sm shadow-[#5e41de]/10 dark:bg-[#5e41de]/10">
                <p className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[#5e41de] dark:text-[#a78bfa]">
                  <FiMail size={11} /> Check inbox
                </p>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  We&apos;ll send a reset link to your registered email
                </p>
              </div>
              <div className="rounded-2xl border border-[#5e41de]/20 bg-[#5e41de]/5 px-4 py-3 shadow-sm shadow-[#5e41de]/10 dark:bg-[#5e41de]/10">
                <p className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[#5e41de] dark:text-[#a78bfa]">
                  <RiLightbulbFlashFill /> Quick reset
                </p>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  Link expires in 15 minutes for your security
                </p>
              </div>
            </div>
          </div>

          {/* ── Right Panel ── */}
          <div className="p-6 md:p-8 lg:p-10">
            <div className="mb-6 flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#5e41de]/10 shadow-sm shadow-[#5e41de]/20 dark:bg-[#5e41de]/20">
                <FiMail className="h-6 w-6 text-[#5e41de] dark:text-[#a78bfa]" />
              </div>
              <div>
                <h2 className="text-2xl font-extrabold leading-tight text-zinc-900 dark:text-zinc-50 md:text-3xl">
                  Reset Password
                </h2>
                <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                  Enter your email to receive a reset link
                </p>
              </div>
            </div>

            <form className="flex w-full flex-col gap-5">
              {/* Email field */}
              <div className="flex flex-col gap-1.5">
                <label className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                  Email address
                </label>
                <div className="relative">
                  <FiMail
                    size={15}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400 dark:text-zinc-500"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-[#5e41de]/20 bg-[#5e41de]/5 py-2.5 pl-9 pr-4 text-sm text-zinc-700 outline-none transition-all duration-200 placeholder-zinc-400 focus:border-[#5e41de]/50 focus:ring-2 focus:ring-[#5e41de]/15 dark:border-[#5e41de]/25 dark:bg-[#5e41de]/10 dark:text-zinc-200 dark:placeholder-zinc-500"
                  />
                </div>
              </div>

              {/* Info note */}
              <p className="rounded-xl border border-[#5e41de]/15 bg-[#5e41de]/5 px-4 py-3 text-xs leading-relaxed text-zinc-500 dark:border-[#5e41de]/20 dark:bg-[#5e41de]/10 dark:text-zinc-400">
                A password reset link will be sent to this email if an account
                is associated with it.
              </p>

              {/* Submit */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#5e41de] px-6 py-3 text-sm font-bold text-white shadow-md shadow-[#5e41de]/30 transition-all duration-200 hover:bg-[#4930b8] hover:shadow-lg hover:shadow-[#5e41de]/30 cursor-pointer"
              >
                <FiSend size={15} />
                Send Reset Link
              </button>

              {/* Back to sign in */}
              <Link
                href="/signin"
                className="flex items-center justify-center gap-1.5 text-sm font-semibold text-[#5e41de] underline-offset-4 transition hover:underline hover:text-[#4930b8] dark:text-[#a78bfa]"
              >
                <FiArrowLeft size={14} />
                Back to Sign In
              </Link>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgetPassword;
