import { useGetUserById } from "@/hooks/useGetUserById";
import { Button } from "../ui/button";
import { useVideoModal } from "@/hooks/useVideoModal";
import { useUpdateUserProgress } from "@/hooks/useUpdateUserProgress";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent } from "../ui/sheet";
import { ExerciseTest } from "@/queries/trainings";

export const VideoModal = ({
  selectedExercise,
}: {
  selectedExercise: ExerciseTest | null;
}) => {
  const { isOpen, onClose } = useVideoModal();
  const { data: userDetails } = useGetUserById();

  const { mutate } = useUpdateUserProgress();

  const completeExercise = (exerciseId: string) => {
    mutate({ exerciseId, user: userDetails });
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side={"right"} className="w-full flex flex-col">
        <div className="flex flex-col items-left gap-6 mt-10">
          <h1 className="font-bold text-3xl">{selectedExercise?.name}</h1>
          <video
            controls
            src={selectedExercise?.videoUrl}
            className="rounded-2xl md:rounded-xl aspect-video"
            poster={selectedExercise?.thumbnail}
            preload="metadata"
          />
        </div>
        <div>
          <h1 className="text-xl">Opis</h1>
          <div className="font-light text-lg flex leading-[22px]">
            <span className="mr-1">-</span>
            <p>{selectedExercise?.description1}</p>
          </div>
          <div className="font-light text-lg flex">
            <span className="mr-1">-</span>
            <p>{selectedExercise?.description2}</p>
          </div>
          {selectedExercise?.description3 && (
            <div className="font-light text-lg flex">
              <span className="mr-1">-</span>
              {selectedExercise?.description3}
            </div>
          )}
          <h1 className="mt-4 text-xl">Broj ponavljanja</h1>
          <ul className="font-light text-lg">
            {selectedExercise?.reps.map((rep) => (
              <li>{rep}</li>
            ))}
          </ul>
        </div>
        <Button
          onClick={() => completeExercise(selectedExercise?.id!)}
          className={cn(
            userDetails?.progress.includes(selectedExercise?.id!)
              ? "hidden"
              : "bg-pink-500"
          )}
        >
          Završi
        </Button>
      </SheetContent>
    </Sheet>
  );
};
