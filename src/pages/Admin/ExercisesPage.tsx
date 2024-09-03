import { CreateForm } from "@/components/modals/CreateForm";
import { EditForm } from "@/components/modals/EditForm";
import { Modal } from "@/components/modals/Modal";
import { Progress } from "@/components/ui/progress";
import { useDialog } from "@/hooks/useDialog";
import { useGetExercisesByPlanId } from "@/hooks/exercise/useGetExercises";
import { Edit, Plus } from "lucide-react";
import { Exercise } from "@/types";

export const ExercisesPage = () => {
  const { data } = useGetExercisesByPlanId();
  const { onOpen, setData, setCreate, isCreate } = useDialog();

  const { uploadProgress } = useDialog();

  const onClickEdit = (exercise: Exercise) => {
    setCreate(false);
    setData(exercise);
    onOpen();
  };

  const onClickCreate = () => {
    if (!uploadProgress) {
      setCreate(true);
      onOpen();
    }
  };

  return (
    <div className="md:max-w-[1600px] mx-auto w-full p-2 space-y-10">
      <div className="flex flex-wrap gap-6">
        {data?.map((exercise, index) => (
          <div key={index} className="flex flex-col gap-2">
            <div
              onClick={() => onClickEdit(exercise)}
              className="w-[400px] relative aspect-video bg-black/5 rounded-2xl shadow-lg cursor-pointer hover:scale-[1.01]"
            >
              <h1 className="absolute bottom-0 left-0 p-4 text-2xl">
                {exercise.name}
              </h1>
              <Edit className="w-6 h-6 absolute bottom-4 right-4" />
            </div>
          </div>
        ))}
        <div className="flex flex-col gap-2">
          <div
            onClick={onClickCreate}
            className="w-[400px] relative flex items-center justify-center aspect-video bg-black/5 rounded-2xl shadow-lg cursor-pointer hover:scale-[1.01]"
          >
            {uploadProgress > 0 && (
              <div className="absolute top-0 left-0 right-0 p-6">
                <p>Upload Progress: {Math.round(uploadProgress)}%</p>
                <Progress value={uploadProgress} className="border" />
              </div>
            )}
            <Plus className="w-12 h-12" />
            <h1 className="absolute left-0 bottom-0 p-4 text-2xl">
              Dodaj novu vezbu
            </h1>
          </div>
        </div>
      </div>
      {isCreate ? (
        <Modal title="Kreiraj vezbu">
          <CreateForm />
        </Modal>
      ) : (
        <Modal title="Izmeni vezbu">
          <EditForm />
        </Modal>
      )}
    </div>
  );
};
