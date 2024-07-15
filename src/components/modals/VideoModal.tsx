import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "../ui/dialog";
import { useVideoModal } from "@/hooks/useVideoModal";

export const VideoModal = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  const { isOpen, onClose } = useVideoModal();

  return (
    <Dialog onOpenChange={onClose} open={isOpen} modal defaultOpen={isOpen}>
      <DialogContent aria-describedby="success-message">
        <DialogTitle className="text-4xl text-center">{title}</DialogTitle>
        <DialogDescription className="hidden">Modal</DialogDescription>
        {children}
      </DialogContent>
    </Dialog>
  );
};
