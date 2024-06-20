import { useNavigate } from "react-router-dom";
import { Plus } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetTrainingPlans } from "@/hooks/useGetTrainingPlans";
// import { useCreateExercise } from "@/hooks/useCreateExercise";

const ManagerPage = () => {
  // const { mutate } = useCreateExercise();
  const { data, isLoading } = useGetTrainingPlans();

  // const createExercise = () => {
  //   mutate();
  // };

  const navigate = useNavigate();

  return (
    <div className="md:max-w-[1600px] mx-auto w-full p-2 space-y-10">
      <div className="flex flex-wrap gap-6">
        {isLoading ? (
          <>
            <Skeleton className="w-[400px] aspect-video rounded-2xl" />
            <Skeleton className="w-[400px] aspect-video rounded-2xl" />
          </>
        ) : (
          data?.map((plan, index) => (
            <div
              key={index}
              onClick={() =>
                navigate(`/admin/dashboard/plans/${plan.id}/exercises`)
              }
              className="shadow-lg bg-black/5 hover:bg-black/15 transition duration-300 relative rounded-2xl w-[400px] aspect-video cursor-pointer "
            >
              <h1 className="text-2xl absolute bottom-0 left-0 p-4">
                {plan.name}
              </h1>
            </div>
          ))
        )}
        <div
          // TODO: onClick open modal for plan creation
          className="bg-pink-500/50 relative shadow-lg flex items-center justify-center rounded-2xl w-[400px] aspect-video cursor-pointer hover:bg-pink-600/50"
        >
          <Plus className="w-12 h-12 text-white" />
          <h1 className="absolute bottom-0 left-0 p-4 text-2xl text-white">
            Dodaj novi plan
          </h1>
        </div>
      </div>
      {/* <div className="flex flex-col items-center gap-4">
        <h2>Upload Video</h2>
        <div>
          <Input
            type="text"
            placeholder="Naziv vezbe"
            onChange={(e) => setExerciseName(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Opis vezbe"
            onChange={(e) => setExerciseDescription(e.target.value)}
          />
        </div>
        <div>
          <Input
            type="file"
            accept="video/*"
            onChange={(e) => setVideoFile(e.target.files)}
          />
        </div>
        <Button onClick={createExercise}>Upload</Button>
        {uploadProgress > 0 && (
          <div>
            <p>Upload Progress: {Math.round(uploadProgress)}%</p>
            <progress value={uploadProgress} max="100"></progress>
          </div>
        )}
      </div> */}
    </div>
  );
};

export default ManagerPage;
