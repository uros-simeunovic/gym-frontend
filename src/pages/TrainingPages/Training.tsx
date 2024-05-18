import { useNavigate, useParams } from "react-router-dom";
import { useGetTrainings } from "@/hooks/useGetTrainings";
import { Play } from "lucide-react";

const Training = () => {
  const params = useParams();
  const trainings = useGetTrainings();
  const navigate = useNavigate();

  console.log(params);

  return (
    <div className="w-full flex flex-col gap-4 md:w-[1000px] lg:w-[1300px] md:mx-auto px-4 mt-[10px]">
      <h1 className="font-bold text-6xl">{trainings[0].label}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        {trainings[0].workouts.map((workout, index) => (
          <div
            key={index}
            className="relative cursor-pointer hover:opacity-80 hover:scale-[1.01] transition-all duration-300 overflow-hidden"
            onClick={() =>
              navigate(
                `/trainings/${trainings[0].href}/workout/${workout.href}`
              )
            }
          >
            <Play
              color=""
              className="absolute h-10 w-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
            <img
              src={workout.imageUrl}
              className="rounded-2xl"
              alt="workout thumbnail"
            />
            <div className="font-semibold text-xl">
              <span className="text-pink-500">{index + 1}.</span>{" "}
              {workout.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Training;
