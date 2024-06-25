import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
// import { useDialog } from "@/hooks/useDialog";

interface CreateForm {
  title: string;
  description: string;
  videoFile: FileList | null;
  thumbnail: FileList | null;
  order: number;
}

export const CreateForm = () => {
  // const { setVideoFile, setExerciseTitle, setExerciseDescription, error } =
  //   useDialog();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateForm>();

  const onSubmit: SubmitHandler<CreateForm> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="title">Naziv</Label>
          <Input
            {...register("title")}
            // id="title"
            // className="col-span-3"
            // placeholder="Naziv vezbe"
            // onChange={(e) => setExerciseTitle(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="description">Opis</Label>
          <Textarea
            {...register("description")}
            id="description"
            placeholder="Napisite opis"
            className="col-span-3"
            // onChange={(e) => setExerciseDescription(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="video">Dodaj video</Label>
          <Input
            {...register("videoFile")}
            type="file"
            id="video"
            accept="video/*"
            className="cursor-pointer"
            // onChange={(e) => setVideoFile(e.target.files)}
          />
          {errors && (
            <div className="text-destructive text-sm px-2">
              *{errors.videoFile?.message}
            </div>
          )}
        </div>
        <div>
          <Label htmlFor="thumbnail">Dodaj thumbnail</Label>
          <Input
            {...register("thumbnail")}
            type="file"
            id="thumbnail"
            accept="/*"
            className="cursor-pointer"
          />
          {errors && (
            <div className="text-destructive text-sm px-2">
              *{errors.thumbnail?.message}
            </div>
          )}
        </div>
      </div>
    </form>
  );
};
