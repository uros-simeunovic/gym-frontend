import { ExerciseTest } from "@/queries/trainings";
import { useNavigate, useParams } from "react-router-dom";

export const PhaseOne = ({
  exercises,
}: {
  exercises: ExerciseTest[] | undefined;
}) => {
  const navigate = useNavigate();
  const params = useParams();

  const onClick = (exerciseId: string) => {
    navigate(`/plans/${params.planId}/exercises/${exerciseId}`);
  };

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="font-bold text-2xl">Donji deo 1</h1>
        {exercises?.map((exercise) => {
          if (exercise.exerciseType == "lower1") {
            return (
              <li
                className="flex items-center gap-2 cursor-pointer"
                key={exercise.id}
              >
                <div
                  className="flex font-light text-xl relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:hover:w-full after:transition-all after:bg-white after:h-1"
                  key={exercise.id}
                  onClick={() => onClick(exercise.id)}
                >
                  <div className="w-4 flex justify-center mr-1">
                    <div>{exercise.order}.</div>
                  </div>
                  <div>{exercise.name}</div>
                </div>
              </li>
            );
          }
        })}
      </div>
      <div>
        <h1 className="font-bold text-2xl">Gornji deo</h1>
        {exercises?.map((exercise) => {
          if (exercise.exerciseType == "upper1") {
            return (
              <li
                className="flex items-center gap-2 cursor-pointer"
                key={exercise.id}
              >
                <div
                  className="flex font-light text-xl relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:hover:w-full after:transition-all after:bg-white after:h-1"
                  key={exercise.id}
                  onClick={() => onClick(exercise.id)}
                >
                  <div className="w-4 flex justify-center mr-1">
                    <div>{exercise.order}.</div>
                  </div>
                  <div>{exercise.name}</div>
                </div>
              </li>
            );
          }
        })}
      </div>
      <div>
        <h1 className="font-bold text-2xl">Donji deo 2</h1>
        {exercises?.map((exercise) => {
          if (exercise.exerciseType == "lower2") {
            return (
              <li
                className="flex items-center gap-2 cursor-pointer"
                key={exercise.id}
              >
                <div
                  className="flex font-light text-xl relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:hover:w-full after:transition-all after:bg-white after:h-1"
                  key={exercise.id}
                  onClick={() => onClick(exercise.id)}
                >
                  <div className="w-4 flex justify-center mr-1">
                    <div>{exercise.order}.</div>
                  </div>
                  <div>{exercise.name}</div>
                </div>
              </li>
            );
          }
        })}
      </div>
      {params.planId === "OSlO6JVoATh8KNg7iF9A" && (
        <div>
          <h1 className="font-bold text-2xl">Donji deo 3</h1>
          {exercises?.map((exercise) => {
            if (exercise.exerciseType == "lower3") {
              return (
                <li
                  className="flex items-center gap-2 cursor-pointer"
                  key={exercise.id}
                >
                  <div
                    className="flex font-light text-xl relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:hover:w-full after:transition-all after:bg-white after:h-1"
                    key={exercise.id}
                    onClick={() => onClick(exercise.id)}
                  >
                    <div className="w-4 flex justify-center mr-1">
                      <div>{exercise.order}.</div>
                    </div>
                    <div>{exercise.name}</div>
                  </div>
                </li>
              );
            }
          })}
        </div>
      )}
    </div>
  );
};
