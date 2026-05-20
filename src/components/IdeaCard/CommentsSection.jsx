import { CommentIdeasAction } from "@/lib/Action/CrudAction";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import { FiMessageCircle, FiSend } from "react-icons/fi";
import CommentActions from "./CommentActions";

export default async function CommentsSection({ ideasDetails }) {
  const { comments, _id: ideasId } = ideasDetails;
  const session = await auth.api.getSession({ headers: await headers() });
  const currentUserEmail = session?.user?.email;

  const formAction = async (formData) => {
    "use server";
    await CommentIdeasAction(formData, ideasDetails?._id);
  };

  return (
    <section className="mt-12">
      {/* ── Header ── */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-linear-to-br from-[#5e41de]/15 to-[#5e41de]/5 dark:from-[#5e41de]/25 dark:to-[#5e41de]/10">
            <FiMessageCircle
              size={18}
              className="text-[#5e41de] dark:text-[#a78bfa]"
            />
          </div>
          <div>
            <h2 className="text-base font-bold text-zinc-800 dark:text-zinc-100">
              Discussion
            </h2>
            <p className="text-xs text-zinc-400 dark:text-zinc-500">
              {comments.length} {comments.length === 1 ? "comment" : "comments"}
            </p>
          </div>
        </div>
        {/* count pill */}
        <span className="rounded-full bg-[#5e41de]/8 px-3 py-1 text-xs font-semibold text-[#5e41de] dark:bg-[#5e41de]/15 dark:text-[#a78bfa]">
          {comments.length}
        </span>
      </div>
      <div className="flex flex-col gap-3">
        {comments.map((comment, index) => {
          const isOwn = comment.userInfo?.email === currentUserEmail;
          return (
            <div
              key={index}
              className={`group relative rounded-2xl border bg-white p-4 transition-shadow hover:shadow-sm dark:bg-zinc-900/70 ${
                isOwn
                  ? "border-[#5e41de]/15 bg-linear-to-br from-[#5e41de]/2 to-white dark:border-[#5e41de]/25 dark:from-[#5e41de]/5 dark:to-zinc-900/70"
                  : "border-zinc-100 dark:border-zinc-800"
              }`}
            >
              {/* own indicator strip */}
              {isOwn && (
                <span className="absolute left-0 top-4 h-6 w-0.5 rounded-r-full bg-[#5e41de]/60 dark:bg-[#a78bfa]/60" />
              )}

              <div className="flex gap-3">
                {/* Avatar */}
                <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full">
                  {comment?.userInfo?.image ? (
                    <Image
                      src={comment.userInfo.image}
                      alt={comment.userInfo?.name || "Author"}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <span className="flex h-full w-full items-center justify-center bg-linear-to-br from-yellow-500 to-amber-600 text-sm font-bold text-white">
                      {comment.userInfo?.name?.charAt(0)?.toUpperCase() ?? "?"}
                    </span>
                  )}
                </div>

                {/* Body */}
                <div className="min-w-0 flex-1">
                  {/* Name row */}
                  <div className="mb-1 flex flex-wrap items-center gap-x-2 gap-y-0.5">
                    <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
                      {comment.userInfo?.name || "Unknown User"}
                    </span>
                    {isOwn && (
                      <span className="rounded-full bg-[#5e41de]/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest text-[#5e41de] dark:bg-[#5e41de]/20 dark:text-[#a78bfa]">
                        You
                      </span>
                    )}
                    <span className="text-[11px] text-zinc-400 dark:text-zinc-500">
                      {comment.commentedAt}
                      {comment.editedAt && (
                        <span className="ml-1 italic">(edited)</span>
                      )}
                    </span>
                  </div>

                  {/* Comment text */}
                  <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                    {comment.comment}
                  </p>

                  {/* Edit / Delete for comment owner */}
                  {isOwn && (
                    <CommentActions
                      ideasId={ideasId}
                      commentIndex={index}
                      initialText={comment.comment}
                    />
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Add comment form ── */}
      <div className="mt-5 overflow-hidden rounded-2xl border border-[#5e41de]/12 bg-white shadow-sm dark:border-[#5e41de]/18 dark:bg-zinc-900/80">
        {/* form header */}
        <div className="flex items-center gap-2.5 border-b border-zinc-100 px-4 py-3 dark:border-zinc-800">
          <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full">
            {session?.user?.image ? (
              <Image
                src={session.user.image}
                alt={session.user?.name || "Author"}
                fill
                className="object-cover"
              />
            ) : (
              <span className="flex h-full w-full items-center justify-center bg-linear-to-br from-yellow-500 to-amber-600 text-sm font-bold text-white">
                {session?.user?.name?.charAt(0)?.toUpperCase() ?? "?"}
              </span>
            )}
          </div>
          <div>
            <p className="text-xs font-semibold text-zinc-700 dark:text-zinc-200">
              {session?.user?.name}
            </p>
            <p className="text-[10px] text-zinc-400 dark:text-zinc-500">
              Commenting as you
            </p>
          </div>
        </div>

        <form action={formAction} className="flex flex-col">
          <textarea
            placeholder="Share your thoughts, feedback, or questions…"
            rows={3}
            name="comment"
            className="w-full resize-none bg-transparent px-4 py-3 text-sm text-zinc-700 placeholder-zinc-400 outline-none dark:text-zinc-200 dark:placeholder-zinc-500"
          />
          <div className="flex items-center justify-between border-t border-zinc-100 px-4 py-3 dark:border-zinc-800">

            <button
              type="submit"
              className="flex items-center gap-2 rounded-xl bg-[#5e41de] px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-[#4f37c8] active:scale-95 disabled:cursor-not-allowed disabled:opacity-40 cursor-pointer"
            >
              <FiSend size={13} />
              Post
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
