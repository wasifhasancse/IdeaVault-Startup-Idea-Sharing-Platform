"use client";
import { DeleteIdeasAction } from "@/lib/Action/CrudAction";
import { AlertDialog, Button, toast } from "@heroui/react";
import { useRouter } from "next/navigation";

const DeleteButton = ({ idea }) => {
  const router = useRouter();
  const manageDelete = async () => {
    const comfirm = await DeleteIdeasAction(idea._id);
    if (comfirm?.success) {
      toast.success(comfirm.message);
      router.refresh();
    }
  };
  return (
    <AlertDialog>
      <Button
        variant="danger"
        className="flex items-center justify-center gap-1.5 rounded-xl border border-rose-200 px-3 py-2 text-xs font-semibold text-rose-200 hover:text-rose-600 transition-all duration-200 hover:border-rose-300 hover:bg-rose-50 dark:border-rose-500/30 dark:text-rose-200 dark:hover:bg-rose-500/10 cursor-pointer"
      >
        Delete Project{" "}
      </Button>
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
                This will permanently delete <strong>{idea?.title}</strong> and
                all of its data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button
                onClick={() => manageDelete(idea._id)}
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
