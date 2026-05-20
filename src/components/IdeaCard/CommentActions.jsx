"use client";
import {
  DeleteCommentAction,
  EditCommentAction,
} from "@/lib/Action/CrudAction";
import { useState, useTransition } from "react";
import { FiCheck, FiEdit2, FiTrash2, FiX } from "react-icons/fi";

export default function CommentActions({ ideasId, commentIndex, initialText }) {
  const [editing, setEditing] = useState(false);
  const [editText, setEditText] = useState(initialText);
  const [isPending, startTransition] = useTransition();

  const handleDelete = () => {
    
    startTransition(async () => {
      await DeleteCommentAction(ideasId, commentIndex);
    });
  };

  const handleEdit = () => {
    startTransition(async () => {
      const res = await EditCommentAction(ideasId, commentIndex, editText);
      if (res?.success) setEditing(false);
    });
  };

  if (editing) {
    return (
      <div className="mt-2 flex flex-col gap-2">
        <textarea
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          rows={2}
          className="w-full resize-none rounded-xl border border-[#5e41de]/30 bg-zinc-50 px-3 py-2 text-sm text-zinc-700 outline-none focus:border-[#5e41de]/60 dark:border-[#5e41de]/25 dark:bg-zinc-800 dark:text-zinc-200"
        />
        <div className="flex gap-2">
          <button
            onClick={handleEdit}
            disabled={isPending || !editText.trim()}
            className="flex items-center gap-1.5 rounded-lg bg-[#5e41de] px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-[#4f37c8] disabled:opacity-50 cursor-pointer"
          >
            <FiCheck size={12} />
            Save
          </button>
          <button
            onClick={() => {
              setEditing(false);
              setEditText(initialText);
            }}
            disabled={isPending}
            className="flex items-center gap-1.5 rounded-lg border border-zinc-200 px-3 py-1.5 text-xs font-semibold text-zinc-500 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800 cursor-pointer"
          >
            <FiX size={12} />
            Cancel
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-1.5 flex gap-1.5 opacity-0 transition-opacity group-hover:opacity-100">
      <button
        onClick={() => setEditing(true)}
        disabled={isPending}
        className="flex items-center gap-1 rounded-lg px-2 py-1 text-[11px] font-medium text-zinc-400 transition hover:bg-zinc-100 hover:text-[#5e41de] dark:hover:bg-zinc-800 dark:hover:text-[#a78bfa] cpursor-pointer"
      >
        <FiEdit2 size={11} />
        Edit
      </button>
      <button
        onClick={handleDelete}
        disabled={isPending}
        className="flex items-center gap-1 rounded-lg px-2 py-1 text-[11px] font-medium text-zinc-400 transition hover:bg-red-50 hover:text-red-500 dark:hover:bg-red-900/20 dark:hover:text-red-400 cursor-pointer"
      >
        <FiTrash2 size={11} />
        Delete
      </button>
    </div>
  );
}
