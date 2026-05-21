"use client";
import {  UpdateIdeasAction } from "@/lib/Action/CrudAction";
import { toast } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";
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

const inputErrCls =
  "w-full rounded-xl border border-red-400 bg-white/80 px-4 py-3 text-sm text-zinc-700 placeholder-zinc-400 outline-none transition-all duration-200 focus:border-red-400 focus:ring-2 focus:ring-red-200 dark:border-red-500 dark:bg-zinc-800/60 dark:text-zinc-200 dark:placeholder-zinc-500";

const labelCls =
  "flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400";

const FieldLabel = ({ icon: Icon, children }) => (
  <label className={labelCls}>
    <Icon size={11} className="text-[#5e41de] dark:text-[#a78bfa]" />
    {children}
  </label>
);

const FieldError = ({ msg }) =>
  msg ? (
    <p className="flex items-center gap-1 text-xs font-medium text-red-500 dark:text-red-400">
      <FiAlertCircle size={11} />
      {msg}
    </p>
  ) : null;

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

export default function UpdateForm({ ideasDetails }) {
  const router = useRouter()

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


  const [state, formAction] = useActionState(UpdateIdeasAction, null);
  useEffect(() => {
  if (state?.success) {
    toast.success(state.message);

    router.refresh();
    router.push("/my-ideas");
  }

  if (state?.errors) {
    toast.error(state.message);
  }
}, [state, router]);
  const errors = state?.errors ?? {};
  const hasErrors = Object.keys(errors).length > 0;

  return (

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
              defaultValue={title}
                type="text"
                placeholder="e.g. AI-Powered Personal Finance Coach"
                className={errors.title ? inputErrCls : inputCls}
              />
              <FieldError msg={errors.title} />
            </div>

            {/* Short Description */}
            <div className="flex flex-col gap-1.5">
              <FieldLabel icon={FiTag}>Short Description</FieldLabel>
              <input
                name="shortDescription"
                defaultValue={shortDescription}
                type="text"
                maxLength={150}
                placeholder="One-line pitch — what does your idea do? (max 150 chars)"
                className={errors.shortDescription ? inputErrCls : inputCls}
              />
              <FieldError msg={errors.shortDescription} />
            </div>

            {/* Category */}
            <div className="flex flex-col gap-1.5">
              <FieldLabel icon={FiLayers}>Category</FieldLabel>
              <select
                name="category"
                defaultValue={category}
                className={errors.category ? inputErrCls : inputCls}
              >
                <option value="">Select a category…</option>
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
              <FieldError msg={errors.category} />
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
          <CheckboxGroup items={TAGS} name="tags" cols={3} />
          <FieldError msg={errors.tags} />
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
                defaultValue={imageUrl}
                placeholder="https://example.com/cover.jpg"
                className={errors.imageUrl ? inputErrCls : inputCls}
              />
              <FieldError msg={errors.imageUrl} />
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
                className={errors.estimatedBudget ? inputErrCls : inputCls}
              />
              <FieldError msg={errors.estimatedBudget} />
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
          <FieldError msg={errors.targetAudience} />
        </div>

        {/* ── Section: Full Content ── */}
        <div className="rounded-xl border border-[#5e41de]/10 bg-[#5e41de]/3 px-4 py-3 dark:border-[#5e41de]/15 dark:bg-[#5e41de]/5">
          <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-[#5e41de] dark:text-[#a78bfa]">
            In-Depth Content
          </p>
          <div className="flex flex-col gap-4">
            {/* Detailed Description */}
            <div className="flex flex-col gap-1.5">
              <FieldLabel icon={FiBookOpen}>Detailed Description</FieldLabel>
              <textarea
              name="detailedDescription"
              defaultValue={detailedDescription}
                rows={4}
                placeholder="Describe your idea in full — what it is, how it works, why it matters…"
                className={`${errors.detailedDescription ? inputErrCls : inputCls} resize-none`}
              />
              <FieldError msg={errors.detailedDescription} />
            </div>

            {/* Problem Statement */}
            <div className="flex flex-col gap-1.5">
              <FieldLabel icon={FiAlertCircle}>Problem Statement</FieldLabel>
              <textarea
              name="problemStatement"
              defaultValue={problemStatement}
                rows={3}
                placeholder="What specific problem does your idea solve?"
                className={`${errors.problemStatement ? inputErrCls : inputCls} resize-none`}
              />
              <FieldError msg={errors.problemStatement} />
            </div>

            {/* Proposed Solution */}
            <div className="flex flex-col gap-1.5">
              <FieldLabel icon={FiTarget}>Proposed Solution</FieldLabel>
              <textarea
              name="proposedSolution"
              defaultValue={proposedSolution}
                rows={3}
                placeholder="How does your idea solve the problem above?"
                className={`${errors.proposedSolution ? inputErrCls : inputCls} resize-none`}
              />
              <FieldError msg={errors.proposedSolution} />
            </div>
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="h-px w-full bg-[#5e41de]/8 dark:bg-[#5e41de]/15" />

        {/* ── Bottom error summary ── */}
        {hasErrors && (
          <div className="flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600 dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-400">
            <FiAlertCircle size={15} className="shrink-0" />
            Please fill in all required fields before submitting.
          </div>
        )}

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

  );
}
