import { useGetUserById } from "@/hooks/useGetUserById";
import { useUpdateUserProgress } from "@/hooks/useUpdateUserProgress";
import { useVideoModal } from "@/hooks/useVideoModal";
import { cn } from "@/lib/utils";
import { ExerciseTest } from "@/queries/trainings";

export const PhaseOne = ({
  exercises,
}: {
  exercises: ExerciseTest[] | undefined;
}) => {
  const { data: userDetails } = useGetUserById();

  const { mutate } = useUpdateUserProgress();

  const completeExercise = (exerciseId: string) => {
    mutate({ exerciseId, user: userDetails });
  };

  const { onOpen, setSelectedExercise } = useVideoModal();

  const onClick = (exercise: ExerciseTest) => {
    setSelectedExercise(exercise);
    onOpen();
  };

  return (
    <>
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
                  className={cn(
                    "w-5 h-5 rounded-full cursor-pointer",
                    userDetails?.progress.includes(exercise.id)
                      ? "bg-pink-500"
                      : "bg-gray-600"
                  )}
                  onClick={() => completeExercise(exercise.id)}
                />
                <h1
                  className="font-light text-xl relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:hover:w-full after:transition-all after:bg-white after:h-1"
                  key={exercise.id}
                  onClick={() => onClick(exercise)}
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
          if (exercise.exerciseType == "lower2") {
            return (
              <li
                className="flex items-center gap-2 cursor-pointer"
                key={exercise.id}
              >
                <div
                  className={cn(
                    "w-5 h-5 rounded-full cursor-pointer",
                    userDetails?.progress.includes(exercise.id)
                      ? "bg-pink-600"
                      : "bg-gray-600"
                  )}
                  onClick={() => completeExercise(exercise.id)}
                />
                <h1
                  className="font-light text-xl relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:hover:w-full after:transition-all after:bg-white after:h-1"
                  key={exercise.id}
                  onClick={() => onClick(exercise)}
                >
                  {exercise.order}. {exercise.name}
                </h1>
              </li>
            );
          }
        })}
      </div>
    </>
  );
};
