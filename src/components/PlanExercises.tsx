import { Link, useParams } from "react-router-dom";
import { PhaseOne } from "./PhaseOne";
import { PhaseTwo } from "./PhaseTwo";
import { useGetPlanById } from "@/hooks/plan/useGetPlanById";
import { useGetExercisesByPlanId } from "@/hooks/exercise/useGetExercisesByPlanId";
import { Loader2 } from "lucide-react";
import { Accordion } from "./Accordion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

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
      <div className="mb-20">
        <div className="rounded-[30px]">
          <div
            className={cn(
              "w-full text-left font-bold bg-white shadow-2xl rounded-[30px] relative overflow-hidden transition-all duration-300 ease-in-out h-[100px]",
              openIndex === 2 ? "h-max max-h-[1000px]" : "h-auto max-h-[100px]"
            )}
          >
            <div
              onClick={() => toggle(2)}
              className="font-bold text-4xl h-[100px] flex items-center pl-8 cursor-pointer relative"
            >
              <div>VAŽNO</div>
              <div className="h-[2px] rounded-2xl absolute bg-white left-5 right-5 -bottom-1" />
            </div>
            <div className="p-2 my-10 sm:p-10 top-[120px]">
              <video
                playsInline
                src="https://firebasestorage.googleapis.com/v0/b/gaingrlz.appspot.com/o/videos%2Ftutorijal.mp4?alt=media&token=184986c2-fd63-4c33-8193-36c0e836ef84"
                controls
                controlsList="nodownload"
                className="rounded-2xl mt-2"
                poster="https://firebasestorage.googleapis.com/v0/b/gaingrlz.appspot.com/o/thumbnails%2Ftutorijal.jpeg?alt=media&token=1f061cc4-b29e-49d8-ba64-b30060ef8af6"
              />
              <div className="mt-4 font-light">
                <div className="font-semibold text-xl">Opis</div>
                <p className="mb-2">
                  Tvoje ciljeve uzimam ozbiljno, jer su i moji. Sve što želiš da
                  ostvariš - možemo. Sa pravim planom, podrškom i verom u sebe,
                  uspeh nije pitanje da li, već kada.
                </p>
                <p className="mb-2">Spremna si. Idemo zajedno.</p>
                <p>Tvoj trener, Kristina Mitrović</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
