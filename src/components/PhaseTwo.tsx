import { ExerciseTest } from "@/queries/trainings";
import { useNavigate, useParams } from "react-router-dom";

export const PhaseTwo = ({
  exercises,
}: {
  exercises: ExerciseTest[] | undefined;
}) => {
  const navigate = useNavigate()
  const params = useParams()

  const onClick = (exerciseId: string) => {
    navigate(`/plans/${params.planId}/exercises/${exerciseId}`)
  };
  return (
    <>
      <div>
        <h1 className="font-bold text-2xl">Donji deo 1</h1>
        {exercises?.map((exercise) => {
          if (exercise.exerciseType == "lower1.2") {
            return (
              <li
                className="flex items-center gap-2 cursor-pointer"
                key={exercise.id}
              >
                <h1
                  className="font-light text-xl relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:hover:w-full after:transition-all after:bg-white after:h-1"
                  key={exercise.id}
                  onClick={() => onClick(exercise.id)}
                >
                  {exercise.order}. {exercise.name}
                </h1>
              </li>
            );
          }
        })}
      </div>
      <div>
        <h1 className="font-bold text-2xl">Gornji deo 1</h1>
        {exercises?.map((exercise) => {
          if (exercise.exerciseType == "upper1.2") {
            return (
              <li
                className="flex items-center gap-2 cursor-pointer"
                key={exercise.id}
              >
                <h1
                  className="font-light text-xl relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:hover:w-full after:transition-all after:bg-white after:h-1"
                  key={exercise.id}
                  onClick={() => onClick(exercise.id)}
                >
                  {exercise.order}. {exercise.name}
                </h1>
              </li>
            );
          }
        })}
      </div>
      <div>
        <h1 className="font-bold text-2xl">Donji deo 2</h1>
        {exercises?.map((exercise) => {
          if (exercise.exerciseType == "lower2.2") {
            return (
              <li
                className="flex items-center gap-2 cursor-pointer"
                key={exercise.id}
              >
                <h1
                  className="font-light text-xl relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:hover:w-full after:transition-all after:bg-white after:h-1"
                  key={exercise.id}
                  onClick={() => onClick(exercise.id)}
                >
                  {exercise.order}. {exercise.name}
                </h1>
              </li>
            );
          }
        })}
      </div>
      {params.planId === "OSlO6JVoATh8KNg7iF9A" && (
        <div>
          <h1 className="font-bold text-2xl">Donji deo 3</h1>
          {exercises?.map((exercise) => {
            if (exercise.exerciseType == "lower3.2") {
              return (
                <li
                  className="flex items-center gap-2 cursor-pointer"
                  key={exercise.id}
                >
                  <h1
                    className="font-light text-xl relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:hover:w-full after:transition-all after:bg-white after:h-1"
                    key={exercise.id}
                    onClick={() => onClick(exercise.id)}
                  >
                    {exercise.order}. {exercise.name}
                  </h1>
                </li>
              );
            }
          })}
        </div>
      )}
    </>
  );
};
