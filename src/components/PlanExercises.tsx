import { useVideoModal } from "@/hooks/useVideoModal";
import { VideoModal } from "./modals/VideoModal";
import { useGetLowerBody1Exercises } from "@/hooks/exercise/useGetLowerBodyExercises";
import { ExerciseTest } from "@/queries/trainings";
import { cn, progressValue } from "@/lib/utils";
import { useUpdateUserProgress } from "@/hooks/useUpdateUserProgress";
import { useGetUserById } from "@/hooks/useGetUserById";
import { Progress } from "./ui/progress";
import { useParams } from "react-router-dom";

export const PlanExercises = () => {
  const { planId } = useParams();
  const { data: exercises } = useGetLowerBody1Exercises(planId);
  const { mutate } = useUpdateUserProgress();
  const { onOpen, selectedExercise, setSelectedExercise } = useVideoModal();

  const onClick = (exercise: ExerciseTest) => {
    setSelectedExercise(exercise);
    onOpen();
  };

  const { data: userDetails } = useGetUserById();

  const completeExercise = (exerciseId: string) => {
    mutate({ exerciseId, user: userDetails });
  };

  return (
    <div className="flex flex-col gap-8 justify-center flex-wrap m-10">
      <Progress
        value={progressValue(userDetails?.progress.length, exercises?.length)}
      />
      <div>
        <h1 className="font-bold text-4xl">Donji deo 1</h1>
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
        <h1 className="font-bold text-4xl">Gornji deo 1</h1>
        {exercises?.map((exercise) => {
          if (exercise.exerciseType == "upper1") {
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
        <h1 className="font-bold text-4xl">Donji deo 2</h1>
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
      <VideoModal title={selectedExercise?.name!}>
        <video
          controls
          src={selectedExercise?.videoUrl}
          className="rounded-2xl md:rounded-xl w-[1400px] aspect-video"
          poster={selectedExercise?.thumbnail}
          preload="metadata"
        />

        <div>
          <h1>Opis</h1>
          <p className="font-light text-lg">Broj serija: 3</p>
          <p className="font-light text-lg">Odmor izmedju serija: 2 minuta</p>
          <p className="font-light text-lg">Odmor posle vezbe: 5 minuta</p>
          <h1 className="mt-4">Tips</h1>
          <p className="font-light text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            laboriosam molestiae sapiente atque recusandae voluptate amet
            voluptatibus earum aspernatur. Blanditiis.
          </p>
        </div>
      </VideoModal>
    </div>
  );
};
