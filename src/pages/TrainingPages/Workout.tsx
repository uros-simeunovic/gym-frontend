import { useGetExerciseById } from "@/hooks/exercise/useGetExerciseById";
import { useParams } from "react-router-dom";

const Workout = () => {
  const params = useParams();

  const { exerciseId } = params;

  const { data, isLoading } = useGetExerciseById(exerciseId);

  if (isLoading) {
    return (
      <div className="absolute left-0 top-0 right-0 bottom-0 flex items-center justify-center">
        <h1 className="text-8xl">LOADING</h1>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col md:flex-row md:w-[1000px] lg:w-[1300px] md:mx-auto p-4">
      <video
        src={data?.videoUrl}
        controls
        className="aspect-video w-[800px] rounded-2xl"
      />
      <div className="m-4 space-y-2">
        <h1 className="text-4xl font-semibold">{data?.name}</h1>
        <p>{data?.description}</p>
      </div>
    </div>
  );
};

export default Workout;
