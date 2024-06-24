import { useDialog } from "@/hooks/useDialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { useState } from "react";
import { Checkbox } from "../ui/checkbox";
import { useDeleteExercise } from "@/hooks/exercise/useDeleteExercise";
import { Button } from "../ui/button";
import { useParams } from "react-router-dom";

export const EditForm = () => {
  const { data, onClose } = useDialog();
  const { mutate } = useDeleteExercise();

  const params = useParams();
  const { planId } = params;

  const onDelete = () => {
    mutate({ exerciseId: data?.id, planId: planId });
    onClose();
  };
  const [isVideoIncluded, setIsVideoIncluded] = useState(false);
  console.log(isVideoIncluded);
  return (
    <div className="flex flex-col gap-4 relative">
      <div className="flex flex-col gap-2">
        <Label htmlFor="title">Naziv</Label>
        <Input
          id="title"
          className="col-span-3"
          defaultValue={data?.name}
          placeholder="Naziv vezbe"
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
      <div className="flex flex-row  gap-2">
        <Label htmlFor="videoIncluded">Izmeni video</Label>
        <Checkbox
          id="videoIncluded"
          checked={isVideoIncluded}
          onCheckedChange={() => setIsVideoIncluded(!isVideoIncluded)}
        />
      </div>
      <div className="h-[80px]">
        {isVideoIncluded && (
          <div>
            <Label htmlFor="video">Dodaj video</Label>
            <Input
              type="file"
              id="video"
              accept="video/*"
              className="cursor-pointer"
            />
          </div>
        )}
      </div>
      <div className="absolute -bottom-14">
        <Button variant="destructive" className="w-[110px]" onClick={onDelete}>
          Delete
        </Button>
      </div>
    </div>
  );
};
