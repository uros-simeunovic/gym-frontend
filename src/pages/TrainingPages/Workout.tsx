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
    <div className="w-full hidden md:flex md:max-w-[1400px] md:mx-auto p-4">
      <video
        src={data?.videoUrl}
        controls
        className="aspect-video rounded-2xl"
      />
    </div>
  );
};

export default Workout;
