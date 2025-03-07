// import { useVideoModal } from "@/hooks/useVideoModal";
// import { VideoModal } from "./modals/VideoModal";
import { progressValue } from "@/lib/utils";
import { useGetUserById } from "@/hooks/useGetUserById";
import { Link, useParams } from "react-router-dom";
import { Progress } from "./ui/progress";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { PhaseOne } from "./PhaseOne";
import { PhaseTwo } from "./PhaseTwo";
import { useGetPlanById } from "@/hooks/plan/useGetPlanById";
import { useGetExercisesByPlanId } from "@/hooks/exercise/useGetExercisesByPlanId";

export const PlanExercises = () => {
  const { planId } = useParams();
  const { data: exercises } = useGetExercisesByPlanId(planId);
  // const { selectedExercise } = useVideoModal();

  const { data: userDetails, isLoading } = useGetUserById();

  const { data: planDetails } = useGetPlanById();
  
  if (exercises?.length == 0) {
    return (
      <div className="h-[500px] flex flex-col items-center justify-center gap-4">
        <h1 className="text-4xl">PLAN NE POSTOJI</h1>
        <Link to={"/"} className="text-2xl underline text-pink-500">
          Vrati me na pocetnu stranicu
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8 justify-center flex-wrap mt-10">
      {!isLoading && (
        <div className="flex flex-col items-center gap-2">
          <h3 className="text-xl">
            Progres:
            <span className="px-1">
              {progressValue(
                userDetails?.progress.length,
                exercises?.length
              ).toFixed(0)}
            </span>
            %
          </h3>
          <Progress
            value={progressValue(
              userDetails?.progress.length,
              exercises?.length
            )}
          />
        </div>
      )}
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-center">{planDetails?.name}</h1>
      </div>
      <div>
        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem
            value={"faza-1"}
            className="border-none bg-pink-500 rounded-[30px]"
          >
            <AccordionTrigger className="bg-pink-500 rounded-full px-8 py-4 text-white font-bold text-4xl text-left w-full transition-all duration-300 ease-in-out">
              Faza 1
            </AccordionTrigger>
            <AccordionContent className="overflow-hidden transition-all duration-300 ease-in-out">
              <hr className="w-[90%] mx-auto" />
              <div className="px-8 py-6 text-white">
                <PhaseOne exercises={exercises} />
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value={"faza-2"}
            className="border-none bg-pink-500 rounded-[30px]"
          >
            <AccordionTrigger className="bg-pink-500 rounded-full px-8 py-4 text-white font-bold text-4xl text-left w-full transition-all duration-300 ease-in-out">
              Faza 2
            </AccordionTrigger>
            <AccordionContent className="overflow-hidden transition-all duration-300 ease-in-out">
              <hr className="w-[90%] mx-auto" />
              <div className="px-8 py-6 text-white">
                <PhaseTwo exercises={exercises} />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      {/* <VideoModal selectedExercise={selectedExercise} /> */}
    </div>
  );
};
