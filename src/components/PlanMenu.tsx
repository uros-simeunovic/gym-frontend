import { useGetExercisesByPlanId } from "@/hooks/exercise/useGetExercises";
import { useVideoModal } from "@/hooks/useVideoModal";
import { VideoModal } from "./modals/VideoModal";

export const PlanMenu = () => {
  const { data: exercises } = useGetExercisesByPlanId();
  // const { data: exerciseTypes } = useGetExerciseTypes();

  const { onOpen, title, setTitle, videoUrl, setVideoUrl } = useVideoModal();

  const onClick = (exerciseTitle: string, videoUrl: string) => {
    setTitle(exerciseTitle);
    setVideoUrl(videoUrl);
    onOpen();
  };

  const exerciseTypes = [
    {
      displayName: "Gornji trening 1",
      name: "gornji_trening_1",
    },
    {
      displayName: "Donji trening 1",
      name: "donji_trening_1",
    },
  ];

  return (
    <div className="flex flex-row gap-10 justify-center flex-wrap mt-10">
      {exerciseTypes?.map((exerciseType, index) => (
        <div className="flex flex-col items-start" key={index}>
          <h1 className="text-4xl" key={index}>
            {index + 1}. {exerciseType.displayName}
          </h1>
          <ul className="mt-4 pl-4">
            {exercises?.map((exercise, index) => {
              if (exercise.exerciseType == exerciseType.name)
                return (
                  <li
                    className="flex flex-row items-center gap-2 cursor-pointer"
                    key={index}
                  >
                    <h1
                      className="font-light text-xl relative after:absolute after:"
                      key={index}
                      onClick={() => onClick(exercise.name, exercise.videoUrl)}
                    >
                      {index + 1}. {exercise.name}
                    </h1>
                  </li>
                );
            })}
          </ul>
        </div>
      ))}
      <VideoModal title={title!}>
        <video
          controls
          src={videoUrl!}
          className="rounded-2xl md:rounded-xl w-[1400px] aspect-video"
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
