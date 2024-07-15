import { useGetExercisesByPlanId } from "@/hooks/exercise/useGetExercises";
import { useGetExerciseTypes } from "@/hooks/exerciseTypes/useGetExerciseTypes";
import { Button } from "./ui/button";
import { useVideoModal } from "@/hooks/useVideoModal";
import { VideoModal } from "./modals/VideoModal";
import { groupExercisesByType } from "@/lib/utils";
import { useEffect, useState } from "react";
import { ExercisesByType } from "@/types";

export const PlanMenu = () => {
  const [groupedExercises, setGroupedExercises] = useState<ExercisesByType>();

  const { data: exercises } = useGetExercisesByPlanId();
  const { data: exerciseTypes } = useGetExerciseTypes();

  const { onOpen, title, setTitle, videoUrl, setVideoUrl } = useVideoModal();

  const onClick = (exerciseTitle: string, videoUrl: string) => {
    setTitle(exerciseTitle);
    setVideoUrl(videoUrl);
    onOpen();
  };

  useEffect(() => {
    setGroupedExercises(groupExercisesByType(exercises!));
  }, []);
  console.log(groupedExercises);
  return (
    <div className="flex flex-row gap-10 justify-center flex-wrap mt-10">
      {exerciseTypes?.map((exerciseType, index) => (
        <div className="flex flex-col items-start" key={exerciseType.id}>
          <h1 className="text-4xl" key={index}>
            {exerciseType.displayName}
          </h1>
          {exercises?.map((exercise, index) => {
            if (exercise.exerciseType == exerciseType.name)
              return (
                <div className="flex flex-row items-center">
                  <div>{index}.</div>
                  <Button
                    className="font-light text-xl"
                    variant={"link"}
                    key={index}
                    onClick={() => onClick(exercise.name, exercise.videoUrl)}
                  >
                    {exercise.name}
                  </Button>
                </div>
              );
          })}
        </div>
      ))}
      <VideoModal title={title!}>
        <video controls src={videoUrl!} className="rounded-md w-full" />
      </VideoModal>
    </div>
  );
};
