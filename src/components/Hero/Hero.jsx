"use client";
import { FiZap } from "react-icons/fi";
import { RiLightbulbFlashFill } from "react-icons/ri";
import SecondaryButton from "../Button/SecondaryButton";
import HeroSwiper from "./HeroSwiper";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-white via-[#5e41de]/5 to-[#a78bfa]/10 py-16 dark:from-zinc-950 dark:via-[#5e41de]/10 dark:to-[#a78bfa]/5 md:py-24">
      {/* Background blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[#5e41de]/10 blur-3xl dark:bg-[#5e41de]/20" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#a78bfa]/10 blur-3xl dark:bg-[#a78bfa]/20" />
        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5e41de]/5 blur-2xl dark:bg-[#5e41de]/10" />
      </div>

      <div className="relative mx-auto max-w-11/12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* ── Text Column ── */}
          <div className="flex flex-col gap-7 text-center lg:text-left">
            {/* Badge */}
            <div className="flex justify-center lg:justify-start">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#5e41de]/25 bg-[#5e41de]/10 px-4 py-1.5 text-sm font-semibold text-[#5e41de] dark:border-[#5e41de]/30 dark:text-[#a78bfa]">
                <RiLightbulbFlashFill className="animate-pulse" /> The Startup
                Idea Hub
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl md:text-6xl">
              Where{" "}
              <span className="text-[#5e41de] dark:text-[#a78bfa]">
                Great Ideas
              </span>{" "}
              Find Their Spark
            </h1>

            {/* Sub-text */}
            <p className="mx-auto max-w-xl text-base leading-relaxed text-zinc-500 dark:text-zinc-400 sm:text-lg lg:mx-0">
              IdeaVault is where entrepreneurs share, validate, and discover
              startup ideas. Join a growing community of innovators turning bold
              concepts into real companies.
            </p>

            {/* CTA */}
            <div className="flex justify-center lg:justify-start">
              <SecondaryButton
                href="/ideas"
                label="Explore Ideas"
                icon={FiZap}
              />
            </div>

            {/* Stats */}
            <div className="flex items-center justify-center gap-4 lg:justify-start">
              <div className="flex flex-col items-center rounded-2xl border border-[#5e41de]/15 bg-[#5e41de]/5 px-5 py-3 shadow-sm shadow-[#5e41de]/10 dark:border-[#5e41de]/20 dark:bg-[#5e41de]/10 lg:items-start">
                <p className="text-2xl font-bold text-[#5e41de] dark:text-[#a78bfa]">
                  1.2K+
                </p>
                <p className="text-xs text-zinc-400">Ideas Shared</p>
              </div>
              <div className="flex flex-col items-center rounded-2xl border border-[#5e41de]/15 bg-[#5e41de]/5 px-5 py-3 shadow-sm shadow-[#5e41de]/10 dark:border-[#5e41de]/20 dark:bg-[#5e41de]/10 lg:items-start">
                <p className="text-2xl font-bold text-[#5e41de] dark:text-[#a78bfa]">
                  500+
                </p>
                <p className="text-xs text-zinc-400">Innovators</p>
              </div>
              <div className="flex flex-col items-center rounded-2xl border border-[#5e41de]/15 bg-[#5e41de]/5 px-5 py-3 shadow-sm shadow-[#5e41de]/10 dark:border-[#5e41de]/20 dark:bg-[#5e41de]/10 lg:items-start">
                <p className="text-2xl font-bold text-[#5e41de] dark:text-[#a78bfa]">
                  50+
                </p>
                <p className="text-xs text-zinc-400">Categories</p>
              </div>
            </div>
          </div>

          {/* ── Swiper Column ── */}
          <div className="w-full">
            <HeroSwiper />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
