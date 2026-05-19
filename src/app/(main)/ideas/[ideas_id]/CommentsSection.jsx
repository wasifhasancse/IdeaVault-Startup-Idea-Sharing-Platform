"use client";
import { authClient } from "@/lib/auth-client";
import { useEffect, useRef, useState } from "react";
import {
    FiCheck,
    FiEdit2,
    FiMessageSquare,
    FiSend,
    FiTrash2,
    FiX,
} from "react-icons/fi";

/* ── helpers ─────────────────────────────────────────── */
function timeAgo(dateStr) {
  const diff = Date.now() - new Date(dateStr).getTime();
  const m = Math.floor(diff / 60000);
  if (m < 1) return "just now";
  if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h ago`;
  const d = Math.floor(h / 24);
  if (d < 30) return `${d}d ago`;
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function initials(name = "") {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

const AVATAR_COLORS = [
  "bg-violet-500",
  "bg-blue-500",
  "bg-pink-500",
  "bg-emerald-500",
  "bg-orange-500",
  "bg-teal-500",
];
function avatarColor(name = "") {
  const sum = [...name].reduce((a, c) => a + c.charCodeAt(0), 0);
  return AVATAR_COLORS[sum % AVATAR_COLORS.length];
}

/* ── static seed comments ────────────────────────────── */
const SEED = [
  {
    id: "seed-1",
    userId: "seed-user-1",
    userName: "Alex Chen",
    text: "This is a brilliant concept! The market gap you've identified is very real — I've personally felt this pain point.",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 3).toISOString(),
  },
  {
    id: "seed-2",
    userId: "seed-user-2",
    userName: "Sarah Miller",
    text: "Have you looked into the regulatory landscape? That could be a significant hurdle depending on the target market.",
    timestamp: new Date(Date.now() - 1000 * 60 * 45).toISOString(),
  },
];

/* ── component ───────────────────────────────────────── */
export default function CommentsSection() {
  const { data: session } = authClient.useSession();
  const currentUser = session?.user ?? null;

  const [comments, setComments] = useState(SEED);
  const [text, setText] = useState("");
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");
  const editRef = useRef(null);

  /* focus edit textarea when entering edit mode */
  useEffect(() => {
    if (editId && editRef.current) editRef.current.focus();
  }, [editId]);

  /* ── actions ── */
  function addComment(e) {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed || !currentUser) return;
    setComments((prev) => [
      ...prev,
      {
        id: `user-${Date.now()}`,
        userId: currentUser.id,
        userName: currentUser.name,
        userImage: currentUser.image,
        text: trimmed,
        timestamp: new Date().toISOString(),
      },
    ]);
    setText("");
  }

  function startEdit(comment) {
    setEditId(comment.id);
    setEditText(comment.text);
  }

  function saveEdit(id) {
    const trimmed = editText.trim();
    if (!trimmed) return;
    setComments((prev) =>
      prev.map((c) => (c.id === id ? { ...c, text: trimmed } : c)),
    );
    setEditId(null);
  }

  function cancelEdit() {
    setEditId(null);
    setEditText("");
  }

  function deleteComment(id) {
    setComments((prev) => prev.filter((c) => c.id !== id));
  }

  const isOwn = (comment) => currentUser && comment.userId === currentUser.id;

  return (
    <section className="mt-10">
      {/* Section header */}
      <div className="mb-6 flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#5e41de]/10 dark:bg-[#5e41de]/20">
          <FiMessageSquare
            size={16}
            className="text-[#5e41de] dark:text-[#a78bfa]"
          />
        </span>
        <div>
          <h2 className="text-lg font-bold text-zinc-800 dark:text-zinc-100">
            Comments
          </h2>
          <p className="text-xs text-zinc-400 dark:text-zinc-500">
            {comments.length} {comments.length === 1 ? "comment" : "comments"}
          </p>
        </div>
      </div>

      {/* ── Comment list ── */}
      <div className="flex flex-col gap-4">
        {comments.length === 0 && (
          <div className="rounded-2xl border border-dashed border-[#5e41de]/20 bg-[#5e41de]/3 py-10 text-center dark:border-[#5e41de]/25 dark:bg-[#5e41de]/5">
            <FiMessageSquare
              size={32}
              className="mx-auto mb-2 text-[#5e41de]/25 dark:text-[#a78bfa]/25"
            />
            <p className="text-sm text-zinc-400 dark:text-zinc-500">
              No comments yet. Be the first!
            </p>
          </div>
        )}

        {comments.map((comment) => (
          <div
            key={comment.id}
            className="flex gap-3 rounded-2xl border border-zinc-100 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900/60"
          >
            {/* Avatar */}
            {comment.userImage ? (
              <img
                src={comment.userImage}
                alt={comment.userName}
                className="h-9 w-9 shrink-0 rounded-full object-cover ring-2 ring-[#5e41de]/15"
              />
            ) : (
              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white ${avatarColor(comment.userName)}`}
              >
                {initials(comment.userName)}
              </span>
            )}

            {/* Body */}
            <div className="min-w-0 flex-1">
              {/* Name + time */}
              <div className="mb-1.5 flex items-center gap-2">
                <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
                  {comment.userName}
                  {isOwn(comment) && (
                    <span className="ml-1.5 rounded-full bg-[#5e41de]/10 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-[#5e41de] dark:bg-[#5e41de]/20 dark:text-[#a78bfa]">
                      You
                    </span>
                  )}
                </span>
                <span className="text-[11px] text-zinc-400 dark:text-zinc-500">
                  {timeAgo(comment.timestamp)}
                </span>
              </div>

              {/* Text / edit mode */}
              {editId === comment.id ? (
                <div className="flex flex-col gap-2">
                  <textarea
                    ref={editRef}
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    rows={3}
                    className="w-full resize-none rounded-xl border border-[#5e41de]/30 bg-white px-3 py-2 text-sm text-zinc-700 outline-none focus:ring-2 focus:ring-[#5e41de]/20 dark:border-[#5e41de]/40 dark:bg-zinc-800 dark:text-zinc-200"
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={() => saveEdit(comment.id)}
                      className="flex items-center gap-1.5 rounded-lg bg-[#5e41de] px-3 py-1.5 text-xs font-semibold text-white hover:bg-[#4f37c8]"
                    >
                      <FiCheck size={12} /> Save
                    </button>
                    <button
                      onClick={cancelEdit}
                      className="flex items-center gap-1.5 rounded-lg border border-zinc-200 px-3 py-1.5 text-xs font-semibold text-zinc-500 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800"
                    >
                      <FiX size={12} /> Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {comment.text}
                </p>
              )}
            </div>

            {/* Own comment actions */}
            {isOwn(comment) && editId !== comment.id && (
              <div className="flex shrink-0 flex-col gap-1">
                <button
                  onClick={() => startEdit(comment)}
                  title="Edit"
                  className="flex h-7 w-7 items-center justify-center rounded-lg text-zinc-400 transition hover:bg-[#5e41de]/10 hover:text-[#5e41de] dark:hover:bg-[#5e41de]/20 dark:hover:text-[#a78bfa]"
                >
                  <FiEdit2 size={13} />
                </button>
                <button
                  onClick={() => deleteComment(comment.id)}
                  title="Delete"
                  className="flex h-7 w-7 items-center justify-center rounded-lg text-zinc-400 transition hover:bg-red-50 hover:text-red-500 dark:hover:bg-red-900/20 dark:hover:text-red-400"
                >
                  <FiTrash2 size={13} />
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* ── Add comment ── */}
      <div className="mt-6 rounded-2xl border border-[#5e41de]/12 bg-white/80 p-5 backdrop-blur-sm dark:border-[#5e41de]/20 dark:bg-zinc-900/60">
        {currentUser ? (
          <form onSubmit={addComment} className="flex flex-col gap-3">
            <div className="flex items-start gap-3">
              {currentUser.image ? (
                <img
                  src={currentUser.image}
                  alt={currentUser.name}
                  className="h-9 w-9 shrink-0 rounded-full object-cover ring-2 ring-[#5e41de]/20"
                />
              ) : (
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white ${avatarColor(currentUser.name)}`}
                >
                  {initials(currentUser.name)}
                </span>
              )}
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Share your thoughts on this idea…"
                rows={3}
                className="w-full resize-none rounded-xl border border-[#5e41de]/18 bg-white px-4 py-2.5 text-sm text-zinc-700 placeholder-zinc-400 outline-none transition-all focus:border-[#5e41de]/50 focus:ring-2 focus:ring-[#5e41de]/12 dark:border-[#5e41de]/25 dark:bg-zinc-800/60 dark:text-zinc-200 dark:placeholder-zinc-500"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={!text.trim()}
                className="flex items-center gap-2 rounded-xl bg-[#5e41de] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#4f37c8] disabled:cursor-not-allowed disabled:opacity-50"
              >
                <FiSend size={13} />
                Post Comment
              </button>
            </div>
          </form>
        ) : (
          <div className="flex flex-col items-center gap-3 py-4 text-center">
            <FiMessageSquare
              size={28}
              className="text-[#5e41de]/30 dark:text-[#a78bfa]/30"
            />
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              <a
                href="/signin"
                className="font-semibold text-[#5e41de] hover:underline dark:text-[#a78bfa]"
              >
                Sign in
              </a>{" "}
              to leave a comment.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
