import { routes } from "@/data/trainings";
import { useSidebarMobile } from "@/hooks/useSidebarMobile";
import MuxPlayer from "@mux/mux-player-react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Workout = () => {
  const params = useParams();
  const { onClose } = useSidebarMobile();

  useEffect(() => {
    onClose();
  }, []);

  const currentWorkout = routes
    .map((route) =>
      route.workouts.filter((workout) => workout.href === params.workoutId)
    )
    .filter((element) => element != null)
    .flat()[0];

  console.log(currentWorkout.videoUrl);
  return (
    <div className="w-full flex flex-col md:w-[1000px] lg:w-[1300px] md:mx-auto p-4">
      <MuxPlayer
        // playbackId={currentWorkout.videoUrl}
        src={currentWorkout.videoUrl}
        className="w-full"
      />
      <div className="m-4 space-y-2">
        <h1 className="text-4xl font-semibold">{currentWorkout.title}</h1>
        <p>{currentWorkout.description}</p>
      </div>
    </div>
  );
};

export default Workout;
