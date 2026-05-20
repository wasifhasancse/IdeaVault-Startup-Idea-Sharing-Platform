import { UpdateIdeasAction } from "@/lib/Action/CrudAction";
import { GetIdeasById } from "@/lib/Action/GetData";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import {
  FiAlertCircle,
  FiBookOpen,
  FiDollarSign,
  FiImage,
  FiLayers,
  FiTag,
  FiTarget,
  FiType,
  FiZap,
} from "react-icons/fi";
import { RiLightbulbFlashFill } from "react-icons/ri";

const CATEGORIES = [
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

const TAGS = [
  "MVP",
  "B2C",
  "B2B",
  "SaaS",
  "Mobile App",
  "Open Source",
  "Marketplace",
  "Blockchain",
  "Hardware",
  "Sustainability",
  "EdTech",
  "FinTech",
];

const TARGET_AUDIENCES = [
  "Students",
  "Entrepreneurs",
  "Developers",
  "Healthcare Professionals",
  "Small Businesses",
  "Enterprise",
  "General Public",
  "Researchers",
  "Creators",
  "Investors",
];

const inputCls =
  "w-full rounded-xl border border-[#5e41de]/20 bg-white/80 px-4 py-3 text-sm text-zinc-700 placeholder-zinc-400 outline-none transition-all duration-200 focus:border-[#5e41de]/50 focus:ring-2 focus:ring-[#5e41de]/15 dark:border-[#5e41de]/25 dark:bg-zinc-800/60 dark:text-zinc-200 dark:placeholder-zinc-500 dark:focus:border-[#5e41de]/50";

const labelCls =
  "flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400";

const FieldLabel = ({ icon: Icon, children }) => (
  <label className={labelCls}>
    <Icon size={11} className="text-[#5e41de] dark:text-[#a78bfa]" />
    {children}
  </label>
);

const CheckboxGroup = ({ items, name, cols = 3 }) => (
  <div className={`grid grid-cols-2 gap-2 sm:grid-cols-${cols}`}>
    {items.map((item) => (
      <label
        key={item}
        className="group flex cursor-pointer items-center gap-2 rounded-xl border border-[#5e41de]/15 bg-white/60 px-3 py-2 text-xs font-semibold text-zinc-500 transition-all duration-200 hover:border-[#5e41de]/35 hover:bg-[#5e41de]/5 has-checked:border-[#5e41de]/60 has-checked:bg-[#5e41de]/10 has-checked:text-[#5e41de] dark:border-[#5e41de]/20 dark:bg-zinc-800/40 dark:text-zinc-400 dark:has-checked:border-[#5e41de]/50 dark:has-checked:bg-[#5e41de]/20 dark:has-checked:text-[#a78bfa]"
      >
        <input type="checkbox" name={name} value={item} className="sr-only" />
        <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded border border-zinc-300 transition-all group-has-checked:border-[#5e41de] group-has-checked:bg-[#5e41de] dark:border-zinc-600">
          <svg
            viewBox="0 0 10 8"
            className="h-2.5 w-2.5 fill-none stroke-white stroke-2 opacity-0 group-has-checked:opacity-100"
          >
            <polyline points="1,4 3.5,6.5 9,1" />
          </svg>
        </span>
        {item}
      </label>
    ))}
  </div>
);

const UpdateIdeas = async ({ params }) => {
  const { ideas_id } = await params;
  const ideasDetails = await GetIdeasById(ideas_id);
  const {
    _id,
    title,
    imageUrl,
    category,
    shortDescription,
    detailedDescription,
    problemStatement,
    proposedSolution,
    estimatedBudget,
    createTime,
    tags,
    targetAudience,
    userInfo,
  } = ideasDetails;
  const formAction = async (formData) => {
    "use server";
    await UpdateIdeasAction(formData, ideas_id);
  };

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

            <form action={formAction} className="flex flex-col gap-5">
              {/* ── Section: Basic Info ── */}
              <div className="rounded-xl border border-[#5e41de]/10 bg-[#5e41de]/3 px-4 py-3 dark:border-[#5e41de]/15 dark:bg-[#5e41de]/5">
                <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-[#5e41de] dark:text-[#a78bfa]">
                  Basic Information
                </p>
                <div className="flex flex-col gap-4">
                  {/* Idea Title */}
                  <div className="flex flex-col gap-1.5">
                    <FieldLabel icon={FiType}>Idea Title</FieldLabel>
                    <input
                      name="title"
                      type="text"
                      defaultValue={title}
                      required
                      placeholder="e.g. AI-Powered Personal Finance Coach"
                      className={inputCls}
                    />
                  </div>

                  {/* Short Description */}
                  <div className="flex flex-col gap-1.5">
                    <FieldLabel icon={FiTag}>Short Description</FieldLabel>
                    <input
                      name="shortDescription"
                      defaultValue={shortDescription}
                      type="text"
                      required
                      maxLength={150}
                      placeholder="One-line pitch — what does your idea do? (max 150 chars)"
                      className={inputCls}
                    />
                  </div>

                  {/* Category */}
                  <div className="flex flex-col gap-1.5">
                    <FieldLabel icon={FiLayers}>Category</FieldLabel>
                    <select
                      name="category"
                      defaultValue={category}
                      required
                      className={inputCls}
                    >
                      <option value="" disabled defaultValue>
                        Select a category…
                      </option>
                      {CATEGORIES.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* ── Section: Tags ── */}
              <div className="rounded-xl border border-[#5e41de]/10 bg-[#5e41de]/3 px-4 py-3 dark:border-[#5e41de]/15 dark:bg-[#5e41de]/5">
                <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-[#5e41de] dark:text-[#a78bfa]">
                  Tags{" "}
                  <span className="normal-case font-normal text-zinc-400">
                    — pick all that apply
                  </span>
                </p>
                <CheckboxGroup
                  items={TAGS}
                  defaultValue={tags}
                  name="tags"
                  cols={3}
                />
              </div>

              {/* ── Section: Media & Budget ── */}
              <div className="rounded-xl border border-[#5e41de]/10 bg-[#5e41de]/3 px-4 py-3 dark:border-[#5e41de]/15 dark:bg-[#5e41de]/5">
                <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-[#5e41de] dark:text-[#a78bfa]">
                  Media &amp; Budget
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {/* Image URL */}
                  <div className="flex flex-col gap-1.5">
                    <FieldLabel icon={FiImage}>Image URL</FieldLabel>
                    <input
                      name="imageUrl"
                      type="url"
                      placeholder="https://example.com/cover.jpg"
                      className={inputCls}
                      defaultValue={imageUrl}
                    />
                  </div>

                  {/* Estimated Budget */}
                  <div className="flex flex-col gap-1.5">
                    <FieldLabel icon={FiDollarSign}>
                      Estimated Budget (USD)
                    </FieldLabel>
                    <input
                      name="estimatedBudget"
                      type="number"
                      defaultValue={estimatedBudget}
                      min={0}
                      placeholder="e.g. 25000"
                      className={inputCls}
                    />
                  </div>
                </div>
              </div>

              {/* ── Section: Target Audience ── */}
              <div className="rounded-xl border border-[#5e41de]/10 bg-[#5e41de]/3 px-4 py-3 dark:border-[#5e41de]/15 dark:bg-[#5e41de]/5">
                <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-[#5e41de] dark:text-[#a78bfa]">
                  Target Audience{" "}
                  <span className="normal-case font-normal text-zinc-400">
                    — pick all that apply
                  </span>
                </p>
                <CheckboxGroup
                  items={TARGET_AUDIENCES}
                  defaultValue={targetAudience}
                  name="targetAudience"
                  cols={3}
                />
              </div>

              {/* ── Section: Full Content ── */}
              <div className="rounded-xl border border-[#5e41de]/10 bg-[#5e41de]/3 px-4 py-3 dark:border-[#5e41de]/15 dark:bg-[#5e41de]/5">
                <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-[#5e41de] dark:text-[#a78bfa]">
                  In-Depth Content
                </p>
                <div className="flex flex-col gap-4">
                  {/* Detailed Description */}
                  <div className="flex flex-col gap-1.5">
                    <FieldLabel icon={FiBookOpen}>
                      Detailed Description
                    </FieldLabel>
                    <textarea
                      name="detailedDescription"
                      required
                      rows={4}
                      placeholder="Describe your idea in full — what it is, how it works, why it matters…"
                      className={`${inputCls} resize-none`}
                      defaultValue={detailedDescription}
                    />
                  </div>

                  {/* Problem Statement */}
                  <div className="flex flex-col gap-1.5">
                    <FieldLabel icon={FiAlertCircle}>
                      Problem Statement
                    </FieldLabel>
                    <textarea
                      name="problemStatement"
                      defaultValue={problemStatement}
                      required
                      rows={3}
                      placeholder="What specific problem does your idea solve?"
                      className={`${inputCls} resize-none`}
                    />
                  </div>

                  {/* Proposed Solution */}
                  <div className="flex flex-col gap-1.5">
                    <FieldLabel icon={FiTarget}>Proposed Solution</FieldLabel>
                    <textarea
                      name="proposedSolution"
                      defaultValue={proposedSolution}
                      required
                      rows={3}
                      placeholder="How does your idea solve the problem above?"
                      className={`${inputCls} resize-none`}
                    />
                  </div>
                </div>
              </div>

              {/* ── Divider ── */}
              <div className="h-px w-full bg-[#5e41de]/8 dark:bg-[#5e41de]/15" />

              {/* ── Actions ── */}
              <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                <button
                  type="reset"
                  className="h-11 w-full rounded-xl border border-[#5e41de]/25 bg-transparent px-6 text-sm font-semibold text-[#5e41de] transition-all duration-200 hover:border-[#5e41de]/50 hover:bg-[#5e41de]/8 dark:border-[#5e41de]/35 dark:text-[#a78bfa] dark:hover:bg-[#5e41de]/15 sm:w-auto cursor-pointer"
                >
                  Reset
                </button>
                <button
                  type="submit"
                  className="h-11 w-full rounded-xl bg-[#5e41de] px-8 text-sm font-bold text-white shadow-md shadow-[#5e41de]/30 transition-all duration-200 hover:bg-[#4930b8] hover:shadow-lg hover:shadow-[#5e41de]/30 sm:w-auto cursor-pointer"
                >
                  Submit Idea
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpdateIdeas;
