"use client";
import { AlertDialog, Button } from "@heroui/react";
import { FiTrash2 } from "react-icons/fi";

const DeleteButton = ({ idea }) => {
  console.log(idea);
  const manageDelete = async () => {
    // await DeleteIdeasAction(idea._id);
  };
  return (
    <AlertDialog>
      <button className="flex items-center justify-center gap-1.5 rounded-xl border border-rose-200 px-3 py-2 text-xs font-semibold text-rose-500 transition-all duration-200 hover:border-rose-300 hover:bg-rose-50 dark:border-rose-500/30 dark:text-rose-400 dark:hover:bg-rose-500/10 cursor-pointer">
        <FiTrash2 size={12} />
      </button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete Idea permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{idea?.title}</strong> and all of
                its data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button
                onClick={() => manageDelete()}
                slot="close"
                variant="danger"
              >
                Delete Permanently
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default DeleteButton;
