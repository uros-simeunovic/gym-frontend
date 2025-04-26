import { Link, useLocation, useParams } from "react-router-dom";
import { PhaseOne } from "./PhaseOne";
import { PhaseTwo } from "./PhaseTwo";
import { useGetPlanById } from "@/hooks/plan/useGetPlanById";
import { useGetExercisesByPlanId } from "@/hooks/exercise/useGetExercisesByPlanId";
import { Loader2 } from "lucide-react";
import { Accordion } from "./Accordion";
import { useEffect, useState } from "react";

export const PlanExercises = () => {
  const { planId } = useParams();
  const { data: exercises } = useGetExercisesByPlanId(planId);

  const { data: planDetails } = useGetPlanById();

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    if (localStorage.getItem("from") === "home") {
      localStorage.removeItem("openAccordion");
      setOpenIndex(null);
    } else {
      const savedIndex = localStorage.getItem("openAccordion");
      if (savedIndex !== null) {
        setOpenIndex(parseInt(savedIndex, 10));
      }
    }
  }, []);
  const toggle = (index: number) => {
    const newIndex = openIndex === index ? null : index;
    setOpenIndex(newIndex);

    if (newIndex !== null) {
      localStorage.setItem("openAccordion", newIndex.toString());
    } else {
      localStorage.removeItem("openAccordion");
    }
  };

  if (!exercises) {
    return (
      <div className="h-[100vh] w-full flex items-center justify-center">
        <h1 className="text-4xl">Ucitavanje...</h1>
        <Loader2 className="animate-spin" />
      </div>
    );
  }

  if (exercises?.length == 0) {
    return (
      <div className="h-[500px] flex flex-col items-center justify-center gap-4">
        <h1 className="text-4xl">PLAN NE POSTOJI</h1>
        <Link to={"/"} className="text-2xl underline text-[#f96294]">
          Vrati me na pocetnu stranicu
        </Link>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-8 justify-center flex-wrap mt-10">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-center">
          {planDetails?.name}
        </h1>
      </div>
      <div className="mb-32 flex flex-col gap-8">
        <Accordion
          toggle={toggle}
          openIndex={openIndex}
          index={0}
          title="Faza 1"
          height="h-[1040px]"
        >
          <PhaseOne exercises={exercises} />
        </Accordion>

        <Accordion
          openIndex={openIndex}
          toggle={toggle}
          index={1}
          title="Faza 2"
          height="h-[1000px]"
        >
          <PhaseTwo exercises={exercises} />
        </Accordion>
      </div>
    </div>
  );
};
