import { useVideoModal } from "@/hooks/useVideoModal";
import { VideoModal } from "./modals/VideoModal";
import { useGetLowerBody1Exercises } from "@/hooks/exercise/useGetLowerBodyExercises";
import { useGetLowerBody2Exercises } from "@/hooks/exercise/useGetLowerBody2Exercises";
import { useGetUpperBody1Exercises } from "@/hooks/exercise/useGetUpperBody1Exercises";
import { ExerciseTest } from "@/queries/trainings";

export const PlanExercises = () => {
  const { data: lowerBody1Exercises } = useGetLowerBody1Exercises();
  const { data: upperBodyExercises } = useGetUpperBody1Exercises();
  const { data: lowerBody2Exercises } = useGetLowerBody2Exercises();

  const { onOpen, selectedExercise, setSelectedExercise } = useVideoModal();

  const onClick = (exercise: ExerciseTest) => {
    setSelectedExercise(exercise);
    onOpen();
  };

  return (
    <div className="flex flex-col gap-8 justify-center flex-wrap m-10">
      <div>
        <h1 className="font-bold text-4xl">Donji deo 1</h1>
        {lowerBody1Exercises?.map((exercise) => (
          <li
            className="flex items-center gap-2 cursor-pointer"
            key={exercise.id}
          >
            <h1
              className="font-light text-xl relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:hover:w-full after:transition-all after:bg-white after:h-1"
              key={exercise.id}
              onClick={() => onClick(exercise)}
            >
              {exercise.order}. {exercise.name}
            </h1>
          </li>
        ))}
      </div>
      <div>
        <h1 className="font-bold text-4xl">Gornji deo 1</h1>
        {upperBodyExercises?.map((exercise) => (
          <li
            className="flex items-center gap-2 cursor-pointer"
            key={exercise.id}
          >
            <h1
              className="font-light text-xl relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:hover:w-full after:transition-all after:bg-white after:h-1"
              key={exercise.id}
              onClick={() => onClick(exercise)}
            >
              {exercise.order}. {exercise.name}
            </h1>
          </li>
        ))}
      </div>
      <div>
        <h1 className="font-bold text-4xl">Donji deo 2</h1>
        {lowerBody2Exercises?.map((exercise) => (
          <li
            className="flex items-center gap-2 cursor-pointer"
            key={exercise.id}
          >
            <h1
              className="font-light text-xl relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:hover:w-full after:transition-all after:bg-white after:h-1"
              key={exercise.id}
              onClick={() => onClick(exercise)}
            >
              {exercise.order}. {exercise.name}
            </h1>
          </li>
        ))}
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
