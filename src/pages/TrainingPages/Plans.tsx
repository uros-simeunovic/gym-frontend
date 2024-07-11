import { PlanCard } from "../Components/PlanCard";

export const Plans = () => {
  return (
    <div className="w-full flex flex-wrap gap-20 items-center justify-center mt-20">
      <PlanCard price={33} planName="Plan 1" />
      <PlanCard price={50} planName="Plan 2" premium={true} />
    </div>
  );
};
