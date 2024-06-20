import { useDialog } from "@/hooks/useDialog";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Checkbox } from "./ui/checkbox";
import { useState } from "react";

export const EditModal = () => {
  const [videoEditIncluded, setVideoEditIncluded] = useState(false);

  const { isOpen, onClose, data } = useDialog();

  const submit = () => {
    onClose();
  };

  return (
    <Dialog onOpenChange={onClose} open={isOpen} modal defaultOpen={isOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edituj vezbu</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="title">Naziv</Label>
            <Input
              id="title"
              defaultValue={data?.name}
              className="col-span-3"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="description">Opis</Label>
            <Textarea
              id="description"
              defaultValue={data?.description}
              className="col-span-3"
            />
          </div>
          <div className="flex flex-row gap-2">
            <Checkbox
              id="video"
              checked={videoEditIncluded}
              onClick={() => setVideoEditIncluded(!videoEditIncluded)}
            />
            <label
              htmlFor="video"
              className="text-ri text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Azuriraj video
            </label>
          </div>
          <div className="h-[50px]">
            {videoEditIncluded && (
              <Input type="file" accept="video/*" className="cursor-pointer" />
            )}
          </div>
        </div>
        <DialogFooter>
          <Button onClick={submit}>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
