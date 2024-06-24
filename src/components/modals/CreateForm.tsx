import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { useDialog } from "@/hooks/useDialog";

export const CreateForm = () => {
  const { setVideoFile, setExerciseTitle, setExerciseDescription, error } =
    useDialog();
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Label htmlFor="title">Naziv</Label>
        <Input
          id="title"
          className="col-span-3"
          placeholder="Naziv vezbe"
          onChange={(e) => setExerciseTitle(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="description">Opis</Label>
        <Textarea
          id="description"
          placeholder="Napisite opis"
          className="col-span-3"
          onChange={(e) => setExerciseDescription(e.target.value)}
        />
      </div>
      <div>
        <Label htmlFor="video">Dodaj video</Label>
        <Input
          type="file"
          id="video"
          accept="video/*"
          className="cursor-pointer"
          onChange={(e) => setVideoFile(e.target.files)}
        />
        {error && (
          <div className="text-destructive text-sm px-2">*{error.message}</div>
        )}
      </div>
    </div>
  );
};
