import { useDialog } from "@/hooks/useDialog";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { useHandleUpload } from "@/hooks/useHandleUpload";

export const Modal = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  const { isOpen, onClose } = useDialog();

  // const { handleUpload } = useHandleUpload();

  // const submit = () => {
  //   handleUpload();
  //   onClose();
  // };

  return (
    <Dialog onOpenChange={onClose} open={isOpen} modal defaultOpen={isOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        {children}
        {/* <DialogFooter>
          <Button onClick={submit}>Save changes</Button>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  );
};
