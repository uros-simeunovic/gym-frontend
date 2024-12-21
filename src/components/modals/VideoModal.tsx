import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
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
      <DialogContent
        aria-describedby="exercise-video-tips"
        className="rounded-2xl"
      >
        <DialogTitle className="text-4xl text-center">{title}</DialogTitle>
        <DialogDescription className="hidden">Modal</DialogDescription>
        {children}
        <DialogFooter>
          <Button className="bg-pink-500">Complete</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
