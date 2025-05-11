import { useGetExerciseById } from "@/hooks/exercise/useGetExerciseById";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const ExercisePage = () => {
  const { exerciseId, planId } = useParams();

  if (!exerciseId || !planId) {
    return <div>Wrong URL</div>;
  }

  const { data: exercise } = useGetExerciseById(exerciseId, planId);

  useEffect(() => {
    localStorage.setItem("from", "exercise");
  }, []);

  return (
    <div className="max-w-[800px] my-20 mx-auto">
      <h1 className="text-2xl font-bold text-center">{exercise?.name}</h1>
      <video
        playsInline
        width="1000px"
        src={exercise?.videoUrl}
        controls
        controlsList="nodownload"
        className="rounded-2xl mt-2"
        poster={exercise?.thumbnail}
      />
      <div className="mt-4">
        <div className="font-semibold text-xl">Opis</div>
        <div className="flex">
          <div>-</div>
          <p>{exercise?.description1}</p>
        </div>
        <div className="flex">
          <div>-</div>
          <p>{exercise?.description2}</p>
        </div>
        {exercise?.description3 && (
          <div className="flex">
            <div>-</div>
            <p>{exercise.description3}</p>
          </div>
        )}
      </div>
      {exercise?.reps && (
        <div className="mt-4">
          <div className="font-semibold text-xl">Broj serija i ponavljanja</div>
          {exercise?.reps.map((rep, index) => (
            <div key={index} className="flex">
              <div className="w-4 flex justify-center mr-1">
                <div>{index + 1}.</div>
              </div>
              <div>{rep}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
