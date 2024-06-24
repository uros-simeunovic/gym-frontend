import { useNavigate, useParams } from "react-router-dom";
import { useGetExercises } from "@/hooks/exercise/useGetExercises";
import { Play } from "lucide-react";

const Training = () => {
  const { data, isLoading } = useGetExercises();
  const navigate = useNavigate();
  const params = useParams();

  const { planId } = params;

  return (
    <div className="w-full flex flex-col gap-4 md:w-[1000px] lg:w-[1300px] md:mx-auto px-4 mt-[10px]">
      {/* <h1 className="font-bold text-6xl">{data[0].label}</h1> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        {!isLoading &&
          data &&
          data.map((exercise, index) => (
            <div
              key={index}
              className="relative cursor-pointer hover:scale-[1.01] transition-all duration-300 overflow-hidden bg-white shadow-xl rounded-xl w-full aspect-video"
              onClick={() =>
                navigate(`/trainings/${planId}/exercise/${exercise.id}`)
              }
            >
              <Play
                color="black"
                className="absolute h-10 w-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              />
              {/* <img
                src={exercise.thumbnail}
                className="rounded-2xl"
                alt="workout thumbnail"
              /> */}
              <div className="font-semibold text-xl absolute bottom-0 left-0 p-4">
                <span className="text-pink-500">{index + 1}.</span>{" "}
                {exercise.name}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Training;
