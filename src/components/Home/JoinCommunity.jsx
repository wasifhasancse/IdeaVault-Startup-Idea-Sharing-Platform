import Link from "next/link";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";
import { RiLightbulbFlashLine } from "react-icons/ri";

const PERKS = [
  "Free to join — always",
  "Post unlimited ideas",
  "Get real community feedback",
  "Appear on the trending page",
  "Track views, votes & comments",
  "Build your founder profile",
];

const JoinCommunity = () => {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      {/* Full-bleed purple gradient background */}
      <div className="absolute inset-0 bg-linear-to-br from-[#5e41de] via-[#6d4fe0] to-[#a78bfa]" />

      {/* Noise/texture overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04] bg-[url('data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20200%20200%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cfilter%20id%3D%22n%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.9%22%20numOctaves%3D%224%22%20stitchTiles%3D%22stitch%22/%3E%3C/filter%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20filter%3D%22url(%23n)%22/%3E%3C/svg%3E')]"
      />

      {/* Glow orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-white/8 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-2xl" />
      </div>

      {/* Decorative circles */}
      <div className="pointer-events-none absolute right-10 top-8 hidden h-24 w-24 rounded-full border border-white/15 lg:block" />
      <div className="pointer-events-none absolute right-20 top-16 hidden h-12 w-12 rounded-full border border-white/10 lg:block" />
      <div className="pointer-events-none absolute bottom-8 left-10 hidden h-20 w-20 rounded-full border border-white/15 lg:block" />

      <div className="relative mx-auto max-w-11/12">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between">
          {/* Left — copy */}
          <div className="max-w-xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
              <RiLightbulbFlashLine className="animate-pulse" size={13} />
              Join the Movement
            </div>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              Your idea could be{" "}
              <span className="relative">
                the next big thing
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-white/40" />
              </span>
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-white/80">
              Thousands of entrepreneurs are already sharing, validating, and
              growing their startup ideas on IdeaVault. Don&apos;t let yours
              stay stuck in a notebook.
            </p>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#5e41de] shadow-lg shadow-black/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/25"
              >
                Get Started Free
                <FiArrowRight size={15} />
              </Link>
              <Link
                href="/ideas"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20"
              >
                Browse Ideas
              </Link>
            </div>
          </div>

          {/* Right — perks card */}
          <div className="w-full max-w-sm rounded-3xl border border-white/20 bg-white/10 p-7 shadow-2xl backdrop-blur-md lg:shrink-0">
            <p className="mb-5 text-sm font-bold uppercase tracking-widest text-white/70">
              Everything included
            </p>
            <ul className="space-y-3.5">
              {PERKS.map((perk) => (
                <li key={perk} className="flex items-center gap-3">
                  <FiCheckCircle
                    size={17}
                    className="shrink-0 text-white/90"
                  />
                  <span className="text-sm font-medium text-white">
                    {perk}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-7 border-t border-white/20 pt-5">
              <p className="text-center text-[11px] font-semibold uppercase tracking-wider text-white/50">
                No credit card required
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinCommunity;
