import { useGetExercisesByPlanId } from "@/hooks/exercise/useGetExercises";
import { useVideoModal } from "@/hooks/useVideoModal";
import { VideoModal } from "./modals/VideoModal";
import { Exercise } from "@/types";

export const PlanMenu = () => {
  const { data } = useGetExercisesByPlanId();

  const { onOpen, selectedExercise, setSelectedExercise } = useVideoModal();

  const onClick = (exercise: Exercise) => {
    setSelectedExercise(exercise);
    onOpen();
  };

  console.log(data);

  return (
    <div className="flex flex-col gap-2 justify-center flex-wrap mt-10">
      <h1 className="font-bold text-4xl">Gornji deo</h1>
      {data?.map((exercise) => {
        if (exercise.exerciseType == 1)
          return (
            <li
              className="flex items-center gap-2 cursor-pointer"
              key={exercise.id}
            >
              <h1
                className="font-light text-xl relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:hover:w-full after:transition-all after:bg-white after:h-1"
                key={exercise.id}
                onClick={() => onClick(exercise)}
              >
                {exercise.name}
              </h1>
            </li>
          );
      })}
      <h1 className="font-bold text-4xl">Donji deo</h1>
      {data?.map((exercise) => {
        if (exercise.exerciseType == 2)
          return (
            <li
              className="flex items-center gap-2 cursor-pointer"
              key={exercise.id}
            >
              <h1
                className="font-light text-xl relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:hover:w-full after:transition-all after:bg-white after:h-1"
                key={exercise.id}
                onClick={() => onClick(exercise)}
              >
                {exercise.name}
              </h1>
            </li>
          );
      })}
      {/* {day1?.map((exercise, index) => {
        return (
          <li className="flex items-center gap-2 cursor-pointer" key={index}>
            <h1
              className="font-light text-xl relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:hover:w-full after:transition-all after:bg-white after:h-1"
              key={index}
              onClick={() => onClick(exercise)}
            >
              {exercise.order}. {exercise.name}
            </h1>
          </li>
        );
      })} */}
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
